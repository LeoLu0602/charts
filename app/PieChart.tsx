'use client';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

interface PieDataType {
  labels: string[];
  data: number[];
}

ChartJS.register(Tooltip, Legend, ArcElement);

export default function PieChart({ pieData }: { pieData: PieDataType }) {
  const options = {
    aspectRatio: 1,
  };

  return (
    <section className="h-80 mt-8">
      <Pie
        options={options}
        data={{
          labels: pieData.labels,
          datasets: [
            {
              data: pieData.data,
              backgroundColor: [
                'rgba(255, 0, 0, 0.9)',
                'rgba(0, 0, 255, 0.9)',
                'rgba(255, 255, 0, 0.9)',
              ],
              hoverOffset: 4,
            },
          ],
        }}
      />
    </section>
  );
}
