<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import type { PageServerData } from './$types';

	interface Config {
		title: string;
		description: string;
	}
	export let data: PageServerData;

	export let config: Config = {
		title: 'Marcus Lyons | Digital Garden 🪴',
		description: 'The digital garden of Marcus Lyons: software engineer and maker.'
	};
</script>

<SEO {...config} />

<section class="text-column">
	<ul class="links">
		{#each data.posts as post}
			<li>
				<a href={`post/${post.slug}`}>
					<article>
						<h2 class="title">{post.title}</h2>
					</article>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	ul {
		list-style-type: none;
	}

	article {
		margin: 1rem;
		padding: 0.5rem;
	}

	a {
		&:hover {
			text-decoration: underline;
			text-decoration-style: wavy;
			text-underline-offset: .275rem;
		}
	}

	.title {
		padding: 0;
		margin: 0;
	}
</style>
