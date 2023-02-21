// import { NoteAPI } from "api/api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { updateNote } from "store/notes/notes-slice";

export function Note(props) {
  const {noteId} = useParams()

  const note = useSelector((store) =>
    store.notesSlice.noteList.find((note) => note.id === noteId)
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);

  const submit = async (formValues) => {
    // NoteAPI.updateById(note.id, formValues
  };

  async function deleteNote_() {
  }
  return (
    <>
      {note && (
        <NoteForm
          // isEditable
          title={isEditable ? "Edit note" : note.title}
          note={note}
          // onClickDelete={}
          // onClickEdit={}
          onSubmit={submit}
        />
      )}
    </>
  );
}
