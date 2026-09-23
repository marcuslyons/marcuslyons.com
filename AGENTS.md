# marcuslyons.com: agent guide

SvelteKit 2, Svelte 5 runes, mdsvex posts, Netlify. Personal site and blog.

## This site is public

Everything ships to a public URL under Marcus's name. Treat it as publishing.

1. **Never set `published: true`** on a post you wrote or edited. Say it is
   ready for review instead.
2. **Never rewrite an existing post's prose** unasked. Typos are fine.
3. **Never commit private detail.** `/resume` is the risk: nothing that is not
   already on LinkedIn.
4. **Never push to `main`.** Netlify publishes it.

## pnpm, not npm

`engine-strict=true`, Node 22. An `npm install` writes a second lockfile and
breaks the Netlify build.

Before finishing: `pnpm run check`, `pnpm run lint`, `pnpm run build`. All three
must pass; `pnpm run format` fixes most lint failures. Ignore `pnpm run test`:
Playwright is in `package.json` but has no config and no tests.

## Code style

Prettier owns formatting, so run `pnpm run format` instead of matching by hand.
Svelte 5 runes only (`$props()`, `$state()`, `$derived()`, `$app/state`). The
Svelte 4 migration is done: no `export let`, no stores.

## Posts

One directory per post: `src/lib/posts/<slug>/index.md`, `slug` matching the
directory. Copy the frontmatter from an existing post. Images sit beside the
Markdown and are referenced relatively. `src/lib/server/posts.ts` globs them
eagerly, so a new post needs a dev-server restart.

## Redirects

`_redirects` carries the URL history: `/blog/*` → `/writing/*` → `/post/*`.
Never break an old path. Rename a slug, add a redirect in the same commit.

## /resume

Live job-hunt collateral. Lead with saved time and money, empowering other
engineers, lasting practice. Emphasize automation, CI/CD, DX, IaC, AI workflows.
Not frontend, not networking.

## CLAUDE.md

A stub pointing here. Keep content in this file only.
