import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const Graph = (data:any) => {

  const dataArray = data?.amounts?.reduce(
    (acc:any, curr:any) => {
      const index =
        curr.amount < 140000000 ? Math.floor(curr.amount / 20000000) : 7;
      acc[index] += curr.count;
      return acc;
    },
    [0, 0, 0, 0, 0, 0, 0, 0]
  );

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
        data: dataArray,
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
