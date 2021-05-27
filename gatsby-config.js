module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    "/writing/" +
                    edge.node.frontmatter.slug,
                  guid:
                    site.siteMetadata.siteUrl +
                    "/writing/" +
                    edge.node.frontmatter.slug,
                })
              })
            },
            query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    frontmatter {
                      slug
                      title
                      excerpt
                      date
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "home",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/writing/",
          },
        ],
      },
    },
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
    siteUrl: `https://marcuslyons.com`,
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
