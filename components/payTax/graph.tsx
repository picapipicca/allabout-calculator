import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Amount } from "@prisma/client";
import useSWR from "swr";

ChartJS.register(ArcElement, Tooltip, Legend);
interface GraphProps {
  ok: boolean;
  amounts: Amount[];
}
const Graph = () => {
  const { data } = useSWR<GraphProps>(`/api/amount`);
// console.log(data)
  // const amountArray = data?.amounts.reduce(
  //   (acc, current, index, arr) => {
  //     let previousAmount = index === 0 ? 0 : arr[index - 1].amount;
  //     let currentAmount = current.amount;
  //     let currentCount = current.count;

  //     // Add count to existing index in amountArray
  //     let currentIndex = Math.floor(currentAmount / 20000000);
  //     if (currentIndex < acc.length) {
  //       acc[currentIndex] += currentCount;
  //     }

  //     // Add count to additional indexes in amountArray
  //     while (
  //       currentAmount - previousAmount >= 20000000 &&
  //       previousAmount < 140000000 &&
  //       currentIndex < acc.length - 1
  //     ) {
  //       currentIndex++;
  //       acc[currentIndex] += currentCount;
  //       previousAmount += 20000000;
  //     }

  //     return acc;
  //   },
  //   [0, 0, 0, 0, 0, 0, 0, 0]
  // );
  // console.log(amountArray);
  // const dataSet = data?.amounts.map((doc) => {
  //   let dataArray = [0, 0, 0, 0, 0, 0, 0, 0];
  //   if (doc.amount < 20000000) {
  //     dataArray[0] = dataArray[0] + doc.count;
  //   } else if (doc.amount < 40000000 && doc.amount >= 20000000) {
  //     dataArray[1] = dataArray[1] + doc.count;
  //   } else if (doc.amount < 60000000 && doc.amount >= 40000000) {
  //     dataArray[2] = dataArray[2] + doc.count;
  //   } else if (doc.amount < 80000000 && doc.amount >= 60000000) {
  //     dataArray[3] = dataArray[3] + doc.count;
  //   } else if (doc.amount < 100000000 && doc.amount >= 80000000) {
  //     dataArray[4] = dataArray[4] + doc.count;
  //   } else if (doc.amount < 120000000 && doc.amount >= 100000000) {
  //     dataArray[5] = dataArray[5] + doc.count;
  //   } else if (doc.amount < 140000000 && doc.amount >= 120000000) {
  //     dataArray[6] = dataArray[6] + doc.count;
  //   } else if (doc.amount >= 140000000) {
  //     dataArray[7] = dataArray[7] + doc.count;
  //   }
  //   return dataArray
  // });
  // console.log("dataSet", dataSet);
  const dataSet = [1, 2, 3, 4, 5, 6, 7, 8];

  const graphData = {
    labels: [
      "- 2000만원",
      "2000-4000만원",
      "4000-6000만원",
      "6000-8000만원",
      "8000만원-1억원",
      "1억원-1.2억원",
      "1.2억원-1.4억원",
      "1.4억원 -",
    ],
    datasets: [
      {
        label: "검색한 %",
        data: dataSet,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(245, 45, 175, 0.2)",
          "rgba(183, 240, 27, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(245, 45, 175, 1)",
          "rgba(183, 240, 27, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return data ? (
    <>
      <Pie data={graphData} />
    </>
  ) : null;
};

export default Graph;
