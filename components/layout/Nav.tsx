import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="fixed z-[2]" >
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 pl-8 bg-white">
        <div className="no-underline text-black font-bold text-2xl sm:text-4xl font-blackHanSans">
         올어바웃 계산기
        </div>

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

      <div
        className={`fixed bg-white shadow-md z-[-2] left-0 w-full h-[40%] overflow-hidden p-16 transition-all ${
          navOpen ? "top-0 delay-[0]" : "delay-[0] -top-full"
        }`}
      >
        <div>
          <ul className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] m-0 p-0 flex flex-col justify-center items-center">
            <li className="list-none relative cursor-pointer">
              <Link
                href={"/differCheck"}
                onClick={() => setNavOpen(!navOpen)}
                className={`${
                  navOpen ? "top-0 delay-[500ms]" : "top-[120px]"
                } md:text-7xl no-underline text-black text-4xl relative transition-all ease-navMenuTF duration-navMenuDuration`}
              >
                다른곳 찾기
              </Link>
              <div className="after:absolute after:top-[10px] after:-left-[10px] after:w-[120%] after:h-full after:my-0 after:mx-auto"></div>
            </li>
            <li className="list-none relative cursor-pointer">
              <Link
                onClick={() => setNavOpen(!navOpen)}
                href={"/"}
                className={`${
                  navOpen
                    ? "top-0 delay-[900ms] transition-all ease-navMenuTF duration-navMenuDuration"
                    : "top-[120px]"
                } md:text-7xl no-underline text-black text-4xl relative `}
              >
                연봉계산기
              </Link>
              <div className="after:absolute after:top-[15px] after:-left-[10px] after:w-[120%] after:h-full  after:my-0 after:mx-auto"></div>
            </li>
            <li className="list-none relative cursor-pointer">
              <Link
                onClick={() => setNavOpen(!navOpen)}
                href={"/grammar"}
                className={`${
                  navOpen ? "top-0 delay-1000" : "top-[120px]"
                } md:text-7xl no-underline text-black text-4xl relative transition-all ease-navMenuTF duration-navMenuDuration`}
              >
                맞춤법 검사기
              </Link>
              <div className="after:absolute after:top-[20px] after:-left-[10px] after:w-[120%] after:h-full after:my-0 after:mx-auto"></div>
            </li>
            <li className="list-none relative cursor-pointer">
              <Link
                onClick={() => setNavOpen(!navOpen)}
                href={"/character"}
                className={`${
                  navOpen ? "top-0 delay-[1100ms]" : "top-[120px]"
                } md:text-7xl no-underline text-black text-4xl relative transition-all ease-navMenuTF duration-navMenuDuration`}
              >
                글자수 세기
              </Link>
              <div className="after:absolute after:top-[35px] after:-left-[10px] after:w-[120%] after:h-full after:my-0 after:mx-auto"></div>
            </li>
            <li className="list-none relative cursor-pointer">
              <Link
                onClick={() => setNavOpen(!navOpen)}
                href={"/bmi"}
                className={`${
                  navOpen ? "top-0 delay-[1100ms]" : "top-[120px]"
                } md:text-7xl no-underline text-black text-4xl relative transition-all ease-navMenuTF duration-navMenuDuration`}
              >
                 비만도 계산기
              </Link>
              <div className="after:absolute after:top-[35px] after:-left-[10px] after:w-[120%] after:h-full after:my-0 after:mx-auto"></div>
            </li>
          </ul>
        </div>

        {/* <div
            className={` ${
              navOpen ? "top-0 delay-150 after:delay-150" : "top-[120px]"
            } translate-y-0 absolute right-0 h-[80%] border border-blue-500 left-0 flex items-end pb-7 font-normal text-[#1c1c1c] bg-red-50 shadow-lg transition-all ease-navMenuTF duration-navMenuDuration`}
          >
            <div className="px-10 w-full mx-auto max-w-max block">
              <div className="p-0 list-none m-0 block">
                <div className="align-bottom w-2/3 inline-block text-base pl-0 list-none text-[#1c1c1c] font-sans ">
                  <div className="block">2023</div>
                </div>
                <div>
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

        <div className="absolute w-full bottom-0 left-0 p-8 flex justify-between sm:justify-around">
          <div className="md:hidden relative -bottom-5 opacity-0 transition-all ease-navMenuTF duration-navMenuDuration font-sans uppercase">
            <span>Toronto , ON</span>
          </div>
          <nav className="nav-social-media">
            <ul className="flex">
              <li className="list-none">
                <Link
                  href={"#"}
                  className="md:py-0 md:px-4 relative -bottom-5 no-underline font-sans text-black uppercase pl-8 opacity-0 transition-all ease-navMenuTF duration-navMenuDuration"
                >
                  Instagram
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href={"#"}
                  className='md:py-0 md:px-4 className="relative -bottom-5 no-underline font-sans text-black uppercase pl-8 opacity-0 transition-all ease-navMenuTF duration-navMenuDuration"'
                >
                  Twitter
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
