---
name: Marksyte
description: A controlled European evidence archive for retail data reconciliation
colors:
  paper: "#FFFFFF"
  evidence-ink: "#09111F"
  archive-navy: "#0B1F38"
  archive-navy-secondary: "#132B48"
  action-blue: "#2588F5"
  action-blue-hover: "#1476DF"
  field-blue: "#0875E1"
  working-paper-blue: "#EAF4FF"
  archive-line: "#CFDAE8"
  metadata-muted: "#536176"
  pass-wash: "#DFF5EB"
  pass-ink: "#096344"
  open-wash: "#E6F1FF"
  open-ink: "#075CAE"
typography:
  display:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(3.6rem, 5.7vw, 5.8rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  metadata:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.06em"
rounded:
  document: "12px"
  field: "14px"
  dossier: "16px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.action-blue}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 19px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.action-blue-hover}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
  reconciliation-dossier:
    backgroundColor: "{colors.working-paper-blue}"
    textColor: "{colors.evidence-ink}"
    rounded: "{rounded.dossier}"
    padding: "24px"
  working-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.evidence-ink}"
    rounded: "{rounded.document}"
    padding: "24px"
  status-chip-open:
    backgroundColor: "{colors.open-wash}"
    textColor: "{colors.open-ink}"
    typography: "{typography.metadata}"
    rounded: "{rounded.pill}"
    padding: "5px 8px"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.evidence-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "13px 14px"
---

# Design System: Marksyte

## Overview

**Creative North Star: "The Controlled Evidence File"**

Marksyte looks like a European reconciliation archive opened for review: white and pale-blue working papers, disciplined navy rules, compact metadata, and bright-blue control states. The atmosphere is analytical and exact without becoming cold. Realistic, selectable tables, ledgers, diagrams, and document previews make the methodology visible; generic dashboard chrome does not.

The visual system moves between broad tonal fields and precise evidence artifacts. Large editorial propositions establish the conclusion, while smaller Manrope labels, references, statuses, and rows show how that conclusion can be audited. The resulting density is deliberate: spacious at the page level, compact inside controlled records.

**Key Characteristics:**

- Editorial Sora propositions paired with operational Manrope records.
- White and pale-blue papers structured by navy rules and hairlines.
- Bright blue reserved for action, active paths, and controlled outputs.
- Flat tonal sections with depth concentrated on evidence artifacts.
- Realistic, selectable data objects instead of generic software mockups.
- A wide, asymmetric first-view rhythm that gives the dossier equal authority to the proposition.

## Colors

The palette is a controlled archive: white paper and pale-blue working fields carry evidence, navy gives it authority, and blue marks the active reconciliation path.

### Primary

- **Action Blue** (`action-blue`): Primary actions, active mapping bands, reconciliation paths, and current control states.
- **Action Blue Hover** (`action-blue-hover`): Hover and pressed treatment for primary controls.

### Secondary

- **Field Blue** (`field-blue`): Full-width evidence fields and high-emphasis process sections; use it for a decisive chapter, not a second CTA color.
- **Archive Navy** (`archive-navy`): Structural rules, controlled output fields, and dark methodology sections.
- **Secondary Archive Navy** (`archive-navy-secondary`): Supporting dark fields and the blue-black basis of ambient shadows.

### Tertiary

- **Working-Paper Blue** (`working-paper-blue`): Dossier grounds, explanatory fields, and low-emphasis status context.
- **Pass Wash / Pass Ink** (`pass-wash`, `pass-ink`): A reconciled or ready state with sufficient text contrast.
- **Open Wash / Open Ink** (`open-wash`, `open-ink`): An exception or item still in review.

### Neutral

- **Paper** (`paper`): The main canvas, document sheets, form surfaces, and diagram cards.
- **Evidence Ink** (`evidence-ink`): Primary text and values on light surfaces.
- **Metadata Muted** (`metadata-muted`): Explanatory copy, document metadata, and secondary values.
- **Archive Line** (`archive-line`): Hairlines, table rules, input borders, and dossier boundaries.

