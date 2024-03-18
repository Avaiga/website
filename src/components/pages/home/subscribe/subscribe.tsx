'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';

import Button from '@/components/shared/button';

import bg from '@/svgs/pages/home/subscribe/bg.svg';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (email === 'error@mail.com') {
      setError('Please enter a valid email');
    } else {
      setError('');
    }
  }, [email]);

  return (
    <section className="subscribe pt-[196px] px-safe">
      <div className="container relative grid max-w-[1388px] grid-cols-12 gap-x-[52px]">
        <Image
          className="pointer-events-none absolute left-8 top-0 -z-10"
          width={1324}
          height={431}
          src={bg}
          alt=""
        />
        <div className="col-span-6 col-start-5 pb-[126px] pt-[55px]">
          <p className="leading-snug text-primary-red">Integrations</p>
          <h2 className="mt-5 text-48 font-semibold leading-dense tracking-tight">
            Subscribe to the Newsletter
          </h2>
          <p className="mt-4 text-18 font-light text-white/80">
            Subscribe to Taipy&apos;s newsletter and stay informed of the latest news! We send four
            mails per year plus a few more for very special announcements.
          </p>
          <form className="relative mt-9 max-w-[496px]">
            <input
              className="remove-autocomplete-styles h-[48px] w-full rounded-full pl-5 pr-48 font-medium text-black outline-none transition-shadow duration-300 placeholder:text-grey-50 focus:shadow-[0px_8px_30px_0px_#FF462B4D]"
              type="email"
              placeholder="Your favorite email adress"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="absolute right-0 top-0 !min-w-[178px]" theme="red-filled" size="lg">
              Subscribe now
            </Button>
            {error !== '' && (
              <span className="absolute left-0 top-[calc(100%+8px)] text-14 leading-tight tracking-snug text-primary-red">
                {error}
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
