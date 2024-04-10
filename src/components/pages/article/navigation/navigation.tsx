'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { useThrottleCallback } from '@react-hook/throttle';
import clsx from 'clsx';

import Link from '@/components/shared/link';

import ArticleIcon from '@/svgs/icons/article.inline.svg';

interface NavigationItem {
  title: string;
  anchor: string;
  level: string;
}

interface NavigationProps {
  items: NavigationItem[];
}

const CURRENT_ANCHOR_GAP_PX = 200;

function Navigation({ items }: NavigationProps) {
  const titles = useRef<HTMLElement[]>([]);
  const [currentAnchor, setCurrentAnchor] = useState<string | null>(null);

  useEffect(() => {
    titles.current = items
      .map(({ anchor }) => document.getElementById(anchor))
      .filter((anchor): anchor is HTMLElement => anchor !== null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateCurrentAnchor = useCallback(() => {
    const currentTitleIdx = titles.current.findIndex(
      (anchor) => anchor.getBoundingClientRect().top - CURRENT_ANCHOR_GAP_PX >= 0,
    );

    const idx =
      currentTitleIdx === -1 ? titles.current.length - 1 : Math.max(currentTitleIdx - 1, 0);

    const currentTitle = titles.current[idx];

    setCurrentAnchor(currentTitle?.id);
  }, []);

  const onScroll = useThrottleCallback(updateCurrentAnchor, 5);

  const handleLinkClick = (id: string) => (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Changing hash without default jumps to anchor
    if (history.pushState) {
      history.pushState(null, '', `#${id}`);
    } else {
      // Old browser support
      window.location.hash = `#${id}`;
    }
  };

  useEffect(() => {
    updateCurrentAnchor();

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="sticky top-12 mt-[69px]">
      <span className="mb-5 flex items-center text-15 font-medium leading-none tracking-snug text-grey-50">
        <ArticleIcon className="mr-2.5 h-[18px] w-4" />
        In this article
      </span>
      <ul className="flex flex-col gap-y-3">
        {items.map(({ title, anchor, level }, index) => (
          <li
            className={clsx(
              'text-sm relative py-[7px] text-15 leading-tight tracking-snug before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-primary-red before:opacity-0 before:transition-opacity before:duration-200 hover:text-white',
              {
                'pl-3.5': level === 'h2',
                'pl-7': level === 'h3',
                'text-grey-60': currentAnchor !== anchor,
                'text-white before:opacity-100': currentAnchor === anchor,
              },
            )}
            key={index}
          >
            <Link href={`#${anchor}`} onClick={handleLinkClick(anchor)}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
