import config from '$lib/site-config';
import { posts } from '$lib/server/posts';

const {name, site, description} = config;

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  }

  const generateXML = content => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${name}</title>
    <link>${site}</link>
    <description>${description}</description>
    ${content.map(post => `
      <item>
            <title>${post.title}</title>
            <description>${post.excerpt}</description>
            <link>${site}/posts/${post.slug}/</link>
            <pubDate>${new Date(post.date)}</pubDate>
            <content:encoded>${post.preview}
              <div style="margin-top: 50px; font-style: italic;">
                <strong>
                  <a href="${site}/posts/${post.slug}">
                    Keep reading
                  </a>
                </strong>
              </div>
            </content:encoded>
          </item>
    `).join('')}
  </channel>
</rss>`
  const body = generateXML(posts);
  return new Response(body, { headers })

}