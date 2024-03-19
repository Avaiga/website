'use client';

import { useRef, useState } from 'react';

import clsx from 'clsx';

import Button from '@/components/shared/button';

import CheckIcon from '@/svgs/icons/check.inline.svg';
import CopyIcon from '@/svgs/icons/copy.inline.svg';

function CTA() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  function copyHandle(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    if (inputRef.current) {
      const input = inputRef.current;

      input.select();
      input.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(input.value.replace('$ ', ''));
      setIsCopied(true);
    }
  }

  return (
    <section className="cta my-[202px] px-safe">
      <div className="container-narrow grid max-w-[1088px] grid-cols-2 gap-x-8 text-center">
        <div
          className={clsx(
            'relative overflow-hidden rounded-2xl bg-primary-red px-10 pb-12 pt-11 shadow-[0px_12px_40px_0px_#FF462B80]',
            'before:pointer-events-none before:absolute before:inset-0 before:left-[310px] before:top-[-360px] before:h-[1154px] before:w-[225px] before:rotate-[30deg] before:bg-[linear-gradient(76.28deg,#FFFFFF_12.28%,rgba(255,255,255,0)_70.86%)] before:opacity-[0.08]',
            'after:pointer-events-none after:absolute after:inset-0 after:left-[120px] after:top-[-360px] after:h-[1154px] after:w-[225px] after:rotate-[30deg] after:bg-[linear-gradient(76.28deg,#FFFFFF_12.28%,rgba(255,255,255,0)_70.86%)] after:opacity-[0.08]',
          )}
        >
          <h3 className="relative text-36 font-semibold leading-dense tracking-tight">
            Start with Taipy now
          </h3>
          <p className="relative mt-3.5 text-18 font-light">
            Python library for building production-ready apps, including other libraries missing
            features
          </p>
          <form
            className="relative mx-auto mt-6 flex h-12 w-full max-w-[300px] justify-between rounded-full bg-white px-5"
            noValidate
          >
            <input
              className="bg-transparent text-grey-20"
              ref={inputRef}
              value="$ pip install taipy"
              disabled
            />
            <Button disabled={isCopied} onClick={copyHandle}>
              {isCopied ? (
                <CheckIcon className="h-5 w-5" />
              ) : (
                <CopyIcon className="h-5 w-5 fill-black transition-colors duration-300 hover:fill-grey-20" />
              )}
            </Button>
          </form>
        </div>
        <div className="card-border rounded-2xl">
          <div className="rounded-2xl bg-grey-10 px-10 py-11">
            <h3 className="text-36 font-semibold leading-dense tracking-tight">Taipy Enterprise</h3>
            <p className="mt-3.5 text-18 font-light">
              Provide security to your app by providing authentication and authorization features
            </p>
            <Button className="mt-6 w-full max-w-[180px]" size="lg" theme="white-filled">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
