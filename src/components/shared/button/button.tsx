import type { Route } from 'next';

import { STATE } from '@/constants/forms';
import clsx from 'clsx';

import Link from '@/components/shared/link';

import { ClassName } from '@/types/classname';

import CheckIcon from '@/svgs/icons/check.inline.svg';
import LoadingIcon from '@/svgs/icons/loading.inline.svg';

const styles = {
  transition: 'transition-colors duration-300',
  base: 'inline-flex items-center justify-center rounded-full leading-none whitespace-nowrap',
  size: {
    xl: 'h-14 text-[19px] lg:text-[18px] lg:h-[53px] md:h-11 md:text-15',
    lgConst: 'h-12 text-16',
    lg: 'h-12 text-16 px-8 md:h-11 md:text-14',
    md: 'h-11 text-14 px-4',
    sm: 'h-9 text-14 px-[17px]',
  },
  theme: {
    'red-filled': 'bg-primary-red font-medium hover:bg-[#FF634D]',
    'white-filled': 'bg-white text-black font-semibold hover:bg-grey-80',
    outline: 'font-medium border-white/20 border hover:bg-[rgba(255,255,255,0.1)]',
    'green-filled': 'bg-[#05C776] font-medium',
    'red-outline': 'bg-orange-5 border-2 shadow-btn backdrop-blur hover:bg-watch-btn-hover',
  },
};

type ButtonProps<T extends string> = ClassName & {
  href?: Route<T> | URL;
  target?: string;
  rel?: string;
  size?: keyof typeof styles.size;
  theme?: keyof typeof styles.theme;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
  state?: STATE;
  disabled?: boolean;
};

function Button({
  className: additionalClassName,
  size,
  theme,
  href = undefined,
  children,
  state = STATE.DEFAULT,
  ...props
}: ButtonProps<string>) {
  const linkClassName = clsx(
    styles.transition,
    size && theme && styles.base,
    size && styles.size[size],
    state === STATE.SUCCESS ? styles.theme['green-filled'] : theme && styles.theme[theme],
    additionalClassName,
    {
      'pointer-events-none':
        state === STATE.LOADING || state === STATE.SUCCESS || state === STATE.ERROR,
    },
  );

  let content = null;

  switch (state) {
    case STATE.LOADING:
      content = <LoadingIcon className="w-7 animate-spin" />;
      break;
    case STATE.SUCCESS:
      content = <CheckIcon className="w-7" />;
      break;
    case STATE.DEFAULT:
    default:
      content = children;
  }

  if (href) {
    return (
      <Link className={linkClassName} href={href} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={linkClassName} {...props}>
      {content}
    </button>
  );
}

export default Button;
