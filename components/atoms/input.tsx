interface InputProps {
  placeholder?: string;
  isRequired?: boolean;
  type?: "email" | "number" | "text";
  rightInnerLabel?: string;
  leftInnerLabel?: string;
  onChangeHandler?: (...args: any) => void;
  name?: string;
  value?: any;
  defaultValueKey?: any;
  simple?: boolean;
  readOnly?: boolean;
}

const Input = ({
  name,
  onChangeHandler,
  type = "text",
  isRequired = false,
  rightInnerLabel,
  placeholder,
  value,
  defaultValueKey,
  simple = false,
  leftInnerLabel,
  readOnly = false,
}: InputProps) => {
  return (
    <>
      <div
        className={`relative flex items-center ${
          simple ? "sm:w-full shadow-md" : "shadow-sm"
        }`}
      >
        <div
          className={
            "pointer-events-none absolute left-0 flex items-center justify-center pl-5"
          }
        >
          <span className={"text-lg text-gray-500"}>{leftInnerLabel}</span>
        </div>
        <input
          readOnly={readOnly}
          key={defaultValueKey}
          id={name}
          defaultValue={value}
          onChange={onChangeHandler}
          placeholder={placeholder}
          min={"0"}
          type={type}
          className={`${
            simple
              ? "border border-gray-400 border-r-0 text-xl"
              : "focus:ring-2 focus:ring-gray-700 text-lg"
          } min-h-[60px] m-0 w-full appearance-none px-3 py-2 pr-12 text-right placeholder-neutral-300 shadow-sm focus:outline-none `}
          required={isRequired}
          onWheel={(e: any) => {
            e.target.blur();
          }}
        />
        <div
          className={
            "pointer-events-none absolute right-0 flex items-center justify-center pr-5"
          }
        >
          <span className={"text-lg text-gray-500"}>{rightInnerLabel}</span>
        </div>
      </div>
    </>
  );
};

export default Input;
