# Guide de contenu — artisan-terrazzo.fr

## 1. Positionnement

artisan-terrazzo.fr n'est pas une entreprise générale qui propose occasionnellement du terrazzo. C'est un spécialiste du terrazzo et du granito. Cette idée doit transparaître dans chaque page, chaque titre, chaque CTA.

**Ne jamais écrire** : « Nous réalisons tous types de travaux », « Votre satisfaction est notre priorité », « Le meilleur artisan de Paris ».

**Préférer** : des formulations concrètes, ancrées dans le geste du métier. Exemple déjà en place sur le site : *« Du choix des granulats au dernier passage de polissage, nous maîtrisons chaque étape de réalisation de votre terrazzo. »*

## 2. Ton éditorial

| Trait | En pratique |
|---|---|
| Expert | On nomme les étapes techniques (ponçage, polissage, granulométrie, joints de fractionnement) sans les expliquer comme à un enfant, mais sans jargon gratuit non plus. |
| Rassurant | On répond à l'inquiétude réelle du lecteur (fissure, budget, faisabilité) plutôt que d'affirmer une confiance abstraite. |
| Précis | Des chiffres et fourchettes quand ils existent (épaisseur, prix, délais), toujours qualifiés d'indicatifs s'ils ne sont pas garantis. |
| Sobre | Pas de superlatifs non prouvés (« le plus beau », « unique en France »). Le superlatif vient du client, jamais de nous. |
| Humain | Le lecteur est un particulier, un architecte ou un professionnel avec un vrai projet — jamais un simple prospect anonyme. |

## 3. Ce qu'on ne fait jamais

- **Inventer des certifications, labels ou qualifications.** Le champ `certifications` dans `src/lib/site-config.ts` reste vide tant que l'entreprise n'a pas fourni de justificatif réel. Le composant qui l'affiche est conçu pour disparaître automatiquement s'il est vide — ne pas contourner ce garde-fou en écrivant un texte en dur ailleurs.
- **Inventer des chiffres** (nombre de chantiers, années d'expérience, note Google). Le champ `stats` dans `site-config.ts` suit la même logique : `null` par défaut, à remplir uniquement avec des données vérifiables.
- **Présenter une photo de moodboard comme une réalisation client vérifiée.** Les photos actuelles du dossier `image reference/` sont des références de style (showrooms, magazines déco), pas des preuves de chantiers réalisés par cette entreprise — voir la note dans `realisations/page.tsx`. Elles sont utilisées comme illustrations de matière, jamais comme preuve sociale attribuée à un client nommé.
- **Fabriquer un faux avis ou un faux témoignage.** Aucun témoignage n'est publié sur le site tant qu'il n'est pas réel et vérifiable.

## 4. Terminologie terrazzo — à utiliser correctement

| Terme | Définition courte | Piège à éviter |
|---|---|---|
| Terrazzo | Terme générique international : granulats + liant, poncé et poli. | Ne pas l'utiliser comme s'il désignait uniquement la version italienne historique. |
| Granito | Déclinaison française historique du terrazzo (ciment + granulats de marbre, coulé en place). | Ne pas le présenter comme un matériau totalement différent du terrazzo — même famille, même geste. |
| Terrazzo coulé sur place | Composé et coulé directement sur le chantier, sol continu sans joint de carreau. | Ne pas confondre avec les carreaux terrazzo. |
| Carreaux terrazzo | Éléments préfabriqués en usine, posés comme un carrelage classique. | Ne pas les présenter comme équivalents en rendu au coulé sur place. |
| Granulats | Fragments de marbre, granit, verre ou laiton noyés dans le liant. | Toujours préciser la nature quand c'est pertinent (le mot seul est vague). |
| Ponçage / Polissage | Deux étapes distinctes : le ponçage retire de la matière (plusieurs passes, grain décroissant), le polissage lustre la surface finale. | Ne pas les employer comme synonymes interchangeables dans un même texte technique. |

## 5. Règles rédactionnelles

1. **Une page = une intention de recherche.** Ne pas dupliquer un contenu existant sous un autre titre — voir la section « Décisions anti-duplication » de `SEO-STRATEGY.md`.
2. **Paragraphes courts** (2-4 phrases), un H2 toutes les 150-250 mots sur les pages longues.
3. **Pas de mot-clé forcé.** Si une phrase sonne mal parce qu'elle contient le mot-clé cible, on la réécrit sans lui.
4. **Chiffres qualifiés.** Tout prix ou délai est accompagné d'un signal « indicatif », « à titre d'exemple » ou équivalent, sauf engagement contractuel réel.
5. **CTA après chaque section qui répond à une objection** (prix, faisabilité, délai) — pas seulement en fin de page.
6. **Le français d'abord.** Les accents et l'orthographe correcte (Île-de-France, m², etc.) sont non négociables sur un site qui vise l'autorité éditoriale.

## 6. CTA — bibliothèque de référence

**CTA principal** (utilisé partout où c'est pertinent) :
> Demander une étude de projet

**CTA secondaires**, selon le contexte :
- Obtenir une estimation *(page prix)*
- Parler de mon projet *(page contact / après un article)*
- Être rappelé *(à activer si un système de rappel téléphonique est mis en place)*
- Nous soumettre un projet *(page architectes)*
- Voir nos réalisations *(hero, fin d'article)*

Règle : jamais plus de deux CTA différents visibles dans une même section (`primary` + un `secondary` optionnel), pour ne pas diluer la décision.

## 7. Structure type d'une landing page de service

1. Hero : eyebrow + H1 + intro (2-3 phrases) + liste de réassurance courte + double CTA
2. 2 à 4 blocs de contenu alternés texte/image, chacun répondant à une sous-question concrète
3. FAQ ciblée (3 à 6 questions issues de `src/data/faq.ts`, filtrées par pertinence)
4. Liens connexes (maillage interne, 3-4 liens)
5. CTA de fermeture (`CTASection`)

Ce gabarit est implémenté dans `src/components/templates/ServicePage.tsx` — toute nouvelle page de service doit s'appuyer dessus plutôt que de recréer une mise en page from scratch.

## 8. Structure type d'un article `/conseils`

1. Date + temps de lecture + H1 + chapô (résumé en une phrase, répond directement à la question du titre)
2. Image d'illustration
3. 3 à 5 sections avec H2, chacune traitant un sous-angle
4. Bloc « À lire aussi » (2 articles connexes)
5. CTA de fermeture

Gabarit implémenté dans `src/components/templates/ArticlePage.tsx`, contenu dans `src/data/articles.ts`.

## 9. Ajouter une nouvelle page de service

1. Ajouter le contenu dans un nouveau fichier `src/app/<slug>/page.tsx`.
2. Utiliser `buildMetadata()` pour les métadonnées et `<ServicePage />` pour la mise en page.
3. Choisir 3-5 questions FAQ pertinentes dans `src/data/faq.ts` (ou en ajouter de nouvelles si le sujet n'est pas couvert).
4. Ajouter la page à `src/app/sitemap.ts` et, si pertinent, à `src/data/nav.ts`.
5. Relier la nouvelle page depuis au moins une page pilier existante (maillage interne).
