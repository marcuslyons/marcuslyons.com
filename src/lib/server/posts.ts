// src/lib/server/posts.ts

type GlobEntry = {
	metadata: Post;
	default: unknown;
};

export interface Post {
	title: string;
	excerpt: string;
	slug: string;
	date: string;
}

// Get all posts and add metadata
export const posts = Object.entries(
	import.meta.glob<GlobEntry>('/src/lib/posts/**/*.md', { eager: true })
)
	.map(([, globEntry]) => {
		return {
			...globEntry.metadata
		};
	})
	// sort by date
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	// add references to the next/previous post
	.map((post, index, allPosts) => ({
		...post,
		next: allPosts[index - 1] || 0,
		previous: allPosts[index + 1] || 0
	}));
