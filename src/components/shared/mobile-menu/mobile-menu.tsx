'use client';

import { MENU } from '@/constants/menu';
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
            className="absolute inset-x-0 top-0 z-40 bg-[linear-gradient(180deg,#0B0B0E_0%,#18181B_100%)] px-safe"
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            onClick={onClick}
          >
            <div className="flex h-full w-full px-8 pb-7 pt-16 text-left">
              <ul className="w-full border-t border-t-[#202027]">
                {MENU.header.map(({ label, href }, index) => (
                  <li key={index}>
                    <Link className="py-6" href={href} size="xl">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

export default MobileMenu;
