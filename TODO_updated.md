# Portfolio Project - TODO List (Match Reference Design: "Picture 3")

This TODO replaces the previous list to align your homepage with the **dark, split-hero** layout and **minimal card grid** style you referenced.  
(Original TODO source) fileciteturn1file0

---

## 0) Global Setup (Foundation)

- [x] Set site container + spacing system (max width, section padding, consistent gaps)
- [x] Use **near-black** background (avoid pure #000), subtle borders, soft shadows
- [x] Confirm typography scale (H1/H2/body), line-heights, and consistent font weights
- [x] Add reusable primitives:
  - [x] `Container` (max-w + padding)
  - [x] `SectionHeader` (title + subtitle)
  - [x] `Card` (border + hover)
  - [x] `Button` (primary/secondary)
  - [x] `Pill` (tag badge)

---

## 1) Navbar (Minimal + Sticky)

- [x] Sticky navbar with subtle bottom border
- [x] Left: `Christos` wordmark/logo
- [x] Right: `Home`, `Projects`, `Contact`
- [x] Add social icons in navbar (optional): GitHub, LinkedIn
- [x] Add theme toggle **only if** the reference design includes it (keep minimal)

**DoD**
- [x] Keyboard navigable
- [x] Active link state

---

## 2) Home Page — Split Hero (Core Match to Picture 3)

### 2.1 Hero Layout
- [x] Create split hero grid (2 columns on desktop, 1 column on mobile)
- [x] Left panel: **portrait/hero visual card**
  - [x] Add a portrait placeholder (use a neutral image for now)
  - [x] Add subtle stats list / highlights inside the panel (as per reference style)
- [x] Right panel: headline + short paragraph + CTA

### 2.2 Hero Content (Portfolio-accurate)
- [x] Headline: `I'm Christos` + role line (e.g., Full-Stack Developer / CS Student)
- [x] Add 1–2 lines value statement (what you build + focus)
- [x] Primary CTA: `View Projects`
- [x] Secondary CTA: `Get in touch` (or `Contact`)
- [x] Social links row (icons) under CTAs

**DoD**
- [x] Looks "premium": large type, lots of negative space, subtle accent color only on CTAs

---

## 3) “What I Do” / Services Cards (Matches Dark Portfolio Patterns)

- [x] Add 3 service cards under hero (example: Frontend, Backend, DevOps)
- [x] Each card:
  - [x] Icon (simple)
  - [x] Title
  - [x] 1–2 line description
- [x] Card hover effect (border/translate)

**DoD**
- [x] 3 columns desktop → 1 column mobile
- [x] Consistent height

---

## 4) Featured Work (Homepage Projects Grid)

- [x] Add “Featured Projects” section with 2–3 cards
- [x] Each project card:
  - [x] Project name
  - [x] 1–2 line description
  - [x] Tech tags (pills)
  - [x] Buttons: `GitHub` + `Live Demo`
- [x] Use real projects:
  - [x] Flowboard (Kanban)
  - [x] christosp (Portfolio)
  - [x] Fundflow (Coming soon placeholder if not built yet)

**DoD**
- [x] Cards match the same dark surface + border style as hero/services

---

## 5) “My History” / Experience (Optional, but matches reference vibe)

- [x] Add a compact “My History” section:
  - [x] 3–5 timeline entries (year + short statement)
  - [x] Keep it very short (no paragraphs)
- [x] Include only truthful milestones (coursework + major project milestones)

**DoD**
- [x] Clean vertical rhythm, not cluttered

---

## 6) Contact CTA Section (Not a Map)

> The reference-style landing pages usually end with a strong CTA card, not a full map.

- [x] Add final CTA block/card:
  - [x] Title: “Let’s build something”
  - [x] Short line + email button
  - [x] Secondary: GitHub / LinkedIn icons
- [x] Contact page can still have a form, but homepage should stay minimal

---

## 7) Projects Page (Grid + Filters)

- [x] Projects page header (title + 1-line intro)
- [x] Project grid (same card component as homepage)
- [x] Optional: simple filter pills (Frontend / Backend / DevOps)
- [x] Ensure every project has:
  - [x] GitHub link
  - [x] Demo link (or “Coming soon”)
  - [x] Tech tags
  - [ ] Screenshot (optional later)

---

## 8) Contact Page (Simple + Professional)

- [x] Minimal contact layout:
  - [x] Left: contact info + socials
  - [x] Right: contact form
- [x] Form requirements:
  - [x] name, email, message
  - [x] validation
  - [x] loading + success + error states
- [x] Choose submission approach:
  - [x] Option A: `mailto:` (fastest)
  - [x] Option B: API route (recommended)
  - [x] Option C: Email service (EmailJS/Resend)

---

## 9) SEO + Quality

- [ ] Update metadata (title, description)
- [ ] OpenGraph image (basic is fine)
- [ ] Sitemap/robots
- [ ] Lighthouse pass (Performance/Accessibility best effort)
- [ ] Alt text for images
- [ ] Ensure all links work (GitHub, demos, socials)

---

## 10) Deployment

- [ ] Vercel deploy
- [ ] Set env vars (if contact form uses API)
- [ ] Add custom domain (optional)
- [ ] Update README with live URL + screenshots

---

## Notes
- Cross off items with `[x]` as you complete them.
- Keep the design *minimal*: if a section doesn’t add portfolio value, remove it.
