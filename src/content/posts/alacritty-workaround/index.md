---
slug: alacritty-macos-workaround
title: Alacritty macOS Workaround
excerpt: Gatekeeper really guards that gate.
date: 2021-03-12
published: true
keywords: [terminal, macos, alacritty, catalina]
---

> 📝 Note: this has only been tested in Catalina and not Big Sur
In order to get Alacritty running on macOS without invoking Gatekeeper you need to install it with Brew via the following command:
`brew install --cask alacritty --no-quarantine`
