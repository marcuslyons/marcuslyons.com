import React from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

import getShareImage from "@jlengstorf/get-share-image"
import PostFooter from "../components/post-footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => {
  const socialImage = getShareImage({
    title: post.title,
    tagline: post.excerpt,
    cloudName: "marcuslyons",
    imagePublicID: "marcuslyons/blog-post-card",
    font: "futura",
    textColor: "232129",
  })
  return (
    <Layout location={location} title={title}>
      <SEO
        title={post.title}
        description={post.excerpt}
        socialImage={socialImage}
      />
      <Styled.a
        as={Link}
        css={{
          color: `inherit`,
          boxShadow: `none`,
        }}
        to={`/writing`}
      >
        back
      </Styled.a>
      <main>
        <Styled.h1>{post.title}</Styled.h1>
        <Styled.p
          css={css({
            fontSize: 1,
            mt: -3,
            mb: 3,
          })}
        >
          {post.date}
        </Styled.p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </main>
      <PostFooter {...{ previous, next }} />
    </Layout>
  )
}

export default Post
