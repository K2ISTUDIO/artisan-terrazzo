/**
 * Static configuration for the terrazzo hero scene. Nothing here calls
 * Math.random() during render — the micro-aggregate field is generated
 * once, at module load, from a seeded PRNG (mulberry32) so the sequence
 * is 100% deterministic and identical on server and client. Everything
 * else (the few main/hero fragments that matter compositionally) is
 * hand-placed so it can be art-directed around the headline.
 */

// A tiny deterministic PRNG — avoids pulling in a seeded-random dependency
// for what is, in the end, one pure function.
function mulberry32(seed: number) {
  let t = seed;
  return function random() {
    t |= 0;
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

// Tonal triads (light / base / dark) so each fragment can carry real
// internal gradation instead of a flat fill. Capped at 6 hues total per
// the brief, ivoire reserved for highlights rather than a 7th hue.
export const PALETTE = {
  creme: { light: "#F3ECDE", base: "#E6D9C7", dark: "#D8C7AE" },
  terracotta: { light: "#BC745A", base: "#A45138", dark: "#823D28" },
  vert: { light: "#5C7768", base: "#465D50", dark: "#33453A" },
  pierre: { light: "#C9C0B3", base: "#B5AA9B", dark: "#9C917F" },
  noir: { light: "#3D3B36", base: "#292825", dark: "#1A1917" },
  rose: { light: "#DBB4A9", base: "#C9998C", dark: "#B07E70" },
} as const;

export type ColorKey = keyof typeof PALETTE;
const COLOR_KEYS: ColorKey[] = ["creme", "terracotta", "vert", "pierre", "noir", "rose"];

export const IVOIRE_HIGHLIGHT = "#EEE9DE";

// Irregular fracture silhouettes — angular, never a rounded blob, never a
// circle. viewBox is always 0 0 100 100 so any size scales cleanly.
//
// Hero shapes carry BOTH the full outline (for the clip-path speckles are
// masked to) and a split into two faces along one internal "ridge" edge —
// a lit face and a shadowed face, each its own polygon sharing that edge.
// This is what gives the big fragments real chunk/thickness instead of a
// flat painted silhouette: two different tones meeting at a hard edge
// reads as a fold catching light, the same cue the reference photo relies
// on (just achieved with two flat polygons instead of true 3D geometry).
export type HeroShape = { full: string; lit: string; shadow: string };

export const HERO_SHAPES: HeroShape[] = [
  {
    full: "M35 2 L78 8 L96 38 L88 72 L58 98 L22 90 L4 55 L10 20 Z",
    lit: "M35 2 L78 8 L96 38 L88 72 L58 98 Z",
    shadow: "M35 2 L58 98 L22 90 L4 55 L10 20 Z",
  },
  {
    full: "M15 5 L60 0 L92 25 L100 65 L70 96 L30 92 L2 60 L0 25 Z",
    lit: "M60 0 L92 25 L100 65 L70 96 L30 92 Z",
    shadow: "M60 0 L30 92 L2 60 L0 25 L15 5 Z",
  },
  {
    full: "M45 0 L85 12 L100 50 L82 88 L45 100 L10 78 L0 40 L18 8 Z",
    lit: "M45 0 L85 12 L100 50 L82 88 L45 100 Z",
    shadow: "M45 0 L45 100 L10 78 L0 40 L18 8 Z",
  },
  {
    full: "M20 4 L70 0 L100 30 L92 78 L55 100 L12 82 L0 42 Z",
    lit: "M70 0 L100 30 L92 78 L55 100 L12 82 Z",
    shadow: "M70 0 L12 82 L0 42 L20 4 Z",
  },
];

export const MAIN_SHAPES = [
  "M50 5 L85 20 L95 55 L70 90 L30 85 L10 50 Z",
  "M50 10 L90 40 L75 90 L20 80 L5 35 Z",
  "M20 10 L80 5 L95 45 L60 95 L15 70 Z",
  "M50 0 L100 60 L60 100 L0 70 Z",
  "M30 0 L80 15 L100 60 L70 100 L25 95 L0 50 Z",
  "M40 0 L90 22 L88 68 L48 98 L8 72 L4 28 Z",
] as const;

export const MICRO_SHAPES = ["M50 10 L90 50 L50 90 L10 50 Z", "M20 20 L80 30 L70 85 L15 70 Z"] as const;

// Real terrazzo reads as terrazzo because of dense, multi-tone aggregate
// specks — 2 or 3 dots is not enough. Generated deterministically (seeded
// per fragment index) rather than by hand: at 18–26 specks per fragment,
// hand-authoring would be tedious and no more art-directed than a seed.
export type Speckle = { cx: number; cy: number; r: number; tone: string };

// Weighted toward the two tones that stay legible against any base hue
// (near-black and cream) — a fleck the same color family as its fragment
// just disappears, which is what made the first pass read as too flat.
const SPECKLE_TONES = ["#1A1917", "#1A1917", "#F3ECDE", "#F3ECDE", "#4A4640", "#A45138", "#33453A"];

export function generateSpeckles(seed: number, count: number): Speckle[] {
  const rng = mulberry32(seed);
  const specks: Speckle[] = [];
  for (let i = 0; i < count; i++) {
    specks.push({
      cx: 8 + rng() * 84,
      cy: 8 + rng() * 84,
      r: 1.2 + rng() * 3,
      tone: SPECKLE_TONES[Math.floor(rng() * SPECKLE_TONES.length)],
    });
  }
  return specks;
}

const MICRO_DRIFTS = ["micro-1", "micro-2", "micro-3"] as const;
export type DriftKey = "a" | "b" | "c" | "d" | "e" | "f" | (typeof MICRO_DRIFTS)[number];

export type Tier = 1 | 2 | 3; // 1 = mobile+, 2 = tablet+, 3 = desktop+

export type MineralFragmentConfig = {
  top: number;
  left: number;
  size: number;
  shape: number;
  color: ColorKey;
  baseRotation: number;
  drift: DriftKey;
  duration: number;
  delay: number;
  emergeDelay: number;
  opacity: number;
  tier: Tier;
  veins?: boolean;
  /** Number of generated aggregate specks to scatter across the fragment. */
  speckles?: number;
  highlight?: boolean;
  grain?: boolean;
};

// Durations explicitly requested: 14 / 17 / 21 / 24 / 29 / 34s.
const DURATIONS = [14, 17, 21, 24, 29, 34];

/**
 * Hand-placed so the composition frames the headline rather than covering
 * it: large pieces sit in the corners (partially off-canvas), nothing
 * large lands in the text column (roughly left 0–48%, top 15–75% on
 * desktop). Tier 1 (mobile) keeps only the two least intrusive corner
 * pieces, per "éviter les gros fragments derrière le texte" on mobile.
 */
export const HERO_FRAGMENTS: MineralFragmentConfig[] = [
  {
    top: -9,
    left: -7,
    size: 220,
    shape: 0,
    color: "terracotta",
    baseRotation: -12,
    drift: "e",
    duration: 29,
    delay: -9,
    emergeDelay: 0,
    opacity: 0.5,
    tier: 1,
    veins: true,
    highlight: true,
    grain: true,
    speckles: 24,
  },
  {
    top: 74,
    left: 86,
    size: 240,
    shape: 2,
    color: "pierre",
    baseRotation: 8,
    drift: "b",
    duration: 24,
    delay: -16,
    emergeDelay: 0.15,
    opacity: 0.55,
    tier: 1,
    veins: true,
    highlight: true,
    grain: true,
    speckles: 26,
  },
  {
    top: 1,
    left: 87,
    size: 150,
    shape: 1,
    color: "vert",
    baseRotation: 20,
    drift: "d",
    duration: 21,
    delay: -4,
    emergeDelay: 0.3,
    opacity: 0.45,
    tier: 2,
    veins: true,
    highlight: true,
    speckles: 20,
  },
  {
    top: 86,
    left: -6,
    size: 130,
    shape: 3,
    color: "noir",
    baseRotation: -20,
    drift: "a",
    duration: 17,
    delay: -12,
    emergeDelay: 0.45,
    opacity: 0.4,
    tier: 3,
    veins: true,
    speckles: 18,
  },
];

export const MAIN_FRAGMENTS: MineralFragmentConfig[] = [
  { top: 10, left: 40, size: 42, shape: 0, color: "rose", baseRotation: 18, drift: "c", duration: 21, delay: -6, emergeDelay: 0.1, opacity: 0.42, tier: 1, veins: true, speckles: 10 },
  { top: 62, left: 6, size: 58, shape: 4, color: "creme", baseRotation: -10, drift: "a", duration: 14, delay: -3, emergeDelay: 0.2, opacity: 0.5, tier: 1, veins: true, speckles: 12 },
  { top: 88, left: 33, size: 34, shape: 2, color: "terracotta", baseRotation: 30, drift: "f", duration: 34, delay: -21, emergeDelay: 0.35, opacity: 0.4, tier: 1, veins: true, speckles: 8 },
  { top: 22, left: 68, size: 60, shape: 5, color: "pierre", baseRotation: -6, drift: "b", duration: 24, delay: -10, emergeDelay: 0.5, opacity: 0.45, tier: 1, veins: true, speckles: 12 },
  { top: 72, left: 63, size: 36, shape: 1, color: "vert", baseRotation: 24, drift: "d", duration: 17, delay: -14, emergeDelay: 0.6, opacity: 0.38, tier: 2, speckles: 8 },
  { top: 5, left: 78, size: 30, shape: 3, color: "noir", baseRotation: -34, drift: "e", duration: 29, delay: -5, emergeDelay: 0.7, opacity: 0.35, tier: 2, speckles: 8 },
  { top: 46, left: 47, size: 26, shape: 0, color: "rose", baseRotation: 12, drift: "c", duration: 21, delay: -18, emergeDelay: 0.8, opacity: 0.32, tier: 2, speckles: 6 },
  { top: 94, left: 74, size: 40, shape: 4, color: "creme", baseRotation: -16, drift: "f", duration: 24, delay: -8, emergeDelay: 0.9, opacity: 0.4, tier: 2, veins: true, speckles: 10 },
  { top: 33, left: 12, size: 28, shape: 5, color: "terracotta", baseRotation: 40, drift: "a", duration: 17, delay: -13, emergeDelay: 1.0, opacity: 0.36, tier: 3, speckles: 6 },
  { top: 55, left: 90, size: 32, shape: 2, color: "pierre", baseRotation: -22, drift: "b", duration: 14, delay: -6, emergeDelay: 1.1, opacity: 0.38, tier: 3, speckles: 8 },
];

/**
 * Micro-aggregate dust field: seeded, deterministic, generated once at
 * module scope. 36 entries total, sliced by tier (12 / +12 / +12) so
 * mobile shows the first 12 (within the 10–15 spec), tablet 24, desktop
 * all 36 (within the 25–45 spec).
 */
function generateMicroAggregates(count: number): MineralFragmentConfig[] {
  const rng = mulberry32(20260913);
  const fragments: MineralFragmentConfig[] = [];

  for (let i = 0; i < count; i++) {
    const tier: Tier = i < 12 ? 1 : i < 24 ? 2 : 3;
    fragments.push({
      top: rng() * 100,
      left: rng() * 100,
      size: 3 + rng() * 11,
      shape: Math.floor(rng() * MICRO_SHAPES.length),
      color: COLOR_KEYS[Math.floor(rng() * COLOR_KEYS.length)],
      baseRotation: rng() * 360,
      drift: MICRO_DRIFTS[Math.floor(rng() * MICRO_DRIFTS.length)],
      duration: DURATIONS[Math.floor(rng() * DURATIONS.length)],
      delay: -(rng() * 30),
      emergeDelay: rng() * 1.4,
      opacity: 0.15 + rng() * 0.35,
      tier,
    });
  }
  return fragments;
}

export const MICRO_AGGREGATES: MineralFragmentConfig[] = generateMicroAggregates(36);
