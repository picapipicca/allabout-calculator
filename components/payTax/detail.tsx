import { initComma } from "@/helpers/client/utils";
import { useState, memo } from "react";
import ArrowDown from "../icons/arrowDown";
import Button from "../atoms/button";

type TaxDetailProps = {
  incomeSet: any;
  amount: number;
};
const TaxDetail = ({ incomeSet, amount }: TaxDetailProps) => {
  const [toggle, setToggle] = useState([false, false, false, false, false]);
  const openDetail = (id: string) => {
    const newToggle = [...toggle];
    newToggle[incomeSet.findIndex((el: any) => el.id === id)] =
      !newToggle[incomeSet.findIndex((el: any) => el.id === id)];
    setToggle(newToggle);
  };
  const beforeTax = Number(amount) / 12;
  const actualMonthSalary =
    amount === 0 ? 0 : beforeTax - incomeSet[0]?.value?.amount;

  return (
    <>
      <div className="shadow-md my-0 mx-auto w-full bg-white selection:bg-zinc-400 selection:text-white">
        <center className="p-4 border border-b-[1px] border-b-[#eee] min-h-[100px]">
          <div className="w-full ">
            <h1 className="text-lg pb-4 font-semibold">
              연봉 <span className="px-1.5 py-0.5">{amount}</span> 원
            </h1>
            <h2 className="text-xl font-semibold pb-4 sm:pb-10">
              월 실수령액{" "}
              <span className="font-bold bg-primary-100 px-2">
                {initComma(actualMonthSalary)}
              </span>{" "}
              원
            </h2>
            <h3 className="text-sm flex justify-between px-6 pb-1">
              공제 전 금액{" "}
              <span>
                월<span className="font-bold px-2">{initComma(beforeTax)}</span>
                원
              </span>
            </h3>
            <h3 className="text-sm flex justify-between px-6 pb-1">
              공제액{" "}
              <span>
                {" "}
                월
                <span className="font-bold px-2">
                  {amount === 0 ? 0 : initComma(incomeSet[0]?.value?.amount)}
                </span>{" "}
                원
              </span>
            </h3>
          </div>
        </center>
        <div className="border border-b-[1px] border-b-[#eee] min-h-[80px] p-4 py-6">
          <div className="block ml-0">
            <p className="text-sm text-[#666] leading-[1.2em] whitespace-pre-line">
              연봉 <span className="font-bold">{initComma(amount)}</span> 원의
              월 실수령액은
              <br />
              공제 전 월
              <span className="font-bold"> {initComma(beforeTax)} </span> 원에서
              공제액{" "}
              <span className="font-bold">
                {" "}
                {amount === 0 ? 0 : initComma(incomeSet[0]?.value?.amount)}{" "}
              </span>{" "}
              원을 뺀 월{" "}
              <span className="font-bold">{initComma(actualMonthSalary)}</span>{" "}
              원 입니다.
            </p>
          </div>
        </div>
        <div className="min-h-[50px] mb-24 pb-4">
          <div>
            <table className="caption-bottom table-auto w-full overflow-x-auto text-left text-gray-500 ">
              <thead className="text-sm text-gray-700 bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-lg">
                    공제액 상세내역
                  </th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {incomeSet &&
                  incomeSet.map((el: any, idx: number) => {
                    return (
                      <tr
                        className="bg-white border-b group last:border-b-0"
                        key={el?.id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap cursor-pointer group-first:py-4"
                        >
                          {el.value?.name}
                          {el.value?.description && (
                            <Button
                              buttonType="icon"
                              clickHandler={() => openDetail(el.id)}
                              extraClass="mt-1 w-min px-1"
                            >
                              자세히
                              <ArrowDown size={"sm"} toggle={toggle[idx]} />
                            </Button>
                          )}
                          {toggle[idx] && (
                            <p className="text-sm whitespace-normal text-gray-500">
                              {el.value?.description}
                            </p>
                          )}
                        </th>
                        <td className="px-6 py-2 text-right">
                          {amount === 0 ? 0 : initComma(el.value?.amount)} 원
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(TaxDetail);
