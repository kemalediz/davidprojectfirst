import { test, expect } from '@playwright/test';

// Collect console errors per page. We ignore expected network noise (Firebase
// not configured, favicon) so only real runtime errors fail the suite.
function trackErrors(page) {
  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      const t = msg.text();
      if (/favicon|firebase|firestore|net::ERR|Failed to load resource/i.test(t)) return;
      errors.push(t);
    }
  });
  page.on('pageerror', (err) => errors.push(String(err)));
  return errors;
}

test('home page loads with no console errors', async ({ page }) => {
  const errors = trackErrors(page);
  await page.goto('/');
  await expect(page.locator('#view-characters')).toBeVisible();
  await page.waitForTimeout(800);
  expect(errors).toEqual([]);
});

test('clicking the Play tab shows the character-select overlay', async ({ page }) => {
  trackErrors(page);
  await page.goto('/');
  await page.click('.nav-tab[data-view="game"]');
  await expect(page.locator('.mg-select')).toBeVisible();
  await expect(page.locator('.mg-hero-card')).toHaveCount(6);
});

test('selecting a hero starts the game with chunks loaded', async ({ page }) => {
  const errors = trackErrors(page);
  await page.goto('/');
  await page.click('.nav-tab[data-view="game"]');
  await expect(page.locator('.mg-select')).toBeVisible();

  await page.click('.mg-hero-card[data-hero-id="iron-man"]');

  // Overlay hides, canvas is present.
  await expect(page.locator('.mg-select')).toBeHidden();
  await expect(page.locator('#view-game canvas')).toBeVisible();

  // Renderer ready + simulation started + world streamed in.
  await page.waitForFunction(() => window.__MARVELGAME_READY === true, null, { timeout: 20_000 });
  await page.waitForFunction(
    () => window.MarvelGame && window.MarvelGame.getState().started === true,
    null,
    { timeout: 20_000 }
  );
  const state = await page.evaluate(() => window.MarvelGame.getState());
  expect(state.ready).toBe(true);
  expect(state.started).toBe(true);
  expect(state.heroId).toBe('iron-man');
  expect(state.chunksLoaded).toBeGreaterThan(0);
  expect(errors).toEqual([]);
});

test('movement keys move the player and throw no errors', async ({ page }) => {
  const errors = trackErrors(page);
  await page.goto('/');
  await page.click('.nav-tab[data-view="game"]');
  await page.click('.mg-hero-card[data-hero-id="ghost-rider"]');
  await page.waitForFunction(
    () => window.MarvelGame && window.MarvelGame.getState().started === true,
    null,
    { timeout: 20_000 }
  );

  const before = await page.evaluate(() => window.MarvelGame.getState().playerPos);

  // Hold "forward" for a moment.
  await page.locator('#view-game').click({ position: { x: 30, y: 30 } }).catch(() => {});
  await page.keyboard.down('KeyW');
  await page.waitForTimeout(900);
  await page.keyboard.up('KeyW');

  const after = await page.evaluate(() => window.MarvelGame.getState().playerPos);
  const moved =
    Math.abs(after.x - before.x) + Math.abs(after.y - before.y) + Math.abs(after.z - before.z);
  expect(moved).toBeGreaterThan(1);
  expect(errors).toEqual([]);
});

test('switching nav tabs pauses and resumes the loop without errors', async ({ page }) => {
  const errors = trackErrors(page);
  await page.goto('/');
  await page.click('.nav-tab[data-view="game"]');
  await page.click('.mg-hero-card[data-hero-id="thor"]');
  await page.waitForFunction(
    () => window.MarvelGame && window.MarvelGame.getState().started === true,
    null,
    { timeout: 20_000 }
  );

  // The loop is running while the game view is active.
  expect(await page.evaluate(() => window.MarvelGame.getState().running)).toBe(true);

  // Leave to Characters — the RAF loop must actually stop (CPU-leak guarantee).
  await page.click('.nav-tab[data-view="characters"]');
  await expect(page.locator('#view-characters')).toBeVisible();
  await page.waitForFunction(() => window.MarvelGame.getState().running === false, null, {
    timeout: 5_000,
  });
  expect(await page.evaluate(() => window.MarvelGame.getState().running)).toBe(false);

  // Back to the game — should resume, still started, no select overlay.
  await page.click('.nav-tab[data-view="game"]');
  await expect(page.locator('#view-game canvas')).toBeVisible();
  await page.waitForFunction(() => window.MarvelGame.getState().running === true, null, {
    timeout: 5_000,
  });
  const state = await page.evaluate(() => window.MarvelGame.getState());
  expect(state.running).toBe(true);
  expect(state.started).toBe(true);
  expect(state.heroId).toBe('thor');
  expect(errors).toEqual([]);
});
