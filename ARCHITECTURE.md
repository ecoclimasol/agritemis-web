# Agritemis — Site Architecture

---

## Page Tree

```
/[locale]/
├── page.tsx                    → Homepage (9 sections)
├── vitiscore/page.tsx          → VitiScore product page
├── indicator-request/page.tsx  → Indicator documentation request form
├── mission/page.tsx            → NEW — Company mission & team
├── indicateurs/page.tsx        → NEW — All 5 indicators deep-dive
├── contact/page.tsx            → NEW — Contact form + info
├── blog/page.tsx               → PLACEHOLDER — Blog index (coming soon)
├── planetscore/page.tsx        → PLACEHOLDER — PlanetScore (coming soon)
├── chatbot/page.tsx            → PLACEHOLDER — AI Chatbot (coming soon)
├── layout.tsx                  → Root layout (Navbar, Footer, i18n, fonts, metadata)
├── loading.tsx                 → NEW — Loading skeleton
├── error.tsx                   → NEW — Error boundary
└── not-found.tsx               → NEW — 404 page
```

## URL Structure Per Locale

| Page | FR (default) | EN | ES |
|------|-------------|----|----|
| Homepage | `/fr` | `/en` | `/es` |
| VitiScore | `/fr/vitiscore` | `/en/vitiscore` | `/es/vitiscore` |
| Indicator Request | `/fr/indicator-request` | `/en/indicator-request` | `/es/indicator-request` |
| Mission | `/fr/mission` | `/en/mission` | `/es/mission` |
| Indicateurs | `/fr/indicateurs` | `/en/indicateurs` | `/es/indicateurs` |
| Contact | `/fr/contact` | `/en/contact` | `/es/contact` |
| Blog | `/fr/blog` | `/en/blog` | `/es/blog` |
| PlanetScore | `/fr/planetscore` | `/en/planetscore` | `/es/planetscore` |
| ChatBot | `/fr/chatbot` | `/en/chatbot` | `/es/chatbot` |

## Navigation Structure

### Primary Nav (Header)

```
[Logo]  Home  VitiScore  Indicateurs  Mission  Contact  [FR|EN|ES]
```

- Logo links to `/`
- Active link has green underline indicator
- Mobile: hamburger menu with slide-in drawer
- Language selector: dropdown showing current locale flag + code

### Footer Nav

```
Column 1: Brand + Mission tagline
Column 2: Navigation — Home, VitiScore, Indicateurs, Mission
Column 3: Contact — Address, Phone, Email
Column 4: Follow Us — LinkedIn, Email + "Coming soon: Blog, PlanetScore, ChatBot IA"
```

- Remove links to non-functional pages (Blog, PlanetScore, ChatBot)
- Add them back as "Coming soon" text labels
- All links use `@/i18n/navigation.client` Link (fix current `next/link` usage)

## Component Architecture

```
src/components/
├── ui/                              # Atomic components (design system primitives)
│   ├── Button.tsx                   # primary, secondary, ghost, CTA variants (CVA)
│   ├── Card.tsx                     # feature, indicator, audience, product variants
│   ├── Badge.tsx                    # status, category badges
│   ├── Input.tsx                    # text, email, tel with validation states
│   ├── SectionHeader.tsx            # eyebrow + title + subtitle pattern
│   └── index.ts                     # barrel export
│
├── layout/                          # Structural components
│   ├── Navbar.tsx                   # responsive nav with hamburger + locale switcher
│   ├── Footer.tsx                   # 4-column grid footer
│   ├── Section.tsx                  # wrapper with consistent padding + scroll reveal
│   └── index.ts
│
├── sections/                        # Page-level section blocks
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── SocialProofSection.tsx   # infinite marquee with progressive blur
│   │   ├── SolutionSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ValuePropositionSection.tsx
│   │   ├── ProblemStatementSection.tsx
│   │   ├── IndicatorsSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── CtaFinalSection.tsx
│   │   └── index.ts
│   └── vitiscore/
│       ├── VitiScoreHero.tsx
│       ├── FeatureGrid.tsx
│       ├── HowItWorks.tsx
│       ├── AudienceSection.tsx
│       └── index.ts
│
└── shared/                          # Cross-cutting components
    ├── LanguageSwitcher.tsx          # dropdown with locale flag
    ├── Logo.tsx                     # brand logo with consistent sizing
    ├── InfiniteSlider.tsx           # reusable marquee animation
    ├── ScrollReveal.tsx             # intersection observer reveal wrapper
    └── index.ts
```

## Internal Linking Strategy

- Every indicator card links to `/indicator-request`
- "Talk to an expert" CTA → `/contact` (not `#contact`)
- "Request a demo" CTA → `/contact`
- VitiScore CTAs → `/contact` with a query param `?subject=vitiscore`
- Mission card in SolutionSection → `/mission`
- Footer nav links cover all live pages
- Indicator names in IndicatorsSection → `/indicateurs` (deep-dive page)

## Server vs Client Component Boundaries

| Component | Type | Reason |
|-----------|------|--------|
| `layout.tsx` | Server | Metadata, font loading, i18n provider |
| `page.tsx` (Home) | Server | Passes translated strings to sections |
| `Navbar.tsx` | Client | Mobile menu toggle, scroll listener, locale switcher |
| `Footer.tsx` | Client | Uses `useTranslations` |
| `HeroSection.tsx` | Client | Animations |
| `SocialProofSection.tsx` | Client | Marquee animation |
| `ServicesSection.tsx` | Server | Static content, translated via props |
| `SolutionSection.tsx` | Server | Static content |
| `ValuePropositionSection.tsx` | Client | Hover animations |
| `IndicatorsSection.tsx` | Server | Static grid |
| `Card.tsx`, `Button.tsx` | Client | Interactive hover/click states |
| `Section.tsx` (with scroll reveal) | Client | Intersection Observer |
| `indicator-request/page.tsx` | Client | Form state management |
| `vitiscore/page.tsx` | Server | Extract sub-components as client where needed |

## Dependencies to Add

| Package | Purpose |
|---------|---------|
| `class-variance-authority` | Component variant management (Button, Card, Badge) |
| `@radix-ui/react-slot` | Polymorphic component composition (`asChild` pattern) |
| `framer-motion` | Scroll animations, marquee slider, reveal effects |
| `react-use-measure` | Measure DOM elements for slider calculations |
| `clsx` + `tailwind-merge` | Utility for merging Tailwind classes (`cn()` helper) |
