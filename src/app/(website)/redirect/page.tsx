'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { Suspense, useEffect } from 'react';

import LoadingIcon from '@/svgs/icons/loading.inline.svg';

function RedirectComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const url = searchParams.get('url');

  useEffect(() => {
    if (url) {
      router.push(url);
    }
  }, [url, router]);

  return (
    <div className="flex min-h-96 items-center justify-center">
      <LoadingIcon className="w-10 animate-spin" />
    </div>
  );
}

function Redirect() {
  return (
    <Suspense fallback={null}>
      <RedirectComponent />
    </Suspense>
  );
}

export default Redirect;
