import { useState } from "react";
import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

export function MenuList() {
  const [isHover, setIsHover] = useState(false);

  const active = () => {
    setIsHover(true);
  };

  const deactive = () => {
    setIsHover(false);
  };

  return (
    <div className={s.box}>
      <MenuListItem
        hover={isHover}
        active={active}
        deactive={deactive}
        diffLevel="Low"
      />
      <MenuListItem
        hover={isHover}
        active={active}
        deactive={deactive}
        diffLevel="Medium"
      />
      <MenuListItem
        hover={isHover}
        active={active}
        deactive={deactive}
        diffLevel="Hard"
      />
      <MenuListItem
        hover={isHover}
        active={active}
        deactive={deactive}
        diffLevel="Extemelly"
      />
    </div>
  );
}
