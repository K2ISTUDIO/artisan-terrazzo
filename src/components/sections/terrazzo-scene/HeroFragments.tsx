import { HERO_FRAGMENTS, type Tier } from "./data";
import { MineralFragment } from "./MineralFragment";

const TIER_CLASS: Record<Tier, string> = {
  1: "",
  2: "hidden md:block",
  3: "hidden lg:block",
};

/** Niveau 3 — 3 à 5 grands fragments, partiellement hors écran, les plus travaillés. */
export function HeroFragments() {
  return (
    <>
      {HERO_FRAGMENTS.map((config, i) => (
        <div key={i} className={TIER_CLASS[config.tier]}>
          <MineralFragment config={config} id={`hero-${i}`} shapeSet="hero" />
        </div>
      ))}
    </>
  );
}
