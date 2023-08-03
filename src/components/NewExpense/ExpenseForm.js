import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [dateValue, setDateValue] = useState('');
  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   dateValue: '',
  // });

  const titleHandler = (e) => {
    setTitle(e.target.value);
    // setUserInput((prev) => {
    //   return {
    //     ...prev,
    //     title: e.target.value,
    //   };
    // });
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
    // setUserInput((prev) => {
    //   return {
    //     ...prev,
    //     amount: e.target.value,
    //   };
    // });
  };
  const dateHandler = (e) => {
    setDateValue(e.target.value);
    // setUserInput((prev) => {
    //   return {
    //     ...prev,
    //     dateValue: e.target.value,
    //   };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expense = {
      title,
      amount,
      date: new Date(dateValue),
    };
    props.onSaveExpenseData(expense);
    setTitle('');
    setAmount('');
    setDateValue('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor=''>Title</label>
          <input type='text' onChange={titleHandler} value={title} />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountHandler}
            value={amount}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Date</label>
          <input
            type='date'
            min='2019-01-01'
            step='2024-12-31'
            onChange={dateHandler}
            value={dateValue}
          />
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
