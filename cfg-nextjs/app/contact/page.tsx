export default function ContactPage() {
  return (
    <>
      <div className="hero">
        <p className="eyebrow">Let&rsquo;s start a conversation</p>
        <h1>We would love to learn about your business and explore how we can help.</h1>
        <p>Reach out &mdash; no sales pitch, no pressure. Just an honest conversation about where you are, where you want to be, and whether Change For Good Consulting is the right partner for that journey.</p>
      </div>

      <div className="section">
        <div className="g2" style={{ alignItems: 'start' }}>
          <div>
            <div className="form-field"><label>Your name</label><input type="text" placeholder="Juan dela Cruz" /></div>
            <div className="form-field"><label>Email address</label><input type="email" placeholder="juan@yourcompany.com" /></div>
            <div className="form-field"><label>Organization</label><input type="text" placeholder="Company name or 'Individual'" /></div>
            <div className="form-field">
              <label>What are you working through?</label>
              <textarea placeholder="Tell us about your situation — your goals, your challenges, and what kind of support you're looking for..."></textarea>
            </div>
            <div className="form-field">
              <label>Service area of interest</label>
              <select>
                <option>Strategy consulting</option>
                <option>Marketing and branding</option>
                <option>Sales consulting</option>
                <option>Business development</option>
                <option>Coaching for infinite growth</option>
                <option>Innovation sprint and program design</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <button className="btn-primary w100">Send message</button>
            <div className="trust-note">&#128274; Your details are never shared or sold.</div>
          </div>
          <div>
            <div className="card mb12">
              <p className="slabel" style={{ marginBottom: '10px' }}>What happens next</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}><div className="step-num" style={{ flexShrink: 0 }}>1</div><div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.55' }}>You&rsquo;ll receive a confirmation within minutes of submitting.</div></div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}><div className="step-num" style={{ flexShrink: 0 }}>2</div><div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.55' }}>Chenny personally reviews every inquiry and responds within 24 hours.</div></div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}><div className="step-num" style={{ flexShrink: 0 }}>3</div><div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.55' }}>We schedule a free discovery call &mdash; relaxed, no obligation, just honest conversation.</div></div>
              </div>
            </div>
            <div className="card mb12">
              <p className="slabel" style={{ marginBottom: '12px' }}>Reach us directly</p>
              <div className="contact-info-row"><span className="contact-info-icon">&#128222;</span>09178086881 &middot; calls, WhatsApp and Viber</div>
              <div className="contact-info-row"><span className="contact-info-icon">&#9993;</span>chenny@cfgconsultingph.com</div>
              <div className="contact-info-row"><span className="contact-info-icon">&#128279;</span>linkedin.com/in/chenny-galano</div>
              <div className="contact-info-row"><span className="contact-info-icon">&#128205;</span>Philippines &middot; working globally</div>
            </div>
            <div style={{ borderRadius: '10px', padding: '14px', background: 'rgba(212,160,23,0.08)', border: '0.5px solid rgba(212,160,23,0.25)' }}>
              <blockquote className="quote-block" style={{ fontSize: '13px', background: 'transparent', padding: 0, borderLeft: '3px solid var(--cfg-gold)' }}>
                &ldquo;We don&rsquo;t just advise &mdash; we walk alongside you in the hard work of becoming what your business, and your people, were always meant to be.&rdquo;
                <div className="quote-attr">&mdash; Change For Good Consulting</div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-strip">
        <span className="foot-left">&copy; Change For Good Consulting &middot; Strategies that transform. Results that endure.</span>
        <span className="foot-right">Change. For Good.</span>
      </div>
    </>
  );
}
