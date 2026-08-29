# AGENTS.md

Personal portfolio site. Astro 4 + Tailwind, deployed to Vercel as serverless.

## Commands

- `npm run dev` — dev server at `localhost:4321`
- `npm run build` — runs `astro check` (TS diagnostics) then `astro build`. **Use this as the verification/lint+typecheck step**; there is no separate lint, test, or format script.
- `npm run preview` — serve the built `dist/`
- `npm run astro -- <args>` — passthrough to the Astro CLI

No tests, formatter, or CI workflows exist in this repo.

## Architecture

- `output: 'server'` with `@astrojs/vercel/serverless` (see `astro.config.mjs`). Vercel web analytics enabled.
- `tsconfig.json` only `extends: astro/tsconfigs/strict` — treat strict TS as enforced.
- Tailwind is wired via `@astrojs/tailwind` integration (not a standalone PostCSS pipeline). Config lives in `tailwind.config.mjs` and sets `darkMode: 'class'`.
- Routing is file-based under `src/pages/`. Each non-`index` page (e.g. `adoptree.astro`, `emacommerce.astro`, `emaxpeluqueria.astro`, `youdrive.astro`) is a per-project detail page.
- Per-project content is not markdown/CMS — it lives in typed TS modules under `src/utils/content*.ts`, shaped by `src/utils/interfaces.ts`. Edit those modules (and `interfaces.ts`) when adding/changing a project, not a content collection.
- Components are plain `.astro` (`src/components/`); the landing page (`src/pages/index.astro`) composes `Section`, `Proyects`, `Skills`, `Experience`, `Contact` inside `src/layouts/Layout.astro`.

## Conventions

- ESM (`"type": "module"`); config files use `.mjs`.
- Tabs for indentation in `.astro`/TS (matches existing files).
- Project names use camelCase (`emacommerce`, not `Emacommerce`) in filenames and `content*.ts` modules.

## Gotchas

- `astro check` generates `.astro/` types (gitignored); don't commit generated type files.
- `astro build` runs `astro check` first — TS errors fail the build, so a "build" failure is often a type error, not a bundling issue.