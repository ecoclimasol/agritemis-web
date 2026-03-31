# Agritemis — Design System

---

## Design Direction

**Style:** Organic Biophilic — clean, nature-inspired, professional
**Mood:** Scientific credibility meets environmental stewardship
**Performance:** Excellent | **Accessibility target:** WCAG AA

### Key Effects
- Rounded corners (12-24px), organic curves
- Natural shadows with subtle depth
- Smooth transitions (150-300ms ease)
- Scroll-triggered reveal animations (fade-up, stagger)
- No excessive animation — respect `prefers-reduced-motion`

### Anti-patterns to Avoid
- Emoji as icons (use Lucide React exclusively)
- Inline `style={{}}` for colors (use Tailwind theme tokens)
- Dark mode (light mode only for this phase)
- Scale transforms on hover that shift layout
- Styled-jsx or mixed CSS approaches

---

## Color Palette

### Brand Colors (keep from current site)

| Token | Hex | Usage |
|-------|-----|-------|
| `agri-green` | `#1D6438` | Primary — buttons, CTAs, brand elements |
| `agri-blue` | `#007BFF` | Secondary — links, accents, secondary CTAs |

### Extended Green Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `agri-green-50` | `#F0F7F2` | Light backgrounds, hover states |
| `agri-green-100` | `#D9EDDF` | Card backgrounds, badges |
| `agri-green-200` | `#B3DBC0` | Borders, dividers |
| `agri-green-300` | `#7DC495` | Icons on light backgrounds |
| `agri-green-400` | `#4AAD6E` | Secondary text on dark |
| `agri-green-500` | `#2D8A4F` | Hover state for primary |
| `agri-green-600` | `#1D6438` | **Primary (brand)** |
| `agri-green-700` | `#175430` | Active/pressed state |
| `agri-green-800` | `#114427` | Dark sections background |
| `agri-green-900` | `#0B331D` | Footer, dark UI elements |
| `agri-green-950` | `#062214` | Deepest dark |

### Extended Blue Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `agri-blue-50` | `#EBF5FF` | Light blue backgrounds |
| `agri-blue-100` | `#CCE5FF` | Info badges, highlights |
| `agri-blue-200` | `#99CBFF` | Borders |
| `agri-blue-300` | `#66B0FF` | Icons |
| `agri-blue-400` | `#3396FF` | Links |
| `agri-blue-500` | `#007BFF` | **Secondary (brand)** |
| `agri-blue-600` | `#0062CC` | Hover state |
| `agri-blue-700` | `#004A99` | Active state |
| `agri-blue-800` | `#003166` | Dark accents |
| `agri-blue-900` | `#001933` | Deepest |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#16A34A` | Form success, positive indicators |
| `warning` | `#EAB308` | Warnings, caution states |
| `error` | `#DC2626` | Form errors, critical alerts |
| `info` | `#0284C7` | Informational notices |

### Surface Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#FFFFFF` | Page background |
| `surface` | `#F8FAFC` | Card backgrounds, section alternation |
| `surface-elevated` | `#FFFFFF` | Elevated cards with shadow |
| `border` | `#E2E8F0` | Default borders |
| `border-light` | `#F1F5F9` | Subtle borders |
| `text-primary` | `#0F172A` | Headings, primary text |
| `text-secondary` | `#475569` | Body text, descriptions |
| `text-muted` | `#94A3B8` | Captions, helper text |

---

## Typography

### Font Pairing

**Primary (headings + body):** Plus Jakarta Sans
- Mood: friendly, modern, clean, approachable, professional
- Perfect for: SaaS, B2B, dashboards, productivity tools
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Load via `next/font/google`** in `layout.tsx`:
```tsx
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})
```

### Type Scale

| Level | Size (mobile) | Size (desktop) | Weight | Line Height | Letter Spacing | Usage |
|-------|---------------|----------------|--------|-------------|----------------|-------|
| `display` | `text-4xl` (36px) | `text-6xl` (60px) | 700 | 1.1 | `-0.02em` | Hero headline only |
| `h1` | `text-3xl` (30px) | `text-5xl` (48px) | 700 | 1.2 | `-0.02em` | Page titles |
| `h2` | `text-2xl` (24px) | `text-4xl` (36px) | 700 | 1.2 | `-0.01em` | Section titles |
| `h3` | `text-xl` (20px) | `text-2xl` (24px) | 600 | 1.3 | `normal` | Card titles, subsections |
| `h4` | `text-lg` (18px) | `text-xl` (20px) | 600 | 1.4 | `normal` | Sub-subsections |
| `body-lg` | `text-lg` (18px) | `text-xl` (20px) | 400 | 1.6 | `normal` | Lead paragraphs |
| `body` | `text-base` (16px) | `text-base` (16px) | 400 | 1.6 | `normal` | Default body text |
| `body-sm` | `text-sm` (14px) | `text-sm` (14px) | 400 | 1.5 | `normal` | Secondary text |
| `caption` | `text-xs` (12px) | `text-xs` (12px) | 500 | 1.4 | `0.05em` | Labels, badges, metadata |
| `overline` | `text-xs` (12px) | `text-xs` (12px) | 600 | 1.4 | `0.1em` | Uppercase section labels |

