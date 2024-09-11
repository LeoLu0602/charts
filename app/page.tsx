import axios from 'axios';
import CandlestickChart from './CandlestickChart';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';

const API_URL = 'http://127.0.0.1:8000/api';

export default async function Home() {
  let candlestickData, lineData, barData, pieData;

  try {
    [candlestickData, lineData, barData, pieData] = await Promise.all([
      axios.get(API_URL + '/candlestick-data'),
      axios.get(API_URL + '/line-chart-data'),
      axios.get(API_URL + '/bar-chart-data'),
      axios.get(API_URL + '/pie-chart-data'),
    ]);
  } catch (error) {}

  return (
    <>
      <main>
        <h1 className="font-bold text-3xl">Charts</h1>
        <CandlestickChart candlestickData={candlestickData?.data ?? null} />
        <LineChart lineData={lineData?.data ?? null} />
        <BarChart barData={barData?.data ?? null} />
        <PieChart pieData={pieData?.data ?? null} />
      </main>
    </>
  );
}
