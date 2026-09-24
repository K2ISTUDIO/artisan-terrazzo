# Stratégie SEO — artisan-terrazzo.fr

## 1. Objectif

Faire d'artisan-terrazzo.fr une référence francophone sur le terrazzo et le granito, avec pour priorité géographique Paris et l'Île-de-France, puis la France entière pour les projets d'envergure. L'objectif business reste la génération de leads qualifiés : le SEO est un canal d'acquisition, pas une fin en soi.

## 2. Mots-clés cibles

### Cluster "matière" (haut de tunnel, volume fort)
terrazzo, terrazzo coulé, terrazzo coulé sur place, granito, prix terrazzo, prix terrazzo m2

### Cluster "prestataire" (intention transactionnelle)
artisan terrazzo, artisan terrazzo Paris, entreprise terrazzo, société terrazzo, société terrazzo Paris, spécialiste terrazzo, artisan granito, entreprise granito

### Cluster "application" (intention projet)
sol terrazzo, granito Paris, plan de travail terrazzo, cuisine terrazzo, salle de bain terrazzo, escalier terrazzo, pose terrazzo

### Cluster "rénovation" (intention réparation)
rénovation terrazzo, rénovation granito, réparation terrazzo, ponçage terrazzo, polissage terrazzo

### Cluster local
artisan terrazzo + [département/ville] pour les 8 zones prioritaires (75, 92, 93, 94, 77, 95, 91, 78)

**Règle éditoriale** : chaque mot-clé cible une page unique. Aucun keyword stuffing — le texte répond d'abord à l'intention de recherche, la densité de mots-clés est un sous-produit, jamais un objectif.

## 3. Pages piliers (pillar pages)

| Page | Rôle | Mots-clés principaux |
|---|---|---|
| `/qui-sommes-nous` | Pilier confiance | entreprise familiale terrazzo, artisan terrazzo, savoir-faire terrazzo |
| `/terrazzo` | Pilier matière | terrazzo, qu'est-ce que le terrazzo |
| `/terrazzo-coule` | Pilier technique | terrazzo coulé sur place |
| `/granito` | Pilier matière (FR) | granito, terrazzo vs granito |
| `/prix-terrazzo` | Pilier conversion | prix terrazzo, prix terrazzo m2 |
| `/artisan-terrazzo-paris` | Pilier local flagship | artisan terrazzo Paris |
| `/entreprise-terrazzo` | Pilier B2B | entreprise terrazzo |
| `/societe-terrazzo-paris` | Pilier local (angle structure/process) | société terrazzo Paris |

## 4. Pages secondaires

- `/artisan-terrazzo` — page de marque / savoir-faire (soutient le pilier Paris sans le cannibaliser)
- `/sol-terrazzo`, `/plan-de-travail-terrazzo`, `/terrazzo-cuisine`, `/terrazzo-salle-de-bain`, `/terrazzo-escalier` — pages d'application
- `/renovation-terrazzo`, `/renovation-granito` — pages de rénovation
- `/realisations`, `/architectes`, `/contact`, `/demande-devis` — pages de conversion et de preuve
- `/conseils/*` — articles de blog, alimentent les pages piliers en longue traîne

## 5. Décisions anti-duplication

Le brief initial demandait à la fois `/entreprise-terrazzo` et `/societe-terrazzo`, ainsi que `/artisan-terrazzo-75` en plus de `/artisan-terrazzo-paris`. Ces paires ciblent la même intention de recherche : les dupliquer aurait produit du contenu quasi identique, pénalisant les deux pages en cannibalisation.

- **`/societe-terrazzo` → redirection 301 vers `/entreprise-terrazzo`** (voir `next.config.ts`). Ce choix reste valable pour la requête générique "société terrazzo" (sans ville) : elle et "entreprise terrazzo" ciblent la même intention.
- **`/artisan-terrazzo-75` → redirection 301 vers `/artisan-terrazzo-paris`**.
- Chacune des 7 pages locales restantes (`/artisan-terrazzo-hauts-de-seine`, etc.) contient un contenu réellement différencié (contexte géographique, typologie de bâti, villes desservies) plutôt qu'un gabarit recopié avec le nom du département changé.

**Exception : `/societe-terrazzo-paris`.** Créée à la demande explicite du client pour cibler frontalement la requête "société terrazzo paris" (un concurrent — Mineral Art Concept — se positionne sur une page dédiée à cet exact intitulé). Elle chevauche par construction `/artisan-terrazzo-paris` (ville) et `/entreprise-terrazzo` (registre "société"/pro) ; le risque de cannibalisation est assumé mais limité par une différenciation réelle :
- Angle éditorial distinct : la structure et le process de l'entreprise (devis, interlocuteur unique, suivi de chantier) plutôt que le patrimoine haussmannien (page Paris) ou l'exploitation commerciale (page B2B).
- Public visé plus large explicitement mentionné (particuliers ET professionnels), alors que `/entreprise-terrazzo` s'adresse aux seuls professionnels.
- FAQ, visuels et méta-description propres, sans reprise de blocs des deux autres pages.
- Maillage interne croisé entre les trois pages plutôt que contenu dupliqué, pour que Google comprenne qu'il s'agit de pages complémentaires et non de clones.

## 6. Stratégie de maillage interne

Principe : chaque page pilier pointe vers ses pages secondaires, chaque page secondaire repointe vers son pilier + vers la conversion.

