import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {
  useTransIncomeLight,
  useTransIncome,
  initComma,
} from "@/helpers/calculateUtils";
import { NextSeo } from "next-seo";
import TaxDetail from "@/components/payTax/detail";
import TaxTable from "@/components/payTax/table";
import Footer from "@/components/layout/footer";
import Input from "@/components/atoms/input";
import AmountSkeleton from "@/components/atoms/amountSkeleton";
import IncomeItem from "@/components/atoms/incomeItem";

interface IncomeResponseProps {
  income: number;
  taxData: any;
  tableArr: any;
  // incomeSet: any;
}

const Salary: NextPage<IncomeResponseProps> = ({
  income,
  taxData,
  tableArr,
  // incomeSet,
}) => {
  const router = useRouter();
  const taxSum = taxData?.합;
  const [newIncome, setNewIncome] = useState(income);
  const longTableScrollRef = useRef<HTMLDivElement | null>();
  

  const incomeSet =
    taxData &&
    Object.entries(taxData).map(([key,value]) => {
      return { id: key , value: value };
    });

  const unitChange =
    newIncome &&
    (newIncome > 99999999
      ? newIncome * 0.00000001 + " 억원"
      : newIncome > 9999
      ? newIncome * 0.0001 + " 만원"
      : newIncome + " 원");

  const calculateButton = (e: any) => {
    e.preventDefault();
    newIncome &&
      income !== newIncome &&
      router.push(
        {
          pathname: '/amount/[amount]',
          query: { amount: `${newIncome}` },
        },
        `/${newIncome}`
      );
  };

  if (router.isFallback) {
    return <AmountSkeleton />;
  }

  return (
    <div className="mx-auto sm:max-w-xl md:max-w-2xl">
      {/* <NextSeo
        title={`2023 연봉 ${income}만원 실수령액`}
        description={`2023년 연봉 ${income}만원 실수령액,얼마일까요? ${income}만원 실수령액부터, 모든 연봉의 2023년 버전 실수령액을 한눈에 표로 확인해보세요.`}
        canonical={`https://salary.signalplanner.co.kr/income/${income}`}
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
          url: `https://salary.signalplanner.co.kr/income/${income}`,
          site_name: "시그널플래너",
          title: `2023년 연봉 ${income}만원 실수령액`,
          description: `2023년 연봉 ${income}만원 실수령액,얼마일까요? ${income}만원 실수령액부터, 모든 연봉의 2023년 버전 실수령액을 한눈에 표로 확인해보세요.`,
          images: [
            {
              url: "/signal-og-image.png",
              width: 1200,
              height: 630,
              alt: "Salary Calculator Og Image Alt",
            },
          ],
        }}
      /> */}

      <div className="mx-auto w-full items-center sm:min-w-[295px] sm:max-w-[80%] md:max-w-lg">
        <form className="my-4 flex mt-24 px-10">
          <div className="w-full">
            <Input
             value={income ? income : newIncome}
              leftInnerLabel="연봉"
              simple
              isRequired
              name="income"
              rightInnerLabel="원"
              placeholder="20000000"
              type="number"
              onChangeHandler={(e) => {
                setNewIncome(e.target.value);
              }}
            />
            <div className="mt-2.5 right-0 text-lg border-transparent h-6 text-right pr-5">
              <p className="text-blue-600">{unitChange}</p>
            </div>
          </div>
          <button
            type="submit"
            onClick={calculateButton}
            className="mb-9 min-w-fit flex min-h-[30px] px-2 sm:px-10 items-center justify-center bg-stone-800 h-[60px] my-auto text-md font-bold text-white no-underline shadow-sm hover:bg-black"
          >
            계산해줘!
          </button>
        </form>

        <br />
        <main className="px-10">
          <IncomeItem amount={Number(newIncome)} incomeSet={incomeSet} />
        </main>
        {/* <main className="px-10">
          <TaxDetail
            transPrice={income}
            incomeSet={incomeSet}
            taxSum={taxSum}
          />
          <div
            className="mt-12 h-1 w-full"
            ref={(el) => (longTableScrollRef.current = el)}
          />
          <TaxTable amount={income} tableArr={tableArr} />

          <button
            onClick={() => {
              longTableScrollRef?.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="mx-auto mb-12 block h-8 w-8 rounded-full bg-[#05a378] text-white motion-safe:animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </button>
        </main> */}
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx?.params?.amount) {
    return {
      props: {},
    };
  }
  const income = Number(ctx.params?.amount);
  const taxData = useTransIncome(Number(income));
  const { tableArr } = useTransIncomeLight();
  let arr: any = [];
  // const incomeSet =
  //   taxData &&
  //   (await Object.entries(taxData).map(([key, value]) => {
  //     const noFloatValue = initComma(value.amount);
  //     return { name: key, value: noFloatValue };
  //   }));

  return {
    props: {
      income: JSON.parse(JSON.stringify(income)),
      taxData: JSON.parse(JSON.stringify(taxData)),
      tableArr: JSON.parse(JSON.stringify(tableArr)),
      // incomeSet: JSON.parse(JSON.stringify(incomeSet)),
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  let arr: any = Array.from({ length: 190 }, (x, i) => (i + 10) * 100);
  const paths = arr.map((nums: string) => ({
    params: { amount: nums.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export default Salary;
