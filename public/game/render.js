// Marvelpedia open-world superhero game — RENDER / GAMEPLAY layer (browser).
//
// This module owns three.js, the DOM overlay (HUD, toasts, character select)
// and all per-frame glue. ALL world rules live in ./core.js (pure, unit-tested)
// — we never duplicate that logic here, we only drive it and draw the result.
//
// Movement / facing convention (reconciling core.js):
//   core.stepHero maps the "forward" input to  -heading(yaw)  (into the screen)
//   while core.meleeHits treats +heading(yaw) as the attack arc. To make the
//   game self-consistent (you attack where you move and the camera sits behind
//   you) we define forwardVec(yaw) = -heading(yaw) as "into the screen", place
//   the camera on the +heading side, and aim attacks along forwardVec — i.e. we
//   pass yaw+PI to meleeHits so its arc lines up with travel direction.

import * as THREE from 'three';
import * as core from './core.js';

const DATA = (typeof window !== 'undefined' && window.MARVEL_GAME_DATA) || {};
const { CHUNK_SIZE, LOAD_RADIUS } = core.CONFIG;

// ---------------------------------------------------------------------------
// Tunables
// ---------------------------------------------------------------------------
const PICKUP_RADIUS = 7;
const INTERACT_RADIUS = 12;
const VILLAIN_CHASE = 75;
const VILLAIN_CONTACT = 5.5;
const VILLAIN_SPEED = 9;
const VILLAIN_DAMAGE = 9;
const VILLAIN_HIT_COOLDOWN = 1.0;
const MELEE_RANGE = 16;
const MELEE_ARC = 110;
const ATTACK_DAMAGE = 45;
const ATTACK_COOLDOWN = 0.32;
const PROJECTILE_SPEED = 130;
const PROJECTILE_LIFE = 1.3;
const PROJECTILE_HIT_R = 9;
const SCORE = { defeat: 100, robbery: 250, rescue: 75, collect: 50 };

// Visual palettes, indexed by region.paletteIndex (0..5). sky/fog give the
// "infinite" horizon; ground + sun tint the world per country.
const SKY = [
  { sky: 0x9fc0ff, fog: 0x8fb4f5, ground: 0x2e4372, sun: 0xffffff, amb: 0x6f86b8 },
  { sky: 0x8d5dc4, fog: 0x5a3a86, ground: 0x3a255c, sun: 0xe6cfff, amb: 0x6b4f93 },
  { sky: 0xe7b07a, fog: 0xc48d5d, ground: 0x6b4a2e, sun: 0xfff0d6, amb: 0x9c7c54 },
  { sky: 0x84dba6, fog: 0x4aa777, ground: 0x244e35, sun: 0xeafff1, amb: 0x5a9c76 },
  { sky: 0xff9ec4, fog: 0xb14d78, ground: 0x5c2640, sun: 0xffe1ef, amb: 0x9c5677 },
  { sky: 0xb7b7b7, fog: 0x8f8f8f, ground: 0x3a3a3a, sun: 0xffffff, amb: 0x7a7a7a },
];

// ---------------------------------------------------------------------------
// Module state
// ---------------------------------------------------------------------------
let ready = false; // three.js renderer initialised
let started = false; // a hero is chosen and the simulation is live
let paused = false;
let running = false; // RAF loop scheduled
let rafId = null;
let lastTime = 0;
let elapsed = 0;

let renderer, scene, camera, sun, hemi, skyDome;
let canvasWrap, hud, els; // DOM
let hero = null; // chosen hero object from core.HEROES
let player = null; // { state, group, web, hp }
let camYaw = 0;
let score = 0;
let villainsDefeated = 0;
let collected = 0;
let activeMission = null;

const completed = new Set(); // entity ids that must never respawn
const chunks = new Map(); // "cx,cz" -> chunk record
const projectiles = [];
const particles = [];
let curRegionKey = null;

// input
const down = new Set();
const pressed = new Set();
let clickAttackQueued = false;

// shared geometry / materials (created once, never disposed). Everything here is
// referenced by many chunks/entities and lives for the whole session — per-chunk
// and per-hero meshes only ever reference these, so chunk-unload / hero-change
// disposes the small per-instance stuff (InstancedMesh buffers, themed materials)
// and never these shared singletons.
let boxGeo, gemGeo, planeGeo, partGeo, buildingMat;
let cylGeo, sphGeo, coneGeo, circleGeo; // for de-blockified detail + humanoids
let propMats = null; // { lampPost, lampGlow, trunk, foliage, tank, antenna }
const groundMats = []; // by palette index (textured roads/sidewalks)
const spriteTexCache = new Map();

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------
function key(cx, cz) {
  return cx + ',' + cz;
}
function headingVec(yaw) {
  return { x: Math.sin(yaw), z: Math.cos(yaw) };
}
function forwardVec(yaw) {
  return { x: -Math.sin(yaw), z: -Math.cos(yaw) };
}
function strHash(s) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}
function pick(arr, seed) {
  return arr && arr.length ? arr[seed % arr.length] : undefined;
}
function dist2(ax, az, bx, bz) {
  const dx = ax - bx;
  const dz = az - bz;
  return Math.hypot(dx, dz);
}

// A billboarded text/emoji label. Textures are cached by their full key so the
// hundreds of streamed entities share GPU memory.
function spriteTexture(text, opts) {
  const o = opts || {};
  const font = o.font || 'bold 52px "Segoe UI Emoji", "Segoe UI", sans-serif';
  const bg = o.bg || 'rgba(8,8,14,0.66)';
  const color = o.color || '#fff';
  const cacheKey = text + '|' + font + '|' + bg + '|' + color;
  let tex = spriteTexCache.get(cacheKey);
  if (tex) return tex;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = font;
  const metrics = ctx.measureText(text);
  const padX = 24;
  const w = Math.min(512, Math.ceil(metrics.width) + padX * 2);
  const h = 84;
  canvas.width = w;
  canvas.height = h;
  const c2 = canvas.getContext('2d');
  c2.font = font;
  c2.textAlign = 'center';
  c2.textBaseline = 'middle';
  if (bg !== 'none') {
    c2.fillStyle = bg;
    roundRect(c2, 2, 2, w - 4, h - 4, 16);
    c2.fill();
  }
  c2.fillStyle = color;
  c2.fillText(text, w / 2, h / 2 + 2);
  tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.userData = { aspect: w / h };
  spriteTexCache.set(cacheKey, tex);
  return tex;
}
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function makeSprite(text, opts, height) {
  const tex = spriteTexture(text, opts);
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(mat);
  const h = height || 6;
  sprite.scale.set(h * (tex.userData.aspect || 3), h, 1);
  return sprite;
}

// A per-entity health bar. Unlike labels these are dynamic (redrawn on every
// hit), so each gets its own canvas/texture/material — all three are pushed to
// the chunk's disposables and freed on unload / defeat.
function makeHealthBar(width, tierColor) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 22;
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(width, (width * canvas.height) / canvas.width, 1);
  const hb = { sprite, canvas, tex, mat, tierColor: tierColor || '#ff5252' };
  drawHealthBar(hb, 1);
  return hb;
}
function drawHealthBar(hb, ratio) {
  const ctx = hb.canvas.getContext('2d');
  const W = hb.canvas.width;
  const H = hb.canvas.height;
  const r = Math.max(0, Math.min(1, ratio));
  ctx.clearRect(0, 0, W, H);
  // tier-coloured border + dark track
  ctx.fillStyle = hb.tierColor;
  roundRect(ctx, 0, 0, W, H, 9);
  ctx.fill();
  ctx.fillStyle = 'rgba(8,8,12,0.85)';
  roundRect(ctx, 3, 3, W - 6, H - 6, 7);
  ctx.fill();
  // fill, green -> amber -> red as it drains
  const fw = (W - 10) * r;
  ctx.fillStyle = r > 0.5 ? '#46d36a' : r > 0.25 ? '#f0a020' : '#ed1d24';
  if (fw > 0) {
    roundRect(ctx, 5, 5, fw, H - 10, 5);
    ctx.fill();
  }
  hb.tex.needsUpdate = true;
}

