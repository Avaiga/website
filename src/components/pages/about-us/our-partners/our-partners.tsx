import PartnersList from './partners-list';

export default function OurPartners() {
  return (
    <section className="our-partners pt-[200px] lg:pt-[142px] md:pt-[128px]">
      <div className="container-narrow max-w-[1345px] text-center">
        <span className="text-16 font-normal leading-snug text-primary-red">
          Customers and partners
        </span>
        <h2 className="pt-4 text-56 font-semibold leading-dense tracking-tight lg:text-48 md:text-40">
          They speak for us
        </h2>
        <p className="mx-auto w-full max-w-[664px] pt-4 text-18 font-light leading-normal text-grey-70 md:max-w-[609px]">
          Whether standalone or paired, Taipy connects effortlessly with leading data platforms,
          amplifying your application&apos;s potential.
        </p>
        <PartnersList />
      </div>
    </section>
  );
}