```
/terrazzo (pilier)
 → /terrazzo-coule, /granito, /prix-terrazzo, /realisations

/granito (pilier)
 → /renovation-granito, /renovation-terrazzo, /artisan-terrazzo-paris

/plan-de-travail-terrazzo
 → /terrazzo-cuisine, /terrazzo-salle-de-bain, /realisations, /demande-devis

Pages locales (8x)
 → /realisations, /demande-devis, section "zones d'intervention" de la home

/societe-terrazzo-paris ↔ /artisan-terrazzo-paris ↔ /entreprise-terrazzo
 (maillage croisé entre les trois pages, voir section 5)
```

Chaque page de service se termine par un bloc "Voir aussi" (`RelatedLinks`) et un CTA vers `/demande-devis`. Le composant `Breadcrumbs` génère automatiquement le `BreadcrumbList` structuré et le fil d'ariane visuel sur toutes les pages profondes.

## 7. Idées d'articles (`/conseils`)

Déjà rédigés : prix du terrazzo en 2026, terrazzo vs béton ciré, entretien du terrazzo.

À produire ensuite, par ordre de priorité :
1. Terrazzo ou carrelage ?
2. Comment est fabriqué le terrazzo ? (angle "coulisses de fabrication")
3. Quelle épaisseur pour un terrazzo coulé ? (déjà couvert en FAQ — à développer en article dédié si le volume de recherche le justifie)
4. Peut-on poser du terrazzo dans une douche ?
5. Comment rénover un sol en granito ? (extension de `/renovation-granito`)
6. Comment choisir les granulats d'un terrazzo ?
7. Quel terrazzo pour une cuisine ?
8. Le terrazzo est-il adapté aux commerces ?
9. Combien coûte la rénovation d'un granito ancien ?

Chaque article doit se terminer par un lien vers la page pilier correspondante et un CTA vers `/demande-devis`.

## 8. Stratégie SEO locale

- 8 pages dédiées (Paris + 7 départements prioritaires), chacune avec un contenu contextualisé (bâti typique, villes principales, nature des projets).
- Pas de pages par ville ou arrondissement pour l'instant : le volume de recherche ne justifie pas encore ce niveau de granularité, et le risque de contenu fin/dupliqué serait élevé. À réévaluer après 6-12 mois de données Search Console.
- `LocalBusiness` / `ProfessionalService` structuré sur chaque page (voir `src/lib/schema.tsx`), avec `areaServed` listant les zones desservies.
- Prochaine étape recommandée : fiche Google Business Profile, avec les mêmes zones desservies, pour capter le pack local.

## 9. Données structurées implémentées

- `HomeAndConstructionBusiness` (LocalBusiness) — toutes les pages, via le layout racine
- `Service` — chaque page de prestation
- `BreadcrumbList` — toutes les pages profondes
- `FAQPage` — pages avec accordéon FAQ
- `Article` — chaque article de `/conseils`

Champs configurables dans `src/lib/site-config.ts` (téléphone, e-mail, zones, réseaux sociaux, certifications, statistiques). **Les certifications et statistiques sont vides par défaut et n'apparaissent que si elles sont renseignées avec des données réelles.**

## 10. SEO technique — état actuel

- Sitemap dynamique (`src/app/sitemap.ts`) et `robots.txt` (`src/app/robots.ts`) générés automatiquement, incluant les 8 pages locales et tous les articles.
- Métadonnées uniques par page via `buildMetadata()` (title, description, canonical, Open Graph, Twitter Card).
- Images servies via `next/image` (AVIF/WebP automatique, lazy loading natif, `sizes` défini par composant).
- Polices auto-hébergées via `next/font` (aucune requête bloquante vers Google Fonts).
- Rendu 100% statique (`○ Static`) pour toutes les pages de contenu — seul `/api/lead` est dynamique.

## 11. Priorités 3 / 6 / 12 mois

**3 mois**
- Renseigner les vraies informations d'entreprise (`site-config.ts`) : téléphone, adresse légale, SIRET, hébergeur.
- Créer et optimiser la fiche Google Business Profile.
- Remplacer les photos de moodboard de `/realisations` par de vraies photos de chantiers, avec avant/après.
- Brancher Google Search Console + GA4 (voir `LEAD-GENERATION.md`).
- Publier les 3 premiers articles restants du cluster rénovation/entretien.

**6 mois**
- Analyser les requêtes Search Console pour identifier les questions non couvertes par la FAQ actuelle et les ajouter.
- Enrichir les 8 pages locales avec de vrais chantiers réalisés dans chaque département (photos, mention de la ville sans excès).
- Ajouter des avis clients réels (Google) sur la home et les pages de conversion, une fois qu'ils existent.
- Premier lien retour (backlink) qualifié : annuaires professionnels du bâtiment, architectes partenaires, presse déco si opportunité.

**12 mois**
- Réévaluer la pertinence de pages ville-par-ville (au-delà des départements) selon les données de recherche locale.
- Étendre le cluster "application" si de nouveaux usages sont demandés par les clients (mobilier, vasques, éléments décoratifs).
- Revue complète des Core Web Vitals en conditions réelles (CrUX) et ajustement si nécessaire.
- Envisager une version anglaise si la demande de projets internationaux (hôtellerie, architectes étrangers) le justifie.
