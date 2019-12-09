module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
      },
    },
    {
      resolve: `gatsby-theme-notes`,
      options: {
        basePath: `/notes`,
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
    `gatsby-plugin-remove-trailing-slashes`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `home`,
    author: `Marcus Lyons`,
    description: `The musings, rants, and learning of a developer trying to make sense of the insanity in tech.`,
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
