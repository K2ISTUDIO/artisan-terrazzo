import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { ReassuranceStrip } from "@/components/sections/ReassuranceStrip";
import { SavoirFaireSection } from "@/components/sections/SavoirFaireSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { PersonnalisationSection } from "@/components/sections/PersonnalisationSection";
import { ArchitectesSection } from "@/components/sections/ArchitectesSection";
import { ZonesSection } from "@/components/sections/ZonesSection";
import { ProcessStepsSection } from "@/components/sections/ProcessStepsSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { globalFaq } from "@/data/faq";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Artisan terrazzo à Paris et en Île-de-France",
  description:
    "Création, rénovation et réalisation de terrazzo et granito sur mesure pour particuliers, architectes et professionnels à Paris et en Île-de-France.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ReassuranceStrip />
      <SavoirFaireSection />
      <ServiceGrid />
      <PersonnalisationSection />
      <ArchitectesSection />
      <ZonesSection />
      <ProcessStepsSection />
      <FaqAccordion items={globalFaq.slice(0, 8)} />
      <CTASection
        title="Un projet de terrazzo ou de granito à étudier ?"
        description="Décrivez-nous votre projet : nous revenons vers vous avec une première analyse de faisabilité."
        secondaryLabel="Voir nos réalisations"
        secondaryHref="/realisations"
      />
    </>
  );
}
