<script>
  export let posts;
</script>

<h1>Writing</h1>

<h4>all content goes here</h4>
<ul>
  {#each posts as post}
    <li>
      <a href={`/writing/${post.slug}`}>
        <article>
          <h3>{post.title}</h3>
          <h4>{post.excerpt}</h4>
        </article>
      </a>
    </li>
  {/each}
</ul>
