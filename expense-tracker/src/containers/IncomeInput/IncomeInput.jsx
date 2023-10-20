import { useDispatch, useSelector } from "react-redux";
import { setIncome } from "store/expense/expense-slice";
import s from "./style.module.css";

export function IncomeInput(props) {
  const defaultValue = useSelector((state) => state.expense.income);
    const dispatch = useDispatch();

  function setValue(e) {
    const value = e.target.value;
    dispatch(setIncome(value));
  }

  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          defaultValue={defaultValue}
          onChange={setValue}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}
