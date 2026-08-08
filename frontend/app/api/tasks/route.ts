import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:4000';

export async function GET() {
  const res = await fetch(`${BACKEND_URL}/tasks`, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch tasks from backend' }, { status: 502 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
