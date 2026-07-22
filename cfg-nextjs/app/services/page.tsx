export default function ServicesPage() {
  return (
    <>
      <div className="hero hero--services hero--split">
        <div className="hero-text">
          <p className="eyebrow">What we offer</p>
          <h1>Six ways to work with us &mdash; all built around your real situation.</h1>
          <p>Whether you&rsquo;re a startup founder seeking traction, an SME ready to scale, or a leader committed to growing yourself and your team &mdash; there is an engagement designed for where you are right now.</p>
        </div>
        <div className="hero-photo-panel">
          <img src="/photos/chenny-photo3.jpeg" alt="Chenny Galano facilitating a workshop" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block', borderRadius: '12px' }} />
        </div>
      </div>

      <div className="quote-photo-section">
        <div className="section">
          <div className="svc-card featured" style={{ background: `linear-gradient(160deg, rgba(26,21,96,0.72) 0%, rgba(45,35,128,0.55) 50%, rgba(26,21,96,0.78) 100%), url('/photos/lake-copy.jpg') center 40% / cover no-repeat` }}>
            <span className="tag-gold">Signature programme</span>
            <div className="svc-title">Coaching for infinite growth</div>
            <div className="svc-desc">A transformational methodology for individuals committed to growing in character and professional life &mdash; without limit. Covers personal values clarification, leadership character development, professional vision mapping, mindset and behavioral coaching, and accountability systems for sustained growth.</div>
            <div className="svc-meta">Best for: executives, founders, and high-achievers ready to integrate personal excellence into professional impact</div>
            <a href="/contact"><button className="btn-primary btn-sm">Inquire about this programme</button></a>
          </div>

          <div className="svc-carousel">
            <div className="svc-carousel-track">
              <div className="svc-carousel-card" style={{ background: 'linear-gradient(160deg, rgba(45,35,128,0.88), rgba(26,21,96,0.95))' }}>
                <span className="svc-carousel-tag">01 — Strategy</span>
                <h3 className="svc-carousel-title">Strategy consulting</h3>
                <p className="svc-carousel-desc">Business vision and direction setting, competitive positioning, strategic planning, growth strategy, and organizational design. We turn ambition into a road map your team can actually follow.</p>
                <span className="svc-carousel-arrow">→</span>
              </div>
              <div className="svc-carousel-card" style={{ background: 'linear-gradient(160deg, rgba(60,40,100,0.88), rgba(35,20,80,0.95))' }}>
                <span className="svc-carousel-tag">02 — Brand</span>
                <h3 className="svc-carousel-title">Marketing and branding</h3>
                <p className="svc-carousel-desc">Brand identity development, messaging and positioning, marketing strategy, digital marketing, and content strategy. We make sure the world sees what you truly are.</p>
                <span className="svc-carousel-arrow">→</span>
              </div>
              <div className="svc-carousel-card" style={{ background: 'linear-gradient(160deg, rgba(40,30,110,0.88), rgba(22,18,90,0.95))' }}>
                <span className="svc-carousel-tag">03 — Sales</span>
                <h3 className="svc-carousel-title">Sales consulting</h3>
                <p className="svc-carousel-desc">Sales process design and optimization, team structure and coaching frameworks, pipeline development, customer acquisition and retention systems, and revenue performance reviews.</p>
                <span className="svc-carousel-arrow">→</span>
              </div>
              <div className="svc-carousel-card" style={{ background: 'linear-gradient(160deg, rgba(50,35,115,0.88), rgba(30,22,95,0.95))' }}>
                <span className="svc-carousel-tag">04 — Growth</span>
                <h3 className="svc-carousel-title">Business development</h3>
                <p className="svc-carousel-desc">Partnership development, new revenue stream identification, stakeholder engagement strategies, proposal and pitch development, and scaling frameworks for growing businesses.</p>
                <span className="svc-carousel-arrow">→</span>
              </div>
              <div className="svc-carousel-card" style={{ background: 'linear-gradient(160deg, rgba(35,25,105,0.88), rgba(20,15,85,0.95))' }}>
                <span className="svc-carousel-tag">05 — Innovation</span>
                <h3 className="svc-carousel-title">Innovation sprint and program design</h3>
                <p className="svc-carousel-desc">Structured sprints using ExO, Business Model Canvas, Design Thinking, Systems Thinking, and Theory U. We equip leaders to challenge assumptions and bring new ideas to life.</p>
                <span className="svc-carousel-arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-alt">
        <p className="slabel">How an engagement works</p>
        <div className="eng-cards">
          <div className="eng-card">
            <div className="eng-num">1.</div>
            <div className="eng-title">Discovery call</div>
            <p className="eng-desc">A free, no-pressure conversation where we listen first. We learn about your business, your goals, and the gap between where you are and where you want to be &mdash; before we say anything about solutions.</p>
          </div>
          <div className="eng-card">
            <div className="eng-num">2.</div>
            <div className="eng-title">Honest diagnosis</div>
            <p className="eng-desc">We assess your situation with clarity and candour. No assumptions, no pre-packaged answers. You deserve to know what&rsquo;s actually holding you back before any proposal is made.</p>
          </div>
          <div className="eng-card">
            <div className="eng-num">3.</div>
            <div className="eng-title">Co-create the plan</div>
            <p className="eng-desc">Solutions are built with your team, not handed down from above. We believe the people closest to the work hold the best insights &mdash; our role is to draw those out and shape them into a plan that sticks.</p>
          </div>
          <div className="eng-card">
            <div className="eng-num">4.</div>
            <div className="eng-title">Walk alongside</div>
            <p className="eng-desc">We don&rsquo;t disappear after the strategy deck. We stay through implementation &mdash; coaching, adjusting, and holding the line alongside you until the change takes root.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <p className="slabel">Who we serve</p>
        <div className="g2">
          <div className="card"><h4>SMEs</h4><p>Established businesses ready to sharpen strategy, strengthen brand, and build systems that turn ambition into sustainable growth.</p></div>
          <div className="card"><h4>Startups</h4><p>Founders with a vision who need clarity, positioning, and go-to-market strategy to move from idea to traction with confidence.</p></div>
          <div className="card"><h4>Social enterprises</h4><p>Mission-led organizations that need business rigour to match their social purpose &mdash; doing good and performing well are not a trade-off.</p></div>
          <div className="card"><h4>Diverse organizations</h4><p>Organizations spanning multiple sectors who need an integrated consulting partner that can navigate complexity and deliver coherent strategy.</p></div>
        </div>
      </div>
    </>
  );
}
