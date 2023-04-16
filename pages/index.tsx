import Input from "@/components/atoms/input";
import type { NextPage } from "next";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { useTransIncomeLight } from "@/helpers/calculateUtils";
import { unitChange } from "@/helpers/utils";
import { flushSync } from "react-dom";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  const router = useRouter();
  const [income, setIncome] = useState<number>();
  const [table, setTable] = useState<Boolean>(false);
  const { tableArr } = useTransIncomeLight();
  const tableScrollRef = useRef<HTMLDivElement | null>();

  const onCalculateSalary = (e: any) => {
    e.preventDefault();

    if (!income) return;
    router.push(
      {
        pathname: "/income/[amount]",
        query: { amount: `${income}` },
      },
      `/income/${income}`
    );
  };

  const moveToTable = () => {
    flushSync(() => {
      setTable((prev) => !prev);
    });
    tableScrollRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      {/* <NextSeo
        title="2023 연봉 실수령액 계산기"
        description="2023년 내 연봉에서 뗄 거 다 떼면 통장에 꽂히는 실수령액은 얼마? 내 연봉부터 모든 연봉의 2023년 버전 실수령액을 지금 알아보세요."
        canonical="https://salary.signalplanner.co.kr"
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "habitfactory",
          },
          {
            name: "keywords",
            content: "연봉 실수령액, 2023년 연봉 실수령액, 연봉 실수령",
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1",
          },
        ]}
        openGraph={{
          type: "website",
          locale: "ko_KR",
          url: 'https://salary.signalplanner.co.kr',
          site_name: "시그널플래너",
          title: "2023년 연봉 실수령액 계산기",
          description:
          '2023년 내 연봉에서 뗄 거 다 떼면 통장에 꽂히는 실수령액은 얼마? 내 연봉부터 모든 연봉의 2023년 버전 실수령액을 지금 알아보세요.',
          images: [
            {
              url: '/signal-og-image.png',
              width: 1200,
              height: 630,
              alt: "Salary Calculator Og Image Alt",
            },
          ],
        }}
      /> */}
      <div className="max-h-max min-h-screen bg-white">
        <div className="mx-auto min-w-[295px] max-w-3xl px-10 sm:px-20 pt-48">
          <h1 className="title-clip-path absolute m-[-1px] grid h-[1px] w-[1px] items-center gap-2.5 overflow-hidden">
            2023 연봉 실수령액 계산기
          </h1>
          <header className="w-52">
            <p className="text-3xl font-blackHanSans">연봉 계산기 💸</p>
          </header>
          <h4 className="mt-4 text-base font-medium text-black font-notoSans">
            내 연봉을 입력하고 실수령액을 알아보세요!
          </h4>

          <section className="mt-6 items-center sm:mt-20 font-notoSans">
            <form className="my-4 flex">
              <div className="w-full">
                <label
                  className="mb-2.5 block text-base font-medium text-stone-700"
                  htmlFor="income"
                >
                  연봉
                </label>

                <Input
                  simple
                  isRequired
                  name="income"
                  rightInnerLabel="원"
                  placeholder="20000000"
                  type="number"
                  onChangeHandler={(e) => {
                    setIncome(e.target.value);
                  }}
                />
                <div className="mt-2.5 right-0 text-lg border-transparent h-6 text-right pr-5">
                  {income && (
                    <p className="text-[#07498f]">
                      {unitChange(Number(income))}원
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                onClick={onCalculateSalary}
                className="min-w-fit flex min-h-[30px] px-2 sm:px-10 items-center justify-center bg-stone-800 h-[60px] my-auto text-md font-bold text-white no-underline shadow-sm hover:bg-black"
              >
                계산해줘!
              </button>
            </form>
          </section>

          {/* <button
            onClick={moveToTable}
            className="mx-auto mt-8 block text-center text-gray-300 underline underline-offset-4"
          >
            전체표로보기
          </button> */}
        </div>
      </div>

      {/* <div ref={(el) => (tableScrollRef.current = el)}>
        {table && <TaxTable tableArr={tableArr} isHome />}
      </div> */}
    </div>
  );
};

export default Home;
