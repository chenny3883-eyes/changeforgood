# CHANGE FOR GOOD CONSULTING
## Strategies that transform. Results that endure.

---

# WEBSITE PRODUCT REQUIREMENTS DOCUMENT
**Version:** 8.4  
**Prepared by:** Chenny Galano, Founder  
**Date prepared:** July 29, 2026  
**Project name:** Change For Good Consulting Website  
**Target launch date:** November 5, 2026  
**Status:** Draft

### Version history

| Version | Date | Changes |
|---|---|---|
| 4.0 | July 17, 2026 | CFG Chat Assistant, Clarity-First Diagnostic, full page content requirements |
| 5.0 | July 20, 2026 | Visual design update: split hero layouts, photo backgrounds across all pages, BCG-style horizontal scrolling service carousel, new photo assets |
| 6.0 | July 20, 2026 | About page: two-sided vertical timeline for credentials, Chenny warm photo inset + CFG logo in bio section; Services page: lake.jpg photo background wrapping Signature Programme card and carousel; Results page: stat label updated, teacher-bg photo background fix |
| 7.0 | July 20, 2026 | About page: CFG brand gradient background on Credentials and Experience section; Results page: "Let's talk about your goals" button linked to Contact page |
| 8.0 | July 22, 2026 | Services page: "How an engagement works" redesigned as 2×2 numbered card grid; Global typography scale increased; Full-width layout (body margins removed); Contact form made functional with CSV backend; Chatbot improved (6th branch, lead saving); Hidden admin dashboard added; Contact page: mobile number removed from direct contact details |
| 8.1 | July 23, 2026 | Clarity-First Diagnostic: radar chart added to results screen — pure SVG pentagon showing all 5 area scores visually alongside the numerical bar chart |
| 8.2 | July 25, 2026 | About page: "How We Work" icons updated to custom images (Integrity, Courage & Commitment) and section redesigned as horizontal image carousel; Services page: "Who We Serve" redesigned as a 4-card single-row horizontal layout |
| 8.3 | July 29, 2026 | Clarity-First Diagnostic: auto-advance to next question on answer selection — no "Next" button needed for questions 1–9; Q10 retains the "See my results →" button |
| 8.4 | July 29, 2026 | Resources page: first article card linked to live article sub-page; Article 1 — "When We Change How We Talk, We Change What We Build" by Chenny F. Galano published at /resources/articles/4-levels-of-conversation |

---

## SECTION 1 — PROJECT OVERVIEW

### 1.1 Purpose of this document

This Product Requirements Document (PRD) defines everything the development team needs to build the Change For Good Consulting website. It covers goals, audience, site structure, page-by-page content requirements, design specifications, and technical requirements.

### 1.2 Project summary

Change For Good Consulting is a management consulting and coaching firm based in the Philippines, founded by Chenny Galano. The website serves as the primary credibility-building and client attraction tool — its job is to make decision-makers feel understood before they ever speak to Chenny, and to give them every reason to reach out. The site targets CEOs, COOs, VPs, and Department Heads across the Philippines and globally who are navigating the gap between their organization's current state and the future they want to build.

### 1.3 Brand manifesto

Change For Good is about finding the possibility to close the gap between what a business is today and what it can be in the future — with not just transformational frameworks but with clear thinking, honest strategies, and relentless follow-through.

Change For Good is intentional because of its brand promise to companies believing in continuous improvement, transformation that lasts, and changing for the better. When businesses truly flourish, the world around them is lifted too. That is a change worth working for.

**The name carries a double meaning — both must be present throughout the site:**
1. *Lasting change* — permanent, enduring transformation
2. *Change that does good* — when businesses flourish, the world around them is lifted

### 1.4 Business goals

**Primary goal:** Build credibility with decision-makers before a meeting and attract the right type of client — leaders who feel, upon visiting the site, that Chenny understands their exact situation.

**Secondary goals:**
- Generate qualified leads and discovery call bookings
- Establish Chenny Galano as a thought leader in strategy consulting, innovation, and transformational coaching in the Philippines
- Grow an email subscriber list for future content distribution
- Serve as a reference point for existing clients and referral partners

### 1.5 Success metrics

| Metric | Target |
|---|---|
| Discovery call bookings | 5 per month within 3 months of launch |
| Contact form submissions | 10 per month |
| Email subscribers (Resources) | 50 in first 90 days |
| Bounce rate | Below 55% |
| Average session duration | Over 2 minutes |

---

## SECTION 2 — TARGET AUDIENCE

### 2.1 Primary audience

| Attribute | Detail |
|---|---|
| Age range | 35–65 years old |
| Location | Philippines (primary); global (secondary) |
| Role / title | CEOs, COOs, VPs, Directors, Department Heads |
| Industry | Financial services, aviation, social enterprise, SMEs, startups, government-linked institutions |
| Organizational view | Full visibility of the organization's needs and pain points |
| Motivation | They know where they want to go but struggle with the gap between leadership intent and team execution |

**What they are really saying (in their own words):**
> "We want to drive innovations but we don't have the people to do it. For now, we want to learn how to integrate this with our strategies. And in the long run, we want to see people thinking with innovative ideas, able to navigate the future with a mindset of possibilities."

This reveals a three-stage need:
1. **Now** — close the capability gap
2. **Medium term** — integrate innovation into strategy
3. **Long run** — build a culture of possibility and innovative thinking

