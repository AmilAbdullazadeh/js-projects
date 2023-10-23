import { NoteAPI } from "api/api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "store/notes/notes-slice";

export function NoteCreate(props) {
  return (
    <>
        Test
      <NoteForm
        title="New note"
        // onSubmit={submit}
      />
    </>
  );
}
