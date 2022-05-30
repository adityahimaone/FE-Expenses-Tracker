import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import ButtonPrimary from '@/components/UI/Button/ButtonPrimary';
import { addExpense } from '@/store/expensesSlice';

function ExpenseForm() {
  const dispatch = useDispatch();
  const initialForm = {
    title: '',
    amount: 0,
    date: ''
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = e => {
    const { name } = e.target;
    const { value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addExpense(form));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          onChange={handleChange}
          id="title"
          name="title"
          type="text"
          className="rounded-lg p-1"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="amount">Amount</label>
        <input
          onChange={handleChange}
          id="amount"
          name="amount"
          type="number"
          min="0"
          className="rounded-lg p-1"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="date">Date</label>
        <input
          onChange={handleChange}
          id="date"
          name="date"
          type="date"
          min="2020-01-01"
          max="2023-12-31"
          className="rounded-lg p-1"
          required
        />
      </div>
      <div>
        <ButtonPrimary type="submit" className="w-full">
          Submit
        </ButtonPrimary>
      </div>
    </form>
  );
}

export default ExpenseForm;
