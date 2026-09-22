import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon, MapPinIcon } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/metadata";
import { globalFaq } from "@/data/faq";
import { siteConfig } from "@/lib/site-config";
import { JsonLd, professionalServiceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Artisan terrazzo à Paris",
  description:
    "Création, rénovation et réparation de terrazzo et granito à Paris : appartements haussmanniens, halls d'immeuble, commerces et projets d'architectes.",
  path: "/artisan-terrazzo-paris",
});

export default function ArtisanTerrazzoParisPage() {
  return (
    <>
      <JsonLd
        data={professionalServiceSchema({
          name: "Artisan terrazzo à Paris",
          description: "Réalisation, rénovation et réparation de terrazzo et granito à Paris.",
          url: "/artisan-terrazzo-paris",
        })}
      />
      <Breadcrumbs items={[{ name: "Artisan terrazzo à Paris", path: "/artisan-terrazzo-paris" }]} />

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-4">Paris (75)</p>
            <h1 className="font-display text-4xl md:text-5xl text-ink text-balance leading-[1.08]">
              Artisan terrazzo à Paris
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink/70 leading-relaxed max-w-xl">
              Des appartements haussmanniens aux commerces du centre de Paris, nous réalisons et rénovons des sols
              et surfaces en terrazzo et granito adaptés au bâti parisien.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Rénovation de granito d'origine dans les halls et paliers",
                "Terrazzo coulé sur place dans les appartements rénovés",
                "Plans de travail et salles de bains sur mesure",
                "Projets de commerces et bureaux, en coordination avec vos équipes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                  <CheckIcon className="w-4 h-4 text-brass-dark shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/demande-devis" variant="cta">Demander une étude de projet</ButtonLink>
              <ButtonLink href="/realisations" variant="secondary">
                Voir nos réalisations
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/realisations/chantier-13.jpg"
              alt="Sol en granito ancien dans un immeuble parisien"
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
              src="/images/realisations/chantier-14.jpg"
              alt="Détail d'un granito ancien parisien"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-2xl md:text-3xl text-ink text-balance">
              Un bâti parisien qui conserve son granito d&rsquo;origine
            </h2>
            <p className="mt-4 text-sm md:text-base text-ink/70 leading-relaxed">
              Une grande partie du parc haussmannien et des immeubles construits jusque dans les années 1960
              conservent encore, dans leurs entrées et cages d&rsquo;escalier, un granito d&rsquo;origine — souvent
              terni par des décennies de passage, mais rarement irrécupérable. Un ponçage complet permet, dans la
              majorité des cas, de lui redonner son éclat sans le déposer.
            </p>
            <p className="mt-4 text-sm md:text-base text-ink/70 leading-relaxed">
              Dans les appartements rénovés, le terrazzo coulé sur place s&rsquo;installe aussi bien dans une cuisine
              ouverte que dans une salle de bains, en tenant compte des contraintes propres aux immeubles anciens :
              hauteur sous chape limitée, planchers bois, règlement de copropriété.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t border-line">
        <div className="container-page">
          <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Aux alentours</p>
          <h2 className="font-display text-2xl md:text-3xl text-ink text-balance max-w-xl">
            Nous intervenons aussi en petite et grande couronne
          </h2>
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {siteConfig.serviceArea.priorityDepartments
              .filter((d) => d.code !== "75")
              .map((dept) => (
                <li key={dept.slug}>
                  <Link
                    href={`/${dept.slug}`}
                    className="flex items-center gap-2 rounded-2xl border border-line bg-white px-4 py-4 text-sm text-ink/80 hover:text-ink hover:border-brass/40 transition-colors duration-200 focus-ring"
                  >
                    <MapPinIcon className="w-4 h-4 text-brass-dark shrink-0" />
                    {dept.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <FaqAccordion items={globalFaq.slice(0, 6)} />
      <CTASection
        title="Un projet de terrazzo à Paris ?"
        description="Décrivez-nous votre appartement, votre commerce ou votre immeuble : nous étudions la faisabilité de votre projet."
      />
    </>
  );
}
