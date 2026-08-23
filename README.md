# NoMoreStage4

501(c)(3) mobile MRI early-cancer detection marketing site (New Canaan CT; ~$499). Vite + React + TypeScript static app for GitHub Pages / nomorestage4.com.

## Local

Run:

npm install
npm run dev
npm run build
npm run preview

## Pages deploy

On push to main, GitHub Actions builds and deploys dist/ via .github/workflows/deploy-pages.yml. public/CNAME is nomorestage4.com; public/.nojekyll is included.

## DNS

Apex A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153. www CNAME to WillPeak.github.io. Set the custom domain in repo Pages settings; enable HTTPS.

## Forms

Client-only (toast + console). No Express.

## Brand

Black + #cc2e83

## Scripts (package.json)

- dev — Vite dev server
- build — tsc + vite build to dist/
- preview — preview production build
- check — TypeScript only

## Stack

Vite 5, React 18, TypeScript, Tailwind, Radix/shadcn primitives, wouter, react-hook-form, zod, TanStack Query.
