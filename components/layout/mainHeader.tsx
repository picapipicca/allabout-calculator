import Link from "next/link";
import { useState } from "react";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={
        "w-full flex align-baseline h-14 bg-stone-800 sticky top-0"
      }
    >
      <div
        className="text-white inline-block no-underline z-10"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <>
            <div className="top-0 left-0 sticky w-64 h-40 bg-slate-400  ease-linear duration-300  py-4 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-xl"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
                />
              </svg>
              <nav className="ease-linear duration-300 block">
                <ul className="py-0 px-5 ">
                  <li className="list-none text-base no-underline">
                    <Link
                      href="/"
                      // className="block py-3 px-5 text-black font-sans text-base font-medium no-underline duration-[250ms] hover:bg-slate-400"
                      className="hover:font-bold"
                    >
                      맞춤법 검사기
                    </Link>
                    <Link
                      href="/"
                      // className="block py-3 px-5 text-black font-sans text-base font-medium no-underline duration-[250ms] hover:bg-slate-400"
                      className="hover:font-bold"
                    >
                      글자 수 세기
                    </Link>
                    <Link
                      href="/"
                      // className="block py-3 px-5 text-black font-sans text-base font-medium no-underline duration-[250ms] hover:bg-slate-400"
                      className="hover:font-bold"
                    >
                      연봉 계산기
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6  my-4 mx-3 text-xl"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>

      <div
        className={
          "text-xl text-white font-sans mx-auto h-full border border-blue-500 flex justify-center items-center no-underline "
        }
      >
        <Link href="/">만능계산기</Link>
      </div>
     
    </header>
  );
};

export default MainHeader;
