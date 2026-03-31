# Agritemis — Content & Copywriting Plan

---

## Tone of Voice

**Brand voice:** Scientific authority with approachable clarity
- **Credible** — data-driven claims, validated methodology, regulatory references
- **Pragmatic** — focus on outcomes, not jargon
- **Mission-driven** — environmental stewardship is genuine, not marketing
- **Accessible** — complex science explained simply for non-expert B2B buyers

**Rules:**
- Lead with the business problem, not the product
- Use concrete numbers over vague claims ("1,000+ spray programs analyzed" not "comprehensive database")
- French is primary — write FR first, then adapt EN and ES (not translate word-for-word)
- Avoid buzzwords: "revolutionary", "cutting-edge", "game-changing"
- Preferred verbs: measure, compare, act, secure, anticipate, validate

---

## Messaging Framework

### Core Value Proposition

> **FR:** "La transition agroécologique ne se pilote pas à l'intuition. Sécurisez vos filières grâce à la mesure scientifique du risque pesticide."
>
> **EN:** "The agroecological transition cannot be driven by intuition. Secure your supply chains with scientific pesticide risk measurement."
>
> **ES:** "La transición agroecológica no se guía por la intuición. Asegure sus cadenas de suministro con medición científica del riesgo de pesticidas."

### Three-Step Framework: Measure → Compare → Act

| Step | FR | EN | ES |
|------|----|----|-----|
| Measure | Cartographier l'impact réel | Map real pesticide impact | Mapear el impacto real |
| Compare | Benchmarker précisément | Benchmark precisely | Comparar con precisión |
| Act | Agir avec des plans correctifs | Act with corrective plans | Actuar con planes correctivos |

### Key Differentiators (for copy across all pages)

1. **Science, not intuition** — validated algorithms, reproducible methodology
2. **5 unique indicators** — ARI, CRI, CORI, BRI, WARI cover health + environment + water
3. **Mission-driven company** — mission inscribed in bylaws
4. **1,000+ spray programs** — largest viticulture database
5. **Trusted by leaders** — LVMH, E.Leclerc, Rémy Cointreau, Krug

---

## Page-by-Page Content Direction

### Homepage

| Section | Current State | Improvement Direction |
|---------|--------------|----------------------|
| **Hero** | Good headline, CTA links to `#contact` (broken) | Keep headline. Fix CTA → `/contact`. Add secondary CTA "Discover our indicators" → `/indicateurs` |
| **Social Proof** | Logo carousel, basic text | Add a client count: "Trusted by X+ organizations across Y countries" |
| **Solution** | Good 2-column layout | Strengthen the mission card with a concrete stat. Add a "Learn more" link → `/mission` |
| **Services** | 5 service cards + 3 product cards | Tighten descriptions. Each card should lead with the **outcome**, not the method |
| **Value Prop** | Measure/Compare/Act — good framework | Add concrete metrics under each step. "Map impact across X data points" |
| **Problem Statement** | Only a title — empty section! | Add 2-3 stat blocks: "X molecules withdrawn in 5 years", "Y% of supply chains lack measurement", "Z regulations require data" |
| **Indicators** | 5 cards linking to form | Add a brief "Why 5 indicators?" intro. Link cards to `/indicateurs` first, then form |
| **Benefits** | 4 bullet points | Rewrite with quantified outcomes. "Reduce regulatory risk by anticipating molecule withdrawals" |
| **CTA Final** | Links to `#` (broken!) | Link to `/contact`. Add urgency: "Request your free assessment" |

### VitiScore Page

| Issue | Direction |
|-------|-----------|
| Uses sky/blue colors instead of brand | Align with brand green/blue palette |
| CTAs are non-functional `<button>` | Link to `/contact?subject=vitiscore` |
| Good content structure | Keep, refine copy for clarity |

### Indicator Request Page

| Issue | Direction |
|-------|-----------|
| `params.id` undefined | Remove indicator ID dependency — make it a general request form |
| No form validation feedback | Add inline error messages |
| Form simulates submission | Connect to Server Action or email API |

### Mission Page (NEW)

**Structure:**
1. Hero: "Our mission: reducing pesticide risk through science"
2. Story: Founded to bridge the gap between agricultural practice and scientific measurement
3. Team/expertise section (if team info available)
4. Values: Scientific rigor, Environmental impact, Regulatory leadership
5. "Mission inscribed in bylaws" — social enterprise positioning
6. CTA: "Join our mission — become a partner"

### Indicateurs Page (NEW)

