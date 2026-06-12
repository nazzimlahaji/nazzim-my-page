---
name: ui-ux-pro-max
description: "Use when: making UI structure, visual design, interaction, or UX-quality decisions for this web app. Provides a searchable design-intelligence database — 67 UI styles, 161 color palettes, 57 font pairings, 161 product types with reasoning rules, 99 UX guidelines, and 25 chart types across 16 stacks. Triggers: design a page, build/refactor a component (button, modal, navbar, card, table, form, chart), choose colors/typography/spacing/layout, review UI for accessibility or visual consistency, add dark mode, animations, responsive behavior, or data viz. Source: github.com/nextlevelbuilder/ui-ux-pro-max-skill (MIT)."
argument-hint: "Optional: what you are designing (e.g. 'portfolio hero', 'skills dashboard', 'dark mode', 'contact form')"
---

# UI/UX Pro Max — Design Intelligence

Offline, searchable design knowledge base with priority-based recommendations. A Python CLI (stdlib only) ranks rules with BM25 over local CSV data — no network, no API key.

## Project Context (read first)

This repo is a **web** app, not a native/React-Native app:

| Aspect | This project |
| ------ | ------------ |
| Stack flag | `--stack react` (React 19 + Vite). **Not** `react-native`. |
| UI library | MUI v7 (`@mui/material`). Map recommendations onto MUI primitives + theme tokens — do **not** introduce Tailwind/shadcn. |
| Tokens | Express palette/typography as MUI theme tokens (`palette.*`, `typography.*`, `sx`), per [mui-theme](../mui-theme/SKILL.md). |
| Colors/units | `4.5:1` contrast and `4/8px` spacing rhythm apply on web; touch targets ≥ `44px`. |

> Some database rows are written for App UI (iOS/Android). Treat "44pt/48dp", "hitSlop", "Pressable", "safe-area" as their **web equivalents**: 44px hit areas, `:hover`/`:focus-visible`/`:active` states, and CSS env(safe-area-inset-*) only where relevant. The Accessibility, Typography, Color, Layout, Animation, Forms, and Charts guidance is stack-agnostic and applies directly.

## When to Apply

**Must use** — designing pages, creating/refactoring UI components, choosing color/typography/spacing/layout systems, reviewing UI for accessibility or visual consistency, implementing navigation/animation/responsive behavior, product-level style decisions.

**Recommended** — UI "doesn't look professional" but the reason is unclear; usability feedback; pre-launch polish; building a design system or reusable components.

**Skip** — pure backend/API/database logic, infra/DevOps, non-visual automation.

**Decision criterion:** if the task changes how a feature **looks, feels, moves, or is interacted with**, use this skill.

## Prerequisites

Python 3 (stdlib only — no pip install needed):

```bash
python3 --version || python --version
```

## How to Use

All commands run from the **project root**. The script resolves its data relative to its own location, so the path below works as-is.

### Step 1 — Analyze the request
Extract: product type (portfolio, dashboard, landing, SaaS, e-commerce…), audience, style keywords (minimal, editorial, glass, dark…), and that the stack is **React + MUI (web)**.

### Step 2 — Generate a design system (REQUIRED first step)

```bash
python3 .github/skills/ui-ux-pro-max/scripts/search.py "<product> <industry> <keywords>" --design-system [-p "Project Name"]
```

Returns a full system: layout pattern, style, color roles (with CSS variables), typography pairing, effects, and anti-patterns. Add `-f markdown` for doc-friendly output.

```bash
# Example tuned to this repo (a personal developer page):
python3 .github/skills/ui-ux-pro-max/scripts/search.py "developer portfolio personal website minimal professional" --design-system -f markdown -p "Nazzim"
```

**Persist across sessions** with `--persist` (writes `design-system/MASTER.md`) and optionally `--page "<name>"` (writes `design-system/pages/<name>.md` as an override). When building a page, read `design-system/pages/<page>.md` if it exists, else fall back to `MASTER.md`.

### Step 3 — Deep-dive a dimension (as needed)

```bash
python3 .github/skills/ui-ux-pro-max/scripts/search.py "<keywords>" --domain <domain> [-n <max_results>]
```

