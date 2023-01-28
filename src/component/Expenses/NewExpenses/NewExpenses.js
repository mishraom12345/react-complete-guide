import React,{useState} from "react"
import NewExpenseForm from "./NewExpenseForm"
import './NewExpenses.css'
 

const NewExpense = (props) => {
  const [isEditing,setEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
        
      };
      props.onAddExpense(expenseData);
      setEditing(false)
    };
    const startEditingHandler = ()=>{
      setEditing(true)
    }

    const stopEditingHandler = ()=>{
      setEditing(false)
    }
    return (
      <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {stopEditingHandler} />}
      </div>
    );
  };
  
  export default NewExpense;