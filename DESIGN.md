---
name: Marksyte
description: A controlled evidence archive for retail data reconciliation
colors:
  shared-page: "#F4F6FA"
  shared-surface: "#FFFFFF"
  shared-ink: "#0B0D12"
  shared-muted: "#667085"
  shared-blue: "#2588F5"
  shared-blue-hover: "#1476DF"
  shared-blue-soft: "#EAF4FF"
  shared-line: "#E6EBF2"
  shared-on-blue: "#FFFFFF"
  page: "#F7F7F5"
  surface: "#FFFFFF"
  surface-subtle: "#FCFCFB"
  ink: "#101114"
  muted: "#62666D"
  blue: "#1769C2"
  blue-dark: "#105FC0"
  blue-soft: "#EAF3FD"
  line: "#D9DDE3"
  line-strong: "#7B8795"
  dark: "#111820"
  on-blue: "#EEF6FF"
  warning: "#9B4F16"
  warning-on-dark: "#F0A15A"
  success: "#146B4A"
  success-on-dark: "#80D3A5"
  focus-ring: "#1769C2"
typography:
  homepage-heading:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(48px, 3.5vw, 52px)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  shared-display:
    fontFamily: "Sora, sans-serif"
    fontWeight: 700
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  metadata:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.06em"
  editorial:
    fontFamily: "Newsreader, Georgia, serif"
    fontWeight: 400
  local-editorial:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontWeight: 400
  service-case-title:
    fontFamily: "Sora, sans-serif"
    fontWeight: 700
  article-title:
    fontFamily: "Newsreader, Georgia, serif"
    fontWeight: 500
rounded:
  homepage-sm: "8px"
  homepage-md: "12px"
  homepage-lg: "16px"
  homepage-xl: "20px"
  control: "10px"
  evidence: "12px"
  card: "14px"
  section: "20px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-blue}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    minHeight: "48px"
  button-primary-hover:
    backgroundColor: "{colors.blue-dark}"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.control}"
  review-sheet:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "18px"
    border: "1px solid {colors.line}"
  source-fragment:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.ink}"
    rounded: "{rounded.evidence}"
    border: "1px solid {colors.line}"
  working-paper:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.evidence}"
    border: "1px solid {colors.line}"
  status-chip:
    typography: "{typography.metadata}"
    rounded: "{rounded.pill}"
  input-field:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "5px"
    padding: "11px 12px"
  focus-ring:
    color: "{colors.focus-ring}"
    width: "3px"
    offset: "4px"
---

# Design System: Marksyte

## Overview

**Creative North Star: "The Controlled Evidence File"**

Marksyte looks like a controlled evidence file opened for review: warm-neutral page surfaces, soft outer shells, precise records, compact metadata, and blue control states. The atmosphere is analytical and exact without becoming cold. Realistic, selectable tables, ledgers, diagrams, and document previews make the methodology visible; generic dashboard chrome does not.

The visual system moves between broad tonal fields and precise evidence artifacts. Large propositions establish the conclusion, while smaller Manrope labels, references, statuses, and rows show how that conclusion can be audited. The resulting density is deliberate: spacious at the page level, compact inside controlled records. The homepage stays quiet so the evidence can be precise.

`styles.css` is the shared foundation. It owns shared tokens, base chrome, service and case family rules, legal treatment, and shared accessibility behavior. `home.css` owns the homepage tokens, heading hierarchy, review sheet, source fragments, walkthrough, outcomes, working papers, and homepage interaction refinements. `assets/blog/article-enhancements.css` owns article-specific reading treatment. Local study-case stylesheets remain isolated from the shared foundation. The blog and article families keep their Read-mode typography, and the homepage does not set the type system for those routes.

**Key Characteristics:**

- Manrope homepage headings paired with operational records
- Soft shells around precise inner evidence, with quiet structural separators
- Blue reserved for actions, links, mappings, paths, and controlled states
- Flat tonal sections with depth concentrated on inspectable evidence artifacts
- Realistic, selectable data objects instead of generic software mockups
- A wide, asymmetric first-view rhythm that gives the review sheet equal authority to the proposition
- A calmer product voice that remains distinct from OpenAI and ChatGPT
- Bilingual routes with usable wrapping, visible focus, and touch-friendly actions

## Colors

The shared palette provides a neutral foundation for every family. The homepage narrows that palette to warm-neutral surfaces, accessible semantic blue, and a neutral dark operational field.

### Shared foundation

