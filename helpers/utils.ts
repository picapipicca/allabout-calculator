//css classnames
const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};
//pagination
const paginate = (items: any, pageNumber: number, pageSize: number) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
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
//단위 변환
const unitChange = (income: number) => {
  const unitWords = ["", "만", "억", "조", "경"];
  const splitUnit = 10000;
  const splitCount = unitWords.length;
  let resultArray = [];
  let resultString = "";

  for (let i = 0; i < splitCount; i++) {
    let unitResult =
      (income % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }
  for (let i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString = String(resultArray[i]) + unitWords[i] + resultString;
  }
  return resultString;
};

export { paginate, unitChange, initComma, cls };
