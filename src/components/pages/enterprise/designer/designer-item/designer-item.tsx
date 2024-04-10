'use client';

import { useState } from 'react';

import clsx from 'clsx';
import { LazyMotion, domAnimation, m } from 'framer-motion';

import ArrowIcon from '@/svgs/pages/pricing/faq/new-arrow.inline.svg';

interface ItemProps {
  question: string;
  answer: string;
  initialState?: 'open' | 'closed';
  index: number;
  setCurrentPicture: () => void;
}

function DesignerItem({
  question,
  answer,
  initialState = 'closed',
  index,
  setCurrentPicture,
}: ItemProps) {
  const [isOpen, setIsOpen] = useState(initialState === 'open');

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
    setCurrentPicture();
  };

  return (
    <li className="border-b border-grey-20 pb-4 pt-[15px]">
      <button
        className="relative flex w-full items-center gap-3 text-left"
        type="button"
        aria-expanded={isOpen}
        aria-controls={index.toString()}
        onClick={handleOpen}
      >
        <h3 className="text-20 font-medium leading-dense tracking-tight lg:text-16">{question}</h3>
        <ArrowIcon
          className={clsx(
            'ml-auto h-8 w-8 shrink-0 transition-[fill,transform] duration-200 lg:h-7 lg:w-7',
            {
              'rotate-0': isOpen,
              'rotate-180': !isOpen,
            },
          )}
          aria-hidden
        />
      </button>
      <LazyMotion features={domAnimation}>
        <m.div
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
          <div className="flex flex-col pb-1.5 pr-[93px] pt-4 text-16  leading-snug text-grey-70 lg:pb-0 lg:pr-16 lg:pt-3.5 lg:text-14">
            <p>{answer}</p>
          </div>
        </m.div>
      </LazyMotion>
    </li>
  );
}

export default DesignerItem;
