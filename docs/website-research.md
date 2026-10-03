# Scott Howard Tennis — Website Research Notes (Working Draft)

**Prepared:** September 22, 2026  
**Site reviewed:** https://scotthowardtennis.com/  
**Working audience:** Internal research team; eventual subject is Scott Howard, tennis coach serving the San Francisco Bay Area  
**Known platform/host:** WordPress hosted on GoDaddy (provided by the site owner)

**Document purpose:** Internal research and discovery, not a final client report. Findings below combine observed site content, author interviews, competitor comparisons, platform research, and working hypotheses. Recommendations should be validated against Scott’s actual capacity, court access, finances, legal/tax situation, and preferred operating process before being presented as a final plan.

## Editorial guidance for the eventual report

- Keep the report short.
- Keep each section brief and focused.
- Use short, punchy sentences.
- Use a professional, practical tone.
- Lead with the finding and its business impact.
- Prefer specific actions over general advice.
- Use concrete examples throughout, such as sample headlines, calls to action, page labels, proof points, and content structures.
- Link proof points to authoritative sources where available, such as governing bodies, schools, clubs, tournament organizations, or first-party professional profiles.
- Write for a non-technical owner: explain jargon, emphasize business outcomes, and separate Scott’s decisions from technical implementation work.
- Separate observed facts from assumptions and recommendations.
- Avoid repeating the same recommendation in multiple sections.
- Use tables or bullets only when they improve scanability.

## Research scope and method

- Reviewed the public Scott Howard Tennis pages: homepage, About, Lessons Info, Coaching Experience, Testimonials, and Contact.
- Recorded author-stated goals and preferred conversion behavior during discovery.
- Compared four Bay Area coaching sites for transferable patterns: Complete Tennis Lessons, RAM Tennis, McClain Tennis, and Split Step Tennis Lessons.
- Researched Google Business Profile/Yelp presence, static hosting alternatives, WordPress/GoDaddy risk, and California business-structure considerations using current public documentation.
- Did not have access to analytics, Search Console, GoDaddy billing, WordPress admin, plugin/theme inventory, customer interviews, or conversion data. Statements about performance, costs, and legal obligations therefore remain hypotheses until verified.

## Research synthesis (working)

The site has a credible coaching story—30+ years of teaching, collegiate coaching, USPTA Elite Professional status, current work at Burlingame Country Club, competitive playing experience, clear starting rates, and substantial testimonials. The central business opportunity is to turn that credibility into a faster, more specific path to calling or emailing Scott.

The most urgent finding is not cosmetic: the live homepage currently contains large blocks of unrelated online-betting/roulette content and external gambling links. This appears to be SEO/content injection or a compromised WordPress publishing layer. It damages trust, can expose visitors to unsafe destinations, dilutes search relevance, and may indicate an underlying plugin/theme, administrator-account, hosting, or credential problem. It should be handled before marketing or conversion work.

The current site is best understood as a simple credibility brochure. It does not yet function as a high-converting local service site because the visitor must infer who the service is for, where lessons occur, what the next step is, and how to contact Scott immediately.

## Author-stated goals

When asked what he wants a visitor to do next, the author said:

> “I guess I would want them to think I was the best instructor around, and for the website to look professional and to find a way for it to be highly visible.”

When asked what action he would like a visitor to take, he clarified:

> “To sprint to their phone and call me or immediately send an email. I don’t have it set up like Paul does to take lesson reservation signups.”

This defines three connected goals:

1. **Perceived excellence:** visitors should quickly understand why Scott is unusually qualified and what improvement they can expect.
2. **Professional presentation:** the visual design, writing, contact experience, security, and technical quality should support a premium coaching business.
3. **Visibility:** the site should be discoverable when Bay Area players and parents search for relevant coaching services.

The desired visitor sequence is therefore:

**Find the site → trust Scott’s authority and fit → understand the offer → call or email immediately.**

Online reservation or self-service scheduling should not be treated as a required feature. The site should make direct contact exceptionally easy and use a form only as an optional fallback for visitors who prefer to write out their needs.

“Best instructor” is a positioning goal rather than a claim the site can prove literally. The site should substantiate it with specific evidence—USPTA Elite Professional status, collegiate coaching outcomes, competitive results, current playing/coaching activity, player improvement stories, and a clear coaching method—while avoiding unsupported superlatives.

## What the site currently communicates

- Homepage promise: “Continuing the Legacy in the Bay Area & Beyond.”
- Broad audience: beginner, intermediate, and advanced players.
- Services mentioned: private, semi-private, group lessons, doubles clinics, and USTA team practice sessions.
- Geography: South Bay and Peninsula; current club affiliation in Hillsborough.
- Pricing: private lessons from $110/hour; semi-private lessons from $130/hour.
- Payment capability: Scott has a Venmo account (payment handle/instructions still need confirmation before publication).
- Authority: 30+ years teaching, 13 years of head collegiate coaching, USPTA Elite Professional, tournament and ranking history, and 70 USTA Northern California tournament wins claimed.
- Social proof: testimonials from adults, parents of children, a small women’s group, a Stanford professor, and recreational/league players.
- Primary contact method: phone and a Yahoo email address.

