import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { buildMetadata } from "@/lib/metadata";
import { globalFaq } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "Terrazzo pour cuisine : sol, plan de travail et crédence",
  description:
    "Sol, plan de travail et crédence en terrazzo pour la cuisine : un matériau résistant à l'usage quotidien, décliné dans la teinte de votre choix.",
  path: "/terrazzo-cuisine",
});

export default function TerrazzoCuisinePage() {
  return (
    <ServicePage
      path="/terrazzo-cuisine"
      crumbs={[{ name: "Terrazzo cuisine", path: "/terrazzo-cuisine" }]}
      eyebrow="Pièce à vivre"
      h1="Le terrazzo en cuisine"
      intro="La cuisine cumule les contraintes : passage fréquent, projections, chaleur, entretien quotidien. Le terrazzo y trouve naturellement sa place, en sol comme en plan de travail."
      heroImage="/images/realisations/chantier-24.jpg"
      heroImageAlt="Cuisine avec sol et plan de travail en terrazzo"
      highlights={[
        "Résistant à l'usage intensif d'une cuisine",
        "Sol, plan de travail et crédence dans une même teinte",
        "Entretien courant simple, sans traitement complexe",
      ]}
      blocks={[
        {
          heading: "Un sol qui supporte le quotidien",
          image: "/images/realisations/chantier-15.jpg",
          imageAlt: "Sol en terrazzo dans une cuisine",
          paragraphs: [
            "En cuisine, le sol subit davantage de sollicitations qu'ailleurs dans le logement : chutes d'objets, passages répétés, humidité ponctuelle. Le terrazzo, par sa densité et sa surface polie, résiste bien à cet usage tout en restant confortable au pied.",
          ],
        },
        {
          heading: "Plan de travail et îlot assortis",
          image: "/images/realisations/chantier-02.jpg",
          imageAlt: "Plan de travail en terrazzo assorti au sol de la cuisine",
          reverse: true,
          paragraphs: [
            "Nous déclinons volontiers une même composition de granulats entre le sol et le plan de travail, pour une cuisine dont chaque surface minérale raconte la même histoire — jusqu'à l'îlot central lorsque la configuration s'y prête.",
          ],
          bullets: [
            "Sol et plan de travail dans la même teinte, ou en contraste assumé",
            "Crédence assortie pour prolonger la composition en hauteur",
            "Finition adaptée aux projections et à la chaleur ponctuelle",
          ],
        },
      ]}
      faq={globalFaq.filter((f) => ["Peut-on fabriquer un plan de travail en terrazzo ?", "Comment entretenir le terrazzo ?"].includes(f.question))}
      related={[
        { label: "Plan de travail terrazzo", href: "/plan-de-travail-terrazzo" },
        { label: "Sol terrazzo", href: "/sol-terrazzo" },
        { label: "Terrazzo en salle de bains", href: "/terrazzo-salle-de-bain" },
        { label: "Prix du terrazzo au m²", href: "/prix-terrazzo" },
      ]}
      ctaTitle="Une cuisine à imaginer en terrazzo ?"
      ctaDescription="Décrivez-nous votre projet de cuisine : sol seul, plan de travail seul, ou les deux assortis."
      schemaName="Terrazzo pour cuisine"
      schemaDescription="Réalisation de sols, plans de travail et crédences en terrazzo pour cuisines résidentielles."
    />
  );
}
