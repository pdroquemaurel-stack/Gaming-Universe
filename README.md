# Max it Gaming — Simple POC (React + Vite + Tailwind)

This project is a **mobile-first proof of concept** for **Max it Gaming**, Orange's gaming universe inside the Max it super app.

## What this POC demonstrates

A simple user journey with 3 pillars:

- **Play**: discover free games and play instantly
- **Pay (Gameshop)**: buy gaming content
- **Compete (Esport)**: join tournaments and view leaderboard

It includes 4 screens:
- Home
- Play
- Gameshop
- Esport

> This is intentionally simple: no backend, no authentication, no wallet logic, and no advanced gamification.

## Tech stack

- React
- Vite
- Tailwind CSS
- Mocked data only

## Project structure

```bash
src/
  assets/
    images/
      play/
      shop/
      esport/
      discover/
      favorites/
      purchase/
    imagePlaceholders.js
  components/
    Carousel.jsx
    FeatureCard.jsx
    FloatingBackButton.jsx
    GameCard.jsx
    ProductCard.jsx
    SectionHeader.jsx
  pages/
    Home.jsx
    Play.jsx
    Gameshop.jsx
    Esport.jsx
  data/
    mockData.js
  App.jsx
  main.jsx
  index.css
```

## How to install

```bash
npm install
```

## How to run locally

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## How to add images

1. Upload your files in the right folder:
   - `src/assets/images/play`
   - `src/assets/images/shop`
   - `src/assets/images/esport`
   - `src/assets/images/discover`
   - `src/assets/images/favorites`
   - `src/assets/images/purchase`
2. Use consistent file names, for example:
   - `play-game-puzzle.png`
   - `shop-coins-pack.png`
   - `discover-trending-game.png`
3. Open `src/assets/imagePlaceholders.js` and replace the empty strings with imports.
4. The UI cards already read image fields from `src/data/mockData.js`, so once paths/imports are set, cards will render local images automatically.

## Notes for beginners

- The app uses **state-based navigation** in `App.jsx` instead of React Router to keep things easy.
- All content comes from `src/data/mockData.js`.
- Cards have built-in fallback placeholders (emoji/blocks) when an image is missing.
- You can safely edit labels, card texts, categories, and CTA buttons directly in the data/page files.

## Deploy on Render

- **Service type:** Static Site
- **Build command:** `npm install && npm run build`
- **Publish directory:** `dist`
