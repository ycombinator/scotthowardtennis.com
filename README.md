# Scott Howard Tennis

An initial website sketch for Scott to review. Five static pages demonstrate the proposed structure, draft copy, and existing photography. Design and content will evolve together.

## Local preview

No build step or dependencies are required:

```sh
python3 -m http.server 8000 --directory site
```

Open http://localhost:8000/. Edit the HTML in `site/`, shared styles in `site/assets/css/styles.css`, and preview interactions in `site/assets/js/site.js`.

## Review scope

Contact options and the inquiry form are previews; no personal information is transmitted. Unconfirmed content is labeled. The form fields are intentionally disabled until a submission provider is connected. Photos are sourced in `site/assets/images/README.md`.

- [Implementation plan](docs/website-implementation-plan.md)
- [Website brief](docs/report.md)
- [Contributor guide](AGENTS.md)

## GitHub Pages

The workflow at `.github/workflows/pages.yml` deploys only `site/` on pushes to `main` or manual dispatch. In the GitHub repository, select **Settings → Pages → Build and deployment → Source → GitHub Actions**, then push the website files to `main` or run the workflow.

The expected preview address is https://ycombinator.github.io/scotthowardtennis.com/ (available after successful deployment). Links and assets use relative paths to support this project URL. No `CNAME` is included; keep scotthowardtennis.com and its DNS unchanged until cutover is requested.

Internal documents, `.env`, and PDF tools are outside the uploaded site artifact. For details, see [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
