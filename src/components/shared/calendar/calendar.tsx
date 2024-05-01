'use client';

import Cal from '@calcom/embed-react';

function Calendar({ calLink }: { calLink: string }) {
  return (
    <section className="calendar mt-[72px] lg:mt-16 md:mt-14">
      <div className="container min-h-[490px]">
        <Cal calLink={calLink} config={{ theme: 'dark' }} />
      </div>
    </section>
  );
}

export default Calendar;