## Security observation: apparent WordPress content injection

### Evidence

The homepage’s tennis content is followed by extensive unrelated copy about “1xBet Mobile,” roulette sites, online casinos, casino bonuses, and multiple external gambling links. This content is not present on the internal About, Lessons Info, Coaching Experience, Testimonials, or Contact pages captured in the review.

### Why this matters

- Visitors may assume the business is unsafe, abandoned, or endorsing gambling.
- Search engines may classify the domain as hacked/spammy, reducing rankings or triggering warnings.
- External links can create legal, reputational, and security exposure.
- The injection suggests the site, CMS, hosting account, theme, plugin, or credentials may need investigation—not just a content edit.

### Remediation hypothesis to validate

1. Take a complete GoDaddy backup/snapshot and a separate export of the WordPress database and `wp-content` before changing anything.
2. Remove the injected posts/blocks/links from WordPress and confirm they are absent from rendered HTML.
3. Update WordPress core, the active theme, and every retained plugin; remove abandoned plugins, unused themes, pirated components, and unknown administrator accounts.
4. Rotate GoDaddy, WordPress administrator, database, hosting-panel, FTP/SFTP, domain/DNS, and email passwords; enable MFA where available.
5. Review GoDaddy access/security logs, WordPress users, scheduled tasks, `.htaccess`, `wp-config.php`, modified-file timestamps, redirects, sitemap/robots files, and Search Console security/manual-action reports.
6. Run a reputable WordPress malware/file-integrity scan, then have a qualified WordPress security professional review any persistence mechanisms before declaring the site clean.
7. Request re-crawling after cleanup and monitor indexed pages and outbound links.
8. Add an inexpensive uptime/security monitoring check, automated off-host backups, and a monthly WordPress update routine.

Do not assume that deleting the visible spam from a page fixes the incident; injected WordPress code can recreate content after cleanup.

## UX observations and conversion hypotheses

### 1. Make the homepage specific to local buying intent

The headline is inspirational but generic. A prospective client needs to recognize the service immediately. Test a message such as:

> Private tennis coaching for adults, juniors, doubles teams, and competitive players on the Peninsula and South Bay.

Add the service area, lesson types, starting price, and direct contact actions in the first screen. Suggested primary CTA: **Call Scott**. Secondary CTA: **Email Scott**. “Request availability” can be supporting copy, but should not replace the direct actions.

### 2. Make calling and emailing the dominant conversion path

The navigation is a set of informational pages (About, Lessons Info, Coaching Experience, Testimonials, Contact), but there is no prominent conversion action. Add a persistent **Call Scott** button and a prominent **Email Scott** link in the header, hero section, and footer. On mobile, make the phone number a large tap target and use a `tel:` link; use a `mailto:` link for email.

The contact page should lead with the two direct actions rather than a booking calendar. It can include an optional short form for visitors who prefer to send details:

- name and preferred contact method
- player age/level
- lesson type (private, semi-private, group, doubles, USTA team)
- preferred cities/club
- preferred days/times
- short goal or problem to solve

Keep phone and email visible throughout the site. Do not add a reservation system unless Scott later decides that scheduling administration—not lead generation—is the main bottleneck.

### 3. Organize the offer around customer segments

The testimonials already reveal useful segments. Create concise cards or sections for:

- Adults improving strokes, match strategy, or confidence
- Juniors and parents seeking structured, positive instruction
- Doubles groups and women’s groups
- League/USTA players preparing to compete
- Advanced players seeking high-level technical and tactical coaching

Each segment should state the outcome, typical format, location, and a CTA.

### 4. Use proof where the decision happens

The strongest evidence is buried on separate pages. Put three short, attributed testimonials on the homepage—one adult, one parent, one competitive player—with a link to all testimonials. Add trust markers near the CTA: USPTA Elite Professional, current Burlingame Country Club professional, collegiate coaching experience, and selected ranking/tournament achievements.

#### Existing media placement hypothesis

The current site has four useful tennis images and two YouTube teaching clips. Reuse them in context:

- **Jump-serve photo:** Keep as the Home hero image. It signals expertise immediately.
- **Talking-tennis photo:** Move to **Why Scott** beside the coaching philosophy.
- **Teaching-tennis photo:** Use on **Coaching Programs**, beside the player-and-goal cards.
- **Serve-forward photo:** Use on **Contact** as a supporting image, not as the primary content.
- **“Proactive to reactive” video:** Feature one short clip in Home’s Proof section to demonstrate Scott’s teaching method.
- **USPTA quick-tip video:** Place on **Why Scott** or link beneath the featured video as an optional example.

