import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "94.12",
      date: new Date(2021, 2, 14),
    },
    {
      id: "e2",
      title: "New Super Computer",
      amount: "294.12",
      date: new Date(2001, 3, 14),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: "323.12",
      date: new Date(2002, 7, 14),
    },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
