# Buriram Restaurant — Landing Page MVP Plan & Dev Checklist

> **Project brief:** Build a 3-page landing site for Buriram Restaurant (@buriram_restaurant), a Thai × Chinese fusion cuisine restaurant in Kuala Lumpur (Wangsa Maju area). Self-described as **"泰国小小碗 · Thai X Chinese Cuisine"** — Thai flavors served in small Chinese-style bowls. Mid-tier pricing ($$). Smaller, newer establishment (~155 Google reviews, 447 IG followers). Tech stack: Astro + Tailwind CSS + Framer Motion + Vercel. Mobile-first, fast on 4G.
>
> **Language policy: ENGLISH FIRST, with Chinese accents allowed.** This brand is genuinely bilingual in its marketing — body copy in English, but Chinese characters work as decorative accents in 2-3 places: brand mark "泰国小小碗", a quote on the home page, footer signature. Thai dish names (tom yum, pad thai, somtum, etc.) and Chinese dish names stay in original spellings — they're proper food terms.
>
> **Note:** Buriram is a real Thai province (in Isan/Northeast Thailand), so the brand name carries authentic Thai geographic meaning. Use this in copy if relevant.

---

## 1. Brand Audit

**Identity:** Buriram Restaurant · Wangsa Maju area, KL · Thai × Chinese fusion cuisine · Bilingual marketing

**Their own tagline:** *"泰国小小碗 · Thai X Chinese Cuisine · Taste Thai · Love Thai"*

**The hook (design center of gravity):**
- **Thai × Chinese fusion** — a less common angle; most Thai restaurants stick pure-Thai
- **"Small bowls" concept (小小碗)** — Chinese small-bowl dining culture, encourages variety + sharing
- **Buriram is a real Thai province** — the brand name has authentic geographic meaning (Isan/NE Thailand region known for somtum, larb, grilled meats)
- **Mid-tier pricing ($$)** — accessible, casual
- **100% recommendation rate** on Facebook (5 reviews) — small but enthusiastic following

**Likely menu items (inferred from concept):**
- Thai classics with Chinese-bowl portion sizing (tom yum, pad thai, green curry, basil chicken)
- Isan/Buriram regional specialties: **somtum** (papaya salad), **larb** (minced meat salad), **namtok** (grilled meat salad), **grilled chicken (gai yang)**
- Thai milk tea, Thai green tea
- Possibly some Chinese-Thai fusion creations

⚠️ **Limited menu data publicly available** — must verify with owner during pitch.

