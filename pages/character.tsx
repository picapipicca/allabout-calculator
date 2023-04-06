import { NextPage } from "next";
import { useState } from "react";

const CharacterCalculator: NextPage = () => {
  const [text, setText] = useState<string>("");
  const textTrim = text.replace(/\s| /gi, "").length;
  const getBytes = (text: string) => {
    let character;
    let charBytes = 0;
    for (let i = 0; i < text.length; i += 1) {
      character = text.charAt(i);
      if (escape(character).length > 4) charBytes += 2;
      else charBytes += 1;
    }
    return { charBytes };
  };
  const { charBytes } = getBytes(text);
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert("복사되었습니다.");
  };
  return (
    <>
      <div className="max-h-max min-h-screen bg-[#f5f8fa] pt-24">
        <div className="mx-auto min-w-[295px] px-10 sm:px-20">
          <h1 className="title-clip-path absolute m-[-1px] grid h-[1px] w-[1px] items-center gap-2.5 overflow-hidden">
            글자수 세기
          </h1>
          <div className="flex justify-between items-center">
            <header>글자수 세기</header>
            <button
              className="bg-[#f6fdff] border flex justify-center items-center rounded-md h-8 px-3 text-md shadow-lg hover:bg-sky-100 disabled:pointer-events-none disabled:opacity-50"
              onClick={copy}
              disabled={!text}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                />
              </svg>
              &nbsp; 전체 복사
            </button>
          </div>
          <main>
            <section>
              <textarea
                id="text-calculator-area"
                placeholder="글자수를 세고 싶은 내용을 입력하세요."
                className="w-full h-64 p-4 mt-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                rows={8}
                cols={40}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              ></textarea>
              <div className=" py-2 space-y-1.5">
                <p className="text-lg">
                  공백 포함 &nbsp;{" "}
                  <span className="font-bold text-[#2169fa]">
                    {text.length}
                  </span>
                  자 | {charBytes} byte
                </p>
                <p className="text-lg">
                  공백 제외 &nbsp;{" "}
                  <span className="font-bold text-[#2169fa]">{textTrim}</span>자
                  | {charBytes - (text.length - textTrim)} byte
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};
export default CharacterCalculator;
