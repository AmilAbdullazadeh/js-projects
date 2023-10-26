import { TextCard } from "components/TextEditor/TextEditor";
import s from "./style.module.css";

export function NoteList({ noteList }) {

  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
        <div className={s.card_container}>
            {noteList?.map((note) => (
                <TextCard
                    key={note.id}
                    title={note.title}
                    content={note.content}
                    id={note.id}
                />
            ))
            }
        </div>
    </div>
  );
}
