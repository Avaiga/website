'use client';

import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

import Link from '@/components/shared/link';

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
            className="absolute inset-x-0 bottom-0 top-0 z-40 bg-[#fff] bg-opacity-95 px-safe"
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            onClick={onClick}
          >
            <div className="flex h-full w-full px-4 py-16 text-left">
              <ul className="flex max-h-full w-full flex-col divide-y divide-[#000] overflow-y-auto">
                <li>
                  <Link className="block py-5 text-xl" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="block py-5 text-xl" href="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

export default MobileMenu;
