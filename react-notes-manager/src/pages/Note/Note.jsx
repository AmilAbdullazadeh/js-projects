import { NoteAPI } from "api/api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNote, updateNote } from "store/notes/notes-slice";

export function Note(props) {
  const {noteId} = useParams()

  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === noteId)
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);

  const submit = async (formValues) => {
    const updatedNote = await NoteAPI.updateById(note.id, formValues)
    dispatch(updateNote(updatedNote));
    setIsEditable(false)
  };

  async function deleteNote_() {
    if (window.confirm("Are you sure ?")) {
      NoteAPI.deleteById(note.id)
      dispatch(deleteNote(note))
      navigate("/")
    }
  }
  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Update note" : note.title}
          note={note}
          onClickDelete={deleteNote_}
          onClickEdit={() => setIsEditable(!isEditable)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
