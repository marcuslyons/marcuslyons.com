import { getPostsContent, getPost } from "$lib/utils"

export const get = async function ({ params }) {
  const { slug } = params
  const postsContent = await getPostsContent()
  const article = postsContent.find((element) => element.slug === slug)
  const post = await getPost(article.content, true)

  if (post) {
    return {
      body: JSON.stringify({ post: { ...post, slug } }),
    }
  }

  return {
    status: 404,
  }
}
