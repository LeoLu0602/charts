'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineDataType {
  labels: string[];
  data: number[];
}

export default function LineChart({
  lineData,
}: {
  lineData: LineDataType | null;
}) {
  const options = {};

  return (
    <>
      {lineData && (
        <section className="max-w-[640px] mt-8">
          <Line
            options={options}
            data={{
              labels: lineData.labels,
              datasets: [
                {
                  label: 'Steps',
                  data: lineData.data,
                  borderColor: 'rgb(75, 192, 192)',
                },
              ],
            }}
          />
        </section>
      )}
    </>
  );
}
