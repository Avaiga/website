// import Button from '@/components/shared/button';

type HeroProps = {
  [key: string]: string;
};

export default function Hero({ tag, heading, description }: HeroProps) {
  return (
    <section className="hero pt-[113px] lg:pt-[102px] md:pt-[81px] sm:pt-[91px]">
      <div className="container-narrow max-w-5xl text-center lg:max-w-4xl">
        <p className="leading-snug text-primary-red sm:text-14">{tag}</p>
        <h1 className="mx-auto pt-5 text-56 font-semibold leading-dense tracking-tight lg:max-w-[832px] lg:text-40 md:max-w-[640px] md:pt-3.5 md:text-32 sm:text-28">
          {heading}
        </h1>
        <p className="mx-auto max-w-[642px] pt-5 leading-snug opacity-80 lg:max-w-xl md:pt-4 sm:pt-3.5 sm:text-14">
          {description}
        </p>
        {/*<Button*/}
        {/*  className="relative z-10 mt-[46px] w-full max-w-[180px] lg:mt-7 sm:mt-[22px]"*/}
        {/*  size="lgConst"*/}
        {/*  theme="red-filled"*/}
        {/*  href={buttonLink}*/}
        {/*>*/}
        {/*  {buttonText}*/}
        {/*  <span className="absolute top-[-51px] -z-10 h-[190px] w-full max-w-9 rotate-90 bg-hero-btn-enterprise blur-[36px]" />*/}
        {/*</Button>*/}
      </div>
    </section>
  );
}
