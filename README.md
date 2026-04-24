# Max it Gaming (Orange MEA)

A beginner-friendly **mobile-first** React + Vite + Tailwind CSS prototype for a gaming super app vision:

**Play → Pay → Compete**

- **Play**: acquisition & engagement
- **Shop (Pay)**: monetization
- **Esport (Compete)**: retention & community

## 1) Install

```bash
npm install
```

## 2) Run locally

```bash
npm run dev
```

Then open the local URL shown in terminal (usually `http://localhost:5173`).

## 3) Build production files

```bash
npm run build
```

Vite will generate the static output in:

```bash
dist/
```

## 4) Deploy on Render (Static Site)

1. Push this project to GitHub.
2. In Render dashboard, click **New +** → **Static Site**.
3. Connect your GitHub repository.
4. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Click **Create Static Site**.
6. After deploy finishes, open the generated Render URL.

## Tech stack

- React
- Vite
- Tailwind CSS
- React Router
- Mock data only (no backend)

## Project structure

```text
src/
  components/
  data/
  pages/
```

This project is intentionally simple and heavily readable for beginners.
