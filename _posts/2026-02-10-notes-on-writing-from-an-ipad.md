---
layout: post
title: "Notes on writing from an iPad"
date: 2026-02-10
category: blog
---

I have been writing on an iPad for about eight months now. Not everything — long research documents still happen at a desk — but drafts, notes, and posts like this one.

The setup: iPad Pro 11-inch, Magic Keyboard, iA Writer for drafting, Working Copy for git. The Magic Keyboard is the critical piece. Without a physical keyboard the whole thing collapses into a device for consuming rather than producing.

## What works

**iA Writer** is good for one reason: it removes every decision except the one that matters. There is no formatting bar, no style menu, no font picker. There is a cursor and there is text. The focus mode dims everything except the current sentence. I use it daily.

**Working Copy** handles git adequately. You can clone a repository, edit files, commit, and push — all from the iPad. For a Jekyll site, this means you can write a post, commit the Markdown file, and push to trigger a CI build without ever opening a laptop.

**Split View** between Working Copy and iA Writer is the core workflow. Write in iA Writer, copy, paste into Working Copy, commit.

## What doesn't work

Long sessions with complex document structure. When I need to reorganise a fifteen-section piece with footnotes and cross-references, the iPad's single-window mental model starts to strain. The laptop remains better for that.

Terminal access, for obvious reasons. `bundle exec jekyll serve` requires either a laptop or a remote server. I run a small VPS that serves a live preview; I can check the preview in Safari, but I cannot debug build errors from the iPad without a reasonable amount of friction.

## The unexpected benefit

Constraint as discipline. The iPad cannot do everything, so I do not try to make it do everything. Drafting sessions are drafting sessions. They do not drift into research, or into opening twelve browser tabs, or into tweaking site configuration. The limitation turns out to be the point.

Whether this is a genuine productivity insight or post-hoc rationalisation of an expensive purchase, I leave as an exercise for the reader.
