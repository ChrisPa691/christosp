# Portfolio Project - TODO List (Match Reference Design: "Picture 3")

This TODO replaces the previous list to align your homepage with the **dark, split-hero** layout and **minimal card grid** style you referenced.  
(Original TODO source) fileciteturn1file0

---

## 0) Global Setup (Foundation)

- [ ] Set site container + spacing system (max width, section padding, consistent gaps)
- [ ] Use **near-black** background (avoid pure #000), subtle borders, soft shadows
- [ ] Confirm typography scale (H1/H2/body), line-heights, and consistent font weights
- [ ] Add reusable primitives:
  - [ ] `Container` (max-w + padding)
  - [ ] `SectionHeader` (title + subtitle)
  - [ ] `Card` (border + hover)
  - [ ] `Button` (primary/secondary)
  - [ ] `Pill` (tag badge)

---

## 1) Navbar (Minimal + Sticky)

- [ ] Sticky navbar with subtle bottom border
- [ ] Left: `Christos` wordmark/logo
- [ ] Right: `Home`, `Projects`, `Contact`
- [ ] Add social icons in navbar (optional): GitHub, LinkedIn
- [ ] Add theme toggle **only if** the reference design includes it (keep minimal)

**DoD**
- Keyboard navigable
- Active link state

---

## 2) Home Page — Split Hero (Core Match to Picture 3)

### 2.1 Hero Layout
- [ ] Create split hero grid (2 columns on desktop, 1 column on mobile)
- [ ] Left panel: **portrait/hero visual card**
  - [ ] Add a portrait placeholder (use a neutral image for now)
  - [ ] Add subtle stats list / highlights inside the panel (as per reference style)
- [ ] Right panel: headline + short paragraph + CTA

### 2.2 Hero Content (Portfolio-accurate)
- [ ] Headline: `I'm Christos` + role line (e.g., Full-Stack Developer / CS Student)
- [ ] Add 1–2 lines value statement (what you build + focus)
- [ ] Primary CTA: `View Projects`
- [ ] Secondary CTA: `Get in touch` (or `Contact`)
- [ ] Social links row (icons) under CTAs

**DoD**
- Looks “premium”: large type, lots of negative space, subtle accent color only on CTAs

---

## 3) “What I Do” / Services Cards (Matches Dark Portfolio Patterns)

- [ ] Add 3 service cards under hero (example: Frontend, Backend, DevOps)
- [ ] Each card:
  - [ ] Icon (simple)
  - [ ] Title
  - [ ] 1–2 line description
- [ ] Card hover effect (border/translate)

**DoD**
- 3 columns desktop → 1 column mobile
- Consistent height

---

## 4) Featured Work (Homepage Projects Grid)

- [ ] Add “Featured Projects” section with 2–3 cards
- [ ] Each project card:
  - [ ] Project name
  - [ ] 1–2 line description
  - [ ] Tech tags (pills)
  - [ ] Buttons: `GitHub` + `Live Demo`
- [ ] Use real projects:
  - [ ] Flowboard (Kanban)
  - [ ] christosp (Portfolio)
  - [ ] Fundflow (Coming soon placeholder if not built yet)

**DoD**
- Cards match the same dark surface + border style as hero/services

---

## 5) “My History” / Experience (Optional, but matches reference vibe)

- [ ] Add a compact “My History” section:
  - [ ] 3–5 timeline entries (year + short statement)
  - [ ] Keep it very short (no paragraphs)
- [ ] Include only truthful milestones (coursework + major project milestones)

**DoD**
- Clean vertical rhythm, not cluttered

---

## 6) Contact CTA Section (Not a Map)

> The reference-style landing pages usually end with a strong CTA card, not a full map.

- [ ] Add final CTA block/card:
  - [ ] Title: “Let’s build something”
  - [ ] Short line + email button
  - [ ] Secondary: GitHub / LinkedIn icons
- [ ] Contact page can still have a form, but homepage should stay minimal

---

## 7) Projects Page (Grid + Filters)

- [ ] Projects page header (title + 1-line intro)
- [ ] Project grid (same card component as homepage)
- [ ] Optional: simple filter pills (Frontend / Backend / DevOps)
- [ ] Ensure every project has:
  - [ ] GitHub link
  - [ ] Demo link (or “Coming soon”)
  - [ ] Tech tags
  - [ ] Screenshot (optional later)

---

## 8) Contact Page (Simple + Professional)

- [ ] Minimal contact layout:
  - [ ] Left: contact info + socials
  - [ ] Right: contact form
- [ ] Form requirements:
  - [ ] name, email, message
  - [ ] validation
  - [ ] loading + success + error states
- [ ] Choose submission approach:
  - [ ] Option A: `mailto:` (fastest)
  - [ ] Option B: API route (recommended)
  - [ ] Option C: Email service (EmailJS/Resend)

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
