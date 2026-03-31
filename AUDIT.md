# Agritemis Website Audit

**Date:** 2026-03-31
**Audited by:** ui-ux-pro-max, web-design-guidelines, seo-audit, page-cro, vercel-react-best-practices
**Site:** agritemis-newweb (Next.js 16 + Tailwind v4 + next-intl)

---

## 1. Executive Summary — Top Issues by Severity

| # | Severity | Category | Issue | File(s) |
|---|----------|----------|-------|---------|
| 1 | CRITICAL | SEO | Zero metadata — no `generateMetadata`, no title/description, no OG tags on any page | All page files |
| 2 | CRITICAL | Accessibility | No ARIA labels on icon-only buttons (LinkedIn, email icons in Footer) | `Footer.tsx:80-91` |
| 3 | CRITICAL | Accessibility | No visible focus states on any interactive element (nav links, buttons, cards) | All components |
| 4 | CRITICAL | Navigation | 5 nav/footer links point to non-existent pages (404s) | `layout.tsx:42-44`, `Footer.tsx:40-49` |
| 5 | HIGH | Performance | Indicator images are 837KB-1.3MB each (5.2MB total), hero is 1MB — all unoptimized PNGs | `public/indicators/`, `public/Vigne_tracteur2.png` |
| 6 | HIGH | Code Quality | Footer import placed AFTER component export (line 69) — works by hoisting but violates conventions | `layout.tsx:69` |
| 7 | HIGH | Accessibility | `SocialProofSection` carousel has no pause button, no `aria-live`, no keyboard control | `SocialProofSection.tsx` |
| 8 | HIGH | Design System | Brand colors only in `constants.tsx`, used via inline `style={{}}` — not in Tailwind theme | `constants.tsx`, 6 components |
| 9 | HIGH | i18n | Nav labels hardcoded in English ("Home", "VitiScore", "ChatBot IA", etc.) | `layout.tsx:40-44` |
| 10 | HIGH | Code Quality | `IndicatorCard.tsx` and `Footer.tsx` use `next/link` directly instead of `@/i18n/navigation.client` — breaks locale prefixing | `IndicatorCard.tsx:6`, `Footer.tsx:3` |

---

## 2. UI/UX Review

### 2.1 Design Consistency

| Issue | Severity | Details | File |
|-------|----------|---------|------|
| **No design system** | HIGH | Colors defined in `constants.tsx` as plain strings, applied via inline `style={{}}`. Not registered in Tailwind `@theme`, so no utility classes available (`bg-agri-green`, etc.). Forces inline styles everywhere. | `constants.tsx`, `globals.css` |
| **Mixed icon libraries** | MEDIUM | Uses both `lucide-react` (ServicesSection, CtaFinalSection) AND `react-icons/fa` (Footer). Inconsistent icon style and bundle bloat. | `Footer.tsx:3`, `ServicesSection.tsx:2-10` |
| **Inline SVG checkmarks** | LOW | `BenefitsSection.tsx` uses raw inline SVG for checkmarks instead of lucide-react's `Check` icon. Inconsistent with icon strategy. | `BenefitsSection.tsx:25` |
| **Emoji in UI** | MEDIUM | Footer uses `✉️` emoji for email (line 63). Per ui-ux-pro-max guidelines: "No emoji icons — use SVG icons instead." | `Footer.tsx:63` |
| **Inconsistent container widths** | LOW | Home page sections alternate between `max-w-6xl` (Hero, Solution, ValueProp, Indicators, Benefits) and `max-w-7xl` (Services, Footer) and `max-w-4xl` (CTA Final). Creates subtle alignment shifts. | Multiple components |
| **Inconsistent border radius** | LOW | Cards use `rounded-xl`, sections use `rounded-xl` and `rounded-3xl`, buttons use `rounded-lg`. No token-based radius system. | Multiple components |

### 2.2 Visual Hierarchy

