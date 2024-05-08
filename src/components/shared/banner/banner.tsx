import clsx from 'clsx';

interface BannerProps {
  title: string;
  linkText: string;
  linkUrl: string;
}

function Banner({ title, linkText, linkUrl }: BannerProps) {
  return (
    <div className="banner bg-[linear-gradient(90deg,rgba(91,192,243,0)_0%,rgba(91,192,243,0.2)_56.75%,rgba(91,192,243,0)_109.09%)] px-safe pt-safe">
      <div className="container-narrow">
        <a
          className={clsx(
            'relative flex h-10 items-center justify-center text-14 hover:text-grey-80 xs:block xs:h-auto xs:py-[9px] xs:text-center xs:text-13',
            'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[linear-gradient(90deg,rgba(91,192,243,0)_0%,rgba(91,192,243,0.3)_56.75%,rgba(91,192,243,0)_109.09%)]',
          )}
          href={linkUrl}
        >
          <span className="shrink truncate xs:w-full xs:text-wrap xs:text-center">{title}</span>
          <span className="mx-3.5 h-4 w-px bg-white/10 xs:hidden" aria-hidden />
          <span className="shrink truncate font-semibold xs:ml-1">{linkText}</span>
          <span className="ml-1 shrink-0 text-[#50C2F3]" aria-hidden>
            -&gt;
          </span>
        </a>
      </div>
    </div>
  );
}

export default Banner;
