'use client';

import { useRef, useState } from 'react';

import clsx from 'clsx';

import Button from '@/components/shared/button';

import ArrowIcon from '@/svgs/pages/pricing/comparing/down-arrow.inline.svg';

import Heading from '../heading';
import Table from './table';

type CustomStyle = {
  '--content-height': string;
} & React.CSSProperties;

export default function Compairing() {
  const [isOpen, setIsOpen] = useState(false);
  const contentEl = useRef<HTMLInputElement>(null);

  const contentStyle: CustomStyle = {
    '--content-height': isOpen ? `${contentEl.current?.scrollHeight}px` : '0px',
  };

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="container flex justify-center">
        <Button
          size="lg"
          theme="outline"
          className="mt-10 flex items-center gap-x-2.5 lg:mt-9 md:mt-8"
          onClick={handleToggle}
        >
          <span className="font-medium">See comparison table</span>
          <ArrowIcon
            className={clsx('h-3 w-3 shrink-0 text-primary-red', { 'rotate-180': isOpen })}
          />
        </Button>
      </div>
      <div
        ref={contentEl}
        style={contentStyle}
        className="h-[--content-height] overflow-hidden transition-[height] duration-500"
      >
        <section className="choose-version mt-24 bg-transparent text-white px-safe lg:mt-[72px] md:mt-16 sm:mt-12">
          <div className="container max-w-[768px] md:max-w-[704px]">
            <Heading text="Comparison table" />
            <div className="mt-11 grid grid-cols-12 lg:mt-[34px] md:mt-[30px] sm:mt-[21px]">
              <div className="col-span-12">
                <Table />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
