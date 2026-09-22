import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { articles } from "@/data/articles";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Conseils & guides sur le terrazzo",
  description:
    "Prix, entretien, comparatifs et guides pratiques sur le terrazzo et le granito, écrits par des spécialistes de la matière.",
  path: "/conseils",
});

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));
}

export default function ConseilsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Conseils", path: "/conseils" }]} />

      <section className="py-14 md:py-20">
        <div className="container-page max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-4">Centre d&rsquo;expertise</p>
          <h1 className="font-display text-4xl md:text-5xl text-ink text-balance leading-[1.08]">
            Conseils &amp; guides sur le terrazzo
          </h1>
          <p className="mt-5 text-base md:text-lg text-ink/70 leading-relaxed">
            Prix, entretien, comparatifs de matériaux : nos guides pratiques pour préparer votre projet de terrazzo
            ou de granito en toute connaissance de cause.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/conseils/${article.slug}`}
              className="group block rounded-2xl overflow-hidden bg-white border border-line hover:border-brass/40 hover:shadow-lift transition-all duration-300 focus-ring"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-mineral mb-2">
                  {formatDate(article.datePublished)} · {article.readingTime}
                </p>
                <h2 className="text-base font-medium text-ink">{article.title}</h2>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        title="Une question sur votre projet ?"
        description="Nos guides ne remplacent pas une étude de votre chantier : parlons-en directement."
      />
    </>
  );
}
