import Image from "next/image";
import type { FaqItem } from "@/data/faq";
import { Breadcrumbs, type Crumb } from "@/components/sections/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { RelatedLinks, type RelatedLink } from "@/components/sections/RelatedLinks";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { JsonLd, professionalServiceSchema } from "@/lib/schema";

export type ContentBlock = {
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bullets?: string[];
};

export type ServicePageProps = {
  path: string;
  crumbs: Crumb[];
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  highlights?: string[];
  blocks: ContentBlock[];
  faq: FaqItem[];
  related: RelatedLink[];
  ctaTitle: string;
  ctaDescription?: string;
  schemaName: string;
  schemaDescription: string;
};

export function ServicePage({
  path,
  crumbs,
  eyebrow,
  h1,
  intro,
  heroImage,
  heroImageAlt,
  highlights,
  blocks,
  faq,
  related,
  ctaTitle,
  ctaDescription,
  schemaName,
  schemaDescription,
}: ServicePageProps) {
  return (
    <>
      <JsonLd data={professionalServiceSchema({ name: schemaName, description: schemaDescription, url: path })} />
      <Breadcrumbs items={crumbs} />

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-4">{eyebrow}</p>
            <h1 className="font-display text-4xl md:text-5xl text-ink text-balance leading-[1.08]">{h1}</h1>
            <p className="mt-5 text-base md:text-lg text-ink/70 leading-relaxed max-w-xl">{intro}</p>
            {highlights && (
              <ul className="mt-6 space-y-2.5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                    <CheckIcon className="w-4 h-4 text-brass-dark shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/demande-devis">Demander une étude de projet</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Parler de mon projet
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/5] md:aspect-[5/4] rounded-3xl overflow-hidden bg-stone">
            <Image src={heroImage} alt={heroImageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
          </div>
        </div>
      </section>

      {blocks.map((block, index) => (
        <section key={block.heading} className={`py-14 md:py-20 border-t border-line ${index % 2 === 1 ? "bg-bone-dark/40" : ""}`}>
          <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone ${block.reverse ? "lg:order-2" : ""}`}>
              <Image src={block.image} alt={block.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className={block.reverse ? "lg:order-1" : ""}>
              <h2 className="font-display text-2xl md:text-3xl text-ink text-balance">{block.heading}</h2>
              <div className="mt-4 space-y-4">
                {block.paragraphs.map((p) => (
                  <p key={p} className="text-sm md:text-base text-ink/70 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              {block.bullets && (
                <ul className="mt-5 space-y-2.5">
                  {block.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                      <CheckIcon className="w-4 h-4 text-brass-dark shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}

      <FaqAccordion items={faq} />
      <RelatedLinks links={related} />
      <CTASection title={ctaTitle} description={ctaDescription} />
    </>
  );
}
