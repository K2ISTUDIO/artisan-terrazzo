/**
 * Central, editable business configuration.
 *
 * IMPORTANT — READ BEFORE LAUNCH:
 * Every value below marked "À CONFIRMER" is a placeholder. Nothing in this
 * file should be treated as a verified fact about the business — replace it
 * with real, checkable information before the site goes live. Certifications,
 * years of experience and project counts are left empty on purpose: the
 * brief for this site explicitly forbids inventing labels, qualifications or
 * statistics, so those arrays only render on the page once real values are
 * added here.
 */

export const siteConfig = {
  name: "L'Artisan Terrazzo",
  legalName: "L'Artisan Terrazzo — À CONFIRMER (raison sociale)",
  tagline: "de père en fils",
  domain: "https://artisan-terrazzo.fr",

  // Placeholder contact details — classic French dummy number, replace with real ones.
  phone: {
    display: "01 23 45 67 89",
    href: "tel:+33123456789",
  },
  email: "contact@artisan-terrazzo.fr",

  // No storefront address is published: the activity is on-site (chantiers),
  // which is normal for this trade — do not invent a street address.
  serviceArea: {
    primary: "Paris",
    priorityDepartments: [
      { name: "Paris", code: "75", slug: "artisan-terrazzo-paris" },
      { name: "Hauts-de-Seine", code: "92", slug: "artisan-terrazzo-hauts-de-seine" },
      { name: "Seine-Saint-Denis", code: "93", slug: "artisan-terrazzo-seine-saint-denis" },
      { name: "Val-de-Marne", code: "94", slug: "artisan-terrazzo-val-de-marne" },
      { name: "Seine-et-Marne", code: "77", slug: "artisan-terrazzo-seine-et-marne" },
      { name: "Val-d'Oise", code: "95", slug: "artisan-terrazzo-val-doise" },
      { name: "Essonne", code: "91", slug: "artisan-terrazzo-essonne" },
      { name: "Yvelines", code: "78", slug: "artisan-terrazzo-yvelines" },
    ],
    extended: "Intervention possible dans toute la France pour les projets d'envergure (hôtellerie, commerces, programmes immobiliers), selon étude de faisabilité.",
  },

  hours: {
    display: "Lun. – Ven. · 8h30 – 18h30, sur rendez-vous",
  },

  social: {
    instagram: "", // À CONFIRMER
    pinterest: "", // À CONFIRMER
    linkedin: "", // À CONFIRMER
  },

  // Leave empty until real, verifiable certifications exist. The UI hides
  // the "certifications" block automatically when this array is empty.
  certifications: [] as { label: string; issuer?: string }[],

  // Leave null until real, verifiable figures exist (do not estimate).
  stats: {
    yearsOfExperience: null as number | null,
    projectsCompleted: null as number | null,
    googleRating: null as { value: number; count: number } | null,
  },

  analytics: {
    ga4Id: "", // G-XXXXXXXXXX — set before launch
    gtmId: "", // GTM-XXXXXXX — set before launch
    metaPixelId: "", // set before launch
    googleAdsId: "", // AW-XXXXXXXXX — set before launch
  },
} as const;

export type ServiceArea = (typeof siteConfig.serviceArea.priorityDepartments)[number];
