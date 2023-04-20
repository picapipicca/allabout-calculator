const BMIRangeTable = () => {
    const bmiRanges = [
      { range: '저체중', min: 0, max: 18.4 },
      { range: '정상체중', min: 18.5, max: 24.9 },
      { range: '과체중', min: 25, max: 29.9 },
      { range: '경도 비만', min: 30, max: 34.9 },
      { range: '중정도 비만', min: 35, max: 39.9 },
      { range: '고도 비만', min: 40, max: Infinity },
    ];
  
    return (
      <table className="border-2 py-4">
        <thead>
          <tr>
            <th>내 체중상태</th>
            <th>체질량 지수(BMI)</th>
          </tr>
        </thead>
        <tbody>
          {bmiRanges.map(({ range, min, max }) => (
            <tr key={range}>
              <td>{range}</td>
              <td>{`${min} - ${max}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default BMIRangeTable;
  