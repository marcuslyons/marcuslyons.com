---
title: Git not recognizing filename change
excerpt: Sometimes Git doesn't recognize case sensitive filename changes
date: 2020-04-02
published: true
keywords: [git]
---

Git doesn't recognize file name changes if they are just a case-sensitive
change.

For example:

> utilitybar.js -> utilityBar.js

There are a couple of ways to solve this problem:

1. Use git mv `git mv -f utilitybar.js utilityBar.js`

2. Set a core config setting to false `git config core.ignorecase false`

> This second option is a **terrible** idea as it's better to just mv the file
> in Git directly.
