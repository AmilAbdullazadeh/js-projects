import { App } from "App";
import { Note } from "pages/Note/Note";
import { NoteBrowse } from "pages/NoteBrowse/NoteBrowse";
import { NoteCreate } from "pages/NoteCreate/NoteCreate";
import { PageNotFound } from "pages/PageNotFound/PageNotFound";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
import "./index.css";
import { store } from "./store";
// import { App } from "App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route exact element={<App />} path='/' >
                  <Route element={<NoteBrowse />} path='/' />
                  <Route element={<NoteCreate />} path='/notes/new' />
                  <Route element={<Note />} path='/notes/:id' />
                  <Route element={<PageNotFound />} path='/*' />
              </Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