**What they must feel when they visit the site:** *"She gets it. She is talking about my exact problem."* They must feel that Chenny listens, and that what she offers speaks directly to them and answers their major questions about how to move forward.

### 2.2 Secondary audience

| Attribute | Detail |
|---|---|
| Who | HR managers, L&D teams, innovation officers, procurement teams |
| Need | Looking for a facilitator or program designer for management development or innovation programs |
| Priority | Lower than primary — acknowledge on Services page only |

### 2.3 Accessibility requirements

- Minimum font size: 16px body text
- Colour contrast ratio: minimum 4.5:1 (WCAG AA standard)
- All images must have descriptive alt text
- Forms must be keyboard-navigable
- Mobile-responsive across all screen sizes (320px to 1440px)

---

## SECTION 3 — SITE STRUCTURE & NAVIGATION

### 3.1 Navigation tabs

| Tab | Purpose |
|---|---|
| Home | First impression, hero, overview of services, social proof, CTA |
| About | Chenny's story, vision, credentials, values, how we work |
| Services | All service offerings with descriptions and CTA per service |
| Results | Client case studies (PAL, YSU Group, BSP), stats |
| Resources | Free diagnostic banner (links to embedded diagnostic sub-page), placeholder blog articles, newsletter sign-up |
| Contact | Inquiry form, direct contact details, what happens next |

**Note:** The Clarity-First Diagnostic does not have its own navigation tab. It is accessed as a sub-page within the Resources tab. See Section 4.6.

**Note:** The Admin dashboard (`/admin`) is a hidden page — not linked in the navigation. It is accessible only by direct URL and is password-protected. See Section 6.7.

### 3.2 Navigation design requirements

