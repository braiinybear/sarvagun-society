---
name: "Sarvagun Society - NGO Dehradun"
colors:
  primary: "#2D6A4F"          # Forest Green: CTAs, buttons, active nav, primary actions (growth, nature, rural harmony)
  primary-hover: "#1B4332"    # Deep Forest: hover/active states
  primary-soft: "#D8F3DC"     # Soft Mint: badges, tag backgrounds, subtle highlights
  secondary: "#E07A2F"        # Warm Saffron: accents, highlights, featured badges (Indian cultural significance)
  secondary-hover: "#C76B1F"  # Deep Saffron: hover state
  tertiary: "#5C4033"         # Warm Brown: secondary text, borders, dividers (earth, stability)
  bg: "#FFF8F0"               # Warm Cream: page background (mimics handmade paper / khadi texture)
  bg-card: "#FFFFFF"          # White: card surfaces
  bg-muted: "#FAF3EA"         # Muted Cream: secondary backgrounds, footer
  text: "#2C1810"             # Deep Warm Brown: body text (softer than pure black, easier on eyes)
  text-muted: "#7D6B5D"       # Warm Gray: secondary text, captions
  border: "#E8DDD0"           # Warm Beige: borders, dividers
  festive: "#D4333F"          # Festive Red: Diwali/Eid/special banners, donation urgency badges
  success: "#2D6A4F"          # Green: success states, donation confirmations
  error: "#D4333F"            # Red: errors
  social: "#1DA1F2"           # Twitter/X blue for social links
typography:
  headings:
    fontFamily: "'Playfair Display', 'Noto Serif Devanagari', Georgia, serif"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  subheadings:
    fontFamily: "'Playfair Display', 'Noto Serif Devanagari', Georgia, serif"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "'Inter', 'Noto Sans Devanagari', system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.7
    fontSize: "1rem"
  body-small:
    fontFamily: "'Inter', 'Noto Sans Devanagari', system-ui, sans-serif"
    fontSize: "0.875rem"
    lineHeight: 1.6
  button:
    fontFamily: "'Inter', 'Noto Sans Devanagari', sans-serif"
    fontWeight: 600
    letterSpacing: "0.02em"
  display:
    fontFamily: "'Playfair Display', 'Noto Serif Devanagari', Georgia, serif"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  full: 9999px
---

## 1. Visual Theme & Atmosphere

"Warm, grounded, and purposeful — like a trusted community organization that has been serving for decades."

The UI should feel like a **handcrafted heritage space** — not a corporate website. Use warm cream backgrounds with rich green and saffron accents. Avoid sterile white or cold gray. The design must communicate **trust, warmth, and action**.

The overall feeling should be: *"This is an organization that cares, is transparent, and makes real impact."*

## 2. Color Palette & Roles

### Primary — Forest Green (`#2D6A4F`)
- All primary buttons, CTA buttons
- Navigation active state
- Links (underlined or colored)
- Success states, donation confirmations
- Used sparingly to draw attention

### Secondary — Warm Saffron (`#E07A2F`)
- Accent badges ("Featured", "Urgent", "New Initiative")
- Highlight icons
- Star ratings, award badges
- Section dividers on dark backgrounds

### Background — Warm Cream (`#FFF8F0`)
- Main page background
- Creates a warm canvas that makes images pop
- Never use pure white or pure gray as main background

### Text — Deep Warm Brown (`#2C1810`)
- All body text
- Softer and more readable than pure black on warm backgrounds
- On white cards, use this same color

### Semantic Colors
- **Festive Red** (`#D4333F`): Urgent donation banners, emergency campaigns, Diwali specials
- **Success Green** (`#2D6A4F`): Donation confirmations, volunteer signup confirmations

## 3. Typography Rules

### Headings: Playfair Display + Noto Serif Devanagari
- Use serif for headings to evoke tradition, heritage, and warmth
- Display size: 48–64px (homepage hero), 32–40px (page titles), 24–28px (section headings)
- Letter-spacing: slightly negative (-0.02em) for a refined editorial feel
- 700 weight for H1-H2, 600 for H3-H4

### Body: Inter + Noto Sans Devanagari
- Clean, highly readable sans-serif for long-form NGO content
- Line-height: 1.7 (generous for readability of text-heavy pages)
- Size: 16px base, 14px for small/captions
- Button text: 600 weight, 0.02em letter-spacing

### Bilingual Support
- All font stacks include Devanagari fallbacks
- Hindi/English mixed content must render harmoniously at all sizes
- Test all typography with both scripts

## 4. Component Stylings

### Buttons
- **Primary**: `bg-primary text-white hover:bg-primary-hover` — filled, rounded-lg
- **Secondary**: `border-2 border-primary text-primary hover:bg-primary-soft` — outlined
- **Ghost**: `text-primary hover:bg-primary-soft` — minimal
- **Donate CTA**: Primary button with a subtle pulse or `ring-primary` glow — always prominent
- All buttons: `font-semibold tracking-wide uppercase text-sm`, `transition-all duration-200`

