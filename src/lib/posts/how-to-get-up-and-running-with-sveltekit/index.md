---
slug: how-to-get-up-and-running-with-sveltekit
title: How to Get Up and Running With SvelteKit
excerpt: There's less than you think
date: 2022-04-05
published: true
keywords: [sveltekit, svelte, ui]
---

TLDR: `npm init svelte@next <app name>`

SvelteKit is a framework for building web applications that abstracts away the
boring stuff, so you don't have to. Seriously, it's pre-configured for build
optimization, prefetching, server or client-side rendering, and offline support.
This allows you to focus on the fun aspects of building a web app instead of all
the setup.

As someone that enjoys tinkering and optimization, I was skeptical at first, but
I've come around to Svelte and, by extension, SvelteKit.

## To get started, we need to run a few commands:

- `npm init svelte@next app-name`
- `npm install` in the created directory 👆🏼
- `npm run dev`

You now have a SvelteKit app running on your local machine and can see a basic
app that asks you to edit the page to see changes with hot module reloading
enabled.

We can add a new route by creating a new file named `about.svelte` in
`./src/routes` that will correspond to the `/about` route for the app. This will
create a new page that we can style and fill with our desired content.

Or we can add an endpoint at `./src/routes/dadJoke.js` and set up an async
function to fetch a joke from the
[dad joke api](https://icanhazdadjoke.com/api).

Hopefully, this gave you an idea of how quick it is to get up and running with
SvelteKit.
