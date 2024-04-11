import clsx from 'clsx';

import Link from '@/components/shared/link';

import { ClassName } from '@/types/classname';

type CategoryLabelProps = React.PropsWithChildren &
  ClassName & {
    url: string | URL;
    size?: keyof typeof styles.size;
  };

const styles = {
  base: 'rounded-full px-2.5 bg-[#55c1f6]/10 font-medium leading-none tracking-snug text-secondary-blue inline-flex items-center',
  size: {
    md: 'text-14 h-7',
    sm: 'text-13 h-6 lg:h-[23px] md:h-[23px] md:text-12 sm:h-[22px] sm:text-11',
  },
};

function CategoryLabel({ className, children, url, size = 'md' }: CategoryLabelProps) {
  return (
    <Link className={clsx(className, styles.base, styles.size[size])} href={url}>
      {children}
    </Link>
  );
}

export default CategoryLabel;
