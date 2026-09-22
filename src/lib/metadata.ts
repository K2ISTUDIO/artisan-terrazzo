import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
};

const DEFAULT_OG_IMAGE = "/images/og/artisan-terrazzo-og.jpg";

export function buildMetadata({ title, description, path, image, noindex }: PageMetaInput): Metadata {
  const url = `${siteConfig.domain}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;
  const ogImageEntry = image ? { url: ogImage } : { url: ogImage, width: 1200, height: 800 };

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website",
      images: [ogImageEntry],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
