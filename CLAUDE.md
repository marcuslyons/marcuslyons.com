# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

Personal digital garden / blog built with **SvelteKit 2** and **Svelte 5**,
deployed on **Netlify**. Uses **mdsvex 0.12** to render Markdown blog posts as
Svelte components. Uses Svelte 5 runes (`$props()`, `$state()`) and `$app/state`
for reactivity.

## Commands

```bash
pnpm run dev        # Start dev server
pnpm run build      # Production build (Netlify adapter)
pnpm run preview    # Preview production build locally
pnpm run check      # TypeScript checking via svelte-check
pnpm run lint       # Prettier + ESLint check
pnpm run format     # Auto-format with Prettier
pnpm run test       # Playwright tests (none written yet)
```

Package manager is **pnpm** (enforced via `.npmrc`).

## Architecture

### Routing

SvelteKit file-based routing in `src/routes/`:

- `/` — Homepage, lists all posts sorted by date
- `/about` — About page
- `/uses` — Tools/equipment page
- `/post/[slug]` — Individual blog post (dynamic route)
- `/rss` — RSS 2.0 XML feed (`+server.ts` endpoint)

Legacy redirects (`_redirects`): `/blog/*` → `/writing/*` → `/post/*`

### Blog Post System

Posts live in `src/lib/posts/<slug>/index.md` with YAML frontmatter:

```yaml
---
slug: example-post
title: Example Post
excerpt: A short description
date: 2024-01-01
published: true
keywords: [example, post]
---
```

Posts are eagerly loaded via `import.meta.glob()` in `src/lib/server/posts.ts`,
sorted by date (newest first), and enriched with next/previous references.

**mdsvex config** (`mdsvex.config.js`) adds remark/rehype plugins for: relative
images, unwrapped images, emoji support, text previews (250 chars), heading
slugs, heading autolinks, and external link handling (opens in new tab).

### Key Files

- `src/lib/server/posts.ts` — Post loading, sorting, and metadata extraction
- `src/lib/site-config.ts` — Global site configuration
- `src/lib/components/SEO.svelte` — Meta tags component
- `svelte.config.js` — SvelteKit config with mdsvex preprocessor and Netlify
  adapter
- `mdsvex.config.js` — Markdown processing pipeline configuration

### Styling

Plain CSS with CSS custom properties defined in `src/routes/styles.css`. No CSS
framework. Sass is available but primarily unused. Font: Fira Mono (monospace).
Icons: Remixicon sprite.

## Code Style

- No semicolons
- Double quotes
- 2-space indentation
- Trailing commas (ES5 style)
- LF line endings
