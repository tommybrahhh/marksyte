---
name: Marksyte
description: Practical, traceable data workflows for clearer decisions
colors:
  ink: "#15201d"
  muted: "#61706c"
  soft: "#f4f0e8"
  surface: "#fffdf8"
  wash: "#edf3ee"
  line: "#d8ddd7"
  dark: "#141b1a"
  teal: "#007f73"
  green: "#bfd84f"
  coral: "#d7644a"
  gold: "#bd8e2e"
  violet: "#8172f2"
typography:
  display:
    fontFamily: "Aptos, Inter, Segoe UI, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 4.8rem)"
    fontWeight: 850
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Aptos, Inter, Segoe UI, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "SFMono-Regular, Consolas, Liberation Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.02em"
rounded:
  sm: "5px"
  md: "8px"
spacing:
  sm: "10px"
  md: "18px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "0 18px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "23px"
---

# Design System: Marksyte

## Overview

**Creative North Star: "The Traceable Workbench"**

Marksyte's visual system treats data work as something made visible on a shared workbench: calm paper surfaces, dark structural anchors, measured grids and small signals of status. It is analytical without becoming sterile, and practical without becoming generic enterprise UI.

The system favors restrained composition, strong editorial headlines, compact mono labels and clear operational groupings. Teal carries action and structure; green is a rare signal accent; dark panels create depth without relying on ornament.

**Key Characteristics:**

- Warm paper and pale green surfaces.
- Dark ink, teal action color and occasional green/coral/violet signals.
- Editorial headline scale paired with mono operational labels.
- 8px corners, fine borders and ambient shadows.
- Responsive grids that collapse into readable single-column flows.

## Colors

The palette is warm-neutral and low-glare, with teal as the primary functional accent and dark ink as the structural anchor.

### Primary

- **Operational Teal** (#007f73): Links, labels, active states and action emphasis.
- **Signal Green** (#bfd84f): Brand mark and restrained highlight details.

### Secondary

- **Measured Coral** (#d7644a): Secondary signal for selected visual accents.
- **Analytical Gold** (#bd8e2e): Secondary signal for supporting status or emphasis.
- **Focused Violet** (#8172f2): Occasional tertiary signal.

### Neutral

- **Deep Ink** (#15201d): Primary text.
- **Structural Dark** (#141b1a): Header CTAs, dark panels and high-contrast anchors.
- **Muted Copy** (#61706c): Supporting text.
- **Warm Paper** (#f4f0e8): Global background.
- **Clean Surface** (#fffdf8): Cards and reading surfaces.
- **Pale Wash** (#edf3ee): Section contrast.
- **Quiet Line** (#d8ddd7): Borders and dividers.

**The Teal-as-Signal Rule.** Use teal to direct action or interpretation, not as a blanket decoration.

## Typography

**Display Font:** Aptos with Inter, Segoe UI and system fallbacks.
**Body Font:** Aptos with system fallbacks.
**Label/Mono Font:** SFMono-Regular, Consolas or Liberation Mono.

**Character:** The sans-serif system is clear, contemporary and operational. Mono labels add a measured, technical register without turning the page into a developer tool.

### Hierarchy

- **Display** (850, `clamp(2.2rem, 5vw, 4.8rem)`, 0.98): Hero headlines and primary statements.
- **Headline** (800, responsive 2–3.65rem, around 1.0): Section-level propositions.
- **Title** (800, around 1.2–1.6rem, around 1.1): Cards and grouped decisions.
- **Body** (400, 1rem, 1.6): Explanatory copy, usually constrained for comfortable reading.
- **Label** (800, 0.7–0.8rem, uppercase mono): Eyebrows, breadcrumbs, status and metadata.

**The Short-Statement Rule.** Headlines should state the operational consequence before explaining the method.

## Layout

The layout uses a centered content rail capped at 1180px, with responsive side padding and generous vertical section spacing. Desktop pages use asymmetric two-column compositions for hero and explanatory sections, with three-column proof or decision grids. At narrow widths, grids collapse to one column, hero CTAs become full width, and cards lose unnecessary minimum heights.

The sticky header stays compact at roughly 72px minimum height. The page background includes a quiet 52px grid texture, while cards and sections use tonal changes more often than heavy decoration.

## Elevation & Depth

Depth is hybrid: fine borders and tonal layering establish the base hierarchy, while ambient shadows lift important cards and proof panels. Shadows are soft and broad rather than sharp or dramatic.

### Shadow Vocabulary

- **Ambient card lift** (`0 24px 70px rgba(21, 32, 29, 0.12)`): Hero-side cards and high-value containers.
- **Proof lift** (`0 18px 50px rgba(21, 32, 29, 0.08)`): Proof rails and supporting surfaces.

**The Flat-by-Default Rule.** Use elevation to clarify hierarchy, not to make every section look clickable.

## Shapes

The form language is gently squared: the core radius is 8px, with 5–7px only for smaller controls or badges. Borders are thin and low-contrast. Cards clip their contents when needed; avoid pills except for compact status or language controls.

## Components

### Buttons

- **Shape:** Gently squared corners (8px).
- **Primary:** Structural dark background, warm surface text, compact horizontal padding and high font weight.
- **Hover / Focus:** Slight upward translation on hover; clear teal focus outline with offset.
- **Secondary / Text:** Quiet text links use teal emphasis and generous vertical target space.

### Cards / Containers

- **Corner Style:** 8px radius with fine borders.
- **Background:** Clean surface, pale wash or dark structural panel depending on hierarchy.
- **Shadow Strategy:** Ambient lift reserved for hero, proof and featured containers.
- **Internal Padding:** Usually 18–26px, expanding for major panels.

### Navigation

Sticky, translucent warm-paper header with blur, compact bold links, a dark action button and a bordered language switch. Active language is shown as a state, not by color alone.

### Service Proof Rail

Three compact principles or outputs in a bordered grid. Use short operational verbs, one supporting sentence and teal as the lead signal.

## Do's and Don'ts

### Do:

- **Do** make operational outcomes visible in the first viewport.
- **Do** use teal selectively for action, links and interpretation.
- **Do** pair editorial statements with concrete deliverables or evidence.
- **Do** preserve readable single-column mobile flows and visible focus states.

### Don't:

- **Don't** invent testimonials, client logos, metrics or proof claims.
- **Don't** turn every surface into a dark panel or every accent into decoration.
- **Don't** use generic transformation language when a concrete data workflow can be named.
- **Don't** replace the bilingual route structure or static-deployment constraints.