**The Controlled Blue Rule.** Blue must communicate action, path, output, or state. It is never ambient decoration.

**The Paper-and-Rule Rule.** Establish hierarchy with paper tone and a navy or cool hairline before adding another color.

## Typography

**Display Font:** Sora with a sans-serif fallback.

**Body Font:** Manrope with a sans-serif fallback.

**Metadata Font:** Manrope; compact, tracked, and usually uppercase.

**Character:** Sora makes the conclusions feel editorial and decisive. Manrope keeps dense working records readable and contemporary. The contrast between the two mirrors the service itself: a clear commercial conclusion supported by controlled operational detail.

### Hierarchy

- **Display** (700, `display`, 0.95): First-view propositions only; balance the lines and hold the measure near ten characters where the composition allows.
- **Headline** (700, `headline`, 1): Major section conclusions and the titles of evidence chapters.
- **Title** (600–700, about 1–1.45rem, 1–1.2): Working-paper titles, stage conclusions, and artifact headings.
- **Body** (400, `body`): Explanations with generous leading and a comfortable measure around 49–58 characters.
- **Metadata** (700–800, 0.61–0.78rem, 0.035–0.08em tracking): References, owners, column headers, stage numbers, and state labels; uppercase when it acts as a locator.

**The Conclusion-and-Evidence Rule.** Use Sora to state what matters and Manrope to show how it is controlled.

**The Compact Metadata Rule.** Metadata may be small because it is repeated and structured, but it must remain high-contrast, tracked, and legible.

## Layout

The system uses generous page-scale spacing around compact evidence. Primary compositions sit in a wide shell of roughly 1280px, with the hero allowed to reach 1440px. The first viewport is an asymmetric two-column arrangement: a direct proposition beside a large reconciliation dossier. Later layouts alternate full-width tonal chapters with flat white sections, working-paper stacks, and line-based process rows.

The durable field rhythm is white, pale blue, white, navy, white, strong blue, white, pale blue. This alternating sequence makes long pages navigable without cardifying every section. Major section padding scales from roughly 86px to 150px; internal artifacts use the compact 8–32px spacing vocabulary.

At 1180px, complex grids simplify and supporting layouts begin to stack. At 900px, the hero becomes a single column and four-stage flows become two columns. At 760px, navigation is reduced, artifacts stack or compress, the dossier uses a 14px corner, and nonessential connector lines disappear. Preserve readable records on mobile by reflowing metadata and columns before shrinking text.

**The Spacious-Outside, Dense-Inside Rule.** Give evidence artifacts air at the page level, then allow their internal rows and metadata to be compact.

## Elevation & Depth

This is a flat-by-default system. Tonal fields, navy blocks, white papers, and one-pixel rules establish most hierarchy. Depth is concentrated on artifacts that should read as physical evidence placed on a working surface; ordinary sections, service rows, and form containers remain flat.

### Shadow Vocabulary

- **Dossier lift** (`0 26px 60px rgba(19, 55, 94, 0.12)`): The large reconciliation dossier in the primary evidence position.
- **Working-paper lift** (`0 18px 38px rgba(21, 49, 83, 0.09)`): Layered document previews and other literal paper artifacts.

**The Evidence-Only Elevation Rule.** A shadow means “this is an inspectable artifact,” not merely “this is a container.”

## Shapes

The form language is disciplined and lightly softened. Document and diagram artifacts use a 12px corner. Forms and compressed mobile modules use 14px. The major dossier uses 16px. Hairlines and square-edged navy fields keep those curves from feeling playful.

Pills are reserved for buttons and compact status chips. A pill is a control or state, never a general-purpose container. Tables, mapping bands, ledgers, and large tonal chapters remain rectilinear so the page retains the character of a controlled archive.

**The Restricted Curve Rule.** Use the 12/14/16px radius vocabulary for artifacts and fields; reserve the full pill for actions and status.

