import { NextPage } from "next";
import { useState } from "react";
import ReactDiffViewer from "react-diff-viewer-continued";

const DifferCheck: NextPage = () => {
  const [oldCode, setOldCode] = useState("");
  const [newCode, setNewCode] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="max-h-max min-h-screen bg-[#f5f8fa] pt-24">
        <div className="mx-auto min-w-[295px] px-10 sm:px-20">
          <h1 className="title-clip-path absolute m-[-1px] grid h-[1px] w-[1px] items-center gap-2.5 overflow-hidden">
            differ checker
          </h1>

          <header>diffChecker</header>
          <main>
            <section className="mb-12">
              <div className="flex w-full mb-12">
                <textarea
                  rows={8}
                  cols={40}
                  className="border-2 border-gray-200 border-r-0 p-2 w-full bg-red-100 focus:border-primary-400 outline-none"
                  onChange={(e) => {
                    setToggle(false);
                    setOldCode(e.target.value);
                  }}
                ></textarea>
                <textarea
                  rows={8}
                  cols={40}
                  className="border-2 border-gray-200 border-l-gray-200 p-2 w-full bg-emerald-100 focus:border-primary-400 outline-none focus:border-l-0"
                  onChange={(e) => {
                    setToggle(false);
                    setNewCode(e.target.value);
                  }}
                ></textarea>
              </div>

              <button
                onClick={() => {
                  setToggle(true);
                }}
                className="rounded-full bg-primary-500 text-white font-bold w-1/6 border py-2 shadow-md block mx-auto"
              >
                확인하기
              </button>
            </section>
            <section>
              {toggle && oldCode && newCode ? (
                <ReactDiffViewer
                  oldValue={oldCode}
                  newValue={newCode}
                  splitView={true}
                />
              ) : oldCode === "" && newCode === "" && toggle ? (
                <div className="py-4 text-center">
                  <span className="text-red-500 font-bold text-lg">
                    비교할 문장을 입력해주세요{" "}
                  </span>
                </div>
              ) : null}
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default DifferCheck;
