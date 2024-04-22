import { ROUTES } from '@/constants/routes';
import clsx from 'clsx';

import Link from '@/components/shared/link';

function Banner() {
  return (
    <div className="banner bg-[linear-gradient(90deg,rgba(91,192,243,0)_0%,rgba(91,192,243,0.2)_56.75%,rgba(91,192,243,0)_109.09%)] px-safe pt-safe">
      <div className="container-narrow">
        <Link
          className={clsx(
            'relative flex h-10 items-center justify-center text-14 leading-none xs:h-14 xs:flex-wrap xs:py-[9px] xs:text-13',
            'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[linear-gradient(90deg,rgba(91,192,243,0)_0%,rgba(91,192,243,0.3)_56.75%,rgba(91,192,243,0)_109.09%)]',
          )}
          href={ROUTES.BANNER}
          arrowTheme="blue"
        >
          <span className="xs:w-full xs:text-center">
            Learn how to create a Taipy app from scratch
          </span>
          <div className="mx-3.5 h-4 w-px bg-white/10 xs:hidden" aria-hidden />
          <span className="font-semibold">Join Taipy Tech Talk</span>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
