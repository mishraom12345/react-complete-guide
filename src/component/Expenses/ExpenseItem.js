import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";

const ExpenseItem=(props)=> {
  const locationofExpenditure = "location-bombay";

  return (
    
      <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
    </Card>
    
    
  );
}

export default ExpenseItem;
