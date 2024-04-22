'use client';

import { MENU } from '@/constants/menu';
import { ROUTES } from '@/constants/routes';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

import Link from '@/components/shared/link';

import Button from '../button';
import GithubStarCounter from '../github-star-counter';

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

function MobileMenu({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <m.nav
            className="fixed inset-x-0 bottom-0 top-0 z-40 bg-transparent px-safe"
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            onClick={onClick}
          >
            <div className="flex w-full flex-col bg-[linear-gradient(180deg,#0B0B0E_0%,#18181B_100%)] px-8 pb-7 pt-16 text-left sm:h-full sm:max-h-screen sm:justify-between sm:px-5 sm:pb-5">
              <ul className="w-full border-t border-t-[#202027]">
                {MENU.header.map(({ label, href }, index) => (
                  <li className="-mt-px border-b border-b-[#202027]" key={index}>
                    <Link className="w-full py-[24px]" href={href} size="xl">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-7 grid grid-cols-2 gap-4 sm:mt-0 sm:grid-cols-1">
                <GithubStarCounter className="!h-12 !gap-x-2 !text-16" />
                <Button theme="white-filled" size="lgConst" href={ROUTES.ENTERPRISE}>
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
