import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "L'Artisan Terrazzo — savoir-faire et atelier",
  description:
    "L'Artisan Terrazzo conçoit et réalise des sols et surfaces en terrazzo et granito sur mesure, dans le respect des méthodes traditionnelles de coulage et de polissage.",
  path: "/artisan-terrazzo",
});

export default function ArtisanTerrazzoPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "L'artisan", path: "/artisan-terrazzo" }]} />

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-4">Notre métier</p>
            <h1 className="font-display text-4xl md:text-5xl text-ink text-balance leading-[1.08]">
              Notre métier : le terrazzo et le granito
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink/70 leading-relaxed max-w-xl">
              Nous ne réalisons pas « tous types de travaux ». Notre atelier se consacre exclusivement à la
              composition, au coulage, à la rénovation et au polissage du terrazzo et du granito — {siteConfig.tagline}.
            </p>
            <div className="mt-8">
              <ButtonLink href="/demande-devis" variant="cta">Demander une étude de projet</ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/realisations/chantier-06.jpg"
              alt="Artisan au travail sur un chantier de terrazzo"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t border-line bg-bone-dark/40">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone order-2 lg:order-1">
            <Image
              src="/images/realisations/chantier-09.jpg"
              alt="Détail d'un terrazzo poncé sur chantier"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-2xl md:text-3xl text-ink text-balance">Une spécialisation assumée</h2>
            <p className="mt-4 text-sm md:text-base text-ink/70 leading-relaxed">
              Se spécialiser dans le terrazzo, c&rsquo;est faire le choix de maîtriser une matière plutôt que de
              disperser un savoir-faire sur tous les corps d&rsquo;état. Cette exigence se retrouve à chaque étape :
              le choix des granulats, le dosage du liant, le temps de séchage respecté avant ponçage, le nombre de
              passes nécessaires pour révéler une surface parfaitement lisse.
            </p>
            <p className="mt-4 text-sm md:text-base text-ink/70 leading-relaxed">
              Cette exigence, nous la revendiquons comme un métier à part entière, transmis et affiné chantier après
              chantier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t border-line">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink text-balance">
              De la conception à la finition
            </h2>
            <p className="mt-4 text-sm md:text-base text-ink/70 leading-relaxed">
              Nous accompagnons chaque projet de l&rsquo;étude de faisabilité jusqu&rsquo;à la finition du chantier :
              diagnostic du support, définition de la composition avec vous, coulage, ponçage en plusieurs passes,
              polissage et protection. Un même interlocuteur suit votre projet du premier échange à la dernière
              passe de lustrage.
            </p>
            <p className="mt-4 text-sm md:text-base text-ink/70 leading-relaxed">
              Nous intervenons pour des particuliers, des architectes, des décorateurs et des professionnels, à Paris
              et dans l&rsquo;ensemble de l&rsquo;Île-de-France, avec la possibilité d&rsquo;étudier des projets plus
              importants partout en France.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/realisations/chantier-16.jpg"
              alt="Terrazzo poli aux tons clairs"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { label: "Artisan terrazzo à Paris", href: "/artisan-terrazzo-paris" },
          { label: "Qu'est-ce que le terrazzo", href: "/terrazzo" },
          { label: "Nos réalisations", href: "/realisations" },
          { label: "Architectes & professionnels", href: "/architectes" },
        ]}
      />
      <CTASection
        title="Un projet de terrazzo à confier à un spécialiste ?"
        description="Parlons de votre projet : nous vous répondons avec une première analyse de faisabilité."
      />
    </>
  );
}
