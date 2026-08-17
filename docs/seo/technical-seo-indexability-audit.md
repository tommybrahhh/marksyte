# Technical SEO and Indexability Audit

Audit date: 2026-08-17  
Repository: `C:\Users\roman\Documents\marksyte`  
Scope: static repository audit of deployable HTML, XML, robots, redirect configuration, internal links, metadata, structured data, assets, and representative live responses  
Mode: analysis only

## Executive summary

The repository is broadly indexable and technically coherent for the current FMCG data-reconciliation strategy. All 30 English FMCG guides are present, crawlable, self-canonical, in the XML sitemap, reachable from the homepage at depth 3, and connected to the rest of the FMCG content cluster. No Critical or High-severity issue was confirmed.

The main technical SEO risk is a separate commercial travel-retail cluster. Four English travel services, five English travel case studies, and their nine Spanish counterparts are index-follow and have valid canonicals, but they are omitted from the sitemap and isolated from the homepage crawl graph. They are linked among themselves or from other isolated pages, so the audit found no page with zero contextual inlinks, but 18 routes are unreachable from the homepage through standard links. This weakens discovery and internal authority distribution.

The confirmed defects that should be prioritized are:

- 18 indexable service and case-study routes omitted from `sitemap.xml` and isolated from the homepage graph
- 12 broken Spanish links to `/es/legal/` and `/es/privacy/` from six Spanish articles
- 24 materially updated FMCG guides whose sitemap `lastmod` predates their Article `dateModified`
- inconsistent Article structured data on 18 case-study pages
- a possible deployment-surface exposure caused by the root Vercel output directory and non-ignored Markdown and planning files, including an unpublished draft

The repository contains 182 deployable HTML pages after excluding `.archive`, `.git`, `work`, `tmp`, `outputs`, and `node_modules`. The inventory is balanced at 91 English and 91 Spanish pages. The XML sitemap contains 164 URLs, all of which resolve to repository routes, but it does not cover all indexable HTML pages.

Live verification was partial rather than authoritative. The public homepage and a representative article were retrieved, but direct status/header checks for `robots.txt`, `sitemap.xml`, and additional representative routes could not be completed because the available live tools returned DNS or safety errors. The live homepage/article snapshots also do not fully agree with the repository and with one another, so deployment parity requires a manual browser, `curl`, or CI check before implementation decisions.

## Scorecard

| Area | Result | Assessment |
| --- | ---: | --- |
| Public HTML pages inspected | 182 | 91 English, 91 Spanish |
| Critical findings | 0 | No confirmed sitewide blocking condition |
| High findings | 0 | No confirmed high-severity failure |
| Medium findings | 6 | Discovery, broken links, sitemap freshness, schema consistency, deployment surface |
| Low findings | 7 | Metadata, navigation, social/image/performance hygiene |
| Informational findings | 2 | Breadcrumbs and live verification limits |
| Robots health | Healthy in repository | Allows crawling and declares sitemap |
| Sitemap health | Partial | 164 valid entries; 18 indexable HTML routes omitted |
| Canonical health | Healthy | 182/182 pages have one correct self-canonical |
| Hreflang health | Healthy with coverage gaps | No invalid or non-reciprocal pairs; two language-only routes |
| Pages with no contextual inlinks | 0 | All pages have at least one inlink |
| Routes unreachable from homepage | 18 | Isolated travel-commercial cluster |
| English FMCG guides discoverable/indexable | 30/30 | All pass repository checks |
| Internal-link route failures | 12 | Six Spanish articles, two broken utility paths each |
| Invalid JSON-LD blocks | 0 | All parsed successfully |
| BreadcrumbList schema blocks | 0 | Visible breadcrumb-like UI exists on 18 pages |

Severity counts are issue records, not affected URLs. One issue can affect multiple routes or references.

## Scope and method

The audit inspected HTML and supporting configuration in the repository. The public-page inventory excluded historical and working directories that are explicitly outside the intended deployment audit: `.archive`, `.git`, `work`, `tmp`, `outputs`, and `node_modules`.

Checks included:

- route inventory and language/category classification
- title, description, robots, canonical, language, H1, and heading hierarchy checks
- internal-link extraction and breadth-first crawl from `/`
- route resolution for internal links and local asset references
- XML sitemap parsing, route coverage, uniqueness, dates, and FMCG coverage
- HTML hreflang extraction and reciprocal-pair validation
- JSON-LD parsing and consistency against canonical URLs and visible content
- Open Graph, Twitter, image, and loading-attribute coverage
- redirect configuration and deployment-ignore review
- representative live retrieval through the available web tools

