# Phase 3B GSC Evidence Recovery

Status: partially unblocked. Latest page-level metrics are recovered. Query-to-page association and final approval remain open

Date checked: 2026-09-06

Repository: `C:\Users\roman\Documents\marksyte`

Pilot URL: `/services/data-reconciliation/`

Latest source reviewed: `C:\Users\roman\Downloads\marksyte.com-Performance-on-Search-2026-09-06.xlsx`

This workbook supersedes the 18 August 2026 to 26 August 2026 CSV package for current planning. The earlier CSV package remains historical evidence only.

## Recovery scope

Requested export directory:

`C:\Users\roman\Downloads\marksyte.com-Performance-on-Search-2026-08-26`

Expected files:

- `Consultas.csv`
- `Dispositivos.csv`
- `Filtros.csv`
- `Gráfico.csv`
- `Páginas.csv`
- `Países.csv`
- `Aparición en búsquedas.csv`

## Availability result

- Export directory exists: Yes
- Export ZIP at the same base name exists: No
- `Consultas.csv`: Available
- `Dispositivos.csv`: Available
- `Filtros.csv`: Available
- `Gráfico.csv`: Available
- `Páginas.csv`: Available
- `Países.csv`: Available
- `Aparición en búsquedas.csv`: Available but contains only a header row

The requested directory was tested directly. The expected ZIP path was also tested because prior Phase 3B review found recent-file metadata pointing to that ZIP name. The directory and seven expected files are now present. No external system was contacted and no replacement export was downloaded.

The latest XLSX workbook is also available. It contains seven sheets matching the GSC export views: `Gráfico`, `Consultas`, `Páginas`, `Países`, `Dispositivos`, `Aparición en búsquedas`, and `Filtros`.

## Validation results

- The latest workbook opens successfully in read-only mode
- It contains seven expected GSC sheets
- `Filtros` records Web search and `Últimos 3 meses`
- `Gráfico` contains 92 daily rows from 2026-06-05 to 2026-09-04
- `Consultas` contains 222 visible query rows
- `Páginas` contains 155 visible page rows
- `Dispositivos` contains 3 device rows
- `Países` contains 103 country rows
- `Aparición en búsquedas` contains no data rows
- The Search Console property is not explicitly recorded in the workbook. The Marksyte domain is inferred from the workbook filename and URLs
- No country or device filter is recorded in `Filtros`. The country and device sheets are breakdowns for the selected report

The latest workbook is readable and structurally usable. The empty search-appearance sheet and absent explicit property field remain export limitations. The workbook emitted an openpyxl warning about the absence of a default style, but the values and sheet structure were readable. No workbook was modified.

## Pilot-page metrics

The latest `Páginas` sheet contains an exact row for `/services/data-reconciliation/`:

- Clicks: 1
- Impressions: 231
- CTR: 0.43%
- Average position: 81.07

The Spanish equivalent also appears in the page export:

- Clicks: 0
- Impressions: 1
- CTR: 0%
- Average position: 37

These are verified page-level metrics for the latest selected Web search period. The workbook filter says `Últimos 3 meses`, with daily data from 2026-06-05 to 2026-09-04. The final available date is not necessarily a complete GSC processing day, so use the figures as a current baseline rather than a durable trend.

## Query association

Query association remains unresolved.

The latest `Consultas` sheet contains only these columns:

- `Consultas principales`
- `Clics`
- `Impresiones`
- `CTR`
- `Posición`

It has no page dimension. The most relevant site-level query rows include:

| Query | Clicks | Impressions | CTR | Position |
| --- | ---: | ---: | ---: | ---: |
| `data reconciliation` | 0 | 93 | 0% | 88.66 |
| `reconcile data` | 0 | 25 | 0% | 70.28 |
| `database reconciliation` | 0 | 17 | 0% | 82.41 |
| `exception handling in reconciliation` | 0 | 15 | 0% | 50.2 |
| `data reconciliation process` | 0 | 9 | 0% | 90.44 |
| `data reconciliation techniques` | 0 | 7 | 0% | 78.29 |

These rows show site-level search demand direction only. They cannot be assigned to the pilot page. Do not use them as page-specific query evidence without a replacement export containing both query and page dimensions.

## Reconciliation result

The latest workbook totals are:

| Export | Rows | Clicks | Impressions |
| --- | ---: | ---: | ---: |
| `Páginas` | 155 | 24 | 3318 |
| `Gráfico` | 92 | 21 | 2968 |
| `Dispositivos` | 3 | 21 | 2968 |
| `Países` | 103 | 21 | 2968 |
| `Consultas` | 222 | 0 | 1230 |
| `Aparición en búsquedas` | 0 | Not available | Not available |

The chart, device, and country reports reconcile at 21 clicks and 2968 impressions. The page sheet is higher by 3 clicks and 350 impressions. The query sheet is lower by 21 clicks and 1738 impressions. These cross-dimension differences are unresolved export limitations. They may reflect Search Console dimension and anonymization behavior, but this report does not assume a cause. Do not use one sheet as the universal total. The search-appearance report is empty and cannot be used for analysis.

## Document update result

The Phase 3B brief and claim ledger were updated with the latest workbook page-level metrics, export limitations, site-level query direction, and the user confirmations recorded in the task:

- The draft accurately represents Marksyte's current service
- Spanish terminology is acceptable for review
- Worldwide service scope is approved as a business decision

The following limitations remain:

- Primary page-specific GSC query: unverified
- Query-to-page association: unresolved
- Cross-dimension GSC totals: unresolved
- Fact-check status: blocked pending page-query evidence and named review ownership
- Publication status: blocked
- `areaServed: Worldwide`: business decision approved, but visible-page support still needs a technical decision before keeping the structured-data field

## Human decisions required

1. Assign a named Marksyte service reviewer and SEO reviewer
2. Assign or confirm a fluent Spanish reviewer
3. Decide whether the latest site-level query direction is sufficient for a fallback draft or whether a query-plus-page export is required
4. Decide whether the visible page should state Worldwide before retaining `areaServed: Worldwide` in structured data
5. Confirm whether any approved client evidence or quantified outcomes may be added

## Commands and tests run

- Read `AGENTS.md`
- Read `docs/seo/ai-content-workflow.md`
- Read `docs/seo/phase-3b-data-reconciliation-brief.md`
- Read `docs/seo/phase-3b-data-reconciliation-claim-ledger.md`
- Read `docs/seo/phase-1-indexation-decision.md`
- Tested the requested export directory with PowerShell `Test-Path`
- Tested the expected ZIP path with PowerShell `Test-Path`
- Read the latest workbook in read-only mode and checked sheet names, headers, row counts, filters, exact pilot rows, query columns, and aggregate totals
- `git diff --check`
- Checked Git status to confirm no website files were edited

## Decision

Phase 3B is partially unblocked. The latest pilot-page baseline is verified, but page-specific query intent and cross-dimension total reconciliation are not. The existing Phase 3C draft may be reviewed as a fallback editorial draft. Do not publish or make page changes until the remaining human decisions and the structured-data visibility issue are resolved.
