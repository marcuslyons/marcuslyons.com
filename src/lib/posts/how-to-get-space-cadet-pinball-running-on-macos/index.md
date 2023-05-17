---
slug: how-to-get-space-cadet-pinball-running-on-macos
title: How to Get Space Cadet Pinball Running on macOS
excerpt: Blast from the past
date: 2022-04-17
published: true
keywords: [pinball, macos, oss, windows]
---

I came across
[this Tweet](https://twitter.com/sterophonick/status/1448698260718166017?s=20&t=3Cx-rRAXJbpFG07p3KUi3w)
a few months ago talking about Space Cadet Pinball running natively on Linux.

I used to play this all the time as a kid, and thought it would be fun to get it
running on a Mac.

> There are some dependencies that need to be installed before building the
> executable

Dependencies: `cmake, sdl2, sdl2_mixer`

`brew install sdl2, sdl2_mixer` `brew install --cask cmake`

> Make sure to set the OSX Architecture for cmake _before_ attempting to build
> the app

`export CMAKE_OSX_ARCHITECTURES=x86_64 || arm64`

Steps: clone SpaceCadetPinball from GH
`git clone git@github.com:k4zmu2a/SpaceCadetPinball.git` `cd SpaceCadetPinball`

Build the executable with cmake `cmake . && cmake --build`

clone WinXP-Pinball from GH
`git clone git@github.com:FmasterofU/WinXP-Pinball.git`

Move files to SpaceCadetPinball repo `mv WinXp-Pinball/Pinball/* bin`

Remove WinXP-Pinball repo since it's no longer needed `rm -rf WinXp-Pinball`

Run the executable `./bin/SpaceCadetPinball`
