import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../ui/Card";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((el) => {
        return (
          <ExpenseItem
            title={el.title}
            key={el.id}
            amount={el.amount}
            date={el.date}
          />
        );
      })}
      ;
    </Card>
  );
};

export default Expenses;
