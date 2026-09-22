import type { CSSProperties } from "react";
import { MICRO_AGGREGATES, MICRO_SHAPES, PALETTE, type Tier } from "./data";

const TIER_CLASS: Record<Tier, string> = {
  1: "",
  2: "hidden md:block",
  3: "hidden lg:block",
};

/**
 * Niveau 1 — 25 à 45 micro-granulats. Deliberately cheap to render: flat
 * fill (no gradient/vein defs), no filters — at 3–14px that detail would
 * be imperceptible anyway, and this is the layer with the most instances.
 */
export function MicroAggregates() {
  return (
    <>
      {MICRO_AGGREGATES.map((f, i) => {
        const blurred = i % 5 === 0;
        return (
          <div key={i} className={TIER_CLASS[f.tier]}>
            <div
              className="absolute"
              style={{ top: `${f.top}%`, left: `${f.left}%`, width: f.size, height: f.size }}
            >
              <div
                className="tz-emerge"
                style={
                  {
                    "--tz-opacity": f.opacity,
                    "--tz-emerge-delay": `${f.emergeDelay}s`,
                    "--tz-blur-to": blurred ? "0.8px" : "0px",
                  } as CSSProperties
                }
              >
                <div
                  className="tz-drift"
                  style={{
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
                    <path d={MICRO_SHAPES[f.shape]} fill={PALETTE[f.color].base} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
