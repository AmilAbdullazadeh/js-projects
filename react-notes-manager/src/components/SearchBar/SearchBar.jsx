import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";
export function SearchBar({ onTextChange, placeholder }) {
  return (
    <>
      <SearchIcon size={25} className={s.icon} />
      <input
        type="text"
        className={s.input}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
}
