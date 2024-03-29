import { MENU } from '@/constants/menu';

import Link from '@/components/shared/link';

import SearchIcon from '@/svgs/icons/search.inline.svg';

function Sidebar() {
  return (
    <aside className="sidebar">
      <label className="relative mb-[32px] flex h-9 items-center rounded-[4px] border border-grey-20 bg-transparent px-[7px]">
        <SearchIcon className="absolute h-4 w-4" />
        <input
          className="fontSize-14 block w-full border-none bg-transparent pl-[24px] leading-none text-white placeholder-grey-50 outline-none"
          type="search"
          placeholder="Search posts..."
          aria-label="Search posts..."
          autoComplete="off"
        />
      </label>

      <ul className="space-y-[10px] bg-transparent leading-none text-grey-60">
        {MENU.sidebar.map((item, index) => (
          <li
            key={index}
            className={`border-l-2 py-[4px] pl-[12px] tracking-snug transition-all ${
              index === 0
                ? 'border-l-primary-red text-white'
                : 'border-l-transparent hover:border-l-primary-red hover:text-white'
            }`}
          >
            <Link className="text-15 leading-normal" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
