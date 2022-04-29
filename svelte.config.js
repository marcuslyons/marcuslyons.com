import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import urls from 'rehype-urls';

const processUrl = function (url, node) {
	if (node.tagName === 'a') {
		node.properties.class = 'text-link';

		if (!url.href.startsWith('/')) {
			// Open external links in new tab
			node.properties.target = '_blank';
			// Fix a security concern with offsite links
			// See: https://web.dev/external-anchors-use-rel-noopener/
			node.properties.rel = 'noopener';
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			rehypePlugins: [[urls, processUrl]]
		}),
		preprocess()
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
