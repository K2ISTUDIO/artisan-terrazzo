import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Architectes, décorateurs et maîtres d'œuvre",
  description:
    "Un interlocuteur technique pour vos projets de terrazzo sur mesure : étude sur plans, échantillons, cahiers des charges et suivi de chantier.",
  path: "/architectes",
});

const inputs = [
  { title: "Plans et coupes techniques", detail: "DWG, PDF ou papier : nous étudions le calepinage et les points singuliers (seuils, joints, siphons)." },
  { title: "Échantillons et références", detail: "Un échantillon existant, une photo de teinte ou un moodboard suffisent à démarrer l'échange." },
  { title: "Cahier des charges", detail: "Contraintes de charge, de classement UPEC, de délai ou d'accès chantier : nous les intégrons dès l'étude." },
  { title: "Budget prévisionnel", detail: "Une fourchette de budget nous aide à orienter la composition (granulats, technique, finition)." },
];

const engagements = [
  "Un interlocuteur unique du premier échange à la réception du chantier",
  "Validation d'un échantillon avant tout coulage",
  "Compatibilité avec les autres corps de métier et le planning général",
  "Capacité à travailler sur des surfaces réduites comme sur des programmes complets",
];

export default function ArchitectesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Architectes & professionnels", path: "/architectes" }]} />

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-4">Architectes, décorateurs, maîtres d&rsquo;œuvre</p>
            <h1 className="font-display text-4xl md:text-5xl text-ink text-balance leading-[1.08]">
              Un partenaire technique pour vos projets de terrazzo
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink/70 leading-relaxed max-w-xl">
              Nous travaillons à partir de vos plans, de vos échantillons ou de vos références couleur, pour des
              projets résidentiels comme pour des commerces, hôtels ou bureaux — en résidentiel comme en tertiaire.
            </p>
            <div className="mt-8">
              <ButtonLink href="/demande-devis">Nous soumettre un projet</ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/realisations/chantier-21.jpg"
              alt="Sol en terrazzo dans un espace d'accueil professionnel"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t border-line bg-bone-dark/40">
        <div className="container-page">
          <h2 className="font-display text-2xl md:text-3xl text-ink text-balance max-w-xl">
            Ce que nous pouvons exploiter dès le premier échange
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {inputs.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-base font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t border-line">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone order-2 lg:order-1">
            <Image
              src="/images/realisations/chantier-25.jpg"
              alt="Terrazzo sur mesure dans un espace de réception"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-2xl md:text-3xl text-ink text-balance">Nos engagements sur vos chantiers</h2>
            <ul className="mt-5 space-y-2.5">
              {engagements.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                  <CheckIcon className="w-4 h-4 text-brass-dark shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { label: "Entreprise de terrazzo pour professionnels", href: "/entreprise-terrazzo" },
          { label: "Prix du terrazzo au m²", href: "/prix-terrazzo" },
          { label: "Nos réalisations", href: "/realisations" },
          { label: "Qu'est-ce que le terrazzo", href: "/terrazzo" },
        ]}
      />
      <CTASection
        title="Un projet à nous soumettre ?"
        description="Envoyez-nous vos plans, un échantillon ou une simple référence couleur : nous revenons vers vous avec une première analyse."
        primaryLabel="Nous soumettre un projet"
      />
    </>
  );
}
