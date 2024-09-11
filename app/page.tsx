import CandlestickChart from './CandlestickChart';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';

export default function Home() {
  return (
    <>
      <main className="">
        <h1 className="font-bold text-3xl">Charts</h1>
        <CandlestickChart />
        <LineChart />
        <BarChart />
        <PieChart />
      </main>
    </>
  );
}
