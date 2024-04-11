import PlayIcon from '@/svgs/pages/about-us/play.inline.svg';

export default function HistoryVideo() {
  return (
    <div className="flex h-[348px] w-full items-center justify-center rounded-[8px] bg-grey-99 md:h-[275px]">
      <button
        className="flex w-full max-w-[187px] items-center justify-center gap-3 rounded-[46px] border-2 border-orange-1 bg-orange-5 py-3 text-16 font-medium leading-dense tracking-snug shadow-btn backdrop-blur"
        type="button"
      >
        Watch the video
        <PlayIcon className="h-[6px] w-[7px]" />
      </button>
    </div>
  );
}
