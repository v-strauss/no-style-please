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

## Floating "poke-out" photos

Images in `reading` layout posts can float left or right alongside the text. On wide desktop screens they extend beyond the column edge into the margin.

### Float right

```markdown
![Caption text](../assets/images/photo.jpg){: .float-right}

Paragraph text flows to the left of the image...
```

### Float left

```markdown
![Caption text](../assets/images/photo.jpg){: .float-left}

Paragraph text flows to the right of the image...
```

### Stop a float

Place this before any element that should start below the floated image:

```markdown
{: .clear}

Next paragraph starts here with no float active.
```

A `##` heading after a float also clears it naturally.

### Responsive behaviour

| Viewport | Behaviour |
|---|---|
| > 1100px (wide desktop) | Float + image extends 7rem beyond column edge |
| 681–1099px (tablet / narrow desktop) | Float within column, no negative margin |
| ≤ 680px (mobile) | No float, image stacks full-width |

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
| `2026-01-15-tbilisi-in-november.md` | reading | travel | subtitle, location, float-right, float-left, clear, code-warm, blockquote, section divider |
| `2025-11-03-slow-journalism-and-digital-tools.md` | reading | academia | subtitle, code-muted, section divider |
| `2026-02-10-notes-on-writing-from-an-ipad.md` | post | blog | standard post layout |
| `2025-09-22-on-the-word-dispatch.md` | post | blog | standard post layout |
