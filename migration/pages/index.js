import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import { getAllPosts } from "../utils/mdx"

export default function Home({ posts }) {
  return (
    <div>
      <h1>All Posts</h1>
      <p>Click the link below to go to a page generated by</p>
      <code>mdx-bundler</code>

      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`posts/${post.slug}`}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: { posts },
  }
}
