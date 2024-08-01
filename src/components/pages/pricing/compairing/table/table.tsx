/* eslint-disable no-nested-ternary */
'use client';

import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { CompairingTableProps } from '@/types/pricing-page';

import DoneIcon from '@/svgs/icons/done.inline.svg';
import MinusIcon from '@/svgs/icons/minus.inline.svg';

/* eslint-disable no-nested-ternary */

/* eslint-disable no-nested-ternary */

/* eslint-disable no-nested-ternary */

type TableProps = {
  data: CompairingTableProps;
};

export default function Table({ data }: TableProps) {
  const { labels, cols } = data;
  const [currentRow, setCurrentRow] = useState<string>('');

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
      {labels &&
        labels.map((label, parentIndex) => (
          <li
            className={clsx(
              'bg-transparent',
              parentIndex === 0 && 'flex-1',
              (parentIndex === 1 || 2) && 'basis-[224px] text-center sm:basis-[125px]',
            )}
            key={label}
          >
            <span className="text-16 font-medium leading-snug sm:text-14">{label}</span>
            <ul className="mt-[25px] flex w-full grow flex-col font-light text-grey-70">
              {cols.map((item, index) => {
                const key = labels[parentIndex].toLowerCase();
                // @ts-expect-error field is required in sanity
                const value = item[key];

                if (parentIndex === 0) {
                  return (
                    <li
                      className={clsx(
                        'relative flex h-[44px] items-center justify-start border-b border-grey-20 py-2 transition-colors sm:h-[61px]',
                        item.isRowTitle && 'sm:hidden',
                        index === 0 && 'border-t border-grey-20',
                        currentRow === index.toString() && 'bg-[#9e9e9e1d]',
                      )}
                      data-row-id={index}
                      key={index}
                    >
                      <span className="text-15 leading-none sm:text-14 sm:leading-snug">
                        {item.isRowTitle ? (
                          <strong className="font-semibold text-white">{item.features}</strong>
                        ) : (
                          item.features
                        )}
                      </span>
                    </li>
                  );
                }

                return (
                  <li
                    className={clsx(
                      'relative flex h-[44px] items-center justify-center border-b border-grey-20 text-center transition-colors sm:h-[61px]',
                      index === 0 && 'border-t border-grey-20',
                      item.isRowTitle && 'sm:hidden',
                      currentRow === index.toString() && 'bg-[#9e9e9e1d]',
                    )}
                    data-row-id={index}
                    key={index}
                  >
                    {value?.booleanValue !== null ? (
                      value?.booleanValue ? (
                        <DoneIcon className="h-[18px] w-[18px]" />
                      ) : (
                        <MinusIcon className="h-[18px] w-[18px]" />
                      )
                    ) : (
                      <span className="text-15 leading-none sm:text-14 sm:leading-snug">
                        {value?.value || ''}
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
