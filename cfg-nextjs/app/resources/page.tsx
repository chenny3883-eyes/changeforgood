'use client';

import { useState } from 'react';
import Link from 'next/link';
import ClarityDiagnostic from '@/components/ClarityDiagnostic';

export default function ResourcesPage() {
  const [showDiagnostic, setShowDiagnostic] = useState(false);

  return (
    <>
      {!showDiagnostic ? (
        <div id="resources-main">
          <div className="hero">
            <p className="eyebrow">Insights and tools</p>
            <h1>Practical thinking for leaders who take growth seriously.</h1>
            <p>Resources built from real consulting and coaching experience &mdash; not generic advice. For business owners, executives, and individuals committed to becoming their best.</p>
          </div>

          <div className="section">
            <div className="download-banner">
              <span className="dl-icon">&#11015;</span>
              <div>
                <span className="tag-gold" style={{ display: 'inline-block', marginBottom: '8px' }}>Free assessment</span>
                <div className="svc-title" style={{ marginTop: 0 }}>The Clarity-First Diagnostic &mdash; a self-assessment for leaders</div>
                <div className="svc-desc">10 honest questions that reveal where your business strategy is strong, where it is fragile, and what to prioritize first. Get your personalised profile instantly.</div>
                <button className="btn-gold btn-sm" onClick={() => setShowDiagnostic(true)}>
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
                <div className="art-img">&#128247; Cover image</div>
                <div className="art-body">
                  <span className="tag-purple" style={{ fontSize: '10px' }}>Leadership</span>
                  <div className="art-title">The inner work that makes strategy stick</div>
                  <div className="art-meta">4 min read</div>
                </div>
              </div>
              <div className="art-card">
                <div className="art-img">&#128247; Cover image</div>
                <div className="art-body">
                  <span className="tag-purple" style={{ fontSize: '10px' }}>Growth</span>
                  <div className="art-title">Change for good &mdash; what continuous improvement really means</div>
                  <div className="art-meta">6 min read</div>
                </div>
              </div>
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
      ) : (
        <ClarityDiagnostic onBack={() => setShowDiagnostic(false)} />
      )}
    </>
  );
}
