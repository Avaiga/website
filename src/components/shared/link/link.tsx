import type { Route } from 'next';
import NextLink from 'next/link';

import clsx from 'clsx';

import { ClassName } from '@/types/classname';

// Example of the code — https://user-images.githubusercontent.com/20713191/144221096-1939c382-4ab8-4d28-b0e6-7bbe3a8f8556.png
const styles = {
  transition: 'transition-colors duration-200',
  base: 'inline-flex',
  size: {
    xl: 'text-20 font-medium',
    lg: 'text-18 lg:text-16 md:text-14',
    md: 'text-16 sm:text-14 font-medium',
    sm: 'text-14',
  },
  theme: {
    white: 'hover:text-grey-80',
    grey: 'text-white/40',
    orange: 'text-orange-1',
  },
};

function Link<T extends string>({
  className: additionalClassName,
  size,
  href,
  theme,
  arrowTheme = null,
  children,
  ...props
}: ClassName & {
  href: Route<T> | URL;
  size?: keyof typeof styles.size;
  theme?: keyof typeof styles.theme;
  arrowTheme?: 'red' | 'blue' | null;
  children: React.ReactNode;
  prefetch?: boolean;
  target?: string;
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}) {
  const linkClassName = clsx(
    styles.transition,
    size && styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    additionalClassName,
  );

  const arrow = (
    <span
      className={clsx('ml-1 shrink-0', {
        'text-primary-red': arrowTheme === 'red',
        'text-[#50C2F3]': arrowTheme === 'blue',
      })}
      aria-hidden
    >
      -&gt;
    </span>
  );
  /*
    Using next/link component only for internal navigation.
    https://github.com/vercel/next.js/blob/canary/errors/invalid-href-passed.md
  */
  if (href.toString().startsWith('/')) {
    return (
      <NextLink className={linkClassName} href={href} {...props}>
        {children}
        {arrowTheme && arrow}
      </NextLink>
    );
  }

  return (
    <a className={linkClassName} href={href.toString()} {...props}>
      {children}
      {arrowTheme && arrow}
    </a>
  );
}

export default Link;
