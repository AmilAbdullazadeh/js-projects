import { SearchBar } from "components/SearchBar/SearchBar";
import { NoteList } from "containers/NoteList/NoteList";
import {useState} from "react";

export function NoteBrowse(props) {
  const [searchTerm, setSearchTerm] = useState("");

    return(
      <>
        <div className="row justify-content-center mb-5">
          <div className="col-sm-12 col-md-4">
            <SearchBar
              onTextChange={setSearchTerm}
              placeholder="Search your notes..."
            />
          </div>
        </div>
        {/*{noteList?.length === 0 && (*/}
          <div className="d-flex justify-content-center">
            <span>
              You don't have any note, do you want to
              {/*<Link to="/note/new">create one</Link>*/}
            </span>
          </div>
        {/*)}*/}
      </>
    );
}
