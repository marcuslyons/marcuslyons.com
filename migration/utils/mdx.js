import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { bundleMDX } from "mdx-bundler"

export const POSTS_PATH = path.join(process.cwd(), "content/posts")

export const getSourceOfFile = (filename) => {
  return fs.readFileSync(path.join(POSTS_PATH, filename))
}

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((filename) => {
      const source = getSourceOfFile(filename)
      const slug = filename.replace(/\.mdx?$/, "")
      const { data } = matter(source)

      return {
        frontmatter: data,
        slug,
      }
    })
}

export const getSinglePost = async (slug) => {
  const source = getSourceOfFile(`${slug}.mdx`)

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: POSTS_PATH,
  })

  return {
    frontmatter,
    code,
  }
}