`styles.css` owns the shared page, surface, ink, muted, blue, soft-blue, border, radius, and focus aliases. The current shared foundation resolves to `#F4F6FA`, `#FFFFFF`, `#0B0D12`, `#667085`, `#2588F5`, `#EAF4FF`, and `#E6EBF2`. The shared semantic action roles are `--blue-action: #1769C2`, `--blue-dark: #105FC0`, `--on-blue: #FFFFFF`, and `--line-strong: #7B8795`.

The old aliases remain in `styles.css` while page families migrate. They are compatibility names, not a second design direction. Shared changes must be checked against service, case, blog, article, owner, and legal pages before they are changed.

### Homepage roles

`home.css` owns the homepage palette. `--page` is `#F7F7F5`, `--surface` is `#FFFFFF`, `--surface-subtle` is `#FCFCFB`, `--ink` is `#101114`, `--muted` is `#62666D`, `--line` is `#D9DDE3`, and `--line-strong` is `#7B8795`. `--blue` is `#1769C2`, `--blue-dark` is `#105FC0`, and `--blue-soft` is `#EAF3FD`.

On the homepage, blue communicates actions, links, mappings, paths, selected rows, and controlled outputs. It does not act as ambient decoration. `--warning` and `--success` serve light surfaces, while `--warning-on-dark` and `--success-on-dark` preserve the same meanings on the walkthrough. `--on-blue` is `#EEF6FF`. The outcomes section uses the accessible blue action field with light text.

**The Quiet-Page Rule.** Keep the page calm before the evidence begins.

**The Soft-Shell Rule.** Let a soft outer shell frame precise inner records.

**The Controlled Blue Rule.** Blue must communicate action, path, mapping, output, or state. It is never ambient decoration.

## Ownership by page family

- **Homepage:** `home.css` owns the warm-neutral page, review-sheet evidence system, neutral walkthrough, outcomes field, working papers, and homepage interaction states
- **Service and case pages:** `styles.css` owns the shared foundation and the scoped operational family rules, with Sora still active for the existing service, case, and legal title treatment
- **Blog index and articles:** `styles.css` provides the shared shell and `assets/blog/article-enhancements.css` owns article reading treatment. These routes keep their Read-mode typography
- **Owner and About pages:** `styles.css` keeps their editorial family treatment separate from the homepage heading system
- **Legal pages:** `styles.css` keeps legal treatment scoped to the legal family
- **Local study cases:** Each local stylesheet owns its artifact palette, diagrams, gradients, and geometry. Those files do not inherit homepage evidence geometry by default

The shared aliases in `styles.css` remain for compatibility while families migrate. The homepage aliases in `home.css` intentionally resolve to different warm-neutral and evidence values. A shared token change must be checked against every family before it is made.

## Typography

**Homepage heading font:** Manrope with a sans-serif fallback. Homepage `h1`, `h2`, and `h3` use weight 600, `-0.035em` tracking, and a 1.03 line height. The hero heading uses a compact `clamp(48px, 3.5vw, 52px)` scale and keeps the authored line breaks.

**Shared service, case, and legal display font:** Sora remains active through the shared family rules for those page families.

**Body font:** Manrope with a sans-serif fallback, at 16px and 1.6 line height in the homepage layer.

**Metadata font:** Manrope. Homepage metadata stays compact, tracked, and usually uppercase. Small table headers and document metadata remain intentional evidence density.

**Editorial exception:** Newsreader remains for annotations and selected human or editorial notes, including outcome and expertise-file emphasis where the homepage deliberately uses it. Blog and article routes keep their Read-mode editorial typography. Locally styled study cases may use their own Instrument Sans, Instrument Serif, and IBM Plex Mono stack.

### Hierarchy

- **Homepage heading** (600, `--sans`, 1.03): Confident section conclusions without oversized or heavily editorial display type
- **Shared family heading** (700, `--font-display`): Service, case, and legal titles where the existing family rules still use Sora
- **Editorial note** (400–500, Newsreader): Annotations and selected human notes that benefit from a warmer reading voice
- **Body** (400, `--font-body`): Explanations with readable leading and a controlled measure
- **Metadata** (600, compact, tracked): References, owners, column headers, stage numbers, and state labels. Weight 700 or 800 is reserved for genuinely high-emphasis labels

**The Conclusion-and-Evidence Rule.** Use the page family's heading voice to state what matters and Manrope to show how it is controlled.

