// import ExpenseItem from "./components/ExpenseItem";
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
      {/* <Expenses></Expenses> */}
    </div>
  );
}

export default App;
