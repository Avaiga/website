'use client';

import Cal from '@calcom/embed-react';

function Calendar() {
  return (
    <section className="calendar mt-[72px] lg:mt-16 md:mt-14">
      <div className="container">
        <Cal calLink="team/taipy-sales/30-mon-header-sales-request" />
      </div>
    </section>
  );
}

export default Calendar;
