import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page py-14 md:py-20 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-5">
            Terrazzo &amp; granito &middot; Paris &amp; Île-de-France
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] text-ink leading-[1.06] text-balance">
            Artisan terrazzo à Paris et en Île-de-France
          </h1>
          <p className="mt-6 text-base md:text-lg text-ink/70 leading-relaxed max-w-xl">
            Création, rénovation et réalisation de terrazzo et granito sur mesure pour particuliers, architectes et
            professionnels.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/demande-devis">Demander une étude de projet</ButtonLink>
            <ButtonLink href="/realisations" variant="secondary">
              Voir nos réalisations
            </ButtonLink>
          </div>
        </div>

        <div className="grid grid-cols-5 grid-rows-4 gap-3 h-[420px] sm:h-[480px]">
          <div className="col-span-3 row-span-3 relative rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/realisations/chantier-11.jpg"
              alt="Sol en terrazzo poli dans une pièce de vie"
              fill
              sizes="(min-width: 1024px) 35vw, 60vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/realisations/chantier-05.jpg"
              alt="Détail de granulats de marbre dans un terrazzo poli"
              fill
              sizes="(min-width: 1024px) 20vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/realisations/chantier-06.jpg"
              alt="Artisan en cours de coulage d'un terrazzo"
              fill
              sizes="(min-width: 1024px) 20vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 relative rounded-3xl overflow-hidden bg-stone">
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
