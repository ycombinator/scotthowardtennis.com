# Repository Guidelines

## Project Structure & Module Organization

This repository contains the website for scotthowardtennis.com. The initial implementation is a static layout sketch; design and content will evolve together.

- `site/`: five HTML pages; this is the only published directory.
- `site/assets/css/styles.css`: shared responsive styles.
- `site/assets/js/site.js`: mobile navigation interactions.
- `site/assets/images/`: local photos and their source notes.
- `docs/report.md`: rough website brief.
- `docs/website-implementation-plan.md`: implementation stages and review criteria.
- Other `docs/` files: research, booking proposals, and PDF output.
- `tmp/pdfs/`: local, Git-ignored PDF tooling.
- `.github/workflows/pages.yml`: GitHub Pages deployment.

Keep internal research separate from published assets. Booking remains a future scope.

## Build, Test, and Development Commands

There is no build step or package dependency for the website.

- `python3 -m http.server 8000 --directory site`: preview at `http://localhost:8000/`.
- `git diff --check`: check tracked changes for whitespace errors.

The optional PDF generator uses ReportLab, macOS fonts, and hardcoded paths. Configure its paths before running `python3 tmp/pdfs/build_pdf.py`.

## Coding Style & Naming Conventions

Use two-space indentation for HTML, CSS, and JavaScript; use four spaces and snake_case in Python. Use lowercase, hyphen-separated filenames. Reuse CSS variables and shared components' class names. Keep navigation and footer markup consistent across pages. No formatter or linter is configured.

Use short paragraphs and descriptive headings. Label unconfirmed claims, rates, and testimonials; do not invent business details.

## Testing Guidelines

No automated test framework or coverage target is configured. Check all five pages at desktop and mobile widths, keyboard navigation, image loading, links, and fragment targets. Verify relative URLs under `/scotthowardtennis.com/`. Preview contact fields must remain disabled until connected to a submission service.

## Commit & Pull Request Guidelines

No existing commit history establishes conventions. Use concise, imperative subjects, such as `feat: add coaching program sketch`. Keep changes focused. PRs should describe behavior and validation, link relevant issues, and include screenshots for layout changes.

## Hosting & Configuration

Deploy only `site/` through GitHub Pages. Keep the custom domain disconnected: do not add `CNAME` or change DNS until cutover is requested. Preserve preview labels and `noindex` metadata until launch. Never commit `.env` or expose credentials. Review staged files before committing.
