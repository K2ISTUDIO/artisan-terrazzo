import Link from "next/link";

export function MobileCtaBar() {
  return (
    <div
      className="xl:hidden fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bone/97 backdrop-blur-sm"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Link
        href="/demande-devis"
        className="flex items-center justify-center h-16 text-sm font-semibold bg-brass text-ink cursor-pointer focus-ring"
      >
        Demander une étude de projet
      </Link>
    </div>
  );
}
