'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { useEffect } from 'react';

function Redirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const url = searchParams.get('url');

  useEffect(() => {
    document.body.innerHTML = '';
    document.body.style.backgroundColor = 'white';
    if (url) {
      router.push(url);
    }
  }, [url, router]);

  return null;
}

export default Redirect;
