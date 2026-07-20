# CHANGE FOR GOOD CONSULTING
## Strategies that transform. Results that endure.

---

# WEBSITE PRODUCT REQUIREMENTS DOCUMENT
**Version:** 5.0  
**Prepared by:** Chenny Galano, Founder  
**Date prepared:** July 20, 2026  
**Project name:** Change For Good Consulting Website  
**Target launch date:** November 5, 2026  
**Status:** Draft

### Version history

| Version | Date | Changes |
|---|---|---|
| 4.0 | July 17, 2026 | CFG Chat Assistant, Clarity-First Diagnostic, full page content requirements |
| 5.0 | July 20, 2026 | Visual design update: split hero layouts, photo backgrounds across all pages, BCG-style horizontal scrolling service carousel, new photo assets |

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

### 3.2 Navigation design requirements

- Navigation bar background: deep royal purple (#2D2380)
- Tab text color: burnished gold (#D4A017)
- Active tab: brighter gold (#F5C842) with gold underline border
- Hover state: subtle gold background highlight
- Logo text: 'Change For Good' in white with 'Good' in gold
- Tagline below logo: 'Strategies that transform. Results that endure.' in muted white

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

#### Social proof strip

| Element | Content |
|---|---|
| Label | Clients include |
| Clients | PAL, YSU Group, BSP, JCI Philippines |
| Style | Gold text on dark purple strip |

#### Value pillars (3 cards)

| Card | Title | Body |
|---|---|---|
| 1 | Clarity first | Honest diagnosis before any solution is prescribed. We start with truth, not assumptions. |
| 2 | Tangible results | Every recommendation becomes a concrete, measurable action — not a theory. |
| 3 | Infinite growth | We invest in the whole person, not just the business problem. Growth without a ceiling. |

#### Featured quote + What We Do — photo background wrapper

The featured quote and the "What We Do" carousel are wrapped together inside a single container with a shared photo background. This makes both sections feel visually unified as one immersive band across the page.

**Background photo:** `lake.jpg` — calm lake landscape. Applied with purple gradient overlay:
```
linear-gradient(to bottom,
  rgba(26, 21, 96, 0.62) 0%,
  rgba(45, 35, 128, 0.48) 50%,
  rgba(26, 21, 96, 0.68) 100%),
url('/photos/lake.jpg') center 40% / cover no-repeat
```

The `.section` and `.section-alt` backgrounds inside this wrapper are overridden to `transparent` so the photo shows through both sections.

**Featured quote**

> "The most powerful thing a consultant can offer is not just a plan — but the kind of thinking that changes how a leader sees themselves and their work."
> — Chenny Galano, Founder

Quote is styled at 20px italic, font-weight 500, with a gold left border bar (`border-left: 4px solid var(--cfg-gold-bright)`).

#### What We Do — horizontal scrolling carousel

The four-card services grid has been replaced with a BCG-style horizontal scrolling carousel. Cards snap into place as the user swipes or scrolls horizontally.

**Carousel behaviour:**
- `scroll-snap-type: x mandatory` — cards snap to position
- `-webkit-overflow-scrolling: touch` — smooth iOS scrolling
- Scrollbar hidden on all browsers (`scrollbar-width: none`)
- Each card: `flex: 0 0 75vw`, `max-width: 320px`, `min-height: 300px`

**Six cards (in order):**

| # | Tag | Title | Background |
|---|---|---|---|
| 1 | Strategy | Strategy consulting | Dark purple gradient |
| 2 | Brand | Marketing and branding | Dark purple gradient (varied shade) |
| 3 | Sales | Sales consulting | Dark purple gradient (varied shade) |
| 4 | Growth | Business development | Dark purple gradient (varied shade) |
| 5 | Signature programme | Coaching for infinite growth | `lake-copy.jpg` with purple gradient overlay (gold tag) |
| 6 | Innovation | Innovation sprint and program design | Dark purple gradient (varied shade) |

The **Coaching for Infinite Growth** card (Signature Programme) is visually distinguished from the other cards by its photo background (`lake-copy.jpg`) and its gold-coloured category tag.

#### Bottom CTA

| Element | Content |
|---|---|
| Copy | Ready to close the gap? Let's talk about where you are and where you want to be. |
| Button | Book a free discovery call |

---

### 4.2 About page

#### Hero section

| Element | Content |
|---|---|
| Eyebrow | Meet the founder |
| Headline | Chenny Galano — consultant, coach, and someone who has done the inner work herself. |
| Subheading | Change For Good Consulting was built from lived understanding: that strategy without self-awareness is incomplete, and that the most powerful growth happens when professional excellence and personal development are pursued together. |

**Hero background photo:** `silhouette-bg1.jpg` — silhouette image, atmospheric and aspirational. Applied with a lighter purple gradient overlay to let the photo show through clearly:
```
linear-gradient(to bottom,
  rgba(26, 21, 96, 0.55) 0%,
  rgba(45, 35, 128, 0.35) 50%,
  rgba(26, 21, 96, 0.65) 100%),
url('/photos/silhouette-bg1.jpg') center 12% / cover no-repeat
```

#### The vision (in Chenny's voice)

Chenny Galano is a change consultant, innovation facilitator, and entrepreneur whose work is rooted in a single conviction: that transformation is not an event — it is a practice. As the Founder of Change For Good Consulting, she brings together strategic clarity, creative intelligence, and human-centered methodology to help organizations not just improve, but fundamentally become what they were always meant to be.

Her foundation is both creative and rigorous. Trained in Communication Arts and Advertising, and shaped by years in the world of print media and glossy publishing, Chenny developed an early mastery of narrative, brand, and the art of making ideas land with impact. This creative lens became the bedrock of something deeper — a career at the intersection of strategy, innovation, and leadership development.

As President of the Rizal Academy for Innovation and Leadership (TRAIL) from 2021 to 2026, Chenny led the design and execution of strategic initiatives, innovation programs, and transformative learning experiences — not as an outside advisor, but as an institution builder. It is this inside-out understanding of how organizations grow, struggle, and evolve that distinguishes her practice. She has worked with organizations across industries — including PAL and BSP — designing programs that produce measurable, lasting results.

What sets Chenny apart is her rare ability to hold both the vision and the blueprint. She is equally at home facilitating an Innovation Sprint using Exponential Organization frameworks and Design Thinking, coaching a senior executive through a leadership identity shift, or building a go-to-market strategy from the ground up. Her toolkit spans ExO, Business Model Design, Systems Thinking, Theory U, De Bono's Six Thinking Hats, and Action Learning — but her real methodology is the belief that real change must be felt before it can be measured.

A certified coach and consultant, and a proud alumna of Junior Chamber International Philippines where she served as National Training Director in 2016, Chenny carries with her a lifelong commitment to community, continuous learning, and the development of people who lead with purpose.

Change For Good Consulting is the fullest expression of that life's work — a firm built not merely to advise, but to walk alongside businesses in the hard, meaningful work of becoming. Change, for good. Change, forever.

#### The inner work

Chenny's story is not just a career narrative — it is the account of a leader who transformed herself before she could help others do the same. She was once an employee who believed that capability meant knowing more, leading because she knew more. She had to unlearn that.

Leadership, she discovered, is about curiosity — about imagining what can be created *with* other people, not just for them. She had to let go of pride, of the know-it-all disposition that blocks collaboration. Innovation lives in the places less seen, in threading new paths, in leaning into what people actually need. She learned to hold both the data and the creative — and discovered that when logic and creativity join together, they create a whole new world.

That is what she brings to every client.

#### Featured quote

> "My motivation has changed. I always have in mind how we will be able to support and impact more lives, organizations, and the society. I have a bigger vision — and it excites me to do the work over and over again."
> — Chenny Galano

#### Credentials

*Education*

| Credential | Institution | Notes |
|---|---|---|
| Master of Business Administration (MBA) — With Honors | Miriam College SBEA, Quezon City | 2023–2025 · Best in Capstone for Strategic Management |
| MBA Undergraduate Units | Nexford University, Washington D.C. | 2021–2022 |
| AB Communication Arts and Advertising | Miriam College Loyola Heights, Quezon City | 2001–2005 |

*Coaching*

| Credential | Institution | Notes |
|---|---|---|
| PCC ACSTH — International Coaching Federation (ICF) | ICF | May–December 2021 |
| Transformative Coaching Certification | Coach Masters Academy, Singapore / Philippines | 2019–2020 |
| Executive Coaching Training Program | TRAIL, Philippines | 2017 |

*Innovation & Organizational Transformation*

| Credential | Institution | Notes |
|---|---|---|
| ExO Foundations · ExO Consultant Certification · ExO Trainer EU | Exponential Organizations | March–May 2020 |
| 2030 SDGs Game Facilitator Certification | Imacocollabo | February–March 2020 |

*Theory U & Presencing*

| Credential | Institution | Notes |
|---|---|---|
| u-Lab: Societal Transformation Lab | Presencing Institute / MIT | 2019 & 2020 |
| Digital Leadership Program · Presencing Foundation Program · Awareness Practices for Leadership | Presencing Institute U.Academy | 2020 |
| Focused Training in Constellations — Modules 1, 2, 3 | Bali, Indonesia & Online | 2019–2021 |

*Leadership & Facilitation*

| Credential | Institution | Notes |
|---|---|---|
| President — Rizal Academy for Innovation and Leadership (TRAIL) | TRAIL | 2021–2026 · Led strategic initiatives, innovation programs, and transformative learning |
| National Training Director — JCI Philippines | JCI Manileña Chapter | 2016 |
| ELIAS — Emerging Leaders Innovating Across Sectors | — | 2018 |
| Dance of Change in the Age of Complexity | Dr. Peter Senge, Philippines | February 2018 |
| Thriving in the Age of Disruption | Dr. Otto Scharmer, Philippines | May 2019 |

#### Values / How we work (3 items)

| Value | Title | Body |
|---|---|---|
| 1 | Integrity — we say the hard things, kindly | Honest diagnosis before any solution is prescribed. We will never tell you what you want to hear at the expense of what you need to hear. |
| 2 | Courage — we commit to measurable outcomes | Every engagement ends not with a presentation but with a plan, a team aligned behind it, and people growing in skill and in character. |
| 3 | Infinite growth — built with you, not handed down | Solutions co-created with your team. We believe every person — and every business — holds more potential than they have yet discovered. |

---

### 4.3 Services page

#### Hero section — split layout

The Services hero uses the same two-column split layout as Home:

| Column | Content |
|---|---|
| Left — text | Eyebrow, headline, subheading |
| Right — photo | `chenny-photo3.jpeg` — Chenny facilitating a workshop at a whiteboard |

| Element | Content |
|---|---|
| Eyebrow | What we offer |
| Headline | Six ways to work with us — all built around your real situation. |
| Subheading | Whether you're a startup founder seeking traction, an SME ready to scale, or a leader committed to growing yourself and your team — there is an engagement designed for where you are right now. |

**Right photo panel:** `chenny-photo3.jpeg` displayed as a contained image (`object-fit: cover`, `object-position: center 15%`) inside a rounded panel (`border-radius: 12px`, `height: 320px`, `width: 300px`, `box-shadow: 0 4px 24px rgba(0,0,0,0.28)`).

**Hero background photo:** `sunset.png` — same warm sunset used on Home, maintaining visual continuity between the two pages. Applied with the same purple gradient overlay as Home.

**Responsive:** On screens ≤600px, the two columns stack vertically (photo below text, full width).

#### Signature Programme — featured card

A full-width featured card with gold border sits above the carousel. It uses `lake-copy.jpg` as a photo background with a purple gradient overlay, distinguishing it visually from the other service cards.

| Element | Content |
|---|---|
| Tag | Signature programme |
| Name | Coaching for Infinite Growth |
| Description | A transformational methodology for individuals committed to growing in character and professional life — without limit. Covers personal values clarification, leadership character development, professional vision mapping, mindset and behavioral coaching, and accountability systems for sustained growth. |
| Best for | Executives, founders, and high-achievers ready to integrate personal excellence into professional impact. |
| CTA | Inquire about this programme — links to the Contact page |
| Background | `lake-copy.jpg` with purple gradient overlay (`linear-gradient(160deg, rgba(26,21,96,0.72) 0%, rgba(45,35,128,0.55) 50%, rgba(26,21,96,0.78) 100%)`) |

#### Services carousel — horizontal scrolling

The five remaining services are displayed in a BCG-style horizontal scrolling carousel (same behaviour as the Home carousel).

**Five cards (in order):**

| # | Tag | Title |
|---|---|---|
| 01 | Strategy | Strategy consulting |
| 02 | Brand | Marketing and branding |
| 03 | Sales | Sales consulting |
| 04 | Growth | Business development |
| 05 | Innovation | Innovation sprint and program design |

Each card uses a dark purple gradient background (varied shades) with no photo — the Signature Programme featured card above carries the photo treatment for this page.

#### How an engagement works (4 steps)

| Step | Title | Description |
|---|---|---|
| 1 | Discovery call | Free conversation — we learn about your business and goals |
| 2 | Honest diagnosis | We assess where you are before proposing anything |
| 3 | Co-create the plan | Solutions built with your team, not handed down |
| 4 | Walk alongside | We stay with you through implementation — not just strategy |

#### Who we serve (4 cards)

| Audience | Description |
|---|---|
| SMEs | Established businesses ready to sharpen strategy, strengthen brand, and build systems that turn ambition into sustainable growth. |
| Startups | Founders with a vision who need clarity, positioning, and go-to-market strategy to move from idea to traction with confidence. |
| Social enterprises | Mission-led organizations that need business rigour to match their social purpose — doing good and performing well are not a trade-off. |
| Diverse organizations | Organizations spanning multiple sectors who need an integrated consulting partner that can navigate complexity and deliver coherent strategy. |

---

### 4.4 Results page

#### Hero section

| Element | Content |
|---|---|
| Eyebrow | Proven client results |
| Headline | We don't measure success in deliverables. We measure it in change. |
| Subheading | From national institutions to growing enterprises — here is what working with Change For Good Consulting looks like in practice. |

**Hero background photo:** `sunset.png` — consistent with Home and Services hero banners.

#### Stats bar (3 figures)

| Stat | Label |
|---|---|
| 5+ | Major organization transformations supported |
| 25+ | Strategic initiatives for PAL |
| 100% | Commitment to measurable outcomes |

#### Client case highlights

*YSU Group — Strategy & Business Development*

Change For Good designed and facilitated a strategic planning process for YSU Group using the Exponential Organization (ExO) framework — equipping the leadership team with an innovative mindset and the tools to reimagine their business enabled by technology. The leadership team moved from planning to action, actively implementing 4 ExO attributes as a result.

*Philippine Airlines (PAL) — Innovation & Strategy*

Change For Good designed and facilitated an Innovation Summit for PAL — a structured program built to surface ideas that could either reduce operational costs or generate new revenue. The team Chenny coached won as champion of PAL's own Innovation Summit. Of the 25+ strategic initiatives that emerged, one has already been launched as a commercial product, and two are currently being accelerated through further market research on their way to market.

*Bangko Sentral ng Pilipinas (BSP) — Coaching & Continuous Improvement*

Change For Good designed and delivered a Continuous Improvement Program for BSP — beginning with leadership mindset work in Systems Thinking and Mental Models, so participants could see their systems differently before trying to improve them. All teams completed the program and presented their major projects, with additional Kaizen projects surfaced and presented across the organization.

#### "What Clients Say" — photo background section

The testimonials section uses `teacher2a.png` as a full-bleed background photo, applied with a purple gradient overlay. This photo shows a workshop in session — participants at the table, presenter and board visible — reinforcing the real-world consulting and facilitation context.

**Background photo:** `teacher2a.png`
```
linear-gradient(to bottom,
  rgba(26, 21, 96, 0.72) 0%,
  rgba(45, 35, 128, 0.55) 50%,
  rgba(26, 21, 96, 0.78) 100%),
url('/photos/teacher2a.png') center 15% / cover no-repeat
```

**Background position:** `center 15%` — positions the image to show the full room including the presenter at the front.

#### Testimonials

To be added in the first iteration after launch. Chenny will collect quotes from select clients with written permission. The section is currently populated with anonymised placeholder testimonials. These must be replaced with real, approved testimonials before launch.

**Important:** Do not use client testimonials without written permission. See client content rules.

#### Bottom CTA

| Element | Content |
|---|---|
| Copy | Your organization's story could be next. |
| Button | Let's talk about your goals |

---

### 4.5 Resources page

**Hero section**

| Element | Content |
|---|---|
| Eyebrow | Insights and tools |
| Headline | Practical thinking for leaders who take growth seriously. |
| Subheading | Resources built from real consulting and coaching experience — not generic advice. For business owners, executives, and individuals committed to becoming their best. |

**Free diagnostic banner (lead magnet)**

| Element | Content |
|---|---|
| Tag | Free download |
| Title | The Clarity-First Diagnostic — a self-assessment for leaders |
| Description | 10 honest questions that reveal where your business strategy is strong, where it is fragile, and what to prioritize first. Used by leaders across the Philippines and beyond. |
| CTA button | Take the free diagnostic → |
| Button action | Loads the Clarity-First Diagnostic as a sub-page within the Resources tab (see Section 4.6) |
| Format | Interactive web application — not a static PDF |
| Email capture | Name and email collected on the first screen of the diagnostic before questions begin. Gate is enforced — Start button is disabled until both fields are valid. |
| Status | Built and live in prototype. Email gate active. Mailchimp integration to be wired by developer in Phase 2. |

**Blog / article cards**

To be written by Chenny and published in Phase 2. The page should be designed with a placeholder grid ready to receive articles. Three placeholder titles at launch:

| Article | Tag | Est. read time |
|---|---|---|
| Why most strategic plans fail before they start | Strategy | 5 min |
| The inner work that makes strategy stick | Leadership | 4 min |
| Change for good — what continuous improvement really means | Growth | 6 min |

**Newsletter sign-up**

| Element | Content |
|---|---|
| Copy | When there's something worth saying — strategy, coaching, and the honest conversations most consultants avoid. |
| Cadence | Quarterly, or when there is something worth sharing |
| Fields | Email address only |
| CTA button | Subscribe |
| Trust note | No spam. Unsubscribe anytime. Your information is never shared. |
| Platform | Mailchimp (free plan) |

---

### 4.6 Diagnostic sub-page — The Clarity-First Diagnostic

The Clarity-First Diagnostic is **not a separate navigation tab**. It is a sub-page that loads within the Resources tab when the visitor clicks "Take the free diagnostic →" on the Resources page. A "← Back to Resources" link at the top returns the visitor to the main Resources content at any time.

**Access path:** Resources tab → click "Take the free diagnostic →" banner button

**Page structure — 3 screens in sequence**

**Screen 1 — Email gate (name + email capture)**

| Element | Content |
|---|---|
| Tag | Free Leadership Assessment |
| Headline | The Clarity-First Diagnostic |
| Subheading | Ten honest questions that reveal where your business strategy is strong, where it is fragile, and what to prioritise first. Enter your details to access your free assessment and receive your personalised leadership profile instantly. |
| Name field | Required — placeholder: "e.g. Maria Santos" |
| Email field | Required — validated format before activation |
| CTA button | Start the diagnostic → (disabled until both fields are valid; activates automatically) |
| Privacy note | "Your information is never shared. Unsubscribe anytime." |
| What you will get | 3 stats: 10 questions across 5 areas · ~5 minutes · 1 personalised profile instantly |
| Back link | ← Back to Resources (shown above all diagnostic screens) |

**Screen 2 — Questions**

10 questions across 5 areas (2 per area). Each question is shown one at a time with a progress bar. The Next button activates only once an answer is selected. Leaders can navigate back to change previous answers.

| Area | Icon | Questions |
|---|---|---|
| Strategic Clarity | 🧭 | (1) I can articulate where my organisation is going in the next 3 years in a single, clear statement. (2) My leadership team makes decisions that consistently reflect our stated strategic direction. |
| Leadership Alignment | 🤝 | (3) The people leading this organisation share a common understanding of what success looks like. (4) When we face difficult decisions, we have a clear set of values that guides us — not just instinct or hierarchy. |
| People & Culture | 🌱 | (5) My team has the capability and mindset to deliver the future we are building toward. (6) I am confident that the culture we have today will support — not resist — the changes we need to make. |
| Innovation & Growth | 💡 | (7) We actively create space to explore new ideas, business models, or ways of working — not just improve what already exists. (8) We have a clear picture of how our industry or market is changing, and we are responding ahead of the curve. |
| Execution & Results | 🎯 | (9) We turn strategy into concrete action — with clear owners, timelines, and accountability. (10) When we commit to a goal, we follow through — and we measure whether it actually happened. |

**Answer scale (1–5 for each question)**

| Value | Label |
|---|---|
| 1 | Not at all true |
| 2 | Rarely true |
| 3 | Sometimes true |
| 4 | Often true |
| 5 | Completely true |

**Screen 3 — Results**

| Element | Content |
|---|---|
| Score ring | Total score out of 50 |
| Profile name | One of 4 archetypes (see below) |
| Profile tagline | One-line summary of the leader's current position |
| Area breakdown | Colour-coded bar for each of the 5 areas: Strong (green, 8–10), Developing (gold, 5–7), Fragile (red, 2–4) |
| Reflection summary | Personalised paragraph naming the strongest and most fragile areas + profile-specific narrative |
| Next steps | 3 specific, actionable next steps matched to the profile |
| Download button | "Download results (PDF)" — triggers browser print-to-PDF |
| Retake button | Resets the diagnostic to the intro screen |
| CTA | Book a Discovery Call → mailto:chenny@cfgconsultingph.com |

**Scoring profiles**

| Score range | Profile name | Summary |
|---|---|---|
| 43–50 | The Aligned Leader | Strategy is clear, team is capable, execution is strong. Work is about sustaining momentum and leading at the next level. |
| 33–42 | The Capable Builder | Strong foundations in place with meaningful gaps. Work is about closing the distance between intent and impact. |
| 22–32 | The Emerging Strategist | Direction is forming, ambition is clear, but structure and alignment need to catch up. |
| 10–21 | The Honest Starter | Important gaps across multiple areas. The most powerful act right now is seeing clearly and naming the truth. |

**Technical notes**

- Built in vanilla JavaScript — no external libraries or backend required
- All scoring, profiling, and results generation happens in the browser
- Print-to-PDF uses the browser's native print dialog with print-specific CSS
- Mailchimp email capture to be added to the intro screen before the results are shown (Phase 2)
- Future enhancement: results emailed to the leader automatically via Mailchimp automation

---

### 4.7 Contact page

**Hero section**

| Element | Content |
|---|---|
| Eyebrow | Let's start a conversation |
| Headline | We would love to learn about your business and explore how we can help. |
| Subheading | Reach out — no sales pitch, no pressure. Just an honest conversation about where you are, where you want to be, and whether Change For Good Consulting is the right partner for that journey. |

**Inquiry form fields**

| Field | Type | Required |
|---|---|---|
| Your name | Text | Yes |
| Email address | Email | Yes |
| Organization | Text | Optional |
| What are you working through? | Long textarea | Yes |
| Service area of interest | Dropdown | Optional |
| Submit button | — | Send message |

Dropdown options: Strategy Consulting, Business Development, Coaching for Infinite Growth, Innovation Sprint & Program Design, Marketing & Branding, Sales Consulting, Not sure yet.

Form backend: TBD — dependent on platform selection. All submissions to be sent directly to chenny@cfgconsultingph.com.

Trust note: Your details are never shared or sold.

**What happens next (3 steps)**

| Step | Copy |
|---|---|
| 1 | You'll receive a confirmation within minutes of submitting. |
| 2 | Chenny personally reviews every inquiry and responds within 24 hours. |
| 3 | We schedule a free discovery call — relaxed, no obligation, just honest conversation. |

**Direct contact details**

| Channel | Detail |
|---|---|
| Phone / WhatsApp / Viber | 09178086881 |
| Email | chenny@cfgconsultingph.com |
| LinkedIn | linkedin.com/in/chenny-galano |
| Location | Philippines · working globally |

---

### 4.8 CFG Chat Assistant (scripted chatbot)

The CFG Chat Assistant is a scripted, guided-conversation widget that appears on every page of the website. It is triggered by the "Start the conversation" button on the Home page hero, and is also accessible at any time via a floating gold chat button (FAB) fixed to the bottom-right corner of the screen.

**Purpose:** Qualify and guide website visitors toward the right service or next step — in a warm, personalised way — before they ever fill in a contact form.

**Access points**
- "Start the conversation" button (Home page hero)
- Floating chat button (bottom-right, all pages, always visible)

**Visual design**
- Chat panel slides in from the bottom-right corner
- Header: deep purple background with CFG avatar initials and "Here to help" status dot
- Visitor messages: gold bubbles (right-aligned)
- Bot messages: dark purple/blue bubbles (left-aligned) with CFG avatar
- Quick-reply chips: gold-bordered, clickable
- Typing indicator: three animated dots shown between bot turns to simulate natural pacing

**Conversation flow (state machine)**

| Step | Bot prompt | Input type |
|---|---|---|
| ask-name | "To start, what's your name?" | Free text |
| ask-challenge | "Great to meet you, [Name]! What best describes why you're here today?" | Quick-reply chips |
| ask-context | Branch-specific follow-up question (see below) | Quick-reply chips |
| ask-email-soft | "Would you like to leave your email so [Name] can reach out when you're ready?" | Quick-reply chips |
| ask-email | "What's the best email address for [Name] to reach you?" | Free text (email) |
| closing | Personalised recommendation + next-step chips | Quick-reply chips |

**Challenge branches**

| Chip label | Branch key | Follow-up question |
|---|---|---|
| I need a clearer strategy | strategy | "Is there a particular area you're curious about?" → Strategy / Innovation / Coaching |
| My team isn't aligned | alignment | "What does that look like day to day?" → Decision-making / Culture / Communication |
| I want to grow but need direction | growth | "What kind of growth are you focused on?" → Revenue / Partnerships / New markets |
| I'm looking for a coach | coaching | "What are you hoping to work through?" → Leadership / Mindset / Career transition |
| Just exploring | exploring | "No pressure at all — what kind of work are you most curious about?" → Strategy / Coaching / Innovation |

**Service recommendations (closing message)**

| Branch | Recommended service |
|---|---|
| strategy | Strategy Consulting |
| alignment | Leadership Alignment & Coaching |
| growth | Business Development |
| coaching | Coaching for Infinite Growth |
| exploring / default | Change For Good Consulting |

**Closing action chips**

| Chip | Action |
|---|---|
| Explore services | Navigates to the Services tab |
| Take the Diagnostic | Opens the Clarity-First Diagnostic sub-page |
| That's all, thanks | Closes the chat panel |

**Technical notes**
- Built in vanilla JavaScript — no external libraries or backend required
- State machine variable `chatStep` controls conversation position
- Visitor data held in `chatData` object: `{ name, challenge, context, email }`
- Typing delay proportional to message length: `Math.min(600 + text.length × 12, 2200)ms`
- FAB hides when the chat panel is open
- Built and live in prototype (Phase 1). Mailchimp email capture and CRM handoff to be wired in Phase 2.

---

## SECTION 5 — DESIGN SYSTEM & BRAND GUIDELINES

### 5.1 Color meaning

The two brand colors are not aesthetic choices — they are meaning made visible and must be treated as non-negotiable.

> "Change For Good Consulting is defined by two powerful colors — deep royal purple and rich burnished gold. Purple speaks to wisdom, depth of insight, and the transformational work of strategy. Gold embodies excellence, breakthrough, and the tangible reward of growth achieved."

Together they tell the complete story of what Change For Good does: the deep thinking that leads to real results.

### 5.2 Brand colours

**Approved theme: Dark purple background.** The website uses a deep royal purple as the dominant background color, with burnished gold as the primary accent. White and soft white are used for text.

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
| Border strong | rgba(255,255,255,0.20) | Form field borders, photo placeholders |

### 5.3 Typography

| Element | Spec |
|---|---|
| Primary font | Inter / Lato / Source Sans Pro (developer to confirm) |
| H1 | 24–28px, weight 600, white (#ffffff) |
| H2 | 20–22px, weight 600, white (#ffffff) |
| Body text | 16px minimum (accessibility), weight 400, soft white (rgba 80%) |
| Small / caption | 11–12px, muted white (rgba 50%) |
| Line height (body) | 1.65–1.75 |
| Quote text | 20px, italic, weight 500 — larger than body to give the quote visual prominence |

### 5.4 UI components

| Component | Spec |
|---|---|
| Primary button | Gold fill (#D4A017), deep purple text (#1a1560), 8px border radius |
| Outline button | No fill, 1px border (rgba white 30%), soft white text |
| Card | rgba(255,255,255,0.06) background, rgba white 10% border, 10px border radius |
| Tag — purple | rgba(83,74,183,0.35) background, soft white text, 20px border radius |
| Tag — gold | Light gold fill, gold text, 20px border radius |
| Quote block | 4px left border in gold-bright, italic white text, 20px font-size |
| Carousel card | 75vw width (max 320px), 300px min-height, 14px border radius, dark purple gradient or photo background |
| Border radius (global) | 8px |

### 5.5 Photography guidelines

| Image | Requirement |
|---|---|
| Hero banners (Home, Services, Results) | `sunset.png` — warm dusk cityscape. Creates visual consistency across the three main pages. |
| About hero | `silhouette-bg1.jpg` — silhouette image, lighter overlay to show the photo clearly. |
| Quote + What We Do (Home) | `lake.jpg` — calm lake landscape, used as a shared background spanning both the quote block and the What We Do carousel. |
| Signature Programme cards | `lake-copy.jpg` — same lake photo used on the featured card (Services) and the carousel card (Home). |
| Services hero right panel | `chenny-photo3.jpeg` — Chenny at a whiteboard, facilitating a session. Real photo, not stock. |
| What Clients Say (Results) | `teacher2a.png` — workshop in session, participants and presenter. Background position: `center 15%` to show full room including presenter. |
| General rule | AVOID generic stock photos of handshakes, boardrooms, or business teams. Use real photos wherever possible. |
| Alt text | All images must have descriptive alt text. |

### 5.6 Photo overlay treatment

All photo backgrounds use a layered CSS background: purple gradient overlay on top of the photo. This ensures text legibility while letting the photo show through.

**Standard overlay (hero banners, teacher section):**
```css
linear-gradient(to bottom,
  rgba(26, 21, 96, 0.72) 0%,
  rgba(45, 35, 128, 0.55) 50%,
  rgba(26, 21, 96, 0.78) 100%)
```

**Lighter overlay (About hero — photo needs to show clearly):**
```css
linear-gradient(to bottom,
  rgba(26, 21, 96, 0.55) 0%,
  rgba(45, 35, 128, 0.35) 50%,
  rgba(26, 21, 96, 0.65) 100%)
```

**Medium overlay (Lake — quote and What We Do wrapper):**
```css
linear-gradient(to bottom,
  rgba(26, 21, 96, 0.62) 0%,
  rgba(45, 35, 128, 0.48) 50%,
  rgba(26, 21, 96, 0.68) 100%)
```

**Card photo overlay (Signature Programme cards):**
```css
linear-gradient(160deg,
  rgba(26,21,96,0.72) 0%,
  rgba(45,35,128,0.55) 50%,
  rgba(26,21,96,0.78) 100%)
```

### 5.7 Photo asset inventory

All photos are stored in `cfg-nextjs/public/photos/` for Next.js serving.

| Filename | Used on | Source folder |
|---|---|---|
| `sunset.png` | Home hero, Services hero, Results hero | Home |
| `silhouette-bg1.jpg` | About hero | About |
| `lake.jpg` | Home — quote + What We Do wrapper | Home |
| `lake-copy.jpg` | Signature Programme card (Home carousel + Services featured card) | Services |
| `chenny-photo3.jpeg` | Services hero right panel | Services |
| `cfg-logo.png` | Home hero right panel (white card) | Home |
| `teacher2a.png` | Results — What Clients Say section | Results |

---

## SECTION 6 — TECHNICAL REQUIREMENTS

### 6.1 Platform and hosting

| Item | Decision |
|---|---|
| Platform | TBD — platform decision pending |
| Domain | cfgconsultingph.com (already owned) |
| Hosting | TBD — dependent on platform selection |
| SSL | Required — https:// on all pages |
| CMS | Yes — Chenny must be able to update blog articles without developer help |

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
| iOS / Android | Must render correctly on iPhone (Safari) and Android (Chrome) |
| Horizontal carousel | Must scroll smoothly on touch devices; scrollbar hidden on all browsers |

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
| Email marketing | Mailchimp (free plan — up to 500 subscribers) |
| Contact form | TBD — all submissions to be sent to chenny@cfgconsultingph.com |
| Calendar booking | Not at launch |
| Analytics | Google Analytics 4 (GA4) |
| CRM | To be added in Phase 3 |
| Chatbot | Scripted CFG Chat Assistant built and live in prototype (Phase 1). Mailchimp email capture and CRM handoff to be wired in Phase 2. Full AI-powered chatbot deferred to Phase 3. |
| Social links | LinkedIn (primary) |
| WhatsApp / Viber | Optional floating button linking to 09178086881 |

### 6.6 Security and privacy

| Requirement | Detail |
|---|---|
| SSL | Required — to be confirmed on platform selection |
| Privacy policy page | Required — linked in footer |
| Cookie notice | Required — compliant with Philippine Data Privacy Act |
| Form data | All submissions stored securely; no third-party sharing |
| DPA compliance | Forms must include consent checkbox and privacy note |

---

## SECTION 7 — CLIENT CONTENT RULES

These rules apply to all pages, copy, case studies, and testimonials. They are non-negotiable and must be respected by the developer and any copywriters.

| Client | Rule |
|---|---|
| PAL (Philippine Airlines) | May be named. Outcomes may be shared. Program specifics must NOT be disclosed. |
| YSU Group | May be named. Outcomes may be shared. Program specifics must NOT be disclosed. |
| Bangko Sentral ng Pilipinas (BSP) | Under NDA. May be named and engagement type shared. Program specifics must NOT be disclosed. |
| Other clients | Do NOT name without explicit written permission from Chenny. |
| Testimonials | Require written permission from the client before use on the website. Placeholder testimonials must be clearly marked and removed or replaced before launch. |

---

## SECTION 8 — PROJECT TIMELINE & MILESTONES

### 8.1 Phases

| Phase | Deliverable | Deadline |
|---|---|---|
| Phase 1 | Foundation — Platform selected and set up, domain connection, brand assets delivered, PRD signed off, design mockups approved | End of July 2026 |
| Phase 2 | Content — Clarity-First Diagnostic live (interactive web page, Mailchimp email capture added), CFG Chat Assistant email capture wired to Mailchimp, initial blog article placeholders live, Mailchimp newsletter connected | End of August 2026 |
| Phase 3 | Enhancement — CRM capability integrated, full AI-powered chatbot (if required) built and connected via specialist | End of October 2026 |
| Launch | DNS confirmed, SSL verified, GA4 live, sitemap submitted, site goes live | November 5, 2026 |

**Notes:**
- One-week buffer built in between Phase 3 completion and launch date
- Scripted CFG Chat Assistant is complete and live in the prototype
- Testimonials to be added in first post-launch iteration as Chenny collects them with written permission

### 8.2 Key dates

| Milestone | Date |
|---|---|
| PRD approved | July 2026 |
| Phase 1 complete | End of July 2026 |
| Phase 2 complete | End of August 2026 |
| Phase 3 complete | End of October 2026 |
| Launch | November 5, 2026 |

---

## SECTION 9 — TEAM & RESPONSIBILITIES

### 9.1 Project roles

| Role | Name / Contact |
|---|---|
| Client / Business owner | Chenny Galano · chenny@cfgconsultingph.com · 09178086881 |
| Web developer / agency | To be determined |
| Chatbot specialist | Chenny's contact (name TBD) |
| Photographer | To be arranged — needed for hero and about page images |
| Copywriter | Content provided by client |
| Project manager | To be determined |

### 9.2 Content responsibilities

| Item | Responsible party |
|---|---|
| All written copy | Provided by client (Change For Good Consulting) |
| Chenny's photos | Client to arrange photography session before Phase 1 deadline |
| Client logos (PAL, BSP, etc.) | Client to obtain and provide approved logo files |
| Blog articles (initial 3) | Client to write or approve drafted content before Phase 2 |
| Clarity-First Diagnostic | Interactive tool built and approved. Mailchimp email capture integration to be added by developer in Phase 2. |
| Testimonials | Client to collect post-launch with written permission |
| Mailchimp account setup | Client |

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
*chenny@cfgconsultingph.com · 09178086881 · linkedin.com/in/chenny-galano*
