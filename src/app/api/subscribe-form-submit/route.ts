import { NextRequest, NextResponse } from 'next/server';

import { NEWSLETTER_LIST_ID } from '@/constants/forms';

async function updateContact({ email, listId }: { email: string; listId: number }) {
  const response = await fetch(`https://api.brevo.com/v3/contacts`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'api-key': process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
    }),
  });

  return response;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { listId, email, contactInfo } = body;

    if (!listId || !email) {
      return NextResponse.json(
        { message: 'Missing listId or email', status: 'error' },
        { status: 400 },
      );
    }

    if (contactInfo?.listIds && !contactInfo.listIds.includes(NEWSLETTER_LIST_ID)) {
      const updated = await updateContact({ email, listId: NEWSLETTER_LIST_ID });

      if (updated) {
        return NextResponse.json({ message: 'Contact updated successfully', status: 'success' });
      } else {
        return NextResponse.json(
          { message: 'Failed to update contact', status: 'error' },
          { status: 500 },
        );
      }
    }

    const response = await fetch(`https://api.brevo.com/v3/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();

      return NextResponse.json({ error: errorData.message }, { status: response.status });
    }

    return NextResponse.json({ message: 'New contact created successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
