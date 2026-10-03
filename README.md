# Scott Howard Tennis

An initial website sketch for Scott to review. Five static pages demonstrate the proposed structure, draft copy, and existing photography. Design and content will evolve together.

## Local preview

No build step or dependencies are required:

```sh
python3 -m http.server 8000 --directory site
```

Open http://localhost:8000/. Edit the HTML in `site/`, shared styles in `site/assets/css/styles.css`, and preview interactions in `site/assets/js/site.js`.

## Review scope

Use **Editorial notes** in the top status bar to show or hide review commentary across all five pages. Notes appear as yellow sticky notes with locally hosted handwriting, start visible, and your preference persists between pages and reloads when browser storage is available. The preview status bar stays visible.

Call, text, WhatsApp, and email CTAs link to Scott’s published contact details. Phone numbers are not displayed. WhatsApp availability still needs confirmation. The inquiry form remains a preview; entries are not transmitted. Unconfirmed content is labeled. Form fields are available for trying the layout; the submit button stays disabled until a submission provider is connected. Photos and video thumbnails are sourced in `site/assets/images/README.md`. Teaching clips load on click, with direct YouTube links available as a fallback. Desktop shows a local Venmo QR code; mobile uses the same direct Venmo Pay app link with Scott as recipient and no amount prefilled. This requires the Venmo app; verify the app handoff on a phone before publishing.

- [Implementation plan](docs/website-implementation-plan.md)
- [Website brief](docs/report.md)
- [Contributor guide](AGENTS.md)

## GitHub Pages

The workflow at `.github/workflows/pages.yml` deploys only `site/` on pushes to `main` or manual dispatch. In the GitHub repository, select **Settings → Pages → Build and deployment → Source → GitHub Actions**, then push the website files to `main` or run the workflow.

The expected preview address is https://ycombinator.github.io/scotthowardtennis.com/ (available after successful deployment). Links and assets use relative paths to support this project URL. No `CNAME` is included; keep scotthowardtennis.com and its DNS unchanged until cutover is requested.

Internal documents, `.env`, and PDF tools are outside the uploaded site artifact. For details, see [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
