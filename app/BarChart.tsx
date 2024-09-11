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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FAKE_DATA = {
  labels: ['Product A', 'Product B', 'Product C'],
  datasets: [
    {
      label: 'Sales',
      data: [100, 150, 200],
      backgroundColor: ['rgb(75, 192, 192)'],
    },
  ],
};

export default function BarChart() {
  const options = {
    aspectRatio: 2,
  };

  return (
    <section className="h-80 mt-4">
      <Bar options={options} data={FAKE_DATA} />
    </section>
  );
}
