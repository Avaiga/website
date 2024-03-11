import { getMetadata } from '@/lib/get-metadata';

function Home() {
  return (
    <section className="py-32 px-safe">
      <div className="container sm:px-4">
        <div className="mx-auto max-w-[680px] space-y-5">
          <h1 className="text-4xl font-bold">Getting Started 🚀</h1>
          <p className="text-lg">
            Getting started with this project is as simple as cloning the repository and installing
            the dependencies:
          </p>
          <pre className="overflow-x-auto rounded-md bg-[#000] p-4 text-[#fff]">
            <code className="text-base">
              git clone https://github.com/pixel-point/nextjs-typescript-tailwind-starter.git
              <br />
              cd nextjs-typescript-tailwind-starter
              <br />
              npm install
              <br />
              npm run dev
            </code>
          </pre>
          <p className="text-lg">
            We hope you find this starter useful, and we are always open to feedback and
            contributions!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;

export async function generateMetadata() {
  // FIXME: Add real data here
  return getMetadata({
    title: 'Home - Next.js TypeScript Tailwind Starter',
    description: 'Next.js TypeScript Tailwind Starter',
    pathname: '/',
  });
}
