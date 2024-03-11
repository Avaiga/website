'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';

import Burger from '@/components/shared/header/burger';
import Link from '@/components/shared/link';
import MobileMenu from '@/components/shared/mobile-menu';

import GitHubIcon from '@/svgs/github.inline.svg';
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
      <header className="absolute left-0 right-0 top-0 z-50 h-[64px] px-safe pt-safe">
        <nav
          className="container flex h-full items-center justify-between px-4"
          aria-label="Global"
        >
          <Link href="/">
            <Image src={logo} width={90} height={18} alt="NextJS logo" priority />
          </Link>
          <div className="flex gap-x-5 md:hidden">
            <Link className="text-base font-semibold" href="/about">
              About
            </Link>
            <span>|</span>
            <Link
              className="transition-opacity duration-200 hover:opacity-75"
              href="https://github.com/pixel-point/nextjs-typescript-tailwind-starter"
              target="__blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="h-6" />
            </Link>
          </div>
          <Burger
            className="hidden md:block"
            isToggled={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </nav>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
    </>
  );
}

export default Header;
