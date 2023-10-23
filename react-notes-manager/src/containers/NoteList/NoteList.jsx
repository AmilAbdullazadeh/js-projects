import { TextCard } from "components/TextEditor/TextEditor";
import s from "./style.module.css";

export function NoteList({ noteList }) {

  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
        <div className={s.card_container}>
            Note List
          {/*<TextCard*/}
          {/*  title={note.title}*/}
          {/*  subtitle={note.created_at}*/}
          {/*  content={note.content}*/}
          {/*  onClickTrash={}*/}
          {/*  onClick={}*/}
          {/*/>*/}
        </div>
    </div>
  );
}
