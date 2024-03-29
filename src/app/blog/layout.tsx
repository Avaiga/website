import Sidebar from '@/components/pages/blog/sidebar';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-[64px] min-h-screen">
      <div className="container relative max-w-[1344px]">
        <div className="absolute right-[100%] z-[1] w-48">
          <Sidebar />
        </div>
      </div>
      {children}
    </div>
  );
}
