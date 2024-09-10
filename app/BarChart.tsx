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
  labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment', 'Transportation'],
  datasets: [
    {
      data: [1200, 300, 150, 180, 100],
      backgroundColor: ['rgba(255, 99, 132, 0.2)'],
      borderColor: ['rgba(54, 162, 235, 1)'],
      borderWidth: 1,
    },
  ],
};

export default function BarChart() {
  const options = {
    aspectRatio: 2,
  };

  return (
    <>
      <section className="w-2/5 m-4 font-bold">
        <Bar options={options} data={FAKE_DATA} />
      </section>
    </>
  );
}
