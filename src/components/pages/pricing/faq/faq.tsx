import Heading from '@/components/pages/pricing/heading/heading';

import Item from './item';

const items = [
  {
    question: 'Is pricing based on users or features?',
    answer: `Pricing is based on users and not features.There are two types of users: `,
    hasListOptions: true,
    options: [
      `Development Users - Creators, builders, developers that are responsible for creating the application.`,
      `Deployment Users – Business Users, users that are responsible for interacting with the application.`,
    ],
  },
  {
    question: 'Do you require a special license for Testing, Stagings and Backups?',
    answer: `Pricing is based on users and not features.There are two types of users: `,
    hasListOptions: true,
    options: [
      `Development Users - Creators, builders, developers that are responsible for creating the application.`,
      `Deployment Users – Business Users, users that are responsible for interacting with the application.`,
    ],
  },
  {
    question: 'Does integration cost extra?',
    answer: `Pricing is based on users and not features.There are two types of users: `,
    hasListOptions: true,
    options: [
      `Development Users - Creators, builders, developers that are responsible for creating the application.`,
      `Deployment Users – Business Users, users that are responsible for interacting with the application.`,
    ],
  },
  {
    question: 'Is the price dependent on the Cloud provider?',
    answer: 'Pricing is based on users and not features.There are two types of users: ',
    hasListOptions: false,
  },
  {
    question: 'Is support included?',
    answer: 'Pricing is based on users and not features.There are two types of users: ',
    hasListOptions: false,
  },
];

function Faq() {
  return (
    <section className="faq mt-[165px] lg:mt-[128px] md:mt-[96px] sm:mt-[80px]">
      <div className="container max-w-[1024px] lg:max-w-[896px] md:max-w-[704px]">
        <Heading text="Frequently asked questions" />
        <ul className="mt-[30px] lg:mt-6 md:mt-[18px] sm:mt-[10px]">
          {items.map((item, index) => (
            <Item {...item} key={index} isOpen={index === 0} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Faq;
