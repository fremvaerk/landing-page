# FremVærk landing page: spec

Status: confirmed by the owner on 2026-11-22. This file replaces all earlier drafts.
The visual source of truth is `docs/design/Fortegnelse.dc.html` (canvas board "2A Fortegnelse Nordlys")
and its plain-HTML render `docs/design/2a-render.html`. Open the render in a browser to see the target.

## 1. Company and voice

- Name: **FremVærk** (this exact casing everywhere). CVR 45961087.
- Location shown: "Birkerød, Danmark" / "Birkerød, Denmark". No street address on any page, in JSON-LD, in meta tags or in docs.
- Voice: "we" (DA "vi"). Danish addresses the reader as "I / jer". No personal names, photos, client names or client logos.
- Goal: show what FremVærk does (roles) and prove it with open source work, and make it easy to send a message.
- The page does **not** list services, engagement models, prices, a technology list, a "how we work" section, a "book a call" button or a free-call offer. These were removed on purpose.

## 2. Site

- Primary domain `fremvaerk.dk` (apex). `www` redirects to the apex (configured in Netlify domain settings, not in code).
- Stack: Astro, static output, pnpm, TypeScript. Netlify Git deploy. `netlify.toml` holds the build settings and the security headers.
- No analytics, no cookies, no cookie banner, no reCAPTCHA, no third-party requests at runtime. Fonts are self-hosted.
- Dark only. Set `color-scheme: dark`. There is no light theme at launch (open decision, see section 9).
- WCAG 2.2 AA. Mobile first. Visible keyboard focus on every interactive element. Skip link to `#main`.

### Pages

| Danish | English | Notes |
|---|---|---|
| `/` | `/en/` | The landing page |
| `/privatlivspolitik/` | `/en/privacy/` | Privacy policy (draft text, owner edits) |
| `/tak/` | `/en/thanks/` | Form success page, `noindex` |
| `/404` (one page, both languages) | | Netlify serves `404.html` |

- `<html lang="da">` on Danish pages, `lang="en"` on English pages.
- Each page has `<link rel="alternate" hreflang>` for `da`, `en` and `x-default` (= Danish), a canonical URL on `https://fremvaerk.dk`, a title and a meta description.
- No automatic language redirect. The header link "DA / EN" switches to the same page in the other language.
- `sitemap.xml` and `robots.txt` (the thanks pages and the 404 are excluded from the sitemap).

## 3. Landing page structure (top to bottom)

Follow the layout of `docs/design/2a-render.html`. Below are the texts. Danish is final copy. English is draft copy (the owner reviews it in the PR).

### 3.1 Header

| | DA | EN |
|---|---|---|
| Wordmark | FremVærk (link to `/`) | FremVærk (link to `/en/`) |
| Nav | Projekter (`#projekter`), Kontakt (`#kontakt`) | Projects (`#projects`), Contact (`#contact`) |
| Language | DA / EN (current one marked with `aria-current`) | DA / EN |
| Button | Skriv til os (to `#kontakt`) | Contact us (to `#contact`) |

Phone width (below 640 px): one row only. Show the wordmark, "DA / EN" and the button. Hide the 2 nav links (the hero and the button already reach both sections). No menu toggle and no JavaScript.

### 3.2 Hero

- h1 DA: "Vi udvikler software, driver platforme og integrerer AI."
- h1 EN: "We build software, run platforms and integrate AI."
- Lead DA: "FremVærk er et dansk softwarehus. Vi tager imod opgaver inden for udvikling, DevOps, cloud og AI, og vi bygger vores egne værktøjer som open source."
- Lead EN: "FremVærk is a Danish software company. We take on work in development, DevOps, cloud and AI, and we build our own tools as open source."
- Primary button: "Skriv til os" / "Contact us" (to the contact section). Secondary link: "Se projekterne" / "See the projects".

### 3.3 Roles

A row of 4 role entries (grid `repeat(auto-fit, minmax(140px, 1fr))`: 4 columns on desktop, 2 × 2 on phone). It must hold 5 entries without a layout change.

| DA | DA line | EN | EN line |
|---|---|---|---|
| Udvikling | Backend, web og interne værktøjer | Development | Backend, web and internal tools |
| DevOps | CI/CD, Kubernetes og drift | DevOps | CI/CD, Kubernetes and operations |
| Cloud | Infrastruktur som kode | Cloud | Infrastructure as code |
| AI-integration | LLM'er og agenter i jeres systemer | AI integration | LLMs and agents in your systems |

### 3.4 Open source (`#projekter` / `#projects`)

