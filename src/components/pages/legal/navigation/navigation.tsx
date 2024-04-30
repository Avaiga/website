'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { useThrottleCallback } from '@react-hook/throttle';
import clsx from 'clsx';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

import Link from '@/components/shared/link';

import ArrowIcon from '@/svgs/pages/legal/arrow.inline.svg';

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
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

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
    <nav className="sticky top-12 mt-[69px] xl:static xl:top-0 xl:mt-0">
      <div className="no-scrollbars h-auto max-h-screen overflow-x-hidden overflow-y-scroll pb-20 xl:hidden">
        <span className="mb-5 flex items-center text-15 font-medium leading-none tracking-snug text-grey-50 xl:mb-3.5 md:mb-3">
          Table of Contents
        </span>
        <ul className="flex flex-col gap-y-3 lg:gap-y-1.5 md:gap-y-1">
          {items.map(({ title, anchor, level }, index) => (
            <li
              className={clsx(
                'text-sm relative py-[7px] text-15 leading-tight tracking-snug before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-primary-red before:opacity-0 before:transition-opacity before:duration-200 hover:text-white xl:font-medium',
                {
                  'pl-3.5 xl:pl-0': level === 'h2',
                  'pl-7 xl:pl-3.5': level === 'h3',
                  'text-grey-60': currentAnchor !== anchor,
                  'text-white before:opacity-100 xl:text-grey-60 before:xl:opacity-0':
                    currentAnchor === anchor,
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
      </div>
      <div className="hidden border-b border-b-grey-20 pb-[18px] xl:block">
        <button
          className="flex w-full items-center justify-between text-15 font-medium leading-none tracking-snug text-grey-50"
          aria-expanded={isOpen}
          aria-controls="navigation"
          onClick={handleToggle}
        >
          Table of Contents
          <ArrowIcon
            className={clsx('h-6 w-6 transition-transform duration-200', { 'rotate-180': isOpen })}
          />
        </button>
        <LazyMotion features={domAnimation}>
          <AnimatePresence>
            {isOpen && (
              <m.div
                id="navigation"
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                exit="closed"
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
                <ul className="mt-[18px] flex flex-col gap-y-3 lg:gap-y-1.5 md:gap-y-1">
                  {items.map(({ title, anchor, level }, index) => (
                    <li
                      className={clsx(
                        'text-sm relative py-[7px] text-15 leading-tight tracking-snug before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-primary-red before:opacity-0 before:transition-opacity before:duration-200 hover:text-white xl:font-medium',
                        {
                          'pl-3.5 xl:pl-0': level === 'h2',
                          'pl-7 xl:pl-3.5': level === 'h3',
                          'text-grey-60': currentAnchor !== anchor,
                          'text-white before:opacity-100 xl:text-grey-60 before:xl:opacity-0':
                            currentAnchor === anchor,
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
              </m.div>
            )}
          </AnimatePresence>
        </LazyMotion>
      </div>
    </nav>
  );
}

export default Navigation;
