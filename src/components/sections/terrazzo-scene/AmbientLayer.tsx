/**
 * A single soft, off-center light wash plus a near-imperceptible drift —
 * meant to read as "matière éclairée en studio photo", not a glow/neon/
 * glassmorphism effect. Pure `transform`, no filter, no repaint cost.
 */
export function AmbientLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="tz-ambient absolute"
        style={{
          top: "-20%",
          left: "-15%",
          width: "140%",
          height: "140%",
          background:
            "radial-gradient(ellipse at 38% 32%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 35%, rgba(255,255,255,0) 60%)",
        }}
      />
    </div>
  );
}
