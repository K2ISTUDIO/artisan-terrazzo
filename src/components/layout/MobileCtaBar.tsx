import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function MobileCtaBar() {
  return (
    <div
      className="xl:hidden fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bone/97 backdrop-blur-sm"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Link
        href="/demande-devis"
        className="group flex items-center justify-center gap-2 h-16 text-sm font-semibold bg-brass-dark text-bone cursor-pointer focus-ring"
      >
        Demander une étude de projet
        <ArrowRightIcon className="w-4 h-4 shrink-0 transition-transform duration-[350ms] ease-out group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