### Line Length
- Maximum: `max-w-3xl` (48rem / 768px) for body text
- Use `text-balance` on headings for better wrapping

---

## Spacing

### Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight gaps |
| `space-2` | 8px | Icon gaps, tight padding |
| `space-3` | 12px | Form element padding |
| `space-4` | 16px | Default component padding |
| `space-6` | 24px | Card padding, section gaps |
| `space-8` | 32px | Large component spacing |
| `space-12` | 48px | Section vertical padding (mobile) |
| `space-16` | 64px | Section vertical padding (tablet) |
| `space-20` | 80px | Section vertical padding (desktop) |
| `space-24` | 96px | Large section spacing |

### Container
- Max width: `max-w-7xl` (80rem / 1280px) — consistent across all sections
- Horizontal padding: `px-4` (mobile), `px-6` (tablet), `px-8` (desktop)

---

## Shadows (Elevation)

| Level | Tailwind | Usage |
|-------|----------|-------|
| `sm` | `shadow-sm` | Subtle, default cards |
| `md` | `shadow-md` | Hovered cards, navbar |
| `lg` | `shadow-lg` | Elevated cards, modals |
| `xl` | `shadow-xl` | CTA sections, important elements |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | `rounded-md` (6px) | Buttons, badges, inputs |
| `md` | `rounded-lg` (8px) | Small cards, tags |
| `lg` | `rounded-xl` (12px) | Default cards |
| `xl` | `rounded-2xl` (16px) | Large cards, sections |
| `full` | `rounded-full` | Avatars, icon containers, pills |

---

## Motion & Animation

### Principles
- Subtle, purposeful — animations serve function (reveal, feedback, guidance)
- Duration: 150-300ms for micro-interactions, 500-800ms for scroll reveals
- Easing: `ease-out` for entries, `ease-in-out` for state changes
- Respect `prefers-reduced-motion` — reduce or remove animations

### Duration Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `fast` | `150ms` | Hover color/opacity changes |
| `normal` | `200ms` | Button press, toggle |
| `slow` | `300ms` | Card hover, shadow elevation |
| `reveal` | `600ms` | Scroll-triggered section reveals |
| `marquee` | `40s` | Logo carousel speed |

