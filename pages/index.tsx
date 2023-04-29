import Input from "@/components/atoms/input";
import type { NextPage } from "next";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { unitChange } from "@/helpers/client/utils";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  const router = useRouter();
  const [income, setIncome] = useState<number>();

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

  return (
    <div>
      <NextSeo
        title="2023 연봉 실수령액 계산기"
        description="2023년 내 연봉에서 통장으로 들어오는 실수령액은 얼마일까요? 현재 내 연봉에서부터 연봉 협상시 퍼센트 상승 별 실수령액도 지금 알아보세요."
        canonical="https://allcalculator.shop"
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
              "연봉 실수령액, 2023년 연봉 실수령액, 연봉 실수령, 연봉 협상",
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1",
          },
        ]}
        openGraph={{
          type: "website",
          locale: "ko_KR",
          url: "https://allcalculator.shop",
          site_name: "올 어바웃 계산기",
          title: "2023년 연봉 실수령액 계산기",
          description:
            "2023년 내 연봉에서 통장으로 들어오는 실수령액은 얼마일까요? 현재 내 연봉에서부터 연봉 협상시 퍼센트 상승 별 실수령액도 지금 알아보세요.",
          images: [
            {
              url: "/home-og-image.jpeg",
              width: 1200,
              height: 630,
              alt: "Salary Calculator Og Image Alt",
            },
          ],
        }}
      />
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
        </div>
      </div>
    </div>
  );
};

export default Home;
