module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/writing`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: `true`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto`, `roboto slab`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1380,
        linkImagesToOriginal: false,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `home`,
    author: `Marcus Lyons`,
    description: `The musings, rants, and learning of a developer trying to make sense of chaos.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/marcuslyons_`,
      },
      {
        name: `github`,
        url: `https://github.com/marcuslyons`,
      },
      {
        name: `twitch`,
        url: `https://twitch.tv/marcuslyons_`,
      },
    ],
  },
}
