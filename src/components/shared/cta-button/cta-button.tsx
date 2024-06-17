import { ROUTES } from '@/constants/routes';
import clsx from 'clsx';

import Button from '@/components/shared/button';

function CTAButton({ className = 'mt-20' }: { className?: string }) {
  return (
    <div className={clsx('container flex justify-center', className)}>
      <Button
        className="h-[46px] w-full max-w-[180px]"
        size="lg"
        theme="red-filled"
        href={ROUTES.PRICING}
      >
        See pricing
      </Button>
    </div>
  );
}

export default CTAButton;
