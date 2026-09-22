import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { buildMetadata } from "@/lib/metadata";
import { globalFaq } from "@/data/faq";
import { JsonLd, professionalServiceSchema } from "@/lib/schema";
import { CheckIcon } from "@/components/ui/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Prix du terrazzo au m² : fourchettes et critères de variation",
  description:
    "Combien coûte un terrazzo au m² ? Fourchettes indicatives selon la technique, la surface et les granulats, et les critères qui font varier le prix.",
  path: "/prix-terrazzo",
});

const fourchettes = [
  {
    title: "Terrazzo coulé sur place",
    range: "150 € – 400 € / m²",
    detail:
      "Pose comprise, hors préparation lourde du support. La fourchette varie selon la granulométrie, la présence de bandes de laiton ou de motifs, et la surface totale du chantier.",
  },
  {
    title: "Carreaux terrazzo (pose)",
    range: "80 € – 150 € / m²",
    detail:
      "Fourniture et pose de carreaux préfabriqués, hors carreaux eux-mêmes selon le fournisseur. Une solution plus rapide à mettre en œuvre qu'un coulage sur place.",
  },
  {
    title: "Rénovation & ponçage",
    range: "40 € – 90 € / m²",
    detail:
      "Ponçage et polissage d'un terrazzo ou granito existant, hors réparations lourdes (fissures importantes, zones descellées étendues).",
  },
  {
    title: "Plan de travail terrazzo",
    range: "300 € – 700 € / mètre linéaire",
    detail:
      "Selon l'épaisseur de la dalle, les découpes (évier, plaque) et la complexité de la finition des chants.",
  },
];

const criteres = [
  "La technique retenue : coulé sur place ou carreaux préfabriqués",
  "L'état et la nature du support existant (chape à prévoir ou non)",
  "La surface totale du chantier : les petites surfaces coûtent proportionnellement plus cher",
  "La nature des granulats (marbre courant, granulats rares, verre, laiton)",
  "La complexité du dessin : teinte unique ou motifs, bandes et bordures",
  "L'accessibilité du chantier et les contraintes logistiques (étage, copropriété)",
];

export default function PrixTerrazzoPage() {
  return (
    <>
      <JsonLd
        data={professionalServiceSchema({
          name: "Étude de prix terrazzo",
          description: "Estimation du prix d'un projet de terrazzo ou granito selon la technique, la surface et les granulats.",
          url: "/prix-terrazzo",
        })}
      />
      <Breadcrumbs items={[{ name: "Prix du terrazzo", path: "/prix-terrazzo" }]} />

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-4">Budget</p>
            <h1 className="font-display text-4xl md:text-5xl text-ink text-balance leading-[1.08]">
              Quel est le prix du terrazzo au m² ?
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink/70 leading-relaxed max-w-xl">
              Il n&rsquo;existe pas un prix unique du terrazzo : le coût dépend de la technique, de la surface, de
              l&rsquo;état du support et des granulats choisis. Voici des fourchettes indicatives pour vous situer
              avant une étude précise de votre projet.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/realisations/chantier-19.jpg"
              alt="Sol en terrazzo poli de grande surface"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t border-line bg-bone-dark/40">
        <div className="container-page">
          <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Fourchettes indicatives</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink text-balance max-w-2xl">
            Des ordres de grandeur, à affiner selon votre chantier
          </h2>
          <p className="mt-4 text-sm text-ink/60 max-w-2xl">
            Ces montants sont donnés à titre indicatif, à partir d&rsquo;ordres de grandeur observés sur le marché
            français. Ils ne constituent pas un devis : chaque projet fait l&rsquo;objet d&rsquo;une étude de
            faisabilité avant chiffrage.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {fourchettes.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-base font-medium text-ink">{item.title}</h3>
                <p className="mt-2 font-display text-2xl text-brass-dark">{item.range}</p>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t border-line">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink text-balance">
              Les critères qui font varier le prix
            </h2>
            <ul className="mt-6 space-y-3">
              {criteres.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm md:text-base text-ink/75">
                  <CheckIcon className="w-4 h-4 text-brass-dark shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink text-balance">Comment obtenir un chiffrage précis</h2>
            <p className="mt-4 text-sm md:text-base text-ink/70 leading-relaxed">
              Le moyen le plus fiable d&rsquo;obtenir un prix précis reste l&rsquo;étude de votre projet : surface
              exacte, photos du support existant, teinte et granulats envisagés. Notre formulaire de demande
              d&rsquo;étude reprend ces éléments en quelques minutes pour vous répondre avec une première fourchette
              adaptée à votre chantier.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion items={globalFaq.filter((f) => f.question.toLowerCase().includes("prix") || f.question.includes("m²") || f.question.includes("épaisseur"))} />
      <RelatedLinks
        links={[
          { label: "Terrazzo coulé sur place", href: "/terrazzo-coule" },
          { label: "Qu'est-ce que le terrazzo", href: "/terrazzo" },
          { label: "Rénovation de terrazzo", href: "/renovation-terrazzo" },
          { label: "Nos réalisations", href: "/realisations" },
        ]}
      />
      <CTASection
        title="Obtenir une estimation pour votre projet"
        description="Renseignez la surface et le type de projet : nous revenons vers vous avec une fourchette adaptée à votre chantier."
        primaryLabel="Obtenir une estimation"
      />
    </>
  );
}
