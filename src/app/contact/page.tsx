import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { MailIcon, MapPinIcon } from "@/components/ui/Icons";
import { EmailLink } from "@/components/ui/TrackedLink";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contactez L'Artisan Terrazzo par téléphone, e-mail ou via notre formulaire pour échanger sur votre projet de terrazzo ou de granito.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-4">Contact</p>
            <h1 className="font-display text-3xl md:text-4xl text-ink text-balance leading-[1.1]">
              Parlons de votre projet
            </h1>
            <p className="mt-5 text-base text-ink/70 leading-relaxed">
              Pour une réponse rapide et adaptée à votre chantier, le formulaire ci-contre reste le moyen le plus
              efficace : il nous transmet directement les informations utiles à l&rsquo;étude de votre projet.
            </p>

            <div className="mt-8 space-y-4">
              <EmailLink className="flex items-center gap-3 text-base text-ink hover:text-brass-dark transition-colors duration-200 focus-ring rounded">
                <MailIcon className="w-5 h-5 text-brass-dark" />
                {siteConfig.email}
              </EmailLink>
              <div className="flex items-start gap-3 text-base text-ink/80">
                <MapPinIcon className="w-5 h-5 text-brass-dark shrink-0 mt-0.5" />
                <span>
                  Paris &amp; Île-de-France
                  <span className="block text-sm text-ink/55 mt-0.5">{siteConfig.serviceArea.extended}</span>
                </span>
              </div>
              <p className="text-sm text-ink/55">{siteConfig.hours.display}</p>
            </div>

            <div className="mt-8">
              <ButtonLink href="/demande-devis" variant="secondary">
                Ou décrire mon projet en 3 étapes
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-bone-dark/40 p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
