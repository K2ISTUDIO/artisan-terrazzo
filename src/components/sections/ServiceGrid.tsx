import Image from "next/image";
import Link from "next/link";
import { homeServices } from "@/data/services";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function ServiceGrid() {
  return (
    <section className="py-16 md:py-24 border-t border-line">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Nos savoir-faire</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink text-balance">
            Notre métier : le terrazzo et le granito
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group block rounded-2xl overflow-hidden bg-white border border-line hover:border-brass/40 hover:shadow-lift transition-all duration-300 focus-ring"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-medium text-ink flex items-center justify-between gap-2">
                  {service.title}
                  <ArrowRightIcon className="w-4 h-4 text-brass-dark shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                </h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