### Cards
- `bg-card rounded-lg border border-border shadow-sm`
- Used for: project cards, team members, impact stats, blog previews
- Image on top, content below with generous padding (lg/xl)
- Hover: `shadow-md` with `-translate-y-0.5` for subtle lift

### Navigation
- Sticky header with `backdrop-blur-md bg-bg/90`
- Logo on left, nav links center/right, "Donate" button as primary CTA on far right
- Mobile: hamburger with full-height overlay menu
- Dropdowns for "Projects", "Members" etc. with clean card-style menus

### Form Elements
- Inputs: `bg-white border border-border rounded-md px-4 py-3 text-text`
- Focus: `ring-2 ring-primary/30 border-primary`
- Labels: `text-sm font-medium text-text`
- Checkbox/Radio: primary color accent
- Error state: border-error with helper text in error color

### Photo Gallery
- Grid layout (2/3 columns) with consistent aspect ratios
- Lightbox on click
- Captions overlay on hover with translucency

### Impact Stats
- Large display numbers in primary green with descriptive text below
- Grid of 3-4 stats on homepage
- Can include a subtle icon above each number

## 5. Layout Principles

### Page Max Width
- Content: 1200px max-width centered
- Full-width: hero, impact stats strip, footer

### Grid
- 12-column grid (or use Tailwind defaults)
- Content pages: 2/3 main + 1/3 sidebar for blog/news
- Project pages: card grid (3 columns on desktop, 2 on tablet, 1 on mobile)

### Whitespace
- Generous padding between sections (3xl–4xl)
- Text content needs breathing room — never cramped
- Images should have clear margins around them

### Hero Section
- Full-viewport-height on homepage
- Background image with dark overlay (gradient overlay: `from-black/60 to-black/30`)
- Centered text: mission statement in display font, subtitle in body, two CTAs ("Donate" primary, "Learn More" secondary)
- Overlay ensures white text is readable at WCAG AA

### Footer
- Dark background (`bg-primary` or `bg-tertiary`)
- 4-column grid: About, Quick Links, Programs, Contact
- Copyright + design credit at bottom
- Social media icons row

## 6. Shapes & Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Form inputs, badges |
| `rounded-md` | 6px | Cards, images, buttons |
| `rounded-lg` | 8px | Modals, dropdown containers |
| `rounded-xl` | 12px | Featured cards, CTA sections |
| `rounded-full` | 9999px | Avatar, pill badges, social icons |

No sharp 0px corners on any interactive element. Cards and buttons should feel approachable (soft), not rigid.

## 7. Depth & Elevation

| Level | Shadow | Usage |
|-------|--------|-------|
| 0 | None | Page background |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | Cards default state |
| 2 | `0 4px 12px rgba(0,0,0,0.1)` | Cards hover, dropdown menus |
| 3 | `0 8px 24px rgba(0,0,0,0.12)` | Modals, mobile nav overlay |
| 4 | `0 16px 48px rgba(0,0,0,0.15)` | Lightbox overlay backdrop |

Use shadows sparingly. The design should feel grounded, not floating. Card shadows should be subtle — more like paper on a desk than holograms.

## 8. Interaction & Motion

### Duration & Easing
- Default: `duration-200 ease-out` — quick, responsive
- Hero/Page load: `duration-500 ease-out` — gradual reveal
- Modals/Overlays: `duration-300 ease-in-out`

### Micro-interactions
- Buttons: scale 1.02 on hover, subtle shadow increase
- Cards: lift on hover (translateY -2px + shadow increase)
- Nav links: underline slide-in on hover
- Donate CTA: subtle pulse animation every few seconds to draw attention (only on homepage)
- Images: scale 1.05 on hover within cards

### Page Transitions
- View transitions API for Astro (instant, smooth page changes)
- Fade + slight slide up for content entering viewport
- No jarring animations or parallax — keep it accessible and respectful

## 9. Accessibility & A11y

### Standards
- WCAG 2.2 Level AA compliance minimum
- 4.5:1 contrast ratio for body text on all backgrounds
- 3:1 for large text (18px+ bold or 24px+ regular)

### Focus
- Visible focus ring on all interactive elements: `ring-2 ring-primary ring-offset-2`
- Skip-to-content link at top of page
- All interactive elements keyboard-accessible

### Images
- All informational images require `alt` text
- Decorative images use `alt=""` (empty)
- Gallery images: descriptive alt text for each photo

### Forms
- All form inputs have associated labels
- Error messages are announced to screen readers
- Required fields clearly marked

### Color
- Never use color alone to convey information
- Links have underlines in addition to color
- Success/error states include icons + text + color

