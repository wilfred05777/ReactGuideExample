import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //   const expenseDate = new Date();
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.68;

  //   const month = props.date.toLocaleString("en-US", { month: "long" });
  //   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //   const year = props.date.getFullYear();

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
