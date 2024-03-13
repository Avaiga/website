import { ROUTE } from '@/data/routes';

import Link from '@/components/shared/link';

function Banner() {
  return (
    <div className="container mb-1 mt-4 h-9 px-24">
      <Link
        href={ROUTE.BANNER}
        className="flex h-full w-full items-center justify-center gap-x-2.5 rounded-[20px] bg-[#1E1E20] text-14 leading-none"
      >
        <span>Learn how to create a Taipy app from scratch</span>
        <div className="h-4 w-px bg-white/10" />
        <span>
          Join Taipy Tech Talk <span className="text-[#50C2F3]">-&gt;</span>
        </span>
      </Link>
    </div>
  );
}

export default Banner;