| Issue | Severity | Details | File |
|-------|----------|---------|------|
| **Hero text size inverted** | MEDIUM | `text-8xl lg:text-6xl` — text gets SMALLER on large screens instead of larger. Should be `text-4xl lg:text-6xl` (mobile-first scaling up). | `HeroSection.tsx:23` |
| **ProblemStatementSection is empty** | HIGH | Section renders only a title (`h2`) with no body content — appears as a floating orphaned heading. | `ProblemStatementSection.tsx:7-14` |
| **No visual hierarchy between Services and Products** | MEDIUM | Services section (5 cards) transitions directly into Products (dark green block) without clear section separation. Both have similar heading weights. | `ServicesSection.tsx` |
| **Multiple h1 risk** | LOW | VitiScore page uses `<h1>` in its hero, and the layout doesn't suppress the page-level heading hierarchy. Not a violation per se, but worth noting for SEO. | `vitiscore/page.tsx:14` |

### 2.3 Typography

| Issue | Severity | Details | File |
|-------|----------|---------|------|
| **No font pairing** | MEDIUM | `font-family: Arial, Helvetica, sans-serif` as only font. No heading/body distinction. Geist Sans referenced in CSS variables but never loaded via `next/font`. | `globals.css:22`, `layout.tsx` |
| **No type scale** | MEDIUM | Font sizes range from `text-xs` to `text-8xl` without a systematic scale. Heading levels don't map to consistent sizes across pages. | Multiple |
| **Line length uncontrolled** | LOW | Body text in SolutionSection and HeroSection can stretch beyond 75 characters per line on wide screens. `max-w-3xl` is used sometimes but not consistently. | `SolutionSection.tsx`, `HeroSection.tsx` |

### 2.4 Color Usage

| Issue | Severity | Details | File |
|-------|----------|---------|------|
| **Inline color application** | HIGH | 6 components use `style={{ color: COLORS['agri-green'] }}` or `style={{ backgroundColor: COLORS['agri-green'] }}`. Should be Tailwind classes. | `HeroSection.tsx:31`, `SolutionSection.tsx:23,32`, `ValuePropositionSection.tsx:9`, `BenefitsSection.tsx:16`, `CtaFinalSection.tsx:19`, `ServicesSection.tsx:49,62` |
| **Color inconsistency in VitiScore** | MEDIUM | VitiScore page uses `sky-700`/`sky-800` as its primary instead of brand colors `#1D6438`/`#007BFF`. Feels like a different site. | `vitiscore/page.tsx:27-29` |
| **Gray text on gray background** | LOW | `text-gray-500 mb-12` for social proof context text on `bg-gradient-to-b from-white to-gray-50`. Contrast may be insufficient. | `SocialProofSection.tsx:34` |

### 2.5 Spacing & Layout

| Issue | Severity | Details | File |
|-------|----------|---------|------|
| **No responsive nav** | HIGH | Navigation is a horizontal `flex` with `space-x-4` — no hamburger menu on mobile. Links will overflow/wrap on small screens. | `layout.tsx:38-45` |
| **No mobile language selector** | MEDIUM | Language selector inline with nav links — will be invisible or overlapping on mobile. | `layout.tsx:47-53` |
| **Main padding too generous** | LOW | `<main className="p-8">` adds 2rem padding on all sides including mobile. Should be `px-4 py-8` or responsive. | `layout.tsx:57` |
| **Inconsistent section spacing** | LOW | Some sections use `py-16`, others `py-20`. Benefits and ProblemStatement add `mt-16` on top of section padding. | Multiple |

### 2.6 Interaction & Motion

| Issue | Severity | Details | File |
|-------|----------|---------|------|
| **No scroll animations** | MEDIUM | All sections appear statically. No fade-in, slide-up, or reveal-on-scroll effects. Feels flat for a modern B2B site. | All sections |
| **Styled-jsx in Tailwind project** | HIGH | `SocialProofSection.tsx` uses `<style jsx>` for carousel animation. styled-jsx is NOT a declared dependency — this may not work correctly or may break in production. | `SocialProofSection.tsx:58-75` |
| **CTA hover scale on text link** | LOW | `hover:scale-[1.02]` on CTA buttons — minimal visual effect. Could use shadow/color transition instead. | `HeroSection.tsx:31`, `CtaFinalSection.tsx:19` |
| **No `prefers-reduced-motion`** | MEDIUM | Carousel animation runs indefinitely. No check for users who prefer reduced motion. | `SocialProofSection.tsx:69` |
| **No cursor-pointer on cards** | LOW | Service cards, indicator cards, and product cards have hover effects but no `cursor-pointer` class. | `ServicesSection.tsx:47`, `IndicatorCard.tsx:24` |

