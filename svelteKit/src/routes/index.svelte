<svelte:head>
  <title>Home | marcuslyons.com</title>
</svelte:head>

<script>
  import heroImage from '../content/assets/hero-image.png'
</script>

<main>
  <div><img src={heroImage} alt="" class="hero-image"></div>
    <h1>👋🏼 Hi, I'm Marcus!</h1>
    <p>I love web development, design, devops, and reducing manual
    workflows through automation; basically all the things!</p>
    <p>Killing unnecessary policy, process, and beauracracy are my jam
    though.</p>
</main>

<style>
  .hero-image {
    width: 25vw;
  }
</style>