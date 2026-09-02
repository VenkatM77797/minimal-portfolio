# Developer Resume Portfolio

A minimal, accessible, config-driven resume portfolio for developers. Clean light theme, black and dark-gray typography, plenty of whitespace, simple borders, subtle hover states — no gradients, no heavy animation.

All content lives in **one file**: `src/data/portfolio.ts`. Fork the repo, replace the data, deploy.

## Sections

Hero · About · Skills · Experience · Projects · Education · Certifications · Contact

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 (design tokens in `src/styles.css`)
- TanStack Router (file-based routing in `src/routes/`)
- No paid services, no proprietary dependencies, no AWS/S3

## Setup

```bash
git clone https://github.com/your-username/resume-portfolio.git
cd resume-portfolio
npm install
npm run dev
```

The dev server prints a local URL (default `http://localhost:8080`).

## Customization

1. Open `src/data/portfolio.ts` and replace every field with your own information — name, role, tagline, about text, skills, experience, projects, education, certifications, contact links, and the page title/description used for SEO.
2. Optional: drop a `resume.pdf` into `public/` and keep `hero.resumeUrl: "/resume.pdf"`, or set it to `undefined` to hide the download link.
3. Optional: set `meta.ogImage` to an absolute `https://` image URL for social previews.
4. Colors, radii, and fonts are semantic tokens in `src/styles.css` (`--background`, `--foreground`, `--muted-foreground`, `--border`, `--radius`, `--font-sans`). Change them there — components never hardcode colors.

### Adding a project

Append an entry to the `projects` array:

```ts
{
  name: "My Project",
  description: "One or two sentences about what it does.",
  tech: ["TypeScript", "React"],
  github: "https://github.com/your-username/my-project",
  demo: "https://my-project.example.com",
  featured: true, // renders in the top, most prominent row
}
```

`github` and `demo` are both optional; buttons render only when present. Cards are rendered by the reusable `src/components/portfolio/ProjectCard.tsx`.

## Environment variables

None are required. If you add an integration later, expose only public values via Vite's `VITE_` prefix in a `.env` file and never commit secrets.

## Build

```bash
npm run build     # production build
npm run preview   # preview the production build locally
```

## Deploying to GitHub Pages

1. Push the repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist/client
      - id: deployment
        uses: actions/deploy-pages@v4
    environment:
      name: github-pages
```

4. If you deploy to a project page (`https://user.github.io/repo/`) rather than a user page, set the base path in `vite.config.ts`:

```ts
export default defineConfig({
  vite: { base: "/repo/" },
});
```

Because the site is a single static page with in-page anchors, no SPA 404 fallback is needed. Any other static host (Netlify, Vercel, Cloudflare Pages) works the same way: build, then serve the generated client output.

## Accessibility & performance

- Semantic landmarks, one `<h1>`, labelled sections, and a skip link
- Visible focus rings on every interactive element
- Keyboard-navigable, no motion-heavy effects
- System font stack — no blocking web-font requests

## License

[MIT](./LICENSE) — free to fork, modify, and use for your own portfolio.