### Scroll Reveal Pattern
- Trigger: Intersection Observer at 10% visibility
- Effect: `opacity: 0 → 1` + `translateY(20px) → 0`
- Stagger: 100ms delay between siblings
- Once: true (don't re-animate on scroll back)

### Hover Patterns
- Cards: shadow elevation (`shadow-sm` → `shadow-lg`) + subtle border color change
- Buttons: background color darkens one shade + slight shadow
- Links: underline reveal or color shift
- No `scale` transforms on cards (causes layout shift)

---

## Component Variants

### Button (CVA)

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| `primary` | `agri-green-600` | white | none | Main CTAs |
| `secondary` | white | `agri-blue-500` | `agri-blue-500` | Secondary actions |
| `ghost` | transparent | `text-secondary` | none | Tertiary, nav links |
| `cta` | `agri-green-600` | white | none | Large hero/final CTAs (larger padding, shadow-lg) |
| `destructive` | `error` | white | none | Delete, cancel actions |

Sizes: `sm` (h-9), `default` (h-10), `lg` (h-12), `xl` (h-14 — CTA only)

### Card (CVA)

| Variant | Background | Border | Shadow | Usage |
|---------|-----------|--------|--------|-------|
| `feature` | white | `border` | `shadow-sm` → `shadow-lg` on hover | Service/feature cards |
| `indicator` | white | `border` | `shadow-sm` + colored bottom bar | Indicator cards (ARI, CRI, etc.) |
| `product` | `white/10 backdrop-blur` | `white/20` | none | Product cards on dark background |
| `elevated` | white | none | `shadow-lg` | Standalone cards (mission, contact) |

### Badge

| Variant | Background | Text | Usage |
|---------|-----------|------|-------|
| `default` | `surface` | `text-secondary` | Default tags |
| `green` | `agri-green-100` | `agri-green-700` | Positive, active |
| `blue` | `agri-blue-100` | `agri-blue-700` | Info, links |
| `outline` | transparent | `text-secondary` | Subtle labels |

---

## Icon System

**Library:** Lucide React (exclusively — remove `react-icons`)

### Icon Sizing

| Context | Size | Class |
|---------|------|-------|
| Inline (text) | 16px | `w-4 h-4` |
| Button icon | 18px | `w-[18px] h-[18px]` |
| Card icon | 24px | `w-6 h-6` |
| Feature icon | 32px | `w-8 h-8` |
| Hero icon | 40px | `w-10 h-10` |

### Icon Container
- Rounded container with `p-3 rounded-xl bg-agri-green-50` (light) or `bg-white/10` (dark sections)
- Use brand color for icon stroke: `text-agri-green-600`

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|-----------|-------|-------|
| Default | < 640px | Mobile-first base styles |
| `sm` | ≥ 640px | Small tablets |
| `md` | ≥ 768px | Tablets, 2-column grids |
| `lg` | ≥ 1024px | Desktop, 3-column grids, side-by-side layouts |
| `xl` | ≥ 1280px | Wide desktop |

### Grid Patterns
- 1 column → `md:grid-cols-2` → `lg:grid-cols-3` (services, indicators)
- 1 column → `lg:flex-row` (solution section: content + sidebar)
- Full width (hero, social proof, CTA, benefits)

---

## Tailwind v4 @theme Configuration

All tokens go in `globals.css` under `@theme inline`:

```css
@import "tailwindcss";

@theme inline {
  /* Colors */
  --color-agri-green-50: #F0F7F2;
  --color-agri-green-100: #D9EDDF;
  --color-agri-green-200: #B3DBC0;
  --color-agri-green-300: #7DC495;
  --color-agri-green-400: #4AAD6E;
  --color-agri-green-500: #2D8A4F;
  --color-agri-green-600: #1D6438;
  --color-agri-green-700: #175430;
  --color-agri-green-800: #114427;
  --color-agri-green-900: #0B331D;
  --color-agri-green-950: #062214;

  --color-agri-blue-50: #EBF5FF;
  --color-agri-blue-100: #CCE5FF;
  --color-agri-blue-200: #99CBFF;
  --color-agri-blue-300: #66B0FF;
  --color-agri-blue-400: #3396FF;
  --color-agri-blue-500: #007BFF;
  --color-agri-blue-600: #0062CC;
  --color-agri-blue-700: #004A99;
  --color-agri-blue-800: #003166;
  --color-agri-blue-900: #001933;

  --color-success: #16A34A;
  --color-warning: #EAB308;
  --color-error: #DC2626;
  --color-info: #0284C7;

  --color-surface: #F8FAFC;
  --color-surface-elevated: #FFFFFF;
  --color-border: #E2E8F0;
  --color-border-light: #F1F5F9;
  --color-text-primary: #0F172A;
  --color-text-secondary: #475569;
  --color-text-muted: #94A3B8;

  /* Typography */
  --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;

  /* Animations */
  --animate-fade-in: fade-in 0.6s ease-out forwards;
  --animate-fade-up: fade-up 0.6s ease-out forwards;
  --animate-slide-in: slide-in 0.4s ease-out forwards;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-in {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Accessibility: respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus ring for keyboard navigation */
*:focus-visible {
  outline: 2px solid #1D6438;
  outline-offset: 2px;
  border-radius: 4px;
}
```

---

## Magic MCP Integration Pattern

21st.dev Magic MCP generates standalone React components. Integration with next-intl:

1. **Build** visual component via `mcp__magic__21st_magic_component_builder` with placeholder text props
2. **Wrap** in page/section that passes `useTranslations()` strings as props
3. **Text** stays in `messages/*.json` — never hardcoded in components

```tsx
// Component (built by Magic MCP) — pure visual, accepts text props
export function HeroSection({ headline, subtitle, ctaText, ctaHref }: HeroProps) {
  return (
    <section>
      <h1>{headline}</h1>
      <p>{subtitle}</p>
      <Button asChild><a href={ctaHref}>{ctaText}</a></Button>
    </section>
  )
}

// Page (our wrapper) — handles translations
export default function HomePage() {
  const t = useTranslations('Landing')
  return <HeroSection headline={t('hero_headline')} subtitle={t('hero_punchline')} ctaText={t('hero_cta')} ctaHref="/contact" />
}
```

---

## Pre-Delivery Checklist

- [ ] No emojis as icons (use Lucide React)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Text contrast 4.5:1 minimum (WCAG AA)
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] All colors from Tailwind theme (no inline `style={{}}`)
- [ ] All images via `next/image` (no CSS `background-image`)
- [ ] All links via `@/i18n/navigation.client` (no direct `next/link`)
