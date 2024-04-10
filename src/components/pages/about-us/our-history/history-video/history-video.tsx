import Button from '@/components/shared/button';

import PlayIcon from '@/svgs/pages/about-us/play.inline.svg';

export default function HistoryVideo() {
  return (
    <div className="flex h-[348px] w-full items-center justify-center rounded-[8px] bg-grey-99">
      <Button
        className="z-[2] flex items-center justify-center gap-3 border-orange-1"
        size="lg"
        theme="red-outline"
      >
        Watch the video
        <PlayIcon className="h-[6px] w-[7px]" />
      </Button>
    </div>
  );
}
