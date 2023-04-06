import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// parameter will be an object that holds all the passed in values as key:value pairs
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
