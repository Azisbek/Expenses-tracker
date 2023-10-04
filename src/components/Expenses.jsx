import React from "react";
import ExpenseItem from "./ExpenseItem";
const Expenses = ({ expenses }) => {
  return (
    <div>
      {expenses.map((el) => {
        return (
          <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
        );
      })}
      ;
    </div>
  );
};

export default Expenses;
