'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';

import { MENU } from '@/constants/menu';
import { ROUTES } from '@/constants/routes';

import Button from '@/components/shared/button';
import Burger from '@/components/shared/header/burger';
import Link from '@/components/shared/link';
import MobileMenu from '@/components/shared/mobile-menu';

import logo from '@/svgs/logo.svg';

import GithubStarCounter from '../github-star-counter';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prevIsOpen) => !prevIsOpen);

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-50 h-16 px-safe pt-safe">
        <div className="container-narrow flex h-full items-center justify-between lg:justify-start md:justify-between">
          <Link href="/">
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
              {MENU.header.map(({ label, href }, index) => (
                <li key={index}>
                  <Link href={href} size="sm" theme="white">
                    {label}
                  </Link>
                </li>
              ))}
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

      <MobileMenu isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
    </>
  );
}

export default Header;
