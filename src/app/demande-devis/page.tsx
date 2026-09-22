import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { DevisForm } from "@/components/forms/DevisForm";
import { CheckIcon, MailIcon, PhoneIcon } from "@/components/ui/Icons";
import { PhoneLink, EmailLink } from "@/components/ui/TrackedLink";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Demander une étude de projet",
  description:
    "Décrivez votre projet de terrazzo ou de granito en trois étapes : type de projet, localisation et coordonnées. Réponse rapide d'un spécialiste.",
  path: "/demande-devis",
});

const reassurances = [
  "Réponse d'un spécialiste, pas d'un centre d'appel",
  "Aucun engagement à cette étape",
  "Vos données ne servent qu'à traiter votre demande",
];

export default function DemandeDevisPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Demande d'étude", path: "/demande-devis" }]} />

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-4">Étude de projet</p>
            <h1 className="font-display text-3xl md:text-4xl text-ink text-balance leading-[1.1] mb-8">
              Décrivez-nous votre projet en trois étapes
            </h1>
            <DevisForm />
          </div>

          <aside className="lg:pt-24">
            <div className="rounded-2xl border border-line bg-bone-dark/40 p-6">
              <h2 className="text-sm font-medium text-ink mb-4">Ce qui se passe ensuite</h2>
              <ul className="space-y-3">
                {reassurances.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <CheckIcon className="w-4 h-4 text-brass-dark shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-line space-y-3">
                <p className="text-xs uppercase tracking-wide text-mineral">Vous préférez nous joindre directement ?</p>
                <PhoneLink className="flex items-center gap-2 text-sm text-ink hover:text-brass-dark transition-colors duration-200 focus-ring rounded">
                  <PhoneIcon className="w-4 h-4 text-brass-dark" />
                  {siteConfig.phone.display}
                </PhoneLink>
                <EmailLink className="flex items-center gap-2 text-sm text-ink hover:text-brass-dark transition-colors duration-200 focus-ring rounded">
                  <MailIcon className="w-4 h-4 text-brass-dark" />
                  {siteConfig.email}
                </EmailLink>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
