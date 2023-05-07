import Input from "@/components/atoms/input";
import BmiDetail from "@/components/bmi/detail";
import Footer from "@/components/layout/footer";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useState } from "react";

const Bmi: NextPage = () => {
  const [gender, setGender] = useState<"남" | "여" | "">("");
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>(false);
  const selectGender = (e: any) => {
    setGender(e.target.innerText);
  };
  const calculateBmi = Number(
    (weight / ((height / 100) * (height / 100))).toFixed(2) ?? 0
  );
  const calculatePipw = Math.round(
    gender === "남"
      ? height * height * 22 * 0.0001
      : height * height * 21 * 0.0001
  );
  const bmiRanges = [
    { range: "저체중", min: 0, max: 18.4 },
    { range: "정상체중", min: 18.5, max: 24.9 },
    { range: "과체중", min: 25, max: 29.9 },
    { range: "경도 비만", min: 30, max: 34.9 },
    { range: "중정도 비만", min: 35, max: 39.9 },
    { range: "고도 비만", min: 40, max: Infinity },
  ];

  return (
    <div className="max-h-max h-full bg-white">
      <NextSeo
        title="체지방률(BMI) 계산기"
        description="내 키에서 적정 몸무게는 몇 키로 일까요? 체지방률(BMI) 계산기로 현재 내 체지방률과 적정 체지방률,적정 몸무게를 확인해보세요."
        canonical="https://allcalculator.shop/bmi"
        additionalLinkTags={
          [
            // {
            //   rel: 'icon',
            //   href: '/favicon.ico',
            // },
            // {
            //   rel: 'manifest',
            //   href: '/manifest.json',
            // },
          ]
        }
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "체지방 계산기, 체질량지수, BMI 계산기, 비만 자가진단, 적정 체지방률,다이어트 계산기,적정 몸무게",
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1",
          },
        ]}
        openGraph={{
          type: "website",
          locale: "ko_KR",
          url: "https://allcalculator.shop/bmi",
          site_name: "올 어바웃 계산기",
          title: "체지방률(BMI) 계산기",
          description:
            "내 키에서 적정 몸무게는 몇 키로 일까요? 체지방률(BMI) 계산기로 현재 내 체지방률과 적정 체지방률,적정 몸무게를 확인해보세요.",
          images: [
            {
              url: "/bmi-og-image.jpeg",
              width: 1200,
              height: 630,
              alt: "Bmi Calculator Og Image Alt",
            },
          ],
        }}
      />
      <div className="min-h-[calc(100vh-61px)] mx-auto min-w-[295px] px-10 sm:px-20 pt-24">
        <h1 className="title-clip-path absolute m-[-1px] grid h-[1px] w-[1px] items-center gap-2.5 overflow-hidden">
          비만도 계산기
        </h1>
        <header className="font-semibold text-2xl flex pb-10">
          <p className="font-Black font-medium">
            비만도 계산 : 내 체중은 정상일까요? &nbsp;{" "}
          </p>
          <button
            onClick={() => {
              setOpenModal((prev) => !prev);
            }}
            data-modal-target="top-left-modal"
            data-modal-toggle="top-left-modal"
            className="block w-min md:w-fit text-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm ml-4 text-center"
            type="button"
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
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
          </button>
        </header>
        <main className="sm:min-w-[295px] sm:max-w-[80%] mx-auto">
          <section className="mx-auto h-[40vh] sm:h-fit grid grid-rows-4  grid-flow-col bg-gray-100 w-full sm:flex py-6 px-6 space-y-4 mb-10 sm:space-y-0 items-center">
            <div className="row-span-1 grid grid-cols-3 sm:flex sm:min-w-[25%] items-center min-h-[7vh] sm:min-h-[60px]">
              <h3 className="text-lg w-full col-span-1 sm:-mr-4">성별</h3>
              <button
                onClick={selectGender}
                className={`${
                  gender === "남"
                    ? "bg-primary-500 text-white"
                    : "bg-white text-black"
                } col-start-2 w-full border-r-0 border-2 hover:bg-primary-500 hover:text-white h-full sm:min-h-[60px] rounded-l-lg`}
              >
                남
              </button>
              <button
                onClick={selectGender}
                className={`${
                  gender === "여"
                    ? "bg-primary-500 text-white"
                    : "bg-white text-black"
                } border-2 w-full hover:bg-primary-500 hover:text-white h-full sm:min-h-[60px] rounded-r-lg`}
              >
                여
              </button>
            </div>

            <div className="row-span-1 grid grid-cols-3 sm:flex items-center pb-2 sm:pb-0 sm:pl-4 sm:w-full">
              <h3 className="text-lg pr-6 col-span-1">키</h3>
              <div className="col-span-2 sm:w-full">
                <Input
                  type="number"
                  rightInnerLabel="cm"
                  max={250}
                  onChangeHandler={(e) => {
                    setHeight(e.target.value);
                    setResult(false);
                  }}
                />
              </div>
            </div>

            <div className="row-span-1 grid grid-cols-3 sm:flex sm:w-full items-center sm:pl-4">
              <h3 className="text-lg pr-6 sm:min-w-fit col-span-1">몸무게</h3>
              <div className="col-span-2 sm:w-full">
                <Input
                  type="number"
                  rightInnerLabel="kg"
                  max={500}
                  onChangeHandler={(e) => {
                    setWeight(e.target.value);
                    setResult(false);
                  }}
                />
              </div>
            </div>

            <button
              onClick={() =>
                setResult((prev) => (gender && height && weight ? !prev : prev))
              }
              className="rounded-lg sm:min-w-[13%] sm:ml-6 bg-primary-500 hover:bg-primary-600 text-white min-h-[6vh] sm:min-h-[60px]"
            >
              확인하기
            </button>
          </section>
          <section>
            {result && (
              <BmiDetail
                height={height}
                weight={weight}
                calculateBmi={calculateBmi}
                calculatePipw={calculatePipw}
              />
            )}
            <div className="py-10">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 bg-gray-50 text-md sm:text-lg border-b"
                      >
                        내 체중상태
                      </th>
                      <th scope="col" className="px-6 py-3 text-lg border-b">
                        체질량 지수(BMI)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bmiRanges.map(({ range, min, max }) => (
                      <tr
                        className="border-b border-gray-200 text-base"
                        key={range}
                      >
                        <th
                          scope="row"
                          className={`${
                            result && calculateBmi > min && calculateBmi < max
                              ? "bg-primary-100"
                              : "bg-gray-50"
                          } px-6 py-4 font-medium text-gray-900 whitespace-nowrap `}
                        >
                          {range}
                        </th>
                        <td
                          className={`${
                            result && calculateBmi > min && calculateBmi < max
                              ? "bg-primary-50"
                              : ""
                          } px-6 py-4`}
                        >
                          {`${min} - ${max === Infinity ? "" : max}`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <aside>
            {openModal && (
              <div
                onBlur={() => {
                  setOpenModal(false);
                }}
                id="top-left-modal"
                data-modal-placement="top-left"
                tabIndex={-1}
                className="fixed top-[60px] left-0 right-0 z-1 w-full sm:w-1/2 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-fit max-h-full"
              >
                <div className="relative w-full max-w-2xl max-h-full">
                  <div className="relative bg-white rounded-lg shadow">
                    <div className="flex justify-between p-5 pr-4 border-b rounded-t">
                      <h3 className="text-xl font-medium text-gray-900 pr-2">
                        체질량지수(BMI, Body Mass Index)에 의한 비만도 계산법 과{" "}
                        표준체중 계산법
                      </h3>
                      <button
                        onClick={() => setOpenModal(false)}
                        type="button"
                        className="text-gray-400 -mt-2 h-fit bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        data-modal-hide="top-left-modal"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>

                    <div className="p-6 space-y-6">
                      <p className="text-base leading-relaxed text-gray-500">
                        체질량지수(BMI, Body Mass Index) 계산법을 따라
                        계산되었습니다.
                      </p>
                      <p className="text-base leading-relaxed text-gray-500 whitespace-pre-line">
                        {`BMI= 체중(kg) /(키(m)× 키(m))`}
                      </p>
                      <p className="text-base leading-relaxed text-gray-500 whitespace-pre-line">
                        {`표준 체중 계산법 :
                 - 남성: 키(m) × 키(m) × 22
                 - 여성: 키(m) × 키(m) × 21  `}
                      </p>
                    </div>

                    <div className="flex justify-end items-center p-4 space-x-2 border-t border-gray-200 rounded-b">
                      <button
                        onClick={() => setOpenModal(false)}
                        data-modal-hide="top-left-modal"
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        닫기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </aside>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Bmi;
