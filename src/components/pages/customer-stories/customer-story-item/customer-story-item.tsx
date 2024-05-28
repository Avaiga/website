import Image from 'next/image';

import { ROUTES } from '@/constants/routes';

import Link from '@/components/shared/link';

import { CustomerStory } from '@/types/customer-story';

import { urlForImage } from '@/lib/sanity/image';

interface CustomerStoryItemProps {
  post: CustomerStory;
  isPriorityLoad?: boolean;
}

function CustomerStoryItem({ post, isPriorityLoad = false }: CustomerStoryItemProps) {
  const { title, cover, companyLogo, slug, lead } = post;

  return (
    <article className="mb-[88px] flex items-center gap-x-16 lg:mb-[72px] lg:gap-x-8 md:mb-0 md:flex-col-reverse">
      <div className="md:mt-7 sm:mt-6">
        {companyLogo && (
          <div className="relative h-10 w-auto lg:h-9 md:h-6">
            <Link href={`${ROUTES.CUSTOMER_STORIES}/${slug.current}`}>
              <Image
                className="object-contain object-left"
                src={urlForImage(companyLogo).height(80).url()}
                alt={companyLogo.asset.altText ?? 'Company logo'}
                priority={isPriorityLoad}
                fill
              />
            </Link>
          </div>
        )}
        <Link href={`${ROUTES.CUSTOMER_STORIES}/${slug.current}`}>
          <h1 className="mt-9 text-24 font-medium leading-tight lg:mt-6 md:mt-[18px] sm:mt-4 sm:text-18">
            {title}
          </h1>
        </Link>
        <p className="mb-6 mt-4 text-18 font-light text-grey-80 md:mt-3 sm:mb-[18px] sm:mt-2.5 sm:text-16">
          {lead}
        </p>
        <Link
          className="text-16 leading-snug"
          href={`${ROUTES.CUSTOMER_STORIES}/${slug.current}`}
          theme="white"
          arrowTheme="red"
        >
          Read more
        </Link>
      </div>
      <div className="shrink-0 md:w-full">
        {cover && (
          <Link href={`${ROUTES.CUSTOMER_STORIES}/${slug.current}`}>
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
          </Link>
        )}
      </div>
    </article>
  );
}

export default CustomerStoryItem;
