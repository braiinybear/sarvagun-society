# Sarvagun Society — Project Handoff

## What this is
A modern Astro v7 + Tailwind v4 static website for Sarvagun Society NGO, deployable on Cloudflare Pages. Replaces the broken old static HTML site at doonweb.com/ss.

## Key decisions
- Astro (not Next.js) for static output + View Transitions
- Tailwind v4 with `@theme` tokens (no tailwind.config.js)
- Cloudflare Pages Functions for form handling (not a backend server)
- Resend for transactional email from forms
- All images downloaded from old site into `public/`
- Static site (no SSR) — forms use a Pages Function at `/submit-form`

## How to run
```bash
astro dev --background
# then open http://localhost:4321
```

Build:
```bash
astro build  # outputs to dist/
```

## Project structure
```
src/
  components/     — NavLink, DropdownNav, DropdownLink, MobileNavLink, TeamCard, SectionList
  layouts/        — BaseLayout.astro (shared nav, footer, mobile menu, ViewTransitions, scroll reveal JS)
  pages/          — 23 pages (index, about, objectives, contact, donate, gallery, annual-report, thank-you, 404
                    + 7 projects, 4 members, 1 join-hand, 2 activities)
  styles/         — global.css (Tailwind @theme tokens + lightbox + reveal animations)
functions/        — submit-form.js (Cloudflare Pages Function)
public/
  images/         — PNG section images (activities, objectives, helping-hand, volunteers, spread-smiles, etc.)
  images/photo-gallery/ — 24 gallery JPGs + thumbnails
  reports/        — Annual report .doc
docs/
  DESIGN.md       — Full design system spec (colors, typography, spacing, a11y, dark mode)
  HANDOFF.md      — This file
```

## What's implemented (Tier 1 interactivity)
- **View Transitions** (`ClientRouter` from `astro:transitions`) — smooth page crossfades
- **Scroll reveal** — sections fade+slide up when scrolled into view, respects `prefers-reduced-motion`
- **Animated counters** — stats bar counts up from 0 on view (9+ years, 1000+ students, etc.)
- **Gallery lightbox** — in-page overlay with prev/next, keyboard arrows, Escape
- **Mobile menu** — slides in from right with backdrop overlay
- **Donate page** — icon-backed cards with hover lift/shadow per item category
- **Navigation** — consolidated dropdowns: About, Programs (Projects+Activities), Get Involved (Members+Support)

## Navigation structure (desktop)
Home | About ▼ | Programs ▼ | Get Involved ▼ | Gallery | Report | Contact | [Donate button]

## Form handling (needs env vars)
Forms POST to `/submit-form` → Cloudflare Pages Function → Resend API → email.
Required env vars (set in Cloudflare Pages dashboard):
```
EMAIL_TO=recipient@example.com
RESEND_API_KEY=re_...
FROM_DOMAIN=yourdomain.com
```

## Design tokens (global.css)
- Primary: `#2D6A4F` (green) — nav, headings, buttons
- Secondary: `#E07A2F` (orange) — accent/highlights
- Festive: `#D4333F` (red) — donate CTAs
- Fonts: Playfair Display (headings), Inter (body)
- Page width: 1200px

## What's left
1. **Deploy to Cloudflare Pages** — connect git repo, set build command `astro build`, output dir `dist/`, set env vars
2. **Social media links** — homepage and footer use `href="#"` placeholders for Facebook, Twitter/X, YouTube
3. **Dark mode** — not implemented yet (fallback is light mode only)
4. **Blog** — old blog URL was dead, link was removed. Create local blog section if needed.
5. **Donation payment** — currently only shows bank details. Could add UPI QR code or Razorpay integration.
6. **SEO** — basic meta tags present, could add JSON-LD structured data for NGO

## Past conversation highlights
- User wanted the site to feel authentic (not "AI-generated/vibecoded")
- Original site had sections missing — homepage was rewritten to match original content structure
- Navigation was reorganized to fit laptop screens (consolidated dropdowns)
- Blog external link was dead (original site at sarvagunsociety.org is down), removed from nav
