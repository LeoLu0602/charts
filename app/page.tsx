import axios from 'axios';
import CandlestickChart from './CandlestickChart';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';

const API_URL = 'http://127.0.0.1:8000/api';

export default async function Home() {
  const candlestickData = await axios.get(API_URL + '/candlestick-data');
  const lineData = await axios.get(API_URL + '/line-chart-data');
  const barData = await axios.get(API_URL + '/bar-chart-data');
  const pieData = await axios.get(API_URL + '/pie-chart-data');

  return (
    <>
      <main>
        <h1 className="font-bold text-3xl">Charts</h1>
        <CandlestickChart candlestickData={candlestickData.data} />
        <LineChart lineData={lineData.data} />
        <BarChart barData={barData.data} />
        <PieChart pieData={pieData.data} />
      </main>
    </>
  );
}
