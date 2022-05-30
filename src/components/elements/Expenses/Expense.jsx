import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useSelector } from 'react-redux';

import ExpenseChart from './ExpenseChart';
import ExpenseFilter from './ExpenseFilter';
import ExpenseForm from './ExpenseForm';
import ExpensesItem from './ExpenseItem';

import ButtonPrimary from '@/components/UI/Button/ButtonPrimary';

function Expenses({ expenses }) {
  const expensesData = useSelector(state => state.expenses.data);
  const [showForm, setShowForm] = useState(false);
  const [filteredYear, setfilteredYear] = useState('2022');

  const handleFilterChange = selectedYear => {
    setfilteredYear(selectedYear);
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const filteredExpenses = expensesData.filter(expense =>
    expense.date.includes(filteredYear)
  );

  console.log(filteredExpenses);
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
      <ExpenseFilter
        filteredYear={filteredYear}
        onChangeFilter={handleFilterChange}
      />
      <div>
        {filteredExpenses.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-2xl font-semibold">
              No Expenses Found for {filteredYear}
            </p>
          </div>
        )}
        {filteredExpenses.map(expense => (
          <ExpensesItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
