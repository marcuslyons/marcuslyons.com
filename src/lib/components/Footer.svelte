<script>
  const date = new Date()
  const year = date.getFullYear()
</script>

<footer>
  <span>
    ©️ {year}
  </span>
  <ul>
    <li>
      <a
        href="https://github.com/marcuslyons"
        target="_blank"
        rel="nofollow"
        aria-label="GitHub"
      >
        <i class="ri-github-fill ri-xl"></i>
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/marcuslyons_"
        target="_blank"
        rel="nofollow"
        aria-label="Twitter"
      >
        <i class="ri-twitter-fill ri-xl"></i>
      </a>
    </li>
    <li>
      <a
        href="https://linkedin.com/in/marcuslyons"
        target="_blank"
        rel="nofollow"
        aria-label="LinkedIn"
      >
        <i class="ri-linkedin-fill ri-xl"></i>
      </a>
    </li>
    <li>
      <a
        href="https://twitch.tv/marcuslyons_"
        target="_blank"
        rel="nofollow"
        aria-label="Twitch"
      >
        <i class="ri-twitch-fill ri-xl"></i>
      </a>
    </li>
  </ul>
</footer>

<style>
  a i {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  i {
    color: rgba(0, 0, 0, 0.7);
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
