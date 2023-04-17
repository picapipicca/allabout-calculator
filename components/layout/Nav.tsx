import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="fixed z-[2]">
      {/* 최상단 */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 pl-8 bg-white">
        {/* 로고 */}
        <div className="no-underline text-black font-bold text-2xl sm:text-4xl font-blackHanSans">
          올어바웃 계산기
        </div>
        {/* x 표시 */}
        <div
          className="cursor-pointer"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <div
            className={`relative w-9 h-9 cursor-pointer rounded-[50%] ease-[cubic-bezier( 0.25, 0.1, 0.25, 1 )] duration-300 p-7 sm:p-7 hover:bg-slate-200 ${
              navOpen ? "" : ""
            }`}
          >
            <span
              className={` my-0 mx-auto absolute block w-4 sm:w-6 h-[2px] rounded-[10px] left-0 right-0 transition-all duration-[400ms] ${
                navOpen
                  ? "top-[1.7em] sm:top-[1.7em] rotate-[135deg] bg-black"
                  : "rotate-0 bg-black top-[2em]"
              }`}
            ></span>
            <span
              className={` my-0 mx-auto absolute block w-4 sm:w-6 h-[2px] rounded-[10px] left-0 right-0 transition-all duration-[400ms] ${
                navOpen
                  ? "bottom-[1.7em] sm:bottom-[1.7em] rotate-[225deg] bg-black"
                  : "rotate-0 bg-black bottom-[2em]"
              }`}
            ></span>
          </div>
        </div>
      </div>
      {/* 하단 */}
      <div
        className={`bg-white fixed shadow-lg z-[-1] left-0 w-full h-[40%] sm:h-[55%] overflow-hidden p-16 transition-all ease-nav duration-500 ${
          navOpen ? "top-0 delay-150" : "delay-[0] -top-full"
        }`}
      >
        <div className="">
          <ul className=" font-blackHanSans space-y-2 sm:space-y-4 absolute top-[63%] sm:top-[60%] left-1/2 sm:left-3/4 translate-x-[-50%] translate-y-[-50%] m-0 p-0 flex flex-col justify-center items-center">
            <li className="list-none relative cursor-pointer">
              <Link
                href={"/differCheck"}
                onClick={() => setNavOpen(!navOpen)}
                className={`sm:text-3xl no-underline text-black text-3xl relative hover:text-stone-500`}
              >
                다른곳 찾기
              </Link>
              {/* <div className="after:absolute after:top-[10px] after:-left-[10px] after:w-[120%] after:h-full after:my-0 after:mx-auto"></div> */}
            </li>
            <li className="list-none relative cursor-pointer">
              <Link
                onClick={() => setNavOpen(!navOpen)}
                href={"/"}
                className={` sm:text-3xl no-underline text-black text-3xl relative hover:text-stone-500`}
              >
                연봉계산기
              </Link>
              {/* <div className="after:absolute after:top-[15px] after:-left-[10px] after:w-[120%] after:h-full  after:my-0 after:mx-auto"></div> */}
            </li>
            {/* <li className="list-none relative cursor-pointer3>
              <Link
                onClick={() => setNavOpen(!navOpen)}
                href={"/grammar"}
                className={`md:text-5xl no-underline text-black text-3xl relative hover:text-stone-500`}
              >
                맞춤법 검사기
              </Link>
              <div className="after:absolute after:top-[20px] after:-left-[10px] after:w-[120%] after:h-full after:my-0 after:mx-auto"></div>
            </li> */}
            <li className="list-none relative cursor-pointer">
              <Link
                onClick={() => setNavOpen(!navOpen)}
                href={"/character"}
                className={`sm:text-3xl no-underline text-black text-3xl relative hover:text-stone-500`}
              >
                글자수 세기
              </Link>
              {/* <div className="after:absolute after:top-[35px] after:-left-[10px] after:w-[120%] after:h-full after:my-0 after:mx-auto"></div> */}
            </li>
            <li className="list-none relative cursor-pointer">
              <Link
                onClick={() => setNavOpen(!navOpen)}
                href={"/bmi"}
                className={`sm:text-3xl no-underline text-black text-3xl relative hover:text-stone-500`}
              >
                비만도 계산기
              </Link>
              {/* <div className="after:absolute after:top-[35px] after:-left-[10px] after:w-[120%] after:h-full after:my-0 after:mx-auto"></div> */}
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed bg-white shadow-md z-[-2] left-0 w-full h-[48%] sm:h-[70%] overflow-hidden p-16 transition-all ease-nav duration-500 ${
          navOpen ? "top-0 delay-70" : "delay-[0] -top-full"
        }`}
      >
        <div className="absolute w-full bottom-0 left-0 p-8 flex justify-between sm:justify-around font-notoSans">
          <div className="relative -bottom-6 transition-all ease-navMenuTF duration-navMenuDuration font-bold text-3xl sm:text-[7rem]">
            <span>©2023</span>
          </div>
          <nav>
            <ul className="flex space-x-4 text-sm sm:text-base">
              <li className="list-none">
                <Link
                  href={"#"}
                  className=" md:py-0 md:px-4 relative -bottom-8 sm:-bottom-10 no-underline text-stone-700 uppercase transition-all ease-navMenuTF duration-navMenuDuration"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href={"#"}
                  className=" md:py-0 md:px-4 relative -bottom-8 sm:-bottom-10 no-underline text-stone-700 uppercase transition-all ease-navMenuTF duration-navMenuDuration"
                >
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
                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
