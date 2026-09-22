import type { CSSProperties } from "react";
import {
  HERO_SHAPES,
  IVOIRE_HIGHLIGHT,
  MAIN_SHAPES,
  PALETTE,
  generateSpeckles,
  type MineralFragmentConfig,
} from "./data";

/**
 * Renders one main/hero fragment as a real mineral chip rather than a flat
 * polygon.
 *
 * Hero fragments (shapeSet="hero") get the full treatment: two separate
 * faces — a lit face and a shadowed face, sharing one straight "ridge"
 * edge — each with its own gradient, so the chunk reads as having actual
 * thickness rather than being a single flat-painted silhouette. A dense
 * field of generated aggregate specks is clipped to the full outline, plus
 * an optional curved vein, a soft highlight catching the lit face, a
 * static (never animated) feTurbulence grain filter, and a CSS
 * drop-shadow on the wrapper to ground the piece.
 *
 * Main fragments (shapeSet="main") keep a single face — they're smaller
 * and far more numerous, so the two-face split wouldn't read at that size
 * and isn't worth the extra paint cost — but still get a real gradient and
 * a modest speckle field.
 *
 * Structure per fragment (outside in):
 *   .tz-emerge          — one-shot mount animation (opacity/blur/scale/translateY)
 *     .tz-drift          — infinite loop animation (translate3d + rotate only)
 *       <svg>             — static base rotation + the actual artwork
 */
export function MineralFragment({
  config,
  id,
  shapeSet = "main",
}: {
  config: MineralFragmentConfig;
  id: string;
  shapeSet?: "main" | "hero";
}) {
  const { top, left, size, shape, color, baseRotation, drift, duration, delay, emergeDelay, opacity, veins, speckles, highlight, grain } =
    config;
  const tone = PALETTE[color];
  const gradId = `tz-grad-${id}`;
  const litGradId = `tz-grad-lit-${id}`;
  const shadowGradId = `tz-grad-shadow-${id}`;
  const filterId = `tz-grain-${id}`;
  const clipId = `tz-clip-${id}`;
  // Scales continuously with viewport width instead of a fixed px size, so
  // the 100-260px hero pieces don't overwhelm a 390px screen: ~40% of their
  // authored size on phones, their full authored size from ~1100px up.
  const responsiveSize = `clamp(${Math.round(size * 0.4)}px, ${(size * 0.1).toFixed(1)}vw, ${size}px)`;
  const specks = speckles ? generateSpeckles(shape * 97 + size, speckles) : [];

  const isHero = shapeSet === "hero";
  const heroShape = HERO_SHAPES[shape % HERO_SHAPES.length];
  const mainPath = MAIN_SHAPES[shape % MAIN_SHAPES.length];
  const outline = isHero ? heroShape.full : mainPath;

  return (
    <div
      className="absolute"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: responsiveSize,
        height: responsiveSize,
      }}
    >
      <div
        className="tz-emerge"
        style={
          {
            "--tz-opacity": opacity,
            "--tz-emerge-delay": `${emergeDelay}s`,
          } as CSSProperties
        }
      >
        <div
          className="tz-drift"
          style={{
            animationName: `tz-drift-${drift}`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            filter: isHero ? "drop-shadow(0 10px 18px rgba(26,23,18,0.16))" : undefined,
          }}
        >
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            style={{ transform: `rotate(${baseRotation}deg)`, display: "block", overflow: "visible" }}
          >
            <defs>
              <linearGradient id={gradId} x1="15%" y1="0%" x2="85%" y2="100%">
                <stop offset="0%" stopColor={tone.light} />
                <stop offset="55%" stopColor={tone.base} />
                <stop offset="100%" stopColor={tone.dark} />
              </linearGradient>
              {isHero && (
                <>
                  <linearGradient id={litGradId} x1="20%" y1="0%" x2="80%" y2="100%">
                    <stop offset="0%" stopColor={IVOIRE_HIGHLIGHT} />
                    <stop offset="60%" stopColor={tone.light} />
                    <stop offset="100%" stopColor={tone.base} />
                  </linearGradient>
                  <linearGradient id={shadowGradId} x1="10%" y1="0%" x2="90%" y2="100%">
                    <stop offset="0%" stopColor={tone.base} />
                    <stop offset="55%" stopColor={tone.dark} />
                    <stop offset="100%" stopColor="#1A1712" />
                  </linearGradient>
                </>
              )}
              <clipPath id={clipId}>
                <path d={outline} />
              </clipPath>
              {grain && (
                <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={shape + 3} result="noise" />
                  <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0" />
                  <feComposite operator="over" in2="SourceGraphic" />
                </filter>
              )}
            </defs>

            <g filter={grain ? `url(#${filterId})` : undefined}>
              {isHero ? (
                <>
                  <path d={heroShape.lit} fill={`url(#${litGradId})`} stroke="rgba(26,23,18,0.14)" strokeWidth={1} />
                  <path d={heroShape.shadow} fill={`url(#${shadowGradId})`} stroke="rgba(26,23,18,0.22)" strokeWidth={1} />
                </>
              ) : (
                <path d={mainPath} fill={`url(#${gradId})`} stroke="rgba(26,23,18,0.14)" strokeWidth={1} />
              )}
            </g>

            {specks.length > 0 && (
              <g clipPath={`url(#${clipId})`}>
                {specks.map((s, i) => (
                  <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill={s.tone} opacity={0.75} />
                ))}
              </g>
            )}

            {veins && (
              <path d={veinPath(shape)} fill="none" stroke="rgba(26,23,18,0.16)" strokeWidth={1.1} strokeLinecap="round" />
            )}

            {highlight && (
              <ellipse
                cx="30"
                cy="26"
                rx="16"
                ry="9"
                fill={IVOIRE_HIGHLIGHT}
                opacity={0.35}
                style={{ transformOrigin: "30px 26px", transform: "rotate(-20deg)" }}
              />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}

// A handful of organic bezier vein paths, picked deterministically by
// shape index rather than randomly, so the same shape always pairs with
// the same vein for a coherent look.
function veinPath(shapeIndex: number): string {
  const veins = [
    "M12 70 C 30 55, 40 60, 50 40 S 70 25, 85 15",
    "M20 15 C 35 30, 30 50, 55 55 S 80 70, 90 85",
    "M10 40 C 30 35, 45 45, 60 35 S 85 40, 95 30",
    "M25 90 C 35 65, 55 70, 60 45 S 65 20, 55 5",
  ];
  return veins[shapeIndex % veins.length];
}
