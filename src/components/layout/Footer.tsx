import Image from "next/image";
import Link from "next/link";
import { footerNav, legalNav } from "@/data/nav";
import { siteConfig } from "@/lib/site-config";
import { MailIcon } from "@/components/ui/Icons";
import { EmailLink } from "@/components/ui/TrackedLink";

export function Footer() {
  return (
    <footer className="bg-anthracite text-bone/90 terrazzo-texture">
      <div className="container-page relative py-10 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-3">
              <Image
                src="/images/logo/monogramme-blanc.png"
                alt="L'Artisan Terrazzo"
                width={44}
                height={44}
                className="h-7 w-7 object-contain"
              />
              <span className="font-display text-sm text-bone">L&rsquo;Artisan Terrazzo</span>
            </Link>
            <p className="text-xs text-bone/55 leading-relaxed max-w-xs">
              Création, rénovation et réparation de terrazzo et granito sur mesure, pour particuliers, architectes et professionnels — {siteConfig.tagline}.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <EmailLink className="flex items-center gap-1.5 text-xs text-bone/70 hover:text-bone transition-colors duration-200 focus-ring rounded">
                <MailIcon className="w-3.5 h-3.5 text-brass-light/80" />
                {siteConfig.email}
              </EmailLink>
            </div>
          </div>

          {footerNav.map((group) => (
            <div key={group.label}>
              <h3 className="text-[0.65rem] uppercase tracking-[0.12em] text-brass-light/70 mb-3">{group.label}</h3>
              <ul className="space-y-1.5">
                {group.children?.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs text-bone/60 hover:text-bone transition-colors duration-200 focus-ring rounded">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-5 border-t border-bone/10 flex flex-col-reverse md:flex-row items-center justify-between gap-3">
          <p className="text-[0.7rem] text-bone/40">
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <ul className="flex items-center gap-5">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[0.7rem] text-bone/50 hover:text-bone transition-colors duration-200 focus-ring rounded">
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
