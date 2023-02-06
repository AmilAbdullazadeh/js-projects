import s from "./style.module.css";

export function TVShowDetail({ tvShow }) {

  return (
    <div className={s.container}>
      <span className={s.title}>{tvShow.name}</span>
      <div>{(tvShow.vote_average / 2).toFixed()} / 5</div>
      <div className="row">
        <div className={`col-sm-12 col-md-8 ${s.description}`}>
          {tvShow.overview}
        </div>
      </div>
    </div>
  );
}
