import type { Route } from 'next';

import clsx from 'clsx';

import Link from '@/components/shared/link';

import { ClassName } from '@/types/classname';

// Example of the code — https://user-images.githubusercontent.com/20713191/144221096-1939c382-4ab8-4d28-b0e6-7bbe3a8f8556.png
const styles = {
  transition: 'transition-colors duration-300',
  base: 'inline-flex items-center justify-center rounded-full leading-snug',
  size: {
    lg: 'h-12 text-16 px-6 min-w-[180px]',
    md: 'h-11 text-14 px-4 min-w-[160px]',
    sm: 'h-9 text-14 px-[18px]',
  },
  theme: {
    primary: 'bg-primary-red font-medium hover:bg-[#FF634D]',
    secondary: 'bg-white text-black font-semibold hover:bg-grey-80',
    outline: 'font-medium border-white/20 border hover:bg-[rgba(255,255,255,0.1)]',
  },
};

type ButtonProps<T extends string> = ClassName & {
  href?: Route<T> | URL;
  size?: keyof typeof styles.size;
  theme?: keyof typeof styles.theme;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
};

function Button({
  className: additionalClassName,
  size,
  theme,
  href = undefined,
  children,
  ...props
}: ButtonProps<string>) {
  const linkClassName = clsx(
    styles.transition,
    size && theme && styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    additionalClassName,
  );

  if (href) {
    return (
      <Link className={linkClassName} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={linkClassName} {...props}>
      {children}
    </button>
  );
}

export default Button;
