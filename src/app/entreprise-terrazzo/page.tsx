import type { Metadata } from "next";
import { ServicePage } from "@/components/templates/ServicePage";
import { buildMetadata } from "@/lib/metadata";
import { globalFaq } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "Entreprise de terrazzo pour commerces, hôtels et bureaux",
  description:
    "Entreprise spécialisée dans la réalisation de terrazzo et granito pour commerces, hôtels, restaurants et bureaux à Paris et en Île-de-France.",
  path: "/entreprise-terrazzo",
});

export default function EntrepriseTerrazzoPage() {
  return (
    <ServicePage
      path="/entreprise-terrazzo"
      crumbs={[{ name: "Entreprise de terrazzo", path: "/entreprise-terrazzo" }]}
      eyebrow="Professionnels"
      h1="Une entreprise de terrazzo pour vos projets commerciaux"
      intro="Boutiques, hôtels, restaurants, bureaux : les espaces professionnels demandent un revêtement esthétique, durable et capable de supporter un passage soutenu. Nous accompagnons maîtres d'ouvrage, exploitants et directions techniques sur ces projets."
      heroImage="/images/realisations/chantier-21.jpg"
      heroImageAlt="Sol en terrazzo dans un espace d'accueil professionnel"
      highlights={[
        "Interlocuteur unique de l'étude au chantier",
        "Sols conçus pour un passage commercial soutenu",
        "Coordination avec les autres corps de métier du chantier",
      ]}
      blocks={[
        {
          heading: "Un revêtement pensé pour l'exploitation",
          image: "/images/realisations/chantier-20.jpg",
          imageAlt: "Sol terrazzo poli dans un grand espace professionnel",
          paragraphs: [
            "Un sol commercial doit conjuguer exigence esthétique et contraintes d'exploitation : résistance au passage intensif, facilité d'entretien, compatibilité avec les normes d'accessibilité et de sécurité en vigueur dans les établissements recevant du public.",
            "Le terrazzo répond à ces exigences tout en conservant une identité visuelle forte, différenciante pour un commerce, un hôtel ou un siège social.",
          ],
        },
        {
          heading: "Travailler avec vos équipes et vos délais",
          image: "/images/realisations/chantier-25.jpg",
          imageAlt: "Sol en terrazzo dans un espace de réception haut de gamme",
          reverse: true,
          paragraphs: [
            "Sur un projet professionnel, le terrazzo s'intègre à un planning de chantier partagé avec d'autres corps de métier. Nous travaillons à partir de vos plans d'exécution, de vos délais d'ouverture et des contraintes propres à votre exploitation (accès, horaires, phasage).",
          ],
          bullets: [
            "Étude de faisabilité sur plans avant chiffrage",
            "Phasage possible pour limiter l'impact sur l'exploitation",
            "Échantillons et validation des teintes avant coulage",
          ],
        },
      ]}
      faq={globalFaq.filter((f) => ["Combien de temps faut-il pour réaliser un sol terrazzo ?", "Comment entretenir le terrazzo ?"].includes(f.question))}
      related={[
        { label: "Architectes & professionnels", href: "/architectes" },
        { label: "Sol terrazzo", href: "/sol-terrazzo" },
        { label: "Prix du terrazzo au m²", href: "/prix-terrazzo" },
        { label: "Nos réalisations", href: "/realisations" },
      ]}
      ctaTitle="Un projet professionnel à étudier ?"
      ctaDescription="Partagez-nous vos plans ou votre cahier des charges : nous revenons vers vous avec une première analyse."
      schemaName="Entreprise de terrazzo pour professionnels"
      schemaDescription="Réalisation de sols en terrazzo pour commerces, hôtels, restaurants et bureaux."
    />
  );
}
