# Tally inquiry form setup

Tracks [issue #2](https://github.com/ycombinator/scotthowardtennis.com/issues/2).

The published form is [Scott Howard Tennis — Inquiry](https://tally.so/r/q42NrG).
It was created through the Tally API in Scott's account and is embedded on the
contact page. Self-email notifications are enabled, and the custom thank-you
screen stays inside the embed. Redirect on completion is off.

The API key is only used locally from the Git-ignored `.env`. The website uses
the public form ID and does not contain the key. A pre-commit guard in
`.githooks/pre-commit` rejects staged environment files, including force-added
files. Enable it in new checkouts with `git config core.hooksPath .githooks`.

## Form content

Title: **Send an inquiry**

Introduction: **Share a little about your game, your goals, and where you'd like
to play.**

| Question | Tally field type | Required | Placeholder or options |
| --- | --- | --- | --- |
| Your name | Short answer | Yes | Name |
| Email or phone | Short answer | Yes | Best way to reach you |
| Player age and level | Short answer | No | e.g. Adult, intermediate |
| Interested in (select all that apply) | Checkboxes | No | Adults; Juniors; Doubles & groups; League & competitive; Not sure yet |
| What would you like to improve? | Long answer | No | A little about your goals |
| Location and availability | Short answer | No | Area, days, and times that work for you |

Submit button: **Send inquiry**

Use a short-answer field for “Email or phone” so visitors can provide either.
Scott will use the submitted contact details to follow up manually.

## Submission settings

1. Add a thank-you screen with this message:
   **Thanks! Your inquiry has been received. Scott will get back to you.**
2. Leave **Redirect on completion** off. The thank-you screen should stay inside
   the embedded form on the contact page.
3. Enable **Self email notifications** in the form settings. Verify that the
   account email belongs to Scott; free notifications go to the form creator's
   account email.
4. Publish the form and copy its public URL from the Share tab.

The free plan retains Tally branding. Custom email Reply-To settings and
automatic confirmation emails to visitors are not part of this implementation.

## Website integration and verification

Implementation and verification:

- The disabled preview in `site/contact.html` is replaced with the Tally embed.
- The duplicate title is hidden, the background is transparent, and dynamic
  height fits the form and confirmation screen to the existing layout.
- An accessible iframe title and direct form link provide a fallback.
- The API settings and publicly served embed were checked.
- Still verify desktop, mobile, keyboard access, and the deployed GitHub Pages
  repository subpath in a browser.
- A real test inquiry was submitted, and the site owner confirmed successful
  email delivery to Scott and that the result looked good.

## References

- [Embed your form](https://tally.so/help/embed-your-form)
- [Self email notifications](https://tally.so/help/self-email-notifications)
- [Create a thank-you page](https://tally.so/help/how-to-create-a-thank-you-page)
