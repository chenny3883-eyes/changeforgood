export default function AboutPage() {
  return (
    <>
      <div className="hero hero--about">
        <p className="eyebrow">Meet the founder</p>
        <h1>Chenny Galano &mdash; consultant, coach, and someone who has done the inner work herself.</h1>
        <p>Change For Good Consulting was built from lived understanding: that strategy without self-awareness is incomplete, and that the most powerful growth happens when professional excellence and personal development are pursued together.</p>
      </div>

      <div className="section">
        <div style={{ display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 0', minWidth: 0 }}>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75', margin: '0 0 14px' }}>Chenny Galano is a change consultant, innovation facilitator, and entrepreneur whose work is rooted in a single conviction: that transformation is not an event &mdash; it is a practice. As the Founder of Change For Good Consulting, she brings together strategic clarity, creative intelligence, and human-centered methodology to help organizations not just improve, but fundamentally become what they were always meant to be.</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75', margin: '0 0 14px' }}>Her foundation is both creative and rigorous. Trained in Communication Arts and Advertising, and shaped by years in the world of print media and glossy publishing, Chenny developed an early mastery of narrative, brand, and the art of making ideas land with impact. This creative lens became the bedrock of something deeper &mdash; a career at the intersection of strategy, innovation, and leadership development.</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75', margin: '0 0 14px' }}>As President of the Rizal Academy for Innovation and Leadership (TRAIL) from 2021 to 2026, Chenny led the design and execution of strategic initiatives, innovation programs, and transformative learning experiences &mdash; not as an outside advisor, but as an institution builder. It is this inside-out understanding of how organizations grow, struggle, and evolve that distinguishes her practice. She has worked with organizations across industries &mdash; including PAL and BSP &mdash; designing programs that produce measurable, lasting results.</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75', margin: '0 0 14px' }}>What sets Chenny apart is her rare ability to hold both the vision and the blueprint. She is equally at home facilitating an Innovation Sprint using Exponential Organization frameworks and Design Thinking, coaching a senior executive through a leadership identity shift, or building a go-to-market strategy from the ground up. Her toolkit spans ExO, Business Model Design, Systems Thinking, Theory U, De Bono&rsquo;s Six Thinking Hats, and Action Learning &mdash; but her real methodology is the belief that real change must be felt before it can be measured.</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75', margin: '0 0 14px' }}>A certified coach and consultant, and a proud alumna of Junior Chamber International Philippines where she served as National Training Director in 2016, Chenny carries with her a lifelong commitment to community, continuous learning, and the development of people who lead with purpose.</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75', margin: '0' }}>Change For Good Consulting is the fullest expression of that life&rsquo;s work &mdash; a firm built not merely to advise, but to walk alongside businesses in the hard, meaningful work of becoming. Change, for good. Change, forever.</p>
          </div>
          <div style={{ flex: '0 0 220px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.35)' }}>
              <img src="/photos/chenny-warm.jpeg" alt="Chenny Galano — warm, professional, natural light" style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center 20%' }} />
            </div>
            <div style={{ background: 'rgba(255,255,255,0.94)', borderRadius: '10px', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.18)' }}>
              <img src="/photos/cfg-logo.png" alt="Change For Good Consulting" style={{ width: '100%', maxWidth: '180px', display: 'block' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="section section-alt">
        <blockquote className="quote-block">
          &ldquo;My motivation has changed. I always have in mind how we will be able to support and impact more lives, organizations, and the society. I have a bigger vision &mdash; and it excites me to do the work over and over again.&rdquo;
          <div className="quote-attr">&mdash; Chenny Galano</div>
        </blockquote>
      </div>

      <div className="section tl-section-bg">
        <p className="slabel">Credentials and experience</p>

        <div className="tl-legend">
          <div className="tl-legend-item">
            <div className="tl-legend-dot" style={{ background: 'var(--cfg-gold)' }}></div>
            Roles &amp; leadership
          </div>
          <div className="tl-legend-item">
            <div className="tl-legend-dot" style={{ background: 'transparent', border: '1.5px solid rgba(212,160,23,0.4)' }}></div>
            Education &amp; certifications
          </div>
        </div>

        <div className="tl-wrap">
          <div className="tl-spine"></div>

          {/* 2023–2025 */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="tl-cat">Education</div>
              <div className="tl-name">MBA &mdash; With Honors</div>
              <div className="tl-inst">Miriam College SBEA &middot; Best in Capstone for Strategic Management</div>
              <div className="tl-year">2023&ndash;2025</div>
            </div>
            <div className="tl-node"><div className="tl-dot tl-key"></div></div>
            <div className="tl-spacer"></div>
          </div>

          {/* 2021–2026 */}
          <div className="tl-row">
            <div className="tl-spacer"></div>
            <div className="tl-node"><div className="tl-dot tl-key"></div></div>
            <div className="tl-right">
              <div className="tl-cat">Leadership</div>
              <div className="tl-name">President &mdash; TRAIL</div>
              <div className="tl-inst">Rizal Academy for Innovation and Leadership</div>
              <div className="tl-year">2021&ndash;2026</div>
            </div>
          </div>

          {/* 2021–2022 */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="tl-cat">Education</div>
              <div className="tl-name">MBA Undergraduate Units</div>
              <div className="tl-inst">Nexford University, Washington D.C.</div>
              <div className="tl-year">2021&ndash;2022</div>
            </div>
            <div className="tl-node"><div className="tl-dot"></div></div>
            <div className="tl-spacer"></div>
          </div>

          {/* 2021 */}
          <div className="tl-row">
            <div className="tl-spacer"></div>
            <div className="tl-node"><div className="tl-dot tl-key"></div></div>
            <div className="tl-right">
              <div className="tl-cat">Coaching</div>
              <div className="tl-name">PCC ACSTH &mdash; ICF</div>
              <div className="tl-inst">International Coaching Federation</div>
              <div className="tl-year">2021</div>
            </div>
          </div>

          {/* 2020 — ExO */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="tl-cat">Innovation</div>
              <div className="tl-name">ExO Foundations &middot; Consultant &middot; Trainer EU</div>
              <div className="tl-inst">Exponential Organizations</div>
              <div className="tl-year">2020</div>
            </div>
            <div className="tl-node"><div className="tl-dot tl-key"></div></div>
            <div className="tl-spacer"></div>
          </div>

          {/* 2020 — SDGs */}
          <div className="tl-row">
            <div className="tl-spacer"></div>
            <div className="tl-node"><div className="tl-dot"></div></div>
            <div className="tl-right">
              <div className="tl-cat">Innovation</div>
              <div className="tl-name">SDGs Game Facilitator Certification</div>
              <div className="tl-inst">Imacocollabo</div>
              <div className="tl-year">2020</div>
            </div>
          </div>

          {/* 2020 — Presencing */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="tl-cat">Theory U</div>
              <div className="tl-name">Presencing Foundation &middot; Digital Leadership &middot; Awareness Practices</div>
              <div className="tl-inst">Presencing Institute U.Academy</div>
              <div className="tl-year">2020</div>
            </div>
            <div className="tl-node"><div className="tl-dot"></div></div>
            <div className="tl-spacer"></div>
          </div>

          {/* 2019–2021 — Constellations */}
          <div className="tl-row">
            <div className="tl-spacer"></div>
            <div className="tl-node"><div className="tl-dot"></div></div>
            <div className="tl-right">
              <div className="tl-cat">Theory U</div>
              <div className="tl-name">Constellations Training &mdash; Modules 1, 2, 3</div>
              <div className="tl-inst">Bali, Indonesia &amp; Online</div>
              <div className="tl-year">2019&ndash;2021</div>
            </div>
          </div>

          {/* 2019–2020 — u-Lab */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="tl-cat">Theory U</div>
              <div className="tl-name">u-Lab: Societal Transformation Lab</div>
              <div className="tl-inst">Presencing Institute / MIT</div>
              <div className="tl-year">2019&ndash;2020</div>
            </div>
            <div className="tl-node"><div className="tl-dot"></div></div>
            <div className="tl-spacer"></div>
          </div>

          {/* 2019–2020 — Transformative Coaching */}
          <div className="tl-row">
            <div className="tl-spacer"></div>
            <div className="tl-node"><div className="tl-dot"></div></div>
            <div className="tl-right">
              <div className="tl-cat">Coaching</div>
              <div className="tl-name">Transformative Coaching Certification</div>
              <div className="tl-inst">Coach Masters Academy, Singapore / Philippines</div>
              <div className="tl-year">2019&ndash;2020</div>
            </div>
          </div>

          {/* May 2019 — Scharmer */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="tl-cat">Leadership</div>
              <div className="tl-name">Thriving in the Age of Disruption</div>
              <div className="tl-inst">Dr. Otto Scharmer &middot; Philippines</div>
              <div className="tl-year">May 2019</div>
            </div>
            <div className="tl-node"><div className="tl-dot"></div></div>
            <div className="tl-spacer"></div>
          </div>

          {/* 2018 — ELIAS */}
          <div className="tl-row">
            <div className="tl-spacer"></div>
            <div className="tl-node"><div className="tl-dot"></div></div>
            <div className="tl-right">
              <div className="tl-cat">Leadership</div>
              <div className="tl-name">ELIAS &mdash; Emerging Leaders Innovating Across Sectors</div>
              <div className="tl-year">2018</div>
            </div>
          </div>

          {/* Feb 2018 — Senge */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="tl-cat">Leadership</div>
              <div className="tl-name">Dance of Change in the Age of Complexity</div>
              <div className="tl-inst">Dr. Peter Senge &middot; Philippines</div>
              <div className="tl-year">Feb 2018</div>
            </div>
            <div className="tl-node"><div className="tl-dot"></div></div>
            <div className="tl-spacer"></div>
          </div>

          {/* 2017 — Executive Coaching */}
          <div className="tl-row">
            <div className="tl-spacer"></div>
            <div className="tl-node"><div className="tl-dot"></div></div>
            <div className="tl-right">
              <div className="tl-cat">Coaching</div>
              <div className="tl-name">Executive Coaching Training Program</div>
              <div className="tl-inst">TRAIL, Philippines</div>
              <div className="tl-year">2017</div>
            </div>
          </div>

          {/* 2016 — JCI */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="tl-cat">Leadership</div>
              <div className="tl-name">National Training Director &mdash; JCI Philippines</div>
              <div className="tl-inst">JCI Manile&ntilde;a Chapter</div>
              <div className="tl-year">2016</div>
            </div>
            <div className="tl-node"><div className="tl-dot tl-key"></div></div>
            <div className="tl-spacer"></div>
          </div>

          {/* 2001–2005 */}
          <div className="tl-row">
            <div className="tl-spacer"></div>
            <div className="tl-node"><div className="tl-dot"></div></div>
            <div className="tl-right">
              <div className="tl-cat">Education</div>
              <div className="tl-name">AB Communication Arts and Advertising</div>
              <div className="tl-inst">Miriam College Loyola Heights, Quezon City</div>
              <div className="tl-year">2001&ndash;2005</div>
            </div>
          </div>

        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <a href="/contact" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Book a discovery call with Chenny
          </a>
        </div>
      </div>

      {/* ── CO-FOUNDER SECTION ── */}
      <div className="section">
        <p className="eyebrow" style={{ marginBottom: '6px' }}>Meet the co-founder</p>
        <h2 style={{ marginBottom: '28px' }}>Jose Emmanuel &ldquo;Jimbo&rdquo; Reverente &mdash; systems architect, innovation strategist, and institution builder.</h2>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 0', minWidth: 0 }}>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75', margin: '0 0 14px' }}>Jimbo Reverente is a systems architect, innovation strategist, and institution builder whose career has moved across the factory floor, the boardroom, and national government. As Co-Founder of Change For Good Consulting, he brings a structural, execution-driven counterpart to the firm&rsquo;s human-centered practice. He builds the systems that make transformation last.</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75', margin: '0 0 14px' }}>A graduate of Industrial Engineering from the University of the Philippines Diliman, Jimbo learned early that big problems are usually solved through small, disciplined redesigns. At Unilever&rsquo;s detergent powders plant in Manila, he moved from Methods Officer to Assistant Production Manager, rebuilding processes on the factory floor and leading a team of over 200. After earning his MBA in Finance and Strategy from Cornell University, he carried that same structural discipline into corporate finance at Amgen in California, managing cost analysis, pricing, and contract strategy for a multi-billion dollar biologics portfolio.</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75', margin: '0 0 14px' }}>From there, Jimbo moved into senior finance and infrastructure roles: Chief Finance Officer of South Luzon Thermal Energy Corporation, then Deputy Executive Director of the Philippine Government&rsquo;s Public-Private Partnership Center, and eventually Undersecretary of Finance for Privatization, Special Concerns and Corporate Affairs. As Undersecretary, he chaired the Privatization and PPP cluster and sat on the boards of the National Power Corporation, PSALM, and TransCo.</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75', margin: '0 0 14px' }}>After government service, Jimbo joined TRAIL in 2020 as Executive Coach, ExO Sprint Coach, and eventually Chief Innovation Officer. Over six years, he helped build the Philippines&rsquo; community of Exponential Organizations practitioners. A Fellowship in the MIT Sloan School of Management&rsquo;s IDEAS Asia Pacific Program gave him formal grounding in Systems Thinking and Theory U &mdash; methodologies that now sit at the center of how he reads any organization he works with.</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75', margin: '0' }}>Today, Jimbo is Deputy Director at the University of the Philippines System&rsquo;s Technology Transfer and Business Development Office and an Assistant Professor at the UP Diliman College of Engineering. Where Chenny brings the vision and the human process, Jimbo brings the blueprint and the execution. Together, they are building Change For Good Consulting.</p>
          </div>
          <div style={{ flex: '0 0 220px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.35)' }}>
              <img src="/photos/jimbo-2.jpeg" alt="Jose Emmanuel Jimbo Reverente — Co-Founder, Change For Good Consulting" style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center 20%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Jimbo quote — Jimbo 1 photo background */}
      <div style={{ background: `linear-gradient(to bottom, rgba(26,21,96,0.60) 0%, rgba(45,35,128,0.45) 50%, rgba(26,21,96,0.65) 100%), url('/photos/jimbo-1.jpeg') center 30% / cover no-repeat`, minHeight: '420px', display: 'flex', alignItems: 'center' }}>
        <div className="section" style={{ background: 'transparent', padding: '80px 40px' }}>
          <blockquote className="quote-block" style={{ maxWidth: '820px', fontSize: 'clamp(1.4rem, 2.5vw, 2.1rem)', lineHeight: 1.5 }}>
            &ldquo;Big problems are usually solved through small, disciplined redesigns. The work is not grand gestures &mdash; it is the quiet, rigorous rebuilding of the system underneath.&rdquo;
            <div className="quote-attr">&mdash; Jimbo Reverente, Co-Founder</div>
          </blockquote>
        </div>
      </div>

      {/* Jimbo timeline */}
      <div className="section tl-section-bg">
        <p className="slabel">Jimbo&rsquo;s credentials and experience</p>

        <div className="tl-legend">
          <div className="tl-legend-item">
            <div className="tl-legend-dot" style={{ background: 'var(--cfg-gold)' }}></div>
            Roles &amp; leadership
          </div>
          <div className="tl-legend-item">
            <div className="tl-legend-dot" style={{ background: 'transparent', border: '1.5px solid rgba(212,160,23,0.4)' }}></div>
            Education &amp; certifications
          </div>
        </div>

        <div className="tl-wrap">
          <div className="tl-spine"></div>

          {/* 2025–Present */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="tl-cat">Academia</div>
              <div className="tl-name">Deputy Director &mdash; UP System TTBDO</div>
              <div className="tl-inst">University of the Philippines System</div>
              <div className="tl-year">2025&ndash;Present</div>
            </div>
            <div className="tl-node"><div className="tl-dot tl-key"></div></div>
            <div className="tl-spacer"></div>
          </div>

          <div className="tl-row">
            <div className="tl-spacer"></div>
            <div className="tl-node"><div className="tl-dot tl-key"></div></div>
            <div className="tl-right">
              <div className="tl-cat">Academia</div>
              <div className="tl-name">Assistant Professor &mdash; Technopreneurship</div>
              <div className="tl-inst">UP Diliman College of Engineering</div>
              <div className="tl-year">2025&ndash;Present</div>
            </div>
          </div>

          {/* 2023 — MIT */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="tl-cat">Leadership</div>
              <div className="tl-name">Fellow &mdash; IDEAS Asia Pacific Program</div>
              <div className="tl-inst">MIT Sloan School of Management</div>
              <div className="tl-year">2023</div>
            </div>
            <div className="tl-node"><div className="tl-dot tl-key"></div></div>
            <div className="tl-spacer"></div>
          </div>

          {/* 2021–2026 — TRAIL */}
          <div className="tl-row">
            <div className="tl-spacer"></div>
            <div className="tl-node"><div className="tl-dot tl-key"></div></div>
            <div className="tl-right">
              <div className="tl-cat">Innovation</div>
              <div className="tl-name">Chief Innovation Officer</div>
              <div className="tl-inst">Rizal Academy for Innovation and Leadership (TRAIL)</div>
              <div className="tl-year">2021&ndash;2026</div>
            </div>
          </div>

          {/* 2020 — ExO */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="tl-cat">Innovation</div>
              <div className="tl-name">ExO Trainer &middot; Sprint Coach &middot; Consultant</div>
              <div className="tl-inst">OpenExO, Miami Beach, USA</div>
              <div className="tl-year">2020</div>
            </div>
            <div className="tl-node"><div className="tl-dot tl-key"></div></div>
            <div className="tl-spacer"></div>
          </div>

          {/* 2017–2020 — Aboitiz / JG Summit */}
          <div className="tl-row">
            <div className="tl-spacer"></div>
            <div className="tl-node"><div className="tl-dot"></div></div>
            <div className="tl-right">
              <div className="tl-cat">Industry</div>
              <div className="tl-name">VP Finance &middot; VP Business Development &middot; VP External Relations</div>
              <div className="tl-inst">Aboitiz Group &middot; JG Summit</div>
              <div className="tl-year">2015&ndash;2020</div>
            </div>
          </div>

          {/* 2014–2015 — Undersecretary */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="tl-cat">Government</div>
              <div className="tl-name">Undersecretary of Finance</div>
              <div className="tl-inst">Department of Finance, Republic of the Philippines</div>
              <div className="tl-year">2014&ndash;2015</div>
            </div>
            <div className="tl-node"><div className="tl-dot tl-key"></div></div>
            <div className="tl-spacer"></div>
          </div>

          {/* 2013–2014 — PPP */}
          <div className="tl-row">
            <div className="tl-spacer"></div>
            <div className="tl-node"><div className="tl-dot tl-key"></div></div>
            <div className="tl-right">
              <div className="tl-cat">Government</div>
              <div className="tl-name">Deputy Executive Director (Asst. Secretary)</div>
              <div className="tl-inst">Public-Private Partnership Center</div>
              <div className="tl-year">2013&ndash;2014</div>
            </div>
          </div>

          {/* 2012–2013 — CFO */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="tl-cat">Finance</div>
              <div className="tl-name">VP &mdash; Chief Finance Officer</div>
              <div className="tl-inst">South Luzon Thermal Energy Corporation</div>
              <div className="tl-year">2012&ndash;2013</div>
            </div>
            <div className="tl-node"><div className="tl-dot tl-key"></div></div>
            <div className="tl-spacer"></div>
          </div>

          {/* 2001–2011 — US career */}
          <div className="tl-row">
            <div className="tl-spacer"></div>
            <div className="tl-node"><div className="tl-dot"></div></div>
            <div className="tl-right">
              <div className="tl-cat">Industry</div>
              <div className="tl-name">Finance &amp; Strategy roles</div>
              <div className="tl-inst">Amgen Inc. &middot; Data Exchange Corporation &middot; California, USA</div>
              <div className="tl-year">2001&ndash;2011</div>
            </div>
          </div>

          {/* 2001 — Cornell */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="tl-cat">Education</div>
              <div className="tl-name">MBA &mdash; Finance and Strategy</div>
              <div className="tl-inst">Cornell University, Johnson Graduate School of Management</div>
              <div className="tl-year">2001</div>
            </div>
            <div className="tl-node"><div className="tl-dot tl-key"></div></div>
            <div className="tl-spacer"></div>
          </div>

          {/* 1992 — UP */}
          <div className="tl-row">
            <div className="tl-spacer"></div>
            <div className="tl-node"><div className="tl-dot tl-key"></div></div>
            <div className="tl-right">
              <div className="tl-cat">Education</div>
              <div className="tl-name">BS Industrial Engineering</div>
              <div className="tl-inst">University of the Philippines Diliman</div>
              <div className="tl-year">1992</div>
            </div>
          </div>

        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <a href="/contact" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Book a discovery call with Jimbo
          </a>
        </div>
      </div>

      <div className="section">
        <p className="slabel">How we work</p>
        <div className="val-carousel-track">
            <div className="val-card">
              <div className="val-card-img-wrap">
                <img src="/photos/integrity.png" alt="Integrity" />
              </div>
              <div className="val-title">Integrity &mdash; we say the hard things, kindly</div>
              <div className="val-body">Honest diagnosis before any solution is prescribed. We will never tell you what you want to hear at the expense of what you need to hear.</div>
            </div>
            <div className="val-card">
              <div className="val-card-img-wrap">
                <img src="/photos/courage-and-commitment.png" alt="Courage and Commitment" />
              </div>
              <div className="val-title">Courage &mdash; we commit to measurable outcomes</div>
              <div className="val-body">Every engagement ends not with a presentation but with a plan, a team aligned behind it, and people growing in skill and in character.</div>
            </div>
            <div className="val-card">
              <div className="val-card-img-wrap">
                <img src="/photos/infinite-growth.png" alt="Infinite Growth" />
              </div>
              <div className="val-title">Infinite growth &mdash; built with you, not handed down</div>
              <div className="val-body">Solutions co-created with your team. We believe every person &mdash; and every business &mdash; holds more potential than they have yet discovered.</div>
            </div>
        </div>
      </div>
    </>
  );
}
