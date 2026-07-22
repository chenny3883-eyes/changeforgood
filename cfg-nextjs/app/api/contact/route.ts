import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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

    if (!fs.existsSync(CSV_PATH)) {
      fs.writeFileSync(CSV_PATH, HEADERS, 'utf8');
    }

    const row = [
      new Date().toISOString(),
      name, email, organization, service, message,
    ].map(escapeCsv).join(',') + '\n';

    fs.appendFileSync(CSV_PATH, row, 'utf8');

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
