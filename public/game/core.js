// marvelpedia open-world game — PURE LOGIC CORE (3D).
// No DOM, no canvas, no window/document, and CRUCIALLY no three.js / WebGL.
// Fully unit-testable in node (ESM). Up is +Y; the world lives on the XZ plane.
// The render layer (browser, three.js) imports these and never duplicates the
// logic; keep this file pure so vitest can exercise it under node.

export const CONFIG = {
  CHUNK_SIZE: 200,
  CHUNKS_PER_CITY: 4,
  CITIES_PER_COUNTRY: 3,
  GROUND_Y: 0,
  GRAVITY: 60,
  LOAD_RADIUS: 3,
};

const { GROUND_Y, GRAVITY, CHUNK_SIZE, CHUNKS_PER_CITY, CITIES_PER_COUNTRY } = CONFIG;

// ---------------------------------------------------------------------------
// Deterministic hashing / RNG
// ---------------------------------------------------------------------------

// 32-bit integer hash (fmix-style). Deterministic, works for negative n,
// always returns a uint32 in [0, 2^32).
export function hashInt(n) {
  let x = (n | 0) >>> 0; // int32 -> uint32 bit pattern (handles negatives)
  x = (x ^ 0x9e3779b9) >>> 0;
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b) >>> 0;
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b) >>> 0;
  x = (x ^ (x >>> 16)) >>> 0;
  return x >>> 0;
}

// Combine two signed ints into a uint32. Order matters: hash2(a,b)!=hash2(b,a).
// Uses a boost-style hash_combine so the two arguments mix asymmetrically.
export function hash2(a, b) {
  let h = hashInt(a) >>> 0;
  const k = hashInt(b) >>> 0;
  h ^= (k + 0x9e3779b9 + ((h << 6) >>> 0) + (h >>> 2)) >>> 0;
  return h >>> 0;
}

// Mulberry32 PRNG. Returns a function yielding floats in [0, 1).
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// A fresh PRNG seeded deterministically from chunk coords (cx, cz).
export function rngForChunk(cx, cz) {
  return mulberry32(hash2(cx, cz));
}

// ---------------------------------------------------------------------------
// Region / world naming
// ---------------------------------------------------------------------------

export function regionForChunk(cx, cz, data) {
  const cities = (data && data.cities) || [];
  const countries = (data && data.countries) || [];

  const cityCX = Math.floor(cx / CHUNKS_PER_CITY);
  const cityCZ = Math.floor(cz / CHUNKS_PER_CITY);
  const countryCX = Math.floor(cityCX / CITIES_PER_COUNTRY);
  const countryCZ = Math.floor(cityCZ / CITIES_PER_COUNTRY);

  const cityKey = hash2(cityCX, cityCZ);
  const countryKey = hash2(countryCX, countryCZ);

  const cityName = cities.length ? cities[cityKey % cities.length] : `City ${cityCX},${cityCZ}`;
  const countryName = countries.length
    ? countries[countryKey % countries.length]
    : `Country ${countryCX},${countryCZ}`;
  const paletteIndex = countryKey % 6;

  return { cx, cz, cityKey, countryKey, countryName, cityName, paletteIndex };
}

// ---------------------------------------------------------------------------
// Heroes
// ---------------------------------------------------------------------------

export const HEROES = [
  {
    id: 'spider-man',
    name: 'Spider-Man',
    emoji: '🕷️',
    color: '#e62429',
    movement: 'swing',
    attackType: 'melee',
    attackDamage: 26,
    stats: { maxHp: 100, speed: 18, jump: 22 },
    desc: 'Swings between rooftops on webs and hits up close.',
  },
  {
    id: 'iron-man',
    name: 'Iron Man',
    emoji: '🤖',
    color: '#f5b700',
    movement: 'fly',
    attackType: 'projectile',
    attackDamage: 30,
    stats: { maxHp: 120, speed: 24, jump: 16 },
    desc: 'Flies freely in 3D and fires repulsor beams from range.',
  },
  {
    id: 'hulk',
    name: 'Hulk',
    emoji: '💚',
    color: '#5aa02c',
    movement: 'jump',
    attackType: 'melee',
    attackDamage: 42,
    stats: { maxHp: 220, speed: 16, jump: 40 },
    desc: 'Leaps enormous distances and smashes everything nearby.',
  },
  {
    id: 'ghost-rider',
    name: 'Ghost Rider',
    emoji: '🏍️',
    color: '#ff7a00',
    movement: 'bike',
    attackType: 'melee',
    attackDamage: 32,
    stats: { maxHp: 140, speed: 42, jump: 12 },
    desc: 'Rides a hellfire bike at blazing speed, chain in hand.',
  },
  {
    id: 'captain-america',
    name: 'Captain America',
    emoji: '🛡️',
    color: '#2a4b9b',
    movement: 'run',
    attackType: 'projectile',
    attackDamage: 28,
    stats: { maxHp: 130, speed: 22, jump: 20 },
    desc: 'Sprints, double-jumps and hurls his shield.',
  },
  {
    id: 'thor',
    name: 'Thor',
    emoji: '⚡',
    color: '#8a6dff',
    movement: 'fly',
    attackType: 'projectile',
    attackDamage: 38,
    stats: { maxHp: 160, speed: 26, jump: 14 },
    desc: 'Soars through the sky and throws Mjolnir.',
  },
];

