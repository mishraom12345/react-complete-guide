import "./ExpenseItem.css";
function ExpenseItem(props) {
  const expensedate = new Date();
  const expenseTitle = "car insurance"
  const expenseAmount = 294
  const locationofExpenditure = "location-bombay";
  const expenseDate = new Date()
  return (
    <div className="expense-item">
      <div>
        <h5>{props.date.toDateString()}-</h5>
      </div>
      <div className="expense-item__description">
        <div>
          <h5> {props.title} </h5>
        </div>
      </div>
      <div>
        <h2>{locationofExpenditure}</h2>
      </div>
      <div className="expense-item__price">
        <h2>{props.amount}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
