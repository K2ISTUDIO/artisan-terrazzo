"use client";

import { useEffect, useRef } from "react";
import { AmbientLayer } from "./AmbientLayer";
import { MicroAggregates } from "./MicroAggregates";
import { FloatingFragments } from "./FloatingFragments";
import { HeroFragments } from "./HeroFragments";

/**
 * "Terrazzo en suspension" — the full hero scene: an ambient light wash,
 * then three depth layers (micro dust, main fragments, hero fragments),
 * each wrapped in its own parallax layer so they react to the mouse at
 * different speeds/amplitudes (desktop + fine pointer only).
 *
 * The scene root is where `--mx` / `--my` (normalized -1..1) get set on
 * mousemove; every layer below just reads those two custom properties at
 * its own amplitude via `calc()`, so only one element receives JS writes
 * per frame no matter how many fragments exist. A CSS `transition` on
 * each layer (not a manual rAF lerp) provides the "smoothed, not 1:1
 * pixel-following" interpolation the brief asks for.
 */
export function TerrazzoScene() {
  const rootRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || !isDesktop || reducedMotion) return;

    function handleMove(event: MouseEvent) {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        const rect = root!.getBoundingClientRect();
        const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;
        root!.style.setProperty("--mx", nx.toFixed(3));
        root!.style.setProperty("--my", ny.toFixed(3));
      });
    }

    function handleLeave() {
      root!.style.setProperty("--mx", "0");
      root!.style.setProperty("--my", "0");
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    root.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      root.removeEventListener("mouseleave", handleLeave);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ ["--mx" as string]: 0, ["--my" as string]: 0 }}
      aria-hidden="true"
    >
      <AmbientLayer />

      <div
        className="tz-parallax-layer absolute inset-0"
        style={{ transform: "translate3d(calc(var(--mx) * 4px), calc(var(--my) * 4px), 0)" }}
      >
        <MicroAggregates />
      </div>

      <div
        className="tz-parallax-layer absolute inset-0"
        style={{
          transform: "translate3d(calc(var(--mx) * 10px), calc(var(--my) * 10px), 0)",
          transitionDuration: "0.5s",
        }}
      >
        <FloatingFragments />
      </div>

      <div
        className="tz-parallax-layer absolute inset-0"
        style={{
          transform: "translate3d(calc(var(--mx) * 18px), calc(var(--my) * 18px), 0)",
          transitionDuration: "0.7s",
        }}
      >
        <HeroFragments />
      </div>
    </div>
  );
}
