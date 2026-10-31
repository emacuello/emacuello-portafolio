# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio of Emanuel Cuello. Astro 7 + Tailwind 4, static build deployed to Vercel. pnpm (via corepack), Node >= 22.12. All site content is in Spanish.

## Commands

- `pnpm dev` — dev server at `localhost:4321`
- `pnpm build` — runs `astro check` (type-check) then `astro build`; a type error fails the build
- `pnpm preview` — preview the build

There are no tests or linter; `pnpm build` (type-check + build) is the only check.

## Architecture

- Static output with the `@astrojs/vercel` adapter and Vercel Web Analytics enabled (`astro.config.mjs`).
- `src/layouts/Layout.astro` wraps every page (Header, Footer, `ClientRouter`, global CSS, forced dark mode via `class="dark"` on `<html>`).
- `src/pages/index.astro` is the home: Section (about + "Descargar CV" link), Proyects, Skills, Experience, Contact. Header nav links point to these sections by anchor (`/#about`, `/#proyects`, `/#skills`, `/#experience`).
- Home sections (Section, Skills, Experience, Header) have their content hardcoded in the component markup.
- Project detail pages (`src/pages/<project>.astro`) are data-driven: each composes shared components (`Carrousel`, `AboutProyect`, `BackyFront`, `MiAporte`, `Microservice`, `ProyectSkills`, …) fed from a `src/utils/content<Project>.ts` file.
  - Each content file exports an image array for the carousel, the main project object, and a `contentPreview<Project>` (`IpreviewProyect`) used by the home card.
  - Types live in `src/utils/interfaces.ts`: `Proyect`, `Microservice` (extends `Proyect` with architecture image, API gateway, and fixed `microsercie1..4` slots that `Microservice.astro` renders one by one), `Devops`, `IpreviewProyect`.
- Adding a project = new `content<Project>.ts` + new page in `src/pages/` + a `<ContentProyectsPreview contentPreview=… moreInfo="/<route>">` entry in `src/components/Proyects.astro`.
- Images are hosted on Cloudinary (URLs in the content files), not in `public/`.
- Tailwind 4 has no JS config: custom animations `text-gradient` (section headings) and `background-shine` plus the `dark` variant are in `src/styles/global.css`.
- `pnpm-workspace.yaml` has a `packageExtensions` fix for `@emnapi/runtime`; without it `astro check` crashes.

Existing identifier spellings (`Proyect`, `microsercie`, `enviroment`, `tittle`) are used across types and components; keep them consistent rather than renaming piecemeal.
