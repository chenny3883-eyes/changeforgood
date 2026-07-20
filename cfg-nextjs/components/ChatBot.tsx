'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// ── TYPES ─────────────────────────────────────────────────────
type ChatStep =
  | 'idle'
  | 'ask-name'
  | 'ask-challenge'
  | 'ask-context'
  | 'ask-explore'
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
}

interface QROption {
  v: string;
  l: string;
}

type MessageRole = 'bot' | 'user';

interface Message {
  id: number;
  role: MessageRole;
  text: string;
}

interface TypingState {
  active: boolean;
}

let msgId = 0;

export default function ChatBot() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [quickReplies, setQuickReplies] = useState<QROption[]>([]);
  const [typing, setTyping] = useState<TypingState>({ active: false });
  const [inputVal, setInputVal] = useState('');

  const stepRef = useRef<ChatStep>('idle');
  const dataRef = useRef<ChatData>({ name: '', challenge: '', context: '', email: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing, quickReplies]);

  // ── HELPERS ─────────────────────────────────────────────────
  function addMsg(role: MessageRole, text: string) {
    setMessages(prev => [...prev, { id: ++msgId, role, text }]);
  }

  const botTypeThen = useCallback((text: string, qrs?: QROption[]) => {
    setQuickReplies([]);
    setTyping({ active: true });
    const delay = Math.min(600 + text.length * 12, 2200);
    setTimeout(() => {
      setTyping({ active: false });
      addMsg('bot', text);
      if (qrs) setQuickReplies(qrs);
    }, delay);
  }, []);

  // ── OPEN / CLOSE ────────────────────────────────────────────
  const openChat = useCallback(() => {
    setOpen(true);
    if (stepRef.current === 'idle') {
      stepRef.current = 'ask-name';
      setTimeout(() => {
        botTypeThen("Hi there! I'm the Change For Good assistant — here to help you find the right path forward.\n\nTo start, what's your name?");
      }, 400);
    }
  }, [botTypeThen]);

  function closeChat() {
    setOpen(false);
  }

  // Listen for global open event (from Home page button)
  useEffect(() => {
    const handler = () => openChat();
    window.addEventListener('cfg:openChat', handler);
    return () => window.removeEventListener('cfg:openChat', handler);
  }, [openChat]);

  // ── RECOMMENDATION MAP ────────────────────────────────────
  function getRecommendation(): { service: string; note: string } {
    const c = dataRef.current.challenge;
    if (c === 'strategy')   return { service: 'Strategy Consulting',             note: "We'll start with an honest diagnosis of where things are before prescribing anything." };
    if (c === 'alignment')  return { service: 'Leadership Alignment & Coaching', note: "The goal is a team that moves in the same direction — without Chenny having to push." };
    if (c === 'growth')     return { service: 'Business Development',            note: "We'll map the gap between where you are and the growth you're aiming for." };
    if (c === 'coaching')   return { service: 'Coaching for Infinite Growth',    note: "This is one of Chenny's most personal and transformative offerings." };
    return                         { service: 'Change For Good Consulting',      note: "Chenny will find the right fit for where you are right now." };
  }

  // ── STEP HANDLER ────────────────────────────────────────────
  function handleStep(input: string) {
    switch (stepRef.current) {

      case 'ask-name':
        dataRef.current.name = input.split(' ')[0];
        stepRef.current = 'ask-challenge';
        botTypeThen(
          `Great to meet you, ${dataRef.current.name}! What best describes why you're here today?`,
          [
            { v: 'strategy',  l: 'I need a clearer strategy' },
            { v: 'alignment', l: "My team isn't aligned" },
            { v: 'growth',    l: 'I want to grow but need direction' },
            { v: 'coaching',  l: "I'm looking for a coach" },
            { v: 'exploring', l: 'Just exploring' },
          ]
        );
        break;

      case 'ask-challenge':
        dataRef.current.challenge = input;
        stepRef.current = 'ask-context';
        if (input === 'strategy') {
          botTypeThen('Strategy is exactly where we start. What industry are you in?', [
            { v: 'Financial services',   l: 'Financial services' },
            { v: 'Aviation / Transport', l: 'Aviation / Transport' },
            { v: 'Social enterprise',    l: 'Social enterprise' },
            { v: 'SME / Startup',        l: 'SME / Startup' },
            { v: 'Other',                l: 'Other' },
          ]);
        } else if (input === 'alignment') {
          botTypeThen('Alignment challenges are more common than most leaders admit — and very fixable. How large is your team?', [
            { v: 'Small (under 20)', l: 'Small (under 20)' },
            { v: 'Medium (20–100)',  l: 'Medium (20–100)' },
            { v: 'Large (100+)',     l: 'Large (100+)' },
          ]);
        } else if (input === 'growth') {
          botTypeThen("Growth with direction — that's exactly what we help build. Which best describes your organisation?", [
            { v: 'Startup',           l: 'Startup' },
            { v: 'Established SME',   l: 'Established SME' },
            { v: 'Social enterprise', l: 'Social enterprise' },
            { v: 'Other',             l: 'Other' },
          ]);
        } else if (input === 'coaching') {
          botTypeThen("Coaching for Infinite Growth is one of Chenny's most transformative offerings. Is the coaching for yourself or for a leadership team?", [
            { v: 'For myself', l: 'For myself' },
            { v: 'For my team', l: 'For my team' },
            { v: 'Both', l: 'Both' },
          ]);
        } else {
          // exploring
          stepRef.current = 'ask-explore';
          botTypeThen("No pressure at all — take your time. Is there a particular area you're curious about?", [
            { v: 'Strategy',        l: 'Strategy' },
            { v: 'Innovation',      l: 'Innovation' },
            { v: 'Coaching',        l: 'Coaching' },
            { v: 'All of the above', l: 'All of the above' },
          ]);
        }
        break;

      case 'ask-explore':
        dataRef.current.context = input;
        stepRef.current = 'ask-email-soft';
        botTypeThen(`${input} — great area to explore. We have a lot to share there.\n\nWould you like to leave your email so Chenny can reach out when you're ready?`, [
          { v: 'yes-email', l: "Sure, I'd love that" },
          { v: 'no-email',  l: 'Maybe later' },
        ]);
        break;

      case 'ask-email-soft':
        if (input === 'no-email') {
          stepRef.current = 'done';
          botTypeThen(`No problem at all, ${dataRef.current.name}. Feel free to explore the site — and come back anytime. 👋`, [
            { v: 'services',   l: 'Explore services' },
            { v: 'diagnostic', l: 'Take the Diagnostic' },
          ]);
        } else {
          stepRef.current = 'ask-email';
          botTypeThen("What's the best email address for Chenny to reach you?");
        }
        break;

      case 'ask-context':
        dataRef.current.context = input;
        stepRef.current = 'ask-email';
        botTypeThen("Got it. One last thing — what's the best email for Chenny to reach you?");
        break;

      case 'ask-email': {
        if (!input.includes('@')) {
          botTypeThen("Could you double-check that email address? It doesn't look quite right.");
          break;
        }
        dataRef.current.email = input;
        stepRef.current = 'closing';
        const rec = getRecommendation();
        botTypeThen(
          `Thank you, ${dataRef.current.name}! 🙏\n\nBased on what you've shared, <strong>${rec.service}</strong> sounds like the right starting point.\n\n${rec.note}\n\nChenny personally reviews every message and will be in touch within 24 hours.`,
          [
            { v: 'services',   l: 'Explore services' },
            { v: 'diagnostic', l: 'Take the Diagnostic' },
            { v: 'done',       l: "That's all, thanks!" },
          ]
        );
        break;
      }

      case 'closing':
      case 'done':
        if (input === 'services') {
          closeChat();
          router.push('/services');
        } else if (input === 'diagnostic') {
          closeChat();
          router.push('/resources');
          // Signal resources page to open diagnostic
          setTimeout(() => window.dispatchEvent(new CustomEvent('cfg:openDiagnostic')), 300);
        } else {
          stepRef.current = 'ended';
          botTypeThen(`Wonderful. Looking forward to the conversation, ${dataRef.current.name}. 👋`);
          setTimeout(closeChat, 3000);
        }
        break;
    }
  }

  // ── SEND ────────────────────────────────────────────────────
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
      {/* FAB */}
      <button className="chat-fab" onClick={openChat} title="Start the conversation">
        <svg viewBox="0 0 24 24">
          <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
      </button>

      {/* PANEL */}
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

          {typing.active && (
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
