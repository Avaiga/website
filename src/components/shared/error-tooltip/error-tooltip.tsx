function ErrorTooltip({ message }: { message: string | undefined }) {
  if (!message) {
    return null;
  }

  return (
    <div className="tooltip absolute top-[calc(100%+10px)] z-20">
      <span className="absolute left-0 whitespace-nowrap rounded border bg-primary-dark-red p-3 pl-[38px] text-14 leading-tight tracking-snug text-primary-red before:absolute before:inset-0 before:z-10 before:bg-[url('/images/svgs/error.svg')] before:bg-[length:18px_18px] before:bg-[12px] before:bg-no-repeat">
        {message}
      </span>
      <span className="absolute bottom-0 left-5 z-30 h-2.5 w-2.5 translate-y-[51%] rotate-45 rounded-tl-sm border-l border-t border-l-primary-red border-t-primary-red bg-primary-dark-red" />
    </div>
  );
}

export default ErrorTooltip;
