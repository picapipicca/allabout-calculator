import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { GetStaticProps } from "next";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
ChartJS.register(ArcElement, Tooltip, Legend);

const Graph = (amountArray: any) => {

  const dataSet = [7,9,13,5,3,1,4,0];
  const data = {
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
  return (
    <>
      <Pie data={data} />
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  let amountArray = [0, 0, 0, 0, 0, 0, 0, 0];

  const querySnapshot = await getDocs(collection(db, "income"));
  querySnapshot.forEach((doc) => {

    console.log(doc.id,"=>",doc.data().count);
    
    // if (doc.data().count < 20000000) {
    //   amountArray = [ amountArray[0]++,...amountArray,];
    // } else if (doc.data().count < 40000000 && doc.data().count >= 20000000) {
    //   amountArray= [amountArray[1]++,...amountArray];
    // } else if (doc.data().count < 60000000 && doc.data().count >= 40000000) {
    //   amountArray= [amountArray[2]++,...amountArray];
    // } else if (doc.data().count < 80000000 && doc.data().count >= 60000000) {
    //   amountArray= [amountArray[3]++,...amountArray];
    // } else if (doc.data().count < 100000000 && doc.data().count >= 80000000) {
    //   amountArray= [amountArray[4]++,...amountArray];
    // } else if (doc.data().count < 120000000 && doc.data().count >= 100000000) {
    //   amountArray= [amountArray[5]++,...amountArray];
    // } else if (doc.data().count < 140000000 && doc.data().count >= 120000000) {
    //   amountArray= [amountArray[6]++,...amountArray];
    // } else if (doc.data().count >= 140000000) {
    //   amountArray= [amountArray[7]++,...amountArray];
    // }
    // return amountArray
  });
  return {
    props: {
      amountArray: JSON.parse(JSON.stringify(amountArray)),
    },
  };
};
export default Graph;
