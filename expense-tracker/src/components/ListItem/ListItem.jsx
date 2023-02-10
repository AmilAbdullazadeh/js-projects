import s from "./style.module.css";

export function ListItem({ item }) {
  return (
    <tr>
      <th>Fake name</th>
      <td className={s.price}>Fake price $</td>
    </tr>
  );
}
