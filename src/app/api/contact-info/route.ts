import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request | NextRequest) {
  const email = request.headers.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 401 });
  }

  const response = await fetch(`https://api.brevo.com/v3/contacts/${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'api-key': process.env.BREVO_API_KEY!,
    },
  });

  const data = await response.json();

  return NextResponse.json(data);
}
