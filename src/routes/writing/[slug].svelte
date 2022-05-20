<script context="module">
  export async function load({ fetch, params, url }) {
    const { pathname } = url
    const { slug } = params
    const res = await fetch(`${pathname}.json`)

    if (res.ok) {
      return {
        props: {
          ...(await res.json()),
          slug,
          page: (await import(`../../content/posts/${slug}/index.md`)).default,
        },
      }
    }

    return {
      status: 404,
    }
  }
</script>

<script>
  export let page, post
</script>

<svelte:component this={page} />
