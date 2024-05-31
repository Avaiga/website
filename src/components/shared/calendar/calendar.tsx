'use client';

import { useEffect, useState } from 'react';

import type { PrefillAndIframeAttrsConfig } from '@calcom/embed-core';
import Cal from '@calcom/embed-react';

/* eslint-disable */
function Calendar({ calLink }: { calLink: string }) {
  // TODO: in case of more tasks with getting utm from url, move the logic into hooks
  const [analyticsData, setAnalyticsData] = useState<PrefillAndIframeAttrsConfig>({
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

      setAnalyticsData((prev) => ({
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
            ...analyticsData,
            theme: 'dark',
          }}
        />
        {/* Only for review and test reasons */}
        {/* <Cal calLink={calLink} config={{ theme: 'dark' }} /> */}
      </div>
    </section>
  );
}

export default Calendar;
