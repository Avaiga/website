import AdvantagesList from './advantages-list/advantantages-list';

export default function Hero() {
  return (
    <section className="hero pt-[144px]">
      <div className="container-narrow ">
        <div className="text-center">
          <span className="text-16 font-normal leading-snug text-primary-red">About us</span>
          <h1 className="mx-auto mt-4 w-full max-w-[881px] text-56 font-medium leading-dense tracking-tight">
            We provide an open-source Python full-stack application builder
          </h1>
          <p className="mx-auto mt-5 w-full max-w-[602px] text-20 font-light leading-normal text-white/80">
            Facilitating your application&apos;s front-end and back-end development with integrated
            services.
          </p>
        </div>
        <AdvantagesList />
      </div>
    </section>
  );
}
