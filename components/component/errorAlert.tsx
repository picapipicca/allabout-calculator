const ErrorAlert = (props: any) => {
  return <div className={"my-4 mx-auto py-4 px-8 w-11/12 max-w-xl bg-violet-300 font-bold text-2xl text-center rounded-md"}>{props.children}</div>;
};

export default ErrorAlert;