Do not create a separate Media page yet. Keep one featured video on Home and link to the YouTube channel for the rest. Compress images, use descriptive alt text, and load videos only when requested.

### 5. Turn credentials into benefits, not only chronology

The experience page is a long résumé. Keep the history, but translate it into benefits: modern technique, match strategy, live feedback, age-appropriate junior instruction, and experience building teams/programs. Use a compact timeline or “Why players choose Scott” section.

#### Experience-page content mapping

Use the current Experience page as source material, not as a separate résumé page. Bring its strongest points into the hierarchy:

- **Home authority strip:** Current professional role, 30+ years teaching, collegiate coaching, and selected dated ranking results.
- **Why Scott timeline:** Burlingame, Mission College, Stanford, Holy Names, Stonebrae, USF, Texas–Pan American, and Pacific roles, with only the most relevant dates and outcomes.
- **Why Scott proof:** Highlight program-building results, USTA team coaching, and competitive experience in short benefit-focused statements.
- **Coaching Programs:** Translate the collegiate and junior experience into reasons Scott is a fit for juniors, teams, and competitive players.

Keep the full ranking list out of the main flow. Use three or four dated examples, then link to a verified record or offer the remaining history in an expandable section.

### 6. Improve local discoverability

- Use page titles and headings that include “tennis coach,” “tennis lessons,” and relevant service areas (Burlingame/Hillsborough, Peninsula, South Bay) naturally.
- Add a complete Google Business Profile if one does not already exist; keep name, phone, service area, and affiliation consistent.
- Add LocalBusiness/Person/ProfessionalService structured data with service area, phone, email, and sameAs links.
- Create one useful evergreen page or FAQ answering local-intent questions: rates, lesson formats, who lessons are for, what to bring, court/location logistics, cancellation policy, and junior safety/parent expectations.
- Avoid publishing exact private-club access details unless the club authorizes it; describe the service area clearly without implying public access where it is not available.

### Google and Yelp presence