**The Compact Metadata Rule.** Metadata may be small because it is repeated and structured, but it must remain high-contrast, tracked, and legible.

## Layout

The system uses generous page-scale spacing around compact evidence. The homepage uses a wide shell capped by `--max: 1240px`, with an asymmetric first view: a direct proposition beside the reconciliation review sheet. Later layouts alternate flat page sections, precise evidence objects, a neutral dark walkthrough, working-paper stacks, and line-based process rows.

The homepage keeps the page background warm and neutral, then uses white and subtle white shells for evidence. The outcomes section is the controlled blue field. The walkthrough is a neutral `#181818` operational surface. Major section padding stays spacious while internal artifacts use compact evidence spacing.

At 1100px, the homepage hero and supporting grids simplify. At 960px, the five-step walkthrough becomes two columns and its connector arrows disappear. At 820px, the homepage hides the main navigation and header CTA to preserve the compact header. At 560px, the walkthrough becomes one column, source tables keep a local `430px` minimum, and translated Spanish tables can scroll inside their fragment. Anchor targets keep responsive sticky-header offsets.

**The Spacious-Outside, Dense-Inside Rule.** Give evidence artifacts air at the page level, then allow their internal rows and metadata to be compact.

## Elevation & Depth

This is a flat-by-default system. Neutral fields, white papers, one-pixel rules, and precise boundaries establish most hierarchy. Depth is concentrated on artifacts that should read as physical evidence placed on a working surface. Ordinary sections, service rows, and form containers remain flat.

### Shadow Vocabulary

- **Review-sheet lift** (`0 1px 2px rgba(0, 0, 0, .03), 0 10px 30px rgba(0, 0, 0, .04)`): The homepage reconciliation review sheet.
- **Working-paper lift** (`0 10px 24px rgba(12, 20, 32, .06)`): Layered document previews and other literal paper artifacts.
- Local study-case diagrams and legacy artifacts may keep their own shadows, gradients, and geometry. They remain route-scoped.

**The Evidence-Only Elevation Rule.** A shadow means “this is an inspectable artifact,” not merely “this is a container.”

## Shapes

The form language is disciplined and lightly softened. Homepage controls use a 10px radius. Source fragments and working papers use 12px. Flow cards use 14px. Larger homepage modules use 16px and 20px where the existing implementation calls for them. Hairlines and square-edged dark fields keep those curves from feeling playful.

Pills are reserved for compact status controls and existing language or status treatments. Homepage buttons are rounded controls, not full pills. Tables, mapping bands, ledgers, and large tonal chapters remain rectilinear so the page retains the character of a controlled evidence file.

**The Restricted Curve Rule.** Use the explicit radius vocabulary in the owning stylesheet. Do not turn every section into a rounded card.

## Components

### Primary Button

- **Character:** Direct, compact, and unmistakably actionable.
- **Shape:** Rounded control with a 10px radius and at least a 48px homepage height
- **Color:** Accessible blue for primary blue actions, dark neutral for neutral actions, and white text that remains readable on both
- **States:** Move upward by only 1px on hover. Use a visible, offset focus outline; keep reduced-motion behavior intact

### Navigation

- **Character:** Quiet archive index rather than application chrome.
- **Structure:** Quiet header with Marksyte identifier, short text-link set, one compact action, and a two-option language control.
- **Responsive behavior:** At 820px, keep the brand and language access while removing the main navigation and header CTA rather than crowding the line. Visible navigation and footer links retain 44px interactive height

### Reconciliation Review Sheet

- **Character:** The signature evidence object and visual thesis of the system.
- **Surface:** White evidence shell with a `#D9DDE3` border, 18px corner, hidden overflow, and a quiet evidence-only shadow
- **Contents:** Two soft inner source fragments, a blue mapping band, a controlled ledger, status markers, and a dark output field. Records should look selectable and operational, not illustrated as a decorative screenshot
- **Mobile behavior:** The shell stays intact while source tables scroll locally. The review stamp remains visible and retains its bilingual clearance

### Service-Stage Line Diagram

- **Character:** A concise methodological diagram, not a feature icon.
- **Shape:** Flat family-specific process rows with precise boundaries.
- **Drawing:** Keep lines, fills, and state marks subordinate to the evidence. Use blue only for a real path, mapping, action, or state.

### Working-Paper Preview

- **Character:** A real deliverable placed on the page for inspection.
- **Shape:** White document with a 12px corner, quiet border, and working-paper lift
- **Structure:** Strong header rule, compact owner and status metadata, and a fixed-layout table. Slight rotations distinguish a physical stack, but content must remain readable

