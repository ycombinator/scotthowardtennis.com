# Google Analytics setup

Tracks [issue #1](https://github.com/ycombinator/scotthowardtennis.com/issues/1).

The shared script is wired into all five pages with the owner-supplied GA4 Web
stream measurement ID `G-5LXQYH65JB`. Collection is enabled on hosted pages.
Local previews remain excluded. The user confirmed live GA4 verification after
following the verification instructions; see the verification record below.

## Property and stream

1. In [Google Analytics](https://analytics.google.com/), select the owner's account
   and create a GA4 property for Scott Howard Tennis. Confirm the reporting time
   zone and currency with the owner.
2. Add a Web data stream for the currently published website. During the preview,
   use `https://ycombinator.github.io/scotthowardtennis.com/`. This does not require
   connecting the custom domain or changing DNS.
3. Turn **Enhanced measurement off** for this stream. This implementation sends
   page views and link events itself. Automatic outbound click events can send
   contact URLs, including phone numbers, email addresses, and prefilled messages.
   Automatic history page views can also duplicate measurement on fragment changes.
4. Confirm the Web stream measurement ID is `G-5LXQYH65JB`, as configured in
   `site/assets/js/analytics.js`. For a future stream change, update `measurementId`
   in that file. No API key, secret, backend, or extra HTML tag is needed.
5. Under Admin → Custom definitions, create an event-scoped custom dimension named
   **Contact method** with event parameter `contact_method` for report breakdowns.

Use only this shared Google tag. Do not also paste a separate tag into each page
or configure Tag Manager to send the same events.

## Events and data

| Event | Trigger | Custom parameters |
| --- | --- | --- |
| `page_view` | Once on each HTML page load | None |
| `contact_click` | Call, Text, WhatsApp, or Email link activation | `contact_method`: `call`, `text`, `whatsapp`, or `email` |
| `map_click` | Google Maps link activation | `map_provider`: `google_maps` |

Links opt in with `data-analytics-method`. Add the same attribute when adding new
contact or map links. Normal clicks, keyboard link activation, and middle clicks
are supported. Link navigation is never delayed or prevented. These events record
intent to contact Scott, not successful calls, messages, or inquiries.

The Google tag still collects its standard analytics metadata. This script strips
query strings and fragments from `page_location` and `page_referrer`, preserving
the origin and path, including the GitHub Pages repository subpath. Custom click
events never include link URLs, link text, phone numbers, email addresses, or form
contents. The Tally iframe and its submissions are not tracked by this script.

On `localhost` (including subdomains and a trailing dot), IPv4 loopback `127.*`,
IPv6 loopback, and non-HTTP(S) pages, the script returns before loading Google or
installing event listeners. A blank or invalid measurement ID also disables it.
Other hosted previews will collect events once an ID is configured.

## Verification

Run the dependency-free regression checks with Node.js:

```sh
node --test tests/analytics.test.mjs
git diff --check
```

The checks cover all five pages, script/link wiring, loopback exclusions, disabled
configuration, duplicate initialization, sanitized URLs, contact/map event payloads,
and repository subpaths. They use a test ID in memory and make no Google requests.

After configuring the owner-supplied ID and deploying through the existing Pages
workflow:

1. Confirm Enhanced measurement is off. Open the deployed site in a browser with
   analytics requests allowed and open GA4 **Realtime** for the correct property.
2. Visit all five pages. In browser Network tools, filter for `collect` and confirm
   the `tid` matches the owner's ID and there is exactly one `en=page_view` per page
   load. Other standard events such as `session_start` are expected. Confirm `dl`
   retains `/scotthowardtennis.com/` and has no query string or fragment.
3. Activate each contact option and each map link, including a nested label and a
   keyboard activation. Confirm `contact_click` with the appropriate
   `contact_method`, and `map_click` with `map_provider=google_maps`, in Realtime.
   Check that no automatic outbound `click` events send contact URLs. Avoid sending
   an actual message or inquiry as part of this click check.
4. For parameter inspection in **DebugView**, connect the deployed site through
   [Google Tag Assistant](https://tagassistant.google.com/), then open Admin →
   Data display → DebugView and select the debug device. Disconnect Tag Assistant
   afterward; do not permanently enable debug mode for all visitors.
5. Serve `site/` locally with `python3 -m http.server 8000 --directory site`.
   Confirm every page and contact/map activation sends no Google tag or analytics
   collection requests on `http://localhost:8000/` and `http://127.0.0.1:8000/`.
6. Record the verification date, property/stream name, deployed revision, and results
   here once collection is confirmed. Do not mark issue #1 complete before this check.

Preview labels and `noindex` metadata remain in place. Only `site/` is deployed;
setup notes and tests stay outside the published directory.

## Verification record

- On 2026-10-08, the user confirmed live GA4 verification with “Verified” after
  receiving the page-view and contact/map event verification instructions.
- Measurement ID: `G-5LXQYH65JB`.
- Implementation revision: `344f26f` (`feat: add GA4 page and contact tracking`).
- This records user-confirmed verification. No DebugView screenshots or individual
  event results were supplied, and the agent did not independently inspect GA4.

## References

- [Create an account, property, and Web stream](https://support.google.com/analytics/answer/14183469)
- [Manual page views and duplicate prevention](https://developers.google.com/analytics/devguides/collection/ga4/views)
- [Custom events and Realtime/DebugView verification](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Enhanced measurement events and settings](https://support.google.com/analytics/answer/9216061)
