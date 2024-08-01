import Heading from '@/components/pages/pricing/heading/heading';

import { FaqProps } from '@/types/pricing-page';

import Item from './item';

function Faq({ heading, items }: FaqProps) {
  return (
    <section className="faq mt-[183px] lg:mt-[128px] md:mt-[96px] sm:mt-[80px]">
      <div className="container max-w-[896px] md:max-w-[704px]">
        <Heading text={heading} />
        <ul className="mt-10 lg:mt-6 md:mt-[18px] sm:mt-[10px]">
          {items.map((item, index) => {
            const initialState = index === 0 ? 'open' : 'closed';
            if (item._type === 'faqItem') {
              return (
                <Item
                  key={index}
                  question={item.question}
                  answer={item.simpleAnswer}
                  index={index}
                  initialState={initialState}
                />
              );
            } else if (item._type === 'faqItemWithList') {
              return (
                <Item
                  key={index}
                  question={item.question}
                  answer={item.detailedAnswer.text}
                  options={item.detailedAnswer.listOfItems}
                  index={index}
                  initialState={initialState}
                />
              );
            }

            return null;
          })}
        </ul>
      </div>
    </section>
  );
}

export default Faq;
