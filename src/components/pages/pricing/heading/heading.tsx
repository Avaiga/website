type HeadingProps = {
  text: string;
};

function Heading({ text }: HeadingProps) {
  return <h1 className="text-center text-56 font-semibold leading-dense tracking-tight">{text}</h1>;
}

export default Heading;
