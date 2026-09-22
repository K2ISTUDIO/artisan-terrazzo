# artisan-terrazzo.fr

Site vitrine et machine d'acquisition de leads pour un artisan spécialisé dans le terrazzo et le granito (Paris & Île-de-France). Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm run lint    # ESLint
```

## Avant la mise en ligne — checklist

Le site est fonctionnel de bout en bout (39 routes, formulaire de lead multi-étapes testé, SEO technique en place), mais plusieurs éléments sont volontairement laissés en placeholder tant que l'entreprise n'a pas fourni d'informations réelles et vérifiées :

- [ ] **`src/lib/site-config.ts`** — téléphone, e-mail, réseaux sociaux, certifications et statistiques réelles (actuellement vides/placeholder par choix : voir le commentaire en tête de fichier).
- [ ] **`src/app/mentions-legales/page.tsx`** — raison sociale, SIRET, hébergeur (marqués « à compléter »).
- [ ] **`src/app/api/lead/route.ts`** — brancher une vraie destination pour les leads (e-mail transactionnel, CRM). Actuellement les soumissions sont seulement journalisées côté serveur. Voir `LEAD-GENERATION.md`.
- [ ] **Stockage des pièces jointes** du formulaire de devis (photos/plans) — non persistées pour l'instant, prévoir un service de stockage.
- [ ] **`/realisations`** — remplacer les photos de moodboard (dossier `image reference/` d'origine) par de vraies photos de chantiers réalisés, avec l'accord du client concerné.
- [ ] **Analytics** — renseigner `analytics.gtmId` dans `site-config.ts` pour activer Google Tag Manager (le bandeau cookies et le chargement du script sont conditionnés à cette valeur).

## Documentation du projet

- [`SEO-STRATEGY.md`](./SEO-STRATEGY.md) — mots-clés, pages piliers, maillage interne, stratégie locale, priorités 3/6/12 mois.
- [`CONTENT-GUIDE.md`](./CONTENT-GUIDE.md) — ton éditorial, terminologie, règles de rédaction, gabarits de page.
- [`LEAD-GENERATION.md`](./LEAD-GENERATION.md) — parcours de conversion, événements analytics, ce qui reste à brancher.

## Structure

```
src/
  app/            routes (App Router) — une page par intention SEO
  components/
    layout/       header, footer, barre CTA mobile
    sections/     blocs réutilisables (hero, FAQ, CTA, breadcrumbs…)
    templates/    gabarits de page (ServicePage, DepartementPage, ArticlePage)
    forms/        formulaire de devis (3 étapes) et formulaire de contact
    ui/           primitives (boutons, icônes, liens trackés)
  data/           contenu structuré (nav, services, FAQ, départements, articles)
  lib/            site-config, metadata builder, schémas JSON-LD, analytics
public/
  images/         logo et photothèque
```
