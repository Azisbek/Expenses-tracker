import Expenses from "./components/Expenses";

function App() {
  const EXPENSES_DATE = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 200,
      date: new Date(2022, 5, 15),
    },
    {
      id: "e2",
      title: "Kinder Garden",
      amount: 250,
      date: new Date(2022, 11, 25),
    },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: 2,
      date: new Date(2021, 3, 12),
    },
    {
      id: "e4",
      title: "Utilities",
      amount: 100,
      date: new Date(2020, 3, 20),
    },
  ];

  return (
    <div className="App">
      {EXPENSES_DATE.map((el) => {
        return <Expenses title={el.title} price={el.amount} date={el.date} />;
      })}
    </div>
  );
}

export default App;
