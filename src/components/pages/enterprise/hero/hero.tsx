import Button from '@/components/shared/button';

import DesignIcon from '@/svgs/pages/enterprise/hero/design-icon.inline.svg';
import MagnifierIcon from '@/svgs/pages/enterprise/hero/magnifier.inline.svg';

export default function Hero() {
  return (
    <section className="hero pt-[168px]">
      <div className="container-narrow text-center">
        <p className="text-16 font-normal leading-snug text-primary-red">
          Taipy Enterprise Edition
        </p>
        <h1 className="mx-auto w-full max-w-[960px] pt-6 text-48 font-medium leading-dense tracking-[-1.92px]">
          We help organizations increase efficiency, cut costs, increase profits, and make better
          business decisions.
        </h1>
        <p className="mx-auto mt-5 w-full max-w-[642px] pt-4 text-20 font-light leading-normal text-white/80">
          Technology you can trust. Built on Python with decades of industry expertise, we never
          stop innovating. You can count on us to deliver products that address your needs today and
          in the future.
        </p>

        <Button
          className="mt-6 w-full max-w-[180px] md:max-w-40 sm:max-w-[150px]"
          size="lg"
          theme="red-filled"
        >
          Request a demo
        </Button>
        <div className="flex w-full max-w-[960px] justify-between rounded-lg bg-gradient-card px-[32px] pb-[29px] pt-[32px]">
          <ul className="w-full max-w-[321px] text-start">
            <li className="">
              <DesignIcon className="h-8 w-8" alt="Design Icon" />
            </li>
            <li className="pt-[21px]">
              <b className="text-20 font-medium leading-dense tracking-[-0.8px]">
                Ease of use: Taipy Designer
              </b>
              <p className="pt-4 text-16 font-normal leading-snug text-grey-70">
                Create a user-friendly web interface effortlessly for your Python projects.
                Streamline your workflow by effortlessly crafting interactive web interfaces without
                the need for a single line of code
              </p>
            </li>
          </ul>
          <div className="w-full max-w-[208px] text-start">
            <b className="text-12 font-medium leading-normal tracking-[-0.24px]">Widgets</b>
            <label className="relative">
              <input
                className="w-full rounded-md bg-input-grey py-1 pl-6"
                type="text"
                placeholder="Search widgets"
              />
              <MagnifierIcon className="absolute h-2 w-2" alt="Magnifier" />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
