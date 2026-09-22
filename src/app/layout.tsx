import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Artisan terrazzo à Paris et en Île-de-France | L'Artisan Terrazzo",
    template: "%s | L'Artisan Terrazzo",
  },
  description:
    "Création, rénovation et réparation de terrazzo et granito sur mesure à Paris et en Île-de-France, pour particuliers, architectes et professionnels.",
  openGraph: {
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/og/artisan-terrazzo-og.jpg", width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og/artisan-terrazzo-og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-bone text-ink antialiased">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1 pb-16 xl:pb-0">{children}</main>
        <Footer />
        <MobileCtaBar />
        <CookieConsent />
      </body>
    </html>
  );
}
