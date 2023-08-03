import ExpenseDate from './ExpenseDate';
import ExpenseTitle from './ExpenseTitle';
import './ExpenseItem.css';
import ExpenseAmount from './ExpenseAmount';
import Card from '../UI/Card';
// import { useState } from 'react';

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle('Update');
  // };
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div>
          <ExpenseTitle title={props.title} />
          <ExpenseAmount amount={props.amount} />
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
