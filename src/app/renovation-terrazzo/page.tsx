import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { buildMetadata } from "@/lib/metadata";
import { globalFaq } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "Rénovation de terrazzo : ponçage, réparation et polissage",
  description:
    "Ponçage, réparation des zones abîmées et polissage d'un terrazzo existant : redonnez son éclat d'origine à votre sol sans le déposer.",
  path: "/renovation-terrazzo",
});

export default function RenovationTerrazzoPage() {
  return (
    <ServicePage
      path="/renovation-terrazzo"
      crumbs={[{ name: "Rénovation de terrazzo", path: "/renovation-terrazzo" }]}
      eyebrow="Rénovation"
      h1="Rénover un terrazzo existant"
      intro="Terne, taché ou griffé par des années d'usage, un terrazzo n'a presque jamais besoin d'être déposé. Un diagnostic, une réparation ciblée des zones abîmées, puis un ponçage complet et un polissage suffisent le plus souvent à lui redonner son éclat."
      heroImage="/images/realisations/chantier-20.jpg"
      heroImageAlt="Ponçage mécanique de rénovation d'un sol terrazzo"
      highlights={[
        "Un diagnostic avant toute intervention",
        "Réparation ciblée des zones fissurées ou descellées",
        "Ponçage et polissage pour retrouver l'éclat d'origine",
      ]}
      blocks={[
        {
          heading: "Ce que révèle souvent un ponçage",
          image: "/images/realisations/chantier-08.jpg",
          imageAlt: "Ponçage d'un terrazzo révélant les granulats d'origine",
          paragraphs: [
            "Un terrazzo qui paraît terne ou usé a le plus souvent seulement perdu sa couche de finition ou accumulé les micro-rayures du passage quotidien. Le ponçage retire cette couche superficielle et fait réapparaître la brillance et le contraste des granulats d'origine, parfois insoupçonnés sous la patine.",
          ],
        },
        {
          heading: "Réparer avant de poncer",
          image: "/images/realisations/chantier-07.jpg",
          imageAlt: "Réparation d'une zone de terrazzo avant ponçage",
          reverse: true,
          paragraphs: [
            "Fissures, éclats ou zones descellées sont traités avant le ponçage général, avec un mortier de reprise assorti à la teinte et à la granulométrie existantes, pour que la réparation se fonde dans le sol d'origine plutôt que de créer une rustine visible.",
          ],
        },
        {
          heading: "Protéger le sol après rénovation",
          image: "/images/realisations/chantier-16.jpg",
          imageAlt: "Terrazzo rénové et poli",
          paragraphs: [
            "Une fois le polissage terminé, un traitement de protection adapté à l'usage de la pièce limite l'encrassement et facilite l'entretien courant, en particulier dans les espaces à fort passage comme les entrées ou les halls d'immeuble.",
          ],
        },
      ]}
      faq={globalFaq.filter((f) =>
        ["Comment rénover un ancien granito ?", "Comment entretenir le terrazzo ?", "Le terrazzo peut-il se fissurer ?"].includes(
          f.question
        )
      )}
      related={[
        { label: "Rénovation de granito", href: "/renovation-granito" },
        { label: "Le granito", href: "/granito" },
        { label: "Qu'est-ce que le terrazzo", href: "/terrazzo" },
        { label: "Demander une étude", href: "/demande-devis" },
      ]}
      ctaTitle="Un terrazzo ou un granito à rénover ?"
      ctaDescription="Quelques photos de votre sol nous suffisent pour une première évaluation de faisabilité."
      schemaName="Rénovation de terrazzo"
      schemaDescription="Diagnostic, réparation, ponçage et polissage de sols en terrazzo ou granito existants."
    />
  );
}
