import Image from 'next/image';

import Link from '@/components/shared/link';

import { CustomerStory } from '@/types/blog';

import { urlForImage } from '@/lib/sanity/image';

interface CustomerStoryItemProps {
  post: CustomerStory;
  isPriorityLoad?: boolean;
}

function CustomerStoryItem({ post, isPriorityLoad = false }: CustomerStoryItemProps) {
  const { title, cover, companyLogo, slug, lead } = post;

  return (
    <article className="mb-[88px] flex items-center gap-x-16 lg:mb-[72px] lg:gap-x-8 md:flex-col-reverse">
      <div className="md:mt-10 sm:mt-6">
        {companyLogo && (
          <div className="relative h-10 w-auto lg:h-9 sm:h-6">
            <Image
              className="object-contain object-left"
              src={urlForImage(companyLogo).height(80).url()}
              alt="Company logo"
              priority={isPriorityLoad}
              fill
            />
          </div>
        )}
        <h1 className="mt-9 text-24 font-medium leading-tight lg:mt-6 md:mt-5 sm:mt-4 sm:text-18">
          {title}
        </h1>
        <p className="mb-6 mt-4 font-light text-grey-80 md:mb-[18px] md:mt-3.5 sm:mb-4 sm:mt-2.5 sm:text-16">
          {lead}
        </p>
        <Link
          className="text-16 leading-snug"
          href={`/testimonials/${slug.current}`}
          theme="white"
          arrowTheme="red"
        >
          Read more
        </Link>
      </div>
      <div className="shrink-0 md:w-full">
        {cover && (
          <Image
            className="rounded-lg object-cover lg:h-auto lg:max-w-[480px] md:w-full md:max-w-none"
            src={urlForImage(cover).width(1152).height(720).url()}
            width={576}
            height={360}
            alt={title}
            priority={isPriorityLoad}
            placeholder={cover.asset?.metadata?.lqip ? 'blur' : 'empty'}
            blurDataURL={cover.asset?.metadata?.lqip ?? ''}
          />
        )}
      </div>
    </article>
  );
}

export default CustomerStoryItem;
