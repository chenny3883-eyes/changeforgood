'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', organization: '', message: '', service: 'Strategy consulting' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

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
            {status === 'sent' ? (
              <div style={{ background: 'rgba(76,175,130,0.12)', border: '1.5px solid rgba(76,175,130,0.4)', borderRadius: '12px', padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>✓</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Message received!</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
                  Thank you, {form.name}. Chenny personally reviews every inquiry and will respond within 24 hours.
                </p>
                <button className="btn-outline" onClick={() => setStatus('idle')}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="form-field"><label>Your name</label><input type="text" placeholder="Juan dela Cruz" value={form.name} onChange={e => set('name', e.target.value)} required /></div>
                <div className="form-field"><label>Email address</label><input type="email" placeholder="juan@yourcompany.com" value={form.email} onChange={e => set('email', e.target.value)} required /></div>
                <div className="form-field"><label>Organization</label><input type="text" placeholder="Company name or 'Individual'" value={form.organization} onChange={e => set('organization', e.target.value)} /></div>
                <div className="form-field">
                  <label>What are you working through?</label>
                  <textarea placeholder="Tell us about your situation — your goals, your challenges, and what kind of support you're looking for..." value={form.message} onChange={e => set('message', e.target.value)}></textarea>
                </div>
                <div className="form-field">
                  <label>Service area of interest</label>
                  <select value={form.service} onChange={e => set('service', e.target.value)}>
                    <option>Strategy consulting</option>
                    <option>Marketing and branding</option>
                    <option>Sales consulting</option>
                    <option>Business development</option>
                    <option>Coaching for infinite growth</option>
                    <option>Innovation sprint and program design</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                {status === 'error' && <p style={{ fontSize: '13px', color: '#E05A5A', marginBottom: '10px' }}>Something went wrong. Please try again.</p>}
                <button type="submit" className="btn-primary w100" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
                <div className="trust-note">&#128274; Your details are never shared or sold.</div>
              </form>
            )}
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
              <div className="contact-info-row"><span className="contact-info-icon">&#9993;</span>chenny@cfgconsultingph.com</div>
              <div className="contact-info-row"><span className="contact-info-icon">&#128279;</span>linkedin.com/in/chenny-galano</div>
              <div className="contact-info-row" style={{ alignItems: 'flex-start' }}>
                <span className="contact-info-icon">&#128205;</span>
                <a href="https://maps.google.com/?q=Unit+5401+Corporate+Finance+Plaza+Ruby+Topaz+Road+Ortigas+Center+Pasig+City+Philippines" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', lineHeight: '1.55' }}>
                  Unit No. 5401, Corporate Finance Plaza,<br />Ruby &amp; Topaz Road, Ortigas Center,<br />Pasig City, Philippines
                </a>
              </div>
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
