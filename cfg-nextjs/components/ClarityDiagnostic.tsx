'use client';

import { useState } from 'react';

// ── DATA ──────────────────────────────────────────────────────
const DAREAS = [
  { id: 'clarity',    icon: '🧭', title: 'Strategic Clarity',    desc: 'How clear and shared is your direction?' },
  { id: 'alignment',  icon: '🤝', title: 'Leadership Alignment',  desc: 'Are your leaders unified in purpose and values?' },
  { id: 'people',     icon: '🌱', title: 'People & Culture',      desc: 'Does your team have the capability and mindset for the future?' },
  { id: 'innovation', icon: '💡', title: 'Innovation & Growth',   desc: 'Are you building for what is coming, not just what is now?' },
  { id: 'execution',  icon: '🎯', title: 'Execution & Results',   desc: 'Does strategy become action — with accountability?' },
];

const DQUESTIONS = [
  { area: 0, text: 'I can articulate where my organisation is going in the next 3 years in a single, clear statement.' },
  { area: 0, text: 'My leadership team makes decisions that consistently reflect our stated strategic direction.' },
  { area: 1, text: 'The people leading this organisation share a common understanding of what success looks like.' },
  { area: 1, text: 'When we face difficult decisions, we have a clear set of values that guides us — not just instinct or hierarchy.' },
  { area: 2, text: 'My team has the capability and mindset to deliver the future we are building toward.' },
  { area: 2, text: 'I am confident that the culture we have today will support — not resist — the changes we need to make.' },
  { area: 3, text: 'We actively create space to explore new ideas, business models, or ways of working — not just improve what already exists.' },
  { area: 3, text: 'We have a clear picture of how our industry or market is changing, and we are responding ahead of the curve.' },
  { area: 4, text: 'We turn strategy into concrete action — with clear owners, timelines, and accountability.' },
  { area: 4, text: 'When we commit to a goal, we follow through — and we measure whether it actually happened.' },
];

const DSCALE = [
  { value: 1, label: 'Not at all true' },
  { value: 2, label: 'Rarely true' },
  { value: 3, label: 'Sometimes true' },
  { value: 4, label: 'Often true' },
  { value: 5, label: 'Completely true' },
];

interface Profile {
  min: number;
  max: number;
  name: string;
  tagline: string;
  summary: string;
  steps: string[];
}

