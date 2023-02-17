import { TextCard } from "components/TextEditor/TextEditor";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

export function NoteList() {
  const navigate = useNavigate()
  const noteList = useSelector((state) => state.noteSlice.noteList)
  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
      {noteList.map((note) => (
        <div key={note.id} className={s.card_container}>
          <TextCard
            title={note.title}
            content={note.content}
            subtitle={note.created_at}
            onClick={() => navigate(`note/${note.id}`)}
            onClickTrash={() => alert("hello")}
          />
        </div>
      ))}
    </div>
  );
}
