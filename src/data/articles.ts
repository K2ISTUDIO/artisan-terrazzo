export type ArticleBlock = { heading: string; paragraphs: string[]; bullets?: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  datePublished: string;
  readingTime: string;
  blocks: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "prix-terrazzo-m2-2026",
    title: "Terrazzo : quel prix au m² en 2026 ?",
    excerpt:
      "Terrazzo coulé, carreaux préfabriqués, rénovation d'un granito ancien : tour d'horizon des fourchettes de prix et des critères qui les expliquent.",
    metaDescription:
      "Quel budget prévoir pour un terrazzo en 2026 ? Fourchettes indicatives selon la technique, la surface et les granulats, et conseils pour affiner votre budget.",
    image: "/images/realisations/chantier-19.jpg",
    imageAlt: "Grand sol en terrazzo poli",
    datePublished: "2026-01-15",
    readingTime: "6 min",
    blocks: [
      {
        heading: "Pourquoi le prix du terrazzo varie autant",
        paragraphs: [
          "Contrairement à un carrelage vendu au m² dans un catalogue, le terrazzo coulé sur place est composé sur mesure pour chaque chantier. Le prix final dépend donc d'un ensemble de paramètres propres à votre projet, et non d'un tarif catalogue unique.",
          "C'est ce qui explique les écarts parfois importants entre deux devis pour une surface équivalente : la technique retenue, l'état du support et la complexité du dessin pèsent souvent plus lourd que la surface elle-même.",
        ],
      },
      {
        heading: "Les grandes fourchettes à connaître",
        paragraphs: [
          "À titre indicatif, un terrazzo coulé sur place se situe le plus souvent entre 150 et 400 € par m², pose comprise, hors préparation lourde du support. Les carreaux terrazzo préfabriqués, plus rapides à poser, se situent généralement entre 80 et 150 € par m² de pose. Une simple rénovation par ponçage d'un terrazzo ou granito existant coûte en général entre 40 et 90 € par m².",
        ],
        bullets: [
          "Terrazzo coulé sur place : 150 € – 400 € / m²",
          "Carreaux terrazzo (pose) : 80 € – 150 € / m²",
          "Rénovation et ponçage : 40 € – 90 € / m²",
        ],
      },
      {
        heading: "Ce qui fait grimper — ou baisser — la note",
        paragraphs: [
          "La surface totale joue en votre faveur jusqu'à un certain point : les petites surfaces coûtent proportionnellement plus cher, car une part importante du coût est liée à la préparation du chantier et à la mobilisation du matériel de ponçage, quelle que soit la taille de la pièce.",
          "À l'inverse, un motif complexe avec plusieurs teintes, des bandes de laiton ou des granulats rares augmente naturellement le budget, tout comme un support en mauvais état nécessitant une préparation approfondie avant coulage.",
        ],
      },
      {
        heading: "Comment affiner votre budget",
        paragraphs: [
          "La meilleure façon d'obtenir un chiffre fiable reste une étude de votre projet précis : surface exacte, photos du support actuel, teinte et granulats envisagés. Un premier échange permet généralement de vous situer dans l'une de ces fourchettes avant un chiffrage définitif après visite ou étude sur plans.",
        ],
      },
    ],
  },
  {
    slug: "terrazzo-ou-beton-cire",
    title: "Terrazzo ou béton ciré : comment choisir ?",
    excerpt:
      "Deux revêtements minéraux à l'aspect contemporain, mais deux techniques et deux rendus très différents. Nos repères pour trancher.",
    metaDescription:
      "Terrazzo ou béton ciré : quelles différences de technique, de rendu et d'entretien ? Un comparatif pour choisir le revêtement adapté à votre projet.",
    image: "/images/realisations/chantier-11.jpg",
    imageAlt: "Sol en terrazzo poli aux granulats visibles",
    datePublished: "2026-02-03",
    readingTime: "5 min",
    blocks: [
      {
        heading: "Deux matières, deux philosophies",
        paragraphs: [
          "Le béton ciré est un enduit fin appliqué en couches successives sur une chape ou un ancien revêtement, pour un rendu lisse et uniforme, sans relief apparent. Le terrazzo, lui, est composé de granulats visibles noyés dans un liant : sa surface révèle une matière, avec du relief et du contraste, même une fois polie.",
          "Le choix entre les deux tient donc d'abord à l'effet recherché : une surface neutre et continue pour le béton ciré, une matière texturée et graphique pour le terrazzo.",
        ],
      },
      {
        heading: "Résistance et durabilité",
        paragraphs: [
          "Un terrazzo coulé sur place, poncé sur plusieurs millimètres d'épaisseur, offre une réserve de matière qui permet un ou plusieurs cycles de ponçage en cas d'usure. Le béton ciré, appliqué en couche fine, est plus sensible aux chocs et aux rayures profondes et se répare plus difficilement de façon invisible.",
        ],
      },
      {
        heading: "Entretien au quotidien",
        paragraphs: [
          "Les deux matériaux demandent un entretien courant simple (balayage, lavage à l'eau claire), mais le béton ciré nécessite en général un traitement d'entretien plus rapproché pour préserver sa protection de surface, tandis qu'un terrazzo correctement fini garde son aspect plus longtemps entre deux entretiens.",
        ],
      },
      {
        heading: "Notre recommandation",
        paragraphs: [
          "Si vous recherchez un sol qui affirme une matière et traverse les modes sans se démoder, le terrazzo est le choix le plus pérenne. Le béton ciré reste pertinent pour un budget plus contraint ou un rendu volontairement minimaliste et uniforme.",
        ],
      },
    ],
  },
  {
    slug: "entretien-terrazzo",
    title: "Comment entretenir le terrazzo au quotidien",
    excerpt:
      "Un entretien simple, sans produits agressifs, suffit à préserver l'éclat d'un terrazzo pendant des décennies. Voici les bons réflexes.",
    metaDescription:
      "Comment nettoyer et entretenir un sol en terrazzo au quotidien ? Bons réflexes, produits à éviter et entretien périodique pour préserver son éclat.",
    image: "/images/realisations/chantier-16.jpg",
    imageAlt: "Sol en granito poli aux tons clairs",
    datePublished: "2026-02-20",
    readingTime: "4 min",
    blocks: [
      {
        heading: "Le geste quotidien : simple, mais pas anodin",
        paragraphs: [
          "Au quotidien, un balayage suivi d'un lavage à l'eau claire ou avec un savon au pH neutre suffit largement à entretenir un terrazzo. C'est justement la simplicité de cet entretien qui explique la longévité du matériau dans les halls d'immeuble et commerces qui l'ont adopté depuis des décennies.",
        ],
      },
      {
        heading: "Les produits à éviter",
        paragraphs: [
          "Les produits acides (vinaigre blanc, certains détartrants) attaquent le calcaire présent dans le marbre et peuvent ternir durablement la surface d'un terrazzo à granulats de marbre. Les produits abrasifs ou les éponges grattantes rayent la finition polie et rendent la surface plus sensible à l'encrassement.",
        ],
        bullets: [
          "À éviter : vinaigre blanc, détartrants acides, eau de Javel non diluée",
          "À éviter : éponges abrasives ou grattantes",
          "À privilégier : eau claire, savon neutre, serpillière microfibre",
        ],
      },
      {
        heading: "Un entretien périodique selon la finition",
        paragraphs: [
          "Selon le traitement de finition posé lors de la réalisation ou de la rénovation de votre terrazzo, un entretien périodique (tous les un à trois ans selon l'usage de la pièce) permet de renouveler la protection de surface et de conserver l'éclat du polissage. C'est un point que nous précisons systématiquement à la fin de chaque chantier, selon la finition retenue.",
        ],
      },
      {
        heading: "Que faire en cas de tache ou de choc ?",
        paragraphs: [
          "Une tache doit être traitée rapidement, sans frotter avec un produit abrasif : un nettoyage doux suffit dans la majorité des cas. En cas d'éclat ou de fissure localisée, une reprise ciblée reste possible sans avoir à refaire l'ensemble du sol — voir notre page dédiée à la rénovation de terrazzo.",
        ],
      },
    ],
  },
];
