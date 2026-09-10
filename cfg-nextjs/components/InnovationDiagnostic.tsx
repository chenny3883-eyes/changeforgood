'use client';

import { useState } from 'react';

// ── DATA ──────────────────────────────────────────────────────
const IAREAS = [
  { id: 'leadership',   icon: '🧭', title: 'Innovation Leadership',    desc: 'Does leadership champion and model innovation?' },
  { id: 'people',       icon: '🌱', title: 'People & Mindset',          desc: 'Do your people have the curiosity and courage to innovate?' },
  { id: 'culture',      icon: '🔥', title: 'Culture & Environment',     desc: 'Does your culture make space for new ideas and experimentation?' },
  { id: 'feasibility',  icon: '⚙️',  title: 'Feasibility & Capacity',   desc: 'Do you have the resources and systems to execute on new ideas?' },
  { id: 'market',       icon: '🎯', title: 'Market-Centredness',        desc: 'Are you listening to the market and building toward its future?' },
];

const IQUESTIONS = [
  { area: 0, text: 'Our senior leaders actively sponsor innovation initiatives and set aside time to engage with new ideas — not just approve budgets for them.' },
  { area: 0, text: 'When our strategy changes or an experiment fails, our leaders treat it as learning, not failure. Accountability is about growth, not blame.' },
  { area: 1, text: 'Our people regularly ask "what if?" and "why not?" — and they feel safe to raise new ideas to leadership without fear of dismissal.' },
  { area: 1, text: 'We invest in developing the skills our people will need for a future that does not yet look like today — not just the skills the current role demands.' },
  { area: 2, text: 'We have a defined process for capturing, evaluating, and piloting new ideas — and people know how to use it.' },
  { area: 2, text: 'Failure of a well-designed experiment is accepted — even valued — in our organisation. We do not punish smart risks that did not work out.' },
  { area: 3, text: 'We have allocated time, budget, and people specifically for innovation — not just for running the business as usual.' },
  { area: 3, text: 'Our systems and structures (reporting, governance, procurement) are flexible enough to support pilot projects and rapid testing.' },
  { area: 4, text: 'We have a structured way of listening to customers, users, or stakeholders — and what we learn actively shapes what we build next.' },
  { area: 4, text: 'We track signals of change in our sector (technology, regulation, demographics, competitors) and use them to make proactive decisions — not just reactive ones.' },
];

