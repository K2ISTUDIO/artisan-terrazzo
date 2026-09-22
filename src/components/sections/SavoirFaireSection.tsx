import Image from "next/image";

const etapes = [
  { label: "Préparation du support", detail: "Diagnostic, ragréage et traitement des points singuliers du chantier." },
  { label: "Sélection des granulats", detail: "Marbre, granit, verre ou laiton, choisis selon la teinte et l'effet recherchés." },
  { label: "Composition & coulage", detail: "Dosage du liant, coulage sur place et mise en place des joints de fractionnement." },
  { label: "Ponçage", detail: "Plusieurs passes, de la plus grossière à la plus fine, pour révéler les granulats." },
  { label: "Polissage & finition", detail: "Lustrage de la surface puis application du traitement de protection adapté." },
];

export function SavoirFaireSection() {
  return (
    <section className="py-16 md:py-24 border-t border-line">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Savoir-faire</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink text-balance">
            Le terrazzo, un savoir-faire artisanal
          </h2>
          <p className="mt-5 text-base text-ink/70 leading-relaxed max-w-lg">
            Le terrazzo n&rsquo;est pas un simple revêtement que l&rsquo;on pose : c&rsquo;est une matière que l&rsquo;on
            compose, que l&rsquo;on coule et que l&rsquo;on travaille directement sur le chantier. Du choix des
            granulats au dernier passage de polissage, nous maîtrisons chaque étape de réalisation de votre terrazzo.
          </p>
          <div className="mt-8 relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/realisations/chantier-27.jpg"
              alt="Composition de granulats de marbre avant coulage d'un terrazzo"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="space-y-0 lg:mt-16">
          {etapes.map((etape, index) => (
            <li key={etape.label} className="flex gap-5 py-5 border-b border-line last:border-b-0">
              <span className="font-display text-2xl text-brass-dark/70 w-8 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-medium text-ink">{etape.label}</h3>
                <p className="mt-1.5 text-sm text-ink/65 leading-relaxed">{etape.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
