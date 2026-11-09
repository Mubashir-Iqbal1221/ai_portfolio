# Mubashir Portfolio

Single-file portfolio: one `index.html`, Three.js r128 from cdnjs, no build step.
Scroll drives a camera orbit around a procedural knowledge-graph scene. Dark is the default theme, with a light toggle saved in `localStorage.mode`.

## Run locally

    npm run dev        # or: python3 -m http.server 8080
    open http://localhost:8080

## Deploy (free)

- **GitHub Pages:** push to `main`. Enable Pages with source "GitHub Actions" in repo settings. Workflow: `.github/workflows/pages.yml`.
- **Cloudflare:** `npm run deploy:cf` (Workers static assets, config in `wrangler.jsonc`), or connect the repo to Cloudflare Pages with no build command and output directory `/`.

## Layout

    index.html            the site (HTML, CSS, JS, shader in one file)
    design-system/        tokens.json (source), tokens.css, components/ with previews
    docs/baseline/        brand, UI and content standards, site copy, roadmap

## Working rules

1. Change `design-system/tokens.json` first, then mirror the value in the `:root` and `html[data-mode="light"]` blocks of `index.html`.
2. Every color must be checked in both themes (text 4.5:1, controls 3:1). See `docs/baseline/ui_baseline.md`.
3. Respect `prefers-reduced-motion`; reveal animations start from a visible state.
4. Follow `docs/baseline/ui_baseline.md` for any new section.

## Known gaps

- Contact links in `index.html` are placeholders.
- The `navy` token is defined but unused.
- The 3D scene and light-mode hero were not verified visually in headless tests (no WebGL). Check them in a real browser.
