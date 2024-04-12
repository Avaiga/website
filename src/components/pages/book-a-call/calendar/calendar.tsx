'use client';

import Cal from '@calcom/embed-react';

function Calendar() {
  return (
    <section className="calendar pt-[72px] lg:pt-16 md:pt-14">
      <div className="container">
        <Cal calLink="team/taipy-sales/30-mon-header-sales-request" />
      </div>
    </section>
  );
}

export default Calendar;
