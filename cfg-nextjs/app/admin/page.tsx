'use client';

import { useState } from 'react';

function parseCsv(raw: string) {
  if (!raw.trim()) return { headers: [], rows: [] };
  const lines = raw.trim().split('\n');
  const parse = (line: string) => {
    const cells: string[] = [];
    let cur = '', inQ = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQ && line[i + 1] === '"') { cur += '"'; i++; }
        else inQ = !inQ;
      } else if (ch === ',' && !inQ) {
        cells.push(cur); cur = '';
      } else cur += ch;
    }
    cells.push(cur);
    return cells;
  };
  const headers = parse(lines[0]);
  const rows = lines.slice(1).map(parse);
  return { headers, rows };
}

function downloadCsv(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState<{ contact: string; diagnostic: string; chatbot: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function login() {
    setLoading(true); setError('');
    const res = await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    const json = await res.json();
    setLoading(false);
    if (!res.ok) { setError(json.error ?? 'Error.'); return; }
    setData(json);
  }

  if (!data) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-0)' }}>
        <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '36px 32px', width: '100%', maxWidth: '360px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--cfg-gold)', marginBottom: '8px' }}>Admin</div>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>Submissions</h2>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && login()}
            style={{ width: '100%', fontSize: '15px', padding: '10px 12px', border: '0.5px solid rgba(255,255,255,0.2)', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', color: '#fff', fontFamily: 'inherit', outline: 'none', marginBottom: '12px' }}
          />
          {error && <p style={{ fontSize: '13px', color: '#E05A5A', marginBottom: '10px' }}>{error}</p>}
          <button
            onClick={login}
            disabled={loading}
            style={{ width: '100%', padding: '11px', fontSize: '15px', fontWeight: 600, background: 'var(--cfg-gold)', color: '#1a1560', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
          >
            {loading ? 'Checking…' : 'Log in'}
          </button>
        </div>
      </div>
    );
  }

  const contact = parseCsv(data.contact);
  const diagnostic = parseCsv(data.diagnostic);
  const chatbot = parseCsv(data.chatbot);

  const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: '13px', marginBottom: '24px' };
  const thStyle: React.CSSProperties = { textAlign: 'left', padding: '8px 10px', background: 'rgba(212,160,23,0.15)', color: 'var(--cfg-gold)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.06em', whiteSpace: 'nowrap' };
  const tdStyle: React.CSSProperties = { padding: '8px 10px', color: 'rgba(255,255,255,0.85)', borderBottom: '0.5px solid rgba(255,255,255,0.08)', verticalAlign: 'top', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--surface-0)', padding: '32px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--cfg-gold)' }}>Change For Good Consulting</div>
            <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '4px' }}>Submissions Dashboard</h1>
          </div>
          <button onClick={() => setData(null)} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)', fontSize: '13px', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>Log out</button>
        </div>

        {/* CONTACT SUBMISSIONS */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#fff' }}>
              Contact Form — <span style={{ color: 'var(--cfg-gold)' }}>{contact.rows.length} submissions</span>
            </h2>
            <button
              onClick={() => downloadCsv(data.contact, 'cfg-contact-submissions.csv')}
              disabled={!data.contact.trim()}
              style={{ background: 'var(--cfg-gold)', color: '#1a1560', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', opacity: data.contact.trim() ? 1 : 0.4 }}
            >
              ↓ Download CSV
            </button>
          </div>
          {contact.rows.length === 0 ? (
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>No contact submissions yet.</p>
          ) : (
            <div style={{ overflowX: 'auto', borderRadius: '10px', border: '0.5px solid rgba(255,255,255,0.1)' }}>
              <table style={tableStyle}>
                <thead><tr>{contact.headers.map(h => <th key={h} style={thStyle}>{h}</th>)}</tr></thead>
                <tbody>{contact.rows.map((row, i) => (
                  <tr key={i}>{row.map((cell, j) => <td key={j} style={tdStyle} title={cell}>{cell}</td>)}</tr>
                ))}</tbody>
              </table>
            </div>
          )}
        </div>

        {/* CHATBOT LEADS */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#fff' }}>
              Chatbot Leads — <span style={{ color: 'var(--cfg-gold)' }}>{chatbot.rows.length} conversations</span>
            </h2>
            <button
              onClick={() => downloadCsv(data.chatbot, 'cfg-chatbot-leads.csv')}
              disabled={!data.chatbot.trim()}
              style={{ background: 'var(--cfg-gold)', color: '#1a1560', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', opacity: data.chatbot.trim() ? 1 : 0.4 }}
            >
              ↓ Download CSV
            </button>
          </div>
          {chatbot.rows.length === 0 ? (
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>No chatbot leads yet.</p>
          ) : (
            <div style={{ overflowX: 'auto', borderRadius: '10px', border: '0.5px solid rgba(255,255,255,0.1)' }}>
              <table style={tableStyle}>
                <thead><tr>{chatbot.headers.map(h => <th key={h} style={thStyle}>{h}</th>)}</tr></thead>
                <tbody>{chatbot.rows.map((row, i) => (
                  <tr key={i}>{row.map((cell, j) => <td key={j} style={tdStyle} title={cell}>{cell}</td>)}</tr>
                ))}</tbody>
              </table>
            </div>
          )}
        </div>

        {/* DIAGNOSTIC SUBMISSIONS */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#fff' }}>
              Clarity-First Diagnostic — <span style={{ color: 'var(--cfg-gold)' }}>{diagnostic.rows.length} submissions</span>
            </h2>
            <button
              onClick={() => downloadCsv(data.diagnostic, 'cfg-diagnostic-submissions.csv')}
              disabled={!data.diagnostic.trim()}
              style={{ background: 'var(--cfg-gold)', color: '#1a1560', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', opacity: data.diagnostic.trim() ? 1 : 0.4 }}
            >
              ↓ Download CSV
            </button>
          </div>
          {diagnostic.rows.length === 0 ? (
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>No diagnostic submissions yet.</p>
          ) : (
            <div style={{ overflowX: 'auto', borderRadius: '10px', border: '0.5px solid rgba(255,255,255,0.1)' }}>
              <table style={tableStyle}>
                <thead><tr>{diagnostic.headers.map(h => <th key={h} style={thStyle}>{h}</th>)}</tr></thead>
                <tbody>{diagnostic.rows.map((row, i) => (
                  <tr key={i}>{row.map((cell, j) => <td key={j} style={tdStyle} title={cell}>{cell}</td>)}</tr>
                ))}</tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
