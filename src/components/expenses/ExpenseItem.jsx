import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ title, price, date }) => {
  const [text, setText] = useState(title);

  const updateTitleHandler = () => {
    setText("update");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <h2 className="expense-item">{text}</h2>
      <div className="expense-item__price ">{price} $</div>
      <button onClick={updateTitleHandler}>Update</button>
    </div>
  );
};

export default ExpenseItem;
