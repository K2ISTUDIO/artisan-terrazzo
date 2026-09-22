import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { buildMetadata } from "@/lib/metadata";
import { globalFaq } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "Plan de travail en terrazzo sur mesure",
  description:
    "Plan de travail, plan vasque et îlot central en terrazzo, façonnés sur mesure dans la teinte et les granulats assortis à votre cuisine ou salle de bains.",
  path: "/plan-de-travail-terrazzo",
});

export default function PlanDeTravailPage() {
  return (
    <ServicePage
      path="/plan-de-travail-terrazzo"
      crumbs={[{ name: "Plan de travail terrazzo", path: "/plan-de-travail-terrazzo" }]}
      eyebrow="Application"
      h1="Plan de travail en terrazzo sur mesure"
      intro="Plan de travail de cuisine, plan vasque de salle de bains ou îlot central : le terrazzo se façonne sur mesure, dans la teinte et les granulats qui prolongent l'identité de votre pièce."
      heroImage="/images/realisations/chantier-25.jpg"
      heroImageAlt="Plan de travail en terrazzo dans un espace de réception"
      highlights={[
        "Plan de travail, plan vasque ou îlot central sur mesure",
        "Teinte et granulats assortis au reste de la pièce",
        "Finition polie adaptée à un usage quotidien",
      ]}
      blocks={[
        {
          heading: "Un plan façonné à partir d'une dalle",
          image: "/images/realisations/chantier-02.jpg",
          imageAlt: "Détail d'un plan en terrazzo aux granulats colorés",
          paragraphs: [
            "Contrairement au sol coulé sur place, un plan de travail en terrazzo est le plus souvent façonné en atelier à partir d'une dalle, puis découpé et posé sur mesure selon vos plans de cuisine ou de salle de bains — avec découpes pour évier, plaque de cuisson ou robinetterie.",
          ],
        },
        {
          heading: "Assortir cuisine, îlot et crédence",
          image: "/images/realisations/chantier-24.jpg",
          imageAlt: "Cuisine avec plan de travail et sol assortis en terrazzo",
          reverse: true,
          paragraphs: [
            "Le principal atout du terrazzo sur mesure est de pouvoir décliner une même teinte et une même granulométrie sur plusieurs éléments : plan de travail, crédence, îlot central, et parfois jusqu'au sol, pour une cohérence visuelle totale de la pièce.",
          ],
          bullets: [
            "Plan de travail principal et crédence assortis",
            "Îlot central en teinte identique ou contrastée",
            "Plan vasque de salle de bains en complément du plan de cuisine",
          ],
        },
      ]}
      faq={globalFaq.filter((f) => ["Peut-on fabriquer un plan de travail en terrazzo ?", "Comment entretenir le terrazzo ?"].includes(f.question))}
      related={[
        { label: "Terrazzo en cuisine", href: "/terrazzo-cuisine" },
        { label: "Terrazzo en salle de bains", href: "/terrazzo-salle-de-bain" },
        { label: "Qu'est-ce que le terrazzo", href: "/terrazzo" },
        { label: "Nos réalisations", href: "/realisations" },
      ]}
      ctaTitle="Un plan de travail en terrazzo à concevoir ?"
      ctaDescription="Envoyez-nous les cotes de votre cuisine ou de votre salle de bains, ainsi que vos préférences de teinte."
      schemaName="Plan de travail en terrazzo"
      schemaDescription="Conception et réalisation de plans de travail, plans vasques et îlots en terrazzo sur mesure."
    />
  );
}
