# Max it Gaming — POC Product Vision

POC mobile-first construit avec **React + Vite + Tailwind CSS**.

Parcours principal de la démo :

**Jouer → Gagner → Utiliser**

## Stack et contraintes

- Frontend uniquement (pas de backend)
- Données entièrement mockées
- Déploiement Render Static Site
- Build Render : `npm install && npm run build`
- Dossier de publication : `dist`

## Écrans inclus

- Accueil
- Jouer
- Boutique
- E-Sport
- Points
- Classement
- Profil

## Images en ligne

Les visuels peuvent être alimentés directement par des **URLs externes HTTPS** (Google Play, YouTube, Twitch, sites officiels).

Le composant image gère les fallbacks si une URL ne charge pas.

## Où modifier les images

- Play : `src/data/play.js`
- Shop : `src/data/shop.js`
- E-Sport : `src/data/esport.js`
- Home : `src/data/mockData.js`

## Comment mettre à jour les images en ligne

1. Ouvrir la page Google Play / YouTube / Twitch / site officiel du jeu.
2. Clic droit sur l’image souhaitée.
3. Copier l’adresse de l’image.
4. Coller l’URL dans le champ `image`, `logo`, `thumbnail` ou `cover` du fichier data correspondant.
5. Vérifier que l’image commence par `https://`.
6. Relancer `npm run dev` ou `npm run build`.

## Formats recommandés

- Apps / jeux : carré ou 16:9 accepté
- Logos : carré transparent recommandé
- Vidéos : 16:9
- Tournois : 16:9 ou logo carré

## Règle d’affichage

Le composant image supporte plusieurs ratios grâce à :

- `fit="cover"` pour les cards visuelles
- `fit="contain"` pour logos/icônes
- fallback visuel en cas d’erreur de chargement

## Développement local

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

## Déploiement Render

- Type : **Static Site**
- Build command : `npm install && npm run build`
- Publish directory : `dist`
