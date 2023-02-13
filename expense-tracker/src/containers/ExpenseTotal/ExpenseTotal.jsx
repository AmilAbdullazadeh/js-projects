import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const income = useSelector((state) => state.EXPENSE.income);
  const expenseList = useSelector((state) => state.EXPENSE.expenseList);
  
  const totalExpense = expenseList.reduce((acc, expense) => acc + expense.price, 0)

  const remainingMoney = income - totalExpense
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpense} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remainingMoney} $</div>
      </div>
    </div>
  );
}