### Status Chip

- **Character:** Small, factual, and state-specific.
- **Shape:** A compact pill only where the existing route uses a status control. Review-sheet markers and stamps use their own evidence geometry
- **Color:** Use warning and success roles for the meaning they already carry, with separate dark-surface values in the walkthrough. Do not use status color without text or structure

### Input / Form

- **Character:** A plain working field on a white evidence surface.
- **Shape:** White form surface with 5px control corners and quiet one-pixel borders
- **Focus:** Shift the border to blue and add a restrained visible outline. Preserve native labels, required semantics, and visible status messaging

### Walkthrough Flow Artifact

- **Character:** A five-stage evidence chain that shows source, mapping, comparison, decision, and controlled output.
- **Structure:** `#222` flow cards with `#333` boundaries sit on a neutral `#181818` field. Anomaly and fixed states use distinct text, borders, and labels. Connector arrows stay neutral and readable
- **Responsive behavior:** Five columns become two at 960px and one at 560px. Connector arrows disappear when cards are gridded or stacked, while the ordered list remains 01 through 05

## Accessibility and interaction behavior

Homepage buttons, visible navigation links, footer links, language links, secondary links, and practical contact links keep at least a 44px interactive area. Main navigation is removed from the mobile tab order when it is hidden. Focus-visible outlines remain blue, at least 3px wide, and offset from the control. Dark-surface links use a light focus treatment where needed.

The homepage keeps `scroll-margin-top` offsets for sticky-header anchors, including `#how-we-work`. Source tables scroll inside their fragments at mobile widths and do not widen the page. Warning, success, anomaly, and fixed states use text and structure as well as color.

Reduced motion changes smooth scrolling to automatic, removes transition timing, and disables hover transforms. This behavior remains in the homepage, shared foundation, article layer, and local case styles where those rules exist.

English and Spanish routes share the same section structure and interaction hooks. Spanish headings, metadata, buttons, and source tables are allowed to wrap or scroll locally when the translation needs more space. The authored English breaks remain intact.

## Intentional exceptions

- Compact evidence metadata, 8px table headers, and 9px document metadata preserve inspectable density where the text remains readable
- Working papers keep their slight rotations and evidence-only shadows to read as physical documents
- The homepage `.expertise-file` keeps its blue field, black boundary, and offset line as a deliberate artifact rather than a generic card
- Quiet light separators and dark walkthrough row rules support grouping without pretending to be interactive indicators
- Local case diagrams, gradients, typography, and full-bleed sections remain isolated route-specific artifacts. The brand-relevance dark blocks use the local content container width so their background reaches the viewport without scrollbar overflow
- The Spanish alcohol study case has no genuine English counterpart and remains unpaired rather than receiving invented hreflang metadata
- The English EES airport study case has no genuine Spanish counterpart and keeps only its English and `x-default` alternates

The Phase 5B detector findings are treated as documentation and scope checks, not as reasons to redesign the page. Suggestions about heavier shared styles or broader radius use belong to the shared or family-specific layers. Compact metadata, rotated papers, local artifact geometry, and Newsreader notes are intentional exceptions. No detector suggestion overrides the current accessibility and ownership rules.

## Do's and Don'ts

### Do:

- **Do** pair large editorial conclusions with realistic, selectable evidence artifacts.
- **Do** keep the page quiet before the evidence begins, then use soft shells around precise records
- **Do** reserve blue for action, links, mappings, paths, outputs, and explicit status
- **Do** keep metadata compact, structured, and clearly subordinate to the conclusion it supports.
- **Do** flatten ordinary sections and spend depth only on review sheets and literal working papers.
- **Do** preserve bilingual navigation, visible focus, strong contrast, touch-friendly actions, and reduced-motion behavior.

### Don't:

- **Don't** turn reconciliation evidence into a generic SaaS dashboard, floating metric-card grid, or decorative analytics mockup.
- **Don't** soften every container into a large rounded card; the system depends on rectilinear fields, hairlines, and paper edges.
- **Don't** use blue as an ambient decoration or introduce competing accents that weaken its control meaning.
- **Don't** make metadata look like code for its own sake; it should read as an archive locator or operational label.
- **Don't** add shadows to service rows, tonal chapters, or every form field.
- **Don't** substitute invented proof, client identities, claims, or decorative charts for inspectable process artifacts.
