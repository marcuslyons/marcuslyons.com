import relativeImages from 'mdsvex-relative-images';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkGemoji from 'remark-gemoji';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';

const config = {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [relativeImages, remarkUnwrapImages, remarkGemoji],
	rehypePlugins: [rehypeSlug, [rehypeExternalLinks, { target: '_blank' }], rehypeAutolinkHeadings]
};

export default config;
