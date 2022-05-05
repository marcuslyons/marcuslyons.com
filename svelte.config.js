import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"

import adapter from "@sveltejs/adapter-netlify"
import preprocess from "svelte-preprocess"
// import urls from 'rehype-urls';

// const processUrl = function (url, node) {
// 	if (node.tagName === 'a') {
// 		node.properties.class = 'text-link';

// 		if (!url.href.startsWith('/')) {
// 			// Open external links in new tab
// 			node.properties.target = '_blank';
// 			// Fix a security concern with offsite links
// 			// See: https://web.dev/external-anchors-use-rel-noopener/
// 			node.properties.rel = 'noopener';
// 		}
// 	}
// };

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [mdsvex(mdsvexConfig), preprocess()],

  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    }
  },
}

export default config
