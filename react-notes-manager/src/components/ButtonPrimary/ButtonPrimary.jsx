import s from "./style.module.css";
export function ButtonPrimary({onClick, isDisabled, children}) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      type="button"
      className={`btn btn-primary ${s.button}`}
    >
      {children}
    </button>
  );
}
