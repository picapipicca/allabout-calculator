import useTaxTable from "./taxTable";

const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};
// 3자리수 ,표시
const initComma = (x: number | undefined) => {
  if (x) {
    const noFloat = Math.floor(x);
    return noFloat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return "0";
  }
};

//income 연봉 //salary 월급
const useTransIncome = (income: number) => {
  const salary = (income/ 12) - 200000;
  const national_pension = {
    name: "국민연급",
    amount:
      salary > 5530000
        ? 248850
        : salary < 350000
        ? 15750
        : (salary / 100) * 4.5,
  };
  const health_insurance = { name: "건강보험", amount: (salary / 100) * 3.545 };
  const longterm_care_insurance = {
    name: "장기요양",
    amount: (health_insurance.amount / 100) * 12.81,
  };
  const unemployment_insurance = {
    name: "고용보험",
    amount: (salary / 100) * 0.9,
  };
  const income_tax = {
    name: "소득세",
    amount: useTaxTable((income / 12) - 200000),
  };

  const residence_tax = {
    name: "지방소득세",
    amount: income_tax.amount * 10 * 0.01,
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

//2023 연봉별 실수령액 테이블
const useTransIncomeLight = () => {
  let arr: any = Array.from({ length: 191 }, (x, i) => (i + 10) * 100);
  let tableArr: any = [];

  arr.map((income: number) => {
    let x: any = useTransIncome(Number(income));
    const { 합 } = x;
    const actualMonthSalary = (income * 10000) / 12 - 20 - 합;
    x = { 합, income, actualMonthSalary };
    tableArr.push(x);
  });
  return { tableArr };
};

const useFilteredTable = (amount: number) => {
  let arr: any = Array.from({ length: 21 }, (_, i) => i * 100 + amount - 1000);
  let tableArr: any = [];
  arr.map((income: number) => {
    let x: any = useTransIncome(Number(income));
    const { 합 } = x;
    const actualMonthSalary = (income * 10000) / 12 - 20 - 합;
    x = { 합, income, actualMonthSalary };
    tableArr.push(x);
  });
  return { tableArr };
};

export {
  useTransIncome,
  initComma,
  useTransIncomeLight,
  cls,
  useFilteredTable,
};
