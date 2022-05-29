import logo from './assets/images/logo.svg';
import Expenses from './components/elements/Expenses/Expense';
import ExpensesItem from './components/elements/Expenses/ExpenseItem';
import expenses from './context/expenses';

function App() {
  return (
    <>
      <h2>Let&rsquo;s Get Started</h2>
      <ExpensesItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpensesItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpensesItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </>
  );
}

export default App;
