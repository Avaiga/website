import { NextRequest, NextResponse } from 'next/server';

import { FORM_REQUEST_LIST_ID } from '@/constants/forms';

async function updateContact({
  email,
  firstName,
  lastName,
  company,
  jobTitle,
  message,
  listId,
}: {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  message: string;
  listId: number;
}) {
  const response = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'api-key': process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
      attributes: {
        FNAME: firstName,
        LNAME: lastName,
        COMPANY_NAME: company,
        JOB_TITLE: jobTitle,
        MESSAGE: message,
      },
    }),
  });

  return response;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      listId,
      email,
      firstName,
      lastName,
      company,
      jobTitle,
      message,
      checkAgree,
      contactInfo,
    } = body;

    if (!email || !firstName || !lastName || !listId) {
      return NextResponse.json(
        { message: 'Missing required fields', status: 'error' },
        { status: 400 },
      );
    }

    if (contactInfo && contactInfo.listIds) {
      const updated = await updateContact({
        email,
        firstName,
        lastName,
        company,
        jobTitle,
        message,
        listId: FORM_REQUEST_LIST_ID,
      });

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
        attributes: {
          FNAME: firstName,
          LNAME: lastName,
          JOB_TITLE: jobTitle,
          COMPANY_NAME: company,
          MESSAGE: message,
          AGREE_TO_PROCEED: checkAgree,
        },
      }),
    });
    // @ts-expect-error: status comparing
    if (response.status === 'error') {
      const errorData = await response.json();

      return NextResponse.json({ error: errorData.message }, { status: response.status });
    }

    return NextResponse.json({ message: 'Contact created successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
