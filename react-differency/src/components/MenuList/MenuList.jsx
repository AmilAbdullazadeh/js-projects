import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
//utils
import { levels } from "../../utils/contants";

export function MenuList(props) {

  return (
    <div className={s.box}>
      {levels.map((level) => (
        <MenuListItem
          isSelected={props.level === level}
          handleClick={props.handleClick}
          diffLevel={level}
        />
      ))}
    </div>
  );
}