// Bake a reusable facade texture: a faint mullion grid for the diffuse map (so
// per-instance region colour still shows through) plus a separate emissive map
// of warmly-lit windows, so flat building boxes read as glassy towers.
function makeFacadeTextures() {
  const cols = 5;
  const rows = 8;
  // diffuse: near-white with thin darker frames -> instanceColor tints it
  const cd = document.createElement('canvas');
  cd.width = 64;
  cd.height = 96;
  const xd = cd.getContext('2d');
  xd.fillStyle = '#f2f2f2';
  xd.fillRect(0, 0, cd.width, cd.height);
  xd.fillStyle = 'rgba(0,0,0,0.20)';
  for (let c = 0; c <= cols; c++) xd.fillRect((c * cd.width) / cols - 1, 0, 2, cd.height);
  for (let r = 0; r <= rows; r++) xd.fillRect(0, (r * cd.height) / rows - 1, cd.width, 2);
  const mapTex = new THREE.CanvasTexture(cd);
  mapTex.anisotropy = 4;
  // emissive: black with lit windows (some dark for life)
  const ce = document.createElement('canvas');
  ce.width = 64;
  ce.height = 96;
  const xe = ce.getContext('2d');
  xe.fillStyle = '#000';
  xe.fillRect(0, 0, ce.width, ce.height);
  const cw = ce.width / cols;
  const rh = ce.height / rows;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const lit = ((r * 7 + c * 13 + ((r * c) % 5)) % 10) < 6;
      xe.fillStyle = lit ? '#ffe9a8' : '#11131c';
      xe.fillRect(c * cw + 2, r * rh + 2, cw - 4, rh - 4);
    }
  }
  const emiTex = new THREE.CanvasTexture(ce);
  return { mapTex, emiTex };
}

// Per-palette ground texture: asphalt roads, lighter sidewalk blocks on the 4x4
// grid, dashed centre lines and the odd crosswalk — so streets aren't one flat
// colour.
function makeGroundTexture(palIdx) {
  const sk = SKY[palIdx];
  const size = 256;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const x = c.getContext('2d');
  const base = new THREE.Color(sk.ground);
  const road = base.clone().multiplyScalar(0.55);
  const walk = base.clone().multiplyScalar(1.45);
  const hex = (col) => '#' + col.getHexString();
  // asphalt everywhere
  x.fillStyle = hex(road);
  x.fillRect(0, 0, size, size);
  const grid = 4;
  const cell = size / grid;
  const margin = cell * 0.16;
  for (let gz = 0; gz < grid; gz++) {
    for (let gx = 0; gx < grid; gx++) {
      // sidewalk block around each building plot
      x.fillStyle = hex(walk);
      x.fillRect(gx * cell + margin, gz * cell + margin, cell - 2 * margin, cell - 2 * margin);
      x.fillStyle = hex(base);
      const p = margin * 0.45;
      x.fillRect(
        gx * cell + margin + p,
        gz * cell + margin + p,
        cell - 2 * margin - 2 * p,
        cell - 2 * margin - 2 * p
      );
    }
  }
  // dashed lane markings down the road centres
  x.fillStyle = 'rgba(240,210,90,0.85)';
  for (let g = 1; g < grid; g++) {
    const cx = g * cell;
    for (let yy = 6; yy < size; yy += 22) x.fillRect(cx - 2, yy, 4, 12); // vertical roads
    for (let xx = 6; xx < size; xx += 22) x.fillRect(xx, cx - 2, 12, 4); // horizontal roads
  }
  // a crosswalk
  x.fillStyle = 'rgba(235,235,235,0.8)';
  for (let i = 0; i < 6; i++) x.fillRect(cell - 14 + i * 5, cell * 2 - 16, 3, 32);
  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  return tex;
}

// ---------------------------------------------------------------------------
// DOM scaffolding (canvas + HUD + character select), built inside #view-game
// ---------------------------------------------------------------------------
function buildDom() {
  const view = document.getElementById('view-game');
  if (!view) return false;
  view.innerHTML = '';
  view.classList.add('mg-root');

  canvasWrap = document.createElement('div');
  canvasWrap.className = 'mg-canvas-wrap';
  view.appendChild(canvasWrap);

  hud = document.createElement('div');
  hud.className = 'mg-hud';
  hud.innerHTML = `
    <div class="mg-topleft">
      <div class="mg-hero">
        <span class="mg-hero-emoji"></span>
        <span class="mg-hero-name"></span>
      </div>
      <div class="mg-healthbar"><div class="mg-health-fill"></div><span class="mg-health-text"></span></div>
      <div class="mg-stats">
        <span class="mg-stat">⭐ <b class="mg-score">0</b></span>
        <span class="mg-stat">💥 <b class="mg-defeated">0</b></span>
        <span class="mg-stat">💎 <b class="mg-collected">0</b></span>
      </div>
    </div>
    <div class="mg-topright">
      <button type="button" class="mg-btn mg-change-hero">Change hero</button>
      <button type="button" class="mg-btn mg-pause-btn">Pause</button>
      <button type="button" class="mg-btn mg-icon-btn mg-fullscreen-btn" aria-label="Toggle fullscreen" title="Fullscreen">⛶</button>
      <button type="button" class="mg-btn mg-icon-btn mg-exit-btn" aria-label="Exit game" title="Back to site">✕</button>
    </div>
    <div class="mg-banner"><span class="mg-banner-country"></span><span class="mg-banner-dot">•</span><span class="mg-banner-city"></span></div>
    <div class="mg-mission">
      <div class="mg-mission-title">No active mission</div>
      <div class="mg-mission-text">Find an NPC (E) to take a mission.</div>
      <div class="mg-mission-prog"></div>
    </div>
    <div class="mg-toasts"></div>
    <div class="mg-hint">
      <b>Move</b> WASD · <b>Camera</b> ◀ ▶ · <b>Jump/Swing/Fly↑</b> Space · <b>Down</b> Shift · <b>Attack</b> J / Click · <b>Interact</b> E · <b>Pause</b> P
    </div>
    <div class="mg-paused" hidden><div>Paused</div><small>press P to resume</small></div>`;
  view.appendChild(hud);

  const select = document.createElement('div');
  select.className = 'mg-select';
  select.hidden = true;
  view.appendChild(select);

  els = {
    view,
    heroEmoji: hud.querySelector('.mg-hero-emoji'),
    heroName: hud.querySelector('.mg-hero-name'),
    healthFill: hud.querySelector('.mg-health-fill'),
    healthText: hud.querySelector('.mg-health-text'),
    score: hud.querySelector('.mg-score'),
    defeated: hud.querySelector('.mg-defeated'),
    collected: hud.querySelector('.mg-collected'),
    bannerCountry: hud.querySelector('.mg-banner-country'),
    bannerCity: hud.querySelector('.mg-banner-city'),
    missionTitle: hud.querySelector('.mg-mission-title'),
    missionText: hud.querySelector('.mg-mission-text'),
    missionProg: hud.querySelector('.mg-mission-prog'),
    toasts: hud.querySelector('.mg-toasts'),
    paused: hud.querySelector('.mg-paused'),
    select,
  };

  hud.querySelector('.mg-change-hero').addEventListener('click', () => showSelect());
  hud.querySelector('.mg-pause-btn').addEventListener('click', () => togglePause());
  hud.querySelector('.mg-fullscreen-btn').addEventListener('click', () => toggleFullscreen());
  hud.querySelector('.mg-exit-btn').addEventListener('click', () => exitToSite());
  buildSelectGrid();
  return true;
}

// Immersive fullscreen via the Fullscreen API on the game root. Headless
// browsers can reject the request (no user-activation / not allowed) — swallow
// both sync throws and async rejections so clicking it never logs an error.
function toggleFullscreen() {
  try {
    const el = (els && els.view) || document.getElementById('view-game');
    if (!el) return;
    if (!document.fullscreenElement) {
      const p = el.requestFullscreen && el.requestFullscreen();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } else {
      const p = document.exitFullscreen && document.exitFullscreen();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    }
  } catch (_) {
    /* fullscreen unsupported / blocked — ignore */
  }
}

// Always leave a way out of the immersive view: drop OS fullscreen if active,
// then return to the wiki via the existing nav (keeps app.js routing in charge).
function exitToSite() {
  try {
    if (document.fullscreenElement && document.exitFullscreen) {
      const p = document.exitFullscreen();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    }
  } catch (_) {
    /* ignore */
  }
  const tab = document.querySelector('.nav-tab[data-view="characters"]');
  if (tab) tab.click();
  else onView('characters');
}

function buildSelectGrid() {
  const cards = core.HEROES.map(
    (h) => `
    <button type="button" class="mg-hero-card" data-hero-id="${h.id}">
      <span class="mg-card-emoji">${h.emoji}</span>
      <span class="mg-card-name">${h.name}</span>
      <span class="mg-card-move">${h.movement}</span>
      <span class="mg-card-desc">${h.desc}</span>
      <span class="mg-card-stats">❤ ${h.stats.maxHp} · ⚡ ${h.stats.speed} · ↥ ${h.stats.jump}</span>
    </button>`
  ).join('');
  els.select.innerHTML = `
    <div class="mg-select-panel">
      <h2>Choose your hero</h2>
      <p class="mg-select-sub">An endless city awaits. Stop villains, rescue civilians, collect artifacts.</p>
      <div class="mg-hero-grid">${cards}</div>
    </div>`;
  els.select.querySelectorAll('.mg-hero-card').forEach((card) => {
    card.addEventListener('click', () => startGame(card.dataset.heroId));
  });
}

