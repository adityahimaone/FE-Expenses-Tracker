import React from 'react';

import Styles from '../../../assets/styles/ExpenseDate.module.css';

function ExpenseDate({ date }) {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className={Styles['expense-date']}>
      <div className={Styles['expense-date__month']}>{month}</div>
      <div className={Styles['expense-date__year ']}>{day}</div>
      <div className={Styles['expense-date__day']}>{year}</div>
    </div>
  );
}

export default ExpenseDate;
