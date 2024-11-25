import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ message: 'Email is required', status: 'error' }, { status: 401 });
    }

    const response = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to get contact info from server, please try later', status: 'error' },
      { status: 500 },
    );
  }
}
