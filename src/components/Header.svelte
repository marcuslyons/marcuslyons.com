<script>
  import {page} from '$app/stores'
  import {isActiveUrl} from '$lib/utils'
  const links = [
    {name: 'home()', path: '/'},
    {name: 'writing()', path: '/writing'},
    {name: 'recipes()', path: '/recipes'},
  ]
</script>
<nav>
  {#each links as {name, path}}
    <a class={isActiveUrl(path, $page.url.pathname) ? 'isActive' : ''} href={path}>{name}</a>
  {/each}
</nav>

<style>
  a {
    color: #696969;
    padding: 1rem;
  }

  nav {
    display: flex;
    justify-content:flex-end;
    margin: 0.5rem 0.5rem;
  }

  .isActive {
    color: red;
    border-bottom: 3px solid green;
  }
</style>