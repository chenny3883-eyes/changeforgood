import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const CSV_PATH = path.join(process.cwd(), 'data', 'diagnostic.csv');
const HEADERS = 'timestamp,name,email,total_score,profile,strategic_clarity,leadership_alignment,people_culture,innovation_growth,execution_results,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10\n';

function escapeCsv(val: string | number) {
  const s = String(val ?? '').replace(/"/g, '""');
  return `"${s}"`;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, total, profile, areaScores, answers } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    if (!fs.existsSync(CSV_PATH)) {
      fs.writeFileSync(CSV_PATH, HEADERS, 'utf8');
    }

    const row = [
      new Date().toISOString(),
      name,
      email,
      total,
      profile,
      ...areaScores,
      ...answers,
    ].map(escapeCsv).join(',') + '\n';

    fs.appendFileSync(CSV_PATH, row, 'utf8');

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Diagnostic API error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
