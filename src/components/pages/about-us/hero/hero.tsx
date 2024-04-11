import AdvantagesList from './advantages-list/advantantages-list';

export default function Hero() {
  return (
    <section className="hero pt-[144px] lg:pt-[135px]">
      <div className="container-narrow">
        <div className="text-center">
          <span className="leading-snug text-primary-red">About us</span>
          <h1 className="mx-auto mt-4 max-w-[881px] text-56 font-medium leading-dense tracking-tight lg:max-w-[792px] lg:text-48">
            We provide an open-source Python full-stack application builder
          </h1>
          <p className="mx-auto mt-5 max-w-[602px] text-20 font-light leading-normal text-white/80 lg:mt-3 lg:max-w-[602px] lg:text-18">
            Facilitating your application&apos;s front-end and back-end development with integrated
            services.
          </p>
        </div>
        <AdvantagesList />
      </div>
    </section>
  );
}
