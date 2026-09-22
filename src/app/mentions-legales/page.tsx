import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site artisan-terrazzo.fr.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Mentions légales", path: "/mentions-legales" }]} />
      <section className="py-14 md:py-20">
        <div className="container-page max-w-3xl prose-legal">
          <h1 className="font-display text-3xl md:text-4xl text-ink mb-8">Mentions légales</h1>

          <div className="mb-8 rounded-2xl border border-brass/30 bg-brass/5 p-5 text-sm text-ink/70">
            Les informations ci-dessous marquées « à compléter » sont des emplacements réservés : elles doivent être
            renseignées avec les informations réelles et vérifiées de l&rsquo;entreprise avant la mise en ligne du
            site, conformément aux articles 6-III de la LCEN et 19 du RGPD.
          </div>

          <div className="space-y-8 text-sm md:text-base text-ink/75 leading-relaxed">
            <section>
              <h2 className="font-display text-xl text-ink mb-3">Éditeur du site</h2>
              <p>
                Raison sociale : <em>à compléter</em>
                <br />
                Forme juridique : <em>à compléter</em>
                <br />
                SIREN / SIRET : <em>à compléter</em>
                <br />
                Siège social : <em>à compléter</em>
                <br />
                Directeur de la publication : <em>à compléter</em>
                <br />
                Contact : {siteConfig.email} — {siteConfig.phone.display}
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-3">Hébergement</h2>
              <p>
                Nom de l&rsquo;hébergeur : <em>à compléter</em>
                <br />
                Adresse de l&rsquo;hébergeur : <em>à compléter</em>
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-3">Propriété intellectuelle</h2>
              <p>
                L&rsquo;ensemble des contenus présents sur ce site (textes, photographies, logo, identité visuelle)
                est protégé au titre du droit d&rsquo;auteur. Toute reproduction, même partielle, est soumise à
                autorisation préalable de {siteConfig.name}.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-3">Responsabilité</h2>
              <p>
                {siteConfig.name} s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude des informations diffusées sur
                ce site mais ne saurait être tenu responsable des omissions, inexactitudes ou carences dans la mise à
                jour, qu&rsquo;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces
                informations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-3">Données personnelles</h2>
              <p>
                Le traitement des données personnelles collectées via ce site est détaillé dans notre{" "}
                <a href="/politique-confidentialite" className="underline underline-offset-2 text-brass-dark">
                  politique de confidentialité
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
