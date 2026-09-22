import Image from "next/image";
import Link from "next/link";
import { footerNav, legalNav } from "@/data/nav";
import { siteConfig } from "@/lib/site-config";
import { MailIcon } from "@/components/ui/Icons";
import { EmailLink } from "@/components/ui/TrackedLink";

export function Footer() {
  return (
    <footer className="bg-anthracite text-bone/90 terrazzo-texture">
      <div className="container-page relative py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <Image
                src="/images/logo/monogramme-blanc.png"
                alt="L'Artisan Terrazzo"
                width={44}
                height={44}
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-lg text-bone">L&rsquo;Artisan Terrazzo</span>
            </Link>
            <p className="text-sm text-bone/65 leading-relaxed max-w-xs">
              Création, rénovation et réparation de terrazzo et granito sur mesure, pour particuliers, architectes et professionnels — {siteConfig.tagline}.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <EmailLink className="flex items-center gap-2 text-sm text-bone/85 hover:text-bone transition-colors duration-200 focus-ring rounded">
                <MailIcon className="w-4 h-4 text-brass-light" />
                {siteConfig.email}
              </EmailLink>
            </div>
          </div>

          {footerNav.map((group) => (
            <div key={group.label}>
              <h3 className="text-xs uppercase tracking-[0.15em] text-brass-light mb-4">{group.label}</h3>
              <ul className="space-y-2.5">
                {group.children?.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-bone/70 hover:text-bone transition-colors duration-200 focus-ring rounded">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-bone/15 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-bone/50">
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <ul className="flex items-center gap-6">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-xs text-bone/60 hover:text-bone transition-colors duration-200 focus-ring rounded">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
