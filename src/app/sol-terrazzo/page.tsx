import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { buildMetadata } from "@/lib/metadata";
import { globalFaq } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "Sol terrazzo sur mesure : appartement, maison et commerce",
  description:
    "Réalisation de sols en terrazzo coulé sur place, pour appartements, maisons et locaux professionnels. Un revêtement continu, minéral et durable.",
  path: "/sol-terrazzo",
});

export default function SolTerrazzoPage() {
  return (
    <ServicePage
      path="/sol-terrazzo"
      crumbs={[{ name: "Sol terrazzo", path: "/sol-terrazzo" }]}
      eyebrow="Application"
      h1="Un sol terrazzo pour chaque type d'intérieur"
      intro="Du studio parisien au hall d'immeuble, le sol terrazzo s'adapte à toutes les configurations : surface continue sans joint de carreau, il unifie visuellement plusieurs pièces tout en offrant une résistance à l'usage quotidien."
      heroImage="/images/realisations/chantier-11.jpg"
      heroImageAlt="Sol en terrazzo dans une pièce de vie"
      highlights={[
        "Un revêtement continu, sans joint de carreau",
        "Compatible avec le chauffage au sol",
        "Résistant à l'usage intensif, y compris en espace commercial",
      ]}
      blocks={[
        {
          heading: "Un sol qui unifie les volumes",
          image: "/images/realisations/chantier-19.jpg",
          imageAlt: "Grand sol terrazzo dans un espace ouvert",
          paragraphs: [
            "Parce qu'il est coulé en continu, le terrazzo permet de faire circuler le regard d'une pièce à l'autre sans rupture de matière : séjour, cuisine ouverte, couloir ou entrée peuvent partager un même sol, avec ou sans variation de teinte selon les usages.",
          ],
        },
        {
          heading: "Dans un logement comme dans un commerce",
          image: "/images/realisations/chantier-09.jpg",
          imageAlt: "Sol terrazzo dans un espace de vente",
          reverse: true,
          paragraphs: [
            "Les mêmes qualités qui font du terrazzo un sol résidentiel apprécié — durabilité, entretien simple, aspect minéral — en font aussi un revêtement pertinent pour les commerces, restaurants et halls d'accueil, où la résistance au passage est déterminante.",
          ],
          bullets: [
            "Bonne tenue face au passage intensif",
            "Nettoyage courant simple, sans traitement complexe",
            "Aspect qui ne se démode pas avec les tendances de carrelage",
          ],
        },
      ]}
      faq={globalFaq.filter((f) =>
        [
          "Combien de temps faut-il pour réaliser un sol terrazzo ?",
          "Quelle épaisseur pour un terrazzo coulé ?",
          "Comment entretenir le terrazzo ?",
          "Peut-on couler du terrazzo sur un ancien carrelage ?",
        ].includes(f.question)
      )}
      related={[
        { label: "Terrazzo coulé sur place", href: "/terrazzo-coule" },
        { label: "Terrazzo en cuisine", href: "/terrazzo-cuisine" },
        { label: "Terrazzo en escalier", href: "/terrazzo-escalier" },
        { label: "Entreprise de terrazzo pour professionnels", href: "/entreprise-terrazzo" },
      ]}
      ctaTitle="Un sol à faire couler en terrazzo ?"
      ctaDescription="Indiquez-nous la surface et la nature des pièces concernées : nous étudions la faisabilité de votre projet."
      schemaName="Sol en terrazzo coulé sur place"
      schemaDescription="Réalisation de sols en terrazzo coulé sur place pour logements, commerces et espaces professionnels."
    />
  );
}
