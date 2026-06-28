import { describe, it, expect } from 'vitest';
import {
  CONFIG,
  hashInt,
  hash2,
  mulberry32,
  rngForChunk,
  regionForChunk,
  HEROES,
  getHero,
  stepHero,
  applyDamage,
  meleeHits,
  stepProjectile,
  makeMission,
  advanceMission,
  chunkCoordForPos,
  visibleChunks,
  generateChunk,
  villainTier,
} from '../../public/game/core.js';

// Deterministic stub data — do NOT depend on public/game-data.js
const data = {
  countries: ['Alphara', 'Betavia', 'Gammoria', 'Deltaria', 'Epsilon'],
  cities: ['Aville', 'Bborough', 'Ccity', 'Dtown', 'Eburg', 'Fport', 'Ghaven'],
};

// ---------------------------------------------------------------------------
// hashing / rng
// ---------------------------------------------------------------------------

describe('hashInt', () => {
  it('is deterministic', () => {
    expect(hashInt(42)).toBe(hashInt(42));
    expect(hashInt(0)).toBe(hashInt(0));
  });
  it('differs across inputs', () => {
    expect(hashInt(1)).not.toBe(hashInt(2));
    expect(hashInt(100)).not.toBe(hashInt(101));
  });
  it('returns a uint32', () => {
    for (const n of [0, 1, 7, 12345, -1, -99, -100000]) {
      const h = hashInt(n);
      expect(Number.isInteger(h)).toBe(true);
      expect(h).toBeGreaterThanOrEqual(0);
      expect(h).toBeLessThanOrEqual(0xffffffff);
    }
  });
  it('handles negatives deterministically and distinctly from positives', () => {
    expect(hashInt(-5)).toBe(hashInt(-5));
    expect(hashInt(-5)).not.toBe(hashInt(5));
  });
});

describe('hash2', () => {
  it('is deterministic', () => {
    expect(hash2(3, 7)).toBe(hash2(3, 7));
    expect(hash2(-3, 7)).toBe(hash2(-3, 7));
  });
  it('returns a uint32', () => {
    for (const [a, b] of [[0, 0], [1, 2], [-1, -1], [-9, 4], [12345, -678]]) {
      const h = hash2(a, b);
      expect(Number.isInteger(h)).toBe(true);
      expect(h).toBeGreaterThanOrEqual(0);
      expect(h).toBeLessThanOrEqual(0xffffffff);
    }
  });
  it('differs across inputs', () => {
    expect(hash2(1, 1)).not.toBe(hash2(1, 2));
    expect(hash2(1, 1)).not.toBe(hash2(2, 1));
  });
  it('is order-dependent', () => {
    expect(hash2(3, 7)).not.toBe(hash2(7, 3));
  });
  it('handles negative coords', () => {
    expect(hash2(-4, -2)).not.toBe(hash2(4, 2));
  });
});