function showSelect() {
  paused = true;
  if (els.paused) els.paused.hidden = true;
  els.select.hidden = false;
}

// ---------------------------------------------------------------------------
// three.js init
// ---------------------------------------------------------------------------
function initRenderer() {
  if (ready) return true;
  if (!buildDom()) return false;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = false;
    canvasWrap.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(SKY[0].sky);
    scene.fog = new THREE.Fog(SKY[0].fog, CHUNK_SIZE * 1.2, CHUNK_SIZE * (LOAD_RADIUS + 0.6));

    camera = new THREE.PerspectiveCamera(60, 16 / 9, 0.5, CHUNK_SIZE * (LOAD_RADIUS + 2));

    // Soft, readable daylight: a directional "sun" for form + a hemisphere fill
    // that tints shade with the sky and bounces the ground colour up. No
    // realtime shadow maps (perf) — players get a cheap blob shadow instead.
    sun = new THREE.DirectionalLight(0xffffff, 1.0);
    sun.position.set(0.5, 1, 0.3).multiplyScalar(200);
    scene.add(sun);
    scene.add(sun.target);
    hemi = new THREE.HemisphereLight(SKY[0].sky, SKY[0].ground, 0.85);
    scene.add(hemi);

    // gradient sky dome (top sky colour -> horizon fog colour), recoloured per
    // region. Unfogged + follows the camera so the horizon always fades cleanly.
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        topColor: { value: new THREE.Color(SKY[0].sky) },
        bottomColor: { value: new THREE.Color(SKY[0].fog) },
      },
      vertexShader:
        'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader:
        'varying vec3 vP; uniform vec3 topColor; uniform vec3 bottomColor; void main(){ float h = clamp(normalize(vP).y*0.6+0.35,0.0,1.0); gl_FragColor = vec4(mix(bottomColor, topColor, h),1.0); }',
    });
    skyDome = new THREE.Mesh(new THREE.SphereGeometry(camera.far * 0.92, 24, 14), skyMat);
    skyDome.frustumCulled = false;
    scene.add(skyDome);

    // shared geometry
    boxGeo = new THREE.BoxGeometry(1, 1, 1);
    gemGeo = new THREE.OctahedronGeometry(2.4, 0);
    planeGeo = new THREE.PlaneGeometry(CHUNK_SIZE, CHUNK_SIZE);
    partGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    cylGeo = new THREE.CylinderGeometry(0.5, 0.5, 1, 12);
    sphGeo = new THREE.SphereGeometry(0.5, 14, 10);
    coneGeo = new THREE.ConeGeometry(0.5, 1, 14);
    circleGeo = new THREE.CircleGeometry(1, 28);

    // textured buildings (lit windows) + per-palette textured streets
    const facade = makeFacadeTextures();
    buildingMat = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      map: facade.mapTex,
      emissive: 0xffffff,
      emissiveMap: facade.emiTex,
      emissiveIntensity: 0.65,
    });
    for (let i = 0; i < SKY.length; i++) {
      groundMats.push(new THREE.MeshLambertMaterial({ map: makeGroundTexture(i) }));
    }

    // shared prop materials (street furniture / greenery), reused by every chunk
    propMats = {
      lampPost: new THREE.MeshLambertMaterial({ color: 0x30343c }),
      lampGlow: new THREE.MeshLambertMaterial({ color: 0xffe9a0, emissive: 0xffcf66, emissiveIntensity: 0.9 }),
      trunk: new THREE.MeshLambertMaterial({ color: 0x6b4a2e }),
      foliage: new THREE.MeshLambertMaterial({ color: 0x3f8f4a }),
      tank: new THREE.MeshLambertMaterial({ color: 0x8a8f98 }),
      antenna: new THREE.MeshLambertMaterial({ color: 0x52555c }),
    };

    renderer.domElement.addEventListener('mousedown', (e) => {
      if (e.button === 0 && started && !paused) clickAttackQueued = true;
    });

    resize();
    window.addEventListener('resize', resize);
    // Re-fit the renderer when entering/leaving OS fullscreen.
    document.addEventListener('fullscreenchange', resize);

    ready = true;
    window.__MARVELGAME_READY = true;
    return true;
  } catch (err) {
    console.error('MarvelGame: WebGL init failed', err);
    ready = false;
    return false;
  }
}

