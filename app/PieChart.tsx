'use client';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

const FAKE_DATA = {
  labels: ['Facebook', 'Instagram', 'Twitter', 'Youtube', 'LinkedIn'],
  datasets: [
    {
      label: 'Time Spent',
      data: [120, 60, 30, 90, 45],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      hoverOffset: 4,
    },
  ],
};

export default function PieChart() {
  const options = {
    aspectRatio: 1,
  };

  return (
    <section className="h-80">
      <Pie options={options} data={FAKE_DATA} />
    </section>
  );
}
