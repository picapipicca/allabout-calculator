import { initComma } from "@/helpers/utils";

interface ITaxDetailProps {
  transPrice: number;
  incomeSet: any;
  taxSum: any;
}

const TaxDetail = ({ transPrice, incomeSet, taxSum }: ITaxDetailProps) => {
  const beforeTax = (Number(transPrice) * 10000) / 12;
  const actualMonthSalary = beforeTax - taxSum;
  const actualIncome = actualMonthSalary * 12;
  return (
    <>
      <section className="space-y-3 font-medium">
        <h1 className="text-lg">
          연봉 {initComma(transPrice)}만원의 실수령액은
        </h1>
        <div className="bg-[#495057] px-5 py-5 text-white">
          <div className="flex items-center justify-between pb-3 ">
            <span className="text-[20px]">월</span>
            <div className="space-x-2 text-2xl">
              {" "}
              <span className="text-3xl font-medium">
                {initComma(actualMonthSalary)}
              </span>{" "}
              원
            </div>
          </div>

          <div className="border-t-2 border-gray-500 pt-3 text-base font-normal">
            <div className="flex items-center justify-between pb-1">
              <span>공제 전 금액</span>
              <div className="space-x-2">
                {" "}
                <span>월 {initComma(beforeTax)}</span> 원
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>공제액</span>
              <div className="space-x-2">
                {" "}
                <span>월 {initComma(taxSum)}</span> 원
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2 px-5 pt-2 text-[13px] font-normal text-[#868E96] whitespace-normal">
          <p className="whitespace-normal">
            연봉 {initComma(transPrice)}만원의 월 실수령액은 <br/>공제 전 월&nbsp;
            {initComma(beforeTax)}원에서 <br/>
             공제액 월 {initComma(taxSum)}원을 뺀
            <br/>월 {initComma(actualMonthSalary)}원 입니다.
          </p>
          <p>연 실수령액은 {initComma(actualIncome)}원 입니다.</p>
        </div>
      </section>

      <section className="px-5 mt-10 space-y-3 py-10 text-neutral-700">
        <h2 className="text-base font-semibold ">월 공제액 상세 내역</h2>
        <div>
          {incomeSet?.map((item: any, idx: number) => {
            return (
              <div
                key={idx}
                className="flex justify-between border-t-2 border-[#E9ECEF] py-2 text-base font-normal first:font-semibold last:border-b-2"
              >
                <h3>{item.name}</h3>
                <span>{item.value} 원</span>
              </div>
            );
          })}
        </div>
        <div className="whitespace-normal break-words text-[13px] text-neutral-500">
          <span className="break-normal">
            비과세액 20만원,<br/> 본인포함 부양가족수 1명, <br/> 20세 이하 자녀수 0명
            기준입니다.
          </span>
        </div>
      </section>
    </>
  );
};

export default TaxDetail;
