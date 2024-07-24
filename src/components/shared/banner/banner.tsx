import clsx from 'clsx';

import Link from '@/components/shared/link';

interface BannerProps {
  title: string;
  linkText: string;
  linkUrl: string;
}

function Banner({ title, linkText, linkUrl }: BannerProps) {
  return (
    <div className="banner banner-pixels group relative z-50 overflow-hidden bg-[#0B0B0E] text-white/95 px-safe pt-safe after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto after:h-full after:w-full after:bg-banner-gradient after:opacity-60">
      <div className="container-narrow relative before:absolute before:left-0 before:hidden before:h-full before:w-10 before:bg-[linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(238,130,238,0)_100%)] after:absolute after:right-0 after:top-0 after:hidden after:h-full after:w-10 after:bg-[linear-gradient(to_left,rgba(0,0,0,1)_0%,rgba(238,130,238,0)_100%)] before:md:block after:md:block sm:px-10">
        <Link
          className={clsx(
            'relative z-10 flex h-10 items-center justify-center text-14 xs:block xs:h-auto xs:py-[9px] xs:text-center xs:text-13',
            'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[linear-gradient(to_right,rgba(91,192,243,0)_0%,rgba(91,192,243,0.2)_25%,rgba(37,139,190,0.77)_34%,rgba(99,170,206,1)_43%,rgba(36,138,189,0.78)_55%,rgba(91,192,243,0.19)_73%,rgba(91,192,243,0)_100%)]',
          )}
          href={linkUrl}
          prefetch={false}
          arrowTheme="blue"
        >
          <span className="shrink truncate xs:w-full xs:whitespace-normal xs:text-center">
            {title}
          </span>
          <span className="mx-3.5 h-4 w-px bg-white/65 xs:hidden" aria-hidden />
          <span className="shrink truncate font-semibold xs:ml-1 xs:whitespace-normal">
            {linkText}
          </span>
          <span className="absolute left-[40%] top-1/2 h-[172px] w-[140px] -translate-y-1/2 rotate-[21deg] rounded-full bg-[#32ABE8] object-cover opacity-15 mix-blend-lighten blur-[45px] transition-all duration-100 group-hover:left-[33%] group-hover:h-[408px] group-hover:w-[330px] group-hover:opacity-60 group-hover:blur-[90px]" />
        </Link>
      </div>
    </div>
  );
}

export default Banner;
