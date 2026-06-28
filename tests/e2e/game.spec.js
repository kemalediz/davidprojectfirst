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

test('fullscreen toggle button exists, is clickable, and throws no errors', async ({ page }) => {
  const errors = trackErrors(page);
  await page.goto('/');
  await page.click('.nav-tab[data-view="game"]');
  await page.click('.mg-hero-card[data-hero-id="spider-man"]');
  await page.waitForFunction(
    () => window.MarvelGame && window.MarvelGame.getState().started === true,
    null,
    { timeout: 20_000 }
  );

  // The control is present and visible in the HUD.
  const btn = page.locator('.mg-fullscreen-btn');
  await expect(btn).toBeVisible();

  // Headless can't actually grant OS fullscreen, so stand in for the Fullscreen
  // API: record that it was called and emulate document.fullscreenElement
  // flipping, so we can assert the click really drove the API (catches a wiring
  // regression — a silent no-op stub couldn't).
  await page.evaluate(() => {
    window.__fsCalled = { req: 0, exit: 0 };
    const root = document.getElementById('view-game');
    let fsEl = null;
    Object.defineProperty(document, 'fullscreenElement', {
      configurable: true,
      get: () => fsEl,
    });
    if (root) {
      root.requestFullscreen = () => {
        window.__fsCalled.req++;
        fsEl = root;
        return Promise.resolve();
      };
    }
    document.exitFullscreen = () => {
      window.__fsCalled.exit++;
      fsEl = null;
      return Promise.resolve();
    };
  });

  // First click: enters fullscreen via requestFullscreen.
  await btn.click();
  await page.waitForTimeout(150);
  expect(await page.evaluate(() => window.__fsCalled.req)).toBe(1);
  expect(await page.evaluate(() => window.__fsCalled.exit)).toBe(0);
  expect(await page.evaluate(() => !!document.fullscreenElement)).toBe(true);

  // Second click: now in fullscreen, so it must exit via exitFullscreen.
  await btn.click();
  await page.waitForTimeout(150);
  expect(await page.evaluate(() => window.__fsCalled.req)).toBe(1);
  expect(await page.evaluate(() => window.__fsCalled.exit)).toBe(1);
  expect(await page.evaluate(() => !!document.fullscreenElement)).toBe(false);

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
