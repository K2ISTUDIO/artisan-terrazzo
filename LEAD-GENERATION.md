# Stratégie de génération de leads — artisan-terrazzo.fr

## 1. Parcours de conversion

```
Découverte (SEO / Ads / réseaux)
   ↓
Page d'atterrissage (pilier, service, local ou article)
   ↓
Réassurance (bandeau de confiance, savoir-faire, méthode en 4 étapes)
   ↓
Micro-conversion (clic CTA, appel, clic e-mail)
   ↓
Formulaire de demande d'étude (3 étapes) OU appel direct
   ↓
Page de confirmation (/merci-demande-devis)
   ↓
Suivi humain (spécialiste rappelle le prospect)
```

Le site est volontairement construit pour qu'à **tout moment**, un visiteur soit à un clic d'une action de conversion : CTA en fin de section, numéro de téléphone cliquable dans le header et le footer, barre fixe mobile (`MobileCtaBar`) avec « Appeler » et « Demander un devis ».

## 2. Formulaire de demande d'étude — `/demande-devis`

Implémenté dans `src/components/forms/DevisForm.tsx`, en 3 étapes avec barre de progression, pour réduire la charge perçue par rapport à un formulaire long à plat :

1. **Votre projet** — type de projet (12 options), neuf ou rénovation
2. **Le chantier** — ville, code postal, superficie, délai souhaité, budget (facultatif)
3. **Vos coordonnées** — prénom, nom, e-mail, téléphone, message (facultatif), photos/plans (facultatif), consentement RGPD

Validation en temps réel par étape (on ne bloque pas l'utilisateur en fin de parcours avec des erreurs accumulées). Un champ honeypot invisible (`website`) filtre une partie du spam automatisé sans CAPTCHA, pour ne pas dégrader l'expérience.

À la soumission : `POST /api/lead` (multipart, gère les pièces jointes) → redirection vers `/merci-demande-devis` → déclenchement des événements analytics (voir section 4).

### Formulaire de contact court — `/contact`

Version courte (`src/components/forms/ContactForm.tsx`) pour les demandes qui ne sont pas encore un projet chiffrable (question générale, prise de contact architecte). Même endpoint `/api/lead`, mêmes garanties RGPD.

## 3. ⚠️ Ce qu'il reste à brancher avant le lancement

`src/app/api/lead/route.ts` valide et journalise chaque soumission côté serveur, mais **ne l'envoie nulle part de façon permanente**. Avant la mise en production, choisir et implémenter au moins une destination :

- **E-mail transactionnel** (Resend, Postmark, SES) pour notifier l'équipe à chaque nouvelle demande — solution la plus rapide à mettre en place.
- **CRM** (HubSpot, Pipedrive) via API, si un suivi commercial structuré est souhaité dès le lancement.
- **Stockage des fichiers joints** (photos/plans) : ils arrivent dans la requête mais ne sont pour l'instant persistés nulle part — prévoir un service de stockage (Vercel Blob, S3) avant de compter dessus commercialement.

Tant que ce point n'est pas traité, les demandes soumises sur le site ne sont visibles que dans les logs serveur.

## 4. Événements analytics

Implémentés via `src/lib/analytics.ts` (`trackEvent`), qui pousse vers `window.dataLayer` — compatible Google Tag Manager. **Sans GTM configuré (`site-config.ts` → `analytics.gtmId` vide), ces appels sont inertes** : aucune donnée n'est envoyée nulle part, ce qui est le comportement RGPD par défaut correct.

| Événement | Déclenché quand | Fichier |
|---|---|---|
| `phone_click` | Clic sur un lien téléphonique (header, footer, barre mobile, page contact) | `TrackedLink.tsx` |
| `email_click` | Clic sur un lien e-mail | `TrackedLink.tsx` |
| `form_start` | Première interaction avec le formulaire de devis | `DevisForm.tsx` |
| `form_step` | Passage à l'étape suivante du formulaire | `DevisForm.tsx` |
| `form_submit` | Soumission réussie (devis ou contact) | `DevisForm.tsx`, `ContactForm.tsx` |
| `generate_lead` | Soumission réussie — événement standard GA4/Google Ads pour l'optimisation des campagnes | idem |
| `quote_request` | Soumission réussie du formulaire de devis spécifiquement (avec type de projet et ville) | `DevisForm.tsx` |
| `portfolio_view` | À déclencher sur `/realisations` au scroll ou au clic sur une image (non câblé par défaut, prêt à l'emploi) | à ajouter dans `realisations/page.tsx` si souhaité |

### Mise en route

1. Créer un conteneur GTM, renseigner son ID dans `siteConfig.analytics.gtmId` (`src/lib/site-config.ts`).
2. Le bandeau de consentement (`src/components/CookieConsent.tsx`) se déclenche alors automatiquement — le script GTM ne se charge qu'après acceptation explicite.
3. Dans GTM, créer les balises GA4 correspondant aux événements ci-dessus, plus la balise Google Ads Conversion sur `generate_lead` et la balise Meta Pixel `Lead` sur le même événement.

## 5. Micro-conversions

- Numéro de téléphone cliquable partout (`tel:`), avec tracking.
- Barre CTA fixe en bas d'écran sur mobile (« Appeler » / « Demander un devis »), jamais masquée par le contenu (padding réservé dans le layout).
- CTA après chaque section de réassurance ou de FAQ, jamais seulement en tout début ou toute fin de page.
- Bloc « Vous avez un projet similaire ? » avec CTA dédié sur `/realisations`.
- Formulaire court disponible sur `/contact` pour les visiteurs pas encore prêts à détailler un projet complet.

## 6. Recommandations Google Ads (quand la régie sera activée)

- **Pages d'atterrissage dédiées aux annonces** : ne jamais envoyer du trafic payant vers la home — utiliser les pages piliers (`/terrazzo-coule`, `/prix-terrazzo`, `/artisan-terrazzo-paris`) ou une variante allégée si le taux de conversion de ces pages organiques s'avère inférieur à une landing 100% Ads.
- **Structure de campagnes suggérée** :
  - Campagne « Terrazzo — génériques » (terrazzo, terrazzo coulé, prix terrazzo)
  - Campagne « Granito » (granito, rénovation granito)
  - Campagne « Local Paris/IDF » (artisan terrazzo Paris + variantes départementales)
  - Campagne « Pro/Architectes » (entreprise terrazzo, artisan terrazzo pour professionnels)
- **Suivi des conversions** : brancher `generate_lead` (ou un événement `quote_request` dédié) comme conversion principale dans Google Ads, avec une conversion secondaire sur `phone_click` pour capter l'appel direct.
- **Exclusions** à prévoir dès le départ : « emploi », « formation », « stage », « carrelage pas cher » (trafic hors cible qualifiée).
- Le prix indicatif affiché sur `/prix-terrazzo` sert aussi de qualificateur naturel : un visiteur Ads qui voit la fourchette avant de cliquer sur le formulaire est un lead plus qualifié.

## 7. RGPD — état d'implémentation

- Formulaires : consentement explicite obligatoire (case à cocher, non pré-cochée) avant tout envoi.
- Aucune collecte de données sensibles.
- Cookies non essentiels (mesure d'audience) : bloqués par défaut, ne se chargent qu'après consentement (`CookieConsent.tsx`), et seulement si un ID GTM est configuré.
- Pages `/mentions-legales` et `/politique-confidentialite` en place, avec placeholders clairement identifiés pour les informations légales réelles (SIRET, hébergeur, etc.) à compléter avant mise en ligne.
- Droit d'accès/rectification/effacement mentionné avec un contact e-mail réel.
