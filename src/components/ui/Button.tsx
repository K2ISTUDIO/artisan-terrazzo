import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { ArrowRightIcon } from "./Icons";

type Variant = "primary" | "cta" | "secondary" | "ghost";

// Editorial/architectural language, not SaaS: rectangular (2-6px radius,
// never a pill), no shadow, no gradient, restrained hover. Matches the
// hero CTAs so the same button vocabulary reads consistently everywhere.
// Every sizing utility (height/padding/radius) lives inside each variant
// string, never split against `base` — a class from `base` and a class
// from `variants` targeting the same CSS property race by Tailwind's
// generated stylesheet order, not by source position, so a plain string
// override (e.g. ghost trying to cancel a height set in `base`) is not
// reliable. Keeping each variant self-contained sidesteps that entirely.
const base =
  "group inline-flex items-center justify-center gap-2.5 text-sm font-medium tracking-wide transition-colors duration-[350ms] ease-out cursor-pointer focus-ring disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  // Standard call to action: form progression, secondary conversions.
  primary: "h-[50px] px-7 rounded-[4px] bg-anthracite text-bone hover:bg-ink",
  // The one flagship lead-gen action ("Demander une étude de projet") —
  // kept visually distinct from ordinary primary buttons so it still
  // reads as *the* thing to click even on a page with several buttons.
  cta: "h-[50px] px-7 rounded-[4px] bg-brass-dark text-bone hover:bg-brass",
  secondary: "h-[50px] px-7 rounded-[4px] bg-transparent text-anthracite border border-anthracite/35 hover:border-anthracite/60 hover:bg-stone/50",
  ghost: "h-auto px-0 py-1 bg-transparent text-brass-dark underline underline-offset-4 hover:text-brass-dark",
};

const showsArrow: Record<Variant, boolean> = {
  primary: false,
  cta: true,
  secondary: false,
  ghost: false,
};

function ButtonContent({ variant, children }: { variant: Variant; children: React.ReactNode }) {
  return (
    <>
      {children}
      {showsArrow[variant] && (
        <ArrowRightIcon className="w-4 h-4 shrink-0 transition-transform duration-[350ms] ease-out group-hover:translate-x-1" />
      )}
    </>
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({ href, variant = "primary", className = "", children, ...props }: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      <ButtonContent variant={variant}>{children}</ButtonContent>
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
  className?: string;
} & ComponentPropsWithoutRef<"button">;

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      <ButtonContent variant={variant}>{children}</ButtonContent>
    </button>
  );
}