Scott would likely benefit from a verified **Google Business Profile** as a high-priority, low-cost visibility channel. Google says eligible in-person service businesses can manage how they appear in Search and Maps, show a phone number, website, service area, photos/videos, and collect/respond to reviews at no charge. A tennis coach who meets students in person should evaluate eligibility as a service-area or hybrid business and use only accurate cities/areas; if clients do not visit Scott’s own address, the address should be hidden rather than implying a public storefront. [Google Business Profile overview](https://support.google.com/business/answer/7039811), [Google service-area guidance](https://support.google.com/business/answer/9157481), [Google eligibility guidelines](https://support.google.com/business/answer/13763036)

Recommended Google setup:

- Claim or create one profile under the real-world business name, not keyword-stuffed text.
- Use a precise primary category, accurate phone, website, hours/availability guidance, and Peninsula/South Bay service areas.
- Add professional tennis-court, coaching, and portrait photos; link the profile to the cleaned site.
- Add services such as private lessons, junior coaching, doubles clinics, adult instruction, and USTA/team practice where supported.
- Ask satisfied clients for honest reviews after a meaningful coaching milestone; do not offer incentives or ask for only positive reviews. Reply professionally to reviews.
- Use the profile’s call and website actions as the primary conversion path, matching Scott’s preference for phone/email contact.

**Yelp is worth claiming, but is secondary to Google.** A complete, free Yelp business page can provide another citation, review surface, phone/website path, and a way to monitor how the business is represented. It may be useful for local trust and consistency, but there is no reason to buy Yelp advertising initially. Claim the page, keep name/phone/service area consistent, add a concise description and photos, and monitor/respond to reviews. Only test paid Yelp promotion if the free listing produces measurable calls or emails and the cost per qualified lead is acceptable.

The strategic goal is not to accumulate profiles. It is to establish one accurate Google presence, one consistent secondary Yelp presence, and a repeatable review process that strengthens Scott’s “best instructor” positioning.

### Legal-entity question: what Scott needs for listings

Scott does **not** need to form an LLC or corporation merely to appear on Google or Yelp. The platforms care primarily that he is a real, eligible, in-person service business and that the owner or an authorized representative controls the listing. Google’s rules require in-person customer contact and allow service-area businesses; Google also permits individual practitioners with their own customer base. [Google eligibility rules](https://support.google.com/business/answer/13763036), [Google Business Profile overview](https://support.google.com/business/answer/7039811)

For a California coaching business, the practical structures are:

- **Sole proprietorship:** likely the simplest starting structure. California says an individual can establish one without filing formation documents with the Secretary of State, though taxes, permits, licenses, insurance, and local requirements still apply. [California FTB sole proprietorship guidance](https://www.ftb.ca.gov/file/business/types/sole-proprietorship.html)
- **LLC:** optional, not required for a listing. It may provide liability separation and a more formal business structure, but it adds formation, tax, reporting, and maintenance obligations. A lawyer or CPA should advise based on Scott’s liability and tax situation.
- **DBA/fictitious business name:** if he operates under a name other than his personal legal name, California may require a fictitious business name statement with the appropriate county. [California Secretary of State entity guidance](https://www.sos.ca.gov/business-programs/business-entities/starting-business/types)

Separate from platform eligibility, Scott should check the business-license requirements of the city or county where the coaching business is based and confirm appropriate liability insurance. The listing should use the exact real-world business name, direct phone, website, and truthful service area; it should not use a private-club address unless Scott is authorized to represent that location and it meets Google’s rules.

### 7. Build confidence and reduce friction

The contact page currently gives a phone number and a generic email but no response-time expectation, availability guidance, location process, cancellation policy, or privacy notice. Add: “I typically respond within one business day,” what happens after inquiry, and a concise policy summary.

### 8. Accessibility and mobile basics

Verify image alt text, color contrast, keyboard navigation, focus states, tap target sizes, heading order, form labels, and compressed responsive images. Use descriptive link labels and make the phone number a `tel:` link and email a `mailto:` link. Test on a current iPhone-sized viewport because local service traffic is likely to be mobile-heavy.

## Comparative research and strategic hypotheses

### Comparative analysis: Complete Tennis Lessons / Paul Dulac

Paul’s site is a useful local comparison because it makes the offer operational, not just biographical. Its navigation separates Coach Paul, philosophy, cost/payment/registration, testimonials, junior age/ball pathways, and adults. The cost page publishes a $115/hour private lesson, a $70/hour/student group rate, payment methods, and a 48-hour cancellation policy. The site repeats the phone number and email on content pages. The adult page describes specific levels and formats such as beginner, advanced beginner, USTA drill class, and cardio tennis. [Complete Tennis Lessons home](https://www.completetennislessons.com/home), [cost/payment/registration](https://www.completetennislessons.com/cost-payment-and-registration), [adults](https://www.completetennislessons.com/adults)

The objective is not to copy Paul’s design, wording, or reservation workflow. It is to identify practices that make his site easier to understand and compare them with Scott’s stronger differentiators.

#### Elements Scott’s site could benefit from

- **Clearer service pathways:** organize information by useful visitor needs—adult improvement, juniors/parents, doubles/groups, league players, and advanced competitors—rather than making every visitor interpret a general résumé.
- **A visible coaching philosophy:** explain how Scott assesses a player, structures a lesson, gives feedback, and connects technique to match strategy. This supports the “best instructor” goal more effectively than credentials alone.
- **A dedicated pricing and policies page:** show private and semi-private rates, group pricing logic, payment options including Venmo, cancellation expectations, and what happens after someone calls or emails.
- **Specific level and format descriptions:** use plain-language examples such as beginner, recreational adult, league player, junior, doubles team, and competitive player. These can be written in Scott’s own voice and based on his actual services.
- **Consistent contact visibility:** keep phone and email adjacent to the offer, testimonials, and pricing—not only on the Contact page.
- **Practical location information:** clarify Peninsula/South Bay coverage, likely court arrangements, and whether Burlingame Country Club access is available to non-members through Scott.

#### Where Scott should deliberately differ

- Scott’s positioning can be more premium and evidence-led because his résumé includes collegiate head-coaching experience, USPTA Elite status, current professional work, and extensive NorCal competitive results.
- Scott should retain direct call/email conversion because he explicitly wants visitors to contact him immediately. Paul’s registration model should not be assumed to be the right operational model for Scott.
- Scott should avoid making the site feel like a catalog of programs if his capacity and business model depend on personal qualification and scheduling.
- Scott’s visual identity should be more polished and authoritative than a basic Google Sites presentation, while still feeling personal and approachable.

The comparison suggests a specific opportunity: Scott does not need Paul’s website. He needs Scott’s own premium, locally relevant presentation with the same level of practical clarity about services, prices, payment, policies, and next steps.

### Comparative analysis: RAM Tennis

RAM Tennis takes a more conversion-oriented, modern landing-page approach. It leads with a time-limited-looking trial lesson offer (“1-Hour Trial Lesson for $85”), places “Book a Lesson” and “Explore Programs” above the fold, shows trust markers (PTR certification, years of experience, all ages, rating), explains programs and pricing, states a cancellation policy, links to social video, includes FAQs/testimonials, and ends with phone, email, location, a form, and a 24-hour response promise. [RAM Tennis](https://ramtennis.com/)

#### Elements Scott’s site could benefit from

- **A stronger first-screen conversion hierarchy:** keep Scott’s authority statement, then place highly visible “Call Scott” and “Email Scott” actions beside it. RAM demonstrates how quickly a visitor can understand the offer and next step.
- **Compact trust markers:** create a row such as “USPTA Elite Professional · 30+ years teaching · 13 years collegiate head coaching · Competitive NorCal player.” RAM’s short proof blocks are easy to scan; Scott’s evidence is stronger but currently scattered.
- **Outcome-oriented program cards:** describe private coaching, junior instruction, doubles/group clinics, and league/match coaching by goal and audience. RAM’s “programs for every player” framing can inspire organization without copying its wording or price model.
- **A clear first-contact promise:** state what happens after a call/email and a realistic response window. RAM’s 24-hour expectation reduces uncertainty.
- **FAQ content:** answer rates, lesson length, player levels, court/location arrangements, what to bring, cancellation, payment/Venmo, and whether a first assessment is recommended. This improves both conversion and search visibility.
- **Video as proof:** Scott already has YouTube content. Put one or two carefully selected teaching clips or player-focused demonstrations near the proof section, rather than relying only on still photographs.
- **Structured lead capture as a backup:** retain direct call/email as the primary path, but add a short form for visitors who cannot call immediately. RAM shows the value of collecting enough context to make the follow-up efficient.

#### Where Scott should differ from RAM

- RAM’s “Affordable” and $85 trial framing may be useful for a high-volume acquisition model, but it could weaken Scott’s premium-expert positioning. Scott should test an assessment or introductory lesson only if it reflects his capacity and desired clientele.
- RAM uses instant Square booking and payment; Scott has said he wants visitors to call or email. The relevant lesson is clear conversion, not online checkout.
- RAM’s broad “Bay Area” language is less locally specific than Scott’s Peninsula/South Bay opportunity. Scott should name the cities, clubs, and court-access boundaries he actually serves.
- RAM’s numerical claims (rating, students trained, UTR) work because they are concise. Scott should use only current, verifiable claims and label historical rankings/tournament results with dates.

The RAM comparison reinforces that Scott’s opportunity is to make his expertise easier to scan and act on—not to become a discount, instant-booking business.

### Comparative analysis: McClain Tennis

McClain Tennis is a useful comparison for Scott’s preferred direct-contact model. The homepage uses a simple promise (“Take Your Game To The Next Level”), a clear “Get Started” action, a short teaching philosophy, a YouTube video, and a Yelp testimonial. The booking page explicitly asks visitors to use phone or email and recommends texting for the fastest response. It also publishes recurring availability by day/time and court area, points to current rates/promotions, and provides PayPal payment information. [McClain Tennis](https://www.mcclain-tennis.net/), [Book a Lesson](https://www.mcclain-tennis.net/book.html)

#### Elements Scott’s site could benefit from

- **Direct-contact language that reflects reality:** say exactly whether Scott prefers calls, email, or text and which method gets the fastest response. This aligns the site with his stated goal and reduces uncertainty.
- **A dedicated “Start / Book a Lesson” page:** the page should contain the phone number, email, response expectation, service area, current availability pattern, rates, cancellation policy, and payment method in one place.
- **Availability guidance without self-booking:** McClain demonstrates that publishing recurring windows or general court areas can help a visitor decide whether to contact the coach, even when scheduling remains personal.
- **A short coaching philosophy:** one memorable statement about how Scott teaches can make his expertise feel personal rather than résumé-like.
- **Video and third-party proof:** a teaching clip plus a link or embedded review can make the coach more tangible. Scott already has YouTube material and should curate the strongest examples.
- **Payment convenience:** McClain’s PayPal information reinforces the value of publishing Scott’s Venmo option after the exact handle and payment timing are confirmed.

#### Where Scott should improve on this model

- Do not send visitors elsewhere to find current rates. Scott’s rates should be visible on the site and kept current.
- Avoid putting promotions and rate changes in a separate blog unless the blog is actively maintained; a simple “Rates and policies” section is more reliable.
- Make the phone number, email, and preferred contact method visually prominent and clickable, not dependent on discovering them in body copy.
- Give more context about who Scott serves and the outcomes he produces. McClain’s simple positioning is approachable but leaves audience, geography, and service formats less explicit.
- Use Scott’s stronger credentials and results as concise proof, while keeping the tone warm and human rather than turning the page into a résumé.

McClain reinforces a key conclusion from the other comparisons: Scott can maintain a personal call/email workflow and still make the site operationally clear. The improvement is not automated reservation technology; it is a precise, low-friction contact page backed by visible availability, policies, payment, and proof.

### Comparative analysis: Split Step Tennis Lessons

Split Step Tennis is a useful benchmark for service segmentation and operational detail. Its site distinguishes private adults/leagues, middle and high school, and 10-and-under programs; publishes private and group rates plus five-lesson prepay options; includes a library, video archive, and parent-oriented blog; and provides detailed contact guidance for Foster City, including what information to submit, court directions, payment, rain, cancellation, and equipment policies. Its testimonials include concrete outcomes such as a player reaching #1 in Northern California. [Split Step Tennis home](https://www.splitsteptennislessons.com/), [cost](https://www.splitsteptennislessons.com/empty), [contact/policies](https://www.splitsteptennislessons.com/contact), [testimonials](https://www.splitsteptennislessons.com/testimonials)

#### Elements Scott’s site could benefit from

- **Segment the offer by player and goal:** adults/leagues, juniors/parents, doubles/groups, and competitive players are more useful entry points than one undifferentiated “all levels” statement.
- **Use a structured contact brief:** ask for tennis background, goals/areas to improve, preferred schedule, age/level, and location. This supports Scott’s call/email process and makes the first conversation more productive.
- **Explain logistics before contact:** state likely locations, court-access boundaries, what to bring, weather/rain handling, cancellation expectations, and how payment via Venmo works.
- **Consider a modest package:** a four- or five-lesson improvement block could improve retention and scheduling without turning the site into an automated booking system.
- **Publish useful teaching material:** a small library of drills, match-strategy notes, or short videos could support visibility and demonstrate Scott’s coaching method. It should be maintained lightly rather than becoming an obligation to blog frequently.
- **Use outcome-based testimonials:** ask clients to describe a concrete change—rating, match confidence, technique, consistency, or enjoyment—while preserving permission and privacy.

#### Where Scott should differ from Split Step

- Scott should not reproduce the large, multi-level navigation if it makes the site feel dated or difficult to scan. A smaller number of polished audience/service sections can provide the same clarity.
- Split Step uses public rates and prepaid discounts; Scott can keep his premium rate structure and test packages only where they improve continuity, not as blanket discounting.
- Scott should keep his direct phone/email CTA prominent rather than relying primarily on a form.
- Scott’s proof should lead with his current USPTA Elite and collegiate-coaching authority, then use specific player outcomes; it should not rely on historical rankings without dates or context.

Split Step shows that a coaching website can answer nearly every practical question before the first contact. Scott can adopt that level of operational clarity while keeping a more concise, premium visual system and a personal call/email conversion path.

### Design the experience around the author’s three goals

| Author goal | Site experience required | Evidence of success |
|---|---|---|
| Be perceived as the best instructor around | A strong value proposition, visible credentials, specific coaching philosophy, outcomes, and segment-specific proof | More qualified inquiries that mention Scott’s expertise, match strategy, or credentials |
| Look professional | Clean visual hierarchy, consistent photography, polished copy, working forms, domain email, mobile accessibility, and no security warnings or injected content | Improved inquiry completion, lower abandonment, positive qualitative feedback, and no security/search warnings |
| Be highly visible | Local SEO, Google Business Profile, useful location/service pages, structured data, indexable content, and satisfied-client reviews | Growth in non-branded impressions, local search clicks, calls, and qualified inquiries |

The homepage should make these goals visible in that order: lead with a premium but specific positioning statement, substantiate it with proof, then present a low-friction next step.

### Positioning

The most defensible position is not “tennis lessons for everyone”; it is experienced, current, personable coaching for Bay Area players who want measurable improvement and enjoyable sessions. The site can own the intersection of:

- elite competitive credibility
- practical adult and doubles coaching
- positive, encouraging junior instruction
- local Peninsula/South Bay convenience

### Packaging and revenue design

The published starting rates are useful but underdeveloped as an offer. Consider testing:

- 60-minute private lesson (starting at the current $110)
- 90-minute private or match-prep session
- semi-private price shown **per player** and with a minimum/maximum group size
- four-lesson improvement package with a defined goal and between-session practice plan
- recurring small-group/doubles clinic with a minimum enrollment
- junior small-group blocks during high-demand after-school windows

Packages should be framed around outcomes and scheduling convenience, not discounts alone. Protect premium positioning by keeping the rate visible and using packages to improve retention and utilization.

### Demand and capacity

Before adding sophisticated booking software, measure calls and emails by segment, geography, day/time, and source. If the main constraint is court availability or Scott’s schedule, a simple inquiry form plus a shared calendar may support his process. Add scheduling automation only if Scott later decides that administrative back-and-forth is the bottleneck.

## Cost and platform research

These are directional opportunities; current vendor bills and traffic data were not available.

### Static-site alternatives to GoDaddy WordPress

Because the current site is a small brochure/inquiry site, it does not inherently need a database, WordPress admin, plugin ecosystem, or PHP hosting. A static site can preserve the pages, images, SEO metadata, testimonials, and contact path while reducing the attack surface and routine maintenance.

| Option | Indicative platform cost | Best fit | Trade-offs |
|---|---:|---|---|
| **Carrd Pro Standard** | $19/year, plus domain registration/renewal | Lowest-cost, easiest owner-editable brochure site | Best for a compact one-page or small site; less suitable for a growing multi-page content library or complex SEO architecture |
| **Cloudflare Pages + existing domain** | $0 hosting on the free tier, plus domain renewal and a form endpoint | Fast, secure, multi-page static site with strong technical performance | Usually needs a developer or technically comfortable maintainer; contact forms require a service or serverless function |
| **GitHub Pages + existing domain** | $0 hosting on GitHub Free for eligible repositories, plus domain renewal and a form endpoint | Very low-cost, version-controlled site maintained by a developer | Least friendly for a nontechnical owner; must manage content through files/Git and use an external form service |

The cheapest *complete* setup is not always the cheapest hosting plan. Include the cost of the domain, email, contact form, analytics, backups/version history, migration, and future content edits. Cloudflare Pages and GitHub Pages provide hosting, but they do not automatically provide a convenient inquiry workflow or a nontechnical editing interface. Carrd includes custom domains, forms, analytics, and meta tags on its $19/year Pro Standard plan, which makes it unusually cost-effective for a small brochure site.

### Working platform hypothesis

1. **Short term:** clean and secure the existing WordPress site first; do not migrate an infected site without preserving evidence and verifying the domain/hosting accounts.
2. **Lowest total-cost rebuild:** use **Carrd Pro Standard** if Scott is comfortable with a compact, mostly static site and wants to make occasional edits himself.
3. **Best long-term technical setup:** use **Cloudflare Pages** with the existing domain and a small static site generated from a simple content structure if a developer will maintain it. Keep the domain independent of the hosting provider where practical.
4. **Use GitHub Pages** when a trusted technical maintainer already uses GitHub; do not choose it solely because the hosting is free.

For Scott’s stated goals—professional appearance, perceived expertise, and visibility—a well-designed static rebuild is viable. The main decision is editor convenience versus minimum recurring cost, not whether static hosting can support the site.

- **Avoid scheduling software altogether for now.** Use prominent click-to-call and click-to-email actions, with an optional form routed to email and a reusable response template. This avoids a recurring booking subscription that does not match Scott’s preferred sales process.
- **Use existing channels first.** The site already has phone, email, LinkedIn, YouTube, testimonials, and strong credentials. Improve conversion and local SEO before paying for broad advertising.
- **Audit GoDaddy renewal pricing and add-ons.** Check the actual renewal cost for hosting, SSL, backups, malware cleanup, email, and domain registration. Remove unused paid add-ons and avoid paying twice for overlapping backup/security products.
- **Decide whether GoDaddy is still the lowest-total-cost fit.** A managed WordPress host may cost more in subscription fees but less in incident recovery and maintenance time; a static/managed site may be cheaper still if Scott only needs a brochure and inquiry form. Compare total annual cost, not introductory pricing.
- **Remove unused WordPress plugins, themes, embeds, and scripts.** This reduces security exposure, page weight, update labor, and the chance of another compromise.
- **Keep backups independent of GoDaddy.** An off-host backup copy avoids being dependent on the same account if hosting credentials are compromised.
- **Reuse existing media.** Refreshing the information architecture and cropping/compressing existing tennis photos is cheaper than commissioning a full new photo shoot initially. Add a small targeted shoot later if the hero image or junior/group imagery is weak.
- **Use free/low-cost measurement.** Google Search Console, Google Analytics/Consent Mode where appropriate, call tracking only if needed, and a simple inquiry spreadsheet can establish a baseline before buying a CRM.
- **Prefer owned email over the current personal-looking Yahoo address.** A domain email (for example, scott@scotthowardtennis.com) is a modest annual cost and improves trust; choose the least expensive reliable provider rather than buying a full business suite prematurely.
- **Security maintenance is cheaper than recovery.** A small recurring budget for backups, updates, MFA, and monitoring is likely to cost less than rebuilding a hacked site or repairing search reputation.

## Working prioritization hypothesis

### P0 — protect trust (this week)

- Remove injected gambling content and outbound links.
- Secure the CMS/hosting/domain accounts and investigate the intrusion.
- Verify every page, redirect, sitemap, and indexed result after cleanup.

### P1 — improve conversion (next 2–4 weeks)

- Rewrite homepage hero and first-screen CTA around local audiences and outcomes.
- Establish a more premium visual direction: stronger typography, spacing, image treatment, proof hierarchy, and consistent calls to action.
- Add prominent click-to-call/click-to-email actions and an optional inquiry form with a response-time expectation.
- Put selected testimonials, rates, service areas, and trust markers on the homepage.
- Make phone/email clickable and add basic policies/FAQ.

### P2 — improve discoverability and economics (next 1–3 months)

- Complete local SEO and structured data.
- Create or optimize the Google Business Profile and establish a review-request process with client permission.
- Package recurring groups, doubles, and four-lesson programs.
- Add lightweight analytics and track calls, email clicks, form submissions, and eventual booked lessons.
- Review hosting, domain email, backup, and scheduling costs.

### P3 — test and iterate (ongoing)

- Track inquiries by segment, source, and geography.
- Test headline/CTA variants and package language.
- Publish one genuinely useful local tennis article or FAQ per month/quarter.
- Refresh testimonials with full names/initials, player type, and permission where appropriate.

## Measurement questions and proposed baseline

Establish a baseline before changing multiple things at once:

- qualified inquiries per month
- inquiry-to-booked-lesson rate
- response time
- booked hours by lesson type
- repeat/recurring client rate
- average revenue per booked court hour
- calls, email clicks, form starts, and form completions
- organic impressions/clicks for local tennis searches

The most important near-term KPI is qualified inquiries that include a preferred time, location, player level, and goal—not raw traffic.

Because the author emphasizes authority and visibility, pair that KPI with branded-search impressions, local non-branded impressions, profile/review actions, and a short post-inquiry question such as “What made you contact Scott?” This will show whether the site is being chosen for expertise rather than merely discovered.

## Research questions for the next author interview

- What is the primary business goal: fill private-lesson availability, grow groups/clinics, attract juniors, or build a premium competitive clientele?
- Which cities and courts are actually available to clients, and is Burlingame Country Club open to non-members through Scott?
- What days/times and player segments have the most capacity right now?
- How quickly can Scott usually answer calls or respond to emails, and what information does he need before scheduling personally?
- What platform/hosting account controls the site, and when was the last known-good backup?
- Which GoDaddy hosting plan, WordPress version, theme, plugins, security products, and backup products are currently installed?
- Are GoDaddy hosting, domain, SSL, email, backups, and malware scanning billed as separate products, and what are their renewal prices?
- Are all testimonials and photos approved for publication?
- What is Scott’s exact Venmo handle, and does he want payment requested before or after a lesson?
- Is there an existing Google Business Profile, Search Console account, analytics, or email/domain setup?

## Source register

- Homepage: https://scotthowardtennis.com/
- About: https://scotthowardtennis.com/about/
- Lessons Info: https://scotthowardtennis.com/lessons-info/
- Coaching Experience: https://scotthowardtennis.com/experience/
- Testimonials: https://scotthowardtennis.com/testimonials/
- Contact: https://scotthowardtennis.com/contact/
- Carrd Pro pricing/features: https://carrd.com/pro
- Cloudflare Pages: https://www.cloudflare.com/products/pages/
- Cloudflare Registrar: https://developers.cloudflare.com/registrar/
- GitHub Pages custom domains: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages
- Paul Dulac / Complete Tennis Lessons benchmark: https://www.completetennislessons.com/home
- Paul’s pricing and registration page: https://www.completetennislessons.com/cost-payment-and-registration
- Paul’s adult-program page: https://www.completetennislessons.com/adults
- RAM Tennis benchmark: https://ramtennis.com/
- Split Step Tennis benchmark: https://www.splitsteptennislessons.com/
- Split Step pricing: https://www.splitsteptennislessons.com/empty
- Split Step contact/policies: https://www.splitsteptennislessons.com/contact
- Split Step testimonials: https://www.splitsteptennislessons.com/testimonials
- Google Business Profile overview: https://support.google.com/business/answer/7039811
- Google service-area guidance: https://support.google.com/business/answer/9157481
- Google Business Profile eligibility: https://support.google.com/business/answer/13763036
- Yelp business-page guidance: https://business.yelp.com/wp-content/uploads/2020/09/Guide-to-showcasing-your-business-online-English.pdf
- California FTB sole proprietorship guidance: https://www.ftb.ca.gov/file/business/types/sole-proprietorship.html
- California Secretary of State entity types: https://www.sos.ca.gov/business-programs/business-entities/starting-business/types
- Scott Howard’s official USPTA membership profile: https://directory.uspta.com/MembershipDetail.aspx?ID=51025&mem=1
- Pacific West Conference announcement on Scott’s collegiate coaching record: https://thepacwest.com/news/2012/4/10/4_10_2012_1653.aspx
- San Mateo Daily Journal profile on Scott’s USF and Pacific coaching history: https://www.smdailyjournal.com/sports/a-peninsula-tennis-dynasty/article_6f99f9d9-addf-547b-a502-ba50965d36bd.html
- USTA official 2016 Adult and Senior Final Rankings: https://s3.amazonaws.com/ustaassets/assets/635/15/2016_adult_and_senior_final_rankings.pdf
- USTA NorCal seeding/coordinator listing: https://www.usta.com/content/dam/usta/sections/northern-california/norcal/pdfs/tournamentdirectors/Adult%20Open%20and%20Senior%20Tournament%20Seeding%20Rules%20and%20Coordinators.pdf
