import clsx from 'clsx';

import ArrowIcon from '@/svgs/icons/arrow-right-rounded.inline.svg';

interface ItemProps {
  question: string;
  answer: string;
  hasListOptions: boolean;
  options?: string[];
  isOpen: boolean;
}

function Item({ question, answer, hasListOptions, options = [], isOpen }: ItemProps) {
  return (
    <li className="border-b border-grey-20 py-3.5 leading-snug">
      <div className="flex w-full items-start gap-4 text-left">
        <button
          className="relative flex w-full items-start gap-3 text-left after:absolute after:-inset-y-3.5 after:left-0 after:w-full sm:gap-[9px]"
          type="button"
        >
          <ArrowIcon
            className={clsx(
              'h-6 w-6 shrink-0',
              isOpen
                ? 'rotate-90 border-primary-red fill-primary-red text-white'
                : 'text-primary-red',
            )}
            aria-hidden
          />
          <h3 className="text-18 font-medium md:text-16">{question}</h3>
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-0.5 py-2.5 pl-9 pr-6 text-16 text-grey-80 lg:pr-0.5 md:pb-[7px] md:pt-2.5 md:text-14 sm:gap-px sm:pb-1">
          <p>{answer}</p>
          {hasListOptions && (
            <ul className="flex list-none flex-col gap-0.5 pl-0">
              {options.map((optionText, index) => (
                <li
                  key={index}
                  className="relative flex items-center pl-4 text-16 before:absolute before:left-[3px] before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary-red before:content-[''] lg:pl-[13px] md:pl-4 md:text-14"
                >
                  {optionText}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </li>
  );
}

export default Item;
