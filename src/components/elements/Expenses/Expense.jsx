import React from 'react';

import ExpenseChart from './ExpenseChart';

function Expenses({ expenses }) {
  return (
    <div>
      <ExpenseChart expenses={expenses} />
    </div>
  );
}

export default Expenses;
