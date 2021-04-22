// import ExpenseItem from "./components/ExpenseItem";
import React from "react";
import Expenses from "./components/Expenses";

function App() {
  // const para = document.createElement("p");
  // para.textContent = "This is also visible";
  // document.getElementById("root").append(para);

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

  // Alternative
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's Get started!"),
    React.createElement(Expenses, { items: expenses })
  );

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses items={expenses} />
  //   </div>
  // );
}

export default App;
