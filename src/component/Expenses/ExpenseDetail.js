import "./ExpenseItem.css";
const ExpenseDetail=(props)=> {
  return (
    <div>
      <div className="expense-item__description">
        <h5> {props.title} </h5>
      </div>
    
      <div className="expense-item__price">
        <h2>{props.amount}</h2>
      </div>
    </div>
  );
}

export default ExpenseDetail
