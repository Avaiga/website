import clsx from 'clsx';

import { ContentTable } from '@/types/blog';

const defaultCellStyles =
  'border-b border-r border-grey-20 px-3.5 py-2 text-left text-15 leading-snug align-top';

function Table({ table, type }: ContentTable) {
  const { rows } = table;

  const tableHead = type === 'withTopHeader' ? rows.slice(0, 1) : [];
  const tableBoby = type === 'withTopHeader' ? rows.slice(1) : rows;

  return (
    <figure className="not-prose md:scrollbar-hidden my-8 md:overflow-x-auto">
      <div className="min-w-full border-x border-t border-grey-20 sm:w-auto sm:min-w-max">
        <table className="my-0 w-full border-separate border-spacing-0">
          {type === 'withTopHeader' && (
            <thead>
              <tr>
                {tableHead?.[0].cells.map((item, index, arr) => (
                  <th
                    className={clsx(
                      'bg-grey-10 font-semibold text-grey-94',
                      defaultCellStyles,
                      index === arr.length - 1 && 'border-r-0',
                    )}
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {tableBoby.map(({ cells }, index) => (
              <tr key={index}>
                {cells.map((item, indx) => {
                  return (
                    <td
                      className={clsx(
                        'font-light',
                        defaultCellStyles,
                        indx === cells.length - 1 && 'border-r-0',
                      )}
                      key={indx}
                      dangerouslySetInnerHTML={{
                        __html: item.replace(/`([^`]*)`/g, '<code>$1</code>'),
                      }}
                    />
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

export default Table;
