'use client';

import { useEffect, useState } from 'react';

import clsx from 'clsx';

import checkIcon from '@/svgs/icons/done.svg';
import minusIcon from '@/svgs/icons/minus.svg';

import tableData from '../data/plans.json';

export default function Table() {
  const labelList: { [key: string]: string } = tableData.labels;
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
    <ul className="scrollbar-hidden relative flex w-full">
      {Object.keys(labelList).map((key, parentIndex) => (
        <li
          className={clsx(
            'bg-transparent',
            parentIndex === 0 && 'flex-1',
            parentIndex === 1 && 'basis-[160px] text-center',
            parentIndex === 2 && 'basis-[224px] text-center',
          )}
          key={key}
        >
          <span className="text-16 font-medium leading-snug">{labelList[key]}</span>
          <ul className="mt-[23px] flex w-full grow flex-col font-light text-grey-70">
            {tableData.cols.map((item, index) => {
              const value: { [key: string]: string | boolean } = item;
              if (parentIndex === 0) {
                return (
                  <li
                    className={clsx(
                      'relative flex h-[44px] items-center justify-start border-b border-grey-20 py-3 transition-colors',
                      index === 0 && 'border-t border-grey-20',
                      currentRow === index.toString() && 'bg-[#9e9e9e1d]',
                    )}
                    data-row-id={index}
                    key={index}
                  >
                    <span className="text-15 leading-none">
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
                    'relative flex h-[44px] items-center justify-center border-b border-grey-20 text-center transition-colors',
                    index === 0 && 'border-t border-grey-20',
                    currentRow === index.toString() && 'bg-[#9e9e9e1d]',
                  )}
                  data-row-id={index}
                  key={index}
                >
                  {typeof value[key] === 'boolean' ? (
                    <>
                      {value[key] ? (
                        <img src={checkIcon} width="18" height="18" alt="" loading="lazy" />
                      ) : (
                        <img src={minusIcon} width="18" height="18" alt="" loading="lazy" />
                      )}
                    </>
                  ) : (
                    <span className="text-15 leading-none">{value[key]}</span>
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
