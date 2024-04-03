import NavList from '@/components/pages/blog-page/sidebar/nav-list';

import SearchIcon from '@/svgs/icons/search.inline.svg';

const url = new URL('https://example.com');
const navData = [
  { label: 'All Posts', href: url },
  { label: 'Engineering', href: url },
  { label: 'Company', href: url },
  { label: 'Release notes', href: url },
  { label: 'Community', href: url },
  { label: 'Video', href: url },
  { label: 'Appearances', href: url },
];

function Sidebar() {
  return (
    <aside className="sticky top-16">
      <label className="relative mb-8 flex h-9 items-center rounded border border-grey-20 bg-transparent px-[9px] hover:border-grey-30 focus:border-2">
        <SearchIcon className="absolute h-4 w-4" />
        <input
          className="block w-full border-none bg-transparent pl-6 pr-2.5 text-14 leading-none tracking-snug text-white placeholder-grey-50 outline-none"
          type="search"
          placeholder="Search posts..."
          aria-label="Search posts..."
          autoComplete="off"
        />
      </label>
      <NavList data={navData} />
    </aside>
  );
}

export default Sidebar;
