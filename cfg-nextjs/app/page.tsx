'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <div className="hero hero--home-split">
        <div className="hero-text">
          <p className="eyebrow">Management consulting &middot; coaching &middot; innovation</p>
          <h1>The gap between where you are and where you want to be &mdash; is closeable.</h1>
          <p>Change For Good Consulting partners with businesses and leaders to turn honest strategy into measurable results. Not frameworks on a slide deck. Real plans. Real growth. Change that lasts &mdash; for good.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => window.dispatchEvent(new CustomEvent('cfg:openChat'))}>
              Start the conversation
            </button>
            <button className="btn-outline" onClick={() => router.push('/services')}>
              Explore our services
            </button>
          </div>
        </div>
      </div>


      <div className="section">
        <div className="g3">
          <div className="card">
            <div style={{ width: '64px', height: '64px', borderRadius: '12px', background: 'linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px', padding: '6px' }}>
              <img src="/photos/clarity-first.png" alt="Clarity First" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <h4>Clarity first</h4>
            <p>Honest diagnosis before any solution is prescribed. We start with truth, not assumptions.</p>
          </div>
          <div className="card">
            <img src="/photos/tangible-results.png" alt="Tangible Results" style={{ width: '56px', height: '56px', objectFit: 'contain', marginBottom: '8px' }} />
            <h4>Tangible results</h4>
            <p>Every recommendation becomes a concrete, measurable action &mdash; not a theory.</p>
          </div>
          <div className="card">
            <img src="/photos/infinite-growth.png" alt="Infinite Growth" style={{ width: '56px', height: '56px', objectFit: 'contain', marginBottom: '8px' }} />
            <h4>Infinite growth</h4>
            <p>We invest in the whole person, not just the business problem. Growth without a ceiling.</p>
          </div>
        </div>
      </div>

      <div className="quote-photo-section">
        <div className="section section-alt" style={{ background: 'none' }}>
          <blockquote className="quote-block">
            &ldquo;The most powerful thing a consultant can offer is not just a plan &mdash; but the kind of thinking that changes how a leader sees themselves and their work.&rdquo;
            <div className="quote-attr">&mdash; Chenny Galano, Founder</div>
          </blockquote>
        </div>

        <div className="section">
          <p className="slabel">What we do</p>
          <div className="svc-carousel">
            <div className="svc-carousel-track">
              <div className="svc-carousel-card" style={{ background: 'linear-gradient(160deg, rgba(45,35,128,0.92), rgba(26,21,96,0.98))' }}>
                <span className="svc-carousel-tag">Strategy</span>
                <h3 className="svc-carousel-title">Strategy consulting</h3>
                <p className="svc-carousel-desc">Vision, direction, competitive positioning, and strategic road-mapping built for the long game.</p>
                <span className="svc-carousel-arrow">→</span>
              </div>
              <div className="svc-carousel-card" style={{ background: 'linear-gradient(160deg, rgba(60,40,100,0.92), rgba(35,20,80,0.98))' }}>
                <span className="svc-carousel-tag">Brand</span>
                <h3 className="svc-carousel-title">Marketing and branding</h3>
                <p className="svc-carousel-desc">Brand identity, messaging, digital strategy, and campaigns that make you impossible to ignore.</p>
                <span className="svc-carousel-arrow">→</span>
              </div>
              <div className="svc-carousel-card" style={{ background: 'linear-gradient(160deg, rgba(40,30,110,0.92), rgba(22,18,90,0.98))' }}>
                <span className="svc-carousel-tag">Sales</span>
                <h3 className="svc-carousel-title">Sales consulting</h3>
                <p className="svc-carousel-desc">Sales process design, team coaching, pipeline development, and revenue performance systems.</p>
                <span className="svc-carousel-arrow">→</span>
              </div>
              <div className="svc-carousel-card" style={{ background: 'linear-gradient(160deg, rgba(50,35,115,0.92), rgba(30,22,95,0.98))' }}>
                <span className="svc-carousel-tag">Growth</span>
                <h3 className="svc-carousel-title">Business development</h3>
                <p className="svc-carousel-desc">Partnerships, new revenue streams, stakeholder engagement, and scaling frameworks for growing businesses.</p>
                <span className="svc-carousel-arrow">→</span>
              </div>
              <div className="svc-carousel-card" style={{ background: `linear-gradient(160deg, rgba(26,21,96,0.72) 0%, rgba(45,35,128,0.55) 50%, rgba(26,21,96,0.78) 100%), url('/photos/lake-copy.jpg') center 40% / cover no-repeat` }}>
                <span className="svc-carousel-tag" style={{ background: 'rgba(212,160,23,0.25)', color: 'var(--cfg-gold)' }}>Signature programme</span>
                <h3 className="svc-carousel-title">Coaching for infinite growth</h3>
                <p className="svc-carousel-desc">A transformational methodology for individuals committed to growing in character and professional life &mdash; without limit.</p>
                <span className="svc-carousel-arrow">→</span>
              </div>
              <div className="svc-carousel-card" style={{ background: 'linear-gradient(160deg, rgba(35,25,105,0.92), rgba(20,15,85,0.98))' }}>
                <span className="svc-carousel-tag">Innovation</span>
                <h3 className="svc-carousel-title">Innovation sprint and program design</h3>
                <p className="svc-carousel-desc">Structured sprints and programs that equip leaders to challenge assumptions and reimagine what&rsquo;s possible.</p>
                <span className="svc-carousel-arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ textAlign: 'center', padding: '28px' }}>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 14px', maxWidth: '440px', marginLeft: 'auto', marginRight: 'auto' }}>
          Ready to close the gap? Let&rsquo;s talk about where you are and where you want to be.
        </p>
        <a href="/contact"><button className="btn-primary">Book a free discovery call</button></a>
      </div>

      <div className="footer-strip">
        <span className="foot-left">Change For Good Consulting &middot; Philippines</span>
        <span className="foot-right">chenny@cfgconsultingph.com</span>
      </div>
    </>
  );
}