export function getHero(id) {
  return HEROES.find((h) => h.id === id);
}

// ---------------------------------------------------------------------------
// Physics (3D). Up is +Y; horizontal motion is on the XZ plane.
// ---------------------------------------------------------------------------

// Heading-forward vector in the XZ plane for a given yaw (radians).
// yaw=0 faces +Z; this is shared by movement facing and melee arcs.
function headingVec(yaw) {
  return { x: Math.sin(yaw), z: Math.cos(yaw) };
}

// World-space unit move direction from the directional input, rotated by yaw.
// Returns null when no direction is pressed.
function moveDir(input) {
  const ix = (input.right ? 1 : 0) - (input.left ? 1 : 0);
  const iz = (input.back ? 1 : 0) - (input.forward ? 1 : 0); // forward -> -Z (local)
  if (ix === 0 && iz === 0) return null;
  const yaw = typeof input.yaw === 'number' ? input.yaw : 0;
  const cos = Math.cos(yaw);
  const sin = Math.sin(yaw);
  // rotate (ix, iz) by yaw about the Y axis
  const wx = ix * cos + iz * sin;
  const wz = -ix * sin + iz * cos;
  const len = Math.hypot(wx, wz) || 1;
  return { x: wx / len, z: wz / len };
}

// Snappy grounded/air horizontal control: velocity magnitude capped at `speed`.
function applyHorizontal(state, dir, speed, dt) {
  if (dir) {
    state.vel.x = dir.x * speed;
    state.vel.z = dir.z * speed;
  } else {
    state.vel.x = 0;
    state.vel.z = 0;
  }
  state.pos.x += state.vel.x * dt;
  state.pos.z += state.vel.z * dt;
}

// Gravity integration + ground landing. Returns nothing; mutates state.
function applyGravityLand(state, dt, gravityScale = 1) {
  state.vel.y -= GRAVITY * gravityScale * dt;
  state.pos.y += state.vel.y * dt;
  if (state.pos.y <= GROUND_Y) {
    state.pos.y = GROUND_Y;
    state.vel.y = 0;
    state.grounded = true;
    state.jumps = 0;
  } else {
    state.grounded = false;
  }
}

function ensureState(state) {
  if (!state.pos) state.pos = { x: 0, y: GROUND_Y, z: 0 };
  if (!state.vel) state.vel = { x: 0, y: 0, z: 0 };
  if (typeof state.jumps !== 'number') state.jumps = 0;
  if (state.swing === undefined) state.swing = null;
  if (typeof state.yaw !== 'number') state.yaw = 0;
}

