import { initComma } from "@/helpers/utils";
// import {useFilteredTable} from "@/helpers/calculateUtils";
import Link from "next/link";
import { useRouter } from "next/router";

interface ITaxTableProps {
  tableArr: any;
  amount?: string | number;
  isHome?: boolean;
}

const TaxTable = ({ tableArr, amount, isHome = false }: ITaxTableProps) => {
  const router = useRouter();
  const nearestNum = Math.round(Number(amount) / 100) * 100;
  const filteredTableArr = tableArr?.filter(
    (i: any) => i.income - 1100 < nearestNum && i.income + 1100 > nearestNum
  );
  // const filteredTableArrWithHighAmount = useFilteredTable(Number(amount));

  // const shortTable =
  //   amount &&
  //   (amount > 20000
  //     ? filteredTableArrWithHighAmount.tableArr
  //     : filteredTableArr);

  return (
    <>
      {/* {amount && (
        <section className="pt-8 pb-8">
          <div className="mx-auto mb-4 flex w-full text-lg font-medium text-[#0CA678]">
            <h2 className="shrink border-2 border-[#0CA678] bg-[#E6FCF5] py-0.5 px-2 text-center sm:min-w-[36%]">
              연봉 {amount}만원
            </h2>
            <h2 className="border-2 border-transparent py-0.5 px-1">
              전후 연봉 실수령액
            </h2>
          </div>
          <div className="sticky top-0 mx-auto grid w-full grid-cols-[0.8fr_1fr_1fr] sm:grid-cols-[0.9fr_1fr_1fr] bg-white py-4 text-sm font-bold">
            <span>연봉</span>
            <span className="pl-5 sm:pl-1">월 실수령액</span>
            <span className="pl-5 text-gray-500 sm:pl-0">월 공제액</span>
          </div>
          <div>
            {shortTable.map((item: any, idx: any) => {
              return (
                <div
                  key={idx}
                  className={
                    item.income === nearestNum
                      ? "mx-auto items-center bg-[#E6FCF5]"
                      : ""
                  }
                >
                  <div className="last:border-b-1 mx-auto grid w-full grid-cols-3 gap-2.5 border-t-2 py-2 text-[13px] font-medium md:gap-10">
                    <span>{initComma(item.income)}만원</span>
                    <span className="flex items-end justify-end pl-4 text-[#0CA678] sm:pr-10 md:pr-2">
                      {initComma(item.actualMonthSalary)}
                    </span>
                    <span className="flex justify-end pl-16 font-normal text-gray-500 sm:pr-10 md:pr-0">
                      {initComma(item.합)}
                    </span>

                    <Link
                      href={{
                        pathname: `/income/${item.income}`,
                        query: { amount: `${item.income}` },
                      }}
                      as={`/income/${item.income}`}
                      className="col-end-6"
                    >
                      <button className="h-4 w-4 rounded-xl bg-[#CED4DA] hover:bg-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4 text-white"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )} */}
      <section
        className={
          isHome
            ? "mx-auto px-10 pt-4 pb-24 sm:px-20"
            : "mx-auto w-full pt-10 pb-12"
        }
      >
        <br id="table" />
        <h2 className="mb-8 text-lg font-medium text-black">
          2023년도 전체 연봉별 실수령액
        </h2>

        <div className="sticky top-0 mx-auto grid w-full grid-cols-[0.8fr_1fr_1fr] sm:grid-cols-[0.9fr_1fr_1fr] bg-white py-4 text-sm font-bold">
            <span>연봉</span>
            <span className={isHome? "pl-2 sm:pl-0 md:pl-5":"pl-5 sm:pl-1"}>월 실수령액</span>
            <span className={isHome?"pl-3 text-gray-500 sm:pl-2 md:pl-6":"pl-5 text-gray-500 sm:pl-0"}>월 공제액</span>
          </div>
        
        <div>
          {tableArr?.map((item: any, idx: any) => {
            return (
              <div
                key={idx}
                className="grid grid-cols-3 gap-3 border-t-2 py-2 text-[13px] font-medium last:border-b-2 md:gap-10"
              >
                <span>{initComma(item.income)}만원</span>
                <span className="flex items-end justify-end pl-4 text-[#0CA678] sm:pr-10 md:pr-2">
                  {initComma(item.actualMonthSalary)}
                </span>
                <span className="flex justify-end pl-16 font-normal text-gray-500 sm:pr-10 md:pr-0">
                  {initComma(item.합)}
                </span>
                <Link
                  href={""}
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
                  className="col-end-6"
                >
                  <button className="h-4 w-4 rounded-xl bg-[#CED4DA] hover:bg-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TaxTable;
