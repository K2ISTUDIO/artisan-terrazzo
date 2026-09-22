import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ArrowRightIcon, MapPinIcon } from "@/components/ui/Icons";

export function ZonesSection() {
  return (
    <section id="zones" className="py-16 md:py-24 border-t border-line bg-bone-dark/40 scroll-mt-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Zones d&rsquo;intervention</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink text-balance">
            Paris et l&rsquo;ensemble de l&rsquo;Île-de-France
          </h2>
          <p className="mt-4 text-base text-ink/70 leading-relaxed">{siteConfig.serviceArea.extended}</p>
        </div>
        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {siteConfig.serviceArea.priorityDepartments.map((dept) => (
            <li key={dept.slug}>
              <Link
                href={`/${dept.slug}`}
                className="group flex items-center justify-between gap-2 rounded-2xl border border-line bg-white px-4 py-4 text-sm text-ink/80 hover:text-ink hover:border-brass/40 transition-colors duration-200 focus-ring"
              >
                <span className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 text-brass-dark shrink-0" />
                  {dept.name}
                </span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-mineral group-hover:translate-x-0.5 transition-transform duration-200 shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
