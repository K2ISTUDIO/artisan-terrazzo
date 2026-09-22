import { MAIN_FRAGMENTS, type Tier } from "./data";
import { MineralFragment } from "./MineralFragment";

const TIER_CLASS: Record<Tier, string> = {
  1: "",
  2: "hidden md:block",
  3: "hidden lg:block",
};

/** Niveau 2 — 8 à 12 fragments minéraux principaux. */
export function FloatingFragments() {
  return (
    <>
      {MAIN_FRAGMENTS.map((config, i) => (
        <div key={i} className={TIER_CLASS[config.tier]}>
          <MineralFragment config={config} id={`main-${i}`} shapeSet="main" />
        </div>
      ))}
    </>
  );
}
