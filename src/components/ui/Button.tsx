import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-200 cursor-pointer focus-ring disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "bg-anthracite text-bone hover:bg-ink px-6 py-3.5 text-sm",
  secondary:
    "bg-transparent text-anthracite border border-anthracite/30 hover:border-anthracite hover:bg-anthracite/5 px-6 py-3.5 text-sm",
  ghost: "bg-transparent text-brass-dark hover:text-brass-dark underline underline-offset-4 px-0 py-1 text-sm",
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