The audit treats repository evidence as authoritative for implemented source files. HTTP status codes, response headers, actual Vercel deployment contents, Google Search Console coverage, rendered performance metrics, and search-engine indexing status were not available for reliable verification.

## Site inventory

### Page totals

| Inventory segment | English | Spanish | Total |
| --- | ---: | ---: | ---: |
| Homepage | 1 | 1 | 2 |
| About/company | 1 | 1 | 2 |
| FMCG guides | 30 | 30 | 60 |
| Travel/editorial blog articles | 37 | 37 | 74 |
| Service pages | 8 | 8 | 16 |
| Case studies | 9 | 9 | 18 |
| Blog and case-study index pages | 2 | 2 | 4 |
| Legal, privacy, and cookie pages | 3 | 3 | 6 |
| Total deployable HTML | 91 | 91 | 182 |

The English FMCG guide count is based on the repository's explicit 30-guide set, not on a broad keyword heuristic. The Spanish FMCG pages are the translated counterparts and are included in the overall inventory.

### Repository versus intended public surface

`vercel.json` uses the repository root as the output directory. `.vercelignore` excludes `.archive`, `work`, `tmp`, and `outputs`, but it does not exclude Markdown, planning, audit, or draft files elsewhere in the root tree. The following kinds of files are therefore part of a possible deployment-surface risk even though they are not HTML pages in the page inventory:

- project instructions and planning documents such as `AGENTS.md`, `BLOG_WRITING_RULES.md`, `COPY_MAP.md`, and `SEO_ROUTE_MIGRATION_MATRIX.md`
- audit and implementation documents under `docs/seo/`
- `study-cases/travel-retail-distribution-strategy/draft.md`, which contains an unpublished/anonymised composite case draft

The source tree proves that these files are not currently ignored by the repository configuration. It does not prove that the live host serves or indexes them. This is a Medium deployment-hygiene finding with live confirmation still required.

## Indexability and crawl controls

All 182 inspected HTML pages contain:

- `index, follow, max-image-preview:large`
- exactly one canonical link
- exactly one title
- at least one meta description
- exactly one H1

No `noindex`, `none`, `nofollow`, `nosnippet`, conflicting robots directive, or JavaScript-only core content condition was found in the repository. The pages are therefore indexable by source-level controls.

### Robots.txt

`robots.txt` contains:

```text
User-agent: *
Allow: /

Sitemap: https://www.marksyte.com/sitemap.xml
```

Repository assessment: healthy. It does not block CSS, JavaScript, blog routes, service routes, or case-study routes, and it declares the sitemap. No staging or administrative path was present in the file. No live response header or live `robots.txt` status was reliably retrieved, so production health remains unverified.

### XML sitemap

The sitemap contains 164 unique URL entries. All entries are syntactically valid and map to repository routes; no obsolete or missing repository route was found among the entries. All 30 English FMCG guides are included.

The sitemap currently omits 18 index-follow public HTML routes:

English:

- `/services/buyer-negotiation/`
- `/services/rgm-pricing/`
- `/services/travel-retail-activation/`
- `/services/travel-retail-portfolio-strategy/`
- `/study-cases/border-duty-free-commercial-strategy/`
- `/study-cases/brand-relevance-distribution/`
- `/study-cases/energy-drinks/`
- `/study-cases/protein-rtd/`
- `/study-cases/travel-retail-distribution-strategy/`

Spanish:

- `/es/servicios/negociacion-compradores/`
- `/es/servicios/rgm-pricing/`
- `/es/servicios/activacion-travel-retail/`
- `/es/servicios/estrategia-portfolio-travel-retail/`
- `/es/casos-de-estudio/estrategia-comercial-duty-free-fronteras/`
- `/es/casos-de-estudio/relevancia-marca-distribucion/`
- `/es/casos-de-estudio/bebidas-energeticas/`
- `/es/casos-de-estudio/proteina-rtd/`
- `/es/casos-de-estudio/estrategia-distribucion-travel-retail/`

These are not necessarily accidental omissions: a sitemap can intentionally focus on a subset of URLs. However, the omitted routes are index-follow commercial and case-study pages, and they are also isolated from the homepage crawl graph. If they are intended to attract organic traffic, the combined omission and isolation is a Medium discovery issue.

