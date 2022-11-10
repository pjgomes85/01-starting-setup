import { useState  } from "react";

import './ExpensesItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../Expenses/UI/Card';
function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  // const [amount, setAmount] = useState(props.amount);



  const clickHandler = () => {
    setTitle('Update!!')
    console.log(title)

  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>£{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
