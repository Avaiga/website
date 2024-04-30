import Image from 'next/image';

import { ContentBlockProps, ContentPicture } from '@/types/blog';

import { urlForImage } from '@/lib/sanity/image';

function Picture({ value }: ContentBlockProps<ContentPicture>) {
  const imageUrl = urlForImage(value).width(1456).ignoreImageParams().url();

  if (!imageUrl) {
    return null;
  }

  return (
    <figure className="not-prose my-8 lg:my-7 md:my-6 sm:my-5">
      <Image
        className="w-full rounded-lg"
        src={imageUrl}
        width={704}
        height={296}
        sizes="100vw"
        alt={value.alt || ''}
      />
      {value?.caption && (
        <figcaption className="mt-2.5 text-center text-14 leading-relaxed text-grey-70 sm:text-12">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default Picture;