function resize() {
  if (!renderer || !canvasWrap) return;
  // Immersive: the game root fills the viewport below the sticky site header
  // (so the nav stays visible/clickable). In OS fullscreen it fills the screen.
  const root = els && els.view ? els.view : canvasWrap.parentElement;
  if (root) {
    if (document.fullscreenElement === root) {
      root.style.height = '100vh';
    } else {
      const header = document.querySelector('.site-header');
      const hb = header ? header.offsetHeight : 0;
      root.style.height = Math.max(360, window.innerHeight - hb) + 'px';
    }
  }
  const w = canvasWrap.clientWidth || window.innerWidth;
  const h = canvasWrap.clientHeight || window.innerHeight;
  if (w === 0 || h === 0) return;
  // device-pixel-ratio aware, capped at 2 so retina / fullscreen stays cheap
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

// ---------------------------------------------------------------------------
// Figures — assembled low-poly humanoids (head / torso / jointed arms+legs)
// out of shared primitives. Per-instance materials go into group.userData.mats
// so a hero change / chunk unload disposes them; the geometry is shared and
// never disposed.
// ---------------------------------------------------------------------------
function mkMat(color, emissive, intensity) {
  return new THREE.MeshLambertMaterial(
    emissive != null
      ? { color, emissive, emissiveIntensity: intensity != null ? intensity : 1 }
      : { color }
  );
}
function addMesh(parent, geo, mat, sx, sy, sz, px, py, pz) {
  const m = new THREE.Mesh(geo, mat);
  m.scale.set(sx, sy, sz);
  m.position.set(px || 0, py || 0, pz || 0);
  parent.add(m);
  return m;
}

// Build a rigged humanoid. `opts` carries colours + scale/bulk and an optional
// `decorate(parts, M, s, W)` that bolts on hero-specific detail (mask, cape,
// shield, hammer, arc-reactor…). Returns a Group whose userData has:
//   mats  — every material it owns (for disposal)
//   limbs — { armL, armR, legL, legR, head } pivots for animation
//   heroScale — vertical scale, so callers can place labels/shadows.
function buildHumanoid(opts) {
  const o = opts || {};
  const s = o.scale || 1;
  const W = o.bulk || 1;
  const mats = [];
  const M = (c, e, i) => {
    const m = mkMat(c, e, i);
    mats.push(m);
    return m;
  };
  const group = new THREE.Group();

  const torsoMat = M(o.torso);
  const limbMat = M(o.limb != null ? o.limb : o.torso);
  const foreMat = M(o.forearm != null ? o.forearm : o.limb != null ? o.limb : o.torso);
  const legMat = M(o.legs != null ? o.legs : o.torso);
  const skinMat = M(o.skin != null ? o.skin : 0xf1c9a5);
  const headMat = o.headMat != null ? M(o.headMat) : skinMat;

  addMesh(group, boxGeo, torsoMat, 3.0 * W * s, 4.4 * s, 1.9 * s, 0, 6.6 * s, 0); // torso
  const torso = group.children[group.children.length - 1];
  addMesh(group, boxGeo, legMat, 2.8 * W * s, 1.5 * s, 1.8 * s, 0, 4.3 * s, 0); // pelvis
  addMesh(group, cylGeo, skinMat, 0.6 * s, 0.8 * s, 0.6 * s, 0, 8.9 * s, 0); // neck

  const head = new THREE.Group();
  head.position.set(0, 9.9 * s, 0);
  group.add(head);
  addMesh(head, boxGeo, headMat, 2.0 * s, 2.0 * s, 1.9 * s, 0, 0, 0);

  const arm = (side) => {
    const p = new THREE.Group();
    p.position.set(side * (1.55 * W + 0.55) * s, 8.2 * s, 0);
    group.add(p);
    addMesh(p, cylGeo, limbMat, 0.78 * s, 2.1 * s, 0.78 * s, 0, -1.05 * s, 0); // upper arm
    addMesh(p, cylGeo, foreMat, 0.66 * s, 1.9 * s, 0.66 * s, 0, -3.05 * s, 0); // forearm
    addMesh(p, sphGeo, skinMat, 0.95 * s, 0.95 * s, 0.95 * s, 0, -4.1 * s, 0); // hand
    return p;
  };
  const leg = (side) => {
    const p = new THREE.Group();
    p.position.set(side * 0.85 * W * s, 4.1 * s, 0);
    group.add(p);
    addMesh(p, cylGeo, legMat, 0.95 * s, 2.1 * s, 0.95 * s, 0, -1.05 * s, 0); // thigh
    addMesh(p, cylGeo, legMat, 0.85 * s, 2.0 * s, 0.85 * s, 0, -3.05 * s, 0); // shin
    addMesh(p, boxGeo, legMat, 1.0 * s, 0.6 * s, 1.7 * s, 0, -4.1 * s, 0.4 * s); // foot
    return p;
  };
  const armL = arm(-1);
  const armR = arm(1);
  const legL = leg(-1);
  const legR = leg(1);

  group.userData.mats = mats;
  group.userData.limbs = { armL, armR, legL, legR, head };
  group.userData.heroScale = s;
  const parts = { group, torso, head, armL, armR, legL, legR, skinMat, M };
  if (o.decorate) o.decorate(parts, M, s, W);
  return group;
}

// Generic figure for streamed NPCs / civilians / villains. mats[0] stays the
// torso so the villain tint in buildEntityMesh keeps working.
function makeFigure(color, scale) {
  return buildHumanoid({ scale: scale || 1, torso: color, limb: color, legs: 0x2b2b34, skin: 0xf1c9a5 });
}

// Per-hero recognisable looks, selected by core hero id.
const HERO_LOOKS = {
  'spider-man': {
    scale: 1, bulk: 0.92, torso: 0xd71920, limb: 0xd71920, forearm: 0x153a86, legs: 0x153a86,
    skin: 0x153a86, headMat: 0xd71920,
    decorate(parts, M, s) {
      const eyeMat = M(0xffffff);
      const e = new THREE.Mesh(boxGeo, eyeMat);
      e.scale.set(0.75 * s, 0.5 * s, 0.18 * s);
      e.position.set(-0.45 * s, 0.18 * s, 0.98 * s);
      e.rotation.z = 0.32;
      parts.head.add(e);
      const e2 = e.clone();
      e2.position.x = 0.45 * s;
      e2.rotation.z = -0.32;
      parts.head.add(e2);
    },
  },
  'iron-man': {
    scale: 1, bulk: 1.05, torso: 0xc01616, limb: 0xf2b21a, forearm: 0xf2b21a, legs: 0xc01616,
    skin: 0xf2b21a, headMat: 0xf2b21a,
    decorate(parts, M, s) {
      const arc = new THREE.Mesh(sphGeo, M(0xffffff, 0x66e0ff, 2.2));
      arc.scale.set(1.0 * s, 1.0 * s, 0.5 * s);
      arc.position.set(0, 6.9 * s, 1.0 * s);
      parts.group.add(arc);
      const eye = new THREE.Mesh(boxGeo, M(0xbfefff, 0x66e0ff, 1.6));
      eye.scale.set(1.25 * s, 0.26 * s, 0.18 * s);
      eye.position.set(0, 0.22 * s, 0.98 * s);
      parts.head.add(eye);
    },
  },
  hulk: {
    scale: 1.22, bulk: 1.5, torso: 0x4f9c2c, limb: 0x4f9c2c, forearm: 0x4f9c2c, legs: 0x4f9c2c,
    skin: 0x4f9c2c, headMat: 0x4f9c2c,
    decorate(parts, M, s) {
      const shorts = new THREE.Mesh(boxGeo, M(0x4b2a78));
      shorts.scale.set(3.2 * s, 2.0 * s, 2.1 * s);
      shorts.position.set(0, 4.2 * s, 0);
      parts.group.add(shorts);
      const hair = new THREE.Mesh(boxGeo, M(0x16161c));
      hair.scale.set(2.15 * s, 0.85 * s, 2.0 * s);
      hair.position.set(0, 1.0 * s, -0.1 * s);
      parts.head.add(hair);
    },
  },
  'ghost-rider': {
    scale: 1, bulk: 1.0, torso: 0x161616, limb: 0x161616, forearm: 0x232323, legs: 0x161616,
    skin: 0xece6d6, headMat: 0xece6d6,
    decorate(parts, M, s) {
      const sock = M(0x0a0a0a);
      const eL = new THREE.Mesh(boxGeo, sock);
      eL.scale.set(0.45 * s, 0.5 * s, 0.25 * s);
      eL.position.set(-0.45 * s, 0.05 * s, 0.95 * s);
      parts.head.add(eL);
      const eR = eL.clone();
      eR.position.x = 0.45 * s;
      parts.head.add(eR);
      const flame = new THREE.Mesh(coneGeo, M(0xff7a00, 0xff5a00, 2.4));
      flame.scale.set(1.7 * s, 2.8 * s, 1.7 * s);
      flame.position.set(0, 2.0 * s, 0);
      parts.head.add(flame);
    },
  },
  'captain-america': {
    scale: 1, bulk: 1.05, torso: 0x21438f, limb: 0x21438f, forearm: 0xcfd2da, legs: 0x21438f,
    skin: 0xf1c9a5, headMat: 0x21438f,
    decorate(parts, M, s) {
      const star = new THREE.Mesh(boxGeo, M(0xffffff));
      star.scale.set(1.2 * s, 1.2 * s, 0.18 * s);
      star.position.set(0, 7.0 * s, 1.0 * s);
      parts.group.add(star);
      const stripe = new THREE.Mesh(boxGeo, M(0xc1121f));
      stripe.scale.set(3.18 * 1.05 * s, 0.7 * s, 1.96 * s);
      stripe.position.set(0, 5.1 * s, 0);
      parts.group.add(stripe);
      // round shield on the back
      const shield = new THREE.Mesh(cylGeo, M(0xc1121f));
      shield.scale.set(2.7 * s, 0.3 * s, 2.7 * s);
      shield.rotation.x = Math.PI / 2;
      shield.position.set(0, 6.6 * s, -1.25 * s);
      parts.group.add(shield);
      const shieldStar = new THREE.Mesh(cylGeo, M(0xffffff));
      shieldStar.scale.set(0.95 * s, 0.34 * s, 0.95 * s);
      shieldStar.rotation.x = Math.PI / 2;
      shieldStar.position.set(0, 6.6 * s, -1.5 * s);
      parts.group.add(shieldStar);
      const a = new THREE.Mesh(boxGeo, M(0xffffff));
      a.scale.set(0.45 * s, 0.7 * s, 0.18 * s);
      a.position.set(0, 0.5 * s, 0.98 * s);
      parts.head.add(a);
    },
  },
  thor: {
    scale: 1.05, bulk: 1.1, torso: 0x9aa0ad, limb: 0x9aa0ad, forearm: 0x70757f, legs: 0x3a3f49,
    skin: 0xf1c9a5, headMat: 0xf1c9a5,
    decorate(parts, M, s) {
      const helm = new THREE.Mesh(boxGeo, M(0xb9bfca));
      helm.scale.set(2.2 * s, 1.1 * s, 2.0 * s);
      helm.position.set(0, 0.75 * s, 0);
      parts.head.add(helm);
      const wMat = M(0xd8dde6);
      const wL = new THREE.Mesh(coneGeo, wMat);
      wL.scale.set(0.5 * s, 1.5 * s, 0.5 * s);
      wL.position.set(-1.25 * s, 1.0 * s, 0);
      wL.rotation.z = Math.PI / 2.1;
      parts.head.add(wL);
      const wR = new THREE.Mesh(coneGeo, wMat);
      wR.scale.set(0.5 * s, 1.5 * s, 0.5 * s);
      wR.position.set(1.25 * s, 1.0 * s, 0);
      wR.rotation.z = -Math.PI / 2.1;
      parts.head.add(wR);
      const cape = new THREE.Mesh(boxGeo, M(0xb01b2e));
      cape.scale.set(3.3 * s, 6.2 * s, 0.2 * s);
      cape.position.set(0, 6.0 * s, -1.25 * s);
      parts.group.add(cape);
      // Mjolnir, slung from the right hand so it swings with the arm
      const handle = new THREE.Mesh(cylGeo, M(0x6b4a2e));
      handle.scale.set(0.35 * s, 2.4 * s, 0.35 * s);
      handle.position.set(0, -5.1 * s, 0);
      parts.armR.add(handle);
      const hammer = new THREE.Mesh(boxGeo, M(0x9aa0ad));
      hammer.scale.set(1.7 * s, 1.1 * s, 1.1 * s);
      hammer.position.set(0, -6.4 * s, 0);
      parts.armR.add(hammer);
    },
  },
};

function buildHeroModel(h) {
  const look = HERO_LOOKS[h.id] || { scale: 1, torso: h.color, limb: h.color, legs: 0x2b2b34 };
  return buildHumanoid(look);
}

function buildPlayer() {
  const group = buildHeroModel(hero);
  const hs = group.userData.heroScale || 1;
  // hero name/emoji label above the head
  const label = makeSprite(hero.emoji + ' ' + hero.name, { font: 'bold 44px "Segoe UI Emoji", "Segoe UI", sans-serif' }, 5);
  label.position.y = 11 * hs + 3;
  group.add(label);

  // Ghost Rider rides a sleeker hellfire bike
  if (hero.movement === 'bike') {
    const mats = group.userData.mats;
    const frameMat = mkMat(0x18181c);
    const wheelMat = mkMat(0x2a2a30, 0xff5a00, 1.2);
    mats.push(frameMat, wheelMat);
    addMesh(group, boxGeo, frameMat, 1.7, 1.1, 7.2, 0, 2.3, 0.3); // body
    addMesh(group, boxGeo, frameMat, 0.7, 0.7, 2.4, 0, 3.4, 2.6); // tank
    const wf = addMesh(group, cylGeo, wheelMat, 2.6, 0.7, 2.6, 0, 1.5, 3.4);
    wf.rotation.z = Math.PI / 2;
    const wb = addMesh(group, cylGeo, wheelMat, 2.8, 0.8, 2.8, 0, 1.5, -3.4);
    wb.rotation.z = Math.PI / 2;
    addMesh(group, cylGeo, frameMat, 0.25, 2.2, 0.25, 0, 3.4, 3.6); // fork
    // sit: knees forward
    group.userData.limbs.legL.rotation.x = -1.1;
    group.userData.limbs.legR.rotation.x = -1.1;
  }

  scene.add(group);

  // contact / blob shadow (cheap stand-in for realtime shadows)
  const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32, depthWrite: false });
  const shadow = new THREE.Mesh(circleGeo, shadowMat);
  shadow.rotation.x = -Math.PI / 2;
  shadow.scale.set(5, 5, 5);
  scene.add(shadow);

  // web line for swingers (Spider-Man)
  const webGeo = new THREE.BufferGeometry();
  webGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
  const web = new THREE.Line(webGeo, new THREE.LineBasicMaterial({ color: 0xffffff }));
  web.visible = false;
  scene.add(web);

  const state = { pos: { x: CHUNK_SIZE * 0.5, y: 0, z: CHUNK_SIZE * 0.5 }, vel: { x: 0, y: 0, z: 0 }, yaw: 0 };
  return {
    state,
    group,
    web,
    hp: hero.stats.maxHp,
    label,
    webGeo,
    shadow,
    shadowMat,
    limbs: group.userData.limbs,
    walkPhase: 0,
  };
}

