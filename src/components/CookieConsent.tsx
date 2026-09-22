"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const STORAGE_KEY = "artisan-terrazzo-cookie-consent";

/**
 * Only renders once a GTM/GA4 ID is actually configured in site-config.ts —
 * today (no trackers wired up) this is a total no-op, which is the correct
 * RGPD-compliant default. Once analytics.gtmId is set, this banner gates
 * the GTM script behind explicit consent and remembers the choice.
 */
export function CookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "refused" | null>(null);
  const hasTrackers = Boolean(siteConfig.analytics.gtmId);

  useEffect(() => {
    if (!hasTrackers) return;
    // One-time read of a browser API unavailable during SSR; there is no
    // external subscription to attach to, so a direct setState here is the
    // correct hydration pattern rather than an effect smell.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "refused") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setConsent(stored);
    }
  }, [hasTrackers]);

  if (!hasTrackers) return null;

  function choose(value: "accepted" | "refused") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  }

  return (
    <>
      {consent === "accepted" && (
        <Script id="gtm-loader" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${siteConfig.analytics.gtmId}');`}
        </Script>
      )}

      {consent === null && (
        <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-bone p-4 md:p-5">
          <div className="container-page flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-sm text-ink/75 leading-relaxed flex-1">
              Nous utilisons des cookies de mesure d&rsquo;audience pour comprendre l&rsquo;usage du site. Vous
              pouvez accepter ou refuser ces cookies non essentiels.{" "}
              <Link href="/politique-confidentialite" className="underline underline-offset-2">
                En savoir plus
              </Link>
              .
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                type="button"
                onClick={() => choose("refused")}
                className="rounded-full border border-line px-4 py-2.5 text-sm text-ink/80 hover:border-anthracite/40 cursor-pointer focus-ring"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="rounded-full bg-anthracite px-4 py-2.5 text-sm text-bone cursor-pointer focus-ring"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
