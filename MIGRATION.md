# Migration Plan: Svelte 3 / SvelteKit 1 → Svelte 5 / SvelteKit 2

## Context

The project is on Svelte 3.54 / SvelteKit 1.5 / Vite 4 — multiple major versions
behind current. The Svelte ecosystem provides official automated migration tools
(`npx sv migrate`) that handle upgrades in steps: Svelte 3→4, SvelteKit 1→2,
Svelte 4→5. This plan follows that recommended incremental path, verifying the
build at each step.

**mdsvex verdict**: Keep it. [mdsvex 0.12.6](https://github.com/pngwn/MDsveX)
has Svelte 5 support (added in 0.12.5). No better alternative exists for Svelte
markdown blogs. The remark/rehype plugin versions must stay pinned to their
current majors (unified v9 ecosystem) — do NOT upgrade them.

**References**:

- [Svelte 5 migration guide](https://svelte.dev/docs/svelte/v5-migration-guide)
- [SvelteKit 2 migration guide](https://svelte.dev/docs/kit/migrating-to-sveltekit-2)
- [`sv migrate` CLI docs](https://svelte.dev/docs/cli/sv-migrate)
- [mdsvex Svelte 5 issue](https://github.com/pngwn/MDsveX/issues/555)

---

## Phase 1: Prep

- Create branch `feat/svelte5-migration`
- Commit or stash the 4 currently modified files
- Verify `pnpm run build` passes on the current codebase

---

## Phase 2: Svelte 3 → Svelte 4

```bash
npx sv migrate svelte-4
pnpm install
pnpm run build  # verify
```

Svelte 4 is mainly a tooling/internals change — no syntax changes needed. The
migration tool handles `package.json` version bumps.

---

## Phase 3: SvelteKit 1 → SvelteKit 2

```bash
npx sv migrate sveltekit-2
pnpm install
```

**Manual fixes to verify/apply after the automated migration:**

1. **`svelte.config.js`** — `vitePreprocess` import must change:

   ```js
   // FROM:
   import { vitePreprocess } from "@sveltejs/kit/vite"
   // TO:
   import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
   ```

2. **`package.json` scripts** — remove `--plugin-search-dir .` from lint/format
   (Prettier 3 removed this flag):

   ```json
   "lint": "prettier --check . && eslint .",
   "format": "prettier --write ."
   ```

3. **`@sveltejs/adapter-netlify`** — verify bumped to v4+ (SK2-compatible)

4. **`src/routes/post/[slug]/+page.server.ts`** — `throw error(404, ...)` no
   longer needs `throw` (still works if left, but the tool may remove it)

```bash
pnpm run check && pnpm run build  # verify
```

---

## Phase 4: Svelte 4 → Svelte 5 (biggest phase)

```bash
npx sv migrate svelte-5
pnpm install
```

Then manually update mdsvex (the migration tool won't touch it):

```bash
# In package.json, change mdsvex from ^0.11.0 to ^0.12.6
pnpm install
```

**Component changes the tool should handle (verify each):**

| File                                  | Change                                                                                                                                                                                                    |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/routes/+layout.svelte`           | Add `let { children } = $props()`, replace `<slot />` with `{@render children()}`                                                                                                                         |
| `src/routes/+page.svelte`             | `export let data` → `let { data } = $props()`. The `config` export is really a local constant — convert to `const config = {...}`                                                                         |
| `src/routes/post/[slug]/+page.svelte` | `export let data` → `let { data } = $props()`, `<svelte:component this={data.component} />` → `<data.component />`                                                                                        |
| `src/routes/about/+page.svelte`       | **Likely needs manual fix.** The unusual `export let { about: { seo } } = config` pattern should become `const { about: { seo } } = config` (it's not actually a prop — nothing passes data to this page) |
| `src/lib/components/SEO.svelte`       | `export let title/description` → `let { title, description } = $props()`                                                                                                                                  |

**Note on `<svelte:component>`**: If `<data.component />` doesn't render mdsvex
content correctly, fall back to keeping
`<svelte:component this={data.component} />` (deprecated but still functional).

```bash
pnpm run build && pnpm run dev  # verify build + test post rendering manually
```

---

## Phase 5: Automated cleanups

```bash
npx sv migrate self-closing-tags   # e.g., <div /> → <div></div> in Header
npx sv migrate app-state           # $app/stores → $app/state in Header.svelte
pnpm run build  # verify
```

The `app-state` migration changes `Header.svelte`:

- `import { page } from '$app/stores'` → `import { page } from '$app/state'`
- `$page.url.pathname` → `page.url.pathname` (drop the `$` prefix)

---

## Phase 6: Tooling upgrade (ESLint + Prettier)

**Replace deprecated `eslint-plugin-svelte3`:**

```bash
pnpm remove eslint-plugin-svelte3 eslint-plugin-prettier
pnpm add -D eslint-plugin-svelte svelte-eslint-parser
```

**Update `.eslintrc.cjs`** — key changes:

- `plugins: ['svelte3']` → `extends: ['plugin:svelte/recommended']`
- `processor: 'svelte3/svelte3'` → `parser: 'svelte-eslint-parser'` with
  `parserOptions: { parser: '@typescript-eslint/parser' }`
- Remove the `settings: { 'svelte3/typescript': ... }` block

**Update Prettier:**

```bash
pnpm add -D prettier@^3 prettier-plugin-svelte@^3
```

Update `.prettierrc` to add explicit plugin registration (required by Prettier
3):

```json
"plugins": ["prettier-plugin-svelte"],
"overrides": [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
```

```bash
pnpm run format && pnpm run lint  # verify + fix any new issues
```

---

## Phase 7: Cleanup + final verification

- Remove unused deps: `@sveltejs/adapter-auto`, `@types/cookie`,
  `rehype-sanitize` (in package.json but not used in mdsvex config)
- Remove unused `github.svg` import in `Footer.svelte`
- Update `CLAUDE.md` to reflect new stack

**Full verification:**

```bash
pnpm run check      # TypeScript
pnpm run lint       # ESLint + Prettier
pnpm run build      # Production build
pnpm run preview    # Manual test all pages
```

**Manual test checklist:**

- [ ] Homepage lists posts
- [ ] Blog post renders markdown + images correctly
- [ ] Navigation highlighting works (Header)
- [ ] About and Uses pages load
- [ ] RSS feed at `/rss` returns valid XML
- [ ] Legacy redirects work (`/blog/*` → `/post/*`)

---

## Critical files (ordered by risk)

1. `src/routes/post/[slug]/+page.svelte` — `<svelte:component>` removal + mdsvex
   rendering
2. `src/routes/about/+page.svelte` — unusual destructured `export let` pattern
3. `svelte.config.js` — `vitePreprocess` import path change
4. `src/routes/+layout.svelte` — `<slot />` → `{@render children()}`
5. `mdsvex.config.js` — no changes needed, but plugin compatibility is critical
6. `.eslintrc.cjs` — full rewrite for new plugin

---

## Key constraint: remark/rehype plugin versions

mdsvex 0.12.6 uses unified v9. The current plugin versions are compatible. Do
**not** upgrade these to latest majors (which require unified v11):

- `rehype-slug@^5`, `rehype-autolink-headings@^6`, `rehype-external-links@^2`
- `remark-gemoji@^7`, `remark-unwrap-images@^3`, `remark-preview@^1`
