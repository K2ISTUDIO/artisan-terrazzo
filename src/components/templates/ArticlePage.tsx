import Image from "next/image";
import type { Article } from "@/data/articles";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { CheckIcon } from "@/components/ui/Icons";
import { JsonLd, articleSchema } from "@/lib/schema";
import { articles } from "@/data/articles";
import Link from "next/link";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));
}

export function ArticlePage({ article }: { article: Article }) {
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.metaDescription,
          path: `/conseils/${article.slug}`,
          datePublished: article.datePublished,
          image: article.image,
        })}
      />
      <Breadcrumbs items={[{ name: "Conseils", path: "/conseils" }, { name: article.title, path: `/conseils/${article.slug}` }]} />

      <article className="py-14 md:py-20">
        <div className="container-page max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-4">
            <time dateTime={article.datePublished}>{formatDate(article.datePublished)}</time> · {article.readingTime} de lecture
          </p>
          <h1 className="font-display text-3xl md:text-5xl text-ink text-balance leading-[1.1]">{article.title}</h1>
          <p className="mt-5 text-base md:text-lg text-ink/70 leading-relaxed">{article.excerpt}</p>
        </div>

        <div className="container-page max-w-3xl mt-10">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-stone">
            <Image src={article.image} alt={article.imageAlt} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" priority />
          </div>
        </div>

        <div className="container-page max-w-3xl mt-12 space-y-12">
          {article.blocks.map((block) => (
            <section key={block.heading}>
              <h2 className="font-display text-2xl md:text-3xl text-ink text-balance mb-4">{block.heading}</h2>
              <div className="space-y-4">
                {block.paragraphs.map((p) => (
                  <p key={p} className="text-sm md:text-base text-ink/75 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              {block.bullets && (
                <ul className="mt-4 space-y-2.5">
                  {block.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm md:text-base text-ink/75">
                      <CheckIcon className="w-4 h-4 text-brass-dark shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      <section className="py-14 border-t border-line bg-bone-dark/40">
        <div className="container-page">
          <h2 className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-6">À lire aussi</h2>
          <div className="grid gap-5 sm:grid-cols-2 max-w-3xl">
            {others.map((a) => (
              <Link key={a.slug} href={`/conseils/${a.slug}`} className="group block rounded-2xl border border-line bg-white p-5 hover:border-brass/40 transition-colors duration-200 focus-ring">
                <h3 className="text-base font-medium text-ink">{a.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Un projet à concrétiser ?"
        description="Décrivez-nous votre chantier : nous étudions la faisabilité et vous répondons avec une première estimation."
      />
    </>
  );
}
