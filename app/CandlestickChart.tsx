'use client';

import { Chart } from 'react-google-charts';

export default function CandlestickChart() {
  const data = [
    ['date', 'a', 'b', 'c', 'd'],
    ['Sep 10', 157.69, 162.89, 162.43, 162.89],
    ['Sep 9', 160.25, 160.76, 162.78, 163.1],
    ['Sep 6', 156.01, 164.89, 156.82, 165.41],
    ['Sep 5', 161.05, 161.54, 163.7, 164.59],
    ['Sep 4', 158.95, 159.3, 160.87, 163.88],
  ];

  const options = {
    chartArea: {
      left: 0,
      right: 0,
      bottom: 20,
      top: 20,
    },
  };

  return (
    <section className="">
      <Chart
        chartType="CandlestickChart"
        width="640px"
        height="320px"
        data={data}
        options={options}
      />
    </section>
  );
}
