interface PageHeaderProps {
  tagline: string;
  headerText: string;
}

function PageHeader({ tagline, headerText }: PageHeaderProps) {
  return (
    <section className="hero pt-32 lg:pt-28 md:pt-20">
      <div className="container text-center">
        <span className="mx-auto leading-snug text-primary-red md:text-14">{tagline}</span>
        <h1 className="mx-auto mt-6 max-w-[634px] text-48 font-semibold leading-dense tracking-tight lg:text-40 md:mt-4 md:max-w-[368px] md:text-32 sm:max-w-[322px] sm:text-28">
          {headerText}
        </h1>
      </div>
    </section>
  );
}

export default PageHeader;
