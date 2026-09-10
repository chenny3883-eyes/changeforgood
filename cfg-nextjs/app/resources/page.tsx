'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import ClarityDiagnostic from '@/components/ClarityDiagnostic';
import InnovationDiagnostic from '@/components/InnovationDiagnostic';

const FAQ_ITEMS = [
  { q: 'What does Change For Good Consulting do?', a: 'We are a strategy and leadership consulting firm based in the Philippines. We help organisations and leaders build clarity, align their teams, develop the capability to execute, and create the conditions for lasting change — through consulting engagements, executive coaching, and innovation programmes.' },
  { q: 'Who do you typically work with?', a: 'We work with business owners, senior executives, government leaders, and social enterprise founders who are navigating growth, transformation, or complex organisational challenges. Our clients are people who take their work seriously and are willing to do the inner and outer work that real change requires.' },
  { q: 'What is the Clarity-First Diagnostic?', a: 'The Clarity-First Diagnostic is a free 10-question self-assessment for leaders. It evaluates five dimensions of organisational health — strategic clarity, leadership alignment, people and culture, innovation, and execution — and delivers a personalised leadership profile with specific next steps. It takes about five minutes.' },
  { q: 'What is the Innovation Readiness Diagnostic?', a: 'The Innovation Readiness Diagnostic is a free 10-question assessment that reveals how ready your organisation is to innovate. It evaluates innovation leadership, people and mindset, culture and environment, feasibility and capacity, and market-centredness — giving you an honest picture of where the gaps are and what to address first.' },
  { q: 'How do I start an engagement with Change For Good Consulting?', a: 'The best starting point is a Discovery Call — a focused, no-pressure conversation about where you are, where you want to go, and whether we are the right fit to help you get there. You can book one through the Contact page or by emailing chenny@cfgconsultingph.com.' },
  { q: 'Where are you based and do you work outside the Philippines?', a: 'Our office is at Unit 5401, Corporate Finance Plaza, Ortigas Center, Pasig City, Philippines. We work with clients across the Philippines and are open to engagements regionally and globally, depending on the nature of the work.' },
  { q: 'What makes Change For Good Consulting different from other consulting firms?', a: 'We combine the human side of change — leadership development, culture, and coaching — with the structural side: systems design, strategy, and execution. Chenny brings the people and process lens; Jimbo brings the engineering and innovation lens. Together, we work on the whole system, not just the surface.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

type View = 'main' | 'clarity' | 'innovation';

export default function ResourcesPage() {
  const [view, setView] = useState<View>('main');

  return (
    <>
      {view === 'clarity' && <ClarityDiagnostic onBack={() => setView('main')} />}
      {view === 'innovation' && <InnovationDiagnostic onBack={() => setView('main')} />}

      {view === 'main' && (
        <div id="resources-main">
          <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          <div className="hero">
            <p className="eyebrow">Insights and tools</p>
            <h1>Practical thinking for leaders who take growth seriously.</h1>
            <p>Resources built from real consulting and coaching experience &mdash; not generic advice. For business owners, executives, and individuals committed to becoming their best.</p>
          </div>

          <div className="section">
            <p className="slabel">Free diagnostics</p>

            <div className="download-banner" style={{ marginBottom: '16px' }}>
              <span className="dl-icon">&#11015;</span>
              <div>
                <span className="tag-gold" style={{ display: 'inline-block', marginBottom: '8px' }}>Leadership assessment</span>
                <div className="svc-title" style={{ marginTop: 0 }}>The Clarity-First Diagnostic</div>
                <div className="svc-desc">10 honest questions that reveal where your business strategy is strong, where it is fragile, and what to prioritize first. Get your personalised leadership profile instantly.</div>
                <button className="btn-gold btn-sm" onClick={() => setView('clarity')}>
                  Take the free diagnostic &rarr;
                </button>
              </div>
            </div>

            <div className="download-banner">
              <span className="dl-icon">💡</span>
              <div>
                <span className="tag-gold" style={{ display: 'inline-block', marginBottom: '8px' }}>Innovation assessment</span>
                <div className="svc-title" style={{ marginTop: 0 }}>The Innovation Readiness Diagnostic</div>
                <div className="svc-desc">10 questions across leadership, people, culture, feasibility, and market-centredness — revealing how ready your organisation truly is to innovate. Get your organisation&rsquo;s innovation profile instantly.</div>
                <button className="btn-gold btn-sm" onClick={() => setView('innovation')}>
                  Take the free diagnostic &rarr;
                </button>
              </div>
            </div>
          </div>

          <div className="section">
            <p className="slabel">From the desk of Chenny</p>
            <div className="g3">
              <Link href="/resources/articles/4-levels-of-conversation" className="art-card">
                <div className="art-img" style={{ padding: 0, overflow: 'hidden' }}>
                  <img src="/photos/article-1-cover.png" alt="When We Change How We Talk, We Change What We Build" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div className="art-body">
                  <span className="tag-purple" style={{ fontSize: '10px' }}>Leadership</span>
                  <div className="art-title">When We Change How We Talk, We Change What We Build</div>
                  <div className="art-meta">8 min read</div>
                </div>
              </Link>
              <div className="art-card">
                <div className="art-img" style={{ background: 'linear-gradient(135deg, #1a1560 0%, #2D2380 100%)', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/photos/cfg-logo-transparent.png" alt="Change For Good Consulting" style={{ width: '130px', filter: 'brightness(0) invert(1)', opacity: 0.90 }} />
                </div>
                <div className="art-body">
                  <span className="tag-purple" style={{ fontSize: '10px' }}>Leadership</span>
                  <div className="art-title">The inner work that makes strategy stick</div>
                  <div className="art-meta">4 min read</div>
                </div>
              </div>
              <div className="art-card">
                <div className="art-img" style={{ background: 'linear-gradient(135deg, #1a1560 0%, #2D2380 100%)', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/photos/cfg-logo-transparent.png" alt="Change For Good Consulting" style={{ width: '130px', filter: 'brightness(0) invert(1)', opacity: 0.90 }} />
                </div>
                <div className="art-body">
                  <span className="tag-purple" style={{ fontSize: '10px' }}>Growth</span>
                  <div className="art-title">Change for good &mdash; what continuous improvement really means</div>
                  <div className="art-meta">6 min read</div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <p className="slabel">Frequently asked questions</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {FAQ_ITEMS.map((item, i, arr) => (
                <details key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: i === arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                  <summary style={{ padding: '18px 0', fontSize: '15px', fontWeight: 600, color: '#fff', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    {item.q}
                    <span style={{ color: 'var(--cfg-gold)', fontSize: '20px', flexShrink: 0, lineHeight: 1 }}>+</span>
                  </summary>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75', margin: '0 0 18px', paddingRight: '24px' }}>{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="section section-alt">
            <p className="slabel">Stay connected</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>When there&rsquo;s something worth saying &mdash; strategy, coaching, and the honest conversations most consultants avoid.</p>
            <div className="newsletter-row">
              <input type="email" placeholder="your@email.com" />
              <button className="btn-primary btn-sm" style={{ whiteSpace: 'nowrap' }}>Subscribe</button>
            </div>
            <div className="trust-note">&#128274; No spam. Unsubscribe anytime. Your information is never shared.</div>
          </div>
        </div>
      )}
    </>
  );
}
