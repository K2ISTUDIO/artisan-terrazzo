import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Votre demande a bien été transmise",
  description: "Votre demande de devis a été transmise à un spécialiste terrazzo qui vous recontactera prochainement.",
  path: "/merci-demande-devis",
  noindex: true,
});

export default function MerciPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page max-w-xl text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brass/15">
          <CheckIcon className="w-7 h-7 text-brass-dark" />
        </div>
        <h1 className="font-display text-3xl md:text-4xl text-ink text-balance">Votre projet a bien été transmis</h1>
        <p className="mt-5 text-base text-ink/70 leading-relaxed">
          Un spécialiste terrazzo étudiera votre demande et vous recontactera prochainement. En attendant, vous
          pouvez découvrir notre savoir-faire ou parcourir nos réalisations.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <ButtonLink href="/realisations">Voir nos réalisations</ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Retour à l&rsquo;accueil
          </ButtonLink>
        </div>
        <div className="mt-14 relative aspect-[16/9] rounded-3xl overflow-hidden bg-stone">
          <Image
            src="/images/realisations/chantier-16.jpg"
            alt="Sol en terrazzo poli"
            fill
            sizes="(min-width: 768px) 640px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-xs text-mineral">
          Une erreur dans votre demande ?{" "}
          <Link href="/contact" className="underline underline-offset-2 text-brass-dark">
            Contactez-nous directement
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