| Need | Domain | Example keywords |
|------|--------|------------------|
| Product-type patterns | `product` | `portfolio`, `saas`, `ecommerce`, `dashboard` |
| Styles / effects | `style` | `glassmorphism`, `minimalism`, `dark mode`, `editorial` |
| Color palettes | `color` | `saas vibrant`, `fintech`, `portfolio neutral` |
| Font pairings | `typography` | `elegant`, `playful`, `professional`, `modern` |
| Individual Google Fonts | `google-fonts` | `sans serif variable popular` |
| Landing structure / CTA | `landing` | `hero social-proof pricing` |
| Charts / data viz | `chart` | `trend comparison funnel` |
| UX rules & anti-patterns | `ux` | `accessibility animation loading z-index` |
| React perf | `react` | `rerender memo suspense bundle` |
| Web/app interface a11y | `web` | `touch targets focus contrast` |

### Step 4 — Stack guidelines (React)

```bash
python3 .github/skills/ui-ux-pro-max/scripts/search.py "<keywords>" --stack react
```

> Available stacks include `react`, `nextjs`, `vue`, `svelte`, `astro`, `html-tailwind`, `shadcn`, `swiftui`, `react-native`, `flutter`, and more. **For this project use `react`.**

### Step 5 — Synthesize & implement
Combine the design system + domain deep-dives, then implement with MUI primitives and theme tokens. Validate against the Quick Reference below before delivery.

---

## Rule Categories by Priority

Work 1→10; the lower the number, the higher the impact. Use `--domain <Domain>` to pull details.

| # | Category | Impact | Domain | Must have | Avoid |
|---|----------|--------|--------|-----------|-------|
| 1 | Accessibility | CRITICAL | `ux` | Contrast 4.5:1, alt text, keyboard nav, aria-labels | Removing focus rings, icon-only buttons w/o labels |
| 2 | Interaction | CRITICAL | `ux` | Hit area ≥44px, visible hover/focus/active, loading feedback | Hover-only affordance, instant (0ms) state changes |
| 3 | Performance | HIGH | `ux` | WebP/AVIF, lazy load, reserve space (CLS<0.1) | Layout thrash, cumulative layout shift |
| 4 | Style selection | HIGH | `style`,`product` | Match product type, consistency, SVG icons | Mixing flat & skeuomorphic, emoji as icons |
| 5 | Layout & responsive | HIGH | `ux` | Mobile-first breakpoints, viewport meta, no h-scroll | Fixed px widths, disabling zoom |
| 6 | Typography & color | MEDIUM | `typography`,`color` | 16px base, line-height 1.5, semantic tokens | <12px body, gray-on-gray, raw hex in components |
| 7 | Animation | MEDIUM | `ux` | 150–300ms, motion conveys meaning, reduced-motion | Decorative-only, animating width/height |
| 8 | Forms & feedback | MEDIUM | `ux` | Visible labels, inline errors, helper text | Placeholder-only labels, errors only at top |
| 9 | Navigation | HIGH | `ux` | Predictable back, active state, deep links | Overloaded nav, broken back, mixed patterns |
| 10 | Charts & data | LOW | `chart` | Legends, tooltips, accessible colors | Color-alone meaning, pie for >5 categories |

## Quick Reference (condensed checklist)

Use this for fast reviews; query `--domain ux` (and `--domain chart`) for the full rule text and rationale.

**1. Accessibility (CRITICAL)** — contrast ≥4.5:1 (3:1 large), visible focus rings (2–4px), descriptive alt text, `aria-label` on icon-only buttons, tab order matches visual order, `<label for>` on inputs, sequential headings, never convey meaning by color alone, respect `prefers-reduced-motion`, provide cancel/back/escape routes.

**2. Interaction (CRITICAL)** — hit area ≥44px (extend beyond visual bounds), ≥8px gap between targets, click/tap for primary actions (not hover), disable buttons during async + show spinner, errors near the field, `cursor: pointer` on clickable elements, visible press feedback, never rely on gesture-only.

**3. Performance (HIGH)** — WebP/AVIF + `srcset`, declare `width`/`height` or `aspect-ratio` (CLS), `font-display: swap`, preload only critical fonts, route/feature code-splitting (`React.lazy`/Suspense), async/defer 3rd-party, skeletons for >1s loads, virtualize 50+ item lists, debounce/throttle high-frequency events.

