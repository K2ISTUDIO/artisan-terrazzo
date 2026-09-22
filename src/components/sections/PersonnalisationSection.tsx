import Image from "next/image";

const options = [
  { title: "Granulats", detail: "Marbre, granit, verre recyclé ou laiton, seuls ou combinés." },
  { title: "Granulométrie", detail: "Du grain fin et discret au granulat large et graphique." },
  { title: "Teintes", detail: "Un liant clair, minéral ou plus soutenu selon l'ambiance recherchée." },
  { title: "Finition", detail: "Poli brillant, satiné ou mat, adapté à l'usage de la pièce." },
  { title: "Motifs & bordures", detail: "Bandes de laiton, calepinage, cabochons ou inserts sur mesure." },
  { title: "Formes", detail: "Sols, plans de travail, vasques, marches : chaque forme se compose sur mesure." },
];

export function PersonnalisationSection() {
  return (
    <section className="py-16 md:py-24 border-t border-line bg-bone-dark/40">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-stone order-2 lg:order-1">
          <Image
            src="/images/realisations/chantier-02.jpg"
            alt="Terrazzo aux granulats de marbre multicolores"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Sur mesure</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink text-balance">Chaque terrazzo est unique</h2>
          <p className="mt-5 text-base text-ink/70 leading-relaxed max-w-lg">
            Parce qu&rsquo;il est composé et coulé sur votre chantier, votre terrazzo n&rsquo;existe qu&rsquo;une fois.
            Nous définissons ensemble chaque paramètre pour qu&rsquo;il s&rsquo;accorde à votre intérieur.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
            {options.map((option) => (
              <div key={option.title}>
                <h3 className="text-sm font-medium text-ink">{option.title}</h3>
                <p className="mt-1 text-sm text-ink/60 leading-relaxed">{option.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
