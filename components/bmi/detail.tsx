interface BmiDetailProps {
    height: number;
    weight: number;
    calculateBmi: number;
    calculatePipw: number;
}
const BmiDetail = ({height,weight,calculateBmi,calculatePipw}:BmiDetailProps) => {
  return (
    
      <div
        onClick={()=>{navigator.clipboard.writeText(`BMI 측정 지수 : ${calculateBmi} 표준 체중 : ${calculatePipw} kg`); alert("복사되었습니다")}}
        className="block mx-auto max-w-sm p-6 cursor-context-menu bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          <span className="font-bold">
            {height} cm , {weight} kg
          </span>{" "}
          일때의 결과는
        </h5>
        <p className="font-normal text-gray-700">
          Bmi 측정 지수 :{" "}
          <span className="text-red-600 text-lg font-bold">{calculateBmi}</span>
        </p>
        <p>
          표준 체중 :{" "}
          <span className="text-green-700 text-lg font-bold">
            {calculatePipw}
          </span>{" "}
          &nbsp;kg
        </p>
      </div>
  
  );
};
export default BmiDetail;
