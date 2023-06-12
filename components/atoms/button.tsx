import React, { ReactNode } from "react";

interface ButtonProps {
  children: string | number | ReactNode;
  clickHandler?: (...args: any) => void;
  disabled?: boolean;
  extraClass?: string;
  size?: "sm" | "md" | "lg" | "full";
  buttonType?: "icon" | "amount" | "default" | "primary" | "text";
}
const buttonClass: { [key: string]: string } = {
  icon: "items-center text-center text-gray-400 rounded-lg flex text-xs h-fit bg-transparent hover:bg-gray-200 hover:text-gray-900",
  text: "items-center text-stone-500 font-semibold hover:text-stone-800 mx-auto",
  primary:
    "bg-primary-500 hover:bg-primary-600 text-white font-semibold border shadow-md inline-block mx-auto",
  default:
    "text-stone-600 hover:text-primary-600 hover:border-primary-600 font-semibold border shadow-md inline-block mx-auto flex items-center",
};

const buttonSize: { [key: string]: string } = {
  sm: "h-8 px-4 text-base",
  md: "h-10 px-10 text-base",
  lg: "h-14 px-10 text-base",
  full: "w-full h-8 text-base",
};

const Button = ({
  size="full",
  extraClass,
  disabled = false,
  children,
  clickHandler,
  buttonType = "default",
}: ButtonProps) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={clickHandler}
        className={`${buttonClass[buttonType]} ${
          buttonSize[size]
        } ${extraClass} cursor-pointer ${
          disabled ? "disabled:pointer-events-none disabled:opacity-50" : ""
        }`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
