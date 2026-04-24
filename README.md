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
  components/
    BottomNav.jsx
    FeatureCard.jsx
    MetricCard.jsx
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

## Notes for beginners

- The app uses **state-based navigation** in `App.jsx` instead of React Router to keep things easy.
- All content comes from `src/data/mockData.js`.
- You can edit text, cards, and metrics directly in the page files and data file.
