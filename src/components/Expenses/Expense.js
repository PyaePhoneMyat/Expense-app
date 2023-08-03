import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import './Expenses.css';

const Expense = (props) => {
  const [filterYear, setfilterYear] = useState('Select Year');
  const filterChangeHandler = (filterYearValue) => {
    setfilterYear(filterYearValue);
  };

  const allExpenseItem = [...props.items];

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <>
      <ExpenseChart expenses={filterExpenses} />
      <ExpenseFilter
        selected={filterYear}
        onchangeFilter={filterChangeHandler}
      />
      {filterYear === 'Select Year' ? (
        <ExpenseList items={allExpenseItem} />
      ) : (
        <ExpenseList items={filterExpenses} />
      )}
    </>
  );
};

export default Expense;
