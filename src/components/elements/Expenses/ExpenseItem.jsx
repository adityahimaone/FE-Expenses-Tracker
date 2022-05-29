/* eslint-disable import/no-unresolved */
import React from 'react';

import Styles from '../../../assets/styles/ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';

function ExpensesItem({ title, amount, date }) {
  return (
    <div className={Styles['expense-item']}>
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className={Styles['expense-item__description']}>
        <h2>{title}</h2>
        <p className={Styles['expense-item__price']}>{amount}</p>
      </div>
    </div>
  );
}

export default ExpensesItem;