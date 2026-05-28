# Julie Lam — Static Site

Plain HTML/CSS/JS static site. No build step, no framework.

## Structure

```
index.html        Home
about.html        About
courses.html      Courses
book.html         My Book
events.html       Events & Workshops
blog.html         Blog
connect.html      Connect (contact form)
css/styles.css    All styles — single file, do not split
js/main.js        Mobile menu, nav hide-on-scroll, reveal animations
images/           Webp assets from the design handoff
```

## Design system

Fonts (loaded from Google Fonts in each page `<head>`):
- `--serif`: Cormorant Garamond — headings, pull quotes, large display text
- `--display`: Raleway — eyebrows, nav links, buttons, labels
- `--book`: Libre Baskerville — body copy in reader/narrative contexts, italics
- `--sans`: Mulish — default body font

Key CSS variables (all defined in `:root` in `styles.css`):
- `--bg` / `--bg-2` / `--bg-3` — warm white backgrounds
- `--ink` / `--ink-2` / `--ink-3` — text shades
- `--gold` (#8b7046) — primary accent
- `--tan` — light accent, used on dark backgrounds
- `--brown` — deep warm brown
- `--esp-1/2/3` — espresso dark section gradients

Layout helpers: `.wrap` (max-width container), `.row` (12-col grid), `.col-N`, `.section-head`.
Section spacing: `section` (standard), `section.tight`, `section.flush-top`.

Dark sections use class `espresso`. Scroll-reveal uses class `reveal` with optional `data-delay="ms"`.

## Page anatomy

Every page follows the same shell:
1. `<header class="nav" id="site-nav">` — sticky nav with `.nav-link active` on the current page's link
2. `<main class="page">` — hero → content sections → optional pull quote
3. `<footer class="foot">` — Mailchimp subscribe form + nav columns + social icons

The active nav link is set manually in each file's HTML — no JS needed.

## Courses — important corrections

- **The Connected Presence Practice is 16 weeks, max 12 participants.** Do not change this to 8 weeks or 10 participants.
- The 8-stage pathway section does **not** exist on `courses.html` and must not be added back.

## Third-party integrations

### Mailchimp (newsletter — all footers)
Find and replace these placeholders with values from Mailchimp → Audience → Signup forms → Embedded forms:
```
https://YOUR_ACCOUNT.us1.list-manage.com/subscribe/post?u=XXXXXXXX&id=XXXXXXXX
b_XXXXXXXX_XXXXXXXX   ← honeypot field name
```

### Formspree (contact form — connect.html only)
Replace `YOUR_FORM_ID` with the ID from formspree.io:
```
https://formspree.io/f/YOUR_FORM_ID
```
The form uses AJAX with a graceful fallback to standard POST.

## Conventions

- Keep all styles in `css/styles.css`. Do not create new CSS files.
- Keep all shared JS in `js/main.js`. Page-specific inline `<script>` is acceptable for small interactions (see `connect.html`).
- Nav and footer HTML are repeated in every page — update all 7 files when changing shared markup.
- Images are `.webp`. Reference them as `images/filename.webp`.
- Wave dividers at the bottom of hero sections use `fill="#f6f3ec"` (matches `--bg`).
