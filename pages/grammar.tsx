import { NextPage, GetStaticProps } from "next";
// import * as DOMPurify from "dompurify";
import DOMPurify from 'isomorphic-dompurify';
import { useState } from "react";
// const hanspell = require("hanspell");

const GrammarChecker: NextPage = () => {
  // const [sentence, setSentence] = useState("가나다라 므브스 안녕 하세요?");
  // const end = () => {
  //   console.log("// check ends");
  // };
  // const error = (error: any) => {
  //   console.error("// hanspell => " + error);
  // };

  // const checkGrammarD = () => {
  //   console.log("checkGrammarD", sentence);
  //   const newSentenct = DOMPurify.sanitize(sentence);
  //   let results = hanspell.spellCheckByDAUM(
  //     sentence ? newSentenct : "",
  //     10000,
  //     "return",
  //     end,
  //     error
  //   );
  //   console.log("results Daum =>", results);
  // };

  // const checkGrammarP = () => {
  //   let results = hanspell.spellCheckByPNU(
  //     sentence,
  //     10000,
  //     "return",
  //     end,
  //     error
  //   );
  //   console.log("results PNU =>", results);
  // };
  return (
    <>
      <div className="max-h-max min-h-screen bg-[#f5f8fa] pt-24">
        <div className="mx-auto min-w-[295px] px-10 sm:px-20">
          <h1 className="title-clip-path absolute m-[-1px] grid h-[1px] w-[1px] items-center gap-2.5 overflow-hidden">
            맞춤법 검사
          </h1>

          <header>맞춤법 검사</header>
        </div>
        {/* <p>글:{sentence}</p> */}
        {/* <button
          onClick={() => {
            console.log("daum");
            checkGrammarD();
          }}
        >
          Daum
        </button>
        <button onClick={() => {console.log("dd");checkGrammarP()}}>Busan</button> */}
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async (ctx) => {
//   const sentence = "가나다라 므브스 안녕 하세요?";
//   const clean = DOMPurify.sanitize(sentence);
//   const end = () => {
//   console.log("// check ends");
// };
// const error = (error: any) => {
//   console.error("// hanspell => " + error);
// };

// const checkGrammarD = () => {
  
  
//   let results = hanspell.spellCheckByDAUM(
//     clean ,
//     10000,
//     "return",
//     end,
//     error
//   );
//   console.log("results Daum =>", results);
// };

// const checkGrammarP = () => {
//   let results = hanspell.spellCheckByPNU(
//     clean,
//     10000,
//     "return",
//     end,
//     error
//   );
//   console.log("results PNU =>", results);
// };
// console.log("checkGrammarD", checkGrammarD());
// console.log("checkGrammarP", checkGrammarP());
  return {
    props: {
      
      // sss: JSON.parse(JSON.stringify(sss)),
      // rrr: JSON.parse(JSON.stringify(rrr)),
    },
  };
};

export default GrammarChecker;
