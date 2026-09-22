import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { buildMetadata } from "@/lib/metadata";
import { globalFaq } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "Terrazzo coulé sur place : technique, épaisseur et mise en œuvre",
  description:
    "Le terrazzo coulé sur place forme un sol continu, sans joint de carreau, composé et poli directement sur votre chantier. Technique, étapes et délais.",
  path: "/terrazzo-coule",
});

export default function TerrazzoCoulePage() {
  return (
    <ServicePage
      path="/terrazzo-coule"
      crumbs={[{ name: "Terrazzo coulé sur place", path: "/terrazzo-coule" }]}
      eyebrow="Notre spécialité"
      h1="Terrazzo coulé sur place"
      intro="Contrairement au carreau préfabriqué, le terrazzo coulé sur place est composé, coulé et poli directement chez vous. Il en résulte un sol monolithique, sans joint de carreau, dont chaque mètre carré est unique."
      heroImage="/images/realisations/chantier-08.jpg"
      heroImageAlt="Ponçage d'un terrazzo coulé sur chantier"
      highlights={[
        "Sol continu, sans joint de carreau apparent",
        "Composition libre : teintes, granulats et motifs sur mesure",
        "Adapté aux grandes surfaces comme aux petites pièces techniques",
      ]}
      blocks={[
        {
          heading: "Une mise en œuvre en plusieurs temps",
          image: "/images/realisations/chantier-07.jpg",
          imageAlt: "Préparation du support avant coulage d'un terrazzo",
          paragraphs: [
            "Le chantier commence par la préparation du support : diagnostic de la dalle existante, traitement des fissures, mise en place éventuelle d'une chape et des joints de fractionnement qui absorberont les micro-mouvements du bâtiment.",
            "Le terrazzo est ensuite coulé en une ou plusieurs couches selon l'épaisseur retenue, puis laissé à durcir avant l'étape de ponçage, réalisée en plusieurs passes de grain décroissant jusqu'au polissage final.",
          ],
        },
        {
          heading: "Quelle épaisseur pour un terrazzo coulé ?",
          image: "/images/realisations/chantier-20.jpg",
          imageAlt: "Ponçage mécanique d'un grand sol en terrazzo",
          reverse: true,
          paragraphs: [
            "L'épaisseur d'un terrazzo coulé sur place se situe généralement entre 15 et 25 mm, hors chape de préparation. Ce chiffre dépend de la granulométrie retenue : plus le granulat est gros, plus l'épaisseur de la couche doit être importante pour bien le maintenir.",
            "Cette contrainte se travaille en amont avec vous, notamment sur les seuils de porte et les raccords avec les revêtements des pièces voisines.",
          ],
        },
        {
          heading: "Sur quels supports peut-on couler du terrazzo ?",
          image: "/images/realisations/chantier-09.jpg",
          imageAlt: "Sol terrazzo réalisé dans un espace commercial",
          paragraphs: [
            "Une dalle béton saine reste le support de référence. Sur un ancien carrelage ou un parquet, une étude préalable du support détermine s'il est possible de couler directement, avec une préparation adaptée, ou s'il faut déposer le revêtement existant.",
          ],
        },
      ]}
      faq={globalFaq.filter((f) =>
        [
          "Quelle épaisseur pour un terrazzo coulé ?",
          "Combien de temps faut-il pour réaliser un sol terrazzo ?",
          "Peut-on couler du terrazzo sur un ancien carrelage ?",
          "Le terrazzo peut-il se fissurer ?",
        ].includes(f.question)
      )}
      related={[
        { label: "Qu'est-ce que le terrazzo", href: "/terrazzo" },
        { label: "Sol terrazzo", href: "/sol-terrazzo" },
        { label: "Prix du terrazzo au m²", href: "/prix-terrazzo" },
        { label: "Artisan terrazzo à Paris", href: "/artisan-terrazzo-paris" },
      ]}
      ctaTitle="Un sol à couler sur mesure ?"
      ctaDescription="Décrivez-nous la pièce, la surface et le support existant : nous étudions la faisabilité de votre terrazzo coulé."
      schemaName="Terrazzo coulé sur place"
      schemaDescription="Composition, coulage, ponçage et polissage de terrazzo directement sur chantier."
    />
  );
}
