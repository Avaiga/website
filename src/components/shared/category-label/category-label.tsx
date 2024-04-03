import clsx from 'clsx';

import Link from '@/components/shared/link';

interface CategoryLabelProps {
  title: string;
  url: string;
  className?: string;
  size?: keyof typeof styles.size;
}

const styles = {
  base: 'rounded-full border-0 px-2.5 bg-[#55C1F61A] font-medium leading-none tracking-snug text-secondary-blue',
  size: {
    md: 'text-14',
    sm: 'text-13',
  },
};

function CategoryLabel({ className, title, url, size = 'md' }: CategoryLabelProps) {
  return (
    <Link className={clsx(className, styles.base, styles.size[size])} href={url}>
      {title}
    </Link>
  );
}

export default CategoryLabel;
