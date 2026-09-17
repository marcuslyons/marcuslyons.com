const pages = {
  home: {
    seo: {
      title: "Home",
      description: "Home",
    },
  },
  about: {
    seo: {
      title: "About",
      description: "About",
    },
  },
  writing: {
    seo: {
      title: "Writing",
      description: "Writing",
    },
  },
  resume: {
    seo: {
      title: "Resume — Marcus Lyons",
      description:
        "Full-stack engineer: infrastructure, CI/CD, AI agent tooling, and developer experience.",
    },
  },
}

const config = {
  ...pages,
  name: `Marcus Lyons`,
  site: `https://marcuslyons.com`,
  description: `The digital garden of Marcus Lyons: software engineer and maker.`,
}

export default config