The sitemap has valid ISO dates and no future dates. Its dates are heavily batch-oriented: 102 entries use `2026-08-03`, 22 use `2026-08-10`, 12 use `2026-08-11`, 10 use `2026-08-12`, 10 use `2026-08-13`, and 8 use `2026-08-09`. There is no sitemap generator in the repository, and dates are hardcoded in `sitemap.xml`.

Twenty-four materially updated FMCG pages currently expose Article `dateModified` as `2026-08-17`, while their sitemap `lastmod` values remain between `2026-08-09` and `2026-08-13`. This does not make the pages non-indexable, and `lastmod` should represent meaningful source changes rather than every deployment. It does indicate that the sitemap maintenance policy is not aligned with the visible structured-data update dates.

Recommended action after review: choose and document a date policy, then generate or maintain `lastmod` from the same trusted source used for meaningful content updates. Do not mechanically stamp every URL with the deployment date.

## Canonicals

Canonical health is strong:

- 182/182 pages have exactly one canonical
- 182/182 canonicals are HTTPS
- 182/182 use the expected `www.marksyte.com` host
- 182/182 use the expected trailing-slash route
- 182/182 self-reference the page route
- 0 canonical targets are nonexistent
- 0 cross-language canonical mistakes were found

No canonical change is recommended from this audit.

## Hreflang and language handling

HTML language declarations are consistent across the inventory: 91 pages declare `en` and 91 declare `es`, with no blank or mismatched declarations.

Hreflang implementation is technically sound for translated pairs:

- 181/182 pages contain HTML hreflang alternates
- 180 pages have `en`, `es`, and `x-default`
- 1 page has `en` and `x-default`
- 1 page has `es` and `x-default`
- 0 invalid destinations
- 0 wrong-language targets
- 0 non-reciprocal English/Spanish pairs

The two reduced alternate sets represent language coverage gaps rather than broken reciprocal implementation:

- `/es/casos-de-estudio/alcohol-espana/` has no English counterpart
- `/study-cases/ees-airport-commercial-strategy/` has no Spanish counterpart

The current `x-default` behavior is coherent: translated Spanish pages generally use the English equivalent as the default, while English-only routes use the English route. No blanket hreflang change is recommended. Translation coverage can be addressed only if those routes are strategically intended to exist in both languages.

## URL consistency and redirects

The repository uses trailing-slash canonical URLs consistently. No internal `/index.html` links, HTTP internal links, empty `href` values, or `nofollow` internal links were found. No localhost, staging, preview, or development URLs were found in deployable HTML, JavaScript, JSON, or text configuration.

`vercel.json` contains eight redirect rules covering legacy Spanish case-study paths and one English-to-Spanish case-study migration. The destinations exist in the repository, and no redirect loop or obvious redirect chain was found from the configuration alone. Live status codes and redirect behavior remain unverified.

No `404.html` exists in the repository. This is not evidence of a broken 404 response because Vercel may provide platform-level handling, but the custom error-page and soft-404 behavior should be checked live.

## Internal-link graph, crawl depth, and orphan analysis

The graph was built from standard HTML anchor links, excluding hreflang links so language alternates did not inflate contextual-link counts.

### Graph totals

| Metric | Result |
| --- | ---: |
| Routes in graph | 182 |
| Reachable from homepage | 164 |
| Unreachable from homepage | 18 |
| Routes with zero contextual inlinks | 0 |
| Routes with 1–2 inlinks | 44 |
| Routes with 3–5 inlinks | 73 |
| Routes with 6+ inlinks | 65 |

The 18 unreachable routes are the nine English and nine Spanish travel-commercial service/case pages listed in the sitemap section. They are best described as crawl-isolated pages rather than strict zero-inlink orphans: each has at least one inlink, but the inlinks originate within an isolated cluster that is not connected to the homepage graph.

### Crawl depth

| Depth from `/` | Routes |
| --- | ---: |
| 0 | 1 |
| 1 | 6 |
| 2 | 9 |
| 3 | 77 |
| 4 or greater | 71 |
| Unreachable | 18 |

All 30 English FMCG guides are reachable at depth 3. The four English data/FMCG service pages are also connected:

- `/services/data-reconciliation/`: depth 2, 34 inlinks
- `/services/data-mapping-integration/`: depth 2, 19 inlinks
- `/services/data-standardization/`: depth 3, 20 inlinks
- `/services/managed-data-analysis/`: depth 3, 17 inlinks

