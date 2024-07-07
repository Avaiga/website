import Heading from '@/components/pages/pricing/heading/heading';

import Item from './item';

// @TODO: revisit this component, seems a bit too complex

const items = [
  {
    question: 'Is pricing based on users or features?',
    answer: `Pricing is based on users and not features. There are two types of users: `,
    hasListOptions: true,
    options: [
      `Development Users - Creators, builders, developers that are responsible for creating the application.`,
      `Deployment Users – Business Users, users that are responsible for interacting with the application.`,
    ],
    initialState: 'open' as const,
  },
  {
    question: 'Do you require a special license for Testing, Stagings and Backups?',
    answer: `No, a special license is not required. You have complete flexibility how you chose to use your licenses.`,
    hasListOptions: false,
  },
  {
    question: 'Does integration cost extra?',
    answer: `No, we do not charge an extra fee for integration. In-fact we provide examples on how to integrate with disparate data sources and platforms, for example Databricks, Dataiku, Snowflake`,
    hasListOptions: false,
  },
  {
    question: 'Is the price dependent on the Cloud provider?',
    answer:
      'No, Taipy is cloud agnostic. Taipy applications can be deployed on any cloud platform regardless of where the data resides and how it is consumed.',
    hasListOptions: false,
  },
  {
    question: 'Is support included?',
    answer:
      'Yes, support is included as part of the license subscription fee. Specialized/custom support is available on request.',
    hasListOptions: false,
  },
];

function Faq() {
  return (
    <section className="faq mt-[183px] lg:mt-[128px] md:mt-[96px] sm:mt-[80px]">
      <div className="container max-w-[896px] md:max-w-[704px]">
        <Heading text="Frequently asked questions" />
        <ul className="mt-10 lg:mt-6 md:mt-[18px] sm:mt-[10px]">
          {items.map((item, index) => (
            <Item {...item} key={index} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Faq;
