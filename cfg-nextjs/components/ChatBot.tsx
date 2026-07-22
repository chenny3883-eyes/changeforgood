'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

type ChatStep =
  | 'idle'
  | 'ask-name'
  | 'ask-challenge'
  | 'ask-context'
  | 'ask-email-soft'
  | 'ask-email'
  | 'closing'
  | 'done'
  | 'ended';

interface ChatData {
  name: string;
  challenge: string;
  context: string;
  email: string;
  recommendation: string;
}

interface QROption { v: string; l: string; }
type MessageRole = 'bot' | 'user';
interface Message { id: number; role: MessageRole; text: string; }

let msgId = 0;

const REC_MAP: Record<string, { service: string; note: string }> = {
  strategy:   { service: 'Strategy Consulting',             note: "We start with an honest diagnosis — no assumptions, no pre-packaged answers. Just a clear picture of where you are and a road map built specifically for you." },
  alignment:  { service: 'Leadership Alignment & Coaching', note: "The goal is a team that moves in the same direction — with shared clarity on purpose, values, and what success actually looks like." },
  growth:     { service: 'Business Development',            note: "We'll map the gap between where you are and the growth you're aiming for — and build a realistic path to get there." },
  coaching:   { service: 'Coaching for Infinite Growth',    note: "This is one of Chenny's most personal offerings — built around the belief that real professional growth and personal growth cannot be separated." },
  innovation: { service: 'Innovation Sprint & Program Design', note: "We use structured methodologies like ExO and Design Thinking to help your team challenge assumptions and bring real ideas to life." },
  default:    { service: 'Change For Good Consulting',      note: "Chenny will find the right fit based on where you are right now. Every engagement starts with listening — not a pitch." },
};

function getRec(challenge: string) {
  return REC_MAP[challenge] ?? REC_MAP.default;
}

