import React from 'react';

import Expenses from '@/components/elements/Expenses/Expense';
import Layout from '@/components/layouts/DefaultLayout';
import ButtonPrimary from '@/components/UI/Button/ButtonPrimary';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ];

  return (
    <Layout>
      <div className="flex items-center justify-center rounded-lg bg-red-500 py-12 shadow-lg">
        <h1 className="text-3xl font-medium text-white">Expenses Calculator</h1>
      </div>
      <div className="shadomax-w-lg my-4 flex items-center justify-center rounded-lg bg-slate-100 py-4">
        <ButtonPrimary>Add New Expenses</ButtonPrimary>
      </div>
      <div>
        <Expenses expenses={expenses} />
      </div>
    </Layout>
  );
}

export default App;
