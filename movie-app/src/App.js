import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-shows";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { BACKDROP_BASE_URL } from "./config";
import s from "./style.module.css";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState()

  async function fetchData() {
    const data = await TVShowAPI.fetchPopulars();
    if (data.length !== 0) {
      setCurrentTVShow(data);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>Logo here</div>
            <div>subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        <TVShowDetail tvShow={currentTVShow} />
      </div>
      <div className={s.recommended_shows}>Recommended tv shows</div>
    </div>
  );
}
