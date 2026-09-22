import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { buildMetadata } from "@/lib/metadata";
import { globalFaq } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "Terrazzo pour salle de bains : sol, douche et plan vasque",
  description:
    "Sol de salle de bains, douche à l'italienne et plan vasque en terrazzo coulé sur place, avec une étanchéité et une finition adaptées aux pièces d'eau.",
  path: "/terrazzo-salle-de-bain",
});

export default function TerrazzoSalleDeBainPage() {
  return (
    <ServicePage
      path="/terrazzo-salle-de-bain"
      crumbs={[{ name: "Terrazzo salle de bains", path: "/terrazzo-salle-de-bain" }]}
      eyebrow="Pièce d'eau"
      h1="Le terrazzo en salle de bains"
      intro="Sol, douche à l'italienne, plan vasque : correctement mis en œuvre avec une étanchéité adaptée, le terrazzo se prête bien aux pièces d'eau, avec l'avantage d'un revêtement continu, sans joint de carrelage à entretenir."
      heroImage="/images/realisations/chantier-04.jpg"
      heroImageAlt="Pose de petits carreaux de marbre, technique proche du terrazzo en pièce d'eau"
      highlights={[
        "Sol continu, sans joint de carrelage entre le sol et la douche",
        "Étanchéité sous chape étudiée pour chaque configuration",
        "Plan vasque assorti au sol, sur mesure",
      ]}
      blocks={[
        {
          heading: "L'étanchéité, point clé du projet",
          image: "/images/realisations/chantier-07.jpg",
          imageAlt: "Préparation du support avant coulage en pièce humide",
          paragraphs: [
            "En salle de bains, la question technique centrale est l'étanchéité sous chape : un système d'étanchéité liquide (type SPEC ou SEL) est mis en œuvre avant le coulage du terrazzo, avec un traitement particulier des points singuliers — siphon de sol, jonctions mur/sol, receveur de douche.",
            "C'est un point que nous validons systématiquement lors de l'étude de faisabilité, avant tout devis.",
          ],
        },
        {
          heading: "Douche à l'italienne en continuité du sol",
          image: "/images/realisations/chantier-08.jpg",
          imageAlt: "Ponçage d'un sol terrazzo pouvant intégrer une douche à l'italienne",
          reverse: true,
          paragraphs: [
            "L'un des grands intérêts du terrazzo coulé en salle de bains est de pouvoir faire disparaître visuellement la limite entre le sol de la pièce et le receveur de douche : une même matière, une même teinte, avec simplement la pente d'évacuation intégrée au coulage.",
          ],
        },
      ]}
      faq={globalFaq.filter((f) => ["Le terrazzo est-il adapté à une salle de bains ?", "Comment entretenir le terrazzo ?"].includes(f.question))}
      related={[
        { label: "Plan de travail terrazzo", href: "/plan-de-travail-terrazzo" },
        { label: "Terrazzo coulé sur place", href: "/terrazzo-coule" },
        { label: "Qu'est-ce que le terrazzo", href: "/terrazzo" },
        { label: "Demander une étude", href: "/demande-devis" },
      ]}
      ctaTitle="Une salle de bains à concevoir en terrazzo ?"
      ctaDescription="Indiquez-nous la configuration de la pièce (douche, baignoire, superficie) : nous étudions la faisabilité technique."
      schemaName="Terrazzo pour salle de bains"
      schemaDescription="Réalisation de sols, douches à l'italienne et plans vasques en terrazzo pour salles de bains."
    />
  );
}