// ---------------------------------------------------------------------------
// Chunk streaming
// ---------------------------------------------------------------------------
function entityFlavor(e) {
  const seed = strHash(e.id);
  if (e.type === 'villain' || e.type === 'robbery') {
    const v = pick(DATA.villains, seed) || { name: 'Villain', taunt: '' };
    return { name: v.name, taunt: v.taunt };
  }
  if (e.type === 'civilian') return { name: pick(DATA.civilians, seed) || 'Civilian' };
  if (e.type === 'npc') {
    const n = pick(DATA.npcs, seed) || { name: 'Citizen', line: 'Help us, hero!' };
    return { name: n.name, line: n.line };
  }
  if (e.type === 'collectible') {
    const c = pick(DATA.collectibles, seed) || { name: 'Artifact', symbol: '💎' };
    return { name: c.name, symbol: c.symbol };
  }
  return {};
}

// Villain tiers read straight off entity.tier (set in core.generateChunk).
// Bigger + scarier as the tier rises; elite gets a menacing emissive aura.
const TIER_VIS = {
  grunt: { scale: 1.0, hpColor: '#ff8a8a', aura: null },
  tough: { scale: 1.28, hpColor: '#ffb24d', aura: { color: 0xff7a2a, scale: 8, opacity: 0.16 } },
  elite: { scale: 1.65, hpColor: '#c77dff', aura: { color: 0x8a1bd6, scale: 12, opacity: 0.26 } },
};

function buildEntityMesh(e, rec) {
  const flavor = entityFlavor(e);
  e.flavor = flavor;
  let mesh;
  let labelText = '';
  let labelOpts = null;
  let height = 0;
  if (e.type === 'villain' || e.type === 'robbery') {
    const tier = TIER_VIS[e.tier] || TIER_VIS.grunt;
    mesh = makeFigure(e.type === 'robbery' ? 0x111111 : 0x3a0d0d, 1.1 * tier.scale);
    // tint torso villain-red (robbers wear dark, elites a deep menace)
    mesh.userData.mats[0].color.set(
      e.type === 'robbery' ? 0x2b2b2b : e.tier === 'elite' ? 0x6e0d3a : 0x9b1c1c
    );
    labelText = (e.type === 'robbery' ? '💰 ' : '☠ ') + flavor.name + (e.tier === 'elite' ? ' ★' : '');
    labelOpts = { color: '#ff7676' };
    height = 12 * tier.scale;
    if (typeof e.maxHp !== 'number') e.maxHp = e.hp;

    // menacing aura sphere for tougher tiers
    if (tier.aura) {
      const auraMat = new THREE.MeshBasicMaterial({
        color: tier.aura.color,
        transparent: true,
        opacity: tier.aura.opacity,
        depthWrite: false,
      });
      const aura = new THREE.Mesh(sphGeo, auraMat);
      aura.scale.set(tier.aura.scale, tier.aura.scale * 1.4, tier.aura.scale);
      aura.position.y = 6 * tier.scale;
      mesh.add(aura);
      rec.disposables.push(auraMat);
    }

    // billboard health bar above the head
    const hb = makeHealthBar(7 * Math.max(1, tier.scale * 0.9), tier.hpColor);
    hb.sprite.position.y = height + 2.5;
    mesh.add(hb.sprite);
    mesh.userData.hb = hb;
    rec.disposables.push(hb.mat, hb.tex);
  } else if (e.type === 'civilian') {
    mesh = makeFigure(0x4f7fc4, 0.9);
    labelText = '🆘 ' + flavor.name;
    labelOpts = { color: '#bcd4ff' };
    height = 11;
  } else if (e.type === 'npc') {
    mesh = makeFigure(0xc9a227, 0.95);
    labelText = '❗ ' + flavor.name;
    labelOpts = { color: '#ffe79a' };
    height = 11;
  } else if (e.type === 'collectible') {
    mesh = new THREE.Group();
    const gem = new THREE.Mesh(gemGeo, new THREE.MeshLambertMaterial({ color: 0xffe066, emissive: 0x665200 }));
    mesh.add(gem);
    mesh.userData.mats = [gem.material];
    labelText = flavor.symbol || '💎';
    labelOpts = { bg: 'none', font: '60px "Segoe UI Emoji", sans-serif' };
    height = 6;
  } else {
    mesh = makeFigure(0x888888, 0.9);
  }

  if (labelText) {
    const label = makeSprite(labelText, labelOpts, height ? 4.5 : 4);
    label.position.y = e.type === 'collectible' ? 7 : Math.max(13, height + 5);
    mesh.add(label);
    rec.disposables.push(label.material);
  }
  mesh.position.set(e.x, e.y || 0, e.z);
  (mesh.userData.mats || []).forEach((m) => rec.disposables.push(m));
  return mesh;
}

// Compose a TRS matrix (rotation around Z only, for laid-down cylinders).
function trs(x, y, z, sx, sy, sz, rotZ) {
  const m = new THREE.Matrix4();
  if (rotZ) {
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, rotZ));
    m.compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(sx, sy, sz));
  } else {
    m.makeScale(sx, sy, sz);
    m.setPosition(x, y, z);
  }
  return m;
}
// Build one InstancedMesh from a list of matrices (shared geo+mat). The mesh's
// instance buffers are the only per-chunk allocation, freed on unload.
function instanceFrom(group, rec, geo, mat, matrices) {
  if (!matrices.length) return;
  const inst = new THREE.InstancedMesh(geo, mat, matrices.length);
  for (let i = 0; i < matrices.length; i++) inst.setMatrixAt(i, matrices[i]);
  inst.instanceMatrix.needsUpdate = true;
  inst.frustumCulled = false;
  group.add(inst);
  rec.disposables.push(inst);
}