const DPROFILES: Profile[] = [
  {
    min: 43, max: 50,
    name: 'The Aligned Leader',
    tagline: 'Your strategy is clear, your team is capable, and execution is strong. The work now is about sustaining momentum and leading at the next level.',
    summary: 'You have built something real. Clarity, alignment, and execution are all present — and the evidence shows in how your team moves. The risk at this stage is complacency or over-optimisation. The highest-performing leaders in your position are asking not just "how do we run this better?" but "what do we need to become next?"',
    steps: [
      'Identify the one strategic bet that will define your next 3 years — and ensure your team can articulate it without prompting.',
      'Invest deliberately in your culture of innovation. High-performing teams need permission to challenge what is working, not just improve it.',
      'Consider executive coaching or a strategic thinking partnership to keep growing as the complexity of your role increases.',
    ],
  },
  {
    min: 33, max: 42,
    name: 'The Capable Builder',
    tagline: 'Strong foundations are in place, with some meaningful gaps to address. The work is about closing the distance between your intent and your impact.',
    summary: 'You are doing many things right — and you know where the friction is. Your instincts about what needs to change are probably correct. What is often missing at this stage is not ideas, but structure: a clear process for turning strategic intent into aligned, accountable action across your team.',
    steps: [
      'Run a focused strategy alignment session with your leadership team. Surface where interpretations of the direction diverge — even slightly.',
      'Identify the one cultural or capability gap that is costing you most, and build a 90-day plan to address it specifically.',
      'Look at your last three major commitments. Were they completed on time, by the right people, with measurable outcomes? If not — that is where to start.',
    ],
  },
  {
    min: 22, max: 32,
    name: 'The Emerging Strategist',
    tagline: 'Direction is forming and ambition is clear, but structure and alignment need to catch up. The foundation is ready to be built.',
    summary: 'You are at an important inflection point. The ideas are there, the will is there — but the systems and shared clarity are not yet keeping pace with where you want to go. This is not a sign of weakness; it is a sign that you have outgrown your current approach and need to build something more deliberate.',
    steps: [
      'Start with a single, written strategic statement that your leadership team agrees on. Test it by asking each person independently what it means to them.',
      'Map the gap between your current team capability and the capability your strategy actually requires. Be honest about what you see.',
      'Build one execution habit: a regular rhythm where decisions get made, progress is reviewed, and accountability is shared — consistently.',
    ],
  },
  {
    min: 10, max: 21,
    name: 'The Honest Starter',
    tagline: 'Important gaps are present across multiple areas. The most powerful thing you can do right now is exactly what you are doing — looking clearly at the truth.',
    summary: 'Taking this diagnostic is itself an act of leadership. What the results are showing is not failure — it is the starting point. Many of the organisations that have made the most profound transformations began exactly here: with a leader willing to see clearly, say it honestly, and do the work without pretending it was already done.',
    steps: [
      'Do not try to fix everything at once. Identify the single most important gap — the one that, if addressed, would unlock progress in the others.',
      'Have an honest conversation with your leadership team about what the diagnostic revealed. Shared awareness is the first building block of shared direction.',
      'Consider bringing in outside perspective — a consultant, coach, or strategic partner — not to hand you answers, but to help you build the capacity to find your own.',
    ],
  },
];

type Screen = 'gate' | 'questions' | 'results';

interface AreaResult {
  area: typeof DAREAS[0];
  score: number;
}

interface Results {
  total: number;
  profile: Profile;
  areaScores: AreaResult[];
}

