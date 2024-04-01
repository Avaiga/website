export default function InnerPageLayout({
  children,
  sidebar = null,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <section className="min-h-screen pt-32">
      <div className="container grid max-w-[1810px] grid-cols-14 gap-x-16 px-10">
        <div className="col-span-2">{sidebar}</div>
        <div className="col-span-10 col-start-3 grid gap-y-[58px]">{children}</div>
      </div>
    </section>
  );
}
