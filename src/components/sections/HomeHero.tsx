import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { TerrazzoScene } from "@/components/sections/terrazzo-scene";
import { siteConfig } from "@/lib/site-config";

export function HomeHero() {
  const { foundedYear } = siteConfig.stats;

  return (
    <section className="relative overflow-hidden">
      <TerrazzoScene />
      <div className="container-page relative z-10 py-14 md:py-20 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <p className="animate-fade-up text-xs uppercase tracking-[0.2em] text-brass-dark mb-5">
            Terrazzo &amp; granito &middot; Paris &amp; Île-de-France
          </p>
          <h1
            className="animate-fade-up font-display text-4xl sm:text-5xl lg:text-[3.4rem] text-ink leading-[1.06] text-balance"
            style={{ animationDelay: "120ms" }}
          >
            L&rsquo;artisan terrazzo, entreprise familiale
            {foundedYear ? ` depuis ${foundedYear}` : ""}, à Paris et en Île-de-France
          </h1>
          <p
            className="animate-fade-up mt-6 text-base md:text-lg text-ink/70 leading-relaxed max-w-xl"
            style={{ animationDelay: "240ms" }}
          >
            {foundedYear
              ? "Création, rénovation et réalisation de terrazzo et granito sur mesure pour particuliers, architectes et professionnels."
              : "Depuis plusieurs générations, nous créons, rénovons et réalisons des terrazzos et granitos sur mesure pour particuliers, architectes et professionnels."}
          </p>
          <div className="animate-fade-up mt-8 flex flex-col sm:flex-row gap-3.5" style={{ animationDelay: "360ms" }}>
            <Link
              href="/demande-devis"
              className="group inline-flex h-[50px] items-center justify-center gap-2.5 rounded-[4px] bg-anthracite px-7 text-sm font-medium tracking-wide text-bone transition-colors duration-[350ms] ease-out hover:bg-ink focus-ring"
            >
              Demander une étude de projet
              <ArrowRightIcon className="w-4 h-4 shrink-0 transition-transform duration-[350ms] ease-out group-hover:translate-x-1" />
            </Link>
            <Link
              href="/realisations"
              className="group inline-flex h-[50px] items-center justify-center gap-2.5 rounded-[4px] border border-anthracite/35 px-7 text-sm font-medium tracking-wide text-anthracite transition-colors duration-[350ms] ease-out hover:border-anthracite/60 hover:bg-stone/50 focus-ring"
            >
              Voir nos réalisations
              <ArrowRightIcon className="w-4 h-4 shrink-0 -rotate-45 transition-transform duration-[350ms] ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-5 grid-rows-4 gap-3 h-[420px] sm:h-[480px]">
          <div
            className="animate-fade-scale col-span-3 row-span-3 relative rounded-3xl overflow-hidden bg-stone"
            style={{ animationDelay: "150ms" }}
          >
            <Image
              src="/images/realisations/chantier-11.jpg"
              alt="Sol en terrazzo poli dans une pièce de vie"
              fill
              sizes="(min-width: 1024px) 35vw, 60vw"
              className="object-cover"
              priority
            />
          </div>
          <div
            className="animate-fade-scale col-span-2 row-span-2 relative rounded-3xl overflow-hidden bg-stone"
            style={{ animationDelay: "280ms" }}
          >
            <Image
              src="/images/realisations/chantier-05.jpg"
              alt="Détail de granulats de marbre dans un terrazzo poli"
              fill
              sizes="(min-width: 1024px) 20vw, 40vw"
              className="object-cover"
            />
          </div>
          <div
            className="animate-fade-scale col-span-2 row-span-2 relative rounded-3xl overflow-hidden bg-stone"
            style={{ animationDelay: "400ms" }}
          >
            <Image
              src="/images/realisations/chantier-06.jpg"
              alt="Artisan en cours de coulage d'un terrazzo"
              fill
              sizes="(min-width: 1024px) 20vw, 40vw"
              className="object-cover"
            />
          </div>
          <div
            className="animate-fade-scale col-span-3 row-span-1 relative rounded-3xl overflow-hidden bg-stone"
            style={{ animationDelay: "520ms" }}
          >
            <Image
              src="/images/realisations/chantier-08.jpg"
              alt="Ponçage et finition d'un terrazzo sur chantier"
              fill
              sizes="(min-width: 1024px) 35vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
