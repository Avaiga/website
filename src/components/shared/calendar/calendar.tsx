'use client';

import { useEffect, useState } from 'react';

import type { PrefillAndIframeAttrsConfig } from '@calcom/embed-core';
import Cal from '@calcom/embed-react';

/* eslint-disable */
function Calendar({ calLink }: { calLink: string }) {
  const [config, setConfig] = useState<PrefillAndIframeAttrsConfig>({
    theme: 'dark',
    initialPagePath: '',
    'utm-campaign': '',
    'utm-medium': '',
    'utm-source': '',
    'utm-content': '',
    'utm-term': '',
  });

  useEffect(() => {
    const initialPageUrl = localStorage.getItem('initialPageUrl');
    if (initialPageUrl) {
      const url = new URL(initialPageUrl);
      const urlParams = new URLSearchParams(url.search);

      setConfig((prev) => ({
        ...prev,
        initialPagePath: url.pathname,
        'utm-campaign': urlParams.get('utm_campaign') || '',
        'utm-medium': urlParams.get('utm_medium') || '',
        'utm-source': urlParams.get('utm_source') || '',
        'utm-content': urlParams.get('utm_content') || '',
        'utm-term': urlParams.get('utm_term') || '',
      }));
    }
  }, []);

  return (
    <section className="calendar mt-[72px] lg:mt-16 md:mt-14">
      <div className="container min-h-[490px]">
        <Cal
          calLink="pixel-point-devs/15min"
          config={{
            ...config,
          }}
        />
        {/* Only for review and test reasons */}
        {/* <Cal calLink={calLink} config={{ theme: 'dark' }} /> */}
      </div>
    </section>
  );
}

export default Calendar;
