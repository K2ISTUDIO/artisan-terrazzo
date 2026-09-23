import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Réalisations et inspirations terrazzo",
  description:
    "Une sélection d'images de terrazzo et de granito — sols, plans de travail, chantiers en cours — pour illustrer la diversité des teintes, granulats et finitions.",
  path: "/realisations",
});

const gallery = [
  { src: "/images/realisations/chantier-11.jpg", alt: "Sol en terrazzo poli dans une pièce de vie", tag: "Sol" },
  { src: "/images/realisations/chantier-15.jpg", alt: "Sol en terrazzo dans une cuisine", tag: "Cuisine" },
  { src: "/images/realisations/chantier-02.jpg", alt: "Détail de granulats de marbre colorés", tag: "Matière" },
  { src: "/images/plan-de-travail/plan-cuisine.jpg", alt: "Plan de travail en terrazzo dans une cuisine", tag: "Plan de travail" },
  { src: "/images/realisations/chantier-13.jpg", alt: "Sol en granito ancien dans un immeuble", tag: "Granito ancien" },
  { src: "/images/realisations/chantier-19.jpg", alt: "Grand sol en terrazzo dans un espace ouvert", tag: "Commerce" },
  { src: "/images/realisations/chantier-06.jpg", alt: "Coulage d'un terrazzo sur chantier", tag: "Chantier" },
  { src: "/images/realisations/chantier-08.jpg", alt: "Ponçage et finition d'un terrazzo", tag: "Ponçage" },
  { src: "/images/realisations/chantier-16.jpg", alt: "Sol en granito poli aux tons clairs", tag: "Granito" },
  { src: "/images/realisations/chantier-24.jpg", alt: "Cuisine avec sol en terrazzo", tag: "Cuisine" },
  { src: "/images/realisations/chantier-14.jpg", alt: "Détail d'un sol en granito", tag: "Détail" },
  { src: "/images/realisations/chantier-20.jpg", alt: "Ponçage mécanique d'un grand sol en terrazzo", tag: "Chantier" },
];

export default function RealisationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Réalisations", path: "/realisations" }]} />

      <section className="py-14 md:py-20">
        <div className="container-page max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-4">Terrazzo en images</p>
          <h1 className="font-display text-4xl md:text-5xl text-ink text-balance leading-[1.08]">
            Réalisations &amp; inspirations
          </h1>
          <p className="mt-5 text-base md:text-lg text-ink/70 leading-relaxed">
            Cette galerie rassemble des exemples de terrazzo et de granito — sols, plans de travail, chantiers en
            cours — choisis pour illustrer la diversité des teintes, granulats et finitions que nous mettons en
            œuvre. Elle s&rsquo;enrichira progressivement de photos de nos propres chantiers, au fil des livraisons.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-page columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {gallery.map((item) => (
            <figure key={item.src} className="relative break-inside-avoid rounded-2xl overflow-hidden bg-stone group">
              <div className="relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={750}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs uppercase tracking-wide text-bone">{item.tag}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      <CTASection
        title="Vous avez un projet similaire ?"
        description="Décrivez-nous votre pièce, votre surface et vos envies de teintes ou de granulats."
        primaryLabel="Parler de mon projet"
        primaryHref="/contact"
      />
    </>
  );
}
