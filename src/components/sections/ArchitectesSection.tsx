import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";

const items = [
  "Plans techniques et coupes de calepinage",
  "Échantillons de granulats et de teintes",
  "Références couleur et moodboards",
  "Cahiers des charges et contraintes de chantier",
];

export function ArchitectesSection() {
  return (
    <section className="py-16 md:py-24 border-t border-line">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Architectes et professionnels</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink text-balance">
            Un interlocuteur technique pour vos projets
          </h2>
          <p className="mt-5 text-base text-ink/70 leading-relaxed max-w-lg">
            Nous travaillons à partir de vos plans, de vos échantillons ou de vos références couleur, pour des
            projets résidentiels comme pour des commerces, hôtels ou bureaux.
          </p>
          <ul className="mt-6 space-y-2.5">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                <CheckIcon className="w-4 h-4 text-brass-dark shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/architectes">Nous soumettre un projet</ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone">
          <Image
            src="/images/realisations/chantier-21.jpg"
            alt="Sol en terrazzo dans un espace d'accueil professionnel"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
