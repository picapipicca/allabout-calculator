import { initComma } from "@/helpers/client/utils";
import { unitChange } from "@/helpers/client/utils";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
interface ITaxTableProps {
  paginatedTable: any;
  setPercent: Dispatch<SetStateAction<number>>;
}

const TaxTable = ({ paginatedTable, setPercent }: ITaxTableProps) => {
  const router = useRouter();
  return (
    <>
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
                setPercent(0);
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
    </>
  );
};

export default TaxTable;
