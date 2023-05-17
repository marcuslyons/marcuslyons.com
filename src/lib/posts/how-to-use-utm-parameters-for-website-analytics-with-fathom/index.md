---
slug: how-to-use-utm-parameters-for-website-analytics-with-fathom
title: How to Use UTM Parameters for Website Analytics With Fathom
excerpt: With great power comes great responsibility.
date: 2022-04-04
published: true
keywords: [utm, fathom, analytics]
---

UTM Parameters can help you identify where and how traffic made it to your site.

I've spent a fair amount of time working with Google Analytics, Ads, and other
privacy-invading features. Which lead me to find
[Fathom Analytics](https://usefathom.com/why-fathom), an analytics tool that
doesn't harvest and sell user data. We can tell what routes someone has visited
on our site, the browser, and if they used a phone or desktop.

Unfortunately, this doesn't tell us where our visitors are coming from.

## Traffic without an origin isn't super helpful

While it can help determine what browser support you should prioritize, you'll
miss out on knowing if:

- Did they click a link you shared on Twitter?
- That comment you left with a link to an article is getting some attention
- Your newsletter recommended articles format is working
- An A/B test for sharing content is successful

UTM Parameters can help with this and more without much work or setup.

Let's look at how we'd set up UTM Parameters for this article.

### Source

We want to know the origin of our traffic.

Depending on where we shared the link to this, we'd put the platform's name here
like `utm_source=twitter`.

### Campaign

The campaign is specific to what you want to classify your links as.

For me, I'm writing this as part of Ship 30 for 30, so I tagged it with
`utm_campaign=ship-30-for-30`

### Medium

The medium is a marketing term for identifying if the traffic was from a paid
campaign.

I don't run ads, or campaigns for traffic, so I could put `utm_medium=organic`
here.

### Content

This field is optional and can be used to separate links to content from the
same campaign and source. Say you tweet twice a day, and you want to know which
tweet the traffic came from; you could put the date and time like
`utm_content=04-04-2022-2000`

Altogether, this would give us this beast of a link:
`https://marcuslyons.com/writing/how-to-use-utm-parameters-for-website-analytics?utm_source=twitter&utm_campaign=ship-30-for-30&utm_medium=organic&utm_content=04-04-2022-2000`

Gathering data for analytics is what UTM Parameters excel at, after putting in
the work to set them up before you share a link.

Hopefully, you can see the power that UTM Parameters can grant you, but with
that power comes the responsibility for respecting our users' privacy and not
harvesting to sell-off.
