interface CheckListIconProps {
  color: string;
  width: number;
  height: number;
  className: string;
}

export default function CheckListIcon({ color, width, height, className }: CheckListIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 16 16"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M12.828 4.183a.65.65 0 010 .881l-6.373 6.753a.565.565 0 01-.832 0L3.173 9.22a.65.65 0 010-.882.565.565 0 01.831 0l2.035 2.157 5.957-6.312a.565.565 0 01.832 0z"
        clipRule="evenodd"
       />
    </svg>
  );
}
