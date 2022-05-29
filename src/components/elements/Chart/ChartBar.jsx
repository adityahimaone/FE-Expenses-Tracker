import classNames from 'classnames';
import React from 'react';

import Styles from '@/assets/styles/Chart/ChartBar.module.css';

function ChartBar({ value, label, maxValue }) {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  const cx = classNames(Styles['chart-bar__fill']);
  return (
    <div className="align-items-center flex h-full flex-col justify-center">
      <div className="border-lg flex h-full w-full flex-col justify-end overflow-hidden rounded-lg border-2 border-red-900">
        <div
          className="w-3 bg-red-400 transition-all"
          style={{ height: barFillHeight }}
        />
      </div>
      <div className={Styles['chart-bar__label']}>{label}</div>
    </div>
  );
}

export default ChartBar;
