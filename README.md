# echo-shrine

A premium dark-mode concept site with cinematic motion, glowing glass cards, and a complete multi-page design system.

## Overview
A premium dark-mode concept site with cinematic motion, glowing glass cards, and a complete multi-page design system.

## Tech Stack
- React
- Vite
- Netlify (deployed)

## Project Structure
```
echo-shrine/
  - public
  - src
  (152 files total)
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
git clone https://github.com/1nc0gn30/echo-shrine.git
cd echo-shrine
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Available Scripts
  npm run dev - vite --port=3000 --host=0.0.0.0
  npm run build - vite build
  npm run preview - vite preview

## Original README
<details>
<summary>Click to expand original README</summary>

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

</details>

## TODO / Roadmap
- [ ] Add unit tests
- [ ] Add LICENSE file
- [ ] Add Dockerfile for containerized deployment
- [ ] Consider adding Tailwind CSS
- [ ] Add CI/CD pipeline
- [ ] Add contribution guidelines (CONTRIBUTING.md)
- [ ] Improve error handling and edge cases
- [ ] Add environment variable documentation
- [ ] Update dependencies to latest versions
- [ ] Add code comments and inline documentation

## Deployment
This project is deployed on Netlify. See netlify.toml for configuration.

## Author
**Neal Frazier** - [@AshAmplifies](https://github.com/1nc0gn30)

## Links
- GitHub: https://github.com/1nc0gn30/echo-shrine

---
*This README was enhanced as part of the neals-projects-2026 batch update.*
