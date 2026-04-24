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

## Project structure

```bash
src/
  assets/
    images/
      discover/
      play/
      shop/
      esport/
      favorites/
      purchase/
      rewards/
    imagePlaceholders.js
  components/
    Badge.jsx
    Carousel.jsx
    FeatureCard.jsx
    FloatingBackButton.jsx
    GameCard.jsx
    LeaderboardCard.jsx
    MissionCard.jsx
    PillarCard.jsx
    PlayerStatusCard.jsx
    ProductCard.jsx
    ProgressBar.jsx
    PurchaseConfirmationModal.jsx
    SectionHeader.jsx
    TournamentCard.jsx
  pages/
    Home.jsx
    Play.jsx
    Gameshop.jsx
    Esport.jsx
    Leaderboard.jsx
  data/
    mockData.js
  App.jsx
  main.jsx
  index.css
```

## Image naming convention

All image placeholders are centralized in `src/assets/imagePlaceholders.js`.

Current placeholder files are SVG assets with these names:

- `discover/discover-trending-game.svg`
- `discover/discover-weekly-tournament.svg`
- `discover/discover-shop-promo.svg`
- `discover/discover-daily-challenge.svg`
- `play/play-game-puzzle.svg`
- `play/play-game-action.svg`
- `play/play-game-sports.svg`
- `play/play-game-arcade.svg`
- `play/play-game-strategy.svg`
- `shop/shop-coins-pack.svg`
- `shop/shop-premium-pass.svg`
- `shop/shop-gift-card.svg`
- `shop/shop-deal-bundle.svg`
- `esport/esport-featured-tournament.svg`
- `esport/esport-live-cup.svg`
- `esport/esport-community-clash.svg`
- `favorites/favorite-neon-runner.svg`
- `purchase/purchase-diamond-pack.svg`
- `rewards/reward-coins.svg`
- `rewards/reward-badge.svg`
- `rewards/reward-daily-mission.svg`

## How to replace placeholders with PNG files

When you are ready to use real visuals:

1. Replace each `.svg` file with a `.png` file using the same base name (example: `play-game-puzzle.png`).
2. Update imports in `src/assets/imagePlaceholders.js` from `.svg` to `.png`.
3. Keep object keys the same (`discover`, `play`, `shop`, etc.) so `src/data/mockData.js` keeps working.

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
