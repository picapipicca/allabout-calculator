import Button from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import BmiDetail from "@/components/bmi/detail";
import Cancel from "@/components/icons/cancel";
import QuestionMark from "@/components/icons/questionMark";
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
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
        ]}
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
            className="block w-min text-emerald-600 font-medium text-sm ml-4 text-center md:w-fit"
            type="button"
          >
            <QuestionMark />
          </button>
        </header>
        <main className="sm:min-w-[295px] sm:max-w-[80%] mx-auto">
          <section className="bg-gray-100 py-4 lg:grid-cols-[1fr_1fr_1fr_160px] px-10 sm:px-4 mt-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 last:items-center md:space-x-4 gap-2">
            <div className="flex text-center items-center justify-between">
              <h3 className="min-w-fit mr-4">성별</h3>
              <div className="flex w-2/3">
                <Button
                clickHandler={selectGender}
                  buttonType="default"
                  extraClass={`rounded-l-lg border-r-0 justify-center min-h-[7vh] ${
                  gender === "남" ? "bg-primary-500 text-white" : ""
                }`}
                >
                  남
                </Button>
                <Button
                  buttonType="default"
                  extraClass={`rounded-r-lg border-l-0 justify-center min-h-[7vh] ${
                  gender === "여" ? "bg-primary-500 text-white" : ""
                }`}
                clickHandler={selectGender}
                >
                  여
                </Button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="mr-4">키</h3>
              <div className="w-2/3 md:w-full">
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
            <div className="flex justify-between items-center">
              <h3 className="mr-4 min-w-fit">몸무게</h3>
              <div className="w-2/3">
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

            <Button
              clickHandler={() => {}}
              buttonType="primary"
              size="lg"
              extraClass="rounded-lg min-w-fit sm:w-24 md:col-start-2 lg:col-span-1 whitespace-nowrap"
            >
              확인하기
            </Button>
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
                          {`${min} - ${max === Infinity ? "∞" : max}`}
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
                tabIndex={-1}
                className="fixed top-[70px] left-0 right-0 z-10 w-full sm:w-1/2 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-fit max-h-full"
              >
                <div className="relative w-full max-w-2xl max-h-full">
                  <div className="relative bg-white rounded-lg shadow">
                    <div className="flex justify-between p-5 pr-4 border-b rounded-t">
                      <h3 className="text-xl font-medium text-gray-900 pr-1">
                        체질량지수(BMI, Body Mass Index)에 의한 비만도 계산법 과{" "}
                        표준체중 계산법
                      </h3>
                      <Button
                        extraClass="py-1"
                        size="sm"
                        buttonType="icon"
                        clickHandler={() => setOpenModal(false)}
                      >
                        <Cancel />
                        <span className="sr-only">Close modal</span>
                      </Button>
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
                      <Button
                        clickHandler={() => setOpenModal(false)}
                        buttonType="text"
                        extraClass="rounded-lg hover:bg-gray-100"
                        size="md"
                      >
                        닫기
                      </Button>
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
