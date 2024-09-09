import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement,Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Utils = {
  months: ({ count }: { count: number }) => {
    const now = new Date();
    return Array.from({ length: count }, (_, i) => {
      const date = new Date(now);
      date.setMonth(date.getMonth() - (count - i - 1));
      return date.toISOString().slice(0, 10); // รูปแบบ: YYYY-MM-DD
    });
  },
  numbers: ({ count, min, max }: { count: number; min: number; max: number }) => 
    Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min),
  CHART_COLORS: {
    purple: '#BEA9DF',
    blue: '#78A3DF',
    green: '#BEE3BA',
    yellow: '#FDD771',
  }
};


const DATA_COUNT = 12;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = Utils.months({ count: DATA_COUNT });

const App = () => {
  return (
    <div className="App" style={{ width: '1000px', height: '500px' }}>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: 'STK01',
              fill: true,
              backgroundColor:"rgba(190, 169, 223, 0.3)",
              borderColor: Utils.CHART_COLORS.purple,
              data: Utils.numbers(NUMBER_CFG),
              borderDash: [5, 5],
            },
            {
              label: 'STK02',
              fill: true,
              backgroundColor:"rgba(120,163,223, 0.2)",
              borderColor: Utils.CHART_COLORS.blue,
              borderDash: [5, 5],
              data: Utils.numbers(NUMBER_CFG),
            },
            {
              label: 'STK03',
              backgroundColor:"rgba(190, 227,186, 0.2)",
              borderColor: Utils.CHART_COLORS.green,
              data: Utils.numbers(NUMBER_CFG),
              borderDash: [5, 5],
              fill: true,
            },
            {
              label: 'STK04',
              backgroundColor:"rgba(253,215,113, 0.2)",
              borderColor: Utils.CHART_COLORS.yellow,
              data: Utils.numbers(NUMBER_CFG),
              fill: true,
              borderDash: [5, 5],
              
            }
          ],
        }}
      />
    </div>
  );
};


export default App;