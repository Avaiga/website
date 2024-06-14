import { ROUTES } from '@/constants/routes';

import Button from '@/components/shared/button';

function CTAButton() {
  return (
    <div className="container mt-20 flex justify-center">
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