export function stepHero(hero, state, input, dt) {
  ensureState(state);
  const stats = hero.stats;
  const dir = moveDir(input);

  // facing tracks the desired camera yaw (or movement heading as a fallback)
  if (typeof input.yaw === 'number') state.yaw = input.yaw;
  else if (dir) state.yaw = Math.atan2(dir.x, dir.z);

  // ---- FLY: full 3D control, no gravity, can hover ----
  if (hero.movement === 'fly') {
    const sp = stats.speed;
    state.vel.x = dir ? dir.x * sp : 0;
    state.vel.z = dir ? dir.z * sp : 0;
    state.vel.y = ((input.up ? 1 : 0) - (input.down ? 1 : 0)) * sp;
    state.pos.x += state.vel.x * dt;
    state.pos.y += state.vel.y * dt;
    state.pos.z += state.vel.z * dt;
    if (state.pos.y <= GROUND_Y) {
      state.pos.y = GROUND_Y;
      if (state.vel.y < 0) state.vel.y = 0;
      state.grounded = true;
      state.jumps = 0;
    } else {
      state.grounded = false;
    }
    return state;
  }

  // ---- SWING: web-pull / zip. A fresh action press shoots a web at the aimed
  // point (input.webAnchor, supplied by the render layer's crosshair raycast);
  // holding the action zips the player toward that point; releasing flings them
  // away with the built-up momentum. ----
  if (hero.movement === 'swing') {
    const PULL_ACCEL = 140; // strong inward acceleration (units/s^2)
    const PULL_MAX_SPEED = 70; // cap on the zip speed (units/s)
    const DETACH_DIST = 2; // auto-detach once this close to the anchor (units)

    // Fresh press while aiming at a point -> attach a web there.
    if (input.actionPressed && input.webAnchor) {
      const a = input.webAnchor;
      const anchor = { x: a.x, y: a.y, z: a.z }; // copy, never alias the input
      const len = Math.hypot(anchor.x - state.pos.x, anchor.y - state.pos.y, anchor.z - state.pos.z);
      state.swing = { anchor, len };
    }

    // Pulling: action held and a web is attached.
    if (input.action && state.swing) {
      const { anchor } = state.swing;
      const dx = anchor.x - state.pos.x;
      const dy = anchor.y - state.pos.y;
      const dz = anchor.z - state.pos.z;
      const dist = Math.hypot(dx, dy, dz) || 1e-6;
      if (dist > DETACH_DIST) {
        // accelerate toward the anchor (gravity suppressed while zipping)
        const nx = dx / dist;
        const ny = dy / dist;
        const nz = dz / dist;
        state.vel.x += nx * PULL_ACCEL * dt;
        state.vel.y += ny * PULL_ACCEL * dt;
        state.vel.z += nz * PULL_ACCEL * dt;
        const sp = Math.hypot(state.vel.x, state.vel.y, state.vel.z);
        if (sp > PULL_MAX_SPEED) {
          const k = PULL_MAX_SPEED / sp;
          state.vel.x *= k;
          state.vel.y *= k;
          state.vel.z *= k;
        }
        state.pos.x += state.vel.x * dt;
        state.pos.y += state.vel.y * dt;
        state.pos.z += state.vel.z * dt;
        state.swing.len = dist; // informational: current rope length
        if (state.pos.y <= GROUND_Y) {
          state.pos.y = GROUND_Y;
          if (state.vel.y < 0) state.vel.y = 0;
          state.grounded = true;
          state.jumps = 0;
        } else {
          state.grounded = false;
        }
        return state;
      }
      // reached the anchor -> detach but KEEP momentum (fall through below)
    }

    // not pulling (released / no web / reached the anchor): drop the web, keep momentum
    state.swing = null;
    if (state.grounded) {
      if (input.actionPressed) {
        state.vel.y = stats.jump;
        state.grounded = false;
        state.jumps = 1;
      }
      applyHorizontal(state, dir, stats.speed, dt);
    } else {
      // airborne with momentum: light air steering only, no friction/clamp
      if (dir) {
        state.vel.x += dir.x * stats.speed * 2 * dt;
        state.vel.z += dir.z * stats.speed * 2 * dt;
      }
      state.pos.x += state.vel.x * dt;
      state.pos.z += state.vel.z * dt;
    }
    applyGravityLand(state, dt);
    return state;
  }

  // ---- BIKE: stays grounded, small hop, highest top speed ----
  if (hero.movement === 'bike') {
    if (input.actionPressed && state.grounded) {
      state.vel.y = 12; // small hop
      state.grounded = false;
    }
    applyHorizontal(state, dir, stats.speed, dt);
    applyGravityLand(state, dt);
    return state;
  }

  // ---- JUMP (single air jump, strong gravity) / RUN (double jump) ----
  const maxJumps = hero.movement === 'run' ? 2 : 1;
  const gravityScale = hero.movement === 'jump' ? 1.6 : 1;
  if (input.actionPressed) {
    if (state.grounded) {
      state.vel.y = stats.jump;
      state.grounded = false;
      state.jumps = 1;
    } else if (state.jumps < maxJumps) {
      state.vel.y = stats.jump;
      state.jumps += 1;
    }
  }
  applyHorizontal(state, dir, stats.speed, dt);
  applyGravityLand(state, dt, gravityScale);
  return state;
}

