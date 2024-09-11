'use client';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

const FAKE_DATA = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(255, 0, 0, 0.9)',
        'rgba(0, 0, 255, 0.9)',
        'rgba(255, 255, 0, 0.9)',
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
    <section className="h-80 mt-4">
      <Pie options={options} data={FAKE_DATA} />
    </section>
  );
}
