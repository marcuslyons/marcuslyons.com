export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/uses/index.svelte"),
	() => import("../../src/routes/writing/[slug].svelte"),
	() => import("../../src/routes/writing/index.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"uses": [[0, 3], [1]],
	"writing": [[0, 5], [1], 1],
	"writing/[slug]": [[0, 4], [1], 1]
};