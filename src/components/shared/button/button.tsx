import type { Route } from 'next';

import clsx from 'clsx';

import Link from '@/components/shared/link';

import { ClassName } from '@/types/classname';

import CheckIcon from '@/svgs/icons/check.inline.svg';
import LoadingIcon from '@/svgs/icons/loading.inline.svg';

export enum BUTTON_STATES {
  DEFAULT = 'default',
  LOADING = 'loading',
  SUCCESS = 'success',
  DISABLED = 'disabled',
}

const styles = {
  transition: 'transition-colors duration-300',
  base: 'inline-flex items-center justify-center rounded-full leading-none whitespace-nowrap',
  size: {
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
  state?: BUTTON_STATES;
  disabled?: boolean;
};

function Button({
  className: additionalClassName,
  size,
  theme,
  href = undefined,
  children,
  state = BUTTON_STATES.DEFAULT,
  ...props
}: ButtonProps<string>) {
  const linkClassName = clsx(
    styles.transition,
    size && theme && styles.base,
    size && styles.size[size],
    state === BUTTON_STATES.SUCCESS ? styles.theme['green-filled'] : theme && styles.theme[theme],
    additionalClassName,
    {
      'pointer-events-none':
        state === BUTTON_STATES.LOADING ||
        state === BUTTON_STATES.SUCCESS ||
        state === BUTTON_STATES.DISABLED,
    },
  );

  let content = null;

  switch (state) {
    case BUTTON_STATES.LOADING:
      content = <LoadingIcon className="w-7 animate-spin" />;
      break;
    case BUTTON_STATES.SUCCESS:
      content = <CheckIcon className="w-7" />;
      break;
    case BUTTON_STATES.DEFAULT:
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
