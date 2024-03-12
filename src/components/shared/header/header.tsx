'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';

import { MENU } from '@/data/menu';

import Button from '@/components/shared/button';
import Burger from '@/components/shared/header/burger';
import Link from '@/components/shared/link';
import MobileMenu from '@/components/shared/mobile-menu';

import githubLogo from '@/svgs/logo-github.svg';
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
        <nav className="container grid h-full grid-cols-12 items-center px-24" aria-label="Global">
          <Link href="/" className="col-span-4">
            <Image src={logo} width={109} height={28} alt="Taipy logo" priority />
          </Link>
          <div className="col-span-4 flex justify-center gap-x-7 md:hidden">
            {MENU.header.map(({ label, href }, idx) => (
              <Link key={idx} className="" href={href} theme="header">
                {label}
              </Link>
            ))}
          </div>
          <div className="col-span-4 flex justify-end gap-x-2.5">
            <Button theme="outline" size="sm" className="pl-2 pr-3 font-normal">
              <span className="flex gap-x-2.5">
                <Image src={githubLogo} width={20} height={20} alt="GitHub logo" />
                <span>Star Us</span>
                <span className="h-[20px] w-px bg-white/20" />
                <span>6.5k</span>
              </span>
            </Button>
            <Button theme="secondary" size="sm" className="font-normal">
              Enterprise
            </Button>
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
