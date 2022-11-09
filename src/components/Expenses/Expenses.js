import ExpenseItem from "./ExpenseItem";
import Card from "../Expenses/UI/Card";
import "./Expenses.css"


function Expenses(params) {

  return (
  <Card className="expenses">
    <ExpenseItem
      title={params.expense[0].title}
      amount={params.expense[0].amount}
      date={params.expense[0].date}>
      </ExpenseItem>

      <ExpenseItem
      title={params.expense[1].title}
      amount={params.expense[1].amount}
      date={params.expense[1].date}>
      </ExpenseItem>
      <ExpenseItem
      title={params.expense[2].title}
      amount={params.expense[2].amount}
      date={params.expense[2].date}>
      </ExpenseItem>
      <ExpenseItem
      title={params.expense[3].title}
      amount={params.expense[3].amount}
      date={params.expense[3].date}>
      </ExpenseItem>
     

  </Card>

  )
};

export default Expenses;
