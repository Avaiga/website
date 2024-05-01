import TeamList from './team-list';

// TODO: rewrite this
export default function OurTeam() {
  return (
    <section className="our-team pt-[200px] lg:pt-[146px] md:pt-[128px] sm:pt-[82px]">
      <div className="container-narrow max-w-[984px]">
        <div className="mx-auto w-full text-center">
          <span className="text-16 font-normal leading-snug text-primary-red">Our team</span>
          <h2 className="mx-auto max-w-[899px] pt-4 text-48 font-semibold leading-dense tracking-tight lg:max-w-[820px] lg:pt-3.5 lg:text-44 md:max-w-full md:text-36 sm:text-28">
            A management team that leverages years of industry experience with todays innovative
            technologies.
          </h2>
          <p className="mx-auto max-w-[680px] pt-4 text-18 font-light leading-snug tracking-snug text-grey-70 lg:pt-5 md:max-w-full sm:pt-2.5 sm:text-16">
            We are committed to helping organizations gain visibility into their IT infrastructure
            providing a platform that is flexible and easy to use.
          </p>
        </div>
        <TeamList />
      </div>
    </section>
  );
}
