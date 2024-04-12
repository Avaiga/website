import AdvantagesList from './advantages-list/advantantages-list';

export default function Hero() {
  return (
    <section className="hero pt-[144px] lg:pt-[135px] md:pt-[119px]">
      <div className="container-narrow md:px-[19px]">
        <div className="text-center">
          <span className="leading-snug text-primary-red">About us</span>
          <h1 className="mx-auto mt-4 max-w-[881px] text-56 font-medium leading-dense tracking-tight lg:max-w-[792px] lg:text-48 md:max-w-[639px] md:text-40">
            We provide an open-source Python full-stack application builder
          </h1>
          <p className="mx-auto mt-5 max-w-[602px] text-20 font-light leading-normal text-white/80 lg:mt-3 lg:max-w-[602px] lg:text-18 md:max-w-[513px]">
            Facilitating your application&apos;s front-end and back-end development with integrated
            services.
          </p>
        </div>
        <AdvantagesList />
      </div>
    </section>
  );
}
