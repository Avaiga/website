import Button from '@/components/shared/button';

import PlayIcon from '@/svgs/pages/about-us/play.inline.svg';

export default function HistoryVideo() {
  return (
    <div className="flex h-[348px] w-full items-center justify-center rounded-[8px] bg-grey-99">
      <Button
        className="z-[2] flex w-full max-w-[187px] items-center justify-center gap-[11px] border-orange-1 px-0 tracking-snug"
        size="lg"
        theme="red-outline"
      >
        Watch the video
        <PlayIcon className="h-1.5 w-[7px]" />
      </Button>
    </div>
  );
}
