'use client';

import type { Route } from 'next';

import { SVGProps, useState } from 'react';

import { MENU } from '@/constants/menu';
import { ROUTES } from '@/constants/routes';
import clsx from 'clsx';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

import Link from '@/components/shared/link';

import Button from '../button';
import GithubStarCounter from '../github-star-counter';

type ItemsProps = {
  label: string;
  href: URL | Route<string>;
  icon: React.FunctionComponent<SVGProps<SVGSVGElement>>;
};

const ANIMATION_DURATION = 0.2;

const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
  opened: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

function MobileMenu({
  isOpen,
  headerOffset,
  hideMobileMenu,
}: {
  isOpen: boolean;
  headerOffset: number;
  hideMobileMenu: () => void;
}) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, items: ItemsProps[] | undefined) => {
    if (items) {
      e.preventDefault();
      setIsSubmenuOpen((prevState) => !prevState);
    } else {
      hideMobileMenu();
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <m.nav
            className="fixed inset-x-0 bottom-0 top-0 z-40 overflow-y-scroll bg-transparent px-safe"
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
          >
            <div
              style={{ '--header-offset': `${headerOffset}px` } as React.CSSProperties}
              className="flex w-full flex-col bg-[linear-gradient(180deg,#0B0B0E_10%,#18181B_100%)] px-8 pb-7 pt-16 text-left lg:pt-[var(--header-offset)] sm:min-h-full sm:justify-between sm:px-5 sm:pb-5"
            >
              <ul className="mt-[2px] w-full">
                {MENU.header.map(({ href, label, items }, index) => {
                  return (
                    <li className="border-b border-b-grey-15/60 text-white" key={index}>
                      <Link
                        className={clsx(
                          'relative inline-flex w-full items-center py-[13px] font-medium leading-snug',
                          {
                            "before:absolute before:right-0 before:top-1/2 before:h-[5px] before:w-2 before:-translate-y-1/2 before:bg-[url('/images/svgs/small-arrow.inline.svg')] before:transition-transform before:duration-200":
                              items,
                            'before:rotate-180': isSubmenuOpen,
                          },
                        )}
                        href={href}
                        onClick={(e) => handleClick(e, items)}
                      >
                        {label}
                      </Link>

                      {items && (
                        <AnimatePresence>
                          {isSubmenuOpen && (
                            <m.ul
                              className="relative pl-3"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: ANIMATION_DURATION }}
                            >
                              {items.map(
                                (
                                  { label: childLabel, href: childHref, icon: Icon },
                                  childIndex,
                                ) => (
                                  <li
                                    className="before:absolute before:left-0 before:h-[1px] before:w-full before:bg-grey-15/60"
                                    key={childIndex}
                                  >
                                    <Link
                                      className="flex w-full items-center gap-1.5 py-3.5"
                                      href={childHref}
                                    >
                                      <Icon className="w-5 shrink-0 fill-grey-60" />
                                      <span className="text-15 font-normal leading-dense">
                                        {childLabel}
                                      </span>
                                    </Link>
                                  </li>
                                ),
                              )}
                            </m.ul>
                          )}
                        </AnimatePresence>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-7 sm:grid-cols-1">
                <GithubStarCounter className="!h-11 !gap-x-2 !text-16" />
                <Button
                  className="!h-11"
                  theme="white-filled"
                  size="lgConst"
                  href={ROUTES.ENTERPRISE}
                >
                  Enterprise
                </Button>
              </div>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

export default MobileMenu;