describe('mulberry32', () => {
  it('returns floats in [0,1)', () => {
    const r = mulberry32(123);
    for (let i = 0; i < 1000; i++) {
      const v = r();
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });
  it('is deterministic for a seed', () => {
    const a = mulberry32(999);
    const b = mulberry32(999);
    for (let i = 0; i < 10; i++) expect(a()).toBe(b());
  });
  it('differs across seeds', () => {
    const a = mulberry32(1);
    const b = mulberry32(2);
    expect(a()).not.toBe(b());
  });
});

describe('rngForChunk', () => {
  it('returns a deterministic generator seeded from (cx,cz)', () => {
    const a = rngForChunk(5, -2);
    const b = rngForChunk(5, -2);
    expect(typeof a).toBe('function');
    expect(a()).toBe(b());
  });
  it('differs across chunk coords (and is order-sensitive)', () => {
    expect(rngForChunk(1, 0)()).not.toBe(rngForChunk(2, 0)());
    expect(rngForChunk(1, 2)()).not.toBe(rngForChunk(2, 1)());
  });
});

// ---------------------------------------------------------------------------
// regions
// ---------------------------------------------------------------------------

describe('regionForChunk', () => {
  it('same city across the CHUNKS_PER_CITY x CHUNKS_PER_CITY block', () => {
    const n = CONFIG.CHUNKS_PER_CITY; // 4
    const base = regionForChunk(0, 0, data);
    for (let dx = 0; dx < n; dx++) {
      for (let dz = 0; dz < n; dz++) {
        const r = regionForChunk(dx, dz, data);
        expect(r.cityKey).toBe(base.cityKey);
        expect(r.cityName).toBe(base.cityName);
        expect(r.countryKey).toBe(base.countryKey);
      }
    }
  });
  it('city changes when crossing the boundary in BOTH cx and cz', () => {
    const n = CONFIG.CHUNKS_PER_CITY; // 4
    const base = regionForChunk(0, 0, data);
    const acrossX = regionForChunk(n, 0, data);
    const acrossZ = regionForChunk(0, n, data);
    expect(acrossX.cityKey).not.toBe(base.cityKey);
    expect(acrossZ.cityKey).not.toBe(base.cityKey);
    expect(acrossX.cityName).not.toBe(base.cityName);
    expect(acrossZ.cityName).not.toBe(base.cityName);
  });
  it('country changes at the larger (city*country) boundary', () => {
    const per = CONFIG.CHUNKS_PER_CITY * CONFIG.CITIES_PER_COUNTRY; // 12
    const a = regionForChunk(0, 0, data); // country (0,0)
    const bx = regionForChunk(per, 0, data); // country (1,0)
    const bz = regionForChunk(0, per, data); // country (0,1)
    expect(bx.countryKey).not.toBe(a.countryKey);
    expect(bz.countryKey).not.toBe(a.countryKey);
    expect(bx.countryName).not.toBe(a.countryName);
  });
  it('handles negative coords', () => {
    const r = regionForChunk(-1, -1, data);
    expect(r.cx).toBe(-1);
    expect(r.cz).toBe(-1);
    expect(typeof r.cityName).toBe('string');
    expect(r.cityName.length).toBeGreaterThan(0);
    expect(typeof r.countryName).toBe('string');
    expect(r.countryName.length).toBeGreaterThan(0);
  });
  it('paletteIndex in 0..5', () => {
    for (let cx = -10; cx < 20; cx++) {
      for (let cz = -3; cz < 6; cz++) {
        const r = regionForChunk(cx, cz, data);
        expect(r.paletteIndex).toBeGreaterThanOrEqual(0);
        expect(r.paletteIndex).toBeLessThanOrEqual(5);
        expect(Number.isInteger(r.paletteIndex)).toBe(true);
      }
    }
  });
});

// ---------------------------------------------------------------------------
// heroes
// ---------------------------------------------------------------------------

describe('HEROES', () => {
  it('has exactly 6 heroes', () => {
    expect(HEROES.length).toBe(6);
  });
  it('movement union covers fly/jump/swing/bike/run', () => {
    const modes = new Set(HEROES.map((h) => h.movement));
    for (const m of ['fly', 'jump', 'swing', 'bike', 'run']) {
      expect(modes.has(m)).toBe(true);
    }
  });
  it('bike top speed strictly greater than run hero', () => {
    const bike = HEROES.find((h) => h.movement === 'bike');
    const run = HEROES.find((h) => h.movement === 'run');
    expect(bike.stats.speed).toBeGreaterThan(run.stats.speed);
  });
  it('every hero has positive stats and a valid attackType', () => {
    for (const h of HEROES) {
      expect(h.id).toBeTruthy();
      expect(h.name).toBeTruthy();
      expect(typeof h.emoji).toBe('string');
      expect(typeof h.color).toBe('string');
      expect(typeof h.desc).toBe('string');
      expect(h.stats.maxHp).toBeGreaterThan(0);
      expect(h.stats.speed).toBeGreaterThan(0);
      expect(h.stats.jump).toBeGreaterThan(0);
      expect(['melee', 'projectile']).toContain(h.attackType);
    }
  });
  it('getHero returns the correct hero or undefined', () => {
    const first = HEROES[0];
    expect(getHero(first.id)).toBe(first);
    expect(getHero('no-such-hero')).toBeUndefined();
  });
  it('every hero has a positive numeric attackDamage', () => {
    for (const h of HEROES) {
      expect(typeof h.attackDamage).toBe('number');
      expect(Number.isFinite(h.attackDamage)).toBe(true);
      expect(h.attackDamage).toBeGreaterThan(0);
    }
  });
});

// ---------------------------------------------------------------------------
// combat balance — villains must survive several hits
// ---------------------------------------------------------------------------

describe('villainTier', () => {
  it('returns a valid tier and maxHp within expected bounds', () => {
    const tiers = new Set();
    for (let i = 0; i < 1000; i++) {
      const { tier, maxHp } = villainTier(i / 1000);
      expect(['grunt', 'tough', 'elite']).toContain(tier);
      expect(maxHp).toBeGreaterThan(0);
      tiers.add(tier);
    }
    // all three tiers reachable across [0,1)
    expect(tiers.has('grunt')).toBe(true);
    expect(tiers.has('tough')).toBe(true);
    expect(tiers.has('elite')).toBe(true);
  });
  it('elite hp > tough hp > grunt hp', () => {
    // sample each tier's hp by scanning the range
    const hpByTier = {};
    for (let i = 0; i < 1000; i++) {
      const { tier, maxHp } = villainTier(i / 1000);
      hpByTier[tier] = maxHp;
    }
    expect(hpByTier.elite).toBeGreaterThan(hpByTier.tough);
    expect(hpByTier.tough).toBeGreaterThan(hpByTier.grunt);
  });
  it('no hero can one-shot or two-shot the weakest (grunt) villain', () => {
    // find the grunt (lowest) maxHp from the tier function
    let minVillainMaxHp = Infinity;
    for (let i = 0; i < 1000; i++) {
      minVillainMaxHp = Math.min(minVillainMaxHp, villainTier(i / 1000).maxHp);
    }
    for (const h of HEROES) {
      const hits = Math.ceil(minVillainMaxHp / h.attackDamage);
      expect(hits).toBeGreaterThanOrEqual(3);
    }
  });
});

// ---------------------------------------------------------------------------
// stepHero (3D)
// ---------------------------------------------------------------------------

function freshState(o = {}) {
  return {
    pos: { x: 0, y: CONFIG.GROUND_Y, z: 0 },
    vel: { x: 0, y: 0, z: 0 },
    grounded: true,
    yaw: 0,
    jumps: 0,
    swing: null,
    ...o,
  };
}
const noInput = {
  forward: false,
  back: false,
  left: false,
  right: false,
  up: false,
  down: false,
  action: false,
  actionPressed: false,
  yaw: 0,
};
const hsp = (s) => Math.hypot(s.vel.x, s.vel.z); // horizontal (XZ) speed

describe('stepHero — fly', () => {
  it('ignores gravity, gains altitude on up, and hovers on no input', () => {
    const hero = HEROES.find((h) => h.movement === 'fly');
    const s = freshState({ grounded: false, pos: { x: 0, y: 20, z: 0 } });
    for (let i = 0; i < 30; i++) stepHero(hero, s, { ...noInput, up: true }, 1 / 60);
    expect(s.pos.y).toBeGreaterThan(20);
    const yHover = s.pos.y;
    for (let i = 0; i < 60; i++) stepHero(hero, s, { ...noInput }, 1 / 60);
    expect(s.pos.y).toBeCloseTo(yHover, 3); // no gravity drag — true hover
    expect(s.pos.y).toBeGreaterThanOrEqual(CONFIG.GROUND_Y);
  });
  it('descends on down but never below GROUND_Y', () => {
    const hero = HEROES.find((h) => h.movement === 'fly');
    const s = freshState({ grounded: false, pos: { x: 0, y: 5, z: 0 } });
    for (let i = 0; i < 200; i++) stepHero(hero, s, { ...noInput, down: true }, 1 / 60);
    expect(s.pos.y).toBe(CONFIG.GROUND_Y);
  });
});

describe('stepHero — jump', () => {
  it('leaves ground, single air-jump only, returns to ground', () => {
    const hero = HEROES.find((h) => h.movement === 'jump');
    const s = freshState();
    stepHero(hero, s, { ...noInput, actionPressed: true }, 1 / 60);
    expect(s.grounded).toBe(false);
    expect(s.vel.y).toBeGreaterThan(0);
    const vyAfter = s.vel.y;
    // a second press mid-air must NOT relaunch
    stepHero(hero, s, { ...noInput, actionPressed: true }, 1 / 60);
    expect(s.vel.y).toBeLessThan(vyAfter);
    for (let i = 0; i < 2000 && !s.grounded; i++) stepHero(hero, s, { ...noInput }, 1 / 60);
    expect(s.grounded).toBe(true);
    expect(s.pos.y).toBe(CONFIG.GROUND_Y);
  });
});

describe('stepHero — run', () => {
  it('allows exactly two jumps then none until grounded', () => {
    const hero = HEROES.find((h) => h.movement === 'run');
    const s = freshState();
    stepHero(hero, s, { ...noInput, actionPressed: true }, 1 / 60); // jump 1
    expect(s.grounded).toBe(false);
    expect(s.vel.y).toBeGreaterThan(0);
    stepHero(hero, s, { ...noInput }, 1 / 60);
    stepHero(hero, s, { ...noInput, actionPressed: true }, 1 / 60); // jump 2
    expect(s.vel.y).toBeGreaterThan(0);
    stepHero(hero, s, { ...noInput }, 1 / 60);
    const vyBefore = s.vel.y;
    stepHero(hero, s, { ...noInput, actionPressed: true }, 1 / 60); // jump 3 -> denied
    expect(s.vel.y).toBeLessThan(vyBefore + 1e-6); // gravity only, no boost
  });
  it('respects horizontal max speed = stats.speed', () => {
    const hero = HEROES.find((h) => h.movement === 'run');
    const s = freshState();
    for (let i = 0; i < 300; i++) {
      stepHero(hero, s, { ...noInput, forward: true, yaw: 0.7 }, 1 / 60);
    }
    expect(hsp(s)).toBeLessThanOrEqual(hero.stats.speed + 1e-6);
    expect(s.pos.y).toBeGreaterThanOrEqual(CONFIG.GROUND_Y);
  });
});

describe('stepHero — bike', () => {
  it('reaches a higher top ground speed than a run hero', () => {
    const bike = HEROES.find((h) => h.movement === 'bike');
    const run = HEROES.find((h) => h.movement === 'run');
    const sb = freshState();
    const sr = freshState();
    for (let i = 0; i < 600; i++) {
      stepHero(bike, sb, { ...noInput, forward: true }, 1 / 60);
      stepHero(run, sr, { ...noInput, forward: true }, 1 / 60);
    }
    expect(hsp(sb)).toBeGreaterThan(hsp(sr));
  });
  it('stays grounded while driving (no action)', () => {
    const bike = HEROES.find((h) => h.movement === 'bike');
    const s = freshState();
    for (let i = 0; i < 240; i++) {
      stepHero(bike, s, { ...noInput, forward: true }, 1 / 60);
      expect(s.pos.y).toBe(CONFIG.GROUND_Y);
    }
  });
});

describe('stepHero — swing', () => {
  it('keeps |dist-len| small and builds XZ speed across the arc', () => {
    const hero = HEROES.find((h) => h.movement === 'swing');
    const s = freshState({ grounded: false, pos: { x: 0, y: 30, z: 0 }, vel: { x: 1, y: 0, z: 0 } });
    const startSpeed = hsp(s);
    let maxErr = 0;
    let sawSwing = false;
    for (let i = 0; i < 180; i++) {
      stepHero(hero, s, { ...noInput, action: true }, 1 / 60);
      if (s.swing) {
        sawSwing = true;
        const dx = s.pos.x - s.swing.anchor.x;
        const dy = s.pos.y - s.swing.anchor.y;
        const dz = s.pos.z - s.swing.anchor.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        maxErr = Math.max(maxErr, Math.abs(dist - s.swing.len));
      }
    }
    expect(sawSwing).toBe(true);
    expect(maxErr).toBeLessThan(s.swing.len * 0.25);
    expect(hsp(s)).toBeGreaterThan(startSpeed + 1); // momentum built through the arc
  });
  it('releasing action clears swing and preserves momentum (no ground clamp airborne)', () => {
    const hero = HEROES.find((h) => h.movement === 'swing');
    const s = freshState({ grounded: false, pos: { x: 0, y: 30, z: 0 }, vel: { x: 1, y: 0, z: 0 } });
    for (let i = 0; i < 60; i++) stepHero(hero, s, { ...noInput, action: true }, 1 / 60);
    const before = hsp(s);
    stepHero(hero, s, { ...noInput, action: false }, 1 / 60);
    expect(s.swing).toBeNull();
    expect(Math.abs(hsp(s) - before)).toBeLessThan(1); // momentum kept
  });
});

describe('stepHero — common', () => {
  it('yaw tracks input.yaw', () => {
    const hero = HEROES.find((h) => h.movement === 'run');
    const s = freshState();
    stepHero(hero, s, { ...noInput, yaw: 1.23 }, 1 / 60);
    expect(s.yaw).toBeCloseTo(1.23);
  });
  it('pos.y never drops below GROUND_Y for any grounded mode', () => {
    for (const m of ['run', 'jump', 'bike', 'swing']) {
      const hero = HEROES.find((h) => h.movement === m);
      const s = freshState();
      for (let i = 0; i < 500; i++) {
        const press = i % 30 === 0;
        stepHero(hero, s, { ...noInput, forward: true, actionPressed: press }, 1 / 60);
        expect(s.pos.y).toBeGreaterThanOrEqual(CONFIG.GROUND_Y);
      }
    }
  });
});

// ---------------------------------------------------------------------------
// combat
// ---------------------------------------------------------------------------

describe('combat', () => {
  it('applyDamage returns true at exactly 0 hp', () => {
    const e = { hp: 10 };
    expect(applyDamage(e, 5)).toBe(false);
    expect(e.hp).toBe(5);
    expect(applyDamage(e, 5)).toBe(true);
    expect(e.hp).toBe(0);
  });
  it('applyDamage returns true past 0', () => {
    expect(applyDamage({ hp: 3 }, 10)).toBe(true);
  });
  it('meleeHits uses XZ range + arc around yaw heading', () => {
    const attacker = { x: 0, y: 0, z: 0, yaw: 0 }; // heading +Z
    const inFront = { id: 'a', x: 0, y: 0, z: 5 };
    const inFrontHigh = { id: 'h', x: 0, y: 1000, z: 5 }; // y ignored in XZ distance
    const behind = { id: 'b', x: 0, y: 0, z: -5 };
    const tooFar = { id: 'c', x: 0, y: 0, z: 5000 };
    const side = { id: 's', x: 50, y: 0, z: 0 }; // 90deg off heading
    const hits = meleeHits(attacker, [inFront, inFrontHigh, behind, tooFar, side], 10, 60);
    expect(hits).toContain(inFront);
    expect(hits).toContain(inFrontHigh);
    expect(hits).not.toContain(behind);
    expect(hits).not.toContain(tooFar);
    expect(hits).not.toContain(side); // outside +/-60deg
  });
  it('meleeHits follows yaw heading (rotated)', () => {
    const attacker = { x: 0, y: 0, z: 0, yaw: Math.PI }; // heading -Z
    const front = { id: 'f', x: 0, y: 0, z: -5 };
    const back = { id: 'k', x: 0, y: 0, z: 5 };
    const hits = meleeHits(attacker, [front, back], 10, 60);
    expect(hits).toContain(front);
    expect(hits).not.toContain(back);
  });
  it('stepProjectile advances in 3D', () => {
    const p = { pos: { x: 0, y: 0, z: 0 }, vel: { x: 2, y: 3, z: 4 } };
    stepProjectile(p, 0.5);
    expect(p.pos.x).toBeCloseTo(1);
    expect(p.pos.y).toBeCloseTo(1.5);
    expect(p.pos.z).toBeCloseTo(2);
  });
});

// ---------------------------------------------------------------------------
// missions
// ---------------------------------------------------------------------------

describe('missions', () => {
  it('makeMission produces a valid shape', () => {
    const rng = mulberry32(7);
    const m = makeMission(rng, data, { cx: 3, cz: -1 });
    expect(m.id).toBeTruthy();
    expect(['defeat', 'rescue', 'collect', 'travel']).toContain(m.type);
    expect(m.target).toBeGreaterThanOrEqual(1);
    expect(m.progress).toBe(0);
    expect(typeof m.title).toBe('string');
    expect(typeof m.text).toBe('string');
    expect(m.reward).toBeDefined();
  });
  it('advanceMission only counts matching eventType', () => {
    const m = { id: 'm', type: 'defeat', title: 't', target: 2, progress: 0, text: '', reward: 1 };
    let r = advanceMission(m, 'rescue');
    expect(m.progress).toBe(0);
    expect(r.completed).toBe(false);
    r = advanceMission(m, 'defeat');
    expect(m.progress).toBe(1);
    expect(r.completed).toBe(false);
    r = advanceMission(m, 'defeat');
    expect(m.progress).toBe(2);
    expect(r.completed).toBe(true);
  });
  it('advanceMission does not exceed target', () => {
    const m = { id: 'm', type: 'collect', title: 't', target: 1, progress: 0, text: '', reward: 1 };
    advanceMission(m, 'collect');
    const r = advanceMission(m, 'collect');
    expect(m.progress).toBe(1);
    expect(r.completed).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// world streaming
// ---------------------------------------------------------------------------

describe('chunkCoordForPos', () => {
  it('is the inverse of chunk origin', () => {
    for (const [cx, cz] of [[0, 0], [1, 3], [-1, -1], [-4, 2], [7, -9]]) {
      const ox = cx * CONFIG.CHUNK_SIZE;
      const oz = cz * CONFIG.CHUNK_SIZE;
      const r = chunkCoordForPos(ox, oz);
      expect(r.cx).toBe(cx);
      expect(r.cz).toBe(cz);
      // a point inside the chunk maps to the same coord
      const mid = chunkCoordForPos(ox + CONFIG.CHUNK_SIZE / 2, oz + CONFIG.CHUNK_SIZE / 2);
      expect(mid.cx).toBe(cx);
      expect(mid.cz).toBe(cz);
    }
  });
});

describe('visibleChunks', () => {
  it('returns (2r+1)^2 chunks including the center', () => {
    for (const r of [0, 1, 2, 3]) {
      const list = visibleChunks(4, -2, r);
      expect(list.length).toBe((2 * r + 1) ** 2);
      expect(list.some((c) => c.cx === 4 && c.cz === -2)).toBe(true);
      for (const c of list) {
        expect(Math.abs(c.cx - 4)).toBeLessThanOrEqual(r);
        expect(Math.abs(c.cz - -2)).toBeLessThanOrEqual(r);
      }
    }
  });
});

describe('generateChunk', () => {
  it('is deterministic (deep-equal across two calls)', () => {
    const a = generateChunk(3, -2, data, new Set());
    const b = generateChunk(3, -2, data, new Set());
    expect(a).toEqual(b);
  });
  it('differs across coords', () => {
    const a = generateChunk(0, 0, data, new Set());
    const b = generateChunk(1, 0, data, new Set());
    const c = generateChunk(0, 1, data, new Set());
    expect(JSON.stringify(a)).not.toBe(JSON.stringify(b));
    expect(JSON.stringify(a)).not.toBe(JSON.stringify(c));
  });
  it('reports origin and region', () => {
    const c = generateChunk(5, -3, data, new Set());
    expect(c.cx).toBe(5);
    expect(c.cz).toBe(-3);
    expect(c.origin.x).toBe(5 * CONFIG.CHUNK_SIZE);
    expect(c.origin.z).toBe(-3 * CONFIG.CHUNK_SIZE);
    expect(c.region.cx).toBe(5);
    expect(c.region.cz).toBe(-3);
  });
  it('building footprints are non-overlapping and in-bounds', () => {
    for (const [cx, cz] of [[0, 0], [2, -1], [-3, 4]]) {
      const c = generateChunk(cx, cz, data, new Set());
      expect(c.buildings.length).toBeGreaterThan(0);
      const x0 = c.origin.x;
      const z0 = c.origin.z;
      for (const b of c.buildings) {
        expect(b.w).toBeGreaterThan(0);
        expect(b.d).toBeGreaterThan(0);
        expect(b.h).toBeGreaterThan(0);
        expect(typeof b.color).toBe('string');
        expect(b.x).toBeGreaterThanOrEqual(x0);
        expect(b.z).toBeGreaterThanOrEqual(z0);
        expect(b.x + b.w).toBeLessThanOrEqual(x0 + CONFIG.CHUNK_SIZE + 1e-9);
        expect(b.z + b.d).toBeLessThanOrEqual(z0 + CONFIG.CHUNK_SIZE + 1e-9);
      }
      // pairwise AABB non-overlap
      for (let i = 0; i < c.buildings.length; i++) {
        for (let j = i + 1; j < c.buildings.length; j++) {
          const a = c.buildings[i];
          const b = c.buildings[j];
          const sep =
            a.x + a.w <= b.x + 1e-9 ||
            b.x + b.w <= a.x + 1e-9 ||
            a.z + a.d <= b.z + 1e-9 ||
            b.z + b.d <= a.z + 1e-9;
          expect(sep).toBe(true);
        }
      }
    }
  });
  it('entities: valid types, in-bounds, y rules, stable & unique ids', () => {
    const cx = 7;
    const cz = -4;
    const c = generateChunk(cx, cz, data, new Set());
    const types = ['villain', 'civilian', 'robbery', 'collectible', 'npc'];
    const ids = new Set();
    const x0 = c.origin.x;
    const z0 = c.origin.z;
    expect(c.entities.length).toBeGreaterThan(0);
    for (const e of c.entities) {
      expect(types).toContain(e.type);
      expect(e.id.startsWith(`${cx},${cz}:`)).toBe(true);
      expect(ids.has(e.id)).toBe(false);
      ids.add(e.id);
      expect(e.x).toBeGreaterThanOrEqual(x0);
      expect(e.x).toBeLessThanOrEqual(x0 + CONFIG.CHUNK_SIZE);
      expect(e.z).toBeGreaterThanOrEqual(z0);
      expect(e.z).toBeLessThanOrEqual(z0 + CONFIG.CHUNK_SIZE);
      if (e.type === 'collectible') {
        expect(e.y).toBeGreaterThanOrEqual(CONFIG.GROUND_Y + 10);
        expect(e.y).toBeLessThanOrEqual(CONFIG.GROUND_Y + 40);
      } else {
        expect(e.y).toBe(CONFIG.GROUND_Y);
      }
    }
  });
  it('villain/robbery entities spawn at full hp with a valid tier', () => {
    let minGruntHp = Infinity;
    for (let i = 0; i < 1000; i++) {
      minGruntHp = Math.min(minGruntHp, villainTier(i / 1000).maxHp);
    }
    // tough lower bound = the smallest hp produced by a 'tough' tier
    let minToughHp = Infinity;
    for (let i = 0; i < 1000; i++) {
      const t = villainTier(i / 1000);
      if (t.tier === 'tough') minToughHp = Math.min(minToughHp, t.maxHp);
    }
    for (const [cx, cz] of [[0, 0], [3, -2], [-5, 4], [7, 7]]) {
      const c = generateChunk(cx, cz, data, new Set());
      for (const e of c.entities) {
        if (e.type === 'villain' || e.type === 'robbery') {
          expect(e.maxHp).toBeGreaterThan(0);
          expect(e.hp).toBe(e.maxHp);
          expect(['grunt', 'tough', 'elite']).toContain(e.tier);
          if (e.type === 'robbery') {
            expect(e.maxHp).toBeGreaterThanOrEqual(minToughHp);
            expect(['tough', 'elite']).toContain(e.tier);
          }
        }
      }
    }
  });
  it('villain maxHp varies across chunks (tiers actually differ)', () => {
    const seen = new Set();
    for (let cx = 0; cx < 12; cx++) {
      for (let cz = 0; cz < 12; cz++) {
        const c = generateChunk(cx, cz, data, new Set());
        for (const e of c.entities) {
          if (e.type === 'villain') seen.add(e.maxHp);
        }
      }
    }
    expect(seen.size).toBeGreaterThan(1);
  });
  it('completed-set omission does not shift other entities', () => {
    const c0 = generateChunk(4, 1, data, new Set());
    const someId = c0.entities[0].id;
    const c1 = generateChunk(4, 1, data, new Set([someId]));
    expect(c1.entities.find((e) => e.id === someId)).toBeUndefined();
    expect(c1.entities.length).toBe(c0.entities.length - 1);
    // every surviving entity is byte-identical (positions & ids unchanged)
    const survivors = c0.entities.filter((e) => e.id !== someId);
    expect(c1.entities).toEqual(survivors);
    // buildings unaffected too
    expect(c1.buildings).toEqual(c0.buildings);
  });
});
