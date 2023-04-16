interface ArrowDownProps {
  size: string;
  toggle?: boolean;
}
const ArrowDown = ({ toggle, size = "sm" }: ArrowDownProps) => {
  const sizeObject: { [key: string]: string } = {
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${sizeObject[size]} ${
          toggle ? "transform rotate-180" : ""
        } text-gray-400 group-hover:text-stone-700`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </>
  );
};

export default ArrowDown;
