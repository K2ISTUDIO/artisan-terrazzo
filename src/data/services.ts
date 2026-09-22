export type ServiceCard = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export const homeServices: ServiceCard[] = [
  {
    title: "Terrazzo coulé sur place",
    description:
      "Un sol monolithique composé et coulé directement chez vous, poncé puis poli sur plusieurs passes jusqu'à révéler les granulats.",
    href: "/terrazzo-coule",
    image: "/images/realisations/chantier-24.jpg",
  },
  {
    title: "Granito",
    description:
      "La technique historique du terrazzo à la française : granulats de marbre liés au ciment, coulés en dalle ou en place.",
    href: "/granito",
    image: "/images/realisations/chantier-15.jpg",
  },
  {
    title: "Plans de travail & vasques",
    description:
      "Plans de travail, crédences, plans vasques et îlots réalisés sur mesure, dans la teinte et les granulats de votre choix.",
    href: "/plan-de-travail-terrazzo",
    image: "/images/realisations/chantier-25.jpg",
  },
  {
    title: "Sols terrazzo",
    description:
      "Du studio parisien au hall d'immeuble, un sol continu, sans joint de carreau, pensé pour durer plusieurs décennies.",
    href: "/sol-terrazzo",
    image: "/images/realisations/chantier-11.jpg",
  },
  {
    title: "Escaliers",
    description:
      "Marches, contremarches et nez-de-marche coulés ou habillés en terrazzo, pour une continuité visuelle du sol à l'escalier.",
    href: "/terrazzo-escalier",
    image: "/images/realisations/chantier-08.jpg",
  },
  {
    title: "Rénovation & ponçage",
    description:
      "Redonner vie à un granito ancien : ponçage, réparation des zones abîmées, polissage et protection du sol d'origine.",
    href: "/renovation-terrazzo",
    image: "/images/realisations/chantier-20.jpg",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Vous nous présentez votre projet",
    description:
      "Par téléphone, formulaire ou visite sur place : nature du projet, surface, délais et premières envies de teintes ou de granulats.",
  },
  {
    number: "02",
    title: "Étude de faisabilité",
    description:
      "Nous étudions le support existant, les contraintes techniques du chantier (épaisseur, joints de dilatation, humidité) et la surface réelle à traiter.",
  },
  {
    number: "03",
    title: "Définition du terrazzo",
    description:
      "Choix de la teinte du liant, de la granulométrie et de la nature des granulats (marbre, verre, laiton), avec échantillon si besoin.",
  },
  {
    number: "04",
    title: "Réalisation du chantier",
    description:
      "Préparation du support, coulage, temps de séchage, ponçage en plusieurs passes puis polissage et finition de protection.",
  },
];
