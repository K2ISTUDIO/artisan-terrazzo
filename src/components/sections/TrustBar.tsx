import Image from "next/image";
import { clientReferences } from "@/data/references";

export function TrustBar() {
  const track = [...clientReferences, ...clientReferences];

  return (
    <section className="border-y border-line bg-bone-dark/40 py-10 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-mineral mb-7">Ils nous font confiance</p>
      <div className="relative">
        <div className="marquee-track flex w-max items-center gap-16 px-8">
          {track.map((ref, i) => (
            <div key={`${ref.name}-${i}`} className="relative h-9 w-32 shrink-0">
              <Image
                src={ref.logo}
                alt={ref.name}
                fill
                sizes="128px"
                className="object-contain grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bone-dark/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bone-dark/60 to-transparent" />
      </div>
    </section>
  );
}
