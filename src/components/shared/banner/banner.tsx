import { ROUTE } from '@/constants/routes';

import Link from '@/components/shared/link';

function Banner() {
  return (
    <section className="mb-1 mt-4">
      <div className="container h-9 px-24">
        <Link
          className="flex h-full w-full items-center justify-center gap-x-2.5 rounded-[20px] bg-[#1E1E20] text-14 leading-none"
          href={ROUTE.BANNER}
        >
          <span>Learn how to create a Taipy app from scratch</span>
          <div className="h-4 w-px bg-white/10" />
          <span>
            Join Taipy Tech Talk <span className="text-[#50C2F3]">-&gt;</span>
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Banner;
