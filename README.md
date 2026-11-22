# fremvaerk.dk

The FremVærk landing page. A static [Astro](https://astro.build) site, deployed on Netlify.

- Danish at `/`, English at `/en/`.
- Spec: [`docs/spec.md`](docs/spec.md). Design reference: [`docs/design/`](docs/design/) (open `2a-render.html` in a browser).

## Commands

Requires Node 22.23.4 or later (Netlify uses Node 26) and pnpm.

| Command | Action |
|---|---|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the dev server on `localhost:4321` |
| `pnpm astro check` | Type-check the project |
| `pnpm build` | Build the site to `dist/` |
| `pnpm preview` | Serve the build locally |

## Where things are

| What | File |
|---|---|
| Open source projects (name, status, version, descriptions, technology, licence, start year) | `src/data/projects.ts` |
| Roles in the hero | `src/data/roles.ts` |
| Colours (design tokens) | `src/styles/tokens.css` |
| Interface text, routes and company details | `src/i18n/ui.ts` |
| Section text | `src/components/*.astro` |
| Privacy policy | `src/pages/privatlivspolitik.astro`, `src/pages/en/privacy.astro` |
| Build settings and security headers | `netlify.toml` |

To add a project, add one entry to `src/data/projects.ts`. The list and the project count update from that array.

## Contact form

The contact forms use Netlify Forms. Netlify detects them in the built HTML:
the Danish form is named `kontakt` and the English form is named `contact`.
A successful submission goes to `/tak/` or `/en/thanks/`.

## Privacy

No analytics, no cookies and no third-party requests at runtime. The font (Hanken Grotesk) is self-hosted
from `@fontsource/hanken-grotesk`. The `Content-Security-Policy` in `netlify.toml` allows only `'self'`,
so do not add inline `style` attributes, inline scripts or external resources.
