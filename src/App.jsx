import React from 'react';

import WaveIMG from '@/assets/images/wave.svg';
import Expenses from '@/components/elements/Expenses/Expense';
import Layout from '@/components/layouts/DefaultLayout';

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
      <div className="relative flex items-center justify-center overflow-clip rounded-lg bg-red-500 py-12 shadow-lg">
        <div className="z-[2] flex flex-col text-center">
          <h1 className=" text-3xl font-medium  text-white">
            Expenses Tracker
          </h1>
          <p className="text-white">let&lsquo;s save your expenses</p>
        </div>
        <img
          src={WaveIMG}
          alt="wave img"
          className="absolute bottom-0 z-[1] "
        />
      </div>
      <div>
        <Expenses expenses={expenses} />
      </div>
    </Layout>
  );
}

export default App;
