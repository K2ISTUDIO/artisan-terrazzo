import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { buildMetadata } from "@/lib/metadata";
import { globalFaq } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "Escalier en terrazzo : marches, contremarches et nez-de-marche",
  description:
    "Escalier habillé ou coulé en terrazzo : marches, contremarches et nez-de-marche, en continuité avec le sol pour une circulation visuelle homogène.",
  path: "/terrazzo-escalier",
});

export default function TerrazzoEscalierPage() {
  return (
    <ServicePage
      path="/terrazzo-escalier"
      crumbs={[{ name: "Terrazzo escalier", path: "/terrazzo-escalier" }]}
      eyebrow="Circulation"
      h1="L'escalier en terrazzo"
      intro="Marches, contremarches et nez-de-marche peuvent être coulés ou habillés en terrazzo, dans la continuité du sol qui les précède — un point de passage fréquent où la résistance du matériau prend tout son sens."
      heroImage="/images/realisations/chantier-08.jpg"
      heroImageAlt="Ponçage d'un terrazzo pouvant intégrer un escalier"
      highlights={[
        "Continuité visuelle entre le sol et l'escalier",
        "Nez-de-marche traités pour la sécurité au quotidien",
        "Adapté aux halls d'immeuble comme aux maisons individuelles",
      ]}
      blocks={[
        {
          heading: "Un point de passage exigeant",
          image: "/images/realisations/chantier-20.jpg",
          imageAlt: "Sol terrazzo poli résistant au passage",
          paragraphs: [
            "Un escalier concentre plus de contraintes qu'un sol plat : usure du nez de marche, nécessité d'une bonne adhérence, exposition répétée aux chocs. Le terrazzo y répond par sa densité et par un traitement de finition adapté à chaque zone de l'escalier.",
          ],
        },
        {
          heading: "Marches coulées ou habillage sur mesure",
          image: "/images/realisations/chantier-13.jpg",
          imageAlt: "Escalier en granito dans un immeuble ancien",
          reverse: true,
          paragraphs: [
            "Selon la structure existante, l'escalier peut être coulé directement en terrazzo ou habillé avec des éléments façonnés sur mesure en atelier. De nombreux escaliers d'immeubles anciens conservent d'ailleurs un habillage en granito d'origine, qu'il est possible de rénover plutôt que de remplacer.",
          ],
        },
      ]}
      faq={globalFaq.filter((f) => ["Le terrazzo peut-il se fissurer ?", "Comment entretenir le terrazzo ?"].includes(f.question))}
      related={[
        { label: "Sol terrazzo", href: "/sol-terrazzo" },
        { label: "Rénovation de granito", href: "/renovation-granito" },
        { label: "Qu'est-ce que le terrazzo", href: "/terrazzo" },
        { label: "Demander une étude", href: "/demande-devis" },
      ]}
      ctaTitle="Un escalier à habiller en terrazzo ?"
      ctaDescription="Précisez-nous le nombre de marches et le matériau actuel : nous étudions la faisabilité de votre projet."
      schemaName="Escalier en terrazzo"
      schemaDescription="Réalisation et habillage de marches, contremarches et nez-de-marche en terrazzo."
    />
  );
}
