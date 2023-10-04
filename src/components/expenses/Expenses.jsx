import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
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
