# Max it Gaming — Orange Product Vision POC

This project is a mobile-first product vision demo for **Orange / Max it Gaming**.
It showcases a simple super-app journey:

**Play → Pay → Compete → Reward**

The implementation is intentionally beginner-friendly:
- React + Vite + Tailwind CSS
- No backend
- No authentication
- No database
- Mocked data only
- State-based page navigation

## Screens included

- Home
- Play (Free Gaming)
- Gameshop
- Esport Arena
- Leaderboard
- Points

## Project structure

```bash
src/
  components/
  pages/
  data/
  assets/
```

## Assets à uploader

| Asset | Chemin attendu | Usage | Format recommandé | Dimension recommandée | Statut |
|---|---|---|---|---|---|
| coin.png | /public/assets/coin.png | Icône Max it Points | PNG (transparent) | 128x128 | Requis |
| avatar.png | /public/assets/avatar.png | Avatar utilisateur | PNG / JPG | 256x256 | Requis |
| leaderboard.png | /public/assets/leaderboard.png | Icône leaderboard | PNG (transparent) | 128x128 | Requis |
| game-placeholder.png | /public/assets/placeholders/game-placeholder.png | Fallback jeux | PNG | 640x360 | Requis |
| app-placeholder.png | /public/assets/placeholders/app-placeholder.png | Fallback apps | PNG | 640x360 | Requis |
| video-placeholder.png | /public/assets/placeholders/video-placeholder.png | Fallback vidéos | PNG | 1280x720 | Requis |
| tournament-placeholder.png | /public/assets/placeholders/tournament-placeholder.png | Fallback tournois | PNG | 640x360 | Requis |
| images mini-jeux | /public/assets/games/ | Cards Instant Play | PNG / JPG | 640x360 | Requis |
| catch-the-coin.png | /public/assets/games/catch-the-coin.png | Card du mini-jeu Catch the Coin | PNG / JPG | 640x360 | Recommandé |
| images apps | /public/assets/apps/ | Apps Play Store | PNG / JPG | 640x360 | Requis |
| logos jeux shop | /public/assets/shop/games/ | Bulles jeux populaires | PNG (transparent) | 256x256 | Requis |
| images bonus shop | /public/assets/shop/items/ | Bonus / IAP | PNG / JPG | 640x360 | Requis |
| thumbnails VOD | /public/assets/esport/videos/ | Vidéos VOD | PNG / JPG | 1280x720 | Requis |
| thumbnails live | /public/assets/esport/live/ | Lives | PNG / JPG | 1280x720 | Requis |
| logos tournois | /public/assets/esport/tournaments/ | Tournois | PNG (transparent) | 256x256 | Requis |

Notes:
- Si une image manque, l’application doit afficher un fallback visuel propre.
- Les fichiers peuvent être remplacés plus tard sans changer le code si le nom et le chemin sont respectés.

## Données mockées centralisées

- `src/data/play.js`
- `src/data/shop.js`
- `src/data/esport.js`
- `src/data/points.js`

## Modifier les liens Google Play

- Aller dans `src/data/play.js` (`playStoreUrl` de chaque app)
- Aller dans `src/data/shop.js` (`storeUrl` de chaque jeu)

## Run locally

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build production bundle:

```bash
npm run build
```

## Deploy on Render

- **Service type:** Static Site
- **Build command:** `npm install && npm run build`
- **Publish directory:** `dist`
