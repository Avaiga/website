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
    answer: '',
    hasListOptions: false,
  },
  {
    question: 'Does integration cost extra?',
    answer: '',
    hasListOptions: false,
  },
  {
    question: 'Is the price dependent on the Cloud provider?',
    answer: '',
    hasListOptions: false,
  },
  {
    question: 'Is support included?',
    answer: '',
    hasListOptions: false,
  },
];

function Faq() {
  return <section className="faq mt-[168px]">
    <div className="container max-w-[1024px]">
      <Heading text="Frequently asked questions" />
      <ul className="mt-[30px]">
        {items.map((item, index) => (
          <Item {...item} key={index} isOpen={index === 0} />
        ))}
      </ul>
    </div>
  </section>
}

export default Faq;
