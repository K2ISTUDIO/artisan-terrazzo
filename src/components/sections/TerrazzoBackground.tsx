/**
 * Floating terrazzo-chip background for the hero. Pure CSS + inline SVG —
 * no animation library, no client JS. Fragment data below is hand-authored
 * (not Math.random()) so server and client render identically and nothing
 * shifts on hydration.
 *
 * Only `transform` is animated per fragment (via one of the tz-drift-*
 * keyframes in globals.css); opacity is a static inline value, so a frame
 * frozen by prefers-reduced-motion still shows a fully visible chip rather
 * than a half-faded one.
 *
 * Fragment count is tiered by breakpoint via Tailwind's `hidden md:block` /
 * `hidden lg:block`, not JS viewport detection: ~12 fragments on mobile,
 * ~20 from tablet, ~28 from desktop up — per the brief's mobile/tablet/
 * desktop density targets.
 */

const SHAPES = [
  "M50 5 L85 20 L95 55 L70 90 L30 85 L10 50 Z",
  "M50 10 L90 40 L75 90 L20 80 L5 35 Z",
  "M20 10 L80 5 L95 45 L60 95 L15 70 Z",
  "M50 0 L100 60 L60 100 L0 70 Z",
  "M30 0 L80 15 L100 60 L70 100 L25 95 L0 50 Z",
] as const;

// Terrazzo-inspired palette: kept desaturated, no pure/bright hues.
const PALETTE = {
  terracotta: "#b1552e",
  sand: "#d9cbb0",
  stone: "#c9bda3",
  sage: "#8a9a7e",
  deepBlue: "#3d4f5c",
  dustyPink: "#cf9d94",
  brass: "#c9a24f",
  charcoal: "#3a352c",
} as const;

type Fragment = {
  top: number; // %
  left: number; // %
  size: number; // px
  shape: number; // index into SHAPES
  color: keyof typeof PALETTE;
  baseRotation: number; // deg, static
  drift: 1 | 2 | 3 | 4 | 5 | 6; // which tz-drift-N keyframe
  duration: number; // s
  delay: number; // s, applied negative so loops start pre-desynced
  opacity: number;
  blur?: boolean;
  fleck?: boolean; // add 2-3 small internal specks for a more "real chip" look
  tier: 1 | 2 | 3; // 1 = always visible, 2 = md+, 3 = lg+
};

