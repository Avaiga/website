import clsx from 'clsx';
import { LazyMotion, domAnimation, m } from 'framer-motion';

import ArrowIcon from '@/svgs/pages/pricing/faq/new-arrow.inline.svg';

interface ItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  handleItemClick: () => void;
}

function DesignerItem({ question, answer, isOpen, handleItemClick, index }: ItemProps) {
  return (
    <li className="border-b border-grey-20 pb-4 pt-[15px]">
      <button
        className={clsx(
          'group relative flex w-full items-center gap-3 text-left',
          isOpen ? 'cursor-default' : 'cursor-pointer',
        )}
        type="button"
        aria-expanded={isOpen}
        aria-controls={index.toString()}
        onClick={handleItemClick}
      >
        <h3
          className={clsx(
            'text-20 font-medium leading-dense tracking-tight lg:text-16',
            isOpen ? 'cursor-default' : 'group-hover:text-[#C8CAD0]',
          )}
        >
          {question}
        </h3>

        <ArrowIcon
          className={clsx(
            'ml-auto h-8 w-8 shrink-0 opacity-80 transition-[fill,transform] duration-200 lg:h-7 lg:w-7',
            isOpen ? ['rotate-0', 'opacity-80'] : ['rotate-180', 'group-hover:opacity-100'],
          )}
          aria-hidden
        />
      </button>
      <LazyMotion features={domAnimation}>
        <m.div
          id={index.toString()}
          initial="closed"
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
