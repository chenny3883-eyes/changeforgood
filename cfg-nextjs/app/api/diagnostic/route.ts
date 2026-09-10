import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Resend } from 'resend';

const CSV_PATH = path.join(process.cwd(), 'data', 'diagnostic.csv');
const HEADERS = 'timestamp,diagnostic,name,email,total_score,profile,area1,area2,area3,area4,area5,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10\n';

const CLARITY_AREA_LABELS = ['Strategic Clarity', 'Leadership Alignment', 'People & Culture', 'Innovation & Growth', 'Execution & Results'];
const INNOVATION_AREA_LABELS = ['Innovation Leadership', 'People & Mindset', 'Culture & Environment', 'Feasibility & Capacity', 'Market-Centredness'];

function escapeCsv(val: string | number) {
  const s = String(val ?? '').replace(/"/g, '""');
  return `"${s}"`;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, total, profile, areaScores, answers, diagnostic } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    // Save to CSV (works locally)
    try {
      if (!fs.existsSync(CSV_PATH)) {
        fs.writeFileSync(CSV_PATH, HEADERS, 'utf8');
      }
      const row = [
        new Date().toISOString(),
        diagnostic ?? 'clarity-first',
        name, email, total, profile,
        ...areaScores, ...answers,
      ].map(escapeCsv).join(',') + '\n';
      fs.appendFileSync(CSV_PATH, row, 'utf8');
    } catch { /* silent on Vercel — filesystem not writable */ }

    // Send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const diagLabel = diagnostic === 'innovation-readiness' ? 'Innovation Readiness' : 'Clarity-First Leadership';
      const areaLabels = diagnostic === 'innovation-readiness' ? INNOVATION_AREA_LABELS : CLARITY_AREA_LABELS;

      const areaRows = areaLabels.map((label, i) =>
        `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;">${label}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:700;">${areaScores[i]} / 10</td></tr>`
      ).join('');

      await resend.emails.send({
        from: 'CFG Diagnostics <onboarding@resend.dev>',
        to: 'cfgconsultingph@gmail.com',
        subject: `New ${diagLabel} Diagnostic — ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1560;">
            <div style="background:#2D2380;padding:24px 28px;border-radius:8px 8px 0 0;">
              <h2 style="color:#fff;margin:0;font-size:18px;">New Diagnostic Submission</h2>
              <p style="color:#D4A017;margin:4px 0 0;font-size:13px;">${diagLabel} Diagnostic</p>
            </div>
            <div style="background:#f9f9f9;padding:24px 28px;border-radius:0 0 8px 8px;border:1px solid #eee;">
              <p style="margin:0 0 4px;"><strong>Name:</strong> ${name}</p>
              <p style="margin:0 0 4px;"><strong>Email:</strong> ${email}</p>
              <p style="margin:0 0 20px;"><strong>Submitted:</strong> ${new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' })}</p>

              <h3 style="font-size:15px;margin:0 0 8px;">Result: ${profile}</h3>
              <p style="font-size:28px;font-weight:800;color:#2D2380;margin:0 0 20px;">${total} / 50</p>

              <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:20px;">
                <thead><tr style="background:#2D2380;color:#fff;">
                  <th style="padding:8px 12px;text-align:left;">Area</th>
                  <th style="padding:8px 12px;text-align:left;">Score</th>
                </tr></thead>
                <tbody>${areaRows}</tbody>
              </table>

              <p style="font-size:12px;color:#999;margin:0;">Sent by cfgconsultingph.com</p>
            </div>
          </div>`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Diagnostic API error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
