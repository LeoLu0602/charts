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

const FAKE_DATA = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: '',
      data: [10, 20, 30, 40],
      borderColor: 'rgb(75, 192, 192)',
    },
  ],
};

export default function LineChart() {
  const options = {
    aspectRatio: 2,
  };

  return (
    <section className="h-80 mt-4">
      <Line options={options} data={FAKE_DATA} />
    </section>
  );
}
