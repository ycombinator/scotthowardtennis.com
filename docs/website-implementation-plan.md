# Website Sketch Implementation Plan

## Goal

Give Scott a clickable preview of the proposed website: its navigation, page layouts, representative images, and draft text. Use `docs/report.md` as the rough brief. The first milestone is a reviewable sketch, with proper design and confirmed content developed through subsequent iterations.

## Stage 1: Rough sketch

- Use plain HTML, shared CSS, and minimal JavaScript in `site/`. No application framework or booking backend is needed.
- Build five linked pages: Home, Why Scott, Coaching Programs, Rates & Policies, and Contact.
- Add a consistent header, navigation, footer, and responsive layouts.
- Reuse the four photos linked in the report, storing compressed local copies and recording their sources.
- Populate the layouts with representative report copy. Clearly mark unresolved credentials, testimonial text/dates, audience details, prices, policies, and contact information.
- Show the optional inquiry form as a preview. Do not collect or transmit personal information yet.
- Support GitHub Pages at `/scotthowardtennis.com/` with relative links. Publish only `site/`, excluding `.env`, internal research, and tooling. Leave DNS and the custom domain unchanged.
- Check every page on desktop and mobile, navigation and section links, image loading, keyboard access, and the project-path preview.

### Page sketches

| Page | Layout |
| --- | --- |
| Home | Hero with jump-serve photo; authority strip; audience cards; sample testimonials; teaching-video placeholder; three next steps. |
| Why Scott | Coaching philosophy; talking-tennis photo; selective career timeline; teaching-video placeholder; contact prompt. |
| Coaching Programs | Shared teaching photo; four audience cards; adult, junior, doubles/group, and competitive sections. |
| Rates & Policies | Draft pricing, payment, locations, policies, and what-to-bring sections. |
| Contact | Five contact options; preview inquiry form; serve-forward photo. |

### Acceptance criteria

Scott can navigate all five pages and understand the proposed site without reading the report. Photos and representative text are present. Unconfirmed content and inactive contact features are identifiable. Layouts work on mobile and desktop. A GitHub Pages workflow is ready; enabling Pages and publishing the repository provides a shareable preview URL.

## Stage 2: Interleaved design and content iterations

Review the structure with Scott, then refine copy, imagery, and layout together, section by section. Confirm program audiences, credentials and dates, testimonials, locations, rates, payment methods, policies, business contact details, and expected response times. Use feedback to improve typography, color, spacing, and visual hierarchy. Design and content are interdependent, rather than sequential stages.

## Stage 3: Launch preparation

Connect the confirmed contact methods and a Tally inquiry form. Add approved Google/Yelp links and teaching clips. Verify accessibility, search metadata, performance, mobile behavior, and form submission. Confirm image permissions and remove draft markers. Arrange domain cutover only when requested. Booking remains a separate future scope.

## Review and deployment

Run `python3 -m http.server 8000 --directory site` for local review at `http://localhost:8000/`. See the root README for GitHub Pages setup. No DNS changes or custom-domain configuration belong to the initial sketch.
