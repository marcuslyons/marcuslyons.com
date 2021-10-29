import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Image from "next/image"
import { bundleMDX } from "mdx-bundler"
import { remarkMdxImages } from "remark-mdx-images"
import imageSize from "rehype-img-size"

export const POSTS_PATH = path.join(process.cwd(), "content/posts")
export const ASSETS_PATH = path.join(process.cwd(), "content/assets")
export const PUBLIC_PATH = path.join(
  process.cwd(),
  "public/images/content/posts"
)
export const IMAGE_PATH = "/images/content/posts"

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
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "bin",
    "esbuild"
  )

  const source = getSourceOfFile(`${slug}.mdx`)

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: POSTS_PATH,
    globals: { Image },
    xdmOptions: (options) => ({
      ...options,
      remarkPlugins: [...(options.remarkPlugins ?? []), remarkMdxImages],
      rehypePlugins: [...(options.rehypePlugins ?? []), imageSize],
    }),
    esbuildOptions: (options) => ({
      ...options,
      outdir: `${PUBLIC_PATH}/${slug}`,
      loader: {
        ...options.loader,
        ".png": "file",
        ".jpeg": "file",
        ".jpg": "file",
      },
      publicPath: `${IMAGE_PATH}/${slug}`,
      write: true,
    }),
  })

  return {
    frontmatter,
    code,
  }
}
