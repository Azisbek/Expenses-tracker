import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const inputChangeHandler = (event) => {
    const currentInput = event.target.name;
    if (currentInput === "title") {
      setTitle(event.target.value);
    } else if (currentInput === "amount") {
      setAmount(event.target.value);
    } else if (currentInput === "date") {
      setDate(event.target.value);
    }
  };

  //   const titleChangeHandler = (event) => {
  //     setTitle(event.target.value);
  //   };
  //   const amountChangeHandler = (event) => {
  //     setAmount(event.target.value);
  //   };
  //   const dateChangeHandler = (event) => {
  //     setDate(event.target.value);
  //   };

  ////////////////////////////
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(title);
    console.log(amount);
    console.log(date);
  };
  ////////////////////////////////////
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control ">
          <label htmlFor="">Title</label>
          <input name="title" onChange={inputChangeHandler} type="text" />
        </div>
        <div className="new-expense__control ">
          <label htmlFor="">Amount</label>
          <input name="amount" onChange={inputChangeHandler} type="number" />
        </div>
        <div className="new-expense__control ">
          <label htmlFor="">Date</label>
          <input
            name="date"
            onChange={inputChangeHandler}
            type="date"
            min={"2022-01-01"}
            max={"2027-12-12"}
          />
        </div>
      </div>
      <button className="new-expense__actions">Add expenses</button>
    </form>
  );
};

export default ExpenseForm;
