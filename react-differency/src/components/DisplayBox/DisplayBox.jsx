import s from "./style.module.css";

export function DisplayBox(props) {

  return (
    <div className={`${s.box} ${s.dFlex}`}>
      {props.diff}
    </div>
  );
}
