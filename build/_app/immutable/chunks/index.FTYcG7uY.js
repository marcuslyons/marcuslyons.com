import{a,t as o}from"./disclose-version.BDaRFh6M.js";import"./legacy.G1r-cTWw.js";import{n}from"./runtime.D22fzDCM.js";const i={slug:"how-to-get-up-and-running-with-sveltekit",title:"How to Get Up and Running With SvelteKit",excerpt:"There's less than you think",date:"2022-04-05T00:00:00.000Z",published:!0,keywords:["sveltekit","svelte","ui"],previewText:`TLDR: 

SvelteKit is a framework for building web applications that abstracts away the
boring stuff, so you don’t have to. Seriously, it’s pre-configured for build
optimization, prefetching, server or client-side rendering, and offline support.
This...`,previewHtml:"<p>TLDR: <code>npm init svelte@next &amp;lt;app name&amp;gt;</code></p> <p>SvelteKit is a framework for building web applications that abstracts away the boring stuff, so you don’t have to. Seriously, it’s pre-configured for build optimization, prefetching, server or client-side r...</p>"},{slug:l,title:c,excerpt:u,date:h,published:f,keywords:m,previewText:w,previewHtml:g}=i;var r=o(`<p>TLDR: <code>npm init svelte@next &lt;app name&gt;</code></p> <p>SvelteKit is a framework for building web applications that abstracts away the
boring stuff, so you don’t have to. Seriously, it’s pre-configured for build
optimization, prefetching, server or client-side rendering, and offline support.
This allows you to focus on the fun aspects of building a web app instead of all
the setup.</p> <p>As someone that enjoys tinkering and optimization, I was skeptical at first, but
I’ve come around to Svelte and, by extension, SvelteKit.</p> <h2 id="to-get-started-we-need-to-run-a-few-commands"><a aria-hidden="true" tabindex="-1" href="#to-get-started-we-need-to-run-a-few-commands"><span class="icon icon-link"></span></a>To get started, we need to run a few commands:</h2> <ul><li><code>npm init svelte@next app-name</code></li> <li><code>npm install</code> in the created directory 👆🏼</li> <li><code>npm run dev</code></li></ul> <p>You now have a SvelteKit app running on your local machine and can see a basic
app that asks you to edit the page to see changes with hot module reloading
enabled.</p> <p>We can add a new route by creating a new file named <code>about.svelte</code> in <code>./src/routes</code> that will correspond to the <code>/about</code> route for the app. This will
create a new page that we can style and fill with our desired content.</p> <p>Or we can add an endpoint at <code>./src/routes/dadJoke.js</code> and set up an async
function to fetch a joke from the <a href="https://icanhazdadjoke.com/api" rel="nofollow" target="_blank">dad joke api</a>.</p> <p>Hopefully, this gave you an idea of how quick it is to get up and running with
SvelteKit.</p>`,1);function v(e){var t=r();n(16),a(e,t)}export{v as default,i as metadata};
