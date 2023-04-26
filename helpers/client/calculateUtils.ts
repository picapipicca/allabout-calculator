import useTaxTable from "./taxTable";

//income 연봉 //salary 월급
const useTransIncome = (income: number) => {
  const salary = income / 12 - 200000;
  const national_pension = {
    name: "국민연급",
    amount:
      salary > 5530000
        ? 248850
        : salary < 350000
        ? 15750
        : (salary / 100) * 4.5,
    description: "과세금액의 4.5%를 공제합니다",
  };
  const health_insurance = {
    name: "건강보험",
    amount: (salary / 100) * 3.545,
    description: "과세금액의 3.495%를 공제합니다",
  };
  const longterm_care_insurance = {
    name: "장기요양",
    amount: (health_insurance.amount / 100) * 12.81,
    description: "건강보험 금액의 12.27% 를 공제합니다",
  };
  const unemployment_insurance = {
    name: "고용보험",
    amount: (salary / 100) * 0.9,
    description: "과세금액의 0.9%를 공제합니다",
  };
  const income_tax = {
    name: "소득세",
    amount: useTaxTable(income / 12 - 200000),
    description:
      "부양가족수(본인포함) 1명 ,20세 이하 자녀수 0명 기준 국세청의 근로소득 간이세액표 자료를 기준으로 공제됩니다",
  };

  const residence_tax = {
    name: "지방소득세",
    amount: income_tax.amount * 10 * 0.01,
    description: "소득세의 10%를 공제합니다",
  };
  const summary = {
    name: "합",
    amount:
      national_pension.amount +
      health_insurance.amount +
      longterm_care_insurance.amount +
      unemployment_insurance.amount +
      income_tax.amount +
      residence_tax.amount,
    description: "",
  };

  return {
    summary,
    national_pension,
    health_insurance,
    longterm_care_insurance,
    unemployment_insurance,
    income_tax,
    residence_tax,
  };
};

//전체 연봉별 실수령액 테이블
const useTransIncomeLight = () => {
  let arr: any = Array.from({ length: 191 }, (x, i) => (i + 10) * 1000000);
  let tableArr: any = [];

  arr.map((income: number) => {
    let x: any = useTransIncome(Number(income));
    const { amount } = x.summary;
    const actualMonthSalary = income / 12 - amount;
    x = { amount, income, actualMonthSalary };
    tableArr.push(x);
  });
  return { tableArr };
};

export { useTransIncome, useTransIncomeLight };
