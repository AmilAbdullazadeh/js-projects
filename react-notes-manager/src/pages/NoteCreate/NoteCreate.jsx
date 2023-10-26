import { NoteAPI } from "api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {createNote} from "store/notes/notes-slice";

export function NoteCreate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (data) => {
        dispatch(createNote({
            ...data,
            id: Date.now(),
            created_at: new Date().toLocaleDateString(),
            updated_at: '',
        }))
        navigate('/');
    }


  return (
    <>
      <NoteForm
        title="New note"
        onSubmit={submit}
      />
    </>
  );
}

// title
// content