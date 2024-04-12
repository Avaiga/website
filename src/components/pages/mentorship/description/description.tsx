import Image from 'next/image';

import calendarIcon from '@/svgs/pages/book-a-call/description/calendar.svg';
import lampIcon from '@/svgs/pages/book-a-call/description/lamp.svg';
import peopleIcon from '@/svgs/pages/book-a-call/description/people.svg';

const CARDS = [
  {
    icon: peopleIcon,
    text: 'Taipy is a community-driven project and your help is extremely welcome. Embrace the opportunity to contribute and embark on the Taipy journey.',
  },
  {
    icon: lampIcon,
    text: 'If you are new to open source and Taipy, our informal mentoring program will help you become more familiar with Taipy and the open source environment.',
  },
  {
    icon: calendarIcon,
    text: "The mentoring duration varies from weeks to months based on each case. We'll assist in selecting an engaging topic or you can choose your own.",
  },
];

function Description() {
  return (
    <section className="description mt-[120px] md:mt-24 sm:mt-20">
      <div className="container max-w-5xl">
        <ul className="grid grid-cols-3 gap-x-24 md:gap-x-10 sm:grid-cols-1 sm:gap-y-8">
          {CARDS.map(({ icon, text }, index) => (
            <li key={index}>
              <Image className="mx-auto mb-4" src={icon} alt="" width={32} height={32} />
              <p className="text-center leading-snug text-grey-70">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Description;
