import { processSteps } from "@/data/services";
import { ButtonLink } from "@/components/ui/Button";

export function ProcessStepsSection() {
  return (
    <section className="py-16 md:py-24 border-t border-line">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Méthode</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink text-balance">Votre projet en 4 étapes</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.number} className="relative pl-0">
              <span className="font-display text-5xl text-stone">{step.number}</span>
              <h3 className="mt-3 text-lg font-medium text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/demande-devis" variant="secondary">
            Démarrer l&rsquo;étape 1 : présenter mon projet
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
