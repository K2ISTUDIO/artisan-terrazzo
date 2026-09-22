import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { buildMetadata } from "@/lib/metadata";
import { globalFaq } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "Qu'est-ce que le terrazzo ? Définition, technique et usages",
  description:
    "Le terrazzo est un revêtement composé de granulats liés puis poncé et poli. Découvrez sa fabrication, ses usages et les différences avec le granito.",
  path: "/terrazzo",
});

export default function TerrazzoPage() {
  return (
    <ServicePage
      path="/terrazzo"
      crumbs={[{ name: "Le terrazzo", path: "/terrazzo" }]}
      eyebrow="Le matériau"
      h1="Le terrazzo : un revêtement minéral composé et coulé sur mesure"
      intro="Le terrazzo est un revêtement fait de granulats — marbre, granit, verre ou laiton — noyés dans un liant, puis poncé et poli pour révéler une surface lisse et mouchetée. Coulé directement sur le chantier, il forme un sol continu, sans joint de carreau, propre à chaque projet."
      heroImage="/images/realisations/chantier-15.jpg"
      heroImageAlt="Sol en terrazzo aux granulats de marbre variés"
      highlights={[
        "Un revêtement minéral, sans motif industriel répété",
        "Coulé sur place ou posé en carreaux selon le projet",
        "Adapté aux sols, plans de travail, vasques et escaliers",
      ]}
      blocks={[
        {
          heading: "Une technique ancienne, toujours actuelle",
          image: "/images/realisations/chantier-06.jpg",
          imageAlt: "Coulage d'un terrazzo sur chantier",
          paragraphs: [
            "Le terrazzo tire son nom de l'italien « terrazza » : à l'origine, les artisans vénitiens réutilisaient des chutes de marbre pour composer des sols de terrasses. La technique s'est ensuite diffusée dans toute l'Europe, notamment en France sous le nom de granito, où elle a habillé pendant des décennies les halls d'immeuble, les écoles et les commerces.",
            "Aujourd'hui, le terrazzo revient sur le devant de la scène en décoration intérieure pour sa capacité à produire un sol unique, minéral et durable, à mi-chemin entre le carrelage et la pierre naturelle.",
          ],
        },
        {
          heading: "De quoi est composé un terrazzo ?",
          image: "/images/realisations/chantier-27.jpg",
          imageAlt: "Granulats de marbre avant coulage d'un terrazzo",
          reverse: true,
          paragraphs: [
            "Un terrazzo associe deux éléments : le liant, qui peut être cimentaire ou en résine, et les granulats, qui donnent au sol son caractère. La nature, la taille et la densité des granulats déterminent en grande partie l'aspect final du terrazzo, du grain fin et discret au granulat large et graphique.",
          ],
          bullets: [
            "Marbre et pierres calcaires, pour un rendu classique",
            "Granit, plus dense, pour les zones à fort passage",
            "Verre recyclé, pour des touches de couleur franches",
            "Laiton, en filets ou en bordures, pour souligner un dessin",
          ],
        },
        {
          heading: "Terrazzo coulé ou carreaux terrazzo ?",
          image: "/images/realisations/chantier-11.jpg",
          imageAlt: "Sol terrazzo continu sans joint de carreau",
          paragraphs: [
            "Le terrazzo coulé sur place est composé directement sur le chantier : il forme un sol monolithique, sans joint de carreau, et peut intégrer des bandes de laiton, des motifs ou des zones de teintes différentes. C'est la technique sur laquelle nous concentrons notre savoir-faire.",
            "Les carreaux terrazzo, préfabriqués en usine, s'installent comme un carrelage classique. Ils offrent davantage de régularité mais moins de liberté de composition qu'un coulage sur place.",
          ],
        },
      ]}
      faq={globalFaq.filter((f) =>
        [
          "Qu'est-ce que le terrazzo ?",
          "Quelle différence entre terrazzo et granito ?",
          "Quelle différence entre terrazzo coulé et carreaux terrazzo ?",
          "Quelle épaisseur pour un terrazzo coulé ?",
          "Le terrazzo peut-il se fissurer ?",
        ].includes(f.question)
      )}
      related={[
        { label: "Terrazzo coulé sur place", href: "/terrazzo-coule" },
        { label: "Le granito", href: "/granito" },
        { label: "Prix du terrazzo au m²", href: "/prix-terrazzo" },
        { label: "Nos réalisations", href: "/realisations" },
      ]}
      ctaTitle="Un projet de terrazzo à étudier ?"
      ctaDescription="Présentez-nous votre projet : nous vous répondons avec une première analyse de faisabilité."
      schemaName="Réalisation de terrazzo sur mesure"
      schemaDescription="Conseil, composition et réalisation de terrazzo coulé sur place pour particuliers et professionnels."
    />
  );
}
