import { useState } from "react";
import s from "./style.module.css";

export function MenuListItem(props) {
  const [isHover, setIsHover] = useState(false);

  const active = () => {
    setIsHover(true);
  };

  const deactive = () => {
    setIsHover(false);
  };

  const getBgColor = () => {
    if (isHover) {
      return "#b3cd5c";
    } else {
      if (props.isSelected) {
        return "#b3cd5c";
      } else {
        return "#7afff6";
      }
    }
  };

  return (
    <div
      onClick={() => props.handleClick(props.diffLevel)}
      onMouseEnter={active}
      onMouseLeave={deactive}
      className={s.item}
      style={{ backgroundColor: getBgColor() }}
    >
      {props.diffLevel}
    </div>
  );
}