The English FMCG case study `/study-cases/data-reconciliation-fmcg/` is reachable at depth 1 and has 20 inlinks. The current FMCG content strategy is therefore discoverable; the main graph defect belongs to the older or separate travel-commercial cluster.

## Navigation and information architecture

The newer commercial/FMCG routes use the expected `Services`, `Case studies`, and `About` labels. Older travel/editorial pages retain inconsistent labels:

- `Offers` appears on 37 routes
- `Team` appears on 39 routes
- `Study cases` appears on 5 routes

The links remain crawlable and resolve, so this is not a blocking indexability defect. It is a Low consistency and maintainability issue because users and crawlers encounter different labels for equivalent sections, and the older cluster is the same cluster with weak discovery.

## Blog architecture and FMCG guide audit

The 30 English FMCG guides were checked as a defined set. Results:

- 30/30 present in the repository
- 30/30 in `sitemap.xml`
- 30/30 `index, follow`
- 30/30 self-canonical
- 30/30 reachable from the homepage at depth 3
- 30/30 have at least one contextual inlink
- 30/30 have valid English language declarations
- 30/30 have Article JSON-LD that parses
- 30/30 have one H1
- 30/30 have a title and meta description
- 30/30 have no route-resolution failure in the internal graph

The four data/FMCG service pages and the FMCG case study are also discoverable and connected to the cluster. No technical SEO correction is required to make the current 30-guide FMCG set discoverable or indexable.

The audit intentionally does not assess whether every guide is the best answer for its target query, whether the articles are sufficiently differentiated, or whether the content plan should be expanded. Those are editorial and search-demand questions outside this technical indexability report.

## Service discoverability and case studies

The data/FMCG service set is healthy from a crawl perspective. The travel-commercial service set is not: four English and four Spanish travel-oriented service pages are both omitted from the sitemap and unreachable from the homepage graph.

The case-study index and FMCG case-study route are connected. Five English and five Spanish travel/legacy case-study routes are isolated and omitted from the sitemap. This creates a discoverability split within the same site architecture: the current FMCG strategy has strong paths, while the travel-commercial strategy has weak paths.

Recommended future decision: either make the travel-commercial routes intentionally non-targeted and document why they remain outside the sitemap, or give them a deliberate section/index path, contextual links, and sitemap inclusion. Do not make the decision by changing only the sitemap while leaving the internal graph isolated.

## Titles, descriptions, H1s, and headings

Basic page-level metadata is complete:

- 182/182 titles present
- 182/182 descriptions present
- 182/182 one H1
- 0 pages with multiple H1s
- 0 pages with zero H1s
- 0 heading jumps greater than one level
- 0 duplicate title groups

Metadata improvements found:

- `/` and `/about/` share the same meta description
- 5 descriptions are longer than 170 characters
- 2 short descriptions belong to cookie pages and are appropriate for utility pages

The five longer descriptions are:

- `/blog/retailer-erp-reporting-cutoff-differences/`
- `/es/blog/como-calcular-cuota-mercado-retail-sell-out/`
- `/es/blog/conciliar-deducciones-gasto-comercial-fmcg/`
- `/es/blog/record-duty-free-europeo-brecha-conversion-travel-retail/`
- `/es/blog/workflow-excel-conciliacion-datos-retailer/`

The H1/title wording differs on many editorial pages because titles use SEO framing while H1s use article headlines. This is not automatically a defect and was not counted as a finding.

## Structured data

All JSON-LD blocks parsed successfully. Observed types across the public HTML include Article, FAQPage, Service, ProfessionalService, AboutPage, Blog, and CollectionPage.

The main consistency issue is case-study Article markup:

- 146 Article blocks in total
- 130 Article blocks use an Organization author
- 16 Article blocks have no author
- 144 Article blocks have an Organization publisher
- 2 Article blocks have no publisher
- 18 Article blocks occur on case-study pages rather than blog articles
- 16 case-study pages omit `author`
- 2 FMCG case-study pages omit `publisher`
- 0 Article `mainEntityOfPage` canonical mismatches
- 0 Service `url` canonical mismatches
- 0 FAQPage blocks lacked a visible FAQ marker in the inspected HTML

