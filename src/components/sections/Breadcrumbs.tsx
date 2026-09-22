import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { ChevronRightIcon } from "@/components/ui/Icons";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full = [{ name: "Accueil", path: "/" }, ...items];

  return (
    <nav aria-label="Fil d'ariane" className="border-b border-line bg-bone-dark/40">
      <JsonLd data={breadcrumbSchema(full)} />
      <ol className="container-page flex flex-wrap items-center gap-1.5 py-3 text-xs text-mineral">
        {full.map((item, i) => (
          <li key={item.path} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRightIcon className="w-3 h-3 text-mineral/60" />}
            {i === full.length - 1 ? (
              <span className="text-ink/70" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-ink transition-colors duration-200 focus-ring rounded">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
