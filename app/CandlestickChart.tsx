'use client';

import { Chart } from 'react-google-charts';

interface CandlestickDataType {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export default function CandlestickChart({
  candlestickData,
}: {
  candlestickData: CandlestickDataType[];
}) {
  const options = {
    chartArea: {
      left: 0,
      right: 0,
      bottom: 20,
      top: 20,
    },
  };

  return (
    <section className="mt-8">
      <Chart
        chartType="CandlestickChart"
        width="640px"
        height="320px"
        data={[
          ['x', '', '', '', ''],
          ...candlestickData.map(({ x, open, high, low, close }) => [
            x,
            low,
            open,
            close,
            high,
          ]),
        ]}
        options={options}
      />
    </section>
  );
}