const ISCALE = [
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

const IPROFILES: Profile[] = [
  {
    min: 43, max: 50,
    name: 'The Innovation-Ready Organisation',
    tagline: 'Your organisation has the leadership, culture, and systems to innovate intentionally and at scale. The challenge now is sustaining that edge as the environment keeps shifting.',
    summary: 'You have built the conditions that most organisations only aspire to: leaders who model curiosity, people who feel safe to challenge the status quo, and systems that can actually support new ideas from concept to execution. The risk at this stage is not stagnation — it is drift. High-performing innovative organisations periodically re-examine whether the innovation they are chasing is still the right innovation. The question is no longer "can we?" but "should we, and toward what?"',
    steps: [
      'Conduct an annual innovation portfolio review: are your current bets still aligned with where the market — and your mission — is heading?',
      'Invest in building internal innovation coaches or champions at every level, not just at leadership — so the capacity is distributed, not centralised.',
      'Design for the next horizon: identify emerging technologies, partnerships, or business models that your competitors are ignoring but your stakeholders increasingly need.',
    ],
  },
  {
    min: 33, max: 42,
    name: 'The Emerging Innovator',
    tagline: 'Strong intent and some good foundations are in place. The gaps are real but closeable — what is missing is structure, not will.',
    summary: 'Your organisation wants to innovate, and there are clear pockets where it already does. But the conditions are uneven: some teams have the space and support, others do not. What tends to be missing at this stage is not individual creativity — it is the organisational scaffolding that allows good ideas to survive the journey from individual insight to collective action. The work now is about making innovation less dependent on personality and more built into the system.',
    steps: [
      'Map where innovation is already happening in your organisation — then ask why it is working there and what would need to change for it to work everywhere.',
      'Establish a simple, shared innovation process: how does an idea get submitted, evaluated, resourced, and piloted? Clarity removes the friction that kills good ideas.',
      'Identify and publicly celebrate one experiment that failed but taught the organisation something valuable. This single act does more for culture than any policy.',
    ],
  },
  {
    min: 22, max: 32,
    name: 'The Innovation-Aspiring Organisation',
    tagline: 'The will to change is present, but the systems, culture, and capacity to support it are still forming. This is the hardest — and most important — stage to move through.',
    summary: 'Many organisations live in this zone for years — not because they lack ambition, but because innovation requires changes that touch almost everything: how leaders behave, how people are rewarded, how decisions are made, how risk is viewed. You cannot innovate your way out of a culture that punishes failure or a structure that starves new ideas of time and resources. The most important work here is not generating more ideas — it is removing the barriers that prevent ideas from going anywhere.',
    steps: [
      'Start with leadership: choose one behaviour change that senior leaders will model publicly — curiosity, idea sponsorship, or visible tolerance of smart failure — and hold them to it.',
      'Run one small, time-boxed innovation sprint with a cross-functional team. The goal is not a breakthrough — it is building the muscle and demonstrating that new ways of working are possible here.',
      'Audit your current systems for innovation blockers: procurement timelines, approval layers, budget cycles. Identify the one structural fix that would make the biggest difference.',
    ],
  },
  {
    min: 10, max: 21,
    name: 'The Organisation at a Crossroads',
    tagline: 'Significant gaps exist across most innovation dimensions. The honest truth is that the current system is not built for change — and that is fixable, but only with intentional leadership.',
    summary: 'Taking this diagnostic is itself a meaningful act. It means someone in your organisation is asking the right question at the right time. The results are not a verdict — they are a map. Organisations that have made the most dramatic innovation transformations often started from exactly this position: a system built for stability, suddenly facing a world that requires adaptability. The path forward is not to do everything at once. It is to start with the leaders, the language, and one small proof point that a different way of working is possible.',
    steps: [
      'Commission an honest conversation with your leadership team about why innovation has not taken root — without blame. The barriers are usually structural, not personal.',
      'Choose one innovation pilot: a small, low-stakes project that allows a team to work differently and report back what they learned. Make it visible, make it safe, and celebrate the learning.',
      'Consider engaging an external innovation partner to help you build the internal capacity you need — not to bring the answers, but to build the environment where your own people can find them.',
    ],
  },
];

function RadarChart({ scores }: { scores: number[] }) {
  const cx = 260, cy = 172, R = 90, N = 5;
  const labelR = R + 30;

  const LABELS: string[][] = [
    ['Innovation', 'Leadership'],
    ['People &', 'Mindset'],
    ['Culture &', 'Environment'],
    ['Feasibility &', 'Capacity'],
    ['Market-', 'Centredness'],
  ];

  function pt(r: number, i: number): [number, number] {
    const a = (i * 2 * Math.PI / N) - Math.PI / 2;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  }

  function poly(r: number) {
    return Array.from({ length: N }, (_, i) => pt(r, i).join(',')).join(' ');
  }

  const dataPts = scores.map((s, i) => pt((s / 10) * R, i).join(',')).join(' ');

  return (
    <svg viewBox="0 0 520 340" width="100%" style={{ maxWidth: '480px', display: 'block', margin: '0 auto' }}>
      {[2, 4, 6, 8, 10].map(lv => (
        <polygon key={lv} points={poly((lv / 10) * R)}
          fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
      ))}
      {[2, 6, 10].map(lv => {
        const [x, y] = pt((lv / 10) * R, 0);
        return <text key={lv} x={x + 5} y={y} fontSize="8"
          fill="rgba(255,255,255,0.30)" dominantBaseline="middle">{lv}</text>;
      })}
      {Array.from({ length: N }, (_, i) => {
        const [x2, y2] = pt(R, i);
        return <line key={i} x1={cx} y1={cy} x2={x2} y2={y2}
          stroke="rgba(255,255,255,0.13)" strokeWidth="1" />;
      })}
      <polygon points={dataPts}
        fill="rgba(212,160,23,0.22)" stroke="#D4A017" strokeWidth="2.5" strokeLinejoin="round" />
      {scores.map((s, i) => {
        const [x, y] = pt((s / 10) * R, i);
        return <circle key={i} cx={x} cy={y} r={5}
          fill="#D4A017" stroke="#1a1560" strokeWidth="2" />;
      })}
      {scores.map((s, i) => {
        const inR = Math.max((s / 10) * R - 16, 6);
        const [x, y] = pt(inR, i);
        return <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
          fontSize="10" fill="#F5C842" fontWeight="800" fontFamily="inherit">{s}</text>;
      })}
      {LABELS.map((lines, i) => {
        const a = (i * 2 * Math.PI / N) - Math.PI / 2;
        const cosA = Math.cos(a);
        const [lx, ly] = pt(labelR, i);
        const anchor: 'middle' | 'start' | 'end' = Math.abs(cosA) < 0.3 ? 'middle' : cosA > 0 ? 'start' : 'end';
        const lineH = 14;
        const totalH = lines.length * lineH;
        return (
          <text key={i} textAnchor={anchor} fontSize="11.5" fontFamily="inherit"
            fill="rgba(255,255,255,0.80)">
            {lines.map((line, j) => (
              <tspan key={j} x={lx} y={ly - totalH / 2 + lineH / 2 + j * lineH}>{line}</tspan>
            ))}
          </text>
        );
      })}
    </svg>
  );
}

type Screen = 'gate' | 'questions' | 'results';

interface AreaResult {
  area: typeof IAREAS[0];
  score: number;
}

interface Results {
  total: number;
  profile: Profile;
  areaScores: AreaResult[];
}

export default function InnovationDiagnostic({ onBack }: { onBack: () => void }) {
  const [screen, setScreen] = useState<Screen>('gate');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(10).fill(null));
  const [current, setCurrent] = useState(0);
  const [results, setResults] = useState<Results | null>(null);

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
    setTimeout(() => {
      if (current < 9) {
        setCurrent(current + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 400);
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
    IQUESTIONS.forEach((q, i) => {
      areaScoreNums[q.area] += (answers[i] ?? 0);
    });
    const total = areaScoreNums.reduce((a, b) => a + b, 0);
    const profile = IPROFILES.find(p => total >= p.min && total <= p.max) ?? IPROFILES[IPROFILES.length - 1];
    const areaScores = IAREAS.map((area, i) => ({ area, score: areaScoreNums[i] }));
    setResults({ total, profile, areaScores });
    setScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    fetch('/api/diagnostic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        diagnostic: 'innovation-readiness',
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

  const q = IQUESTIONS[current];
  const area = IAREAS[q?.area ?? 0];
  const pct = Math.round((current / 10) * 100);

  return (
    <div>
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
          <div className="diag-tag">Free Innovation Assessment</div>
          <h1 className="diag-h1">The <em>Innovation Readiness</em> Diagnostic</h1>
          <p className="diag-lead">Ten questions that reveal how ready your organisation is to innovate — across leadership, people, culture, feasibility, and market-centredness.</p>
          <p className="diag-lead">Enter your details below to access your free assessment and receive your organisation&rsquo;s innovation profile instantly.</p>

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
              <div className="diag-step"><div className="diag-step-num">10</div><p>Questions across 5 innovation dimensions</p></div>
              <div className="diag-step"><div className="diag-step-num">5&rsquo;</div><p>Takes about five minutes to complete</p></div>
              <div className="diag-step"><div className="diag-step-num">1</div><p>Organisation innovation profile with next steps &mdash; instantly</p></div>
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
              {ISCALE.map(s => (
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

          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,160,23,0.18)', borderRadius: '14px', padding: '20px 4px 8px', marginBottom: '20px' }}>
            <p className="slabel" style={{ marginBottom: '12px', textAlign: 'center' }}>Your innovation radar</p>
            <RadarChart scores={results.areaScores.map(r => r.score)} />
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
            <h3>Ready to build your innovation capacity?</h3>
            <p>Your results are a starting point &mdash; not a verdict. A Discovery Call with Jimbo Reverente is a focused, no-pressure conversation about what the diagnostic revealed and what a realistic innovation roadmap looks like for your organisation.</p>
            <div className="diag-cta-btns">
              <a href="mailto:chenny@cfgconsultingph.com?subject=Discovery Call - Innovation Readiness Diagnostic" className="btn-primary" style={{ textDecoration: 'none', fontSize: '13px' }}>Book a Discovery Call</a>
              <a href="https://linkedin.com/in/chenny-galano" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: 'none', fontSize: '13px' }}>Connect on LinkedIn</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
