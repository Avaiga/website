import { ROUTE } from '@/constants/routes';

import Link from '@/components/shared/link';

function Banner() {
  return (
    <div className="banner mb-1 mt-4 px-safe pt-safe">
      <div className="container-narrow">
        <Link
          className="flex h-9 items-center justify-center rounded-[20px] bg-[#1E1E20] text-14 leading-none"
          href={ROUTE.BANNER}
          arrowTheme="blue"
        >
          Learn how to create a Taipy app from scratch
          <div className="mx-2.5 h-4 w-px bg-white/10" aria-hidden />
          <span className="font-semibold">Join Taipy Tech Talk</span>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
