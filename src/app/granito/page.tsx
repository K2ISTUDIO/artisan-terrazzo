import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { buildMetadata } from "@/lib/metadata";
import { globalFaq } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "Granito : la technique française du terrazzo coulé",
  description:
    "Le granito désigne le terrazzo traditionnel à base de ciment et de granulats de marbre, coulé sur place et poncé. Technique, entretien et rénovation.",
  path: "/granito",
});

export default function GranitoPage() {
  return (
    <ServicePage
      path="/granito"
      crumbs={[{ name: "Granito", path: "/granito" }]}
      eyebrow="Le terme français"
      h1="Le granito, la technique historique du terrazzo"
      intro="En France, « granito » désigne le terrazzo réalisé selon la méthode traditionnelle : granulats de marbre liés au ciment, coulés en place puis poncés mécaniquement. C'est le revêtement que l'on retrouve dans de nombreux halls d'immeuble et bâtiments du XXe siècle."
      heroImage="/images/realisations/chantier-13.jpg"
      heroImageAlt="Sol en granito ancien dans un couloir d'immeuble"
      highlights={[
        "La technique d'origine du terrazzo à la française",
        "Un sol massif, dense, conçu pour durer plusieurs décennies",
        "Souvent présent — et à révéler — dans les immeubles anciens",
      ]}
      blocks={[
        {
          heading: "Granito et terrazzo : le même savoir-faire",
          image: "/images/realisations/chantier-14.jpg",
          imageAlt: "Détail d'un sol en granito avec granulats de marbre",
          paragraphs: [
            "« Terrazzo » est le terme international pour cette famille de revêtements ; « granito » en est la déclinaison française, historiquement liée au travail du ciment et des granulats de marbre. Sur le fond, la technique reste la même : composition, coulage, ponçage et polissage.",
            "De nombreux immeubles parisiens et franciliens construits entre 1900 et 1970 possèdent encore un granito d'origine dans leurs entrées, cages d'escalier ou paliers — souvent recouvert ou terni, mais rarement irrécupérable.",
          ],
        },
        {
          heading: "Reconnaître un granito ancien",
          image: "/images/realisations/chantier-16.jpg",
          imageAlt: "Sol en granito poli aux tons clairs",
          reverse: true,
          paragraphs: [
            "Un granito d'origine se reconnaît à ses granulats de marbre relativement fins et réguliers, à sa teinte souvent claire, et à la présence fréquente de baguettes de laiton délimitant des zones ou des motifs géométriques.",
          ],
          bullets: [
            "Surface mate ou terne : signe d'usure, pas nécessairement de dégradation",
            "Griffures et taches localisées : traitables par ponçage ciblé",
            "Fissures ou zones descellées : à diagnostiquer avant toute intervention",
          ],
        },
      ]}
      faq={globalFaq.filter((f) =>
        [
          "Quelle différence entre terrazzo et granito ?",
          "Comment rénover un ancien granito ?",
          "Comment entretenir le terrazzo ?",
          "Le terrazzo peut-il se fissurer ?",
        ].includes(f.question)
      )}
      related={[
        { label: "Rénovation de granito", href: "/renovation-granito" },
        { label: "Rénovation de terrazzo", href: "/renovation-terrazzo" },
        { label: "Qu'est-ce que le terrazzo", href: "/terrazzo" },
        { label: "Artisan terrazzo à Paris", href: "/artisan-terrazzo-paris" },
      ]}
      ctaTitle="Un granito ancien à faire réviser ?"
      ctaDescription="Envoyez-nous quelques photos de votre sol : nous vous indiquons s'il peut retrouver son éclat d'origine."
      schemaName="Granito — terrazzo traditionnel"
      schemaDescription="Réalisation et rénovation de granito, technique traditionnelle du terrazzo à base de ciment et granulats de marbre."
    />
  );
}
