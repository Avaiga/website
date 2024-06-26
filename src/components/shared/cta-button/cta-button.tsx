import { Route } from 'next';

import clsx from 'clsx';

import Button from '@/components/shared/button';

type CTAButtonProps = {
  className?: string;
  to: URL | Route;
  buttonText: string;
  isOpenInNewTab?: boolean;
};

function CTAButton({
  className = 'mt-20',
  to,
  buttonText,
  isOpenInNewTab = false,
}: CTAButtonProps) {
  return (
    <div className={clsx('container flex justify-center', className)}>
      <Button
        className="h-[46px] w-full max-w-[180px]"
        size="lg"
        theme="red-filled"
        href={to}
        target={isOpenInNewTab ? '_blank' : '_self'}
      >
        {buttonText}
      </Button>
    </div>
  );
}

export default CTAButton;
