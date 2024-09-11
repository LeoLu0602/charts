'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

interface BarDataType {
  labels: string[];
  data: number[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ barData }: { barData: BarDataType }) {
  const options = {
    aspectRatio: 2,
  };

  return (
    <section className="h-80 mt-8">
      <Bar
        options={options}
        data={{
          labels: barData.labels,
          datasets: [
            {
              label: 'Sales',
              data: barData.data,
              backgroundColor: ['rgb(75, 192, 192)'],
            },
          ],
        }}
      />
    </section>
  );
}
