import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  useTransIncomeLight,
  useTransIncome,
} from "@/helpers/client/calculateUtils";
import { paginate, unitChange } from "@/helpers/client/utils";
import { TaxDetail, TaxTable, Graph } from "@/components/payTax";
import Footer from "@/components/layout/footer";
import Input from "@/components/atoms/input";
import AmountSkeleton from "@/components/amountSkeleton";
import Pagination from "@/components/pagination";
import { NextSeo } from "next-seo";
import client from "@/helpers/server/client";
import { Amount } from "@prisma/client";

interface GraphProps {
  amounts: Amount[];
}

interface IncomeResponseProps {
  income: number;
  taxData: any;
  tableArr: any;
  graphData: GraphProps;
}

const Salary: NextPage<IncomeResponseProps> = ({
  graphData,
  income,
  taxData,
  tableArr,
}) => {
  const router = useRouter();
  const [pageSize, pageBlockSize] = [15, 8];
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedTable = paginate(tableArr, currentPage, pageSize);
  const [newIncome, setNewIncome] = useState(0);
  const [percent, setPercent] = useState<number>(0);
  const percentIncomeData = useTransIncome(Number(newIncome));
  const onPageChange = (page: any) => {
    setCurrentPage(page);
  };
  const incomeSet =
    percentIncomeData && taxData
      ? Object.entries(percentIncomeData).map(([key, value]) => {
          return { id: key, value: value };
        })
      : taxData
      ? Object.entries(taxData).map(([key, value]) => {
          return { id: key, value: value };
        })
      : null;

  const percentOnIncrease = () => {
    setPercent((prevNumber) => (prevNumber === 100 ? 100 : prevNumber + 1));
  };
  const percentOnDecrease = async () => {
    setPercent((prevNumber) => (prevNumber === 0 ? 0 : prevNumber - 1));
  };

  const calculateButton = (e: any) => {
    e.preventDefault();
    newIncome &&
      income !== newIncome &&
      router.push({
        pathname: "/income/[amount]",
        query: { amount: `${newIncome}` },
      });
    setPercent(0);
  };
  const mutate = (income: number) => {
    fetch("/api/amount", {
      method: "POST",
      body: JSON.stringify({ income }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().catch(() => {}));
  };
  useEffect(() => {
    mutate(income);
  }, [income]);

  useEffect(() => {
    setNewIncome(income + income * percent * 0.01);
  }, [percent, income]);

  if (router.isFallback) {
    return <AmountSkeleton />;
  }

  return (
    <>
      <div className="mx-auto sm:max-w-xl md:max-w-2xl h-full">
        <NextSeo
          title={`2023 연봉 ${income}만원 실수령액`}
          description={`2023년 연봉 ${income}만원 실수령액,얼마일까요? ${income}만원 실수령액부터, 여기서 5% 오르면 내 연봉은 얼마인지 확인해보세요.`}
          canonical={`https://allcalculator.shop/income/${income}`}
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
            url: `https://allcalculator.shop/income/${income}`,
            site_name: "올 어바웃 계산기",
            title: `2023년 연봉 ${income}만원 실수령액`,
            description: `2023년 연봉 ${income}만원 실수령액,얼마일까요? ${income}만원 실수령액부터, 여기서 5% 오르면 내 연봉은 얼마인지 확인해보세요.`,
            images: [
              {
                url: "/salary-calculator-og-image.jpeg",
                width: 1200,
                height: 630,
                alt: "Salary Calculator Og Image Alt",
              },
            ],
          }}
        />

        <div className="min-h-full mx-auto w-full items-center sm:min-w-[295px] sm:max-w-[80%] md:max-w-lg">
          <form className="my-4 flex mt-24 px-10">
            <div className="w-full">
              <Input
                value={newIncome}
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
                <p className="text-[#07498f] font-bold text-base">
                  {unitChange(Number(newIncome))} 원
                </p>
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
          <div className="px-10 flex text-center items-center py-4">
            <h2 className="text-left pr-2 w-full">
              연봉 협상할 때, <br />
              <span className="font-bold bg-yellow-200 px-1 rounded-full">
                {percent}
              </span>
              퍼센트 오른 <br />내 실수령액은 얼마?
            </h2>
            <div className="flex justify-end h-12 w-full">
              <button className="bg-red-100 w-12" onClick={percentOnIncrease}>
                +
              </button>
              <div className="flex items-center border-r-0 border-l-0 border font-bold px-3 text-base w-max">
                <h3>{percent ? percent : 0}</h3>
                <span>&nbsp; %</span>
              </div>
              <button
                className="bg-primary-100 w-12"
                onClick={percentOnDecrease}
              >
                -
              </button>
            </div>
          </div>
          <br />
          <main className="px-10">
            <TaxDetail amount={Number(newIncome)} incomeSet={incomeSet} />
          </main>
          <aside className="pb-24 py-14 pt-0">
            <Graph graphData={graphData} />
          </aside>
          <main className="pb-16 px-10">
            <h2 className="mb-8 text-xl font-bold text-black">
              연봉별 실수령액 한눈에 보기
            </h2>
            <TaxTable paginatedTable={paginatedTable} setPercent={setPercent} />
            <Pagination
              pageBlockSize={pageBlockSize}
              items={tableArr.length}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </main>
        </div>
      </div>
      <Footer />
    </>
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
  const data = await client.amount.findMany({
    select: {
      amount: true,
      count: true,
    },
  });
  return {
    props: {
      graphData: JSON.parse(JSON.stringify(data)),
      income: JSON.parse(JSON.stringify(income)),
      taxData: JSON.parse(JSON.stringify(taxData)),
      tableArr: JSON.parse(JSON.stringify(tableArr)),
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  let arr: any = Array.from({ length: 191 }, (x, i) => (i + 10) * 1000000);
  const paths = arr.map((nums: string) => ({
    params: { amount: nums.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export default Salary;
