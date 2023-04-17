import Footer from "@/components/layout/footer";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import ReactDiffViewer, {
  DiffMethod,
  ReactDiffViewerProps,
} from "react-diff-viewer-continued";

const DifferCheck: NextPage = () => {
  const [oldCode, setOldCode] = useState("");
  const [newCode, setNewCode] = useState("");
  const [toggle, setToggle] = useState(false);

  const newStyles = {
    variables: {
      light: {
        codeFoldGutterBackground: "#f6fad7",
        codeFoldBackground: "#f8faeb",
      },
    },
  };

  return (
      <div className="mx-auto h-full relative">
        <div className="min-h-[calc(100vh-61px)] mx-auto w-full items-center sm:min-w-[295px] px-10 sm:px-20 pt-24">
          <h1 className="title-clip-path absolute m-[-1px] grid h-[1px] w-[1px] items-center gap-2.5 overflow-hidden">
            text difference checker
          </h1>

          <header className="py-6">
            <h2 className="font-medium">
              <span className="font-bold text-xl text-red-600">How to ?</span>{" "}
              &nbsp; 좌,우 칸에 비교하고 싶은 문장들을 각각 넣고 확인하기 버튼을
              눌러주세요.{" "}
            </h2>
          </header>
          <main>
            <section>
              <div className="flex w-full mb-12">
                <textarea
                  value={oldCode}
                  rows={15}
                  cols={40}
                  className="border-2 border-gray-200 p-2 w-full bg-red-100 focus:border-primary-400 outline-none"
                  onChange={(e) => {
                    setToggle(false);
                    setOldCode(e.target.value);
                  }}
                ></textarea>
                <textarea
                  value={newCode}
                  rows={15}
                  cols={40}
                  className="border-2 border-gray-200 border-l-gray-200 p-2 w-full bg-emerald-100 focus:border-primary-400 outline-none"
                  onChange={(e) => {
                    setToggle(false);
                    setNewCode(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="flex">
                <button
                  onClick={() => {
                    setToggle(true);
                  }}
                  className="rounded-full bg-primary-500 hover:bg-primary-600 text-white font-bold w-1/3 sm:w-1/6 border py-2 shadow-md block mx-auto"
                >
                  확인하기
                </button>
                <button
                  onClick={() => {
                    setOldCode("");
                    setNewCode("");
                    setToggle(false);
                  }}
                  className="rounded-full bg-[#f5f8fa] text-stone-600 hover:bg-[#e3e6e8] font-bold w-1/3 sm:w-1/6 border py-2 shadow-md block mx-auto"
                >
                  전체 삭제
                </button>
              </div>
            </section>
            {toggle && oldCode && newCode ? (
              <section className="sm:pb-32 sm:pt-20">
                <ReactDiffViewer
                  oldValue={oldCode}
                  newValue={newCode}
                  splitView={true}
                  compareMethod={DiffMethod.WORDS}
                  styles={newStyles}
                  leftTitle={"버전 A"}
                  rightTitle={"버전 B"}
                  codeFoldMessageRenderer={(totalFoldedLines) => (
                    <p className="text-base font-medium no-underline">{`${totalFoldedLines}줄 펼쳐보기`}</p>
                  )}
                />
              </section>
            ) : oldCode === "" && newCode === "" && toggle ? (
              <section>
                <div className="py-4 text-center">
                  <span className="text-red-500 font-bold text-lg">
                    비교할 문장을 입력해주세요{" "}
                  </span>
                </div>
              </section>
            ) : null}
          </main>
        </div>
        <Footer />
      </div>
    
  );
};

export default DifferCheck;
