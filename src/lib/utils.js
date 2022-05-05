import { compile } from "mdsvex"
import fs from "node:fs"
import { join, resolve } from "path"

const CONTENT_PATH = "src/content/posts"
const ASSET_PATH = "src/content/assets"

const __dirname = resolve()
const location = join(__dirname, CONTENT_PATH)

export const slugFromPath = (path) =>
  path.match(/([\w-]+)\.(svelte\.md|svx)/i)?.[1] ?? null

/**
 * Returns array of post slugs
 * @returns {Promise<string[]>}
 */
export const getSlugs = async function () {
  try {
    const posts = await import.meta.glob(
      `./${location}/**/*.{md,svx,svelte.md}`
    )
    const slugs = Object.keys(posts).map((element) => {
      const lastIndex = element.lastIndexOf("/index.{md,svx,svelte.md}")
      const firstIndex = element.lastIndexOf("/", lastIndex - 1) + 1
      return element.slice(firstIndex, lastIndex)
    })

    return slugs
  } catch (error) {
    console.error(`Error getting post slugs in getSlugs: ${error}`)
  }
}

/**
 * Returns array of objects with the slug and post content
 * @returns {{slug: string; content: string;}[]}
 */
export const getPostsContent = function () {
  const dirs = fs
    .readdirSync(location)
    .filter((element) => fs.lstatSync(`${location}/${element}`).isDirectory())

  const articles = []
  dirs.forEach((element) => {
    const contentPath = `${location}/${element}/index.md`
    if (fs.existsSync(contentPath)) {
      const content = fs.readFileSync(contentPath, { encoding: "utf-8" })
      articles.push({ slug: element, content })
    }
  })
  return articles
}

/**
 * Returns an array of post metadata, with optional post body too.  Array is sort in reverse
 * chrononological order
 * @param {{slug: string; content: string;}[]} postsContent -
 * @param {boolean} body - if true the HTML post body is returned as well as meta
 */
export const getPosts = async (postsContent, body = false) => {
  try {
    const postPromises = postsContent.map(async (element) => {
      const { content, slug } = element
      const transformedContent = await compile(content)
      const { title, excerpt, date } =
        /** @type {{title: string; excerpt: string; date: string;}} */ (
          transformedContent.data.fm
        )
      let resultElement = { title, excerpt, date, slug }
      if (body) {
        resultElement = { ...resultElement, body: transformedContent.code }
      }
      return resultElement
    })
    const result = await Promise.all(postPromises)
    return result.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  } catch (error) {
    console.error(error)
  }
}

export const isActiveUrl = (path, url) => {
  return path === url
}
