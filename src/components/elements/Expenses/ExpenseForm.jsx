import React, { useState } from 'react';

import ButtonPrimary from '@/components/UI/Button/ButtonPrimary';

function ExpenseForm() {
  const initialForm = {
    title: '',
    amount: '',
    date: ''
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = e => {
    e.preventDefault();

    const { name } = e.target;
    const { value } = e.target;

    setForm({ ...form, [name]: value });
  };

  console.log(form);
  return (
    <form className="space-y-3">
      <div className="flex flex-col">
        <label htmlFor="Title">Title</label>
        <input
          onChange={handleChange}
          name="title"
          type="text"
          className="rounded-lg p-1"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Amount">Amount</label>
        <input
          onChange={handleChange}
          name="amount"
          type="number"
          className="rounded-lg p-1"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Date">Date</label>
        <input
          onChange={handleChange}
          name="date"
          type="date"
          className="rounded-lg p-1"
        />
      </div>
      <div>
        <ButtonPrimary className="w-full">Submit</ButtonPrimary>
      </div>
    </form>
  );
}

export default ExpenseForm;
