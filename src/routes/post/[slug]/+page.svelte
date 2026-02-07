<!-- src/routes/blog/[slug]/page.svelte -->

<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}
	let { data }: Props = $props();
</script>

<div>
	<article>
		<header>
			<h1>{data.post.title}</h1>
		</header>
		<!-- render the post -->
		<div>
			<svelte:component this={data.component} />
		</div>
	</article>
</div>