**4. Style selection (HIGH)** — match style to product type, one consistent style across pages, SVG icons not emoji, palette derived from product/industry, effects (shadow/blur/radius) aligned to chosen style, distinct hover/pressed/disabled states, consistent elevation scale, design light+dark together, one icon set, one primary CTA per screen.

**5. Layout & responsive (HIGH)** — `viewport` meta `width=device-width, initial-scale=1` (never disable zoom), mobile-first, systematic breakpoints (375/768/1024/1440), 16px min body on mobile, 35–75 char line length, no horizontal scroll, 4/8px spacing scale, consistent max-width, defined z-index scale, hierarchy via size/spacing/contrast (not color).

**6. Typography & color (MEDIUM)** — line-height 1.5–1.75, 65–75 char measure, paired heading/body fonts, consistent type scale (12 14 16 18 24 32), dark text on light bg, semantic color tokens (primary/secondary/error/surface) not raw hex, dark mode uses desaturated tonal variants (not inverted), foreground/background ≥4.5:1, functional color always paired with icon/text, tabular figures for data/prices.

**7. Animation (MEDIUM)** — 150–300ms micro / ≤400ms complex, animate `transform`/`opacity` only, skeleton when >300ms, 1–2 key elements per view, ease-out enter / ease-in exit, motion expresses cause→effect, exit ~60–70% of enter duration, stagger lists 30–50ms, interruptible, never block input, respect reduced-motion, no layout reflow (use transform).

**8. Forms & feedback (MEDIUM)** — visible label per input, error below the field, loading→success/error on submit, mark required fields, helpful empty states, auto-dismiss toasts 3–5s (`aria-live="polite"`, no focus steal), confirm destructive actions + offer undo, persistent helper text, validate on blur, semantic input types, password show/hide, autocomplete, auto-focus first invalid field, error summary w/ anchors, group related fields, error messages state cause + fix.

**9. Navigation (HIGH)** — active location highlighted, both icon + label, predictable/consistent back that preserves scroll & state, deep-linkable routes, clear modal dismiss, breadcrumbs for 3+ levels deep, sidebar on ≥1024px, don't mix tab+sidebar+bottom-nav at one level, never use modals for primary navigation, move focus to main on route change, separate destructive actions from normal nav.

**10. Charts & data (LOW)** — match chart to data (trend→line, compare→bar, proportion→pie/donut ≤5 slices), accessible palettes (no red/green-only), provide a data-table alternative, supplement color with pattern/shape, always show legend, tooltips on hover/tap with exact values, labeled axes w/ units, responsive reflow, meaningful empty + loading + error states, locale-aware number formatting, keyboard-reachable interactive elements, screen-reader summary, sortable tables with `aria-sort`.

---

## Tips

- Use **multi-dimensional keywords**: `"developer portfolio minimal professional"`, not `"site"`.
- Run `--design-system` first; then `--domain` to resolve any dimension you're unsure about.
- Pre-delivery pass: `--domain ux "animation accessibility loading"`, then walk Quick Reference §1–§3.
- Test at 375px and 1440px; verify dark mode contrast independently; confirm reduced-motion behavior; confirm all interactive hit areas ≥44px.

## Common sticking points

| Problem | Where to look |
|---------|---------------|
| Can't decide style/color | Re-run `--design-system` with different keywords |
| Dark mode contrast | QR §6 `color-dark-mode`, `color-accessible-pairs` |
| Animation feels unnatural | QR §7 `easing`, `exit-faster-than-enter` |
| Poor form UX | QR §8 `inline-validation`, `error-clarity`, `focus-management` |
| Confusing navigation | QR §9 `nav-hierarchy`, `back-behavior` |
| Layout breaks small screens | QR §5 `mobile-first`, `breakpoint-consistency` |
| Jank / slow | QR §3 `virtualize-lists`, `debounce-throttle` |

## Maintenance

Source repo: <https://github.com/nextlevelbuilder/ui-ux-pro-max-skill> (MIT, v2.5.0). This is a vendored copy under `scripts/` + `data/`. To update, re-vendor those two folders from the repo's `src/ui-ux-pro-max/`; do **not** hand-edit the CSVs. The data is read-only at query time and never sends anything over the network.
