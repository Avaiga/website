import clsx from 'clsx';

type HeadingProps = {
  text: string;
  className?: string;
};

function Heading({ text, className }: HeadingProps) {
  return (
    <h2
      className={clsx(
        'text-center text-56 font-semibold leading-dense tracking-tight lg:text-40 md:text-36 sm:text-32',
        className,
      )}
    >
      {text}
    </h2>
  );
}

export default Heading;