// ---------------------------------------------------------------------------
// Combat (facing / distance on the XZ plane)
// ---------------------------------------------------------------------------

export function applyDamage(entity, amount) {
  entity.hp -= amount;
  return entity.hp <= 0;
}

function posX(o) {
  return (o.pos ? o.pos.x : o.x) || 0;
}
function posZ(o) {
  return (o.pos ? o.pos.z : o.z) || 0;
}

export function meleeHits(attacker, targets, range, arcDeg = 90) {
  const ax = posX(attacker);
  const az = posZ(attacker);
  const yaw = typeof attacker.yaw === 'number' ? attacker.yaw : 0;
  const fwd = headingVec(yaw);
  return targets.filter((t) => {
    const dx = posX(t) - ax;
    const dz = posZ(t) - az;
    const dist = Math.hypot(dx, dz);
    if (dist > range) return false;
    if (dist === 0) return true; // on top of the attacker
    const cos = (fwd.x * dx + fwd.z * dz) / dist; // both unit-normalised
    const angle = (Math.acos(Math.max(-1, Math.min(1, cos))) * 180) / Math.PI;
    return angle <= arcDeg;
  });
}

export function stepProjectile(p, dt) {
  p.pos.x += (p.vel.x || 0) * dt;
  p.pos.y += (p.vel.y || 0) * dt;
  p.pos.z += (p.vel.z || 0) * dt;
  return p;
}

// ---------------------------------------------------------------------------
// Missions
// ---------------------------------------------------------------------------

const MISSION_TYPES = ['defeat', 'rescue', 'collect', 'travel'];
const MISSION_TITLES = {
  defeat: 'Clean up the streets',
  rescue: 'Rescue the civilians',
  collect: 'Gather the artifacts',
  travel: 'Patrol the district',
};

export function makeMission(rng, data, ctx = {}) {
  const type = MISSION_TYPES[Math.floor(rng() * MISSION_TYPES.length)];
  const target = 1 + Math.floor(rng() * 3); // 1..3
  const region = ctx.region || regionForChunk(ctx.cx || 0, ctx.cz || 0, data || {});
  const where = region.cityName || 'the city';
  const id = `mission:${ctx.cx || 0},${ctx.cz || 0}:${Math.floor(rng() * 1e9)}`;
  const verbs = {
    defeat: `Defeat ${target} villain${target > 1 ? 's' : ''}`,
    rescue: `Rescue ${target} civilian${target > 1 ? 's' : ''}`,
    collect: `Collect ${target} artifact${target > 1 ? 's' : ''}`,
    travel: `Reach ${target} checkpoint${target > 1 ? 's' : ''}`,
  };
  return {
    id,
    type,
    title: MISSION_TITLES[type],
    target,
    progress: 0,
    text: `${verbs[type]} in ${where}.`,
    reward: { xp: target * 100 },
  };
}

export function advanceMission(mission, eventType) {
  if (eventType === mission.type && mission.progress < mission.target) {
    mission.progress += 1;
  }
  return { completed: mission.progress >= mission.target };
}

// ---------------------------------------------------------------------------
// World streaming
// ---------------------------------------------------------------------------

export function chunkCoordForPos(x, z) {
  return { cx: Math.floor(x / CHUNK_SIZE), cz: Math.floor(z / CHUNK_SIZE) };
}

export function visibleChunks(cx, cz, radius) {
  const out = [];
  for (let dz = -radius; dz <= radius; dz++) {
    for (let dx = -radius; dx <= radius; dx++) {
      out.push({ cx: cx + dx, cz: cz + dz });
    }
  }
  return out;
}

const PALETTES = [
  ['#1b2a4a', '#2e4372', '#3d5a9c', '#5d7cc4'],
  ['#2a1b3d', '#4a2e72', '#6a3d9c', '#8d5dc4'],
  ['#3d2a1b', '#724a2e', '#9c6a3d', '#c48d5d'],
  ['#1b3d2a', '#2e724a', '#3d9c6a', '#5dc48d'],
  ['#3d1b2a', '#722e4a', '#9c3d6a', '#c45d8d'],
  ['#2a2a2a', '#454545', '#636363', '#858585'],
];

// Villain tiering. Maps an rng draw r in [0,1) to a tier + max HP so that
// villains take several hits to kill (no one/two-shots). Elite is rarest.
// Render + combat layers read entity.hp / entity.maxHp / entity.tier.
const VILLAIN_TIERS = {
  grunt: 150,
  tough: 260,
  elite: 400,
};

