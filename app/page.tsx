import axios from 'axios';
import CandlestickChart from './CandlestickChart';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';

const API_URL = 'https://charts-api-qwx6.onrender.com/api';

export default async function Home() {
  let candlestickData, lineData, barData, pieData;
  let isApiFailed = false;

  try {
    [candlestickData, lineData, barData, pieData] = await Promise.all([
      axios.get(API_URL + '/candlestick-data'),
      axios.get(API_URL + '/line-chart-data'),
      axios.get(API_URL + '/bar-chart-data'),
      axios.get(API_URL + '/pie-chart-data'),
    ]);
  } catch (error) {
    console.error('Fetching Error: ', error);
    isApiFailed = true;
  }

  return (
    <>
      <main>
        <h1 className="text-3xl">Charts</h1>
        <CandlestickChart candlestickData={candlestickData?.data ?? null} />
        <LineChart lineData={lineData?.data ?? null} />
        <BarChart barData={barData?.data ?? null} />
        <PieChart pieData={pieData?.data ?? null} />
        {isApiFailed && (
          <section className="bg-rose-500 fixed left-4 bottom-4 px-8 py-4 text-white font-bold rounded-lg">
            API Failed
          </section>
        )}
      </main>
    </>
  );
}
