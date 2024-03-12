import type { Route } from 'next';
import NextLink from 'next/link';

import clsx from 'clsx';

// Example of the code — https://user-images.githubusercontent.com/20713191/144221096-1939c382-4ab8-4d28-b0e6-7bbe3a8f8556.png
const styles = {
  transition: 'transition-colors duration-200',
  base: '',
  theme: {
    default: '',
    header: 'text-14 leading-none font-normal',
    footer: '',
  },
};

function Link<T extends string>({
  className: additionalClassName,
  theme,
  href,
  children,
  ...props
}: {
  className?: string;
  href: Route<T> | URL;
  theme?: keyof typeof styles.theme;
  children: React.ReactNode;
  prefetch?: boolean;
  target?: string;
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}) {
  const linkClassName = clsx(
    styles.transition,
    theme && styles.base,
    theme && styles.theme[theme],
    additionalClassName,
  );

  /*
    Using next/link component only for internal navigation.
    https://github.com/vercel/next.js/blob/canary/errors/invalid-href-passed.md
  */
  if (href.toString().startsWith('/')) {
    return (
      <NextLink className={linkClassName} href={href} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a className={linkClassName} href={href.toString()} {...props}>
      {children}
    </a>
  );
}

export default Link;
