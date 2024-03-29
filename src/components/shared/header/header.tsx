'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';

import { MENU } from '@/constants/menu';

import Button from '@/components/shared/button';
import Burger from '@/components/shared/header/burger';
import Link from '@/components/shared/link';
import MobileMenu from '@/components/shared/mobile-menu';

import GithubLogo from '@/svgs/icons/logo-github.inline.svg';
import logo from '@/svgs/logo.svg';

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
            <Image className="h-7" src={logo} width={109} height={28} alt="Taipy logo" priority />
          </Link>
          <nav
            className="lg:translate-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:relative lg:inset-0 lg:ml-16 lg:translate-x-0 lg:translate-y-0"
            aria-label="Global"
          >
            <ul className="flex gap-x-7 md:hidden">
              {MENU.header.map(({ label, href }, index) => (
                <li key={index}>
                  <Link href={href} size="sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <Burger
              className="hidden md:block"
              isToggled={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </nav>

          <div className="flex gap-x-2.5 lg:grow lg:justify-end md:hidden">
            <Button className="gap-x-2.5 pl-2 pr-3" theme="outline" size="sm">
              <GithubLogo className="h-[18px] flex-shrink-0 fill-white" />
              <span>Star Us</span>
              <span className="h-5 w-px bg-white/20" aria-hidden />
              <span>6.5k</span>
            </Button>
            <Button theme="white-filled" size="sm">
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
