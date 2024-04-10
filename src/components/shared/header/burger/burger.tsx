'use client';

import clsx from 'clsx';
import { LazyMotion, domAnimation, m } from 'framer-motion';

import { ClassName } from '@/types/classname';

const ANIMATION_DURATION = 0.2;

function Burger({
  className,
  isToggled,
  onClick,
}: ClassName & {
  isToggled: boolean;
  onClick: () => void;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.button
        className={clsx('relative', className)}
        type="button"
        animate={isToggled ? 'toggled' : 'initial'}
        aria-label={isToggled ? 'Close menu' : 'Open menu'}
        onClick={onClick}
      >
        <div className="absolute -inset-5" aria-hidden />
        <span className="relative block h-6 w-6">
          <m.span
            className="absolute right-0 top-1 block h-0.5 w-6 rounded-full bg-white"
            variants={{
              initial: {
                top: 4,
                opacity: 1,
                transition: {
                  top: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
                  opacity: { duration: 0, delay: ANIMATION_DURATION },
                },
              },
              toggled: {
                top: 11,
                transition: { duration: ANIMATION_DURATION },
                transitionEnd: { opacity: 0 },
              },
            }}
          />
          <m.span
            className="absolute right-0 top-[11px] block h-0.5 w-6 rounded-full bg-white"
            variants={{
              initial: {
                opacity: 0,
                transition: { duration: 0, delay: ANIMATION_DURATION },
                transitionEnd: { opacity: 1 },
              },
              toggled: {
                opacity: 0,
                transition: { duration: 0, delay: ANIMATION_DURATION },
              },
            }}
          />
          <m.span
            className="absolute bottom-1 right-0 block h-0.5 w-6 rounded-full bg-white"
            variants={{
              initial: {
                bottom: 4,
                opacity: 1,
                transition: {
                  bottom: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
                  opacity: { duration: 0, delay: ANIMATION_DURATION },
                },
              },
              toggled: {
                bottom: 11,
                transition: { duration: ANIMATION_DURATION },
                transitionEnd: { opacity: 0 },
              },
            }}
          />
          <m.span
            className="absolute right-0 top-3 hidden h-0.5 w-6 rounded-full bg-white transition-colors duration-200"
            variants={{
              initial: {
                rotate: '0deg',
                transition: { duration: ANIMATION_DURATION },
                transitionEnd: { display: 'none' },
              },
              toggled: {
                display: 'block',
                rotate: '45deg',
                transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
              },
            }}
          />
          <m.span
            className="absolute right-0 top-3 hidden h-0.5 w-6 rounded-full bg-white transition-colors duration-200"
            variants={{
              initial: {
                rotate: '0deg',
                transition: { duration: ANIMATION_DURATION },
                transitionEnd: { display: 'none' },
              },
              toggled: {
                display: 'block',
                rotate: '-45deg',
                transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
              },
            }}
          />
        </span>
      </m.button>
    </LazyMotion>
  );
}

export default Burger;