export default function ClarityDiagnostic({ onBack }: { onBack: () => void }) {
  const [screen, setScreen] = useState<Screen>('gate');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(10).fill(null));
  const [current, setCurrent] = useState(0);
  const [results, setResults] = useState<Results | null>(null);

  // Email gate validation
  const gateValid = name.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  function startDiagnostic() {
    setAnswers(new Array(10).fill(null));
    setCurrent(0);
    setScreen('questions');
  }

  function selectAnswer(value: number) {
    const newAnswers = [...answers];
    newAnswers[current] = value;
    setAnswers(newAnswers);
  }

  function goNext() {
    if (answers[current] === null) return;
    if (current < 9) {
      setCurrent(current + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      showResults();
    }
  }

  function goPrev() {
    if (current > 0) {
      setCurrent(current - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function showResults() {
    const areaScoreNums = [0, 0, 0, 0, 0];
    DQUESTIONS.forEach((q, i) => {
      areaScoreNums[q.area] += (answers[i] ?? 0);
    });
    const total = areaScoreNums.reduce((a, b) => a + b, 0);
    const profile = DPROFILES.find(p => total >= p.min && total <= p.max) ?? DPROFILES[DPROFILES.length - 1];
    const areaScores = DAREAS.map((area, i) => ({ area, score: areaScoreNums[i] }));
    setResults({ total, profile, areaScores });
    setScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Save submission silently
    fetch('/api/diagnostic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        total,
        profile: profile.name,
        areaScores: areaScoreNums,
        answers,
      }),
    }).catch(() => {/* silent fail */});
  }

  function retake() {
    setAnswers(new Array(10).fill(null));
    setCurrent(0);
    setScreen('gate');
  }

  const q = DQUESTIONS[current];
  const area = DAREAS[q?.area ?? 0];
  const pct = Math.round((current / 10) * 100);

  return (
    <div>
      {/* Back link */}
      <div style={{ padding: '16px 20px 0', maxWidth: '700px', margin: '0 auto' }}>
        <button
          onClick={onBack}
          style={{ background: 'none', border: 'none', color: 'var(--cfg-gold)', fontSize: '13px', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}
        >
          &#8592; Back to Resources
        </button>
      </div>

      {/* EMAIL GATE */}
      {screen === 'gate' && (
        <div className="diag-wrap">
          <div className="diag-tag">Free Leadership Assessment</div>
          <h1 className="diag-h1">The <em>Clarity-First</em> Diagnostic</h1>
          <p className="diag-lead">Ten honest questions that reveal where your business strategy is strong, where it is fragile, and what to prioritise first.</p>
          <p className="diag-lead">Enter your details below to access your free assessment and receive your personalised leadership profile instantly.</p>

          <div style={{ background: 'rgba(255,255,255,0.05)', border: '0.5px solid var(--border)', borderRadius: '10px', padding: '24px 22px', margin: '24px 0' }}>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--cfg-gold)', marginBottom: '6px' }}>Your name</label>
              <input
                type="text"
                placeholder="e.g. Maria Santos"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ width: '100%', fontSize: '14px', padding: '10px 12px', border: '0.5px solid var(--border-strong)', borderRadius: '8px', background: 'rgba(255,255,255,0.07)', color: '#fff', fontFamily: 'inherit', outline: 'none' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--cfg-gold)', marginBottom: '6px' }}>Email address</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ width: '100%', fontSize: '14px', padding: '10px 12px', border: '0.5px solid var(--border-strong)', borderRadius: '8px', background: 'rgba(255,255,255,0.07)', color: '#fff', fontFamily: 'inherit', outline: 'none' }}
              />
            </div>
            <button
              className="btn-primary"
              style={{ width: '100%', opacity: gateValid ? 1 : 0.4, pointerEvents: gateValid ? 'auto' : 'none', transition: 'opacity .2s' }}
              onClick={startDiagnostic}
            >
              Start the diagnostic &rarr;
            </button>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '12px', lineHeight: '1.6' }}>&#128274; Your information is never shared. By submitting you agree to receive your results and occasional insights from Change For Good Consulting. Unsubscribe anytime.</p>
          </div>

          <div className="diag-how">
            <div className="diag-how-title">What you will get</div>
            <div className="diag-steps">
              <div className="diag-step"><div className="diag-step-num">10</div><p>Honest questions across 5 leadership areas</p></div>
              <div className="diag-step"><div className="diag-step-num">5&rsquo;</div><p>Takes about five minutes to complete</p></div>
              <div className="diag-step"><div className="diag-step-num">1</div><p>Personalised profile with next steps &mdash; instantly</p></div>
            </div>
          </div>
        </div>
      )}

      {/* QUESTIONS */}
      {screen === 'questions' && (
        <div className="diag-wrap">
          <div className="diag-prog-wrap">
            <div className="diag-prog-meta">
              <span>Question {current + 1} of 10</span>
              <span>{pct}% complete</span>
            </div>
            <div className="diag-prog-track">
              <div className="diag-prog-fill" style={{ width: `${pct}%` }}></div>
            </div>
          </div>

          <div className="diag-area-header">
            <div className="diag-area-icon">{area.icon}</div>
            <div>
              <div className="diag-area-name">{area.title}</div>
              <div className="diag-area-desc">{area.desc}</div>
            </div>
          </div>

          <div className="diag-qcard">
            <div className="diag-qnum">Question {current + 1}</div>
            <div className="diag-qtext">{q.text}</div>
            <div className="diag-scale">
              {DSCALE.map(s => (
                <div
                  key={s.value}
                  className={`diag-opt${answers[current] === s.value ? ' sel' : ''}`}
                  onClick={() => selectAnswer(s.value)}
                >
                  <div className="diag-onum">{s.value}</div>
                  <div className="diag-olabel">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="diag-nav">
            <button
              className="diag-back"
              onClick={goPrev}
              style={{ visibility: current === 0 ? 'hidden' : 'visible' }}
            >
              &#8592; Back
            </button>
            <button
              className={`diag-next${answers[current] !== null ? ' on' : ''}`}
              onClick={goNext}
            >
              {current === 9 ? 'See my results →' : 'Next →'}
            </button>
          </div>
        </div>
      )}

      {/* RESULTS */}
      {screen === 'results' && results && (
        <div className="diag-wrap">
          <div className="diag-results-hero">
            <div className="diag-score-ring">
              <div className="diag-score-num">{results.total}</div>
              <div className="diag-score-den">out of 50</div>
            </div>
            <div className="diag-profile-name">{results.profile.name}</div>
            <div className="diag-profile-tag">{results.profile.tagline}</div>
          </div>

          <div className="diag-actions">
            <button className="btn-primary" onClick={() => window.print()}>&#8595; Download results (PDF)</button>
            <button className="btn-outline" onClick={retake}>Retake diagnostic</button>
          </div>

          <p className="slabel">Your results by area</p>
          <div style={{ marginBottom: '20px' }}>
            {results.areaScores.map(({ area: a, score }) => {
              const pctBar = (score / 10) * 100;
              const [badgeClass, barColor, label] =
                score >= 8 ? ['dbadge-s', '#4CAF82', 'Strong'] :
                score >= 5 ? ['dbadge-d', '#D4A017', 'Developing'] :
                             ['dbadge-f', '#E05A5A', 'Fragile'];
              return (
                <div key={a.id} className="diag-area-row">
                  <div className="diag-ar-icon">{a.icon}</div>
                  <div className="diag-ar-body">
                    <div className="diag-ar-title">{a.title}</div>
                    <div className="diag-ar-bar-wrap">
                      <div className="diag-ar-bar" style={{ width: `${pctBar}%`, background: barColor }}></div>
                    </div>
                    <div className="diag-ar-meta"><span>{a.desc}</span><span>{score} / 10</span></div>
                  </div>
                  <span className={`diag-badge ${badgeClass}`}>{label}</span>
                </div>
              );
            })}
          </div>

          <p className="slabel">Your reflection summary</p>
          <div className="diag-reflection">
            {(() => {
              const strong  = results.areaScores.filter(r => r.score >= 8).map(r => r.area.title);
              const fragile = results.areaScores.filter(r => r.score <= 4).map(r => r.area.title);
              const strongText  = strong.length  ? `You are strongest in <strong>${strong.join(' and ')}</strong>. ` : '';
              const fragileText = fragile.length ? `The areas that need the most attention are <strong>${fragile.join(' and ')}</strong>. ` : '';
              return (
                <>
                  <p
                    className="diag-ref-body"
                    dangerouslySetInnerHTML={{ __html: strongText + fragileText + results.profile.summary }}
                  />
                  <p className="slabel" style={{ marginTop: '16px' }}>Suggested next steps</p>
                  <ul className="diag-steps-list">
                    {results.profile.steps.map((s, i) => (
                      <li key={i}>
                        <div className="diag-step-dot">{i + 1}</div>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </>
              );
            })()}
          </div>

          <div className="diag-cta">
            <h3>Ready to close the gap?</h3>
            <p>Your results are a starting point &mdash; not a verdict. A Discovery Call with Chenny Galano is a focused, no-pressure conversation about what the diagnostic revealed and what a realistic path forward looks like for your organisation.</p>
            <div className="diag-cta-btns">
              <a href="mailto:chenny@cfgconsultingph.com?subject=Discovery Call - Clarity-First Diagnostic" className="btn-primary" style={{ textDecoration: 'none', fontSize: '13px' }}>Book a Discovery Call</a>
              <a href="https://linkedin.com/in/chenny-galano" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: 'none', fontSize: '13px' }}>Connect on LinkedIn</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
