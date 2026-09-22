import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et de protection des données personnelles du site artisan-terrazzo.fr.",
  path: "/politique-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Politique de confidentialité", path: "/politique-confidentialite" }]} />
      <section className="py-14 md:py-20">
        <div className="container-page max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl text-ink mb-8">Politique de confidentialité</h1>

          <div className="space-y-8 text-sm md:text-base text-ink/75 leading-relaxed">
            <section>
              <h2 className="font-display text-xl text-ink mb-3">Données collectées</h2>
              <p>
                Lorsque vous utilisez notre formulaire de demande d&rsquo;étude ou notre formulaire de contact, nous
                collectons les informations que vous nous transmettez volontairement : nom, prénom, e-mail,
                téléphone, informations relatives à votre projet (localisation, surface, budget, message) et, le cas
                échéant, des photos ou plans que vous choisissez de joindre.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-3">Finalité du traitement</h2>
              <p>
                Ces données sont utilisées exclusivement pour étudier et répondre à votre demande de devis ou de
                contact. Elles ne sont ni revendues, ni cédées à des tiers à des fins commerciales.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-3">Durée de conservation</h2>
              <p>
                Vos données sont conservées le temps nécessaire au traitement de votre demande et, en cas de
                relation commerciale, pendant la durée de cette relation augmentée des délais légaux de
                prescription applicables.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-3">Cookies et mesure d&rsquo;audience</h2>
              <p>
                Ce site peut utiliser des cookies de mesure d&rsquo;audience (par exemple Google Analytics via
                Google Tag Manager) une fois ceux-ci activés par l&rsquo;éditeur. Lorsque c&rsquo;est le cas, un
                bandeau vous permet d&rsquo;accepter ou de refuser ces cookies non essentiels avant tout dépôt.
                Aucun cookie publicitaire n&rsquo;est déposé sans votre consentement préalable.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-3">Vos droits</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et
                Libertés, vous disposez d&rsquo;un droit d&rsquo;accès, de rectification, d&rsquo;effacement, de
                limitation et d&rsquo;opposition sur vos données personnelles. Vous pouvez exercer ces droits en nous
                contactant à l&rsquo;adresse {siteConfig.email}. Vous disposez également du droit d&rsquo;introduire
                une réclamation auprès de la CNIL (www.cnil.fr).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-3">Contact</h2>
              <p>
                Pour toute question relative à cette politique de confidentialité : {siteConfig.email} —{" "}
                {siteConfig.phone.display}.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
