import s from "./style.module.css";

export function MenuListItem(props) {
  return (
    <div
          onMouseEnter={props.active}
          onMouseLeave={props.deactive}
          className={s.item}
          style={{backgroundColor: props.hover ? "#b3cd5c" : "#7afff6" }}
    >
      {props.diffLevel}
    </div>
  );
}