// De-blockify a chunk: rooftop water tanks + antennae, plus street lamps and
// trees placed deterministically so streaming is stable. All reuse shared
// geometry + the persistent propMats, so nothing here leaks.
function addChunkDetail(group, rec, data, cx, cz) {
  const origin = data.origin;
  const cell = CHUNK_SIZE / 4;

  // rooftop detail
  const tanks = [];
  const ants = [];
  for (let i = 0; i < data.buildings.length; i++) {
    const b = data.buildings[i];
    const h = strHash(cx + ':' + cz + ':roof:' + i);
    const cxp = b.x + b.w / 2;
    const czp = b.z + b.d / 2;
    if (h % 3 === 0) {
      const r = Math.max(2, Math.min(b.w, b.d) * 0.22);
      tanks.push(trs(cxp, b.h + 2.2, czp, r * 2, 4.4, r * 2));
    } else if (h % 3 === 1) {
      ants.push(trs(cxp + b.w * 0.22, b.h + 6, czp - b.d * 0.22, 0.4, 12, 0.4));
    }
  }
  instanceFrom(group, rec, cylGeo, propMats.tank, tanks);
  instanceFrom(group, rec, boxGeo, propMats.antenna, ants);

  // street lamps at road intersections
  const posts = [];
  const glows = [];
  for (let gz = 1; gz < 4; gz++) {
    for (let gx = 1; gx < 4; gx++) {
      const h = strHash(cx + ':' + cz + ':lamp:' + gx + ',' + gz);
      if (h % 5 < 3) {
        const x = origin.x + gx * cell;
        const z = origin.z + gz * cell;
        posts.push(trs(x, 6, z, 0.6, 12, 0.6));
        glows.push(trs(x, 12.4, z, 1.7, 1.7, 1.7));
      }
    }
  }
  instanceFrom(group, rec, cylGeo, propMats.lampPost, posts);
  instanceFrom(group, rec, sphGeo, propMats.lampGlow, glows);

  // a few trees along the sidewalks
  const trunks = [];
  const leaves = [];
  for (let t = 0; t < 5; t++) {
    const h = strHash(cx + ':' + cz + ':tree:' + t);
    if (h % 3 === 0) continue;
    const x = origin.x + ((h % 1000) / 1000) * CHUNK_SIZE;
    const z = origin.z + (((h >> 10) % 1000) / 1000) * CHUNK_SIZE;
    trunks.push(trs(x, 3, z, 1.0, 6, 1.0));
    leaves.push(trs(x, 9, z, 6, 8, 6));
  }
  instanceFrom(group, rec, cylGeo, propMats.trunk, trunks);
  instanceFrom(group, rec, coneGeo, propMats.foliage, leaves);
}

function loadChunk(cx, cz) {
  const k = key(cx, cz);
  if (chunks.has(k)) return;
  const data = core.generateChunk(cx, cz, DATA, completed);
  const group = new THREE.Group();
  const rec = { cx, cz, group, region: data.region, entities: [], disposables: [] };

  // ground
  const ground = new THREE.Mesh(planeGeo, groundMats[data.region.paletteIndex]);
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(data.origin.x + CHUNK_SIZE / 2, -0.02, data.origin.z + CHUNK_SIZE / 2);
  group.add(ground);

  // buildings — one InstancedMesh per chunk, per-instance colour
  const n = data.buildings.length;
  const inst = new THREE.InstancedMesh(boxGeo, buildingMat, n);
  const m = new THREE.Matrix4();
  const col = new THREE.Color();
  for (let i = 0; i < n; i++) {
    const b = data.buildings[i];
    m.makeScale(b.w, b.h, b.d);
    m.setPosition(b.x + b.w / 2, b.h / 2, b.z + b.d / 2);
    inst.setMatrixAt(i, m);
    inst.setColorAt(i, col.set(b.color));
  }
  inst.instanceMatrix.needsUpdate = true;
  if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
  group.add(inst);
  rec.disposables.push(inst);

  // rooftop detail + street props (instanced, shared geo/mats -> leak-free).
  addChunkDetail(group, rec, data, cx, cz);

  // entities
  for (const e of data.entities) {
    const er = { data: e };
    er.mesh = buildEntityMesh(e, rec);
    group.add(er.mesh);
    if (e.type === 'collectible') er.baseY = e.y || 12;
    if (e.type === 'villain' || e.type === 'robbery') {
      er.hitCd = 0;
      er.hb = er.mesh.userData.hb || null;
      er.bob = strHash(e.id) % 100; // phase offset for idle bob
    }
    rec.entities.push(er);
  }

  scene.add(group);
  chunks.set(k, rec);
}

function unloadChunk(k) {
  const rec = chunks.get(k);
  if (!rec) return;
  scene.remove(rec.group);
  rec.disposables.forEach((d) => d && d.dispose && d.dispose());
  chunks.delete(k);
}

function updateStreaming() {
  const pc = core.chunkCoordForPos(player.state.pos.x, player.state.pos.z);
  const want = new Set(core.visibleChunks(pc.cx, pc.cz, LOAD_RADIUS).map((c) => key(c.cx, c.cz)));
  for (const k of chunks.keys()) if (!want.has(k)) unloadChunk(k);
  for (const c of core.visibleChunks(pc.cx, pc.cz, LOAD_RADIUS)) loadChunk(c.cx, c.cz);
}

// All loaded entities of given types (with live x/z) for combat queries.
function gatherEntities(types) {
  const out = [];
  for (const rec of chunks.values()) {
    for (const er of rec.entities) if (types.includes(er.data.type)) out.push(er);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Gameplay
// ---------------------------------------------------------------------------
function buildInput() {
  const space = down.has('Space');
  return {
    forward: down.has('KeyW'),
    back: down.has('KeyS'),
    left: down.has('KeyA'),
    right: down.has('KeyD'),
    yaw: camYaw,
    action: space,
    actionPressed: pressed.has('Space'),
    up: space, // fly ascend
    down: down.has('ShiftLeft') || down.has('ShiftRight'),
  };
}

function defeatEntity(er) {
  const e = er.data;
  completed.add(e.id);
  spawnParticles(er.mesh.position, e.type === 'robbery' ? 0xffd166 : 0xff5252);
  // remove from its chunk
  for (const rec of chunks.values()) {
    const i = rec.entities.indexOf(er);
    if (i >= 0) {
      rec.entities.splice(i, 1);
      rec.group.remove(er.mesh);
      break;
    }
  }
  villainsDefeated += 1;
  score += SCORE.defeat;
  if (e.type === 'robbery') {
    score += SCORE.robbery;
    toast('💰 Robbery stopped at the bank!');
  } else {
    toast('💥 Villain defeated' + (e.flavor ? ': ' + e.flavor.name : ''));
  }
  missionEvent('defeat');
}

// Apply a hit to a villain/robbery: damage scaled by the SELECTED hero's
// attackDamage (core rebalanced this — never hardcode), then either defeat it or
// give impactful feedback (knockback away from the source + squash + health-bar
// redraw/pop). Returns true when the entity was defeated.
function hitEntity(er, fromX, fromZ) {
  const e = er.data;
  const dmg = (hero && hero.attackDamage) || ATTACK_DAMAGE;
  if (core.applyDamage(e, dmg)) {
    defeatEntity(er);
    return true;
  }
  // knockback (tougher tiers resist), squash, and update the health bar
  const dx = e.x - fromX;
  const dz = e.z - fromZ;
  const len = Math.hypot(dx, dz) || 1;
  const kb = e.tier === 'elite' ? 1.6 : e.tier === 'tough' ? 3.2 : 5.2;
  e.x += (dx / len) * kb;
  e.z += (dz / len) * kb;
  er.mesh.position.x = e.x;
  er.mesh.position.z = e.z;
  bump(er.mesh);
  if (er.hb && e.maxHp) {
    drawHealthBar(er.hb, Math.max(0, e.hp) / e.maxHp);
    hbPop(er.hb);
  }
  return false;
}

function hbPop(hb) {
  if (hb._pop) return;
  const s = hb.sprite.scale;
  hb._pop = { x: s.x, y: s.y };
  s.set(s.x * 1.28, s.y * 1.28, 1);
  setTimeout(() => {
    if (hb._pop) {
      s.set(hb._pop.x, hb._pop.y, 1);
      hb._pop = null;
    }
  }, 110);
}

function attack() {
  const fwd = forwardVec(player.state.yaw);
  const px = player.state.pos.x;
  const pz = player.state.pos.z;
  if (hero.attackType === 'melee') {
    const targets = gatherEntities(['villain', 'robbery']);
    // meleeHits' arc is around +heading(yaw); we travel along -heading, so aim yaw+PI.
    const attacker = { x: px, z: pz, yaw: player.state.yaw + Math.PI };
    const hits = core.meleeHits(attacker, targets.map((t) => t.data), MELEE_RANGE, MELEE_ARC);
    const hitIds = new Set(hits.map((h) => h.id));
    for (const er of targets) {
      if (hitIds.has(er.data.id)) hitEntity(er, px, pz);
    }
  } else {
    const mat = new THREE.MeshBasicMaterial({ color: hero.color });
    const mesh = new THREE.Mesh(gemGeo, mat);
    mesh.scale.set(0.7, 0.7, 0.7);
    const py = player.state.pos.y + 6;
    mesh.position.set(px, py, pz);
    scene.add(mesh);
    projectiles.push({
      mesh,
      mat,
      p: { pos: { x: px, y: py, z: pz }, vel: { x: fwd.x * PROJECTILE_SPEED, y: 0, z: fwd.z * PROJECTILE_SPEED } },
      life: PROJECTILE_LIFE,
    });
  }
}

// Brief "got hit" squash that restores itself, rather than permanently
// shrinking the mesh on every hit.
function bump(mesh) {
  if (mesh.userData.bumpRestore) return; // already bumping
  mesh.userData.bumpRestore = { x: mesh.scale.x, y: mesh.scale.y, z: mesh.scale.z };
  mesh.scale.multiplyScalar(0.85);
  setTimeout(() => {
    const r = mesh.userData.bumpRestore;
    if (r) {
      mesh.scale.set(r.x, r.y, r.z);
      mesh.userData.bumpRestore = null;
    }
  }, 90);
}

function updateProjectiles(dt) {
  if (projectiles.length === 0) return;
  // Gather once per frame, not once per projectile (was O(N²)).
  const villains = gatherEntities(['villain', 'robbery']);
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const pr = projectiles[i];
    core.stepProjectile(pr.p, dt);
    pr.mesh.position.set(pr.p.pos.x, pr.p.pos.y, pr.p.pos.z);
    pr.mesh.rotation.y += dt * 12;
    pr.life -= dt;
    let hit = false;
    for (const er of villains) {
      if (completed.has(er.data.id)) continue; // already defeated this frame
      if (dist2(pr.p.pos.x, pr.p.pos.z, er.data.x, er.data.z) < PROJECTILE_HIT_R) {
        hitEntity(er, pr.p.pos.x, pr.p.pos.z);
        hit = true;
        break;
      }
    }
    if (hit || pr.life <= 0) {
      scene.remove(pr.mesh);
      pr.mat.dispose();
      projectiles.splice(i, 1);
    }
  }
}

function spawnParticles(pos, color) {
  for (let i = 0; i < 8; i++) {
    const mat = new THREE.MeshBasicMaterial({ color });
    const mesh = new THREE.Mesh(partGeo, mat);
    mesh.position.copy(pos);
    mesh.position.y += 4;
    scene.add(mesh);
    particles.push({
      mesh,
      mat,
      vel: { x: (Math.random() - 0.5) * 30, y: Math.random() * 25 + 8, z: (Math.random() - 0.5) * 30 },
      life: 0.6,
    });
  }
}

function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.vel.y -= 60 * dt;
    p.mesh.position.x += p.vel.x * dt;
    p.mesh.position.y += p.vel.y * dt;
    p.mesh.position.z += p.vel.z * dt;
    p.life -= dt;
    p.mat.opacity = Math.max(0, p.life / 0.6);
    p.mat.transparent = true;
    if (p.life <= 0) {
      scene.remove(p.mesh);
      p.mat.dispose();
      particles.splice(i, 1);
    }
  }
}

