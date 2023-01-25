import React from "react";
import "./NewExpenseForm.css";
const NewExpenseForm = () => {
    const inputHandler = (event)=>{
        event.preventDefault()
        console.log(document.getElementById('textid').value)
        console.log(document.getElementById('numberid').value)
        console.log(document.getElementById('dateid').value)
    }

const titleHandler = (event)=>{

    console.log(event.target.value)

}
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" id = 'textid' onChange={titleHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" id = 'numberid'></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-10-21" max="2023-10-12" id = "dateid"></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={inputHandler}>AddExpense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
