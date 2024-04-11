import Image from 'next/image';

import VideoBg from '@/images/pages/about-us/history/video-mask.png';

import Button from '@/components/shared/button';

import PlayIcon from '@/svgs/pages/about-us/play.inline.svg';

export default function HistoryVideo() {
  return (
    <div className="relative flex h-[348px] w-full items-center justify-center rounded-[8px] bg-grey-99 md:h-[275px]">
      <Button
        className="z-[2] flex w-full max-w-[215px] items-center justify-center gap-[11px] px-0 font-semibold leading-dense tracking-snug md:max-w-[200px]"
        size="xl"
        theme="red-filled"
      >
        Watch the video
        <PlayIcon className="h-3 w-2.5" />
      </Button>
      <Image className="object-cover" src={VideoBg} fill={true} alt="Video Background" />
    </div>
  );
}
