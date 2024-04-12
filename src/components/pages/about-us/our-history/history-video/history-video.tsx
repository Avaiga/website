import Image from 'next/image';

import VideoBg from '@/images/pages/about-us/history/video-mask.jpg';

import Button from '@/components/shared/button';

import PlayIcon from '@/svgs/pages/about-us/play.inline.svg';

export default function HistoryVideo() {
  return (
    <div className="relative flex h-[348px] w-full items-center justify-center rounded-[8px] border border-grey-85 bg-grey-99 lg:h-[275px] md:h-[196px]">
      <Button
        className="z-[2] flex w-full max-w-[215px] items-center justify-center gap-[11px] px-0 font-semibold leading-dense tracking-snug lg:max-w-[200px] md:max-w-[169px]"
        size="xl"
        theme="red-filled"
        href="https://www.youtube.com/watch?v=cAyMH9rq8gM&t=4s"
      >
        Watch the video
        <PlayIcon className="h-3 w-2.5" />
      </Button>
      <Image
        className="rounded-[8px] object-cover"
        src={VideoBg}
        fill={true}
        alt="Video Background"
      />
    </div>
  );
}
