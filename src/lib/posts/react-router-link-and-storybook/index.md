---
slug: react-router-link-and-storybook
title: React-router, Link, and Storybook
excerpt: "Invariant failed: You should not use Link outside a Router"
date: 2020-02-05
published: true
keywords: [react-router, react, storybook]
---

![Picture of an error in Storybook](./images/storybook-link-error.png)

**Invariant failed: You should not use `<Link>` outside a `<Router>`**

This was a fun one to find recently. I was testing my component in the main
application after making sure it looked correct in Storybook. After adding the
`<Link>` in my component, I found that Storybook failed hard.

While the app itself is wrapped in a Router, Storybook isn’t.

The quick fix for this is to use the
[storybook-react-router - npm](https://www.npmjs.com/package/storybook-react-router)
package. This decorator enables Storybook to be able to display routing-aware
components.

With the changes to Storybook in v5, we can now add the following to our
preview.js file to enable the decorator in all our stories:

```js
import { addDecorator } from "@storybook/react"
import StoryRouter from "storybook-react-router"

addDecorator(StoryRouter())
```
