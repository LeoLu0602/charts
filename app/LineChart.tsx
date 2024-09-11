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
  labels: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  datasets: [
    {
      label: 'Steps',
      data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
      borderColor: 'rgb(75,192,192)',
    },
  ],
};

export default function LineChart() {
  const options = {
    aspectRatio: 2,
  };

  return (
    <section className="h-80">
      <Line options={options} data={FAKE_DATA} />
    </section>
  );
}
