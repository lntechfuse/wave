import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Utils = {
  months: ({ count }: { count: number }) => Array.from({ length: count }, (_, i) => `Month ${i + 1}`),
  numbers: ({ count, min, max }: { count: number; min: number; max: number }) => Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min),
  CHART_COLORS: {
    blue: '#0000FF',
    green: '#00FF00',
    red: '#FF0000',
  },
};

const DATA_COUNT = 12;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = Utils.months({ count: DATA_COUNT });

const App = () => {
  return (
    <div className="App" style={{ width: '600px', height: '400px' }}>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Unfilled',
              fill: false,
              backgroundColor: Utils.CHART_COLORS.blue,
              borderColor: Utils.CHART_COLORS.blue,
              data: Utils.numbers(NUMBER_CFG),
            },
            {
              label: 'Dashed',
              fill: false,
              backgroundColor: Utils.CHART_COLORS.green,
              borderColor: Utils.CHART_COLORS.green,
              borderDash: [5, 5],
              data: Utils.numbers(NUMBER_CFG),
            },
            {
              label: 'Filled',
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              borderColor: "red",
              data: Utils.numbers(NUMBER_CFG),
              fill: true,
            },
          ],
        }}
      />
    </div>
  );
};

export default App;