- Heading: "Open source" (both languages).
- Line DA: "Værktøjer, vi bygger og selv bruger. Koden ligger åbent på GitHub."
- Line EN: "Tools we build and use ourselves. The code is open on GitHub."
- Count: "3 projekter" / "3 projects", computed from the data, never hard-coded. Link to `https://github.com/fremvaerk`.
- The list is a project index (one row per project) that holds 6+ projects with no layout change.
- **All project data lives in one file** (for example `src/data/projects.ts`). A new project is one new entry. Each entry has: name, GitHub URL, status (`released` | `development`), optional version, DA and EN description, technologies, optional license, start year.
- Status display: filled accent dot + "Udgivet" / "Released" (with the version). Accent ring + "Under udvikling" / "In development". The status is always text too, never colour only.

| Project | Status | Description DA | Description EN | Tech | License | Started |
|---|---|---|---|---|---|---|
| Strøm (`github.com/fremvaerk/stroem`) | Released, v0.18.5 | Workflow- og opgaveorkestrering. I skriver workflows i YAML og kører dem via API, CLI eller web-UI med live logs. | Workflow and task orchestration. You write workflows in YAML and run them through an API, a CLI or a web UI with live logs. | Rust, TypeScript | MIT | 2026 |
| Horalis (`github.com/fremvaerk/horalis`) | In development | En enkel tidsregistrering med et lille svævende vindue. Til macOS, Windows og Linux. | A simple time tracker with a small floating window. For macOS, Windows and Linux. | Tauri, TypeScript | (none shown) | 2025 |
| p2pass (`github.com/fremvaerk/p2pass`) | In development | En peer-to-peer password manager med vaults, som du deler mellem dine egne enheder. | A peer-to-peer password manager with vaults that you share between your own devices. | Rust, Slint | GPL-3.0 | 2026 |

### 3.5 Contact (`#kontakt` / `#contact`)

- Heading DA: "Har I en opgave til os?" EN: "Do you have a task for us?"
- Text DA: "Fortæl kort, hvad I arbejder på. Vi svarer inden for én arbejdsdag." EN: "Tell us briefly what you work on. We reply within one working day."
- Email line DA: "Eller skriv direkte til hej@fremvaerk.dk" EN: "Or write directly to hej@fremvaerk.dk" (a `mailto:` link).
- Form fields (all required, visible labels, correct `autocomplete` and `type`): Navn / Name, E-mail / Email, Besked / Message (textarea).
- Button: "Send besked" / "Send message".
- Note under the button DA: "Vi bruger kun oplysningerne til at svare jer. Privatlivspolitik" EN: "We only use your details to reply to you. Privacy policy" (link to the privacy page).
- Netlify Forms: `data-netlify="true"`, `netlify-honeypot="bot-field"` with a hidden honeypot field, `method="POST"`. Form `name` is `kontakt` on DA and `contact` on EN. `action` is `/tak/` and `/en/thanks/`. Netlify must detect both forms from the static HTML.

### 3.6 Footer

FremVærk · CVR 45961087 · Birkerød, Danmark · Privatlivspolitik (EN: Birkerød, Denmark · Privacy policy). Use the visual layout of the design, not literal middle dots if the design does not use them.

## 4. Visual design (2A "Fortegnelse Nordlys")

Define all colours as CSS custom properties in one place, so the palette can change later in one file.

| Token | Value | Use |
|---|---|---|
| `--ground` | `#070B14` | Page background |
| `--panel` | `#0A0F1C` | Contact section background |
| `--heading` | `#F3F6FB` | Headings, primary button background |
| `--text` | `#E9EEF7` | Body text |
| `--desc` | `#C5CEDC` | Project descriptions |
| `--muted` | `#A3AEC0` | Secondary text |
| `--dim` | `#8592A8` | Meta text (6.3:1 on ground) |
| `--line` | `#1A2233` | Hairlines and dividers (decorative) |
| `--btn-border` | `#2A3448` | Header button border |
| `--input-bg` | `#070B14` | Form inputs |
| `--input-border` | `#5A6680` | Form input borders. The canvas used `#263044`, which fails WCAG 1.4.11 (1.5:1). `#5A6680` gives 3.3:1 on the panel. |
| `--accent` | `#5EE0C0` | Teal: status dots, focus ring, aurora |
| `--accent-2` | `#B4A4FF` | Lavender: aurora only |

