import Link from "next/link";
import { PhoneIcon } from "@/components/ui/Icons";
import { PhoneLink } from "@/components/ui/TrackedLink";

export function MobileCtaBar() {
  return (
    <div
      className="xl:hidden fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bone/97 backdrop-blur-sm"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 h-16">
        <PhoneLink className="flex items-center justify-center gap-2 text-sm font-medium text-ink border-r border-line cursor-pointer focus-ring">
          <PhoneIcon className="w-4.5 h-4.5 text-brass-dark" />
          Appeler
        </PhoneLink>
        <Link
          href="/demande-devis"
          className="flex items-center justify-center gap-2 text-sm font-medium bg-anthracite text-bone cursor-pointer focus-ring"
        >
          Demander un devis
        </Link>
      </div>
    </div>
  );
}
