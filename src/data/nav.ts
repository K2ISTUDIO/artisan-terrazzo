export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; href?: string; children?: NavLink[] };

export const mainNav: NavGroup[] = [
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  {
    label: "Le terrazzo",
    href: "/terrazzo",
    children: [
      { label: "Qu'est-ce que le terrazzo", href: "/terrazzo" },
      { label: "Terrazzo coulé sur place", href: "/terrazzo-coule" },
      { label: "Le granito", href: "/granito" },
      { label: "Prix du terrazzo au m²", href: "/prix-terrazzo" },
    ],
  },
  {
    label: "Nos réalisations",
    href: "/realisations",
    children: [
      { label: "Sols terrazzo", href: "/sol-terrazzo" },
      { label: "Plans de travail", href: "/plan-de-travail-terrazzo" },
      { label: "Cuisines", href: "/terrazzo-cuisine" },
      { label: "Salles de bains", href: "/terrazzo-salle-de-bain" },
      { label: "Escaliers", href: "/terrazzo-escalier" },
    ],
  },
  {
    label: "Rénovation",
    href: "/renovation-terrazzo",
    children: [
      { label: "Rénovation de terrazzo", href: "/renovation-terrazzo" },
      { label: "Rénovation de granito", href: "/renovation-granito" },
    ],
  },
  { label: "Architectes & pros", href: "/architectes" },
  { label: "Conseils", href: "/conseils" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavGroup[] = [
  {
    label: "Le métier",
    children: [
      { label: "Le terrazzo", href: "/terrazzo" },
      { label: "Terrazzo coulé sur place", href: "/terrazzo-coule" },
      { label: "Le granito", href: "/granito" },
      { label: "L'artisan à Paris", href: "/artisan-terrazzo-paris" },
      { label: "Entreprise de terrazzo", href: "/entreprise-terrazzo" },
      { label: "Société de terrazzo à Paris", href: "/societe-terrazzo-paris" },
      { label: "Prix au m²", href: "/prix-terrazzo" },
    ],
  },
  {
    label: "Applications",
    children: [
      { label: "Sol terrazzo", href: "/sol-terrazzo" },
      { label: "Plan de travail", href: "/plan-de-travail-terrazzo" },
      { label: "Cuisine", href: "/terrazzo-cuisine" },
      { label: "Salle de bains", href: "/terrazzo-salle-de-bain" },
      { label: "Escalier", href: "/terrazzo-escalier" },
    ],
  },
  {
    label: "Rénovation",
    children: [
      { label: "Rénovation terrazzo", href: "/renovation-terrazzo" },
      { label: "Rénovation granito", href: "/renovation-granito" },
    ],
  },
  {
    label: "Zones d'intervention",
    children: [
      { label: "Paris", href: "/artisan-terrazzo-paris" },
      { label: "Hauts-de-Seine", href: "/artisan-terrazzo-hauts-de-seine" },
      { label: "Seine-Saint-Denis", href: "/artisan-terrazzo-seine-saint-denis" },
      { label: "Val-de-Marne", href: "/artisan-terrazzo-val-de-marne" },
      { label: "Seine-et-Marne", href: "/artisan-terrazzo-seine-et-marne" },
      { label: "Val-d'Oise", href: "/artisan-terrazzo-val-doise" },
      { label: "Essonne", href: "/artisan-terrazzo-essonne" },
      { label: "Yvelines", href: "/artisan-terrazzo-yvelines" },
    ],
  },
  {
    label: "L'agence",
    children: [
      { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
      { label: "Réalisations", href: "/realisations" },
      { label: "Architectes & professionnels", href: "/architectes" },
      { label: "Conseils & guides", href: "/conseils" },
      { label: "Demander une étude", href: "/demande-devis" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];