---

## 3. Accessibility Compliance Report

### WCAG 2.1 AA Checklist

| Guideline | Status | Issue | File |
|-----------|--------|-------|------|
| **1.1.1 Non-text Content** | PARTIAL | Images have `alt` text, but carousel logos use generic "Logo X" pattern. | `constants.tsx:13-46` |
| **1.3.1 Info & Relationships** | FAIL | No skip-navigation link. No `<main>` landmark wrapping content (it's there but no `id`). | `layout.tsx` |
| **1.4.3 Contrast (Minimum)** | WARN | `text-gray-500` on white/gray-50 backgrounds may fail 4.5:1 ratio. `text-gray-400` on `bg-gray-50` in IndicatorCard definitely fails. | `SocialProofSection.tsx:34`, `IndicatorCard.tsx:38` |
| **2.1.1 Keyboard** | FAIL | No visible focus states on any link, button, or interactive element. `outline-none` is not explicitly set, but no custom focus ring either. | All components |
| **2.4.1 Bypass Blocks** | FAIL | No skip-to-content link. | `layout.tsx` |
| **2.4.7 Focus Visible** | FAIL | No custom focus styles defined anywhere. Browser defaults may be overridden by Tailwind's base styles. | `globals.css` |
| **3.3.1 Error Identification** | FAIL | Indicator Request form has no validation error messages. Only `required` attribute — no visual feedback on invalid input. | `indicator-request/page.tsx:96-160` |
| **3.3.2 Labels** | PASS | Form inputs have proper `<label>` with `htmlFor`. | `indicator-request/page.tsx` |
| **4.1.2 Name, Role, Value** | FAIL | Footer social links (`<a>` with only icon children) have no `aria-label`. Screen readers will announce just the URL. | `Footer.tsx:79-91` |
| **1.4.11 Non-text Contrast** | WARN | Icon-only links in footer lack sufficient contrast indication for interactive purpose. | `Footer.tsx` |

### Missing Accessibility Features

- No `aria-label` on any icon-only interactive element
- No `aria-live` region for carousel or form submission feedback
- No `role="region"` or `aria-labelledby` on landmark sections
- No keyboard navigation support for carousel (can't pause/navigate with keys)
- Language selector has no indication of current active locale

---

## 4. SEO Audit Report

### 4.1 Critical Missing Elements

| Element | Status | Impact |
|---------|--------|--------|
| `generateMetadata` | MISSING on all pages | No page titles, descriptions, or OG tags. Google will use auto-extracted text. |
| `<title>` tag | DEFAULT only | All pages show "Create Next App" or equivalent default. |
| `robots.txt` | MISSING | Search engines have no crawl guidance. |
| `sitemap.xml` | MISSING | Search engines can't discover all pages. |
| JSON-LD structured data | MISSING | No Organization, WebSite, or Service schema. No rich results possible. |
| Open Graph tags | MISSING | Social shares will have no image, title, or description. |
| `hreflang` tags | MISSING | Search engines can't associate FR/EN/ES versions. Each locale competes with itself. |
| Canonical URLs | MISSING | Potential duplicate content across locales. |

### 4.2 Image Optimization

| Image | Size | Format | Issue |
|-------|------|--------|-------|
| `Vigne_tracteur2.png` (hero BG) | 1.0 MB | PNG | Used as CSS `background-image` — bypasses `next/image` optimization entirely |
| `hero-background.png` | 657 KB | PNG | Unused duplicate — wasted space |
| `hero-background.jpg` | 448 KB | JPEG | Unused duplicate — wasted space |
| `indicators/ari.png` | 1.3 MB | PNG | Should be WebP, ~100-200KB |
| `indicators/cori.png` | 1.2 MB | PNG | Should be WebP |
| `indicators/cri.png` | 919 KB | PNG | Should be WebP |
| `indicators/wari.png` | 909 KB | PNG | Should be WebP |
| `indicators/bri.png` | 837 KB | PNG | Should be WebP |
| `logos/krug.jpg` | 732 KB | JPEG | Logo should be <50KB as WebP/SVG |
| `logos/axereal.jpg` | 217 KB | JPEG | Logo should be <50KB |
| **Total unoptimized** | **~8.3 MB** | | Target: <1 MB total |

### 4.3 Technical SEO Issues

- No `loading.tsx` or `error.tsx` boundaries — poor Core Web Vitals if content is slow
- No `not-found.tsx` — 404 pages show default Next.js error
- VitiScore page is entirely `"use client"` — content not server-rendered for SEO crawlers
- HeroSection uses CSS `background-image` which is invisible to image search

---

## 5. Performance Analysis

### 5.1 Next.js Best Practices (vercel-react-best-practices)

| Guideline | Status | Issue | File |
|-----------|--------|-------|------|
| **Use `next/font`** | FAIL | No font loaded via `next/font`. CSS falls back to `Arial, Helvetica, sans-serif`. Geist Sans variables defined but never connected. | `layout.tsx`, `globals.css` |
| **Use `next/image` for all images** | FAIL | Hero background uses CSS `background-image` with a 1MB PNG — no optimization, no lazy loading, no format conversion. | `HeroSection.tsx:13-17` |
| **Export `generateMetadata`** | FAIL | No page exports metadata. | All pages |
| **Add `loading.tsx`** | FAIL | No loading states for route segments. | Missing |
| **Add `error.tsx`** | FAIL | No error boundaries for route segments. | Missing |
| **Use Server Components** | WARN | VitiScore page (`vitiscore/page.tsx`) is entirely `"use client"` — all content rendered client-side, bad for SEO and initial load. | `vitiscore/page.tsx:1` |
| **Use Server Actions for forms** | WARN | Indicator Request form uses `useState` + fake `setTimeout` — no actual Server Action for form submission. | `indicator-request/page.tsx:31-36` |
| **Image `priority`** | PARTIAL | Logo has `priority` (good), but hero background bypasses `next/image` entirely. | `layout.tsx:33` |
| **Avoid `style={{}}` for layout** | WARN | 6 components use inline styles for colors that should be Tailwind theme tokens. | Multiple |

### 5.2 Bundle Concerns

- `react-icons` imported for only 2 icons (`FaLinkedin`, `FaEnvelope`) — `lucide-react` already has `Linkedin` and `Mail` equivalents
- `SocialProofSection.tsx` uses styled-jsx (`<style jsx>`) which may require additional bundler config
- VitiScore page defines 4 inline sub-components that won't tree-shake properly

---

## 6. Conversion Optimization Analysis (CRO)

### 6.1 CTA Assessment

| CTA | Location | Issue |
|-----|----------|-------|
| "Talk to an expert" (Hero) | Above fold | Links to `#contact` anchor — but `#contact` section has no form, just a button linking to `#` (nowhere). Dead CTA chain. |
| "Request a demo" (Final CTA) | Bottom of page | Links to `#` — does nothing. Major conversion leak. |
| "Learn more" (Indicator cards) | Mid-page | Links to `/indicator-request/` — good, leads to form. But form has no validation feedback. |
| VitiScore CTAs | Product page | `<button>` elements with no `onClick` handler — completely non-functional. | 

### 6.2 Conversion Path Issues

| Issue | Severity | Details |
|-------|----------|---------|
| **Dead CTAs** | CRITICAL | Two main CTAs (`#contact` hero, `#` final CTA) lead nowhere. Primary conversion path is broken. |
| **No contact form** | HIGH | No actual contact form on the site. Hero CTA says "Talk to an expert" but there's nowhere to do that. |
| **Form has no backend** | HIGH | Indicator Request form uses `setTimeout` simulation — no actual data submission. |
| **No trust signals near CTAs** | MEDIUM | No testimonials, no case study links, no certifications near CTA buttons. |
| **No social proof near conversion** | MEDIUM | Client logos are at the top but not near the bottom CTA where final conversion happens. |
| **Missing urgency/scarcity** | LOW | No compelling reason to act now. B2B sites benefit from "limited consultation slots" or "get your free assessment" framing. |

### 6.3 Form UX

| Issue | Severity | Details |
|-------|----------|---------|
| **No validation feedback** | HIGH | Form only uses `required` HTML attribute. No inline error messages, no error styling on invalid inputs. |
| **No loading indicator on button** | MEDIUM | Button text changes to "Submitting..." but no spinner or visual loading state. |
| **`params.id` undefined** | HIGH | Page tries to read `params.id` but the route is `/indicator-request/` (no `[id]` segment). `getIndicatorTitle()` will throw on missing translation key. |
| **Uses `next/link` not i18n Link** | MEDIUM | Back button and success link use `next/link` — won't include locale prefix. |

---

## 7. Technical Architecture Review

### 7.1 Code Organization Issues

| Issue | Severity | Details |
|-------|----------|---------|
| **Footer import after export** | HIGH | `layout.tsx:69` imports Footer AFTER the component's closing brace. Works due to JS hoisting but is a code smell. |
| **Flat component structure** | MEDIUM | All 11 components in `src/components/` with no subdirectories. No separation between atoms, layout, sections. |
| **Duplicated components** | MEDIUM | VitiScore page defines `IndicatorCard`, `FeatureCard`, `AudienceCard`, `BulletItem` inline — duplicates shared patterns. |
| **Mixed Link imports** | HIGH | `layout.tsx` and `CtaFinalSection.tsx` use `@/i18n/navigation.client` Link. `Footer.tsx` and `IndicatorCard.tsx` use `next/link`. Footer and IndicatorCard links won't have locale prefix. |
| **Styled-jsx without dependency** | HIGH | `SocialProofSection.tsx` uses `<style jsx>` but `styled-jsx` is not in `package.json` dependencies. May work via Next.js built-in support, but it's mixing two CSS approaches in a Tailwind project. |

### 7.2 i18n Issues

| Issue | Severity | Details |
|-------|----------|---------|
| **Hardcoded English nav** | HIGH | Navigation labels ("Home", "VitiScore", "ChatBot IA", "PlanetScore", "Blog") are hardcoded in English in `layout.tsx:40-44`. Not translated. |
| **Language selector resets path** | MEDIUM | Language switcher always links to `href="/"` — switching language on VitiScore page sends user back to homepage. |
| **No current locale indicator** | LOW | Language selector shows FR | EN | ES with no visual indication of which is currently active. |

---

## 8. Prioritized Action Matrix

### Quick Wins (< 1 hour each)

1. Add `aria-label` to Footer social links
2. Replace `✉️` emoji with `Mail` icon from lucide-react
3. Fix hero text sizing: `text-4xl lg:text-6xl` instead of `text-8xl lg:text-6xl`
4. Add `cursor-pointer` to all interactive cards
5. Fix `IndicatorCard.tsx` and `Footer.tsx` to use `@/i18n/navigation.client` Link
6. Move Footer import above component export in `layout.tsx`
7. Add `prefers-reduced-motion` media query for carousel
8. Translate nav labels using `useTranslations('Navigation')`

### Medium Effort (1-4 hours each)

9. Register brand colors in Tailwind `@theme` and replace all inline `style={{}}` with utility classes
10. Add `generateMetadata` to all pages (layout + each page)
11. Add responsive hamburger menu for mobile navigation
12. Convert hero background from CSS `background-image` to `next/image`
13. Add form validation with error messages to Indicator Request page
14. Fix dead CTAs — either add a contact form or link to `mailto:`
15. Remove `react-icons` dependency, replace with lucide-react equivalents
16. Add `loading.tsx`, `error.tsx`, `not-found.tsx` boundaries
17. Add custom focus ring styles in `globals.css`
18. Load a proper font via `next/font` in `layout.tsx`

### Major Refactors (4+ hours each)

19. Create complete design system with color tokens, typography scale, spacing, shadows, radii in `globals.css @theme`
20. Restructure components into `ui/`, `layout/`, `sections/`, `shared/` directories
21. Optimize all images: convert to WebP, resize appropriately (target <1MB total)
22. Add full SEO suite: robots.txt, sitemap.ts, JSON-LD structured data, hreflang
23. Rebuild carousel with proper CSS animation (remove styled-jsx)
24. Add scroll-triggered reveal animations to all sections
25. Extract VitiScore inline sub-components into shared components
26. Make VitiScore page a Server Component (move `"use client"` down to interactive sub-components only)
27. Build a real contact form with Server Action backend
28. Add `skip-to-content` link and ARIA landmarks to layout
