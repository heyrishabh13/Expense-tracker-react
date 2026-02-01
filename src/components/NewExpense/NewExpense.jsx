import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const handleOnSubmitExpenseData = (expenseData)=>{
    props.onGetExpenseData(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={handleOnSubmitExpenseData}/>
    </div>
  );
};

export default NewExpense;
