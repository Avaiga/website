import Image from 'next/image';

import { MENU } from '@/constants/menu';

import Link from '@/components/shared/link';

import logo from '@/svgs/logo.svg';

function Footer() {
  return (
    <footer className="relative bg-[linear-gradient(89.86deg,rgba(41,41,45,0.6)_-34.54%,rgba(19,19,21,0)_104.53%)] pt-16 px-safe pb-safe-or-12 before:absolute before:-top-px before:left-0 before:h-px before:w-full before:bg-[linear-gradient(90deg,#383839_4%,#5D2822_16%,#1E1E21_30%,#151517_54.82%)] lg:pt-12 lg:pb-safe-or-10 lg:before:bg-[linear-gradient(90deg,#383839_-7.32%,#5D2822_5.12%,#1E1E21_18.94%,#151517_48.93%)] md:pb-7 sm:pt-8">
      <div className="container">
        <div className="flex items-start justify-between md:flex-wrap">
          <Link href="/">
            <span className="sr-only">Taipy</span>
            <Image
              className="h-7 sm:h-6 sm:w-auto"
              src={logo}
              width={109}
              height={28}
              alt="Taipy logo"
            />
          </Link>
          <nav className="flex gap-x-[105px] md:mt-12 md:w-full md:justify-between md:gap-x-0 md:pr-[116px] sm:mt-[26px] sm:flex-wrap sm:justify-start sm:gap-x-12 sm:gap-y-[26px] sm:pr-0">
            {MENU.footer.main.map(({ title, items }, index) => (
              <div key={index}>
                <span className="text-16 leading-normal text-grey-70 sm:text-14">{title}</span>
                <ul className="mt-6 flex flex-col gap-y-3.5 sm:mt-3 sm:gap-y-[9px]">
                  {items.map(({ label, href }, itemIndex) => (
                    <li key={itemIndex}>
                      <Link href={href} size="md">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-[62px] flex items-end justify-between lg:mt-[60px] md:mt-11 md:flex-wrap">
          <div className="flex gap-x-6 md:mb-5 md:w-full md:border-b md:border-b-grey-10 md:pb-7 sm:gap-x-5">
            {MENU.footer.social.map(({ href, icon: Icon, label }, index) => (
              <Link href={href} key={index} aria-label={label}>
                <Icon className="h-5 w-5 fill-white hover:fill-grey-90" />
              </Link>
            ))}
          </div>
          <p className="text-right text-14 font-medium leading-snugger text-white/40">
            Copyright © Taipy {new Date().getFullYear()} | Taipy is created and owned by Avaiga
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
