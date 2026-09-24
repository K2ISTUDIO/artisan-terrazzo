import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { departements } from "@/data/departements";
import { articles } from "@/data/articles";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/qui-sommes-nous", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/terrazzo", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/terrazzo-coule", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/granito", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/artisan-terrazzo", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/artisan-terrazzo-paris", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/entreprise-terrazzo", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/societe-terrazzo-paris", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/sol-terrazzo", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/renovation-terrazzo", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/renovation-granito", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/plan-de-travail-terrazzo", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/terrazzo-cuisine", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/terrazzo-salle-de-bain", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/terrazzo-escalier", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/prix-terrazzo", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/realisations", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/architectes", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/conseils", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/demande-devis", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/mentions-legales", priority: 0.1, changeFrequency: "yearly" as const },
  { path: "/politique-confidentialite", priority: 0.1, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.domain}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const departementEntries = departements.map((dept) => ({
    url: `${siteConfig.domain}/${dept.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articleEntries = articles.map((article) => ({
    url: `${siteConfig.domain}/conseils/${article.slug}`,
    lastModified: new Date(article.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...departementEntries, ...articleEntries];
}
