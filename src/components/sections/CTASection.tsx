import { ButtonLink } from "@/components/ui/Button";

type CTASectionProps = {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
};

export function CTASection({
  title,
  description,
  primaryLabel = "Demander une étude de projet",
  primaryHref = "/demande-devis",
  secondaryLabel,
  secondaryHref,
  dark = true,
}: CTASectionProps) {
  return (
    <section className={dark ? "bg-anthracite terrazzo-texture" : "bg-stone/50"}>
      <div className="container-page relative py-16 md:py-20 text-center">
        <h2 className={`font-display text-3xl md:text-4xl text-balance max-w-2xl mx-auto ${dark ? "text-bone" : "text-ink"}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-4 text-base max-w-xl mx-auto leading-relaxed ${dark ? "text-bone/70" : "text-ink/70"}`}>
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <ButtonLink href={primaryHref} variant="primary">
            {primaryLabel}
          </ButtonLink>
          {secondaryLabel && secondaryHref && (
            <ButtonLink
              href={secondaryHref}
              variant="secondary"
              className={dark ? "!border-bone/30 !text-bone hover:!bg-bone/10 hover:!border-bone" : ""}
            >
              {secondaryLabel}
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
