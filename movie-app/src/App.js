import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-shows";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
// import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import logoImg from "./assets/images/logo.png";
import { Logo } from "./components/Logo/Logo";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import { BACKDROP_BASE_URL } from "./config";
import s from "./style.module.css";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [tvShowRecommendations, setTvShowRecommendations] = useState([]);

  async function fetchData() {
    const data = await TVShowAPI.fetchPopulars();
    if (data.length !== 0) {
      setCurrentTVShow(data);
    }
  }

  async function fetchRecommendations(tvShowId) {
    const data = await TVShowAPI.fetchRecommendations(tvShowId);
    if (data.length !== 0) {
      setTvShowRecommendations(data.slice(0, 10));
    }
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
            <Logo img={logoImg} title="TVShow Advisor" subtitle="TV Shows" />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_shows}>
        {tvShowRecommendations && (
          <>
            {tvShowRecommendations.map((recommendation) => (
              <TVShowListItem
                key={recommendation.id}
                tvShow={recommendation}
                onClick={() => console.log(recommendation.id)}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