No Person author was found in Article schema. This is not automatically wrong for a company-authored publication, but case studies should use a deliberately consistent schema model. The future fix should decide whether case studies are Articles, CreativeWorks, or a more specific reviewed type, then populate the selected properties consistently. Do not add invented authors or unsupported claims.

## Breadcrumbs

No `BreadcrumbList` JSON-LD was found. Eighteen pages contain visible breadcrumb-like text or classes, mostly service and case-study pages.

The core FMCG information architecture is shallow and already provides strong route paths, so the absence of breadcrumb schema is not a significant indexability defect. Breadcrumb markup may be useful on deeper commercial and case-study pages, but it should follow a reviewed information architecture rather than be added sitewide as a mechanical fix.

## Social metadata

Core Open Graph fields are present on 176/182 pages. The six pages without the core set are the legal, privacy, and cookie utilities:

- `/cookies/`
- `/legal/`
- `/privacy/`
- `/es/aviso-legal/`
- `/es/cookies/`
- `/es/privacidad/`

`og:image` is present on only 4/182 pages. The remaining 178 pages have no explicit Open Graph image. Existing image URLs resolve in the repository. Twitter `twitter:card` is missing on 27 pages.

This is a Low social-sharing and presentation issue, not a core indexability blocker. Utility pages do not need full social metadata priority. Commercial, case-study, and article templates should be normalized during a later template pass.

## Image SEO and frontend performance signals

The repository contains 351 image elements:

- 0 missing `alt` attributes
- 187 empty `alt` values, mostly consistent with decorative logos
- 0 broken local image paths
- 164 meaningful images with non-empty alt text
- 160 meaningful images lack explicit width/height attributes
- 114 meaningful images lack a loading attribute

The missing dimensions can increase layout-shift risk, while missing lazy-loading attributes can increase initial work on pages with many below-the-fold images. Because the raw count includes logos, cards, and decorative art, this should be handled by template and component rules rather than by mass-editing every image.

`styles.css` is approximately 144 KB and most pages load it. It contains a Google Fonts `@import`, which is a render-blocking CSS dependency risk. `analytics.js` is deferred, and the main page content is present in HTML rather than being dependent on JavaScript. No lab performance or field metrics were collected, so Core Web Vitals impact is unconfirmed.

## Duplicate-content and language separation

No canonical or hreflang contradiction was found between English and Spanish pages. The translated pairs are reciprocal, and no invalid language targets were found.

The duplicate-description observation is limited to `/` and `/about/`. No duplicate titles were found. Content-level duplication, query-level cannibalization, and search-engine-selected canonical behavior cannot be established from the repository alone.

The English and Spanish URL spaces are clearly separated under `/` and `/es/`. The FMCG guides and travel/editorial pages are also distinguishable by their route and content clusters. The technical issue is not language or topic mixing; it is that the travel-commercial cluster is weakly connected to the site graph.

## JavaScript and rendering

The inspected pages contain their primary headings, explanatory copy, links, and structured data in static HTML. JavaScript files enhance forms, carousels, previews, and selected case-study interactions. No core SEO content was found to be available only after JavaScript execution.

No meta-refresh redirects or JavaScript redirects were found. Server-rendered status codes and Google-rendered output were not available for verification.

## Security and indexation hygiene

No development, localhost, preview, or staging URLs were found in the deployable page files. `.archive`, `work`, `tmp`, and `outputs` are ignored by `.vercelignore`.

The remaining concern is deployment scope. With `outputDirectory` set to `.`, non-HTML Markdown and planning files in the repository may be copied to the deployment unless separately excluded by platform behavior. The unpublished travel-retail draft is the clearest example. This is a deployment-surface and information-disclosure risk, not a confirmed indexed URL.

Recommended future verification:

- inspect the actual deployment artifact
- request representative Markdown and planning paths on the live host
- confirm whether Vercel serves them, returns 404, or applies another rule
- if they are not intended for public access, exclude them at build/deployment level
- check Search Console or server logs for any crawled non-HTML project files

## Findings register

The machine-readable register is in [`docs/seo/technical-seo-findings.csv`](./technical-seo-findings.csv). The principal findings are summarized below.

### Medium

1. Sitemap omission affects 18 indexable travel-commercial service and case-study routes
2. Crawl isolation affects the same 18 routes, which are unreachable from the homepage graph
3. Twelve broken Spanish utility links affect six Spanish articles
4. Twenty-four FMCG sitemap `lastmod` values lag their Article `dateModified` values
5. Case-study Article schema is incomplete or inconsistent on 18 case-study routes
6. Root deployment scope may expose Markdown, planning, audit, or draft files

