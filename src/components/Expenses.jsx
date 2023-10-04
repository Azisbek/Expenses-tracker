import React from "react";
import ExpenseItem from "./ExpenseItem";
const Expenses = ({ title, amount, date }) => {
  return (
    <div>
      <ExpenseItem title={title} amount={amount} date={date} />
    </div>
  );
};

export default Expenses;
