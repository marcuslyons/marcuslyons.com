---
slug: ive-been-a-react-developer-for-5-years-but-this-feature-is-why-im-most-excited-about-sveltekit
title:
  I’ve Been a React Developer for 5 Years but This Feature Is Why I’m Most
  Excited About SvelteKit
excerpt: Looking forward to building more with SvelteKit
date: 2022-03-21
published: true
keywords: [svelte, sveltekit, blog, ssg]
---

Initially, I was _not_ a fan of Svelte. Directives, templating? Everything in a
`<script>` tag? Filenames ending in `.svelte`? What was the world coming to?!
This was back in the Sapper days, and I didn't give it a fair shot. I heard
Scott talk about it on Syntax for the billionth time, and I decided to give it
another look. I'm glad I did; there are many things to like about Svelte, and
specifically SvelteKit, after getting over my initial bias.

## Enter SvelteKit

Last fall, I was slowly migrating my site to NextJS from Gatsby. I have a thing
for static site generators; I think they're fun to tinker with. While I haven't
fully ported my site over, I spent some time getting a little Rick and Morty API
explorer together to test the waters.

## The Files are in the computer

One of the features I really like about SvelteKit is the filesystem-based
router. The folder structure of your app is what defines the routes. The other
benefit of this is that the routes are your _pages_, but they can also be your
_endpoints_, allowing you to quickly build out an API without having to set up
an entire server. Even going so far as being able to hook into Netlify
functions, database connections, or some third-party API.

I still really like React and use it in my day-to-day, but I'm going to be
reaching for Svelte going forward for personal projects.
