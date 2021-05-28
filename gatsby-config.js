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
                // console.log(`${edge.node.body}`)
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    "/writing/" +
                    edge.node.frontmatter.slug,
                  guid:
                    site.siteMetadata.siteUrl +
                    "/writing/" +
                    edge.node.frontmatter.slug,
                  custom_elements: [
                    {
                      content: [{ _attr: { type: "html" } }, edge.node.html],
                    },
                  ],
                })
              })
            },
            query: `
            {
              allMdx(
                limit: 10,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    html
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
