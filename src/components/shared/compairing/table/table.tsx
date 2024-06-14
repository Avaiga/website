'use client';

import { useEffect, useState } from 'react';

import { PLANS } from '@/constants/plans';
import clsx from 'clsx';

import DoneIcon from '@/svgs/icons/done.inline.svg';
import MinusIcon from '@/svgs/icons/minus.inline.svg';

const rowClass: { [key: string]: string } = {
  '1': 'h-[44px] sm:h-[42px]',
  '2': 'h-[44px] sm:h-[61px]',
  '3': 'h-[44px] sm:h-[80px]',
};

export default function Table() {
  const labelList: { [key: string]: string } = PLANS.labels;
  const [currentRow, setCurrentRow] = useState('');

  useEffect(() => {
    const cells = document.querySelectorAll(`[data-row-id]`);

    cells.forEach((cell) => {
      const rowId = cell.getAttribute('data-row-id') || '';

      cell.addEventListener('mouseenter', () => setCurrentRow(rowId));
      cell.addEventListener('mouseleave', () => setCurrentRow(''));
    });

    return () => {
      cells.forEach((cell) => {
        const rowId = cell.getAttribute('data-row-id') || '';

        cell.removeEventListener('mouseenter', () => setCurrentRow(rowId));
        cell.removeEventListener('mouseleave', () => setCurrentRow(''));
      });
    };
  }, []);

  return (
    <ul className="no-scrollbars relative flex w-full">
      {Object.keys(labelList).map((key, parentIndex) => (
        <li
          className={clsx(
            'bg-transparent',
            parentIndex === 0 && 'flex-1 ',
            parentIndex === 1 && 'basis-[160px] text-center sm:basis-[125px]',
            parentIndex === 2 && 'basis-[224px] text-center sm:basis-[96px]',
          )}
          key={key}
        >
          <span className="text-16 font-medium leading-snug sm:text-14">{labelList[key]}</span>
          <ul className="mt-[25px] flex w-full grow flex-col font-light text-grey-70">
            {PLANS.cols.map((item, index) => {
              const value: { [key: string]: string | boolean } = item;
              if (parentIndex === 0) {
                return (
                  <li
                    className={clsx(
                      'relative flex h-[44px] items-center justify-start border-b border-grey-20 py-3 transition-colors sm:h-[42px]',
                      rowClass[item.rows],
                      value['isRowTitle'] && 'sm:hidden',
                      index === 0 && 'border-t border-grey-20',
                      currentRow === index.toString() && 'bg-[#9e9e9e1d]',
                    )}
                    data-row-id={index}
                    key={index}
                  >
                    <span className="text-15 leading-none sm:text-14 sm:leading-snug">
                      {value['isRowTitle'] ? (
                        <strong className="font-semibold text-white">{value[key]}</strong>
                      ) : (
                        value[key]
                      )}
                    </span>
                  </li>
                );
              }

              return (
                <li
                  className={clsx(
                    'relative flex h-[44px] items-center justify-center border-b border-grey-20 text-center transition-colors sm:h-[42px]',
                    index === 0 && 'border-t border-grey-20',
                    rowClass[item.rows],
                    value['isRowTitle'] && 'sm:hidden',
                    currentRow === index.toString() && 'bg-[#9e9e9e1d]',
                  )}
                  data-row-id={index}
                  key={index}
                >
                  {typeof value[key] === 'boolean' ? (
                    <>
                      {value[key] ? (
                        <DoneIcon className="h-[18px] w-[18px]" />
                      ) : (
                        <MinusIcon className="h-[18px] w-[18px]" />
                      )}
                    </>
                  ) : (
                    <span className="text-15 leading-none sm:text-14 sm:leading-snug">
                      {value[key]}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
}
