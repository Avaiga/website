'use client';

import { useState } from 'react';

import clsx from 'clsx';
import { LazyMotion, domAnimation, m } from 'framer-motion';

import ArrowIcon from '@/svgs/pages/pricing/faq/new-arrow.inline.svg';

type ItemProps = {
  question: string;
  answer: string;
  options?: string[];
  initialState?: 'open' | 'closed';
  index: number;
};

function Item({ question, answer, options, initialState = 'closed', index }: ItemProps) {
  const [isOpen, setIsOpen] = useState(initialState === 'open');

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li className="border-b border-grey-20 py-4">
      <button
        className="relative flex w-full items-center gap-3 text-left after:absolute after:-inset-y-3.5 after:left-0 after:w-full sm:gap-[9px]"
        type="button"
        aria-expanded={isOpen}
        aria-controls={`question-${index}`}
        onClick={handleOpen}
      >
        <h3 className="text-20 font-medium leading-dense tracking-tight md:text-16">{question}</h3>
        <ArrowIcon
          className={clsx(
            'ml-auto h-8 w-8 shrink-0 rotate-180 transition-[fill,transform] duration-200',
            {
              'rotate-[0px]': isOpen,
            },
          )}
          aria-hidden
        />
      </button>
      <LazyMotion features={domAnimation}>
        <m.div
          className="max-w-[720px]"
          id={`question-${index}`}
          initial={initialState}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: {
              opacity: 1,
              height: 'auto',
              pointerEvents: 'auto',
            },
            closed: {
              opacity: 0,
              height: 0,
              pointerEvents: 'none',
            },
          }}
          transition={{
            opacity: { duration: 0.2 },
            height: { duration: 0.3 },
          }}
        >
          <div className="flex max-w-[720px] flex-col gap-0.5 pr-6 pt-4 text-16 text-grey-80 lg:pr-0.5 md:pb-[7px] md:pt-2.5 md:text-14 sm:gap-px sm:pb-1">
            <p className="leading-snug tracking-normal">{answer}</p>
            {options && (
              <ul className="flex list-none flex-col gap-0.5 pl-0">
                {options.map((optionText, i) => (
                  <li
                    key={i}
                    className="relative flex items-center pl-4 text-16 leading-snug tracking-normal before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary-red lg:pl-[13px] md:pl-4 md:text-14"
                  >
                    {optionText}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </m.div>
      </LazyMotion>
    </li>
  );
}

export default Item;
