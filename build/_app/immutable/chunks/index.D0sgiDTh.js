import{a,t as o}from"./disclose-version.BDaRFh6M.js";import"./legacy.G1r-cTWw.js";import{n as i}from"./runtime.D22fzDCM.js";const s={slug:"gatsby-recipes",title:"Gatsby Recipes",excerpt:"For fun and mischief.",date:"2021-04-01T00:00:00.000Z",published:!0,keywords:["gatsby","automation","cli"],previewText:`Gatsby Recipes, a new tool to automate common site building tasks. Kyle
Matthews -
Recipes Announcement Post

What are they?`,previewHtml:'<blockquote> <p>Gatsby Recipes, a new tool to automate common site building tasks. Kyle Matthews - <a href="https://www.gatsbyjs.org/blog/2020-04-15-announcing-gatsby-recipes/" rel="nofollow">Recipes Announcement Post</a></p> </blockquote> <h2>What are they?</h2>'},{slug:r,title:h,excerpt:d,date:u,published:y,keywords:b,previewText:m,previewHtml:g}=s;var n=o(`<blockquote><p>Gatsby Recipes, a new tool to automate common site building tasks. Kyle
Matthews - <a href="https://www.gatsbyjs.org/blog/2020-04-15-announcing-gatsby-recipes/" rel="nofollow" target="_blank">Recipes Announcement Post</a></p></blockquote> <h2 id="what-are-they"><a aria-hidden="true" tabindex="-1" href="#what-are-they"><span class="icon icon-link"></span></a>What are they?</h2> <p>A recipe is a set of instructions that describes how to prepare or make
something. Gatsby Recipes are no different, they’re essentially a set of
instructions to tell the Gatsby CLI what to install or create.</p> <p>Using the Gatsby CLI we can now leverage some of the concepts from
infrastructure as code in our frontend applications. This tool isn’t limited to <em>just</em> Gatsby despite what the name implies. This can be run on any UI
application that utilizes a <code>package.json</code> and NPM. (caveats in that it uses
Yarn by default but ultimately it’s not that big of a deal)</p> <p>The official method of using Recipes is to use the following command: <code>gatsby recipes</code> will get us a list of the Official Gatsby Recipes that ship
with the CLI. However, we can pass a custom Recipe to the CLI instead. This can
be either a URL, such as a Gist, or a local path to the MDX file.</p> <h2 id="what-can-they-do"><a aria-hidden="true" tabindex="-1" href="#what-can-they-do"><span class="icon icon-link"></span></a>What can they do?</h2> <p>We can automate common site building tasks with Gatsby Recipes.</p> <p>Such as:</p> <ul><li>Adding scripts to our <code>package.json</code></li> <li>Adding dependencies to our project</li> <li>Adding Files to our project</li> <li>Updating our Gatsby Config (if we’re using them on a Gatsby site)</li></ul> <h2 id="are-they-only-for-gatsby-apps"><a aria-hidden="true" tabindex="-1" href="#are-they-only-for-gatsby-apps"><span class="icon icon-link"></span></a>Are they only for Gatsby Apps?</h2> <p>Despite what the name implies, you <em>can</em> use Recipes on any project with a
package.json. Adding an NPM script, or dependency, can be done on a variety of
projects, but adding to a gatsby-config file obviously wouldn’t need to be done.
Adding files, templates, etc are also possible.</p> <p>The one gotcha I’ve found in experimenting with this has been the Gatsby CLI
uses yarn with recipes by default. So if you’re not using Yarn you’ll need to
delete the yarn.lock file.</p>`,1);function f(e){var t=n();i(22),a(e,t)}export{f as default,s as metadata};
