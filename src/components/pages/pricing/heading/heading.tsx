import clsx from 'clsx';

type HeadingProps = {
  text: string;
  className?: string;
};

function Heading({ text, className }: HeadingProps) {
  return (
    <h1
      className={clsx(
        'text-center text-56 font-semibold leading-dense tracking-tight lg:text-40',
        className,
      )}
    >
      {text}
    </h1>
  );
}

export default Heading;