## Components

### Primary Button

- **Character:** Direct, compact, and unmistakably actionable.
- **Shape:** Full pill with a 48px minimum height.
- **Color:** Action Blue on Paper; hover shifts to Action Blue Hover.
- **States:** Move upward by only 1px on hover. Use a visible, offset focus outline; keep reduced-motion behavior intact.

### Navigation

- **Character:** Quiet archive index rather than application chrome.
- **Structure:** White translucent bar, Marksyte identifier, short text-link set, one primary action, and a two-option language control.
- **Responsive behavior:** At 760px, keep the brand and language access; remove secondary navigation and the header CTA rather than crowding the line.

### Reconciliation Dossier

- **Character:** The signature evidence object and visual thesis of the system.
- **Surface:** Pale-blue gridded field with a cool border, 16px corner, and the dossier lift.
- **Contents:** Two white source papers, one blue mapping band, a controlled ledger, status chips, and a navy output field. Records should look selectable and operational, not illustrated as a decorative screenshot.
- **Motion:** One reconciliation path draws for 1.15s with `cubic-bezier(.16, 1, .3, 1)` after a short delay. Disable the animation when reduced motion is requested.

### Service-Stage Line Diagram

- **Character:** A concise methodological diagram, not a feature icon.
- **Shape:** White 12px paper field inside a flat navy process row.
- **Drawing:** Thin navy lines with pale-blue fills and bright-blue status marks. Keep geometry simple enough to scan at compact sizes.

### Working-Paper Preview

- **Character:** A real deliverable placed on the page for inspection.
- **Shape:** White document with a 12px corner, cool border, and working-paper lift.
- **Structure:** Strong navy header rule, compact owner and status metadata, and a fixed-layout table. Slight rotations may distinguish a physical stack, but content must remain readable.

### Status Chip

- **Character:** Small, factual, and state-specific.
- **Shape:** Pill with compact 5px by 8px padding.
- **Color:** Use the pass pair for ready/reconciled states and the open pair for items needing review. Do not use status color without text.

### Input / Form

- **Character:** A plain working field on a white evidence surface.
- **Shape:** 14px form container and control corners, with cool one-pixel borders.
- **Focus:** Shift the border to Action Blue and add a restrained blue outline. Preserve native labels, required semantics, and visible status messaging.

### FMCG Flow Artifact

- **Character:** A four-stage evidence chain that shows source, mapping, comparison, and controlled output.
- **Structure:** White 12px artifacts sit on a Strong Blue field and connect with one thin rule. Each stage leads with compact uppercase metadata and ends with an operational note.
- **Responsive behavior:** Four columns become two at 900px and one at 760px; remove the cross-stage connector when it no longer clarifies sequence.

## Do's and Don'ts

### Do:

- **Do** pair large editorial conclusions with realistic, selectable evidence artifacts.
- **Do** use the white → pale blue → white → navy → white → strong blue → white → pale blue field rhythm to pace long explanatory surfaces.
- **Do** reserve bright blue for action, active paths, outputs, and explicit status.
- **Do** keep metadata compact, structured, and clearly subordinate to the conclusion it supports.
- **Do** flatten ordinary sections and spend depth only on dossiers and literal working papers.
- **Do** preserve bilingual navigation, visible focus, strong contrast, touch-friendly actions, and reduced-motion behavior.

### Don't:

- **Don't** turn reconciliation evidence into a generic SaaS dashboard, floating metric-card grid, or decorative analytics mockup.
- **Don't** soften every container into a large rounded card; the system depends on rectilinear fields, hairlines, and paper edges.
- **Don't** use blue as an ambient decoration or introduce competing accents that weaken its control meaning.
- **Don't** make metadata look like code for its own sake; it should read as an archive locator or operational label.
- **Don't** add shadows to service rows, tonal chapters, or every form field.
- **Don't** substitute invented proof, client identities, claims, or decorative charts for inspectable process artifacts.