- Navigation bar background: deep royal purple (#2D2380)
- Tab text color: burnished gold (#D4A017)
- Active tab: brighter gold (#F5C842) with gold underline border
- Hover state: subtle gold background highlight
- Logo text: 'Change For Good' in white with 'Good' in gold
- Tagline below logo: 'Strategies that transform. Results that endure.' in muted white
- CFG logo image (large, white) displayed on the right side of the nav bar

---

## SECTION 4 — PAGE-BY-PAGE CONTENT REQUIREMENTS

### 4.1 Home page

#### Hero section — split layout

The Home hero uses a two-column split layout (flexbox row):

| Column | Content |
|---|---|
| Left — text | Eyebrow, headline, subheading, two CTA buttons |
| Right — logo card | CFG logo displayed in a white rounded card with subtle drop shadow |

| Element | Content |
|---|---|
| Eyebrow text | Management consulting · coaching · innovation |
| Headline | The gap between where you are and where you want to be — is closeable. |
| Subheading | Change For Good Consulting partners with businesses and leaders to turn honest strategy into measurable results. Not frameworks on a slide deck. Real plans. Real growth. Change that lasts — for good. |
| Primary CTA | Start the conversation — opens the CFG Chat Assistant |
| Secondary CTA | Explore our services — links directly to the Services tab |
| Right panel | CFG logo (`cfg-logo.png`) in a white card (`background: rgba(255,255,255,0.94)`, `border-radius: 16px`, `box-shadow: 0 4px 32px rgba(0,0,0,0.22)`) |

**Hero background photo:** `sunset.png` — warm sunset/dusk cityscape. Applied as CSS background with purple gradient overlay:
```
linear-gradient(to bottom,
  rgba(26, 21, 96, 0.72) 0%,
  rgba(45, 35, 128, 0.55) 50%,
  rgba(26, 21, 96, 0.78) 100%),
url('/photos/sunset.png') center 40% / cover no-repeat
```

**Responsive:** On screens ≤600px, the two columns stack vertically (logo card below text, full width).

#### Value pillars (3 cards)

| Card | Icon | Title | Body |
|---|---|---|---|
| 1 | `clarity-first.png` (in white-grey gradient rounded square) | Clarity first | Honest diagnosis before any solution is prescribed. We start with truth, not assumptions. |
| 2 | `tangible-results.png` (plain image, white bg removed) | Tangible results | Every recommendation becomes a concrete, measurable action — not a theory. |
| 3 | `infinite-growth.png` (plain image) | Infinite growth | We invest in the whole person, not just the business problem. Growth without a ceiling. |

#### Featured quote + What We Do — photo background wrapper

The featured quote and the "What We Do" carousel are wrapped together inside a single container with a shared photo background.

**Background photo:** `lake.jpg` — calm lake landscape. Applied with purple gradient overlay.

**Featured quote**

> "The most powerful thing a consultant can offer is not just a plan — but the kind of thinking that changes how a leader sees themselves and their work."
> — Chenny Galano, Founder

#### What We Do — horizontal scrolling carousel

Six cards in a BCG-style horizontal scrolling carousel. Cards snap into place on scroll.

| # | Tag | Title | Background |
|---|---|---|---|
| 1 | Strategy | Strategy consulting | Dark purple gradient |
| 2 | Brand | Marketing and branding | Dark purple gradient |
| 3 | Sales | Sales consulting | Dark purple gradient |
| 4 | Growth | Business development | Dark purple gradient |
| 5 | Signature programme | Coaching for infinite growth | `lake-copy.jpg` with purple gradient overlay (gold tag) |
| 6 | Innovation | Innovation sprint and program design | Dark purple gradient |

#### Bottom CTA

| Element | Content |
|---|---|
| Copy | Ready to close the gap? Let's talk about where you are and where you want to be. |
| Button | Book a free discovery call — links to the Contact page (`/contact`) |

---

### 4.2 About page

#### Hero section

| Element | Content |
|---|---|
| Eyebrow | Meet the founder |
| Headline | Chenny Galano — consultant, coach, and someone who has done the inner work herself. |
| Subheading | Change For Good Consulting was built from lived understanding: that strategy without self-awareness is incomplete, and that the most powerful growth happens when professional excellence and personal development are pursued together. |

**Hero background photo:** `silhouette-bg1.jpg` — silhouette image, atmospheric and aspirational.

#### Bio text + photo inset — two-column layout

| Column | Content |
|---|---|
| Left — text (flex: 1 1 0) | Six bio paragraphs (Chenny's full story) |
| Right — inset panel (flex: 0 0 220px) | Chenny warm photo above, CFG logo card below |

#### Featured quote

> "My motivation has changed. I always have in mind how we will be able to support and impact more lives, organizations, and the society. I have a bigger vision — and it excites me to do the work over and over again."
> — Chenny Galano

#### Credentials and Experience — two-sided vertical timeline

A vertical gold spine runs down the centre. Entries alternate left and right, newest at the top. Section uses a CFG brand gradient background (`.tl-section-bg`).

**Chronological order (newest → oldest):**

| Year | Side | Category | Credential | Institution | Key? |
|---|---|---|---|---|---|
| 2023–2025 | Left | Education | MBA — With Honors | Miriam College SBEA · Best in Capstone for Strategic Management | Yes |
| 2021–2026 | Right | Leadership | President — TRAIL | Rizal Academy for Innovation and Leadership | Yes |
| 2021–2022 | Left | Education | MBA Undergraduate Units | Nexford University, Washington D.C. | No |
| 2021 | Right | Coaching | PCC ACSTH — ICF | International Coaching Federation | Yes |
| 2020 | Left | Innovation | ExO Foundations · Consultant · Trainer EU | Exponential Organizations | Yes |
| 2020 | Right | Innovation | SDGs Game Facilitator Certification | Imacocollabo | No |
| 2020 | Left | Theory U | Presencing Foundation · Digital Leadership · Awareness Practices | Presencing Institute U.Academy | No |
| 2019–2021 | Right | Theory U | Constellations Training — Modules 1, 2, 3 | Bali, Indonesia & Online | No |
| 2019–2020 | Left | Theory U | u-Lab: Societal Transformation Lab | Presencing Institute / MIT | No |
| 2019–2020 | Right | Coaching | Transformative Coaching Certification | Coach Masters Academy, Singapore / Philippines | No |
| May 2019 | Left | Leadership | Thriving in the Age of Disruption | Dr. Otto Scharmer · Philippines | No |
| 2018 | Right | Leadership | ELIAS — Emerging Leaders Innovating Across Sectors | — | No |
| Feb 2018 | Left | Leadership | Dance of Change in the Age of Complexity | Dr. Peter Senge · Philippines | No |
| 2017 | Right | Coaching | Executive Coaching Training Program | TRAIL, Philippines | No |
| 2016 | Left | Leadership | National Training Director — JCI Philippines | JCI Manileña Chapter | Yes |
| 2001–2005 | Right | Education | AB Communication Arts and Advertising | Miriam College Loyola Heights, Quezon City | No |

#### Values / How we work — image carousel (v8.2)

The "How We Work" section is a horizontal image carousel. Each value is a card with a custom image displayed prominently at the top, followed by the value title and body text below.

| Card | Image file | Title | Body |
|---|---|---|---|
| 1 | `integrity.png` | Integrity — we say the hard things, kindly | Honest diagnosis before any solution is prescribed. We will never tell you what you want to hear at the expense of what you need to hear. |
| 2 | `courage-and-commitment.png` | Courage — we commit to measurable outcomes | Every engagement ends not with a presentation but with a plan, a team aligned behind it, and people growing in skill and in character. |
| 3 | `infinite-growth.png` | Infinite growth — built with you, not handed down | Solutions co-created with your team. We believe every person — and every business — holds more potential than they have yet discovered. |

**Card design:** White image panel (180px tall, `background: rgba(255,255,255,0.94)`) at top of card; image contained with 20px padding. Title in gold below, body in soft white. Cards are 260px wide with a dark purple background and subtle border.

**Responsive behaviour:** On desktop (>600px) all 3 cards are centered in a single row using `justify-content: center; flex-wrap: wrap`. On mobile (≤600px) the track switches to horizontal scroll with snap (`flex-wrap: nowrap; overflow-x: auto`).

**Image source:** Both new images (`Integrity.png`, `Courage and Commitment.png`) sourced from `Project/Photos/About/` and copied to `cfg-nextjs/public/photos/` as `integrity.png` and `courage-and-commitment.png`.

---

### 4.3 Services page

#### Hero section — split layout

| Element | Content |
|---|---|
| Eyebrow | What we offer |
| Headline | Six ways to work with us — all built around your real situation. |
| Subheading | Whether you're a startup founder seeking traction, an SME ready to scale, or a leader committed to growing yourself and your team — there is an engagement designed for where you are right now. |
| Right photo panel | `chenny-photo3.jpeg` — Chenny facilitating a workshop |

#### Signature Programme + Services carousel — photo background wrapper

Uses `lake-copy.jpg` photo background via `.quote-photo-section` CSS class. Both the featured Signature Programme card and the five-card carousel sit inside this wrapper.

#### Signature Programme — featured card

| Element | Content |
|---|---|
| Tag | Signature programme |
| Name | Coaching for Infinite Growth |
| Description | A transformational methodology for individuals committed to growing in character and professional life — without limit. |
| Best for | Executives, founders, and high-achievers ready to integrate personal excellence into professional impact. |
| CTA | Inquire about this programme — links to the Contact page |

#### Services carousel — 5 cards

| # | Tag | Title |
|---|---|---|
| 01 | Strategy | Strategy consulting |
| 02 | Brand | Marketing and branding |
| 03 | Sales | Sales consulting |
| 04 | Growth | Business development |
| 05 | Innovation | Innovation sprint and program design |

#### How an engagement works — 2×2 numbered card grid

The previous horizontal step-row design has been replaced with a 2-column grid of large numbered cards, inspired by the AgentSync "Top 4 Things" layout. Each card has a gold border, a large gold number, a bold white title, and descriptive body text.

**CSS class:** `.eng-cards` — `display: grid; grid-template-columns: 1fr 1fr; gap: 14px`

| Card | Number | Title | Description |
|---|---|---|---|
| 1 | 1. | Discovery call | A free, no-pressure conversation where we listen first. We learn about your business, your goals, and the gap between where you are and where you want to be — before we say anything about solutions. |
| 2 | 2. | Honest diagnosis | We assess your situation with clarity and candour. No assumptions, no pre-packaged answers. You deserve to know what's actually holding you back before any proposal is made. |
| 3 | 3. | Co-create the plan | Solutions are built with your team, not handed down from above. We believe the people closest to the work hold the best insights — our role is to draw those out and shape them into a plan that sticks. |
| 4 | 4. | Walk alongside | We don't disappear after the strategy deck. We stay through implementation — coaching, adjusting, and holding the line alongside you until the change takes root. |

**Card styling:**
- Background: `rgba(255,255,255,0.04)`
- Border: `1.5px solid rgba(212,160,23,0.22)` — subtle gold border
- Border radius: `16px`
- Number: `48px`, weight `800`, gold
- Title: `20px`, weight `700`, white
- Body text: `15px`, `rgba(255,255,255,0.80)`, line-height `1.7`

#### Who we serve — 4-card single-row layout (v8.2)

The "Who We Serve" section is a single horizontal row of 4 equal-width cards. Cards never wrap — all 4 are always visible side by side on desktop. Each card has a gold title and soft white body text on a dark purple surface.

| Card | Title | Description |
|---|---|---|
| 1 | SMEs | Established businesses ready to sharpen strategy, strengthen brand, and build systems that turn ambition into sustainable growth. |
| 2 | Startups | Founders with a vision who need clarity, positioning, and go-to-market strategy to move from idea to traction with confidence. |
| 3 | Social enterprises | Mission-led organizations that need business rigour to match their social purpose — doing good and performing well are not a trade-off. |
| 4 | Diverse organizations | Organizations spanning multiple sectors who need an integrated consulting partner that can navigate complexity and deliver coherent strategy. |

**Layout:** `flex: 1 1 0; max-width: none` on each card so they share available width equally. Track uses `flex-wrap: nowrap` to enforce the single row at all widths.

---

### 4.4 Results page

#### Hero section

| Element | Content |
|---|---|
| Eyebrow | Proven client results |
| Headline | We don't measure success in deliverables. We measure it in change. |
| Subheading | From national institutions to growing enterprises — here is what working with Change For Good Consulting looks like in practice. |

#### Stats bar (3 figures)

| Stat | Label |
|---|---|
| 5+ | Major organization transformations supported |
| 25+ | Strategic initiatives for networked teams |
| 100% | Commitment to measurable outcomes |

#### Client case highlights

*YSU Group — Strategy & Business Development*

*Philippine Airlines (PAL) — Innovation & Strategy*

*Bangko Sentral ng Pilipinas (BSP) — Coaching & Continuous Improvement*

(Full copy in v7. Client content rules apply — see Section 7.)

#### Testimonials

To be added post-launch with written permission. Placeholder testimonials currently in place — must be replaced before launch.

#### Bottom CTA

| Element | Content |
|---|---|
| Copy | Your organization's story could be next. |
| Button | Let's talk about your goals — links to the Contact page (`/contact`) |

---

### 4.5 Resources page

**Hero section**

| Element | Content |
|---|---|
| Eyebrow | Insights and tools |
| Headline | Practical thinking for leaders who take growth seriously. |

**Free diagnostic banner**

| Element | Content |
|---|---|
| Title | The Clarity-First Diagnostic — a self-assessment for leaders |
| CTA | Take the free diagnostic → |
| Action | Loads the Clarity-First Diagnostic sub-page within the Resources tab |
| Data capture | Name and email collected on Screen 1. On completion, results saved to `data/diagnostic.csv` via `/api/diagnostic`. |

**From the Desk of Chenny — article cards (v8.4)**

Article cards in the "From the Desk of Chenny" section are clickable and link to full article sub-pages. Article 1 is live; Articles 2 and 3 remain placeholders until content is ready.

| Card | Status | Title | Route | Tag | Read time |
|---|---|---|---|---|---|
| 1 | Live | When We Change How We Talk, We Change What We Build | `/resources/articles/4-levels-of-conversation` | Leadership | 8 min |
| 2 | Placeholder | The inner work that makes strategy stick | — | Leadership | 4 min |
| 3 | Placeholder | Change for good — what continuous improvement really means | — | Growth | 6 min |

**Article page layout** (`/resources/articles/[slug]/page.tsx`):
- Back link → Resources
- Article header: tag, H1 title, italic subtitle, author avatar + name + read time
- Body: 16px prose, H2 section headings, pull-quote blockquotes, bulleted lists
- About the Author card (gold border)
- CTA: "Start a conversation →" linking to Contact page

**Newsletter sign-up, blog placeholders** — unchanged from v7.

---

### 4.6 Diagnostic sub-page — The Clarity-First Diagnostic

Unchanged from v7. Key addition in v8:

**Data capture (v8):** When a visitor completes all 10 questions and reaches the results screen, the following data is saved silently to `data/diagnostic.csv` via a POST to `/api/diagnostic`:

| Field | Content |
|---|---|
| timestamp | ISO 8601 datetime |
| name | From gate screen |
| email | From gate screen |
| total_score | Total out of 50 |
| profile | Profile name (e.g., "The Aligned Leader") |
| strategic_clarity | Area score (0–10) |
| leadership_alignment | Area score (0–10) |
| people_culture | Area score (0–10) |
| innovation_growth | Area score (0–10) |
| execution_results | Area score (0–10) |
| q1–q10 | Individual answer values (1–5) |

The visitor never sees the save. No confirmation message is shown — the results screen is unchanged.

**Auto-advance (v8.3):** Questions 1–9 advance automatically 400ms after the visitor selects an answer — no "Next" button click required. The selected option highlights gold, then the next question slides in. Question 10 (the last) does not auto-advance; the visitor must click **"See my results →"** to confirm and submit. The Previous (←) button remains available on all questions so visitors can go back and change an answer.

**Radar chart (v8.1):** The results screen now includes a "Your Leadership Radar" section displayed between the action buttons (Download / Retake) and the "Your results by area" bar chart. The radar is a pure SVG pentagon — no external charting library required.

| Element | Spec |
|---|---|
| Shape | Regular pentagon, 5 axes (one per area), origin at top |
| Grid | 5 concentric pentagons at score levels 2, 4, 6, 8, 10 — muted white, low opacity |
| Scale ticks | Values 2, 6, 10 shown on the Strategic Clarity axis |
| Data polygon | Gold fill `rgba(212,160,23,0.22)`, gold stroke `#D4A017`, 2.5px |
| Data dots | Gold filled circles (r=5), deep purple outline |
| Score labels | Bright gold numbers inset just inside each dot toward centre |
| Axis labels | Two-line white labels at each vertex — Strategic Clarity (top, centred), Leadership Alignment (upper right), People & Culture (lower right), Innovation & Growth (lower left), Execution & Results (upper left) |
| Card wrapper | Subtle white background `rgba(255,255,255,0.04)`, gold border `rgba(212,160,23,0.18)`, 14px border radius |

The 5 axis scores feed directly from the same `areaScores` array that drives the bar chart, ensuring the radar and bars always agree. The chart is rendered via the `RadarChart` component defined in `components/ClarityDiagnostic.tsx`.

---

### 4.7 Contact page

**Hero section**

| Element | Content |
|---|---|
| Eyebrow | Let's start a conversation |
| Headline | We would love to learn about your business and explore how we can help. |

**Inquiry form — now functional**

The contact form submits via a POST to `/api/contact`. On success, the form is replaced by a confirmation message: *"Message received! Thank you, [Name]. Chenny personally reviews every inquiry and will respond within 24 hours."* On error, an inline error message appears. The "Send message" button shows "Sending…" while the request is in flight.

| Field | Type | Required |
|---|---|---|
| Your name | Text | Yes |
| Email address | Email | Yes |
| Organization | Text | Optional |
| What are you working through? | Long textarea | Optional |
| Service area of interest | Dropdown | Optional |
| Submit button | — | Send message |

Data saved to `data/contact.csv` on every successful submission.

**What happens next (3 steps)** — unchanged.

**Direct contact details**

| Channel | Detail |
|---|---|
| Email | chenny@cfgconsultingph.com |
| LinkedIn | linkedin.com/in/chenny-galano |
| Location | Philippines · working globally |

**Note:** Mobile number has been removed from the public-facing contact details on this page.

---

### 4.8 CFG Chat Assistant (scripted chatbot)

The CFG Chat Assistant is a scripted, guided-conversation widget that appears on every page. It is triggered by the "Start the conversation" button on Home, and by the floating gold FAB button fixed to the bottom-right corner.

**Purpose:** Qualify and guide visitors toward the right service or next step — and capture leads (name + email) for follow-up.

**Lead saving (v8):** When a visitor provides their email, the conversation data is saved silently to `data/chatbot.csv` via a POST to `/api/chatbot`. Fields saved:

| Field | Content |
|---|---|
| timestamp | ISO 8601 datetime |
| name | First name entered at start |
| email | Email address |
| challenge | Branch key selected (e.g., "strategy") |
| context | Context answer from follow-up question |
| recommendation | Service recommended by the bot |

**Conversation flow (updated in v8)**

| Step | Bot message | Input type |
|---|---|---|
| ask-name | "Hi! I'm the Change For Good assistant — here to help you find the right path forward. What's your name?" | Free text |
| ask-challenge | "Lovely to meet you, [Name]! What brings you here today?" | Quick-reply chips (6 options) |
| ask-context | Branch-specific follow-up (see below) | Quick-reply chips |
| ask-email | "What's the best email for Chenny to reach you? She personally reviews every message." | Free text (email validated) |
| closing | Personalised recommendation + next-step chips | Quick-reply chips |

**Challenge branches (6 options — updated in v8)**

| Chip label | Branch key | Follow-up question |
|---|---|---|
| I need a clearer strategy | strategy | Industry (Financial services / Aviation / Social enterprise / SME-Startup / Education / Other) |
| My team isn't aligned | alignment | Team size (Small under 20 / Medium 20–100 / Large 100+) |
| I want to grow but need direction | growth | Organisation type (Early-stage startup / Established SME / Social enterprise / Large organisation) |
| I'm looking for a coach | coaching | Who is the coaching for? (For myself / For my team / Both) |
| I want to innovate | innovation | Context (Fresh approach to old problem / Building something new / Future-proofing the organisation) |
| Just exploring for now | exploring | Area of interest (Strategy / Coaching / Innovation / All of it) |

**Service recommendations (closing message)**

| Branch | Recommended service | Note shown to visitor |
|---|---|---|
| strategy | Strategy Consulting | "We start with an honest diagnosis — no assumptions, no pre-packaged answers." |
| alignment | Leadership Alignment & Coaching | "The goal is a team that moves in the same direction — with shared clarity on purpose and values." |
| growth | Business Development | "We'll map the gap between where you are and the growth you're aiming for." |
| coaching | Coaching for Infinite Growth | "This is one of Chenny's most personal offerings — built around the belief that real professional growth and personal growth cannot be separated." |
| innovation | Innovation Sprint & Program Design | "We use structured methodologies like ExO and Design Thinking to help your team challenge assumptions and bring real ideas to life." |
| exploring / default | Change For Good Consulting | "Chenny will find the right fit based on where you are right now. Every engagement starts with listening." |

**Closing action chips**

| Chip | Action |
|---|---|
| Explore our services | Navigates to the Services tab |
| Take the free Diagnostic | Opens the Clarity-First Diagnostic |
| That's all for now | Closes the chat panel (bot says goodbye, panel closes after 3 seconds) |

**Email validation:** If the text entered does not contain `@` and `.`, the bot responds: *"Hmm, that doesn't look quite right — could you double-check the email address?"* and waits for a corrected input.

**"Maybe later" path:** If a visitor in the "Just exploring" branch declines to share their email, they are offered the Explore services and Take the Diagnostic chips instead. No lead is saved.

---

## SECTION 5 — DESIGN SYSTEM & BRAND GUIDELINES

### 5.1 Color meaning

The two brand colors are not aesthetic choices — they are meaning made visible and must be treated as non-negotiable.

> "Change For Good Consulting is defined by two powerful colors — deep royal purple and rich burnished gold. Purple speaks to wisdom, depth of insight, and the transformational work of strategy. Gold embodies excellence, breakthrough, and the tangible reward of growth achieved."

### 5.2 Brand colours

**Approved theme: Dark purple background.**

| Name | Hex | Usage |
|---|---|---|
| Deep royal purple (primary bg) | #2D2380 | Page background, sections, site wrapper |
| Deep purple (nav / footer) | #1a1560 | Navigation bar, footer, darkest surfaces |
| Burnished gold | #D4A017 | Card headings, stat numbers, icons, step numbers, value titles, all accents |
| Gold transparent (cards) | rgba(212,160,23,0.20) | Tag backgrounds, avatar backgrounds |
| Gold transparent (quote) | rgba(212,160,23,0.10) | Quote block backgrounds, download banner |
| Card surface | rgba(255,255,255,0.06) | Card and section backgrounds on purple |
| Text — white | #ffffff | H1 headlines, card titles, credential titles |
| Text — soft white | rgba(255,255,255,0.80) | Body text, supporting copy |
| Text — muted white | rgba(255,255,255,0.50) | Captions, metadata, placeholder text |
| Border | rgba(255,255,255,0.10) | Card borders, dividers |
| Border strong | rgba(255,255,255,0.20) | Form field borders |

### 5.3 Typography (updated in v8)

Font sizes were increased across the entire site in v8 to improve readability.

| Element | Spec |
|---|---|
| Primary font | System font stack: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial |
| H1 (hero) | 28px, weight 600, white |
| H2 | 22px, weight 600, white |
| Body text | 16px, weight 400, soft white (rgba 80%), line-height 1.65–1.75 |
| Eyebrow / section label | 12px, weight 600–700, uppercase, letter-spacing 0.08–0.09em, gold |
| Nav links | 14px, weight 500 |
| Nav logo name | 18px, weight 700 |
| Nav tagline | 13px, muted white |
| Buttons (primary / outline) | 15px, weight 600 |
| Card heading (h4) | 15px, weight 600, gold |
| Card body | 14px, soft white |
| Quote text | 22px, italic, weight 500 |
| Quote attribution | 15px, gold, weight 600 |
| Timeline credential name | 14px, weight 600, white |
| Timeline category label | 11px, weight 700, uppercase, gold |
| Timeline institution | 13px, muted white |
| Timeline year | 12px, gold at 70% opacity, weight 600 |
| Value title | 15px, weight 600, gold |
| Value body | 14px, soft white |
| Service carousel title | 22px, weight 700, white |
| Service carousel desc | 15px, rgba(255,255,255,0.72) |
| Result card client | 15px, weight 600, white |
| Result card body | 14px, soft white |
| Form labels | 14px, weight 500, soft white |
| Form inputs | 15px |
| Footer | 13px |
| Engagement card number | 48px, weight 800, gold |
| Engagement card title | 20px, weight 700, white |
| Engagement card body | 15px, soft white, line-height 1.7 |

### 5.4 Layout (updated in v8)

**Full-width layout:** The site now fills the full browser viewport edge to edge. Body padding and the `site-wrap` max-width constraint have been removed.

```css
body { padding: 0; }
.site-wrap { max-width: 100%; margin: 0; border-radius: 0; border: none; }
```

### 5.5 UI components

| Component | Spec |
|---|---|
| Primary button | Gold fill (#D4A017), deep purple text (#1a1560), 8px border radius, 15px font |
| Outline button | No fill, 1px border (rgba white 30%), soft white text, 15px font |
| Card | rgba(255,255,255,0.06) background, rgba white 10% border, 10px border radius |
| Engagement card | rgba(255,255,255,0.04) background, 1.5px gold border (22% opacity), 16px border radius |
| Tag — purple | rgba(83,74,183,0.35) background, soft white text, 20px border radius, 12px font |
| Tag — gold | Light gold fill, gold text, 20px border radius, 12px font |
| Quote block | 4px left border in gold-bright, 22px italic white text |
| Carousel card | 75vw width (max 320px), 300px min-height, 14px border radius |
| Border radius (global) | 8px |

### 5.6 Photography guidelines

| Image | Requirement |
|---|---|
| Hero banners (Home, Services, Results) | `sunset.png` — warm dusk cityscape |
| About hero | `silhouette-bg1.jpg` — silhouette, lighter overlay |
| Quote + What We Do (Home) | `lake.jpg` — calm lake landscape |
| Signature Programme cards | `lake-copy.jpg` |
| Services hero right panel | `chenny-photo3.jpeg` — Chenny at a whiteboard |
| About bio text — right inset | `chenny-warm.jpeg` — warm, professional, natural light |
| What Clients Say (Results) | `teacher2a.png` — workshop in session |
| Value card icons | `clarity-first.png`, `tangible-results.png`, `infinite-growth.png` — custom icons, white backgrounds removed |

### 5.7 Photo asset inventory

All photos stored in `cfg-nextjs/public/photos/`.

| Filename | Used on |
|---|---|
| `sunset.png` | Home hero, Services hero, Results hero |
| `silhouette-bg1.jpg` | About hero |
| `lake.jpg` | Home — quote + What We Do wrapper |
| `lake-copy.jpg` | Signature Programme cards (Home + Services) |
| `chenny-photo3.jpeg` | Services hero right panel |
| `cfg-logo.png` | About bio right panel (logo card) |
| `cfg-logo-transparent.png` | Nav bar right side (white, PIL-processed) |
| `teacher2a.png` | Results — What Clients Say section |
| `chenny-warm.jpeg` | About — bio text right inset |
| `clarity-first.png` | Home — Clarity First value card icon |
| `tangible-results.png` | Home — Tangible Results value card icon |
| `infinite-growth.png` | Home — Infinite Growth value card icon; About — How We Work section |

---

## SECTION 6 — TECHNICAL REQUIREMENTS

### 6.1 Platform and hosting

| Item | Decision |
|---|---|
| Platform | Next.js 14 (App Router), TypeScript |
| Domain | cfgconsultingph.com (already owned) |
| Hosting | TBD — Vercel (preferred) or self-hosted VPS |
| SSL | Required |
| CMS | To be decided for Phase 2 blog functionality |

### 6.2 Performance

| Requirement | Target |
|---|---|
| Page load speed | Under 3 seconds on mobile |
| Image optimisation | All images compressed, served in WebP where supported |
| Lazy loading | Images below the fold should lazy-load |

### 6.3 Mobile and browser support

| Requirement | Spec |
|---|---|
| Mobile responsive | All pages must work on screens from 320px to 1440px wide |
| Touch targets | Minimum 44×44px for all buttons and links |
| Browser support | Chrome, Safari, Firefox, Edge (latest 2 versions each) |
| Horizontal carousel | Must scroll smoothly on touch devices; scrollbar hidden |
| Timeline mobile breakpoint | ≤420px — two-sided layout collapses to single left-aligned column |
| Engagement cards mobile | Grid collapses to single column on narrow screens |

### 6.4 SEO requirements

| Requirement | Spec |
|---|---|
| Meta titles | Unique per page, max 60 characters |
| Meta descriptions | Unique per page, max 160 characters |
| Heading structure | One H1 per page; logical H2/H3 hierarchy |
| Image alt text | All images require descriptive alt text |
| Sitemap | XML sitemap submitted to Google Search Console at launch |
| Schema markup | Local business schema + Person schema for Chenny |
| Analytics | Google Analytics 4 installed and verified at launch |

### 6.5 Integrations

| Integration | Decision |
|---|---|
| Email marketing | Mailchimp (free plan — up to 500 subscribers) — Phase 2 |
| Contact form backend | Live in prototype (CSV). Supabase database to be used at launch. |
| Calendar booking | Not at launch |
| Analytics | Google Analytics 4 (GA4) |
| CRM | To be added in Phase 3 |
| Chatbot | Scripted CFG Chat Assistant with lead saving live in prototype. Mailchimp/CRM handoff in Phase 2. Full AI-powered chatbot in Phase 3. |
| Social links | LinkedIn (primary) |

### 6.6 Security and privacy

| Requirement | Detail |
|---|---|
| SSL | Required |
| Privacy policy page | Required — linked in footer |
| Cookie notice | Required — compliant with Philippine Data Privacy Act |
| Form data | All submissions stored securely; no third-party sharing |
| DPA compliance | Forms include privacy note. Consent checkbox to be added before launch. |
| Admin page | Password-protected; not linked in navigation |

### 6.7 Data collection — prototype (local CSV approach)

In the prototype (Phase 1), all form and chatbot submissions are stored as CSV files on the server using Next.js API routes. These files are written to a `data/` folder in the project root.

**Three data sources:**

| Source | API Route | CSV File | Fields |
|---|---|---|---|
| Contact form | `/api/contact` | `data/contact.csv` | timestamp, name, email, organization, service, message |
| Clarity-First Diagnostic | `/api/diagnostic` | `data/diagnostic.csv` | timestamp, name, email, total_score, profile, 5 area scores, q1–q10 |
| CFG Chat Assistant | `/api/chatbot` | `data/chatbot.csv` | timestamp, name, email, challenge, context, recommendation |

**Admin dashboard (`/admin`):**
- Hidden page — not linked in the navigation
- Password: `cfg2026` (to be changed before launch)
- Shows all three submission tables with row counts
- Download CSV button per table
- Log out button
- Protected by a server-side password check via `/api/admin`

**Migration plan for live deployment:** The CSV file approach is for prototype use only. When the site goes live, the three API routes will be updated to write to a **Supabase** database instead. The form components and admin dashboard UI remain unchanged — only the backend storage layer is swapped.

---

## SECTION 7 — CLIENT CONTENT RULES

These rules are non-negotiable and must be respected by the developer and any copywriters.

| Client | Rule |
|---|---|
| PAL (Philippine Airlines) | May be named. Outcomes may be shared. Program specifics must NOT be disclosed. |
| YSU Group | May be named. Outcomes may be shared. Program specifics must NOT be disclosed. |
| Bangko Sentral ng Pilipinas (BSP) | Under NDA. May be named and engagement type shared. Program specifics must NOT be disclosed. |
| Other clients | Do NOT name without explicit written permission from Chenny. |
| Testimonials | Require written permission from the client before use on the website. |

---

## SECTION 8 — PROJECT TIMELINE & MILESTONES

### 8.1 Phases

| Phase | Deliverable | Deadline |
|---|---|---|
| Phase 1 | Foundation — Prototype built and functional. All pages live. Contact form, Diagnostic, and Chatbot saving leads to CSV. Admin dashboard operational. PRD v8 signed off. | End of July 2026 |
| Phase 2 | Content & Integrations — Mailchimp email capture wired (Diagnostic + Newsletter). CFG Chat Assistant email handoff to Mailchimp. Initial blog articles live. CSV backend swapped for Supabase. | End of August 2026 |
| Phase 3 | Enhancement — CRM capability integrated. Full AI-powered chatbot (if required). | End of October 2026 |
| Launch | DNS confirmed, SSL verified, GA4 live, sitemap submitted, admin password updated, site goes live. | November 5, 2026 |

### 8.2 Key dates

| Milestone | Date |
|---|---|
| PRD v8 approved | July 2026 |
| Phase 1 complete | End of July 2026 |
| Phase 2 complete | End of August 2026 |
| Phase 3 complete | End of October 2026 |
| Launch | November 5, 2026 |

---

## SECTION 9 — TEAM & RESPONSIBILITIES

### 9.1 Project roles

| Role | Name / Contact |
|---|---|
| Client / Business owner | Chenny Galano · chenny@cfgconsultingph.com |
| Web developer / agency | To be determined |
| Chatbot specialist | Chenny's contact (name TBD) |
| Photographer | To be arranged |
| Copywriter | Content provided by client |
| Project manager | To be determined |

### 9.2 Content responsibilities

| Item | Responsible party |
|---|---|
| All written copy | Provided by client (Change For Good Consulting) |
| Chenny's photos | Client to arrange photography session before Phase 1 deadline |
| Client logos (PAL, BSP, etc.) | Client to obtain and provide approved logo files |
| Blog articles (initial 3) | Client to write or approve drafted content before Phase 2 |
| Testimonials | Client to collect post-launch with written permission |
| Mailchimp account setup | Client |
| Supabase setup | Developer — Phase 2 |
| Admin password update before launch | Client + Developer |

---

## SECTION 10 — APPROVAL & SIGN-OFF

By signing below, all parties confirm they have read and agreed to the requirements outlined in this Product Requirements Document. Any changes after sign-off must go through a formal change request.

| Party | Signature | Date |
|---|---|---|
| Client (Chenny Galano) | | |
| Web Developer / Agency | | |
| Project Manager | | |

---

*Change For Good Consulting · Strategies that transform. Results that endure.*  
*chenny@cfgconsultingph.com · linkedin.com/in/chenny-galano*
