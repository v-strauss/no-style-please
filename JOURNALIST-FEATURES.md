# Journalist Features — no-style-please fork

Extensions added to the base [no-style-please](https://github.com/riggraz/no-style-please) Jekyll theme to support a journalist's personal website. Everything is writable from an iPad using only front matter and Kramdown inline attribute lists (IAL) — no raw HTML required.

---

## New layouts

### `reading` layout

A standalone layout for travel reports and academic pieces. Use it wherever you want a serif reading experience instead of the default monospace one.

```yaml
---
layout: reading
title: "Tbilisi in November"
subtitle: "Three days in Georgia's old town"   # optional
date: 2026-01-15
category: travel
location: "Tbilisi, Georgia"                   # optional, appended to date line
---
```

Differences from the default layout:

| Property | Default | Reading |
|---|---|---|
| Body font | monospace 16px | Georgia serif 18px |
| Headings | monospace | monospace (contrast against body) |
| Column width | 640px | 720px |
| Dark-mode toggle | none | button (top right) |
| `location` field | ignored | shown next to date |
| `subtitle` field | ignored | shown below title, italicised |

---

## Dark-mode toggle

Pages using `layout: reading` get a `◐` button in the top-right corner of the header row. Clicking it switches the page between light and dark mode and persists the choice in `localStorage` — so it survives navigation between pages.

The toggle works on top of the existing automatic dark mode: if the visitor's OS is set to dark, the page starts dark; the button overrides that preference.

No configuration needed. The button appears automatically on any `reading` layout page.

---

## Image placement styles

Images in `reading` layout posts support three distinct placement styles, each with an optional caption. All are writable from an iPad using Kramdown IAL — no raw HTML required.

### Style 1: Centered (`.img-center`)

Centered within the column at 80% width. Clean, no tilt.

```markdown
![Alt text](photo.jpg){: .img-center}
*Caption text*{: .caption-center}
```

### Style 2: Breakout left / right (`.img-left` / `.img-right`)

Block-level, 70% wide, no text wrapping alongside. On wide desktop screens the image extends 5rem beyond the column edge into the margin.

```markdown
![Alt text](photo.jpg){: .img-right}
*Caption text*{: .caption-right}
```

```markdown
![Alt text](photo.jpg){: .img-left}
*Caption text*{: .caption-left}
```

### Style 3: Hero / full-bleed (`.img-hero`)

The image escapes the `.w` container entirely and spans the full viewport width.

```markdown
![Alt text](photo.jpg){: .img-hero}
*Caption text*{: .caption-hero}
```

### Responsive behaviour

| Viewport | `.img-center` | `.img-left` / `.img-right` | `.img-hero` |
|---|---|---|---|
| > 1100px (wide desktop) | 80% wide, centered | 70% wide + 5rem breakout into margin | Full viewport width |
| 681–1099px (tablet) | 80% wide, centered | 70% wide, flush to edge, no breakout | Full viewport width |
| ≤ 680px (mobile) | Full width | Full width, stacked | Full width |

### Caption classes

Each image class has a matching caption class:

| Image class | Caption class | Alignment |
|---|---|---|
| `.img-center` | `.caption-center` | Centered |
| `.img-left` | `.caption-left` | Left-aligned |
| `.img-right` | `.caption-right` | Right-aligned |
| `.img-hero` | `.caption-hero` | Centered |

---

## Pastel code block variants

Fenced code blocks can be styled with a colour variant by placing a Kramdown IAL on the line immediately after the closing fence.

### Warm (orange tone)

````markdown
```bash
echo "fieldwork notes"
```
{: .code-warm}
````

### Muted (blue-grey tone)

````markdown
```python
print("source analysis")
```
{: .code-muted}
````

The colours invert correctly in dark mode (the theme uses `filter: invert(1)` on the body, so orange becomes teal — this is intentional and can look editorial).

Standard code blocks with no IAL are unchanged.

---

## Inline code highlights

Inline `code` spans can be given a pastel background colour with a Kramdown IAL placed immediately after the backtick span.

| Class | Colour |
|---|---|
| `.hl-pink` | Pink — `#fce4f0` / `#7a0050` |
| `.hl-warm` | Orange — `#fdebd0` / `#7a3000` |
| `.hl-blue` | Blue — `#dce8f5` / `#003b7a` |
| `.hl-green` | Green — `#d8f0e0` / `#005020` |

```markdown
`keyword`{: .hl-pink}
`warning`{: .hl-warm}
`reference`{: .hl-blue}
`source`{: .hl-green}
```

The colours invert correctly in dark mode (same double-invert behaviour as code blocks).

---

## Menu structure

`_data/menu.yml` is organised around the journalist's four content types:

```
about
travel → recent dispatches (5) → all travel reports...
academia → recent papers (5) → all academic writing...
blog → recent posts (8) → more posts...
cv
rss
```

Each category has a corresponding archive page that lists all posts in that category.

---

## Archive pages

| File | URL | Category |
|---|---|---|
| `travel-archive.md` | `/travel-archive` | `travel` |
| `academia-archive.md` | `/academia-archive` | `academia` |
| `blog-archive.md` | `/blog-archive` | `blog` |

---

## Front matter reference

### Travel report

```yaml
---
layout: reading
title: "Tbilisi in November"
subtitle: "Three days in Georgia's old town"
date: 2026-01-15
category: travel
location: "Tbilisi, Georgia"
---
```

### Academic piece

```yaml
---
layout: reading
title: "Slow Journalism and Digital Tools"
subtitle: "On the tension between speed and depth in contemporary reporting"
date: 2025-11-03
category: academia
---
```

### Blog post

```yaml
---
layout: post
title: "Quick note on X"
date: 2026-02-10
category: blog
---
```

### CV page

```yaml
---
layout: page
title: CV
---
```

---

## Files added or modified

### New files

| File | Purpose |
|---|---|
| `_layouts/reading.html` | Reading layout (serif, toggle, location, subtitle) |
| `assets/js/theme_toggle.js` | Dark-mode toggle with localStorage persistence |
| `_sass/reading-overrides.scss` | All reading-layout CSS |
| `travel-archive.md` | Travel category archive page |
| `academia-archive.md` | Academia category archive page |
| `blog-archive.md` | Blog category archive page |
| `cv.md` | CV page |

### Modified files

| File | Change |
|---|---|
| `assets/css/main.scss` | Added `@import "reading-overrides"` |
| `_data/menu.yml` | Replaced with journalist menu structure |

`_sass/no-style-please.scss` is not modified — the upstream theme stays pristine.

---

## Test posts

Four sample posts are included in `_posts/`:

| File | Layout | Category | Features exercised |
|---|---|---|---|
| `2026-01-15-tbilisi-in-november.md` | reading | travel | subtitle, location, img-right, img-left, img-hero, code-warm, blockquote, section divider |
| `2025-11-03-slow-journalism-and-digital-tools.md` | reading | academia | subtitle, code-muted, section divider |
| `2026-02-10-notes-on-writing-from-an-ipad.md` | post | blog | standard post layout |
| `2025-09-22-on-the-word-dispatch.md` | post | blog | standard post layout |
