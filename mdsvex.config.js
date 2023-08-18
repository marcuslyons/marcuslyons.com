import relativeImages from 'mdsvex-relative-images';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkGemoji from 'remark-gemoji';
import preview, { htmlFormatter, textFormatter } from 'remark-preview'
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';

const config = {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [relativeImages, remarkUnwrapImages, remarkGemoji,
		// Add a text preview snippet (no formatting) so we can use it in the meta description tag
		preview(textFormatter({ length: 250, maxBlocks: 2 }), {attribute: 'previewText'}),

		// Add an HTML preview snippet (formatted) so we can use it when displaying all posts
		preview(
			htmlFormatter({
				length: 250,
				maxBlocks: 2,
			}),
			{
				attribute: 'previewHtml',
			}
		),
	],
	rehypePlugins: [rehypeSlug, [rehypeExternalLinks, { target: '_blank' }], rehypeAutolinkHeadings]
};

export default config;
