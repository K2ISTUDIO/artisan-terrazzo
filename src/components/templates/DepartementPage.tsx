import Image from "next/image";
import Link from "next/link";
import type { Departement } from "@/data/departements";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { globalFaq } from "@/data/faq";
import { JsonLd, professionalServiceSchema } from "@/lib/schema";

const heroImages = [
  "/images/realisations/chantier-11.jpg",
  "/images/realisations/chantier-15.jpg",
  "/images/realisations/chantier-19.jpg",
  "/images/realisations/chantier-13.jpg",
  "/images/realisations/chantier-20.jpg",
  "/images/realisations/chantier-09.jpg",
  "/images/realisations/chantier-16.jpg",
];

export function DepartementPage({ dept, index }: { dept: Departement; index: number }) {
  const heroImage = heroImages[index % heroImages.length];

  return (
    <>
      <JsonLd
        data={professionalServiceSchema({
          name: dept.title,
          description: dept.metaDescription,
          url: `/${dept.slug}`,
        })}
      />
      <Breadcrumbs items={[{ name: dept.name, path: `/${dept.slug}` }]} />

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-4">
              {dept.name} ({dept.code})
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-ink text-balance leading-[1.08]">{dept.title}</h1>
            <p className="mt-5 text-base md:text-lg text-ink/70 leading-relaxed max-w-xl">{dept.intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/demande-devis">Demander une étude de projet</ButtonLink>
              <ButtonLink href="/realisations" variant="secondary">
                Voir nos réalisations
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-stone">
            <Image src={heroImage} alt={`Terrazzo réalisé en ${dept.name}`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t border-line bg-bone-dark/40">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink text-balance">Le contexte local</h2>
            <p className="mt-4 text-sm md:text-base text-ink/70 leading-relaxed">{dept.context}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink text-balance">Nos interventions dans le secteur</h2>
            <ul className="mt-4 space-y-2.5">
              {[
                "Étude de faisabilité sur place ou sur photos",
                "Terrazzo coulé sur place, sol ou plan de travail",
                "Rénovation de granito ancien",
                "Projets neufs comme rénovations complètes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                  <CheckIcon className="w-4 h-4 text-brass-dark shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {dept.villes.map((ville) => (
                <span key={ville} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-xs text-ink/70">
                  {ville}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion items={globalFaq.slice(0, 6)} />

      <section className="py-10 border-t border-line">
        <div className="container-page">
          <Link href="/#zones" className="text-sm text-brass-dark underline underline-offset-4">
            Voir toutes nos zones d&rsquo;intervention en Île-de-France
          </Link>
        </div>
      </section>

      <CTASection
        title={`Un projet de terrazzo dans le ${dept.name} ?`}
        description="Décrivez-nous votre projet et sa localisation : nous étudions la faisabilité et les délais d'intervention."
      />
    </>
  );
}
