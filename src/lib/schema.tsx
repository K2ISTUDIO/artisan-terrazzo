import { siteConfig } from "./site-config";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    description:
      "Artisan spécialisé dans la création, la rénovation et la réparation de sols et surfaces en terrazzo et granito, à Paris et en Île-de-France.",
    url: siteConfig.domain,
    email: siteConfig.email,
    image: `${siteConfig.domain}/images/logo/logo-couleur-texte.png`,
    priceRange: "€€-€€€",
    areaServed: siteConfig.serviceArea.priorityDepartments.map((d) => ({
      "@type": "AdministrativeArea",
      name: d.name,
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    slogan: siteConfig.tagline,
    description:
      "Entreprise familiale spécialisée dans le terrazzo et le granito : création sur mesure, rénovation et restauration, à Paris, en Île-de-France et partout en France pour les projets d'envergure.",
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/images/logo/logo-couleur-texte.png`,
    email: siteConfig.email,
  };
}

export function professionalServiceSchema(input: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    name: input.name,
    description: input.description,
    url: `${siteConfig.domain}${input.url}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Île-de-France",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.path}`,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: `${siteConfig.domain}${input.image}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.domain}/images/logo/logo-couleur-texte.png`,
      },
    },
    mainEntityOfPage: `${siteConfig.domain}${input.path}`,
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
