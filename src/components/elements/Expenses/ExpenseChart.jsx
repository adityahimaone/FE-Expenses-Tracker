/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';

import Chart from '../Chart/Chart';

function ExpenseChart({ expenses }) {
  const chartsDataPoints = [
    {
      label: 'Jan',
      value: 0
    },
    {
      label: 'Feb',
      value: 0
    },
    {
      label: 'Mar',
      value: 0
    },
    {
      label: 'Apr',
      value: 0
    },
    {
      label: 'May',
      value: 0
    },
    {
      label: 'Jun',
      value: 0
    },
    {
      label: 'Jul',
      value: 0
    },
    {
      label: 'Aug',
      value: 0
    },
    {
      label: 'Sep',
      value: 0
    },
    {
      label: 'Oct',
      value: 0
    },
    {
      label: 'Nov',
      value: 0
    },
    {
      label: 'Dec',
      value: 0
    }
  ];

  if (expenses.length > 0) {
    for (const expense in expenses) {
      const date = new Date(expenses[expense].date);
      const month = date.getMonth();
      chartsDataPoints[month].value += expenses[expense].amount;
    }
  }

  return <Chart dataPoints={chartsDataPoints} />;
}

export default ExpenseChart;