**Structure:**
1. Hero: "5 scientific indicators covering every dimension of pesticide risk"
2. Overview grid: 5 indicator cards with icons and one-sentence descriptions
3. Deep-dive sections: One expandable/scrollable section per indicator
   - What it measures
   - How it's calculated (simplified)
   - Who it's for
   - Sample output/visualization
4. Comparison with EIQ methodology (competitive positioning)
5. CTA: "Request documentation" → `/indicator-request`

### Contact Page (NEW)

**Structure:**
1. Hero: "Talk to an Agritemis expert"
2. Two-column: Contact form (left) + Contact info card (right)
3. Form fields: Name, Email, Organization, Subject (dropdown: General / VitiScore / Indicators / Partnership), Message
4. Contact info: Address (Montpellier), Phone, Email, LinkedIn
5. Map embed (optional)

### Placeholder Pages (Blog, PlanetScore, ChatBot)

**Template:**
1. Branded "Coming Soon" hero with the page title
2. Brief description of what's coming
3. Email signup: "Be the first to know when [feature] launches"
4. Link back to homepage

---

## CTA Strategy (Marketing Psychology)

### Trust Signal Placement (Cialdini principles)

| Principle | Implementation |
|-----------|---------------|
| **Authority** | "Mission inscribed in bylaws" badge near CTAs. Scientific methodology references. |
| **Social Proof** | Client logos near both hero CTA and final CTA. Add client count. |
| **Reciprocity** | Offer free documentation download (indicator PDFs) before asking for demo |
| **Commitment** | Low-friction first step: "Receive documentation" → then "Request a demo" |
| **Scarcity** | "Limited assessment slots available this quarter" (if applicable) |

### CTA Hierarchy

| CTA Level | Text (FR) | Text (EN) | Placement |
|-----------|-----------|-----------|-----------|
| Primary | "Parlez à un expert" | "Talk to an expert" | Hero, Final CTA |
| Secondary | "Découvrir nos indicateurs" | "Discover our indicators" | Hero (secondary), Services section |
| Tertiary | "Recevoir la documentation" | "Receive documentation" | Indicator cards, Indicateurs page |

---

## SEO Content Strategy

### Metadata Templates

**Homepage:**
- Title: `Agritemis — Mesure scientifique du risque pesticide | Indicateurs ARI, CRI, BRI, CORI, WARI`
- Description: `Agritemis propose des indicateurs scientifiques pour mesurer et réduire le risque pesticide dans les filières agricoles. Découvrez ARI, CRI, CORI, BRI, WARI et VitiScore.`

**VitiScore:**
- Title: `VitiScore — Benchmark phytosanitaire pour la viticulture | Agritemis`
- Description: `VitiScore analyse plus de 1000 programmes de traitement pour évaluer l'empreinte pesticide de votre exploitation viticole. Comparez vos pratiques.`

**Indicateurs:**
- Title: `Indicateurs de risque pesticide ARI, CRI, CORI, BRI, WARI | Agritemis`
- Description: `5 indicateurs scientifiques pour évaluer le risque pesticide : toxicité aiguë (ARI), chronique (CRI), consommateur (CORI), biodiversité (BRI), eau (WARI).`

### Structured Data Per Page

| Page | Schema Types |
|------|-------------|
| All pages | `Organization`, `WebSite` |
| Homepage | `Organization`, `WebSite`, `Service` (x5) |
| VitiScore | `Product`, `SoftwareApplication` |
| Indicateurs | `Service` (x5), `FAQPage` |
| Contact | `ContactPage`, `LocalBusiness` |
| Mission | `AboutPage` |

### Target Keywords

| Page | Primary Keyword (FR) | Secondary |
|------|---------------------|-----------|
| Homepage | risque pesticide mesure | indicateurs phytosanitaires, transition agroécologique |
| VitiScore | benchmark viticulture pesticide | score phytosanitaire vigne, empreinte pesticide |
| Indicateurs | indicateur risque pesticide | ARI CRI CORI BRI WARI, toxicité pesticide |
| Mission | mission agritemis écologie | entreprise à mission agriculture |
| Contact | contact agritemis | expert risque pesticide |

---

## Translation Workflow

1. **Write in French first** — FR is the primary language and the team's native voice
2. **Adapt to English** — not literal translation; adjust for English B2B conventions
3. **Adapt to Spanish** — same approach; consider Latin American vs European Spanish (default: neutral)
4. **All text in `messages/*.json`** — no hardcoded strings in components
5. **Translation keys** follow namespace convention: `PageName.section_element` (e.g., `Landing.hero_headline`)
