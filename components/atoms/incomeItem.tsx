import { initComma } from "@/helpers/calculateUtils";
import { useState } from "react";
type IncomeItemProps = {
  incomeSet: any;
  amount: number;
};
const IncomeItem = ({ incomeSet, amount }: IncomeItemProps) => {
  const [toggle, setToggle] = useState(false);
  const openDetail = (id: string) => {
    setToggle((prev) => !prev);
  };
  console.log(";;;;;;;;;;incomeSet;;;;;;;;;", incomeSet);
  return (
    <>
      <div className="shadow-lg my-0 mx-auto w-full bg-white selection:bg-zinc-400 selection:text-white">
        <center
          id="top"
          className="p-4 border border-b-[1px] border-b-[#eee] min-h-[100px]"
        >
          <div className="h-16 w-16 bg-slate-500">logo</div>
        </center>
        <div
          id="mid"
          className="border border-b-[1px] border-b-[#eee] min-h-[80px] p-4"
        >
          <div className="block ml-0">
            <h2 className="text-base pb-4">2023 {amount}만원 실수령액</h2>
            <p className="text-sm text-[#666] leading-[1.2em]">
              연봉 {amount} 만원의 월 실수령액은
              <br /> 어쩌구저쩌구
              <br />
              냐냐냐 입니당
            </p>
          </div>
        </div>
        <div id="bot" className="min-h-[50px] mb-24 sm:w-1/2">
          <div>
            <table className="caption-bottom table-auto w-full overflow-x-auto text-left text-gray-500 ">
              <thead className="text-sm text-gray-700 bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-lg">
                    공제액 상세내역
                  </th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {/* <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    합
                  </th>
                  <td className="px-6 py-2 text-right">354,000원</td>
                </tr> */}
                {incomeSet &&
                  incomeSet.map((el: any) => {
                    return (
                      <tr className="bg-white border-b" key={el.id}>
                        <th
                          scope="row"
                          className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {el.value.name}

                          <div className="flex text-center text-xs items-center group cursor-pointer">
                            <p
                              // onClick={(e) => {
                              //   console.log(e.target);
                              //   e.target.id === el.id
                              //     ? setToggle((prev) => !prev)
                              //     : null;
                              // }}
                              id={el.id}
                              className="text-gray-400 group-hover:text-stone-700"
                            >
                              자세히
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className={`w-2.5 h-2.5 ${
                                toggle ? "transform rotate-180" : ""
                              } text-gray-400 group-hover:text-stone-700`}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </div>
                          <div>
                            {toggle && (
                              <p className="text-sm text-gray-500 py-1">
                                자세한 내용
                              </p>
                            )}
                          </div>
                        </th>
                        <td className="px-6 py-2 text-right">
                          {initComma(el.value.amount)} 원
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
export default IncomeItem;
