import React, { useState } from "react";
import "./NewExpenseForm.css";
const NewExpenseForm = (props) => {
  const [enteredtitle, setenteredtitle] = useState("");
  const [enteredAmount, setEnterdAmount] = useState("");
  const [enteredDate, setEnterdDate] = useState("");

  // const [userinput,setUserInput] = useState({
  //     enteredtitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // }
  // )
  const titleHandler = (event) => {
    setenteredtitle(event.target.value);
    console.log(event.target.value);

    // setUserInput((prevState)=>{
    //     return(
    //         {...prevState,enteredtitle:event.target.value}
    //     )
    // }

    // )
  };

  const amountHandler = (event) => {
    setEnterdAmount(event.target.value);
    // setUserInput((prevState)=>{
    //     return({
    //         ...prevState,enteredAmount:event.target.value
    //     })
    // })
  };

  const dateHandler = (event) => {
    setEnterdDate(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData)
    setenteredtitle('')
    setEnterdAmount('')
    setEnterdDate('')
  };

  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredtitle} onChange={titleHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountHandler} ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-10-21"
            max="2023-10-12"
            id="dateid"
            value={enteredDate}
            onChange={dateHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">AddExpense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