export default function ChatBot() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [quickReplies, setQuickReplies] = useState<QROption[]>([]);
  const [typing, setTyping] = useState(false);
  const [inputVal, setInputVal] = useState('');

  const stepRef = useRef<ChatStep>('idle');
  const dataRef = useRef<ChatData>({ name: '', challenge: '', context: '', email: '', recommendation: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing, quickReplies]);

  function addMsg(role: MessageRole, text: string) {
    setMessages(prev => [...prev, { id: ++msgId, role, text }]);
  }

  const botSay = useCallback((text: string, qrs?: QROption[]) => {
    setQuickReplies([]);
    setTyping(true);
    const delay = Math.min(500 + text.length * 10, 2000);
    setTimeout(() => {
      setTyping(false);
      addMsg('bot', text);
      if (qrs) setQuickReplies(qrs);
    }, delay);
  }, []);

  function saveLead() {
    const d = dataRef.current;
    if (!d.name || !d.email) return;
    fetch('/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: d.name,
        email: d.email,
        challenge: d.challenge,
        context: d.context,
        recommendation: d.recommendation,
      }),
    }).catch(() => {/* silent */});
  }

  const openChat = useCallback(() => {
    setOpen(true);
    if (stepRef.current === 'idle') {
      stepRef.current = 'ask-name';
      setTimeout(() => {
        botSay("Hi! I'm the Change For Good assistant — here to help you find the right path forward.\n\nWhat's your name?");
      }, 350);
    }
  }, [botSay]);

  function closeChat() { setOpen(false); }

  useEffect(() => {
    const handler = () => openChat();
    window.addEventListener('cfg:openChat', handler);
    return () => window.removeEventListener('cfg:openChat', handler);
  }, [openChat]);

  function handleStep(input: string) {
    const d = dataRef.current;

    switch (stepRef.current) {

      case 'ask-name': {
        const firstName = input.trim().split(' ')[0];
        d.name = firstName || input.trim();
        stepRef.current = 'ask-challenge';
        botSay(
          `Lovely to meet you, ${d.name}! What brings you here today?`,
          [
            { v: 'strategy',   l: "I need a clearer strategy" },
            { v: 'alignment',  l: "My team isn't aligned" },
            { v: 'growth',     l: "I want to grow but need direction" },
            { v: 'coaching',   l: "I'm looking for a coach" },
            { v: 'innovation', l: "I want to innovate" },
            { v: 'exploring',  l: "Just exploring for now" },
          ]
        );
        break;
      }

      case 'ask-challenge': {
        d.challenge = input;
        stepRef.current = 'ask-context';

        if (input === 'strategy') {
          botSay(
            `Strategy is exactly where we start — and it begins with honest diagnosis, not assumptions.\n\nWhat industry are you in?`,
            [
              { v: 'Financial services',    l: 'Financial services' },
              { v: 'Aviation / Transport',  l: 'Aviation / Transport' },
              { v: 'Social enterprise',     l: 'Social enterprise' },
              { v: 'SME / Startup',         l: 'SME / Startup' },
              { v: 'Education',             l: 'Education' },
              { v: 'Other',                 l: 'Other' },
            ]
          );
        } else if (input === 'alignment') {
          botSay(
            `Alignment challenges are more common than most leaders admit — and very fixable when approached the right way.\n\nHow large is your team?`,
            [
              { v: 'Small (under 20)', l: 'Small (under 20)' },
              { v: 'Medium (20–100)',  l: 'Medium (20–100)' },
              { v: 'Large (100+)',     l: 'Large (100+)' },
            ]
          );
        } else if (input === 'growth') {
          botSay(
            `Growth with direction — that's exactly what we help build. How would you describe your organisation right now?`,
            [
              { v: 'Early-stage startup', l: 'Early-stage startup' },
              { v: 'Established SME',     l: 'Established SME' },
              { v: 'Social enterprise',   l: 'Social enterprise' },
              { v: 'Large organisation',  l: 'Large organisation' },
            ]
          );
        } else if (input === 'coaching') {
          botSay(
            `Coaching for Infinite Growth is one of Chenny's most transformative offerings — built around the belief that real professional growth and personal growth cannot be separated.\n\nIs the coaching for yourself, your leadership team, or both?`,
            [
              { v: 'For myself',   l: 'For myself' },
              { v: 'For my team',  l: 'For my team' },
              { v: 'Both',         l: 'Both' },
            ]
          );
        } else if (input === 'innovation') {
          botSay(
            `Innovation is at the heart of what we do — using frameworks like ExO, Design Thinking, and Systems Thinking to help teams challenge assumptions and build what's next.\n\nWhat's the context?`,
            [
              { v: 'We need a fresh approach to an old problem', l: 'Fresh approach to an old problem' },
              { v: 'We want to build something new',            l: 'Building something new' },
              { v: 'We want to future-proof the organisation',  l: 'Future-proofing the organisation' },
            ]
          );
        } else {
          // exploring or free text
          stepRef.current = 'ask-email-soft';
          botSay(
            `No pressure at all, ${d.name} — this is a good place to start. Is there a particular area you're most curious about?`,
            [
              { v: 'Strategy',   l: 'Strategy' },
              { v: 'Coaching',   l: 'Coaching' },
              { v: 'Innovation', l: 'Innovation' },
              { v: 'All of it',  l: 'All of it, honestly' },
            ]
          );
        }
        break;
      }

      case 'ask-context': {
        d.context = input;
        const rec = getRec(d.challenge);
        d.recommendation = rec.service;
        stepRef.current = 'ask-email';
        botSay(
          `Got it — that's really helpful context, ${d.name}.\n\nBased on what you've shared, <strong>${rec.service}</strong> sounds like a strong fit for where you are.\n\nWhat's the best email for Chenny to reach you? She personally reviews every message.`
        );
        break;
      }

      case 'ask-email-soft': {
        d.context = input;
        stepRef.current = 'ask-email';
        botSay(
          `${input} — great space to explore. We have a lot to share there.\n\nWould you like to leave your email so Chenny can reach out when you're ready? She reads every message personally.`,
          [
            { v: 'yes', l: "Yes, I'd love that" },
            { v: 'no',  l: "Maybe later" },
          ]
        );
        break;
      }

      case 'ask-email': {
        if (input === 'no') {
          stepRef.current = 'done';
          botSay(
            `No problem at all — the door is always open whenever you're ready, ${d.name}.\n\nIn the meantime, feel free to explore:`,
            [
              { v: 'services',    l: 'Explore our services' },
              { v: 'diagnostic',  l: 'Take the free Diagnostic' },
            ]
          );
          break;
        }

        // validate email
        if (!input.includes('@') || !input.includes('.')) {
          botSay(`Hmm, that doesn't look quite right — could you double-check the email address?`);
          break;
        }

        d.email = input;
        const rec = getRec(d.challenge);
        d.recommendation = rec.service || d.recommendation;
        stepRef.current = 'closing';
        saveLead();

        botSay(
          `Thank you, ${d.name}! 🙏\n\n${rec.note}\n\nChenny will be in touch within 24 hours. In the meantime:`,
          [
            { v: 'services',   l: 'Explore our services' },
            { v: 'diagnostic', l: 'Take the free Diagnostic' },
            { v: 'done',       l: "That's all for now" },
          ]
        );
        break;
      }

      case 'closing':
      case 'done': {
        if (input === 'services') {
          closeChat();
          router.push('/services');
        } else if (input === 'diagnostic') {
          closeChat();
          router.push('/resources');
          setTimeout(() => window.dispatchEvent(new CustomEvent('cfg:openDiagnostic')), 300);
        } else {
          stepRef.current = 'ended';
          botSay(`Wonderful. Looking forward to the conversation, ${d.name}. 👋`);
          setTimeout(closeChat, 3000);
        }
        break;
      }

      default: {
        // Fallback for unexpected state
        botSay(`Sorry, I didn't catch that — could you try one of the options below?`, quickReplies.length ? quickReplies : undefined);
        break;
      }
    }
  }

  function chatSend() {
    const text = inputVal.trim();
    if (!text) return;
    setInputVal('');
    setQuickReplies([]);
    addMsg('user', text);
    handleStep(text);
  }

  function quickReply(v: string, l: string) {
    setQuickReplies([]);
    addMsg('user', l);
    handleStep(v);
  }

  return (
    <>
      <button className="chat-fab" onClick={openChat} title="Start the conversation">
        <svg viewBox="0 0 24 24">
          <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
      </button>

      <div className={`chat-panel${open ? ' open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-left">
            <div className="chat-avatar">CFG</div>
            <div>
              <div className="chat-header-name">Change For Good</div>
              <div className="chat-header-status">&#9679; Here to help</div>
            </div>
          </div>
          <button className="chat-close" onClick={closeChat}>&times;</button>
        </div>

        <div className="chat-messages">
          {messages.map(m => (
            <div key={m.id} className={`msg ${m.role}`}>
              {m.role === 'bot' && <div className="msg-avatar">CFG</div>}
              <div
                className="msg-bubble"
                dangerouslySetInnerHTML={{ __html: m.text.replace(/\n/g, '<br>') }}
              />
            </div>
          ))}

          {typing && (
            <div className="msg bot">
              <div className="msg-avatar">CFG</div>
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          )}

          {quickReplies.length > 0 && (
            <div className="quick-replies">
              {quickReplies.map(opt => (
                <button key={opt.v} className="qr-btn" onClick={() => quickReply(opt.v, opt.l)}>
                  {opt.l}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-row">
          <input
            className="chat-input"
            type="text"
            placeholder="Type your reply…"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') chatSend(); }}
          />
          <button className="chat-send" onClick={chatSend}>
            <svg viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
