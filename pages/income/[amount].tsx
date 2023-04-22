import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useMemo, useEffect } from "react";
import { useTransIncomeLight, useTransIncome } from "@/helpers/calculateUtils";
import { initComma, paginate, unitChange } from "@/helpers/utils";
import Footer from "@/components/layout/footer";
import Input from "@/components/atoms/input";
import AmountSkeleton from "@/components/component/amountSkeleton";
import IncomeItem from "@/components/atoms/incomeItem";
import Pagination from "@/components/component/pagination";
import { NextSeo } from "next-seo";
import { flushSync } from "react-dom";
import {
  addDoc,
  collection,
  where,
  query,
  getDocs,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/firebase";
import Graph from "@/components/payTax/graph";

interface IncomeResponseProps {
  income: number;
  taxData: any;
  tableArr: any;
}

const Salary: NextPage<IncomeResponseProps> = ({
  income,
  taxData,
  tableArr,
}) => {
  const router = useRouter();
  const [pageSize, pageBlockSize] = [15, 8];
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedTable = paginate(tableArr, currentPage, pageSize);
  // const longTableScrollRef = useRef<HTMLDivElement | null>();
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
  };
  useEffect(() => {
    setNewIncome(income + income * percent * 0.01);
  }, [percent, income]);

  if (router.isFallback) {
    return <AmountSkeleton />;
  }

  return (
    <>
      <div className="mx-auto sm:max-w-xl md:max-w-2xl h-full">
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

        <div className="min-h-full mx-auto w-full items-center sm:min-w-[295px] sm:max-w-[80%] md:max-w-lg">
          <form className="my-4 flex mt-24 px-10">
            <div className="w-full">
              <Input
                value={newIncome ? newIncome : income}
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
            <h2 className="text-left">
              연봉 협상할 때, <br />
              <span className="font-bold bg-yellow-200 px-1 rounded-full">
                {percent}
              </span>
              퍼센트 오른 내 실수령액은 얼마?
            </h2>
            <div className="flex justify-end h-12 mx-auto">
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
            <IncomeItem amount={Number(newIncome)} incomeSet={incomeSet} />
          </main>
          <aside className="pb-20 p-14 pt-0">
            <Graph/>
          </aside>
          <main className="pb-16 px-10">
            <h2 className="mb-8 text-lg font-medium text-black">
              연봉별 실수령액 한눈에 보기
            </h2>

            <div className="mx-auto grid w-full grid-cols-[0.8fr_1fr_1fr] sm:grid-cols-[0.9fr_1fr_1fr] bg-white py-4 text-sm font-bold">
              <span className="pl-2">연봉</span>
              <span className={"text-end "}>월 실수령액</span>
              <span className={"pr-2 text-end text-gray-500 "}>월 공제액</span>
            </div>

            <div className="pb-10">
              {paginatedTable.map((item: any, idx: number) => {
                return (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(
                        {
                          pathname: `/income/${item.income}`,
                          query: { amount: `${item.income}` },
                        },
                        `/income/${item.income}`
                      );
                    }}
                    key={idx}
                    className="cursor-pointer hover:bg-primary-50 grid grid-cols-3 gap-3 border-t-2 py-2 text-[13px] font-medium md:gap-10"
                  >
                    <span className="pl-2">{unitChange(item.income)}원</span>
                    <span className="flex items-end justify-end text-[#07498f] ">
                      {initComma(item.actualMonthSalary)}
                    </span>
                    <span className="pr-2 flex justify-end font-normal text-gray-500 ">
                      {initComma(item.amount)}
                    </span>
                  </div>
                );
              })}
            </div>
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

  const q = query(
    collection(db, "income"),
    where("amount", "==", ctx.params?.amount)
  );
  const docSnap = await getDocs(q);
  if (docSnap.size > 0) {
    docSnap.forEach(async (docIncome) => {
      const amountRef = doc(db, "income", docIncome.id);
      await updateDoc(amountRef, {
        count: docIncome.data().count + 1,
      });
    });
  } else {
    try {
      const docRef = await addDoc(collection(db, "income"), {
        amount: ctx?.params?.amount,
        count: 1,
      });
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // const docRef = doc(db, "income", docSnap.data());
  // // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   docSnap.data();
  //   // querySnapshot.forEach(async (docAmount) => {
  //   //   const amountRef = doc(db, "income", docAmount.id);
  //   //   await updateDoc(amountRef, {
  //   //     count: docAmount.data().count + 1,
  //   //   });
  //   // });
  // } else {
  //   try {
  //     const docRef = await addDoc(collection(db, "income"), {
  //       amount: ctx?.params?.amount,
  //       count: 1,
  //     });
  //     console.log("도큐먼트 아이디: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

  return {
    props: {
      income: JSON.parse(JSON.stringify(income)),
      taxData: JSON.parse(JSON.stringify(taxData)),
      tableArr: JSON.parse(JSON.stringify(tableArr)),
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