### Low

1. Legacy navigation labels vary across older travel/editorial routes
2. Social metadata is incomplete, especially `og:image` and `twitter:card`
3. Meaningful image dimensions and loading attributes are incomplete
4. One duplicate description and five long descriptions need later metadata cleanup
5. No repository `404.html`; live custom 404 and soft-404 behavior are unverified
6. CSS size and Google Fonts `@import` create a performance risk requiring measurement

### Informational

1. BreadcrumbList schema is absent despite visible breadcrumb-like UI on 18 pages
2. Live deployment parity and response-level verification remain inconclusive

The two language-only routes are recorded as a Low-confidence coverage observation in the CSV and are not treated as a broken hreflang implementation.

## Recommended backlog

Priority order after review:

1. Decide the intended organic role of the 18 omitted travel-commercial routes, then repair the cluster with contextual section links and an aligned sitemap policy if those routes should be indexable targets
2. Correct the 12 broken Spanish legal/privacy references and add a route-resolution check to validation
3. Establish one source-of-truth policy for meaningful content modification dates and align sitemap `lastmod` with it
4. Review deployment output and exclude unpublished drafts, planning material, and internal documentation from the public artifact where appropriate
5. Normalize case-study structured data after choosing the intended schema model and author/publisher policy
6. Measure and then address CSS/font loading, meaningful image dimensions, and below-the-fold loading behavior
7. Normalize navigation labels in the older travel/editorial templates
8. Improve social metadata for articles, services, and case studies using reviewed image assets
9. Decide whether the two language-only routes need translated counterparts
10. Verify live status codes, headers, redirects, robots, sitemap, custom 404, and Search Console coverage

### Top five fixes

1. Decide the organic role of the 18 travel-commercial routes and repair their sitemap and contextual-link discovery path if they are intended targets
2. Fix the 12 broken Spanish legal/privacy references
3. Align sitemap `lastmod` with a documented meaningful-content-change source of truth
4. Review the deployment artifact and exclude unpublished drafts and internal documentation where appropriate
5. Normalize case-study structured data using a reviewed schema and author/publisher policy

## Things intentionally not changed

No production files were changed during this audit. Specifically, this task did not:

- change URLs, slugs, trailing-slash behavior, or redirects
- change `robots.txt`
- change `sitemap.xml`
- change canonical tags
- change hreflang tags or x-default behavior
- add or remove noindex directives
- modify production HTML, JavaScript, CSS, structured data, titles, or descriptions
- add breadcrumbs or new navigation links
- remove travel content or alter the FMCG editorial set
- delete drafts, documentation, or repository files

Only the audit report and its machine-readable findings register are being added under `docs/seo/`.

## Repository versus live verification limits

The public [Marksyte homepage](https://www.marksyte.com/) and a [representative live article](https://www.marksyte.com/blog/agentic-ai-travel-retail/) were retrieved through the available web tool. The homepage response showed the current FMCG-style reconciliation positioning, while the article response showed a reachable travel-retail article and legacy navigation labels.

Direct live checks for `robots.txt`, `sitemap.xml`, response headers, status codes, redirect chains, custom 404 behavior, and additional representative service/article URLs were not reliable: the available tools returned safety or DNS errors. A search snapshot also differed from the retrieved homepage, which indicates that cached/live deployment views are not sufficiently consistent for authoritative production conclusions.

Therefore:

- repository findings are confirmed at source level where marked Confirmed
- live indexation and HTTP behavior remain unverified
- the 182-page count is a repository/deployment-surface inventory, not a Search Console indexed-page count
- the 18 isolated routes are crawl-graph findings, not proof that search engines cannot discover them through external links
- the deployment-surface concern is a source/configuration risk, not proof of public disclosure

## Conclusion

Marksyte's current 30-guide English FMCG content set passes the core technical indexability checks. The highest-value technical work is not a blanket canonical, robots, or hreflang rewrite. It is to resolve the split between the well-connected FMCG cluster and the isolated travel-commercial cluster, then repair the smaller confirmed defects in Spanish utility links, sitemap date maintenance, case-study schema consistency, and deployment scope.

The next implementation pass should begin only after confirming whether the 18 travel-commercial routes are intended organic landing pages and after verifying the actual live deployment artifact.
