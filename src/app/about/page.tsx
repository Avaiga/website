import Image from 'next/image';

import nextJsLogo from '@/images/nextjs-logo.png';
import tailwindCssLogo from '@/images/tailwindcss-logo.png';
import typeScriptLogo from '@/images/typescript-logo.png';

import { getMetadata } from '@/lib/get-metadata';

function About() {
  return (
    <section className="py-32 px-safe">
      <div className="container sm:px-4">
        <div className="mx-auto max-w-[680px] space-y-5">
          <div className="flex items-center gap-x-3.5">
            <Image src={nextJsLogo} height={16} width={80} alt="" priority />
            <Image src={typeScriptLogo} width={20} height={20} alt="" priority />
            <Image src={tailwindCssLogo} width={30} height={30} alt="" priority />
          </div>
          <h1 className="text-4xl font-bold">NextJS TypeScript Tailwind Starter 👋</h1>
          <p className="text-lg">
            Welcome to the NextJS TypeScript Tailwind Starter project! This project is designed to
            help you hit the ground running when starting a new project using Next.js, TypeScript,
            and Tailwind CSS.
          </p>
          <p className="text-lg">
            Our goal is to save you time and effort by providing a clean, well-organized boilerplate
            that includes all of the necessary configurations and basic functionalities. This allows
            you to focus on building your unique features and content, rather than setting up your
            project infrastructure.
          </p>

          <h2 className="text-2xl font-bold">Features</h2>
          <ul className="list-disc space-y-3.5 text-lg">
            <li>
              <strong>Next.js:</strong> Enjoy the benefits of a hybrid static & server rendering,
              TypeScript support, smart bundling, route pre-fetching, and more.
            </li>
            <li>
              <strong>TypeScript:</strong> Benefit from static typing and modern JavaScript
              features, improving your development experience with better tooling and error
              prevention.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> Utilize this highly customizable, low-level CSS
              framework to design unique and responsive layouts without writing a single line of
              CSS.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

export async function generateMetadata() {
  // FIXME: Add real data here
  return getMetadata({
    title: 'About - Next.js TypeScript Tailwind Starter',
    description: 'Next.js TypeScript Tailwind Starter',
    pathname: '/',
  });
}
