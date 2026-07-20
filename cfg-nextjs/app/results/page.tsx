export default function ResultsPage() {
  return (
    <>
      <div className="hero">
        <p className="eyebrow">Proven client results</p>
        <h1>We don&rsquo;t measure success in deliverables. We measure it in change.</h1>
        <p>From national institutions to growing enterprises &mdash; here is what working with Change For Good Consulting looks like in practice.</p>
      </div>

      <div className="section">
        <div className="stat-row">
          <div className="stat-box"><div className="stat-num">5+</div><div className="stat-lbl">major organization transformations supported</div></div>
          <div className="stat-box"><div className="stat-num">25+</div><div className="stat-lbl">strategic initiatives for PAL</div></div>
          <div className="stat-box"><div className="stat-num">100%</div><div className="stat-lbl">commitment to measurable outcomes</div></div>
        </div>
      </div>

      <div className="section">
        <p className="slabel">Client case highlights</p>
        <div className="result-card">
          <div className="gold-bar"></div>
          <div className="flex-between mb10"><div className="result-client">YSU Group</div><span className="tag-gold">Business development</span></div>
          <p className="result-body">Led a business model redesign process that identified new verticals and revenue streams, repositioning the organization for sustainable, diversified growth beyond its existing portfolio.</p>
        </div>
        <div className="result-card">
          <div className="gold-bar"></div>
          <div className="flex-between mb10"><div className="result-client">Philippine Airlines (PAL)</div><span className="tag-gold">Strategy</span></div>
          <p className="result-body">Facilitated an innovation engagement that surfaced 25+ strategic initiatives, presented directly to senior leadership. The process challenged existing assumptions and opened new directions for the organization&rsquo;s growth trajectory.</p>
        </div>
        <div className="result-card">
          <div className="gold-bar"></div>
          <div className="flex-between mb10"><div className="result-client">Bangko Sentral ng Pilipinas (BSP)</div><span className="tag-gold">Coaching &amp; Continuous Improvement</span></div>
          <p className="result-body">Integrated Personal Mastery coaching within BSP&rsquo;s Lean Six Sigma program &mdash; helping participants grow not just in process proficiency but in self-awareness and leadership character.</p>
        </div>
      </div>

      <div className="section section-alt teacher-bg">
        <p className="slabel">What clients say</p>
        <div className="result-card mb12">
          <div className="testimonial">
            <div className="avatar">SE</div>
            <div>
              <div className="testi-quote">&ldquo;Working with Change For Good wasn&rsquo;t just about getting a plan &mdash; it was about becoming the kind of leader who could actually execute it. The shift in how I saw myself and my work was the real result.&rdquo;</div>
              <div className="testi-attr">&mdash; Senior Executive, Financial Services</div>
            </div>
          </div>
        </div>
        <div className="result-card">
          <div className="testimonial">
            <div className="avatar">FD</div>
            <div>
              <div className="testi-quote">&ldquo;Chenny has a rare ability to hold up a mirror without making you feel judged. The strategy work was excellent &mdash; but it was the coaching dimension that made it stick.&rdquo;</div>
              <div className="testi-attr">&mdash; Founder, Social Enterprise &middot; Manila</div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ textAlign: 'center', padding: '28px' }}>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 14px' }}>Your organization&rsquo;s story could be next.</p>
        <button className="btn-primary">Let&rsquo;s talk about your goals</button>
      </div>
    </>
  );
}
