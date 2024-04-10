'use client';

import { useState } from 'react';

import { ROUTE } from '@/constants/routes';
import clsx from 'clsx';

import Button from '@/components/shared/button';
import Link from '@/components/shared/link';

import CheckIcon from '@/svgs/icons/check.inline.svg';
import CopyIcon from '@/svgs/icons/copy.inline.svg';

const INPUT_VALUE = '$ pip install taipy';

function CTA({ isEnterprise = false, className = 'my-[202px] lg:my-32 md:my-24 sm:mt-20' }) {
  // TODO: use useCopyToClipboard hook
  const [isCopied, setIsCopied] = useState(false);

  function copyHandle() {
    navigator.clipboard
      .writeText(INPUT_VALUE.replace('$ ', ''))
      .then(() => setIsCopied(true))
      // eslint-disable-next-line no-console
      .catch((error) => console.error('Failed to copy text: ', error));

    setTimeout(() => setIsCopied(false), 4000);
  }

  return (
    <section className={clsx('cta px-safe', className)}>
      <div className="container-narrow grid max-w-[1088px] grid-cols-2 gap-x-8 text-center md:max-w-lg md:grid-cols-1 md:gap-y-5">
        <div
          className={clsx(
            'relative overflow-hidden rounded-2xl bg-primary-red px-10 pb-12 pt-11 shadow-[0px_12px_40px_0px_#FF462B80] lg:px-9 lg:pb-11 lg:pt-10 md:px-[42px] md:pb-9 md:pt-8 sm:px-8 sm:pb-8 sm:pt-7',
            'before:pointer-events-none before:absolute before:inset-0 before:left-[310px] before:top-[-360px] before:h-[1154px] before:w-[225px] before:rotate-[30deg] before:bg-[linear-gradient(76.28deg,#FFFFFF_12.28%,rgba(255,255,255,0)_70.86%)] before:opacity-[0.08]',
            'after:pointer-events-none after:absolute after:inset-0 after:left-[120px] after:top-[-360px] after:h-[1154px] after:w-[225px] after:rotate-[30deg] after:bg-[linear-gradient(76.28deg,#FFFFFF_12.28%,rgba(255,255,255,0)_70.86%)] after:opacity-[0.08]',
          )}
        >
          <h3 className="relative text-36 font-semibold leading-dense tracking-tight lg:text-32 md:text-28 sm:text-24">
            Start with Taipy now
          </h3>
          <p className="relative mt-3.5 text-18 font-light lg:mt-3 lg:text-16 md:text-14 sm:mt-2.5">
            Python library for building production-ready apps, including other libraries missing
            features
          </p>
          {isEnterprise ? (
            <div className="relative mx-auto mt-6 flex h-12 w-full max-w-[180px] items-center justify-center rounded-full bg-white px-5 md:mt-5 sm:mt-4 sm:max-w-none">
              <Link
                href={ROUTE.PRICING}
                className="whitespace-nowrap px-[47px] py-[13px] font-semibold leading-snug text-black transition-colors duration-300"
              >
                See pricing
              </Link>
            </div>
          ) : (
            <div className="relative mx-auto mt-6 flex h-12 w-full max-w-[300px] items-center justify-between rounded-full bg-white px-5 md:mt-5 sm:mt-4 sm:max-w-none">
              <span className="text-grey-20">{INPUT_VALUE}</span>
              <Button disabled={isCopied} onClick={copyHandle}>
                {isCopied ? (
                  <CheckIcon className="h-5 w-5" />
                ) : (
                  <CopyIcon className="h-5 w-5 fill-black transition-colors duration-300 hover:fill-grey-20" />
                )}
              </Button>
            </div>
          )}
        </div>
        <div className="card-border z-10 rounded-2xl">
          <div className="rounded-2xl bg-grey-10 px-10 py-11 lg:px-9 lg:pb-11 lg:pt-10 md:px-[42px] md:pb-9 md:pt-8 sm:px-8 sm:pb-8 sm:pt-7">
            <h3 className="text-36 font-semibold leading-dense tracking-tight lg:text-32 md:text-28 sm:text-24">
              Taipy Enterprise
            </h3>
            <p className="mt-3.5 text-18 font-light lg:mt-3 lg:text-16 md:text-14 sm:mt-2.5">
              Provide security to your app by providing authentication and authorization features
            </p>

            {isEnterprise ? (
              <div className="relative mx-auto mt-6 flex h-12 w-full max-w-[180px] items-center justify-center rounded-full bg-white px-5 md:mt-5 sm:mt-4 sm:max-w-none">
                <Link
                  href="/"
                  className="whitespace-nowrap px-[47px] py-[13px] font-semibold leading-snug text-black transition-colors duration-300"
                >
                  Request a demo
                </Link>
              </div>
            ) : (
              <Button
                className="mt-6 w-full max-w-[180px] md:max-w-40 sm:mt-5"
                size="lg"
                theme="white-filled"
              >
                Learn more
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
