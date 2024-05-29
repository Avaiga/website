'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { Suspense, useEffect } from 'react';

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
    <div className="fixed left-0 top-0 z-[9999] h-full w-full bg-white text-transparent">
      Redirect
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
