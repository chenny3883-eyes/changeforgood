import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Resend } from 'resend';

const CSV_PATH = path.join(process.cwd(), 'data', 'contact.csv');
const HEADERS = 'timestamp,name,email,organization,service,message\n';

function escapeCsv(val: string) {
  const s = String(val ?? '').replace(/"/g, '""');
  return `"${s}"`;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, organization, service, message } = await req.json();

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
        name, email, organization, service, message,
      ].map(escapeCsv).join(',') + '\n';
      fs.appendFileSync(CSV_PATH, row, 'utf8');
    } catch { /* silent on Vercel */ }

    // Send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'CFG Contact Form <onboarding@resend.dev>',
        to: 'cfgconsultingph@gmail.com',
        subject: `New Contact Form Enquiry — ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1560;">
            <div style="background:#2D2380;padding:24px 28px;border-radius:8px 8px 0 0;">
              <h2 style="color:#fff;margin:0;font-size:18px;">New Contact Form Enquiry</h2>
              <p style="color:#D4A017;margin:4px 0 0;font-size:13px;">cfgconsultingph.com</p>
            </div>
            <div style="background:#f9f9f9;padding:24px 28px;border-radius:0 0 8px 8px;border:1px solid #eee;">
              <p style="margin:0 0 4px;"><strong>Name:</strong> ${name}</p>
              <p style="margin:0 0 4px;"><strong>Email:</strong> ${email}</p>
              ${organization ? `<p style="margin:0 0 4px;"><strong>Organisation:</strong> ${organization}</p>` : ''}
              ${service ? `<p style="margin:0 0 4px;"><strong>Service interest:</strong> ${service}</p>` : ''}
              <p style="margin:0 0 4px;"><strong>Submitted:</strong> ${new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' })}</p>
              ${message ? `<div style="margin-top:16px;padding:16px;background:#fff;border-radius:6px;border:1px solid #ddd;"><strong>Message:</strong><p style="margin:8px 0 0;white-space:pre-wrap;">${message}</p></div>` : ''}
              <p style="font-size:12px;color:#999;margin:20px 0 0;">Sent by cfgconsultingph.com</p>
            </div>
          </div>`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
