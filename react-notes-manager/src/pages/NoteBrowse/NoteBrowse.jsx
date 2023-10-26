import { SearchBar } from "components/SearchBar/SearchBar";
import { NoteList } from "containers/NoteList/NoteList";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAll} from "../../store/notes/notes-slice";

export function NoteBrowse(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const notes = useSelector(state => state.note.notes);
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAll());
    }, []);

    const filterNotes = notes.filter((note) => {
      const title = note.title
          .trim()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase());

        const content = note.content
            .trim()
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase());

        return title || content;
    })

    const handleSearch = (value) => {
        setSearchTerm(value)
    }

    return(
      <>

        {notes?.length === 0 ? (
          <div className="d-flex justify-content-center">
            <span>
              You don't have any note, do you want to
              <Link to="/notes/new">create one</Link>
            </span>
          </div>
        ) : (
            <>
              <div className="row justify-content-center mb-5">
                <div className="col-sm-12 col-md-4">
                  <SearchBar
                      onTextChange={handleSearch}
                      placeholder="Search your notes..."
                  />
                </div>
              </div>
              <NoteList noteList={filterNotes} />
            </>
        )}
      </>
    );
}