**Audience:**
- Chinese-Malaysian foodies (the bilingual marketing tells you who's targeted)
- Wangsa Maju + Setapak locals
- Customers who want Thai food but in smaller / shareable portions
- Possibly TAR UMT students (proximity)
- Couples / small groups (small bowls = order multiple = sharing experience)

**Vibe (inferred):** Smaller, casual, intimate (smaller venues typical for newer establishments), likely Chinese-restaurant feel with Thai accents

**Hours:** 11am – 10pm (verified)

**Press / social proof:**
- **155 Google reviews at 4.6⭐** (smallest of your 10 leads but excellent rating)
- 100% recommendation on Facebook (5 reviews)
- 447 Instagram followers (newer brand, growing)
- 83 Facebook page likes
- Active Instagram (@buriram_restaurant) — 29 posts
- Phone: +60 12-833 1059
- Email: ttktrading0103@gmail.com (the email suggests a parent trading company "TTK Trading")

**Critical positioning consideration:**
- ⚠️ **Halal status unclear** from research — the FB page doesn't mention halal certification. Many Chinese-Malaysian Thai restaurants are non-halal (serve pork). **Do not assume halal — must verify with owner before adding any halal language.**

**Competitive landscape (Wangsa Maju area Thai/Thai-adjacent):**
- Sri Ayutthaya — premium pure Thai
- Thai Moment — casual Thai
- Thai-In Mookata — Thai BBQ steamboat
- De Mookatha — Thai BBQ
- Rot Thai — Thai grill chain
- Buriram is differentiated by the **fusion angle + small-bowl concept**

**Emotional positioning:** *"Thai flavors. Chinese bowls. Small portions, bigger spread."*

---

## 2. Design Direction

This brand is **bilingual fusion + small-bowl curated dining + intimate**. The visual language should celebrate both Thai vibrancy and Chinese-restaurant warmth — not pure Thai temple gold, not pure Chinese kopitiam red.

### Color Palette

Drawing from Thai chili, Chinese ceramic bowls, and Isan herb gardens.

| Role | Color | Hex |
|------|-------|-----|
| Background (primary) | Soft Cream | `#F5F0E5` |
| Surface | Pure Cream | `#FBF7EC` |
| Primary text | Deep Indigo | `#1F2540` |
| Secondary text | Dusty Slate | `#5C6178` |
| **Accent (THE color)** | **Thai Chili Red** | `#C7301B` |
| Secondary accent | Lemongrass Green | `#7A9A6E` |
| Highlight | Lemon Gold | `#D9A441` |
| Soft accent | Ceramic Blue | `#3B5A8A` |
| Deep contrast | Charred Black | `#15171F` |

**Why these:**
- **Thai chili red** — central to all Thai cooking, brand-defining
- **Lemongrass green** — fresh herbs (basil, mint, kaffir lime, lemongrass)
- **Ceramic blue** — classic Chinese willow-pattern porcelain, the bowls themselves
- **Lemon gold** — turmeric, tom yum heat, garnish brightness
- **Soft cream backgrounds** — keeps it intimate, not overwhelming

### Typography

- **Display / Headings:** `Cormorant Garamond` (elegant serif) OR `DM Serif Display` — both feel small-bowl-curated, not chain-loud
- **Alternative for boldness:** `Bebas Neue` for super-bold Thai-province-style accents
- **Body:** `Inter` — clean, readable
- **Numerals (prices):** `Inter` bold — keep prices clean and elegant
- **Chinese display font:** `Noto Serif SC` for the bilingual brand mark "泰国小小碗" — used sparingly
- **Accent / handwritten:** `Caveat` for small handwritten notes

### Mood

Bilingual-Fusion · Small-Curated · Intimate · Thai-Chinese-Bridge · Bowl-Forward · Cultural

Visual references: small-portion Thai-Chinese restaurants, classic Chinese ceramic bowls + Thai garnish, fusion-restaurant bilingual menus, Isan northeast Thai food blogs. NOT: Thai temple gold + bright tropical pinks, generic chain Thai design.

---

## 3. Tech Stack

Same reusable foundation.

| Layer | Tool |
|-------|------|
| Framework | Astro 5 + TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion (React islands) |
| Deployment | Vercel |
| Forms | Formspree |
| Analytics | Vercel Analytics |
| Icons | Lucide React |

---

## 4. Page Architecture

### Page 1 — Home (`/`)

The home page is built around **the fusion angle + the small-bowl concept + the authentic Thai-province name**.

1. **Sticky navbar** — soft cream bg with backdrop blur, "Buriram" wordmark in Cormorant + small "泰国小小碗" subtitle in Noto Serif SC, links right (Home · Menu · Story · Visit), Thai-chili-red WhatsApp button
2. **Hero — full-viewport, intimate, bowl-led**
   - Background: large overhead photo of multiple small Thai bowls on table (the small-bowl concept made visual)
   - Eyebrow: "WANGSA MAJU · THAI × CHINESE · 泰国小小碗"
   - Headline: **"Thai flavors. Chinese bowls."**
   - Subhead: "Small portions, bigger spread. Order three, share four. Authentic Thai cuisine served the way you'd actually want to eat it — a little bit of everything."
   - CTAs: "See the Menu" (chili red filled) + "Find Us" (outline)
   - Subtle Caveat handwritten "since 2024" annotation rotated -3°
3. **The Concept section** (the small-bowl story)
   - Eyebrow: "WHY SMALL BOWLS"
   - Heading: "Small bowls. Big choices."
   - 2-col layout: text + photo of multiple bowls
   - Body: "Most Thai meals come in big plates that fill up fast. We do it differently — small bowls, real flavors, ordered like dim sum. Pick four. Share five. Try everything."
4. **Buriram, the Place** section (heritage/credibility)
   - Eyebrow: "WHERE THE NAME COMES FROM"
   - Heading: "Buriram is a real place in northeast Thailand."
   - Body: "It's a province in the Isan region — known for somtum, larb, grilled meats over open flame. We didn't pick the name lightly. The food we serve has roots there."
   - Optional: subtle map illustration showing Buriram province
5. **What's in the bowls** (signature dishes section)
   - Heading: "What ends up on the table."
   - 4-card grid showing signature small-bowl dishes (TBD with owner — placeholder examples: Somtum · Larb Gai · Tom Yum Goong · Basil Stir-Fry)
   - Each card: bowl photo (top-down 1:1 ratio for symmetry), Thai name + English translation, 1-line description, price
6. **The Drinks** section (smaller, warm)
   - Heading: "Plus the drinks that pair."
   - 2-col: Thai milk tea + Thai green tea + lime soda + photo
7. **Reviews block** — 3 selected reviews + "4.6 / 5 from 150+ diners on Google · 100% recommend on Facebook"
8. **Find Us teaser** — map preview, hours, Get Directions
9. **Footer** — wordmark, address, hours, socials (IG @buriram_restaurant, FB), tagline "Thai flavors. Chinese bowls. 泰国小小碗."

### Page 2 — Menu (`/menu`)

- **Menu Hero** — soft hero, headline "The Menu" + subhead "Small bowls, big variety. Order three, share five."
- **Categories (sticky tabs, chili-red underline on active):**
  - Salads (Yum) · Soups (Tom) · Stir-Fries · Curries · Grilled (Yang) · Rice & Noodles · Sides · Drinks · Desserts
- **Filter chips:** Spicy 🌶️ · Vegetarian · Signature · Cold Dish (multi-select)
- **Menu cards:**
  - Cream cards with subtle ceramic-blue accent border
  - Photo (1:1 square — emphasizes bowl shape), Thai name in Cormorant + English translation in italic, ingredient list, price
  - Signature items get small chili-red "Signature" tag
  - Hover: gentle lift + ceramic-blue shadow
  - Stagger fade-up on scroll
- **Order flow callout** — "Most diners order 3-4 small bowls between 2 people. Mix salads, soups, and grilled. Don't forget rice."
- **Order CTA block** at bottom — "Hungry?" + WhatsApp + "Visit Us" buttons

### Page 3 — Story & Visit (`/story`)

- **Story Hero** — "We named ourselves after a province." + subhead
- **The Origin** — 2-col text + photo
  - Where the founders trained / who taught the recipes
  - Why the small-bowl concept
  - When they opened (verify)
- **The Province** — section about Buriram region
  - Northeast Thailand, Isan cuisine, somtum/larb/grilled origins
  - Why this region specifically vs Bangkok-Thai
- **The Fusion** — section explaining the Thai × Chinese angle
  - How it works on the plate
  - What dishes exemplify the fusion best
- **The Space** — full-bleed interior carousel (small intimate space)
  - Caption: "Small space. Small bowls. Big flavors."
- **Visit Us** — embedded Google Maps + address, hours, phone, parking note
- **Contact form** (Formspree) — Name, phone/email, message, optional reservation date
- **Social block** — Instagram (@buriram_restaurant), Facebook
- SEO meta for story page

---

## 5. Animation Plan

This brand = **gentle, considered, fusion-elegant** — not loud. Bowls settle, herbs drift, ceramic glints.

| Element | Animation | Detail |
|---------|-----------|--------|
| Hero text | Soft fade-up + slight drift | 700ms ease-out |
| Hero photo | Scale 1.03 → 1.0 settle on load | 1000ms |
| The Concept section | Word-by-word fade-in for italic text | poetic |
| Bowl cards | Soft fade-up on scroll | 500ms |
| Bowl card hover | Gentle lift + ceramic-blue shadow + 1.02 zoom | 350ms |
| Buriram province section | Subtle parallax-like text-photo offset | desktop only |
| Menu cards | Staggered fade-up | 400ms |
| Menu tabs | Animated underline (`layoutId`) | smooth |
| Section transitions | Astro view transitions | built-in |
| Navbar scroll | Backdrop blur + bottom hairline | 250ms |
| WhatsApp float | NO bounce — static, considered | restraint |

**Rules:**
- Slow, considered animations (500-700ms+)
- No bouncy springs — use ease-in-out
- Respect `prefers-reduced-motion`
- No marquees — this isn't a late-night brand
- Photography is the star — animations are quiet support

---

## 6. Copywriting

### Voice

- Bilingual-aware, slightly poetic
- Considered, not chatty
- Embraces small-bowl philosophy — "less is more variety"
- Doesn't over-claim (newer brand, smaller scale)
- Cultural pride without lecturing

### Sample Copy

**Hero**
> WANGSA MAJU · THAI × CHINESE · 泰国小小碗
> # Thai flavors. Chinese bowls.
> Small portions, bigger spread. Order three, share four. Authentic Thai cuisine served the way you'd actually want to eat it — a little bit of everything.
>
> [See the Menu] [Find Us]

**The Concept section**
> # Small bowls. Big choices.
> Most Thai meals come in big plates that fill up fast. We do it differently — small bowls, real flavors, ordered like dim sum. Pick four. Share five. Try everything.

**Buriram, the Place section**
> # Buriram is a real place in northeast Thailand.
> It's a province in the Isan region — known for somtum, larb, grilled meats over open flame. We didn't pick the name lightly. The food we serve has roots there.

**What's in the bowls intro**
> What ends up on the table.
> Small bowls, big personalities. Salads with bite, soups with depth, grilled meats with smoke.

**The Drinks section**
> Plus the drinks that pair.
> Thai milk tea, Thai green tea, lime soda — sweet, sour, cold. Whatever cools off the chili.

**Order flow note (menu page)**
> A note from us:
> Most diners order 3-4 small bowls between 2 people. Mix a salad, a soup, a stir-fry, a grilled. Don't forget rice. Add a Thai milk tea — you'll need it for the spicy ones.

**Story page hero**
> # We named ourselves after a province.
> Buriram, northeast Thailand. Isan country. Where the somtum is real, the larb is fresh, and the grilled meats come straight off the flame. The food we serve learned to walk there.

**Footer tagline**
> Thai flavors. Chinese bowls. 泰国小小碗.

**WhatsApp CTA**
> WhatsApp us — for table holds, larger group orders, or to ask if today's somtum is fiery.

### SEO Meta

- **Home title:** `Buriram Restaurant | Thai × Chinese Cuisine in Wangsa Maju, KL | 泰国小小碗`
- **Home meta description:** `Authentic Thai cuisine served in small Chinese-style bowls. Order 3-4, share between friends. Isan flavors — somtum, larb, grilled meats. Wangsa Maju, KL.`
- **Schema:** Restaurant, servesCuisine: ["Thai", "Chinese", "Isan"], priceRange: "$$"
- **OG image:** Top-down hero shot of multiple small Thai bowls on a table

---

## 7. UI/UX Principles For This Brand

1. **The small-bowl concept is the brand** — every dish photo is a top-down 1:1 square showing the bowl
2. **Bilingual marketing is intentional** — show Chinese characters as decorative accents in 2-3 places (brand mark, hero subtitle, footer); body copy stays English
3. **The Buriram province connection is gold** — most Thai restaurants are vague Bangkok-style. Owning a regional identity (Isan/Northeast) is differentiation.
4. **Fusion is intentional, not confused** — copy explains the Thai × Chinese choice deliberately
5. **Smaller brand = humbler tone** — don't over-claim. Embrace the "newer, growing" positioning.
6. **Order-flow guidance** is unique value — most menus are static lists. Offering "here's how to order" is helpful design.
7. **DON'T assume halal status** — clarify with owner. If non-halal, don't add halal language. If halal-certified, surface clearly.
8. **Photography is intimate, not abundant** — small spread, careful composition, ceramic bowl detail visible
9. **Mobile-first because Wangsa Maju locals + students** — most diners are within walking/short driving distance
10. **Newer brand = SEO leverage opportunity** — they're not yet ranking for "Thai Wangsa Maju" or "Isan KL". Site can change that.

---

## 8. Content Needed From Owner

1. **High-res hero photo of multiple small bowls on table** — the brand's signature visual
2. **Photos of signature dishes** — somtum, larb, tom yum, grilled chicken, etc. (verify which are signatures)
3. **Photos of any Thai × Chinese fusion creations** — these are the brand differentiator
4. **Interior photos** — show the small intimate space
5. **Owner / chef photo** if comfortable (humanizes a smaller brand)
6. **Confirmed full menu with prices, Thai names, English translations**
7. **HALAL STATUS confirmation** — critical, do not assume
8. **Confirmed hours** (research shows 11am-10pm, verify)
9. **Confirmed phone** (012-833 1059)
10. **Logo files** if available (vector preferred)
11. **Origin story** — when did Buriram open, who founded it, what's the connection to actual Buriram province (have they trained there? Family from there?)
12. **Permission to use the "Buriram is in Isan" angle** — ensure it's authentic before publishing

---

## Phase-by-Phase Development Checklist

> Paste into Claude Code phase by phase. One at a time.

### Phase 0 — Project Setup

- [ ] Initialize Astro project with TypeScript strict mode
- [ ] Add Tailwind: `npx astro add tailwind`
- [ ] Add React: `npx astro add react`
- [ ] Install: `framer-motion`, `lucide-react`
- [ ] Install fonts via fontsource: `@fontsource/cormorant-garamond`, `@fontsource/inter`, `@fontsource/noto-serif-sc`, `@fontsource/caveat`
- [ ] Folder structure:
  ```
  src/
    components/
    sections/
    layouts/BaseLayout.astro
    pages/index.astro, menu.astro, story.astro
    styles/global.css
    assets/images/{bowls,interior,province,logo}
    data/menu.json, reviews.json, site.json
  public/
  ```
- [ ] Init Git, `.gitignore`, first commit
- [ ] Create `.env.example`: `PUBLIC_WHATSAPP_NUMBER`, `PUBLIC_FORMSPREE_ID`

### Phase 1 — Design System

- [ ] Extend Tailwind theme with palette (soft-cream, pure-cream, deep-indigo, dusty-slate, thai-chili-red, lemongrass-green, lemon-gold, ceramic-blue, charred-black)
- [ ] Configure font families: `font-display` (Cormorant Garamond), `font-body` (Inter), `font-zh` (Noto Serif SC — for brand accents only), `font-accent` (Caveat)
- [ ] Custom Tailwind animations: `fade-up-soft`, `gentle-rise`, `letter-fade`
- [ ] Create `BaseLayout.astro` — light theme default, fonts loaded with `font-display: swap`
- [ ] Create reusable components:
  - [ ] `Button.astro` — variants: primary (chili-red filled), outline (chili-red border), ghost
  - [ ] `Container.astro` — max-w-7xl, generous padding
  - [ ] `SectionHeading.astro` — eyebrow + serif headline + subhead
  - [ ] `Eyebrow.astro` — uppercase letter-spaced text
  - [ ] `BowlCard.astro` — dish card with 1:1 bowl photo, Thai name, English translation, ingredients, price
  - [ ] `PullQuote.astro` — large italic Cormorant quote + attribution
- [ ] Create `Navbar.astro` — soft-cream bg with backdrop blur, "Buriram" wordmark in Cormorant + small "泰国小小碗" subtitle in Noto Serif SC, mobile hamburger drawer
- [ ] Create `Footer.astro` — charred-black bg, soft-cream text, 3-col, tagline "Thai flavors. Chinese bowls. 泰国小小碗."
- [ ] Create `WhatsAppFloat.astro` — fixed bottom-right, chili-red circle, no bounce
- [ ] Test responsiveness at 375px / 768px / 1440px

### Phase 2 — Data Files

- [ ] Create `src/data/site.json` — name "Buriram Restaurant", tagline, address (verify with owner — research shows "Kuala Lumpur" generic), phone (012-833 1059), WhatsApp, hours object (11am-10pm), social URLs (@buriram_restaurant IG, FB), Google Maps embed URL
- [ ] Create `src/data/menu.json` with categories: `Salads (Yum)`, `Soups (Tom)`, `Stir-Fries`, `Curries`, `Grilled (Yang)`, `Rice & Noodles`, `Sides`, `Drinks`, `Desserts`. Each item: name (Thai original), englishName, description, price, image, tags (spicy/vegetarian/signature/cold), optional `signature: true`
- [ ] Pre-populate with known/likely menu items (somtum, larb, tom yum, pad thai, basil chicken, etc.) — flag for owner verification
- [ ] Create `src/data/reviews.json` — selected Google + Facebook reviews highlighting the small-bowl concept and authentic Thai flavors

### Phase 3 — Home Page (`/`)

- [ ] **Hero section** (`src/sections/Hero.astro`):
  - Full viewport, soft-cream background
  - Background: large top-down hero photo of multiple small Thai bowls on table
  - Eyebrow: "WANGSA MAJU · THAI × CHINESE · 泰国小小碗" — chili-red, tracking-widest, the Chinese characters in Noto Serif SC
  - Headline: "Thai flavors. Chinese bowls." — Cormorant, 64px+ desktop / 40px mobile, deep-indigo
  - Subhead: 18-20px, max-w 540px, dusty-slate
  - CTAs: "See the Menu" (chili-red filled) + "Find Us" (outline)
  - Caveat handwritten "since 2024" rotated -3°
  - Framer Motion: gentle stagger entrance
- [ ] **The Concept** (`src/sections/TheConcept.astro`):
  - Eyebrow: "WHY SMALL BOWLS"
  - Heading: "Small bowls. Big choices."
  - 2-col layout: text + photo of multiple bowls
  - Body paragraph
- [ ] **Buriram, the Place** (`src/sections/BuriramPlace.astro`):
  - Eyebrow: "WHERE THE NAME COMES FROM"
  - Heading: "Buriram is a real place in northeast Thailand."
  - Body about Isan region
  - Optional subtle map illustration of Buriram province
- [ ] **What's in the bowls** (`src/sections/SignatureBowls.astro`):
  - Heading: "What ends up on the table."
  - 4-card grid using `BowlCard` component (1:1 square photos)
- [ ] **The Drinks** (`src/sections/TheDrinks.astro`):
  - Heading: "Plus the drinks that pair."
  - 2-col: drinks list + photo
- [ ] **Reviews** (`src/sections/Reviews.astro`):
  - Heading: "4.6 / 5 from 150+ diners on Google · 100% recommend on Facebook"
  - 3 review cards
- [ ] **Find Us teaser** (`src/sections/FindUsTeaser.astro`):
  - Map preview + hours + Get Directions
- [ ] Wire `pages/index.astro`, add SEO meta + OG tags

### Phase 4 — Menu Page (`/menu`)

- [ ] **Menu Hero** — soft hero, headline "The Menu", subhead "Small bowls, big variety. Order three, share five."
- [ ] **Category Tabs** (`src/components/MenuTabs.tsx`) — React island, sticky, chili-red underline animated with `layoutId`
- [ ] **Filter chips** — Spicy 🌶️, Vegetarian, Signature, Cold Dish (multi-select)
- [ ] **Menu grid** (`src/components/MenuGrid.tsx`):
  - 1 / 2 / 3 col responsive
  - Cream cards with ceramic-blue accent border
  - Photo (1:1 square — emphasizes bowl shape), Thai name in Cormorant, English translation in italic, ingredients, price
  - Signature items get chili-red "Signature" badge
  - Hover: lift, ceramic-blue shadow, slight zoom
  - Fade-up stagger on scroll
- [ ] **Order Flow Callout** (mid-page) — block with "A note from us" copy about ordering 3-4 bowls
- [ ] **Order CTA block** at bottom — "Hungry?" + WhatsApp + "Visit Us" buttons
- [ ] SEO meta for menu page

### Phase 5 — Story Page (`/story`)

- [ ] **Story Hero** — "We named ourselves after a province." + subhead
- [ ] **The Origin** — 2-col text + photo, when/why Buriram opened
- [ ] **The Province** — section about Buriram region in Isan, NE Thailand
- [ ] **The Fusion** — explain Thai × Chinese fusion approach
- [ ] **The Space** — full-bleed interior carousel
  - Caption: "Small space. Small bowls. Big flavors."
- [ ] **Visit Us** — Google Maps embed + address, hours, phone, parking
- [ ] **Contact form** (`src/components/ContactForm.tsx`):
  - Fields: name, phone/email, message, optional reservation date
  - Formspree submit
- [ ] **Social block** — Instagram (@buriram_restaurant), Facebook
- [ ] SEO meta for story page

### Phase 6 — Animations Polish

- [ ] All scroll reveals: `whileInView` + `viewport={{ once: true, margin: "-50px" }}`
- [ ] Hero gentle stagger
- [ ] The Concept: word-by-word reveal of italic poetic line
- [ ] Bowl card hover transitions (lift + ceramic-blue shadow + zoom)
- [ ] Buriram province section subtle parallax (desktop only)
- [ ] Navbar scroll backdrop blur + hairline
- [ ] Menu tab `layoutId` for underline
- [ ] CTA hover transitions
- [ ] `useReducedMotion()` to disable variants
- [ ] Slow 3G test

### Phase 7 — Images & Assets

- [ ] Organize: `bowls/`, `interior/`, `province/`, `logo/`
- [ ] Astro `<Image>` for all photos, WebP, lazy load (except hero)
- [ ] Hero `<Picture>` with art-directed crops
- [ ] Descriptive alt text everywhere
- [ ] OG image (1200x630): top-down small bowls spread + wordmark overlay
- [ ] Favicon set
- [ ] Optional: subtle Buriram province map SVG illustration
- [ ] **If photos blurry from internet sources:** run through Upscayl 2x first

### Phase 8 — SEO & Schema

- [ ] Per-page meta titles + descriptions (Section 6)
- [ ] OG tags
- [ ] Twitter card tags
- [ ] Canonical URLs
- [ ] JSON-LD `Restaurant` schema:
  - Name, alternateName "泰国小小碗"
  - Address, phone
  - openingHoursSpecification (11am-10pm)
  - priceRange "$$"
  - servesCuisine ["Thai", "Chinese", "Isan"]
  - aggregateRating (4.6, 150+)
- [ ] `robots.txt` allow all
- [ ] Sitemap via `@astrojs/sitemap`

### Phase 9 — Performance & Accessibility

- [ ] Lighthouse 95+ all categories
- [ ] All images lazy except hero
- [ ] Font-display: swap
- [ ] Color contrast WCAG AA — verify chili-red on cream backgrounds
- [ ] Keyboard nav works
- [ ] Icon-only buttons get `aria-label`
- [ ] Visible focus states (chili-red outline)
- [ ] VoiceOver / NVDA test — Chinese characters need proper `lang="zh"` attributes for screen readers

### Phase 10 — Deployment

- [ ] Push to GitHub
- [ ] Connect Vercel, configure build
- [ ] Set env vars
- [ ] Test on real iPhone Safari + Android Chrome
- [ ] Custom domain wiring
- [ ] Vercel Analytics on
- [ ] UptimeRobot monitor

### Phase 11 — QA Before Handoff

- [ ] All browsers
- [ ] WhatsApp opens with pre-filled message
- [ ] Contact form delivers
- [ ] Google Maps embed loads
- [ ] All prices verified
- [ ] Chinese characters render correctly across browsers
- [ ] Proofread — no typos, no placeholder
- [ ] **HALAL status verified** before any halal language appears (or no halal language used)
- [ ] 404 page exists
- [ ] 3G throttle test

### Phase 12 — Handoff

- [ ] Client README — change requests, retainer scope, domain renewal
- [ ] Send: live URL, page summary, screenshots, invoice
- [ ] Tag v1.0.0 in Git
- [ ] Add to portfolio as case study

---

## Notes for Claude Code

- Read previous phase output before next phase
- Commit after each phase: `feat(phase-3): home page sections`
- Default mood: bilingual-fusion, small-curated, intimate, Thai-Chinese-bridge, considered
- This is NOT a loud Thai chain — avoid temple gold, generic tropical pinks
- Photography is intimate top-down 1:1 bowl shots — not big-plate spreads
- 3 static pages, no CMS, no auth
- Placeholder images: top-down small Thai bowl shots, ceramic table settings, Isan-region food photography from Unsplash
- **Language rule:** English first for all body copy. Chinese characters used as decorative accents in 2-3 places only (brand mark "泰国小小碗" in nav and footer, hero eyebrow). Don't sprinkle Chinese phrases throughout. Thai dish names (somtum, larb, tom yum) stay in original spellings.
- **Halal rule:** DO NOT add halal language unless owner confirms halal certification. Many Chinese-Malaysian Thai restaurants are non-halal. Verify before publishing.
- **Bowl-forward rule:** Every dish photo must be 1:1 square top-down shot showing the bowl. Don't crop bowls to fit other ratios.

---

## Pricing Suggestion

Smaller brand, lower review count, mid-tier project.

| Item | Price (RM) |
|------|-----------|
| 3-page landing site (MVP) | 2,500 |
| Domain (.com, 1 year) | 60 |
| Hosting (Vercel free) | 0 |
| Google Workspace email (1 user, 1 year) | 120 |
| **One-time total** | **~2,700** |
| Monthly maintenance retainer | 150/month |

Portfolio discount: RM2,000.

**Strong upsell paths:**
- Photography session for bowl shots (specifically): +RM500 — this brand needs the visual asset
- Bilingual EN/ZH toggle: +RM800
- Reservation form: +RM600
- Loyalty card / regulars program: +RM1,000
- Monthly content support: +RM350/month
- Order pre-booking system: +RM800

---

## Pitch Angle For Buriram

The strongest angle is **growing-brand SEO + concept clarity**:

> "Buriram has something special — the Thai × Chinese fusion angle, the small-bowl concept, the authentic Isan name. But right now, when someone Googles 'small bowl Thai Wangsa Maju' or 'Isan food KL,' they don't find you. Most of your competitors are vague Bangkok-Thai — your regional identity is actually a SEO advantage if a website surfaces it. I'd love to build that website."

Works because:
- Honors the small-but-distinctive positioning
- Specific (Isan, small-bowl, Thai × Chinese)
- Frames the website as growth lever, not vanity
- Speaks to a smaller, hungrier brand without condescension

**Bonus angle:**
> "I noticed your social presence is bilingual — Chinese and English. Most Thai restaurants in KL pick one. The website can lean into that the same way, and reach both audiences from one home."

Shows attention to their existing marketing and respects their bilingual approach.
