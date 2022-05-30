/* eslint-disable import/no-unresolved */
import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import Styles from '../../../assets/styles/ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';

import { deleteExpense } from '@/store/expensesSlice';
import ConvertToIDR from '@/utils/helper/ConvertCurrency';

function ExpensesItem({ id, title, amount, date }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteExpense(id));
  };
  return (
    <div className={Styles['expense-item']}>
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className={Styles['expense-item__description']}>
        <h2>{title}</h2>
        <p className={Styles['expense-item__price']}>{ConvertToIDR(amount)}</p>
      </div>
      <div className="ml-2">
        <button
          onClick={handleDelete}
          type="button"
          className="rounded-lg border-2 py-6 px-2 hover:bg-red-500"
        >
          <MdDelete className="text-2xl text-white" />
        </button>
      </div>
    </div>
  );
}

export default ExpensesItem;
