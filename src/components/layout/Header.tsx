"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/data/nav";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/Button";
import { ChevronDownIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/Icons";
import { PhoneLink } from "@/components/ui/TrackedLink";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 bg-bone/95 backdrop-blur-sm border-b border-line">
      <div className="container-page flex h-18 md:h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="L'Artisan Terrazzo — accueil">
          <Image
            src="/images/logo/monogramme-noir.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 md:h-10 md:w-10 object-contain"
            priority
          />
          <span className="font-display text-lg md:text-xl leading-none text-ink">
            L&rsquo;Artisan <span className="block text-[0.65em] tracking-[0.25em] uppercase text-mineral font-body font-medium mt-0.5">Terrazzo</span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1" aria-label="Navigation principale">
          {mainNav.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href ?? "#"}
                className="flex items-center gap-1 px-3.5 py-2 text-sm text-ink/80 hover:text-ink rounded-full hover:bg-stone/60 transition-colors duration-200 focus-ring"
              >
                {item.label}
                {item.children && <ChevronDownIcon className="w-3.5 h-3.5 text-mineral" />}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block group-focus-within:block">
                  <ul className="min-w-64 rounded-2xl border border-line bg-bone shadow-lift p-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-xl px-3.5 py-2.5 text-sm text-ink/80 hover:text-ink hover:bg-stone/60 transition-colors duration-200 focus-ring"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <PhoneLink className="flex items-center gap-2 text-sm text-ink/80 hover:text-ink transition-colors duration-200 focus-ring rounded-full px-2 py-1">
            <PhoneIcon className="w-4 h-4 text-brass-dark" />
            {siteConfig.phone.display}
          </PhoneLink>
          <ButtonLink href="/demande-devis" className="!py-3">
            Demander une étude
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="xl:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-full text-ink cursor-pointer focus-ring"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>

      {open && (
        <div className="xl:hidden fixed inset-x-0 top-18 bottom-0 z-40 bg-bone overflow-y-auto border-t border-line">
          <nav className="container-page py-6 flex flex-col" aria-label="Navigation mobile">
            {mainNav.map((item) => (
              <div key={item.label} className="border-b border-line/70 py-1">
                <div className="flex items-center justify-between">
                  <Link href={item.href ?? "#"} className="flex-1 py-3 text-base text-ink focus-ring rounded">
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                      className="p-3 -mr-2 cursor-pointer focus-ring rounded-full"
                      aria-label={`Sous-menu ${item.label}`}
                      aria-expanded={openGroup === item.label}
                    >
                      <ChevronDownIcon
                        className={`w-4 h-4 text-mineral transition-transform duration-200 ${openGroup === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {item.children && openGroup === item.label && (
                  <ul className="pb-3 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="block py-2.5 text-sm text-ink/75 focus-ring rounded">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <PhoneLink className="flex items-center gap-2 text-base text-ink py-2 focus-ring rounded">
                <PhoneIcon className="w-5 h-5 text-brass-dark" />
                {siteConfig.phone.display}
              </PhoneLink>
              <ButtonLink href="/demande-devis" className="w-full">
                Demander une étude de projet
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