- Font: **Hanken Grotesk** 400, 500, 600, self-hosted (for example `@fontsource/hanken-grotesk`, latin + latin-ext). No Google Fonts request.
- Primary button: pill, `--heading` background, `--ground` text.
- Aurora: a decorative layer at the top of the landing page only (`aria-hidden="true"`, `pointer-events: none`, static, no animation). Copy the 3 blurred radial blobs and the bottom fade from the design file, with these resolved values: blob A `color-mix(in oklab, #5EE0C0 50%, transparent)`, blob B `color-mix(in oklab, #B4A4FF 42%, transparent)`, blob C `color-mix(in oklab, #5EE0C0 34%, #B4A4FF 10%)`. The layer must not cause horizontal scroll (`overflow: hidden` on its container). Text on the aurora must keep 4.5:1 contrast.
- Privacy, thanks and 404 pages: same tokens, header and footer, no aurora, one readable text column (max about 68 characters).
- Favicon and share image: from the wordmark ("FremVærk" or "F") in Hanken Grotesk, `--heading` on `--ground` with a small teal accent. SVG favicon plus a 32 px PNG fallback and an Apple touch icon. Share image 1200 × 630 PNG, committed as a static file.

## 5. Privacy policy (draft, owner edits)

Write a short, plain policy in DA and EN. It must say:
- The data controller is FremVærk, CVR 45961087, Birkerød, Danmark, contact hej@fremvaerk.dk.
- The site sets no cookies and uses no analytics.
- The contact form sends name, email and message to Netlify (form processing, data processor). FremVærk uses the data only to reply. State a retention period as a placeholder (`[12 måneder]` / `[12 months]`) for the owner to confirm.
- Netlify, the host, keeps standard server logs.
- The visitor's GDPR rights and the right to complain to Datatilsynet.
- Mark the text as a draft in the PR description.

## 6. Structured data and meta

- JSON-LD `Organization`: name FremVærk, url, email hej@fremvaerk.dk, `address` with `addressLocality` Birkerød and `addressCountry` DK only, `vatID` "DK45961087", `sameAs` `https://github.com/fremvaerk`.
- Open Graph and Twitter card tags with the share image.

## 7. `netlify.toml`

- Build command `pnpm build`, publish `dist`. Pin a Node LTS that the Astro version supports (`NODE_VERSION`).
- Security headers on `/*`: a strict `Content-Security-Policy` (only `'self'`, plus what Astro's output needs, `frame-ancestors 'none'`, `form-action 'self'`), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` that turns off camera, microphone and geolocation, and `Strict-Transport-Security`.
- Long cache for hashed assets (`/_astro/*`).

## 8. Acceptance checks

1. `pnpm astro check` reports 0 errors. `pnpm build` passes.
2. A whole-word, case-insensitive grep of the build output, the source, the docs and the git history for the blocked words gives no result. The word list is outside the repository (the path is in the build brief). Never copy the list into the repository.
3. `dist/index.html` has `lang="da"`, `dist/en/index.html` has `lang="en"`. All pages in section 2 exist.
4. Each form has `data-netlify="true"` and a honeypot field. The DA and EN forms have different `name` values.
5. No runtime request to another origin: no external `<script src>`, `<link href>` to fonts or CDNs. Links to GitHub and `mailto:` are fine.
6. At 390 px width there is no horizontal scroll, and the header is one row. At 1440 px the page matches the design render.
7. The project list renders from the data file. Add a fourth test entry locally to check that the list and the count grow, then remove it.

## 9. Open decisions (list them in the PR description)

- Light theme: the site is dark only. Does the owner want a light theme later?
- English copy: draft, owner reviews.
- Privacy text: draft, owner reviews. Retention period placeholder. Earlier advice was to confirm with an accountant whether the footer must show a geographic address. The site shows the city only.
- Phone header: nav links are hidden below 640 px.

## 10. Owner actions (not code)

- Connect the repository in the Netlify UI, in a Netlify team for FremVærk.
- Turn on form detection if the current Netlify docs require it. Send form notifications to hej@fremvaerk.dk.
- DNS at ClouDNS: ALIAS `@` to `apex-loadbalancer.netlify.com` (or A `75.2.60.5`), CNAME `www` to `<site>.netlify.app`. Keep the MX (`smtp.google.com`) and the `google-site-verification` TXT record.
- Create `hej@fremvaerk.dk` (alias) in Google Workspace.
- Open source repos: add descriptions, a README to p2pass, `LICENSE` files to Strøm and Horalis, and fix the broken screenshot links in the Horalis README.
- Decide whether `fremvaerk/roadtripplanner` stays public (it is not on the page).
