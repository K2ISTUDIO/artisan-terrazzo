import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { buildMetadata } from "@/lib/metadata";
import { globalFaq } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "Rénovation de granito ancien : diagnostic et ponçage",
  description:
    "Redonnez vie à un granito d'origine : diagnostic, réparation des zones abîmées, ponçage mécanique et polissage d'un sol ancien.",
  path: "/renovation-granito",
});

export default function RenovationGranitoPage() {
  return (
    <ServicePage
      path="/renovation-granito"
      crumbs={[{ name: "Rénovation de granito", path: "/renovation-granito" }]}
      eyebrow="Patrimoine"
      h1="Rénover un granito ancien"
      intro="Dans de nombreux immeubles parisiens et franciliens, le granito d'origine sommeille sous une couche de crasse, de vernis ancien ou d'un revêtement plus récent. Un diagnostic suffit souvent à savoir s'il peut retrouver son éclat."
      heroImage="/images/realisations/chantier-13.jpg"
      heroImageAlt="Sol en granito ancien dans un immeuble"
      highlights={[
        "Diagnostic de l'état du granito avant tout devis",
        "Reprise des zones fissurées ou descellées",
        "Ponçage mécanique et polissage adaptés au granito d'origine",
      ]}
      blocks={[
        {
          heading: "Un matériau conçu pour durer",
          image: "/images/realisations/chantier-14.jpg",
          imageAlt: "Détail d'un granito ancien aux granulats de marbre",
          paragraphs: [
            "Le granito posé dans la première moitié du XXe siècle a souvent été conçu pour résister à des décennies de passage. Sa densité et l'épaisseur de sa couche d'usure permettent, dans la majorité des cas, plusieurs cycles de ponçage sans compromettre sa tenue.",
          ],
        },
        {
          heading: "Que faire d'un granito recouvert par un autre revêtement ?",
          image: "/images/realisations/chantier-16.jpg",
          imageAlt: "Granito ancien poli après rénovation",
          reverse: true,
          paragraphs: [
            "Il n'est pas rare qu'un granito d'origine ait été recouvert par du carrelage, du lino ou une résine, en général pour des raisons d'usage ou de mode. Selon l'état du sol d'origine, une dépose du revêtement rapporté peut permettre de retrouver le granito sans avoir à recréer un sol neuf.",
          ],
          bullets: [
            "Sondage préalable pour confirmer la présence et l'état du granito",
            "Dépose maîtrisée du revêtement rapporté",
            "Ponçage et polissage pour finaliser la rénovation",
          ],
        },
      ]}
      faq={globalFaq.filter((f) =>
        ["Comment rénover un ancien granito ?", "Quelle différence entre terrazzo et granito ?", "Comment entretenir le terrazzo ?"].includes(
          f.question
        )
      )}
      related={[
        { label: "Le granito", href: "/granito" },
        { label: "Rénovation de terrazzo", href: "/renovation-terrazzo" },
        { label: "Artisan terrazzo à Paris", href: "/artisan-terrazzo-paris" },
        { label: "Demander une étude", href: "/demande-devis" },
      ]}
      ctaTitle="Un granito à faire diagnostiquer ?"
      ctaDescription="Envoyez-nous des photos de votre sol et l'année approximative de construction de l'immeuble."
      schemaName="Rénovation de granito ancien"
      schemaDescription="Diagnostic, réparation et ponçage de granito ancien pour redonner son éclat au sol d'origine."
    />
  );
}