function updateEntities(dt) {
  const px = player.state.pos.x;
  const pz = player.state.pos.z;
  for (const rec of chunks.values()) {
    for (let i = rec.entities.length - 1; i >= 0; i--) {
      const er = rec.entities[i];
      const e = er.data;
      if (e.type === 'villain' || e.type === 'robbery') {
        er.hitCd = Math.max(0, er.hitCd - dt);
        const d = dist2(px, pz, e.x, e.z);
        if (d < VILLAIN_CHASE && d > VILLAIN_CONTACT) {
          const ux = (px - e.x) / d;
          const uz = (pz - e.z) / d;
          e.x += ux * VILLAIN_SPEED * dt;
          e.z += uz * VILLAIN_SPEED * dt;
          er.mesh.position.x = e.x;
          er.mesh.position.z = e.z;
          er.mesh.rotation.y = Math.atan2(ux, uz);
        }
        if (d < VILLAIN_CONTACT && er.hitCd === 0) {
          er.hitCd = VILLAIN_HIT_COOLDOWN;
          damagePlayer(VILLAIN_DAMAGE);
        }
        // menacing idle bob
        er.mesh.position.y = (e.y || 0) + Math.sin(elapsed * 3 + (er.bob || 0)) * 0.5;
      } else if (e.type === 'collectible') {
        er.mesh.rotation.y += dt * 1.6;
        er.mesh.position.y = (er.baseY || 12) + Math.sin(elapsed * 2 + e.x) * 1.6;
        if (dist2(px, pz, e.x, e.z) < PICKUP_RADIUS && Math.abs(player.state.pos.y + 5 - er.mesh.position.y) < 18) {
          completed.add(e.id);
          rec.entities.splice(i, 1);
          rec.group.remove(er.mesh);
          collected += 1;
          score += SCORE.collect;
          toast('💎 Found ' + (e.flavor ? e.flavor.name : 'an artifact') + '!');
          missionEvent('collect');
        }
      }
    }
  }
}

function damagePlayer(amount) {
  player.hp -= amount;
  if (player.hp <= 0) respawn();
}

function respawn() {
  player.hp = hero.stats.maxHp;
  score = Math.max(0, score - 50);
  player.state.vel = { x: 0, y: 0, z: 0 };
  player.state.pos.y = 40; // drop in safely
  toast('🩹 You were downed — respawning (−50)');
}

function nearestInteractable() {
  const px = player.state.pos.x;
  const pz = player.state.pos.z;
  let best = null;
  let bestD = INTERACT_RADIUS;
  for (const er of gatherEntities(['civilian', 'npc'])) {
    const d = dist2(px, pz, er.data.x, er.data.z);
    if (d < bestD) {
      bestD = d;
      best = er;
    }
  }
  return best;
}

function interact() {
  const er = nearestInteractable();
  if (!er) return;
  const e = er.data;
  if (e.type === 'civilian') {
    completed.add(e.id);
    for (const rec of chunks.values()) {
      const idx = rec.entities.indexOf(er);
      if (idx >= 0) {
        rec.entities.splice(idx, 1);
        rec.group.remove(er.mesh);
        break;
      }
    }
    score += SCORE.rescue;
    toast('🆘 Rescued ' + (e.flavor ? e.flavor.name : 'a civilian') + '!');
    missionEvent('rescue');
  } else if (e.type === 'npc') {
    const pc = core.chunkCoordForPos(player.state.pos.x, player.state.pos.z);
    const region = core.regionForChunk(pc.cx, pc.cz, DATA);
    const rng = core.rngForChunk(pc.cx, pc.cz);
    activeMission = core.makeMission(rng, DATA, { region, cx: pc.cx, cz: pc.cz });
    toast('🗨 ' + (e.flavor ? e.flavor.name + ': ' : '') + (e.flavor && e.flavor.line ? e.flavor.line : 'I have a job for you.'));
    updateMissionHud();
  }
}

function missionEvent(type) {
  if (!activeMission) return;
  const res = core.advanceMission(activeMission, type);
  updateMissionHud();
  if (res.completed) {
    score += (activeMission.reward && activeMission.reward.xp) || 100;
    toast('✅ Mission complete: ' + activeMission.title + '!');
    activeMission = null;
    updateMissionHud();
  }
}

// ---------------------------------------------------------------------------
// HUD
// ---------------------------------------------------------------------------
function toast(text) {
  if (!els) return;
  const el = document.createElement('div');
  el.className = 'mg-toast';
  el.textContent = text;
  els.toasts.appendChild(el);
  setTimeout(() => {
    el.classList.add('mg-toast-out');
    setTimeout(() => el.remove(), 400);
  }, 2400);
}

function updateMissionHud() {
  if (!els) return;
  if (!activeMission) {
    els.missionTitle.textContent = 'No active mission';
    els.missionText.textContent = 'Find an NPC (E) to take a mission.';
    els.missionProg.textContent = '';
    return;
  }
  els.missionTitle.textContent = '🎯 ' + activeMission.title;
  els.missionText.textContent = activeMission.text;
  els.missionProg.textContent = activeMission.progress + ' / ' + activeMission.target;
}

function updateHud() {
  if (!els) return;
  const pct = Math.max(0, Math.min(1, player.hp / hero.stats.maxHp));
  els.healthFill.style.width = (pct * 100).toFixed(0) + '%';
  els.healthFill.style.background = pct > 0.5 ? '#3fa75a' : pct > 0.25 ? '#f0a020' : '#ed1d24';
  els.healthText.textContent = Math.max(0, Math.round(player.hp)) + ' / ' + hero.stats.maxHp;
  els.score.textContent = score;
  els.defeated.textContent = villainsDefeated;
  els.collected.textContent = collected;
}

function updateRegion() {
  const pc = core.chunkCoordForPos(player.state.pos.x, player.state.pos.z);
  const region = core.regionForChunk(pc.cx, pc.cz, DATA);
  const k = region.countryName + '|' + region.cityName;
  if (k !== curRegionKey) {
    const first = curRegionKey === null;
    curRegionKey = k;
    els.bannerCountry.textContent = region.countryName;
    els.bannerCity.textContent = region.cityName;
    // sky / fog / lights per palette
    const sk = SKY[region.paletteIndex];
    scene.background.set(sk.sky);
    scene.fog.color.set(sk.fog);
    sun.color.set(sk.sun);
    hemi.color.set(sk.sky);
    hemi.groundColor.set(sk.ground);
    if (skyDome) {
      skyDome.material.uniforms.topColor.value.set(sk.sky);
      skyDome.material.uniforms.bottomColor.value.set(sk.fog);
    }
    if (!first) {
      toast('🗺 New area: ' + region.cityName + ', ' + region.countryName);
      missionEvent('travel');
    }
  }
}

