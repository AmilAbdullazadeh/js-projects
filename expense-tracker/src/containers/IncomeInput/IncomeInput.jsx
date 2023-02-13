import { useDispatch, useSelector } from "react-redux";
import { setIncome } from "store/expense/expense-slice";
import s from "./style.module.css";

export function IncomeInput(props) {
  const income = useSelector((state) => state.EXPENSE.income);
  const dispatch = useDispatch()

  function setValue(e) {
    dispatch(setIncome(Number.parseFloat(e.target.value)));
  }

  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          defaultValue={income}
          onChange={setValue}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}
