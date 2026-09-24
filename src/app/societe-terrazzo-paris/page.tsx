import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/metadata";
import { globalFaq } from "@/data/faq";
import { JsonLd, professionalServiceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Société de terrazzo à Paris",
  description:
    "Société familiale spécialisée dans le terrazzo et le granito à Paris : devis détaillé, interlocuteur unique et suivi de chantier, pour particuliers, architectes et professionnels.",
  path: "/societe-terrazzo-paris",
});

export default function SocieteTerrazzoParisPage() {
  return (
    <>
      <JsonLd
        data={professionalServiceSchema({
          name: "Société de terrazzo à Paris",
          description:
            "Conception, réalisation et rénovation de terrazzo et granito à Paris, pour particuliers, architectes et professionnels.",
          url: "/societe-terrazzo-paris",
        })}
      />
      <Breadcrumbs items={[{ name: "Société de terrazzo à Paris", path: "/societe-terrazzo-paris" }]} />

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-4">Paris &amp; Île-de-France</p>
            <h1 className="font-display text-4xl md:text-5xl text-ink text-balance leading-[1.08]">
              Une société de terrazzo à Paris
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink/70 leading-relaxed max-w-xl">
              Derrière chaque chantier, une structure familiale organisée : un devis détaillé, un interlocuteur
              unique du premier rendez-vous à la réception, et le même savoir-faire appliqué à tous les projets, du
              particulier au maître d&rsquo;ouvrage.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Devis détaillé avant tout engagement",
                "Un interlocuteur unique tout au long du chantier",
                "Intervention pour particuliers, architectes et entreprises",
                "Coordination avec les autres corps de métier si besoin",
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
              src="/images/realisations/chantier-01.jpg"
              alt="Sol en terrazzo avec bande de laiton dans une pièce parisienne"
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
              src="/images/realisations/chantier-17.jpg"
              alt="Sol en terrazzo dans un espace de restauration parisien"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-2xl md:text-3xl text-ink text-balance">
              Une structure, pas seulement une paire de mains
            </h2>
            <p className="mt-4 text-sm md:text-base text-ink/70 leading-relaxed">
              Faire appel à une société plutôt qu&rsquo;à un poseur isolé, c&rsquo;est s&rsquo;assurer d&rsquo;un
              suivi du projet dans la durée : étude de faisabilité, devis clair, planification du chantier, puis
              accompagnement jusqu&rsquo;à la réception. C&rsquo;est aussi la garantie d&rsquo;avoir un même
              interlocuteur pour répondre à vos questions avant, pendant et après le chantier.
            </p>
            <p className="mt-4 text-sm md:text-base text-ink/70 leading-relaxed">
              Nous restons une entreprise familiale à taille humaine : cette structure ne remplace pas le
              savoir-faire artisanal, elle l&rsquo;organise pour le rendre fiable, d&rsquo;un appartement parisien à
              un chantier professionnel de plus grande envergure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t border-line">
        <div className="container-page max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Paris intra-muros et au-delà</p>
          <h2 className="font-display text-2xl md:text-3xl text-ink text-balance">
            Une même société pour tout Paris et l&rsquo;Île-de-France
          </h2>
          <p className="mt-4 text-sm md:text-base text-ink/70 leading-relaxed">
            Nous intervenons dans tous les arrondissements parisiens ainsi que dans les départements limitrophes,
            pour des chantiers résidentiels comme professionnels. Retrouvez le détail de nos interventions par zone
            sur notre page dédiée à l&rsquo;artisan terrazzo à Paris, ou contactez-nous directement pour vérifier la
            faisabilité de votre projet.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/artisan-terrazzo-paris" className="text-sm text-brass-dark underline underline-offset-4 hover:text-brass">
              Voir la page dédiée à Paris
            </Link>
            <Link href="/entreprise-terrazzo" className="text-sm text-brass-dark underline underline-offset-4 hover:text-brass">
              Nos projets pour professionnels
            </Link>
            <Link href="/qui-sommes-nous" className="text-sm text-brass-dark underline underline-offset-4 hover:text-brass">
              Qui sommes-nous
            </Link>
          </div>
        </div>
      </section>

      <FaqAccordion
        items={globalFaq.filter((f) =>
          ["Le terrazzo peut-il se fissurer ?", "Quelle différence entre terrazzo coulé et carreaux terrazzo ?"].includes(f.question),
        )}
      />
      <CTASection
        title="Une société de terrazzo à contacter pour votre projet ?"
        description="Particulier, architecte ou entreprise : décrivez-nous votre projet, nous revenons vers vous avec une première analyse."
      />
    </>
  );
}
