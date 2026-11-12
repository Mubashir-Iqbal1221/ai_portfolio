# Mubashir Iqbal, portfolio

A static site: plain HTML, CSS and a little JavaScript, built with [Vite](https://vite.dev). No framework.

## Run it

Needs Node 20 or newer (`.nvmrc` says 22).

    npm install        # once
    npm run dev        # http://localhost:8080, reloads on every save
    npm run build      # production build into dist/
    npm run preview    # serve the production build locally

## Layout

    index.html               home page: hero, work, stack, about, contact
    case/                    case study pages (every .html here is built automatically)
    writing/                 blog post template and posts (same rule)
    design-system/site.css   the single stylesheet: tokens first, then components
    public/                  files copied as they are (images, og image, favicon)
    vite.config.js           page list and build settings
    docs/baseline/           brand, UI and content standards, site copy, roadmap (local only, gitignored)

To add a case study or a blog post, copy an existing .html file into `case/` or `writing/`. No config change is needed.

## Deploy

- **GitHub Pages:** push to `main`. In the repo settings set Pages source to "GitHub Actions". The workflow `.github/workflows/pages.yml` runs `npm ci` and `npm run build`, then publishes `dist/`.
- **Cloudflare:** `npm run deploy:cf` builds and runs `wrangler deploy` (config in `wrangler.jsonc`, serves `dist/`).

## Working rules

1. Site copy lives in `docs/baseline/site_content.md`. Keep it in step with `index.html`.
2. Read `docs/baseline/brand_guideline.md` before changing copy, and `docs/baseline/ui_baseline.md` before changing layout, colour or motion.
3. Every colour must pass contrast in dark and light mode (text 4.5:1, controls 3:1).
4. Respect `prefers-reduced-motion`, and keep the pause control for any looping motion.
5. No horizontal overflow from 320 px to 1440 px.

## Known gaps

- The LinkedIn address has not been click-tested.
- There is no `og:image` yet, so shared links show no preview picture.
- Light mode has been checked less than dark mode.