### Screen Reader Support
- ARIA landmarks on all major sections (`banner`, `main`, `contentinfo`, `navigation`)
- Dynamic content uses `aria-live` regions
- Mobile menu uses `aria-expanded` and proper focus trapping

## 10. Responsive Behavior

### Breakpoints
- Mobile: 0–639px (primary design target — 80% of traffic)
- Tablet: 640–1023px
- Desktop: 1024px+

### Mobile-First Rules
- All layouts stack to single column on mobile
- Touch targets minimum 44x44px
- Donate button always visible in sticky nav (even on mobile)
- Navigation collapses to hamburger below 1024px
- Font sizes: body 16px minimum on mobile (prevents zoom)
- Cards: 1 column mobile, 2 tablet, 3+ desktop

### Images
- All images use `srcset` for responsive loading
- Hero images: different crops for mobile/tablet/desktop
- Lazy loading for below-fold images

## 11. Content & Voice

### Tone
- **Warm, respectful, and action-oriented**
- Speak directly to the reader: "You can make a difference"
- Avoid NGO jargon and acronyms
- Use simple English (many readers may be second-language speakers)
- For Hindi content: same warmth, formal but accessible register

### Content Patterns
- **Mission**: One clear sentence above the fold
- **Impact**: Show numbers and real stories, not just descriptions
- **CTAs**: Action verbs — "Donate Now", "Join Us", "Sponsor a Child", "Volunteer"
- **Stories**: Real names and photos of beneficiaries (with permission)

### Voice Rules
- ❌ "We are committed to facilitating sustainable development"
- ✅ "We help children in Uttarakhand go to school"
- ❌ Never use corporate language (leverage, optimize, synergize)
- ✅ Always lead with humanity

## 12. Dark Mode & Theming

### When to Offer
- Dark mode is **optional** for NGO sites — not all sites need it
- If implemented: simple toggle in header, persisted in localStorage

### Dark Theme Tokens
- Background: `#1A1A1A` (warm dark, not pure black)
- Surface: `#2A2A2A`
- Text: `#F0EDE8` (warm off-white)
- Primary: `#4CAF79` (slightly lighter green for contrast on dark)
- Borders: `#3A3A3A`

### Dark Mode Rules
- Images should have `opacity-90` in dark mode (less harsh)
- Shadows invert (use light glows instead)
- Cards get a subtle border instead of shadow
- No color inversion on photos

## 13. Lineage & Influences

### Reference Brands
- **Fabindia**: Earthy, craft-centric layout, warm color palette, cultural authenticity
- **Goonj**: NGO visual identity — impactful imagery, minimal design, let stories speak
- **Akanksha Foundation**: Clean NGO site with strong typographic hierarchy
- **Pratham**: Data-driven impact presentation, simple navigation

### What to Avoid
- ❌ Corporate blue/gray schemes (looks like a bank, not an NGO)
- ❌ Over-designed layouts with heavy animations
- ❌ Generic stock photos of "happy children" — use real photos
- ❌ Cluttered navigation with too many items
- ❌ Dark backgrounds with light text for body content

## 14. Do's and Don'ts

### Do
- ✅ Use real photos of the communities served (with dignity and respect)
- ✅ Make the "Donate" button the most prominent element in the header
- ✅ Show impact numbers prominently on the homepage
- ✅ Use warm cream backgrounds — pure white feels sterile
- ✅ Keep navigation simple — max 7 top-level items
- ✅ Lead every page with a clear, human-centered heading
- ✅ Use generous whitespace around text content

### Don't
- ❌ Use pure black (`#000`) for text on warm backgrounds
- ❌ Use flat, neon, or "modern corporate" colors
- ❌ Crowd the layout — NGO content is heavy, UI must be airy
- ❌ Hide the donation page behind multiple clicks
- ❌ Use jargon like "leverage", "synergy", "stakeholder alignment"
- ❌ Let photos feel like poverty tourism — show strength, not just struggle
- ❌ Ignore mobile — 80% of traffic will be on phones

## 15. Agent Prompt Guide

When generating components, always:

1. **Reference tokens by name**, not hardcoded values. Use `bg-primary` not `bg-[#2D6A4F]`.
2. **Start every new page** by checking this DESIGN.md for layout patterns.
3. **Prioritize mobile layout** first, then scale up.
4. **Ensure all interactive elements** have focus states and hover states.
5. **Use generous padding** — text-heavy pages need whitespace.
6. **For bilingual content**, apply Devanagari font fallbacks in the font stack.
7. **Donate CTA** must always link to `/donate` and be visually prominent.
8. **Forms should be simple** — minimize required fields, show clear validation.
9. **Images need alt text** — descriptive for informational, empty for decorative.
10. **Impact stats** should be numbers with context (e.g., "250+ children sponsored").
