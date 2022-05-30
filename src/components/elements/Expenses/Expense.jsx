import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

import ExpenseChart from './ExpenseChart';
import ExpenseForm from './ExpenseForm';

import ButtonPrimary from '@/components/UI/Button/ButtonPrimary';

function Expenses({ expenses }) {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <div className="shadomax-w-lg relative my-4 flex flex-col items-center justify-center rounded-lg bg-slate-100 py-10">
        <div className="flex">
          <div className="w-64 max-w-md">{showForm && <ExpenseForm />}</div>
        </div>
        <div className="absolute top-2 right-2">
          {showForm && (
            <ButtonPrimary onClick={handleShowForm}>
              <MdClose />
            </ButtonPrimary>
          )}
        </div>
        <div className="">
          {!showForm && (
            <ButtonPrimary onClick={handleShowForm}>
              Add New Expenses
            </ButtonPrimary>
          )}
        </div>
      </div>
      <ExpenseChart expenses={expenses} />
    </div>
  );
}

export default Expenses;
