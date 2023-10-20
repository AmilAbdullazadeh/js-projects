import { ListItem } from "components/ListItem/ListItem";
import {useSelector} from "react-redux";

export function List() {

  const items = useSelector(state => state.expense.exponseList);

  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
            {items.map((item) => (
                <ListItem key={item.id} item={item} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
