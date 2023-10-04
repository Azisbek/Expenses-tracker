import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import React from "react";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <h2 className="expense-item">{title}</h2>
      <div className="expense-item__price ">{amount} $</div>
    </div>
  );
};

export default ExpenseItem;