export function villainTier(r) {
  if (r < 0.6) return { tier: 'grunt', maxHp: VILLAIN_TIERS.grunt };
  if (r < 0.9) return { tier: 'tough', maxHp: VILLAIN_TIERS.tough };
  return { tier: 'elite', maxHp: VILLAIN_TIERS.elite };
}

// A robbery is always a heavier villain: at least 'tough'.
function robberyTier(r) {
  if (r < 0.7) return { tier: 'tough', maxHp: 300 };
  return { tier: 'elite', maxHp: VILLAIN_TIERS.elite };
}

export function generateChunk(cx, cz, data, completed) {
  const done = completed instanceof Set ? completed : new Set(completed || []);
  const region = regionForChunk(cx, cz, data);
  const origin = { x: cx * CHUNK_SIZE, z: cz * CHUNK_SIZE };
  const rng = rngForChunk(cx, cz);
  const palette = PALETTES[region.paletteIndex];

  // --- Buildings: one per grid cell (with road gaps), so footprints never overlap.
  const buildings = [];
  const gridN = 4;
  const cell = CHUNK_SIZE / gridN; // 50
  const margin = 8; // road gap on each side of a cell
  const maxSize = cell - 2 * margin; // 34
  const minSize = 12;
  for (let gz = 0; gz < gridN; gz++) {
    for (let gx = 0; gx < gridN; gx++) {
      const place = rng(); // consumed every cell -> deterministic regardless of outcome
      const wr = rng();
      const dr = rng();
      const xr = rng();
      const zr = rng();
      const hr = rng();
      const cr = rng();
      if (place < 0.85) {
        const cellX = origin.x + gx * cell;
        const cellZ = origin.z + gz * cell;
        const w = minSize + wr * (maxSize - minSize);
        const d = minSize + dr * (maxSize - minSize);
        const x = cellX + margin + xr * (maxSize - w);
        const z = cellZ + margin + zr * (maxSize - d);
        const h = 20 + hr * 80;
        const color = palette[Math.floor(cr * palette.length)];
        buildings.push({ x, z, w, d, h, color });
      }
    }
  }
  // Guarantee at least one building so the city is never empty.
  if (buildings.length === 0) {
    buildings.push({
      x: origin.x + margin,
      z: origin.z + margin,
      w: maxSize,
      d: maxSize,
      h: 40,
      color: palette[0],
    });
  }

  // --- Entities. The rng stream is consumed in a FIXED order so that omitting
  // a completed entity never shifts the randomness of any other entity.
  const entities = [];
  const add = (type, k, build) => {
    const x = origin.x + rng() * CHUNK_SIZE;
    const z = origin.z + rng() * CHUNK_SIZE;
    const extra = build(rng); // consume any per-entity rng BEFORE the skip check
    const id = `${cx},${cz}:${type}:${k}`;
    if (done.has(id)) return; // omission is rng-neutral
    entities.push({ id, type, x, z, ...extra });
  };

  const villainN = 2 + Math.floor(rng() * 3); // 2..4
  for (let k = 0; k < villainN; k++) {
    add('villain', k, (r) => {
      const { tier, maxHp } = villainTier(r()); // one rng draw -> stream-stable
      return { y: GROUND_Y, hp: maxHp, maxHp, tier };
    });
  }
  const civilianN = 2 + Math.floor(rng() * 3); // 2..4
  for (let k = 0; k < civilianN; k++) {
    add('civilian', k, () => ({ y: GROUND_Y }));
  }
  const robberyN = 1 + Math.floor(rng() * 2); // 1..2
  for (let k = 0; k < robberyN; k++) {
    add('robbery', k, (r) => {
      const { tier, maxHp } = robberyTier(r()); // one rng draw -> stream-stable
      return { y: GROUND_Y, hp: maxHp, maxHp, tier };
    });
  }
  const collectibleN = 2 + Math.floor(rng() * 3); // 2..4
  for (let k = 0; k < collectibleN; k++) {
    add('collectible', k, (r) => ({ y: GROUND_Y + 10 + r() * 30 })); // floats 10..40
  }
  const npcN = 1 + Math.floor(rng() * 2); // 1..2
  for (let k = 0; k < npcN; k++) {
    add('npc', k, () => ({ y: GROUND_Y }));
  }

  return { cx, cz, origin, region, buildings, entities };
}