// ---------------------------------------------------------------------------
// Per-frame update + loop
// ---------------------------------------------------------------------------
function update(dt) {
  // camera rotation
  const rot = 2.2 * dt;
  if (down.has('ArrowLeft')) camYaw += rot;
  if (down.has('ArrowRight')) camYaw -= rot;

  // hero physics
  core.stepHero(hero, player.state, buildInput(), dt);
  const ps = player.state.pos;
  player.group.position.set(ps.x, ps.y, ps.z);
  player.group.rotation.y = Math.atan2(forwardVec(player.state.yaw).x, forwardVec(player.state.yaw).z);

  animatePlayer(dt);

  // swing web visual
  if (player.state.swing) {
    const a = player.state.swing.anchor;
    const arr = player.webGeo.attributes.position.array;
    arr[0] = ps.x; arr[1] = ps.y + 7; arr[2] = ps.z;
    arr[3] = a.x; arr[4] = a.y; arr[5] = a.z;
    player.webGeo.attributes.position.needsUpdate = true;
    player.web.visible = true;
  } else {
    player.web.visible = false;
  }

  // interactions / combat (edge-triggered)
  if (pressed.has('KeyE')) interact();
  player.attackCd = Math.max(0, (player.attackCd || 0) - dt);
  if ((down.has('KeyJ') || clickAttackQueued) && player.attackCd === 0) {
    attack();
    player.attackCd = ATTACK_COOLDOWN;
  }
  clickAttackQueued = false;

  updateStreaming();
  updateEntities(dt);
  updateProjectiles(dt);
  updateParticles(dt);
  updateRegion();

  // camera follows from the +heading side, looking into the screen
  const back = headingVec(camYaw);
  const camDist = 30;
  const camHeight = 16;
  camera.position.set(ps.x + back.x * camDist, ps.y + camHeight, ps.z + back.z * camDist);
  camera.lookAt(ps.x, ps.y + 5, ps.z);

  // keep the sun roughly above the player so distant chunks stay lit
  sun.position.set(ps.x + 120, 260, ps.z + 80);
  sun.target.position.set(ps.x, 0, ps.z);
  sun.target.updateMatrixWorld();

  // sky dome rides with the camera so the gradient always surrounds the view
  if (skyDome) skyDome.position.copy(camera.position);

  updateHud();
  pressed.clear();
}

// Limb swing while moving, idle bob at rest, and a movement-mode lean. Keeps the
// player feeling alive without touching the core physics.
function animatePlayer(dt) {
  const limbs = player.limbs;
  if (!limbs) return;
  const v = player.state.vel;
  const speed = Math.hypot(v.x || 0, v.z || 0);
  const moving = speed > 0.5;
  player.walkPhase += dt * (4 + speed * 0.18);
  const swing = moving ? Math.sin(player.walkPhase) * Math.min(0.9, 0.25 + speed * 0.02) : 0;

  if (hero.movement === 'bike') {
    // legs stay tucked on the bike; just let the arms steer subtly
    limbs.armL.rotation.x = -0.5 + swing * 0.1;
    limbs.armR.rotation.x = -0.5 - swing * 0.1;
  } else {
    limbs.armL.rotation.x = swing;
    limbs.armR.rotation.x = -swing;
    limbs.legL.rotation.x = -swing;
    limbs.legR.rotation.x = swing;
  }

  // idle bob (only when essentially still and grounded)
  const bob = !moving ? Math.sin(elapsed * 2.2) * 0.25 : 0;
  player.group.position.y = player.state.pos.y + bob;

  // movement-mode lean: flyers + swinger pitch forward into travel, bike leans in
  let lean = 0;
  if (player.state.swing) lean = 0.5;
  else if (hero.movement === 'fly' && moving) lean = 0.3;
  else if (hero.movement === 'bike' && moving) lean = 0.22;
  else if (moving) lean = 0.12;
  player.group.rotation.x = lean;

  // contact shadow under the player: fade + shrink with altitude
  if (player.shadow) {
    const h = Math.max(0, player.state.pos.y);
    const k = Math.max(0.25, 1 - h / 80);
    player.shadow.position.set(player.state.pos.x, 0.06, player.state.pos.z);
    const sc = 5 * (player.group.userData.heroScale || 1) * k;
    player.shadow.scale.set(sc, sc, sc);
    player.shadowMat.opacity = 0.32 * k;
  }
}

function frame(now) {
  if (!running) {
    rafId = null;
    return;
  }
  rafId = requestAnimationFrame(frame);
  let dt = (now - lastTime) / 1000;
  lastTime = now;
  if (dt > 0.05) dt = 0.05;
  if (dt < 0) dt = 0;
  if (started && !paused) update(dt);
  if (renderer && scene && camera) renderer.render(scene, camera);
}

function startLoop() {
  if (rafId == null) {
    running = true;
    lastTime = performance.now();
    rafId = requestAnimationFrame(frame);
  }
}
function stopLoop() {
  running = false;
  if (rafId != null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  // Drop any keys held while navigating away so they don't "stick" and fire
  // on resume.
  down.clear();
  pressed.clear();
}

function togglePause() {
  if (!started) return;
  paused = !paused;
  els.paused.hidden = !paused;
}

// ---------------------------------------------------------------------------
// Game start / hero select
// ---------------------------------------------------------------------------
function clearWorld() {
  for (const k of Array.from(chunks.keys())) unloadChunk(k);
  for (const pr of projectiles) {
    scene.remove(pr.mesh);
    pr.mat.dispose();
  }
  projectiles.length = 0;
  for (const p of particles) {
    scene.remove(p.mesh);
    p.mat.dispose();
  }
  particles.length = 0;
  if (player) {
    scene.remove(player.group);
    scene.remove(player.web);
    if (player.shadow) scene.remove(player.shadow);
    (player.group.userData.mats || []).forEach((m) => m.dispose && m.dispose());
    // The swing web's line material + geometry, the blob-shadow material and the
    // hero name/emoji label's sprite material aren't in userData.mats — dispose
    // them explicitly.
    if (player.web && player.web.material && player.web.material.dispose) player.web.material.dispose();
    if (player.webGeo && player.webGeo.dispose) player.webGeo.dispose();
    if (player.shadowMat && player.shadowMat.dispose) player.shadowMat.dispose();
    if (player.label && player.label.material && player.label.material.dispose) player.label.material.dispose();
    player = null;
  }
  completed.clear();
}

function startGame(heroId) {
  if (!ready && !initRenderer()) return;
  hero = core.getHero(heroId) || core.HEROES[0];
  clearWorld();
  score = 0;
  villainsDefeated = 0;
  collected = 0;
  activeMission = null;
  curRegionKey = null;
  camYaw = 0;
  player = buildPlayer();
  player.attackCd = 0;
  els.heroEmoji.textContent = hero.emoji;
  els.heroName.textContent = hero.name;
  updateMissionHud();
  updateStreaming();
  updateRegion();
  updateHud();
  els.select.hidden = true;
  els.paused.hidden = true;
  started = true;
  paused = false;
  resize();
  startLoop();
}

// ---------------------------------------------------------------------------
// Public API for app.js
// ---------------------------------------------------------------------------
function onView(view) {
  if (view === 'game') {
    if (!ready) initRenderer();
    if (!ready) return; // WebGL unavailable
    document.body.classList.add('mg-active'); // immersive, full-bleed layout
    resize();
    if (!started) {
      showSelect();
    } else {
      paused = false;
      els.paused.hidden = true;
      startLoop();
    }
  } else {
    document.body.classList.remove('mg-active');
    stopLoop();
  }
}

function getState() {
  return {
    ready,
    started,
    running,
    heroId: hero ? hero.id : null,
    score,
    chunksLoaded: chunks.size,
    playerPos: player ? { x: player.state.pos.x, y: player.state.pos.y, z: player.state.pos.z } : { x: 0, y: 0, z: 0 },
  };
}

// ---------------------------------------------------------------------------
// Global key capture (only active while the Play view is showing)
// ---------------------------------------------------------------------------
const MOVE_CODES = new Set([
  'KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space',
  'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
]);

function gameActive() {
  const v = document.getElementById('view-game');
  return started && v && !v.hidden;
}

window.addEventListener('keydown', (e) => {
  if (!gameActive()) return;
  if (e.code === 'KeyP') {
    togglePause();
    e.preventDefault();
    return;
  }
  if (!down.has(e.code)) pressed.add(e.code);
  down.add(e.code);
  if (MOVE_CODES.has(e.code)) e.preventDefault();
});
window.addEventListener('keyup', (e) => {
  down.delete(e.code);
});

window.MarvelGame = { onView, getState, startGame };

// Honour a deep link straight to the Play view.
if (typeof location !== 'undefined' && location.hash === '#/game') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => onView('game'));
  } else {
    onView('game');
  }
}
