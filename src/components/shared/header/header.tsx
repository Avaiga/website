'use client';

import Image from 'next/image';

import { useEffect, useRef, useState } from 'react';

import { MENU } from '@/constants/menu';
import { ROUTES } from '@/constants/routes';
import clsx from 'clsx';

import Button from '@/components/shared/button';
import Burger from '@/components/shared/header/burger';
import Link from '@/components/shared/link';
import MobileMenu from '@/components/shared/mobile-menu';

import logo from '@/svgs/logo.svg';

import GithubStarCounter from '../github-star-counter';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerOffset, setHeaderOffset] = useState(0);
  const headerEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    const headerHeight = headerEl.current?.offsetHeight ?? 0;
    const headerTopOffset = headerEl.current?.getBoundingClientRect().top ?? 0;
    setHeaderOffset(headerHeight + headerTopOffset);
    setIsMobileMenuOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <header ref={headerEl} className="absolute left-0 right-0 top-0 z-50 h-16 px-safe pt-safe">
        <div className="container-narrow flex h-full items-center justify-between lg:justify-start md:justify-between">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="sr-only">Taipy</span>
            <Image
              className="h-7 sm:h-6 sm:w-auto"
              src={logo}
              width={109}
              height={28}
              alt="Taipy logo"
              priority
            />
          </Link>
          <nav
            className="lg:translate-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:relative lg:inset-0 lg:ml-16 lg:translate-x-0 lg:translate-y-0"
            aria-label="Global"
          >
            <ul className="flex gap-x-7 md:hidden">
              {MENU.header.map(({ href, label, items }, index) => {
                return (
                  <li className={clsx(items && 'group relative')} key={index}>
                    <Link
                      className={clsx(
                        'relative leading-none transition-colors duration-200 group-hover:text-grey-80 group-hover:before:rotate-0',
                        {
                          "pr-3.5 before:absolute before:right-0 before:top-1/2 before:h-[5px] before:w-2 before:-translate-y-1/2 before:rotate-180 before:bg-[url('/images/svgs/small-arrow.inline.svg')] before:transition-colors before:duration-200":
                            items,
                        },
                      )}
                      href={href}
                      size="sm"
                      theme="white"
                    >
                      {label}
                    </Link>
                    {items && (
                      <div className="invisible absolute -left-3.5 bottom-0 translate-y-full pt-3 opacity-0 transition-[opacity,visibility] duration-100 group-hover:visible group-hover:opacity-100">
                        <ul className="flex min-w-40 max-w-[420px] flex-col gap-3 rounded-[4px] border border-grey-15 bg-grey-10 p-3.5 shadow-submenu">
                          {items.map(
                            ({ label: childLabel, href: childHref, icon: Icon }, childIndex) => (
                              <li key={childIndex}>
                                <Link
                                  className="flex items-center gap-1.5 fill-grey-50 text-grey-70 hover:fill-white hover:text-white"
                                  href={childHref}
                                >
                                  <Icon className="transition-fill w-5 shrink-0 duration-100" />
                                  <span className="text-14 font-normal leading-dense transition-colors duration-100">
                                    {childLabel}
                                  </span>
                                </Link>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="flex gap-5">
              <Burger
                className="hidden md:block"
                isToggled={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              />
            </div>
          </nav>
          <div className="flex gap-x-2.5 lg:grow lg:justify-end md:hidden">
            <GithubStarCounter />
            <Button theme="white-filled" size="sm" href={ROUTES.ENTERPRISE}>
              Enterprise
            </Button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        headerOffset={headerOffset}
        onClick={toggleMobileMenu}
      />
    </>
  );
}

export default Header;
