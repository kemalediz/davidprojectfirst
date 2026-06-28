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

let renderer, scene, camera, sun, ambient;
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

// shared geometry / materials (created once, never disposed)
let boxGeo, gemGeo, planeGeo, partGeo, buildingMat;
const groundMats = []; // by palette index
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
  buildSelectGrid();
  return true;
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

    sun = new THREE.DirectionalLight(0xffffff, 1.1);
    sun.position.set(0.5, 1, 0.3).multiplyScalar(200);
    scene.add(sun);
    ambient = new THREE.AmbientLight(0x6f86b8, 0.9);
    scene.add(ambient);

    // shared resources
    boxGeo = new THREE.BoxGeometry(1, 1, 1);
    gemGeo = new THREE.OctahedronGeometry(2.4, 0);
    planeGeo = new THREE.PlaneGeometry(CHUNK_SIZE, CHUNK_SIZE);
    partGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    buildingMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    for (let i = 0; i < SKY.length; i++) {
      groundMats.push(new THREE.MeshLambertMaterial({ color: SKY[i].ground }));
    }

    renderer.domElement.addEventListener('mousedown', (e) => {
      if (e.button === 0 && started && !paused) clickAttackQueued = true;
    });

    resize();
    window.addEventListener('resize', resize);

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
  const w = canvasWrap.clientWidth || window.innerWidth;
  const h = canvasWrap.clientHeight || Math.round(window.innerHeight * 0.8);
  if (w === 0 || h === 0) return;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

// ---------------------------------------------------------------------------
// Figures
// ---------------------------------------------------------------------------
function makeFigure(color, scale) {
  const g = new THREE.Group();
  const s = scale || 1;
  const body = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color }));
  body.scale.set(3 * s, 6 * s, 2 * s);
  body.position.y = 3 * s;
  g.add(body);
  const head = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xf1c9a5 }));
  head.scale.set(2 * s, 2 * s, 2 * s);
  head.position.y = 7.2 * s;
  g.add(head);
  g.userData.mats = [body.material, head.material];
  return g;
}

function buildPlayer() {
  const group = makeFigure(hero.color, 1);
  // hero label sprite
  const label = makeSprite(hero.emoji + ' ' + hero.name, { font: 'bold 44px "Segoe UI Emoji", "Segoe UI", sans-serif' }, 5);
  label.position.y = 12;
  group.add(label);
  // Ghost Rider gets a bike box underneath
  if (hero.movement === 'bike') {
    const bike = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0x222222 }));
    bike.scale.set(3.4, 1.6, 7);
    bike.position.y = 0.8;
    group.add(bike);
    group.userData.mats.push(bike.material);
  }
  scene.add(group);

  // web line for swingers (Spider-Man)
  const webGeo = new THREE.BufferGeometry();
  webGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
  const web = new THREE.Line(webGeo, new THREE.LineBasicMaterial({ color: 0xffffff }));
  web.visible = false;
  scene.add(web);

  const state = { pos: { x: CHUNK_SIZE * 0.5, y: 0, z: CHUNK_SIZE * 0.5 }, vel: { x: 0, y: 0, z: 0 }, yaw: 0 };
  return { state, group, web, hp: hero.stats.maxHp, label, webGeo };
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

function buildEntityMesh(e, rec) {
  const flavor = entityFlavor(e);
  e.flavor = flavor;
  let mesh;
  let labelText = '';
  let labelOpts = null;
  let height = 0;
  if (e.type === 'villain' || e.type === 'robbery') {
    mesh = makeFigure(e.type === 'robbery' ? 0x111111 : 0x3a0d0d, 1.1);
    // tint torso villain-red
    mesh.userData.mats[0].color.set(e.type === 'robbery' ? 0x2b2b2b : 0x9b1c1c);
    labelText = (e.type === 'robbery' ? '💰 ' : '☠ ') + flavor.name;
    labelOpts = { color: '#ff7676' };
    height = 12;
    e.maxHp = e.hp;
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
    label.position.y = e.type === 'collectible' ? 7 : 11;
    mesh.add(label);
    rec.disposables.push(label.material);
  }
  mesh.position.set(e.x, e.y || 0, e.z);
  (mesh.userData.mats || []).forEach((m) => rec.disposables.push(m));
  return mesh;
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

  // entities
  for (const e of data.entities) {
    const er = { data: e };
    er.mesh = buildEntityMesh(e, rec);
    group.add(er.mesh);
    if (e.type === 'collectible') er.baseY = e.y || 12;
    if (e.type === 'villain' || e.type === 'robbery') er.hitCd = 0;
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
      if (hitIds.has(er.data.id)) {
        if (core.applyDamage(er.data, ATTACK_DAMAGE)) defeatEntity(er);
        else bump(er.mesh);
      }
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

function bump(mesh) {
  mesh.scale.multiplyScalar(0.85);
}

function updateProjectiles(dt) {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const pr = projectiles[i];
    core.stepProjectile(pr.p, dt);
    pr.mesh.position.set(pr.p.pos.x, pr.p.pos.y, pr.p.pos.z);
    pr.mesh.rotation.y += dt * 12;
    pr.life -= dt;
    let hit = false;
    const villains = gatherEntities(['villain', 'robbery']);
    for (const er of villains) {
      if (dist2(pr.p.pos.x, pr.p.pos.z, er.data.x, er.data.z) < PROJECTILE_HIT_R) {
        if (core.applyDamage(er.data, ATTACK_DAMAGE)) defeatEntity(er);
        else bump(er.mesh);
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
    ambient.color.set(sk.amb);
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

  updateHud();
  pressed.clear();
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
    (player.group.userData.mats || []).forEach((m) => m.dispose && m.dispose());
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
    resize();
    if (!started) {
      showSelect();
    } else {
      paused = false;
      els.paused.hidden = true;
      startLoop();
    }
  } else {
    stopLoop();
  }
}

function getState() {
  return {
    ready,
    started,
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
