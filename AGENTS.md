# marcuslyons.com: agent guide

Personal site and digital garden. SvelteKit 2, Svelte 5 runes, mdsvex for
Markdown posts, deployed on Netlify.

## This site is public

Everything here ships to a public URL under Marcus's own name. Treat it as
publishing, not as code.

1. **Never set `published: true` on a post you wrote or edited.** Draft it,
   then say it is ready for review.
2. **Never edit the prose of an existing post without being asked.** The posts
   are dated and personal. Fixing a typo is fine; rewriting a paragraph is not.
3. **Never commit personal detail that is not already public.** The resume page
   is the obvious risk: no home address, no phone number, no employer detail
   that is not already on LinkedIn.
4. **Never push to `main`.** Netlify builds `main` and publishes it.

## pnpm, not npm

`engine-strict=true` in `.npmrc` and Node 22 pinned in `.node-version`. Use
`pnpm` for everything. An `npm install` here writes a second lockfile and
breaks the Netlify build.

```bash
pnpm run dev       # dev server
pnpm run build     # production build, Netlify adapter
pnpm run preview   # serve the production build
```

## Verify before you finish

```bash
pnpm run check     # svelte-kit sync && svelte-check
pnpm run lint      # prettier --check . && eslint .
pnpm run build
```

All three must pass. `pnpm run format` fixes most lint failures.

`pnpm run test` runs Playwright, but no tests exist yet. A passing test run
proves nothing here. Do not cite it as verification.

## Code style

Prettier owns this, so run `pnpm run format` rather than matching by hand: no
semicolons, double quotes, two-space indent, ES5 trailing commas, LF endings,
and `proseWrap: always`.

Use Svelte 5 runes (`$props()`, `$state()`, `$derived()`) and `$app/state`. The
Svelte 4 migration is finished. Do not reintroduce `export let` or a store.

## Layout

| Path | Holds |
|---|---|
| `src/lib/posts/<slug>/index.md` | One directory per post. Images sit beside the Markdown. |
| `src/lib/server/posts.ts` | Loads posts with `import.meta.glob()`, sorts by date, links next and previous. |
| `src/lib/site-config.ts` | Per-page SEO strings. |
| `src/lib/components/SEO.svelte` | Meta tags. |
| `mdsvex.config.js` | The remark and rehype pipeline. |
| `svelte.config.js` | mdsvex preprocessor plus the Netlify adapter. |
| `src/routes/styles.css` | Plain CSS with custom properties. No framework. |
| `_redirects` | Netlify legacy redirects. |

Routes: `/`, `/about`, `/uses`, `/resume`, `/post/[slug]`, `/rss`.

## Adding a post

Create `src/lib/posts/<slug>/index.md` with this frontmatter, slug matching the
directory name:

```yaml
---
title: Example Post
slug: example-post
excerpt: A short description
date: 2026-01-01
published: false
keywords: [example, post]
---
```

Posts are loaded eagerly at build time, so a new post needs a dev-server
restart to appear. Reference images relatively (`![alt](./image.png)`);
`mdsvex-relative-images` resolves them.

## Redirects

`_redirects` carries the URL history: `/blog/*` → `/writing/*` → `/post/*`.
Never break an old path. If you rename a slug, add a redirect in the same
commit.

## Current state

The checkout sits on `feat/resume-route`, two commits ahead of `origin/main`
and not merged. `/resume` is the public resume page, built from the same
material as `~/Desktop/Marcus_Lyons_Resume_2026.*`. Marcus is job hunting, so
treat that page as live collateral: lead with saving time and money, empowering
other engineers, and lasting practice. Emphasize automation, CI/CD, developer
experience, infrastructure as code, and AI workflows. Do not lead with frontend
or networking.

`pnpm-workspace.yaml` is untracked and `pnpm-lock.yaml` is modified. Ask before
committing either; they are build-environment state, not a feature.

## CLAUDE.md

`CLAUDE.md` is a stub that points here. Hermes reads `AGENTS.md` first and
would otherwise shadow it. Keep the content in this file only.
