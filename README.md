# Yuxuan Chen · haruyuki

A single-page personal portfolio featuring YeeMe and Myzooids, education, a Chinese/English switch and a moving gallery of real project images. Plain HTML, CSS and JavaScript; no build or package installation is required.

## Publish

In repository Settings → Pages, select **GitHub Actions** as the source. The workflow in `.github/workflows/pages.yml` publishes `dist/` on pushes to `main` and can also be started manually. If the repository uses a different default branch, update the workflow branch to match.

All asset paths are relative, so the same files support both a user site and a project site. Existing project URLs redirect to the appropriate homepage section.

## Edit

- `dist/index.html`: English copy, education, project structure and images.
- `dist/language.js`: Chinese translations and language preference.
- `dist/content.js`: profile, dates, optional contact links, asset paths and image descriptions.
- `dist/styles.css`: typography, background, spacing and gallery speed.
- `dist/main.js`: profile rendering, gallery duplication and pause controls.
- `dist/assets/`: referenced screenshots, real robot photos, engineering diagrams and school marks.

Preview locally with `python3 -m http.server 4173 --directory dist`.

Only the public portfolio and its referenced assets are included. School logos identify the author's educational institutions. Myzooids engineering images are from the author's supplied graduation materials.
