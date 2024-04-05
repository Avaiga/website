import clsx from 'clsx';

import Link from '@/components/shared/link';

interface CategoryLabelProps extends React.PropsWithChildren {
  url: string;
  className?: string;
  size?: keyof typeof styles.size;
}

const styles = {
  base: 'rounded-full px-2.5 bg-[#55c1f6]/10 font-medium leading-none tracking-snug text-secondary-blue inline-flex items-center',
  size: {
    md: 'text-14 h-7',
    sm: 'text-13',
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
