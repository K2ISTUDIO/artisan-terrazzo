import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full tracking-wide transition-all duration-200 cursor-pointer focus-ring disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brass text-ink font-semibold hover:bg-brass-light px-7 py-4 text-sm shadow-[0_6px_20px_-6px_rgba(169,130,47,0.6)] hover:shadow-[0_10px_24px_-6px_rgba(169,130,47,0.65)] hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-anthracite font-medium border border-anthracite/30 hover:border-anthracite hover:bg-anthracite/5 px-6 py-3.5 text-sm",
  ghost: "bg-transparent text-brass-dark font-medium hover:text-brass-dark underline underline-offset-4 px-0 py-1 text-sm",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({ href, variant = "primary", className = "", children, ...props }: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
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
      {children}
    </button>
  );
}
