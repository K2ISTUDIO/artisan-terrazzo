import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";

export type RelatedLink = { label: string; href: string };

export function RelatedLinks({ title = "Voir aussi", links }: { title?: string; links: RelatedLink[] }) {
  if (links.length === 0) return null;
  return (
    <section className="py-14 border-t border-line bg-bone-dark/40">
      <div className="container-page">
        <h2 className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-5">{title}</h2>
        <ul className="flex flex-wrap gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2.5 text-sm text-ink/80 hover:text-ink hover:border-brass/40 transition-colors duration-200 focus-ring"
              >
                {link.label}
                <ArrowRightIcon className="w-3.5 h-3.5 text-brass-dark" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
