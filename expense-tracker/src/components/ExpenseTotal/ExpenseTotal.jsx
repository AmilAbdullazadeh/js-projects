import s from "./style.module.css";

export function ExpenseTotal(props) {
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>Fake price $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>Fake price $</div>
      </div>
    </div>
  );
}
