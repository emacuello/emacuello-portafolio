# AGENTS.md

Personal portfolio site. Astro 7 + Tailwind 4, built as a static site and deployed to Vercel. pnpm (via corepack), Node 24.

## Commands

- `pnpm dev` — dev server at `localhost:4321`
- `pnpm build` — runs `astro check` (TS diagnostics) then `astro build`. **Use this as the verification/lint+typecheck step**; there is no separate lint, test, or format script.
- `pnpm preview` — preview the build
- `pnpm astro <args>` — passthrough to the Astro CLI

No tests or formatter. CI (`.github/workflows/ci.yml`) runs `pnpm build` on PRs and pushes to main.

## Architecture

- Static output with the `@astrojs/vercel` adapter and Vercel Web Analytics enabled (see `astro.config.mjs`).
- `tsconfig.json` only `extends: astro/tsconfigs/strict` — treat strict TS as enforced.
- Tailwind 4 via `@tailwindcss/vite`. No `tailwind.config.*`: theme, custom animations (`text-gradient`, `background-shine`) and the class-based `dark` variant live in `src/styles/global.css`, imported by `Layout.astro`.
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