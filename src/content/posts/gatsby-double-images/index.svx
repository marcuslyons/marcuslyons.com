---
slug: double-image-gatsby-mdx
title: Double Image While Using gatsby-image and MDX
excerpt: Having problems with duplicate images in Gatsby?
date: 2020-01-10
published: true
keywords: [javascript, gatsby, mdx, troubleshooting]
---

If you run into the issue of having both the blurred image and original image
present when using Gatsby and MDX, it’s likely that your config just needs a
little TLC.

Adding Gatsby-remark-images to the plugin array for gatsby-plugin-mdx will fix
it:

```json
{
  "resolve": `gatsby-plugin-mdx`,
  "options": {
    "extensions": [".mdx", ".md"],
    "defaultLayouts": {
      "default": path.join(__dirname, "./src/templates/markdown-page.js")
    },
    "gatsbyRemarkPlugins": [
      {
        "resolve": `gatsby-remark-images`,
        "options": {
          "maxWidth": 860,
          "backgroundColor": "none"
        }
      }
    ]
  }
}
```

**However** you might still have an issue. This was done already with the Gatsby
blog theme, and I still had it. I found
[this issue](https://github.com/gatsbyjs/gatsby/issues/15486) that recommended
putting Gatsby-remark-images as a plugin on its own in the config, repeating
that it’s being used.:

```json
({
  "resolve": `gatsby-plugin-mdx`,
  "options": {
    "extensions": [".mdx", ".md"],
    "defaultLayouts": {
      "default": path.join(__dirname, "./src/templates/markdown-page.js")
    },
    "gatsbyRemarkPlugins": [
      {
        "resolve": `gatsby-remark-images`,
        "options": {
          "maxWidth": 860,
          "backgroundColor": "none"
        }
      }
    ]
  }
},
{
  "resolve": `gatsby-remark-images`,
  "options": {
    "maxWidth": 860,
    "backgroundColor": "none"
  }
})
```
