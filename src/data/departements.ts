export type Departement = {
  slug: string;
  code: string;
  name: string;
  title: string;
  metaDescription: string;
  intro: string;
  context: string;
  villes: string[];
};

export const departements: Departement[] = [
  {
    slug: "artisan-terrazzo-hauts-de-seine",
    code: "92",
    name: "Hauts-de-Seine",
    title: "Artisan terrazzo dans les Hauts-de-Seine (92)",
    metaDescription:
      "Terrazzo et granito coulés sur place dans les Hauts-de-Seine : appartements haussmanniens, halls d'immeuble et bureaux à Boulogne-Billancourt, Neuilly, Levallois et La Défense.",
    intro:
      "Des halls d'entrée de Neuilly-sur-Seine aux plateaux de bureaux de La Défense, les Hauts-de-Seine mêlent immeubles anciens et programmes tertiaires récents. Nous intervenons aussi bien sur la rénovation d'un granito d'entrée d'immeuble que sur la réalisation d'un sol terrazzo neuf dans un appartement ou un espace professionnel.",
    context:
      "Le bâti du département est contrasté : immeubles bourgeois du début du XXe siècle à Neuilly, Boulogne-Billancourt ou Levallois-Perret, où beaucoup de halls et de paliers conservent un granito d'origine à restaurer, et immeubles tertiaires ou résidentiels plus récents autour de La Défense, Issy-les-Moulineaux ou Rueil-Malmaison, où le terrazzo coulé sur place s'intègre à des projets d'architecture intérieure haut de gamme.",
    villes: [
      "Boulogne-Billancourt",
      "Neuilly-sur-Seine",
      "Levallois-Perret",
      "Issy-les-Moulineaux",
      "Rueil-Malmaison",
      "Courbevoie",
      "Nanterre",
    ],
  },
  {
    slug: "artisan-terrazzo-seine-saint-denis",
    code: "93",
    name: "Seine-Saint-Denis",
    title: "Artisan terrazzo en Seine-Saint-Denis (93)",
    metaDescription:
      "Terrazzo coulé sur place et granito en Seine-Saint-Denis : logements neufs, lofts d'ateliers rénovés et locaux commerciaux à Saint-Denis, Montreuil, Pantin et Aubervilliers.",
    intro:
      "La Seine-Saint-Denis connaît une transformation continue de son parc immobilier, entre anciens ateliers reconvertis, logements neufs livrés dans le cadre de grands programmes urbains et commerces en développement. C'est un terrain propice au terrazzo coulé sur place, aussi bien en sol qu'en plan de travail.",
    context:
      "À Saint-Denis, Montreuil, Pantin ou Aubervilliers, de nombreux projets combinent volumes industriels réhabilités et constructions neuves : les surfaces sont souvent généreuses, ce qui permet des compositions de terrazzo avec plusieurs teintes, bandes de laiton ou zones de calepinage marquées. Nous accompagnons aussi bien les particuliers en rénovation que les maîtres d'ouvrage sur des programmes plus importants.",
    villes: ["Saint-Denis", "Montreuil", "Pantin", "Aubervilliers", "Saint-Ouen-sur-Seine", "Bobigny"],
  },
  {
    slug: "artisan-terrazzo-val-de-marne",
    code: "94",
    name: "Val-de-Marne",
    title: "Artisan terrazzo dans le Val-de-Marne (94)",
    metaDescription:
      "Terrazzo et granito dans le Val-de-Marne : maisons individuelles, appartements et rénovation de sols anciens à Vincennes, Saint-Maur-des-Fossés, Nogent-sur-Marne et Créteil.",
    intro:
      "Entre maisons de ville, pavillons avec jardin et immeubles des années 1930, le Val-de-Marne offre une grande variété de chantiers : sols de plain-pied à couler dans une extension, granito ancien à réveiller dans une maison de famille, ou plan de travail sur mesure dans une cuisine rénovée.",
    context:
      "Des communes comme Vincennes, Saint-Maur-des-Fossés ou Nogent-sur-Marne conservent un bâti résidentiel dense où le granito reste présent dans les entrées et les cages d'escalier des immeubles anciens. Les maisons individuelles du département se prêtent bien à un terrazzo coulé en rez-de-chaussée, en continuité avec une pièce de vie ou une cuisine ouverte.",
    villes: ["Vincennes", "Saint-Maur-des-Fossés", "Nogent-sur-Marne", "Créteil", "Charenton-le-Pont", "Ivry-sur-Seine"],
  },
  {
    slug: "artisan-terrazzo-seine-et-marne",
    code: "77",
    name: "Seine-et-Marne",
    title: "Artisan terrazzo en Seine-et-Marne (77)",
    metaDescription:
      "Terrazzo coulé sur place en Seine-et-Marne : maisons individuelles, longères rénovées et projets de plus grande envergure autour de Melun, Fontainebleau et Meaux.",
    intro:
      "La Seine-et-Marne, plus rurale et pavillonnaire, accueille souvent des projets de rénovation complète de maison ou de construction neuve où le terrazzo s'installe sur de grandes surfaces continues, du séjour à la cuisine.",
    context:
      "Autour de Melun, Fontainebleau ou Meaux, les maisons individuelles et les longères rénovées permettent des sols coulés sans les contraintes de copropriété que l'on rencontre en petite couronne. Le département étant plus étendu, chaque projet fait l'objet d'une étude de faisabilité intégrant la distance et l'accès au chantier.",
    villes: ["Melun", "Fontainebleau", "Meaux", "Chelles", "Provins", "Coulommiers"],
  },
  {
    slug: "artisan-terrazzo-val-doise",
    code: "95",
    name: "Val-d'Oise",
    title: "Artisan terrazzo dans le Val-d'Oise (95)",
    metaDescription:
      "Terrazzo et granito dans le Val-d'Oise : maisons individuelles et logements collectifs à Cergy, Argenteuil, Sarcelles et Pontoise.",
    intro:
      "Entre la ville nouvelle de Cergy-Pontoise et les communes plus anciennes du sud du département, le Val-d'Oise combine constructions récentes et bâti plus ancien, offrant des contextes très différents pour un projet de terrazzo.",
    context:
      "À Cergy, Pontoise ou Argenteuil, les logements collectifs plus récents se prêtent bien à des sols terrazzo neufs, tandis que les maisons individuelles plus anciennes de Sarcelles, Enghien-les-Bains ou Franconville peuvent conserver un granito à restaurer dans les parties communes ou les entrées.",
    villes: ["Cergy", "Pontoise", "Argenteuil", "Sarcelles", "Enghien-les-Bains", "Franconville"],
  },
  {
    slug: "artisan-terrazzo-essonne",
    code: "91",
    name: "Essonne",
    title: "Artisan terrazzo dans l'Essonne (91)",
    metaDescription:
      "Terrazzo coulé sur place et granito dans l'Essonne : maisons individuelles, laboratoires et bureaux autour d'Évry-Courcouronnes, Massy et le plateau de Saclay.",
    intro:
      "L'Essonne réunit un habitat pavillonnaire dense et un pôle scientifique et tertiaire en développement autour du plateau de Saclay, deux contextes qui appellent des réponses très différentes en matière de sols et de plans de travail terrazzo.",
    context:
      "Dans les communes résidentielles comme Sainte-Geneviève-des-Bois ou Savigny-sur-Orge, la demande porte surtout sur des cuisines, salles de bains et sols de maison individuelle. Autour de Massy, Palaiseau et du plateau de Saclay, les projets tertiaires et scientifiques nécessitent des sols techniques, durables et esthétiquement sobres, un terrain que le terrazzo couvre naturellement.",
    villes: ["Évry-Courcouronnes", "Massy", "Palaiseau", "Sainte-Geneviève-des-Bois", "Savigny-sur-Orge", "Corbeil-Essonnes"],
  },
  {
    slug: "artisan-terrazzo-yvelines",
    code: "78",
    name: "Yvelines",
    title: "Artisan terrazzo dans les Yvelines (78)",
    metaDescription:
      "Terrazzo et granito dans les Yvelines : demeures de caractère, appartements haut de gamme et rénovation patrimoniale à Versailles, Saint-Germain-en-Laye et Saint-Cloud.",
    intro:
      "Les Yvelines comptent un patrimoine résidentiel exigeant, entre demeures de caractère, appartements haussmanniens et maisons bourgeoises, où la rénovation d'un granito ancien côtoie des projets neufs très soignés.",
    context:
      "À Versailles, Saint-Germain-en-Laye ou Saint-Cloud, de nombreuses propriétés anciennes conservent des sols en granito d'origine, parfois masqués sous un revêtement plus récent, qu'un ponçage complet permet souvent de retrouver. Les projets neufs du département, eux, privilégient des compositions de terrazzo sur mesure, en cohérence avec une architecture intérieure haut de gamme.",
    villes: ["Versailles", "Saint-Germain-en-Laye", "Saint-Cloud", "Le Chesnay-Rocquencourt", "Rambouillet", "Poissy"],
  },
];
