---
target: new service landing page
total_score: 24
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-05T10-54-25Z
slug: services-data-reconciliation-index-html
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Clear page structure and CTA state; no post-click or scheduling reassurance is surfaced. |
| 2 | Match System / Real World | 4 | Language maps well to reconciliation work: matching, tolerances, exceptions, owners, evidence. |
| 3 | User Control and Freedom | 3 | Strong jump link and related-service paths; external Calendly actions do not explain what happens next. |
| 4 | Consistency and Standards | 4 | Shared header, tokens, focus treatment, and service layout are consistent. |
| 5 | Error Prevention | 3 | The service fit and deliverables reduce ambiguity, but the page does not set expectations for inputs, timeline, or engagement scope. |
| 6 | Recognition Rather Than Recall | 4 | Repeated labels and concrete outputs make the offer easy to scan. |
| 7 | Flexibility and Efficiency | n/a | Persuade surface; no complex task workflow to optimize. |
| 8 | Aesthetic and Minimalist Design | 3 | Clean and readable, but eight text-heavy sections create a long, low-contrast rhythm. |
| 9 | Error Recovery | n/a | Persuade surface; no in-page task or error flow. |
| 10 | Help and Documentation | n/a | Persuade surface; support content is not the primary task. |
| **Total** | | **24/28** | **Excellent foundation; needs stronger proof and differentiation.** |

#### Design Specificity Verdict

The page is product-specific in its vocabulary and information architecture, but visually it is still close to a reusable consulting template. The strongest authored choices are the reconciliation-specific “Best when” list, the Match / Reconcile / Explain proof rail, and the decision sequence. The missing ingredient is evidence: there is no sample exception queue, reconciliation view, before/after artifact, metric, client result, or process snapshot to make this service tangible.

The Impeccable detector found no deterministic issues for `services/data-reconciliation/index.html` and no false positives need to be called out. The same eight-section structure is also used by the other new data-service pages, which gives the family consistency but makes the pages feel interchangeable.

#### Overall Impression

Calm, credible, and easy to scan. The page explains the service well, but it asks the visitor to trust the method without showing the work. The single biggest opportunity is to replace one or two generic text sections with a concrete, visually legible proof artifact.

#### What's Working

- The hero has a clear outcome-led headline, a specific lead, a primary CTA, and an immediate “Best when” qualification panel.
- The sequence from problem → decisions → deliverables → CTA is logical and supports a considered B2B decision.
- The implementation has strong basics: semantic landmarks, a sensible heading structure, language alternates, visible focus styling, responsive single-column fallbacks, and tokenized colors.

#### Priority Issues

- **[P1] Proof is asserted, not demonstrated.** The page names matching logic, reconciliation views, exception queues, and control documentation, but shows none of them. That weakens trust for a service whose value is operational rigor. Add one representative artifact—an anonymized exception queue or reconciliation view—with 3–5 labeled fields and a short caption explaining the decision it enables. Suggested command: `$impeccable delight`.

- **[P1] The related-thinking proof point is semantically weak.** “Scheduled capacity is not the same as realized demand” is a good article, but it is not obviously evidence of reconciliation and may feel like a content detour. Replace it with a directly relevant case, mini-example, or “before / after” reconciliation scenario. Suggested command: `$impeccable clarify`.

- **[P1] The CTA asks for commitment before reducing commercial uncertainty.** Three Calendly links repeat the same action, but the page does not say what the 30-minute conversation covers, what the visitor should bring, or what happens afterward. Add a one-line expectation next to the first CTA and keep the final CTA as the decisive conversion point. Suggested command: `$impeccable clarify`.

- **[P2] The page rhythm is too text-heavy.** The overview, deliverables, tools/boundaries, article proof, CTA, and related services create many consecutive blocks with similar visual weight. Collapse the tools/boundaries copy into a compact “How we choose the control layer” callout, then give the saved attention to a proof artifact. Suggested command: `$impeccable distill`.

- **[P2] The service family is consistent to the point of interchangeability.** The four new data-service pages share the same eight-section skeleton and nearly identical visual treatment. Keep the system, but give each page one signature module tied to its service: a match waterfall for reconciliation, a messy-to-standardized data sample for standardization, a source-map diagram for integration, and an operating cadence for managed analysis. Suggested command: `$impeccable bolder`.

#### Persona Red Flags

##### Jordan — First-Timer

Jordan understands the headline and “Best when” list, but may still not know whether this is a diagnostic, a build, or an ongoing managed service. The page uses terms such as “tolerances,” “denominator,” “root-cause,” and “system boundaries” without a plain-language example. Add a small “What we would do first” sequence and define one technical term in context.

##### Riley — Stress Tester

Riley finds no obvious contradiction or broken flow, but the page does not expose edge cases: duplicate records, missing identifiers, conflicting currencies, or late-arriving data are mentioned only as lists. A concrete example of how one ambiguous exception is classified and routed would make the promise more credible.

##### Casey — Distracted Mobile User

The mobile layout stacks cleanly and makes the primary button full width. However, the page is long and the decisive action remains at the top and near the bottom; a compact mobile-friendly sticky CTA or a mid-page conversion prompt after deliverables would reduce the need to scroll back through a long page.

#### Minor Observations

- The header correctly marks Services as current, but the detail page could add a more explicit breadcrumb state for the specific service.
- External Calendly links open a new tab; add a short “opens Calendly” cue if this is intentional.
- There is no visible social preview image in the head, so shared links may look generic.
- Strong use of `prefers-reduced-motion` support exists in the shared CSS; preserve it if adding an artifact animation or carousel.

#### Questions to Consider

- What is the smallest real reconciliation artifact you can show without exposing client data?
- Could the first CTA say exactly what the visitor will leave the 30-minute call with?
- If every page in the data-services family has the same shell, what one visual should make this service unmistakably about reconciliation?

#### Audit Health Score

| Dimension | Score | Key Finding |
|---|---:|---|
| Accessibility | 3/4 | Good semantics and focus treatment; needs a real keyboard/screen-reader pass on the live page. |
| Performance | 3/4 | Lightweight single HTML page and shared CSS; no page-specific image payload, but no measured browser performance run. |
| Responsive Design | 3/4 | Clear mobile breakpoints and full-width CTA; long-form mobile scanning remains the main risk. |
| Theming | 4/4 | Strong use of shared CSS variables and coherent palette. |
| Implementation Integrity | 3/4 | Detector clean and structure coherent; repeated family template and lack of proof artifact limit specificity. |
| **Total** | **16/20** | **Good; address proof, clarity, and differentiation before launch.** |

#### Recommended Actions

1. **[P1] `$impeccable delight`**: Add one tangible reconciliation artifact.
2. **[P1] `$impeccable clarify`**: Tighten the CTA expectation and replace the weak related-thinking proof.
3. **[P2] `$impeccable distill`**: Reduce repeated text blocks and create room for proof.
4. **[P2] `$impeccable bolder`**: Add a signature visual module to each data-service page.
5. **`$impeccable polish`**: Run the final visual and accessibility pass after changes.
