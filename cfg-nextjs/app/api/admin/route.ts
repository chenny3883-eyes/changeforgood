import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'cfg2026';

function readCsv(filename: string) {
  const p = path.join(process.cwd(), 'data', filename);
  if (!fs.existsSync(p)) return '';
  return fs.readFileSync(p, 'utf8');
}

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
  }

  return NextResponse.json({
    contact: readCsv('contact.csv'),
    diagnostic: readCsv('diagnostic.csv'),
    chatbot: readCsv('chatbot.csv'),
  });
}
