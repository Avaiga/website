import AdvantagesList from './advantages-list/advantantages-list';

export default function Hero() {
  return (
    <section className="hero pb-[176px] pt-[144px]">
      <div className="container-narrow flex flex-col gap-11">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="w-full max-w-[881px] text-center text-56 font-medium leading-dense tracking-tight">
            We provide an open-source Python full-stack application builder
          </h1>
          <p className="mt-1 w-full max-w-[602px] text-center text-20 font-light leading-normal opacity-80">
            Facilitating your application&aposs front-end and back-end development with integrated
            services.
          </p>
          <span className="order-first text-16 font-normal leading-snug text-primary-red">
            About us
          </span>
        </div>
        <AdvantagesList />
      </div>
    </section>
  );
}
