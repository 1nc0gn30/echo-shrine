# Echo Shrine

Echo Shrine is a cinematic dark-theme multi-page site built with React + Vite, Tailwind CSS, and Magic UI components.

## Local development

1. Install dependencies:
   `npm install`
2. Start dev server:
   `npm run dev`
3. Build for production:
   `npm run build`

## Stack

- Vite multi-page app (MPA)
- React + TypeScript
- Tailwind CSS + shadcn config
- Magic UI components (`magic-card`, `shimmer-button`)
- Netlify-ready config

## Magic UI workflow

This repo is set up to follow the official installation flow used by Magic UI (shadcn-compatible):

- `components.json` is configured.
- Path alias `@/*` points to `src/*`.
- Add new components with:
  `npx shadcn@latest add @magicui/<component-name>`
