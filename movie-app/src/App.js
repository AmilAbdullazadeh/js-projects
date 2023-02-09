import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-shows";
import logoImg from "./assets/images/logo.png";
import { Logo } from "./components/Logo/Logo";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { BACKDROP_BASE_URL } from "./config";
import s from "./style.module.css";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [tvShowRecommendations, setTvShowRecommendations] = useState([]);

  async function fetchData() {
    try {
      const data = await TVShowAPI.fetchPopulars();
      if (data.length !== 0) {
        setCurrentTVShow(data);
      }
    } catch (error) {
      alert(error?.status_message);
    }
  }

  async function fetchRecommendations(tvShowId) {
    try {
      const data = await TVShowAPI.fetchRecommendations(tvShowId);
      if (data.length !== 0) {
        setTvShowRecommendations(data.slice(0, 10));
      }
    } catch (error) {
      alert(error?.status_message);
    }
  }

  async function fetchByTitle(title) {
    try {
      const data = await TVShowAPI.fetchByTitle(title);
      if (data.length !== 0) {
        setCurrentTVShow(data);
      }
    } catch (error) {
      alert(error?.status_message);
    }
  }

  function updateCurrentTVShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

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
            <Logo img={logoImg} title="Watchman" subtitle="Watchman movies" />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_shows}>
        {currentTVShow && (
          <TVShowList
            tvShowList={tvShowRecommendations}
            onClickItem={updateCurrentTVShow}
          />
        )}
      </div>
    </div>
  );
}
