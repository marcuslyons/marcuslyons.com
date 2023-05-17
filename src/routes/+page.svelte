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

<section>
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

	.title {
		padding: 0;
		margin: 0;
	}
</style>
