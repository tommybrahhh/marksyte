---
name: Marksyte
description: Make complex data flows clear, connected and actionable
colors:
  ink: "#0B0D12"
  body: "#667085"
  white: "#FFFFFF"
  cloud: "#F4F6FA"
  line: "#E6EBF2"
  blue: "#2588F5"
  blue-deep: "#1476DF"
  sky: "#EAF4FF"
  aqua: "#EAF4FF"
typography:
  display:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.055em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "14px"
  md: "20px"
  lg: "28px"
spacing:
  sm: "12px"
  md: "24px"
  lg: "48px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.blue-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
  proof-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "24px"
---

# Design System: Marksyte

## Overview

**Creative North Star: "The Clear Signal"**

Marksyte should feel like a clear signal moving through a noisy system: bright, legible and immediately directional. The supplied reference establishes the new bar—white space, bold black typography, bright blue action, soft sky-toned surfaces and large rounded modules that make the journey easy to follow.

This is a replacement for the previous warm-paper consulting language. The new system is lighter, more optimistic and more visual, while staying grounded in operational data work. It should make complexity feel navigable without pretending the work is simple.

**Key Characteristics:**

- Bright white canvas with cool cloud sections.
- One confident blue action color, supported by sky, aqua and cloud surfaces.
- Large black sans-serif statements with short, plain-language copy.
- Rounded 22–30px proof modules and image/data panels.
- Spacious, modular storytelling with obvious next actions.

## Colors

The palette uses white and cloud neutrals as the field, blue as the directional signal, and soft sky/aqua tones to organize proof without visual noise.

### Primary

- **Signal Blue** (#2F80ED): Primary CTAs, active states, highlighted proof and key data emphasis.
- **Deep Signal Blue** (#1769D1): Hover and pressed states only.

### Secondary

- **Sky Wash** (#E7F3FF): Hero and explanatory surfaces.
- **Aqua Wash** (#C8F0F2): Data-flow and reconciliation visuals.
- **Mint Wash** (#DDF7EE): Positive state, resolved control or completed step.

### Neutral

- **Near Black** (#101318): Headlines, navigation and high-confidence text.
- **Body Gray** (#4B5563): Supporting copy.
- **White** (#FFFFFF): Primary page and card surface.
- **Cloud** (#F6F8FB): Alternating section field.
- **Cool Line** (#E5EAF0): Borders and dividers.

**The One Signal Rule.** Blue owns action and direction. Soft colors organize context; they do not compete with the CTA.

## Typography

**Display Font:** Aptos with Inter, Segoe UI and system fallbacks.
**Body Font:** Aptos with system fallbacks.
**Label Font:** Aptos with system fallbacks; no mono-first visual language.

**Character:** Bold, compact sans-serif headlines create confidence and momentum. Body text stays quiet and highly readable. Labels are small and spaced, but never visually technical for its own sake.

### Hierarchy

- **Display** (800, `clamp(2.6rem, 6vw, 5.6rem)`, 0.98): Hero thesis and major proof statement.
- **Headline** (750–800, responsive 2.2–3.6rem, 1.0): Section proposition.
- **Title** (750, 1.2–1.6rem, 1.1): Card or step title.
- **Body** (400, 1rem, 1.6): Supporting explanation, limited to comfortable line lengths.
- **Label** (800, 0.72rem, 0.08em tracking): Small orientation cues and section labels.

**The One-Thought Rule.** Every headline should communicate one decision, outcome or change—not a list of capabilities.

## Layout

The page uses a centered white canvas with a max content width around 1180px and generous outer margins. The first viewport is a large rounded visual/proof module with the thesis on the left and the mechanism or evidence on the right. Following sections use modular cards, horizontal proof rails and alternating content/proof compositions.

Navigation is minimal: brand, a short set of links, language switch and one pill-shaped CTA. Avoid persistent texture, dense borders or multiple competing navigation actions.

On mobile, the hero remains a single dominant module; cards stack with generous spacing; important CTA buttons become full-width or near full-width; decorative proof can move below the primary explanation.

## Elevation & Depth

Depth comes primarily from white space, large rounded silhouettes and tonal section changes. Use only soft, broad shadows on hero/proof modules. Avoid the previous heavy dark-panel hierarchy and avoid making every card appear elevated.

### Shadow Vocabulary

- **Soft module lift** (`0 18px 50px rgba(31, 67, 105, 0.10)`): Hero proof, featured artifact and key conversion module.
- **Quiet card lift** (`0 10px 28px rgba(31, 67, 105, 0.06)`): Optional hover state for interactive cards.

**The Air-First Rule.** Space and tonal contrast establish hierarchy before borders and shadows do.

## Shapes

The system uses generous rounded rectangles: 14px for small controls, 22px for cards and 30px for hero/proof modules. Pills are reserved for primary actions, compact ratings or tags. Images and data artifacts should share the same rounded clipping as their containers.

## Components

### Navigation

White, compact and quiet. Use a small brand mark, short text links, a pill CTA and a restrained language switch. Remove heavy header backgrounds and decorative chrome.

### Primary Button

- **Shape:** Pill silhouette (30px radius), minimum 48px height.
- **Color:** Signal Blue with white text.
- **Hover / Focus:** Deep blue hover; visible focus ring using a blue/white contrast pair.
- **Copy:** Action plus object, such as “Discuss your data” or “See the reconciliation”.

### Proof Module

- **Shape:** Large rounded container (22–30px).
- **Background:** Sky, aqua or cloud wash with white content surfaces.
- **Content:** One visible mechanism: a reconciliation flow, exception list, mapping sample or control status.
- **Rule:** Demonstrate the work; do not use decorative gradients where a real data artifact can live.

### Service Card

- **Shape:** 22px rounded white card with minimal or no border.
- **Content:** Short title, one outcome sentence and a directional link.
- **Interaction:** Entire card can be clickable when the destination is clear; use a small lift on hover only.

### Data Artifact

Use compact rows, labels and status chips to show how Marksyte makes complexity visible. Use blue for the active path, aqua for source context and near-black for values. Synthetic examples must be labeled as illustrative.

## Do's and Don'ts

### Do:

- **Do** make the first viewport feel like a clear guided journey, not a document header.
- **Do** use one strong blue signal and plenty of white space.
- **Do** show real or clearly labeled illustrative data artifacts.
- **Do** use rounded modules to group a story, not to decorate every element.
- **Do** keep the product bilingual and preserve accessible focus, contrast and mobile behavior.

### Don't:

- **Don't** bring back the warm cream grid, dark-panel-heavy hierarchy or mono-first consulting aesthetic.
- **Don't** scatter multiple accent colors across one screen.
- **Don't** fill the page with repeated text cards when one visual proof module would explain more.
- **Don't** imitate the travel reference's claims, imagery or content; borrow its clarity and spatial confidence only.
- **Don't** invent customers, testimonials, metrics or commercial proof.
