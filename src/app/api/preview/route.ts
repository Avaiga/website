/* eslint-disable import/prefer-default-export */
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(request: Request | NextRequest) {
  const { searchParams } = new URL(request.url);

  const secret = searchParams.get('secret');

  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  const redirectUrl = searchParams.get('redirect_url');

  draftMode().enable();

  if (redirectUrl) {
    redirect(redirectUrl);
  }
}
