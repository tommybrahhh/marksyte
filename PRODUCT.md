# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML, CSS and browser JavaScript; no build step or backend.

## Users

**Inferred from the existing site:** B2B teams working with fragmented operational, commercial or analytical data across multiple sources. Their job is to make data more consistent, connected, explainable and useful for decisions.

## Product Purpose

**Inferred from the existing site:** Marksyte is a specialist data-services consultancy site. It helps prospective clients understand and discuss services for data standardization, mapping and integration, reconciliation, and managed data operations and analysis.

## Positioning

**Inferred from the existing site:** The site positions Marksyte around practical, traceable data workflows and decision support rather than abstract transformation language. It emphasizes visible controls, mappings, exceptions, evidence and operating guidance.

## Operating Context

The public site is bilingual English/Spanish, with indexable canonical routes and reciprocal `hreflang` links. Service pages lead to a prepared Calendly discovery call. The site includes service pages, study cases, a blog, team information and legal pages.

## Capabilities and Constraints

- Four active service pairs: data standardization; data mapping and integration; data reconciliation and controls; managed data operations and analysis.
- A flagship illustrative reconciliation case exists at `study-cases/data-reconciliation-fmcg/`.
- The discovery-call flow does not store form submissions or require a backend.
- Preserve existing public routes, English/Spanish parity, canonical metadata, JSON-LD, and Vercel-compatible static deployment.
- Do not invent testimonials, client logos, metrics, pricing or case-study claims.

## Brand Commitments

- Existing name: Marksyte.
- Existing voice is practical, analytical, direct and operationally grounded.
- Preserve the current restrained dark/teal/green visual system and bilingual navigation.

## Evidence on Hand

- Service pages under `services/` and `es/servicios/`.
- Study cases under `study-cases/` and `es/casos-de-estudio/`.
- Bilingual blog and localized landing pages.
- Existing CSS tokens and reusable service-page patterns in `styles.css`.
- No confirmed testimonials, pricing table or named client proof in the supplied repository.

## Product Principles

- Make fragmented data understandable and actionable.
- Prefer traceable workflows over opaque transformation claims.
- Show practical outputs, controls and operating guidance.
- Preserve bilingual access and indexable route parity.
- Keep the implementation lightweight and deployable as static files.

## Accessibility & Inclusion

The existing implementation uses semantic HTML landmarks, heading relationships, visible focus styling, responsive layouts and `prefers-reduced-motion` handling. Maintain keyboard access, readable contrast, meaningful labels and touch-friendly mobile actions.
