import React ,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";

const ExpenseItem=(props)=> {
  const [title,SetTitle] = useState(props.title)

  const [amount,setAmount] = useState(props.amount)

  const updateAmountHandler = ()=>{
    setAmount('100')
  }
 
  const clickHandler = ()=>{
    SetTitle('Updated')
    console.log('title')
  }

  
  

  

  


  return (
    
      <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={updateAmountHandler}>expense </button>
      
    </Card>
    
    
  );
}

export default ExpenseItem;
