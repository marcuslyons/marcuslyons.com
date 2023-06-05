<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<div />
		<ul>
			{#if $page.url.pathname !== '/'}
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			{/if}
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/uses') ? 'page' : undefined}>
				<a href="/uses">uses</a>
			</li>
		</ul>
	</nav>
	<div />
</header>

<style>
	header {
		display: flex;
		justify-content: center;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page'] {
		text-decoration: underline;
		text-decoration-style: wavy;
		text-underline-offset: .275rem;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 1.2rem;
		text-transform: lowercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
		text-decoration: underline;
		text-decoration-style: wavy;
		text-underline-offset: .275rem;
	}
</style>
