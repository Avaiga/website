import { ROUTES } from '@/constants/routes';
import clsx from 'clsx';

import Button from '@/components/shared/button';

function CTAButton({ offsets = 'mt-20' }: { offsets?: string }) {
  return (
    <div className={clsx('container flex justify-center', offsets)}>
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
