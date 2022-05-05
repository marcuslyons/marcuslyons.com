import { getPosts, getPostsContent } from "$lib/utils"

export const get = async function () {
  // get all posts from content

  const postsContent = await getPostsContent()
  const posts = await getPosts(postsContent, false)
  // const postTest = slugFromPath('../../')

  // const modules = import.meta.glob(`${assets}/posts/*.{md,svx,svelte.md}`);
  return {
    body: {
      ...{ posts },
    },
    status: 200,
  }
}
