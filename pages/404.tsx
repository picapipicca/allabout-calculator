import Link from "next/link";


const Custom404 = () => {
  return (
    <>
      <div className="max-h-max min-h-screen bg-white pt-16">
        <div className="mx-auto min-w-[295px] max-w-[80%] items-center justify-center md:max-w-lg">
          <div className="w-48 h-48 bg-gray-400 mt-20 mx-auto">직접만든 x 이미지~</div>
          <div className="group py-3 mt-10 justify-center sm:mt-3 h-20 w-full items-center whitespace-nowrap bg-primary-100 px-4  hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-700">
            <h1 className="mb-1 text-2xl font-bold text-black">
              잘못된 경로입니다!
            </h1>
            <Link href="/">
              <button className="justify-between flex text-base font-semibold text-primary-500 group-hover:text-primary-600 w-full">
                <span>홈으로 가기 </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Custom404;
