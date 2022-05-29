import React from 'react';

import ChartBar from './ChartBar';

import Styles from '@/assets/styles/Chart/Chart.module.css';

function Chart({ dataPoints }) {
  const totalMaximum = Math.max(...dataPoints.map(({ value }) => value));
  console.log(dataPoints);
  return (
    <div className="flex h-40 justify-around rounded-lg bg-red-100 p-4 text-center">
      {dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
}

export default Chart;