// Tier 1 (12): always visible — deliberately slower/quieter, since this is
// also the full mobile set ("animation plus lente et plus discrète").
// Tier 2 (+8, 20 total from md): tablet.
// Tier 3 (+8, 28 total from lg): desktop.
const FRAGMENTS: Fragment[] = [
  { top: 8, left: 12, size: 34, shape: 0, color: "terracotta", baseRotation: 12, drift: 1, duration: 26, delay: -4, opacity: 0.25, tier: 1 },
  { top: 18, left: 78, size: 26, shape: 2, color: "sage", baseRotation: -18, drift: 2, duration: 30, delay: -12, opacity: 0.22, tier: 1 },
  { top: 62, left: 6, size: 22, shape: 3, color: "deepBlue", baseRotation: 40, drift: 3, duration: 28, delay: -8, opacity: 0.23, tier: 1 },
  { top: 80, left: 82, size: 30, shape: 1, color: "dustyPink", baseRotation: -8, drift: 4, duration: 24, delay: -16, opacity: 0.26, tier: 1 },
  { top: 40, left: 92, size: 60, shape: 4, color: "sand", baseRotation: 6, drift: 5, duration: 34, delay: -20, opacity: 0.31, blur: true, fleck: true, tier: 1 },
  { top: 30, left: 40, size: 20, shape: 0, color: "charcoal", baseRotation: 24, drift: 6, duration: 27, delay: -6, opacity: 0.19, tier: 1 },
  { top: 70, left: 45, size: 24, shape: 2, color: "brass", baseRotation: -30, drift: 1, duration: 31, delay: -18, opacity: 0.25, tier: 1 },
  { top: 12, left: 55, size: 18, shape: 3, color: "stone", baseRotation: 55, drift: 2, duration: 25, delay: -3, opacity: 0.2, tier: 1 },
  { top: 90, left: 25, size: 28, shape: 1, color: "terracotta", baseRotation: 15, drift: 3, duration: 29, delay: -22, opacity: 0.23, tier: 1 },
  { top: 5, left: 30, size: 70, shape: 4, color: "stone", baseRotation: -4, drift: 4, duration: 36, delay: -10, opacity: 0.28, blur: true, fleck: true, tier: 1 },
  { top: 55, left: 60, size: 20, shape: 0, color: "deepBlue", baseRotation: 33, drift: 5, duration: 26, delay: -14, opacity: 0.22, tier: 1 },
  { top: 24, left: 20, size: 16, shape: 2, color: "sage", baseRotation: -45, drift: 6, duration: 23, delay: -2, opacity: 0.2, tier: 1 },

  // Tablet and up
  { top: 48, left: 15, size: 32, shape: 3, color: "dustyPink", baseRotation: 20, drift: 1, duration: 22, delay: -9, opacity: 0.29, tier: 2 },
  { top: 15, left: 65, size: 24, shape: 1, color: "brass", baseRotation: -22, drift: 2, duration: 20, delay: -5, opacity: 0.28, tier: 2 },
  { top: 85, left: 48, size: 18, shape: 0, color: "charcoal", baseRotation: 10, drift: 3, duration: 24, delay: -13, opacity: 0.22, tier: 2 },
  { top: 35, left: 5, size: 26, shape: 4, color: "terracotta", baseRotation: -14, drift: 4, duration: 21, delay: -7, opacity: 0.31, tier: 2 },
  { top: 65, left: 88, size: 22, shape: 2, color: "sand", baseRotation: 28, drift: 5, duration: 25, delay: -19, opacity: 0.26, tier: 2 },
  { top: 3, left: 48, size: 78, shape: 4, color: "sage", baseRotation: 8, drift: 6, duration: 33, delay: -24, opacity: 0.23, blur: true, fleck: true, tier: 2 },
  { top: 92, left: 65, size: 20, shape: 1, color: "deepBlue", baseRotation: -36, drift: 1, duration: 19, delay: -1, opacity: 0.25, tier: 2 },
  { top: 20, left: 8, size: 16, shape: 3, color: "brass", baseRotation: 48, drift: 2, duration: 23, delay: -15, opacity: 0.2, tier: 2 },

  // Desktop and up
  { top: 10, left: 88, size: 20, shape: 0, color: "dustyPink", baseRotation: -10, drift: 3, duration: 21, delay: -11, opacity: 0.28, tier: 3 },
  { top: 58, left: 30, size: 16, shape: 2, color: "stone", baseRotation: 32, drift: 4, duration: 20, delay: -6, opacity: 0.2, tier: 3 },
  { top: 75, left: 10, size: 24, shape: 1, color: "sage", baseRotation: -25, drift: 5, duration: 22, delay: -17, opacity: 0.26, tier: 3 },
  { top: 42, left: 75, size: 18, shape: 3, color: "charcoal", baseRotation: 18, drift: 6, duration: 24, delay: -3, opacity: 0.19, tier: 3 },
  { top: 88, left: 92, size: 22, shape: 0, color: "terracotta", baseRotation: 5, drift: 1, duration: 26, delay: -21, opacity: 0.25, tier: 3 },
  { top: 28, left: 60, size: 14, shape: 4, color: "brass", baseRotation: -50, drift: 2, duration: 19, delay: -8, opacity: 0.22, tier: 3 },
  { top: 6, left: 68, size: 18, shape: 2, color: "deepBlue", baseRotation: 42, drift: 3, duration: 23, delay: -14, opacity: 0.23, tier: 3 },
  { top: 68, left: 52, size: 16, shape: 1, color: "sand", baseRotation: -6, drift: 4, duration: 25, delay: -19, opacity: 0.26, tier: 3 },
];

const TIER_CLASS: Record<Fragment["tier"], string> = {
  1: "",
  2: "hidden md:block",
  3: "hidden lg:block",
};

export function TerrazzoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {FRAGMENTS.map((f, i) => (
        <div
          key={i}
          className={`terrazzo-fragment ${TIER_CLASS[f.tier]}`}
          style={{
            top: `${f.top}%`,
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            filter: f.blur ? "blur(1.5px)" : undefined,
            animationName: `tz-drift-${f.drift}`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 100 100"
            width={f.size}
            height={f.size}
            style={{ transform: `rotate(${f.baseRotation}deg)`, display: "block" }}
          >
            <path d={SHAPES[f.shape]} fill={PALETTE[f.color]} stroke="rgba(26,23,18,0.10)" strokeWidth={1.5} />
            {f.fleck && (
              <>
                <circle cx="38" cy="42" r="6" fill="rgba(26,23,18,0.14)" />
                <circle cx="62" cy="58" r="4" fill="rgba(247,244,238,0.35)" />
                <circle cx="55" cy="30" r="3" fill="rgba(26,23,18,0.10)" />
              </>
            )}
          </svg>
        </div>
      ))}
    </div>
  );
}
