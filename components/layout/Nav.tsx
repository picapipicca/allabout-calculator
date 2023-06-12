import React, { useState } from "react";
import Link from "next/link";
import Github from "../icons/github";
import Email from "../icons/email";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="fixed z-[2]">
      {/* 최상단 */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 pl-8 bg-white">
        {/* 로고 */}
        <div className="no-underline text-black font-[300] text-3xl sm:text-[37px] font-Black">
          <Link href={"/"}>올어바웃 계산기</Link>
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
        className={`bg-white fixed shadow-lg z-[-1] left-0 w-full h-[43%] sm:h-[55%] overflow-hidden p-16 transition-all ease-nav duration-500 ${
          navOpen ? "top-0 delay-150" : "delay-[0] -top-full"
        }`}
      >
        <div className="">
          <ul className="sm:text-[34px] text-[30px] font-Black sm:space-y-2 absolute top-[63%] sm:top-[60%] left-1/2 sm:left-3/4 translate-x-[-50%] translate-y-[-50%] m-0 p-0 flex flex-col justify-center items-center">
            <li className="list-none relative cursor-pointer">
              <Link
                href={"/differCheck"}
                onClick={() => setNavOpen(!navOpen)}
                className={`no-underline text-black relative hover:text-stone-500`}
              >
                다른곳 찾기
              </Link>
              {/* <div className="after:absolute after:top-[10px] after:-left-[10px] after:w-[120%] after:h-full after:my-0 after:mx-auto"></div> */}
            </li>
            <li className="list-none relative cursor-pointer">
              <Link
                onClick={() => setNavOpen(!navOpen)}
                href={"/"}
                className={`no-underline text-black  relative hover:text-stone-500`}
              >
                연봉계산기
              </Link>
              {/* <div className="after:absolute after:top-[15px] after:-left-[10px] after:w-[120%] after:h-full  after:my-0 after:mx-auto"></div> */}
            </li>
            {/* <li className="list-none relative cursor-pointer3>
              <Link
                onClick={() => setNavOpen(!navOpen)}
                href={"/grammar"}
                className={`md:text-5xl no-underline text-black text-[32px] relative hover:text-stone-500`}
              >
                맞춤법 검사기
              </Link>
              <div className="after:absolute after:top-[20px] after:-left-[10px] after:w-[120%] after:h-full after:my-0 after:mx-auto"></div>
            </li> */}
            <li className="list-none relative cursor-pointer">
              <Link
                onClick={() => setNavOpen(!navOpen)}
                href={"/character"}
                className={`no-underline text-black  relative hover:text-stone-500`}
              >
                글자수 세기
              </Link>
              {/* <div className="after:absolute after:top-[35px] after:-left-[10px] after:w-[120%] after:h-full after:my-0 after:mx-auto"></div> */}
            </li>
            <li className="list-none relative cursor-pointer">
              <Link
                onClick={() => setNavOpen(!navOpen)}
                href={"/bmi"}
                className={`no-underline text-black relative hover:text-stone-500`}
              >
                비만도 계산기
              </Link>
              {/* <div className="after:absolute after:top-[35px] after:-left-[10px] after:w-[120%] after:h-full after:my-0 after:mx-auto"></div> */}
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed bg-white shadow-md z-[-2] left-0 w-full h-[49%] sm:h-[68%] overflow-hidden p-16 transition-all ease-nav duration-500 ${
          navOpen ? "top-0 delay-70" : "delay-[0] -top-full"
        }`}
      >
        <div className="absolute w-full bottom-0 left-0 p-8 flex justify-between sm:justify-around font-Noto">
          <div className="relative -bottom-8 sm:-bottom-7 transition-all ease-navMenuTF duration-navMenuDuration font-bold text-3xl sm:text-[7rem]">
            <span>©2023</span>
          </div>
          <nav>
            <ul className="flex space-x-4 text-sm sm:text-base">
              <li className="list-none">
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={"https://github.com/picapipicca/allabout-calculator"}
                  className=" md:py-0 md:px-4 relative -bottom-11 sm:-bottom-12 no-underline text-stone-700 uppercase transition-all ease-navMenuTF duration-navMenuDuration"
                >
                  <Github />
                </Link>
              </li>
              <li className="list-none">
                <Link
                  title="개발자에게 이메일 보내기"
                  href={`mailto:haewon09106@gmail.com`}
                  className=" md:py-0 md:px-4 relative -bottom-11 sm:-bottom-12 no-underline text-stone-700 uppercase transition-all ease-navMenuTF duration-navMenuDuration"
                >
                  <Email />
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
