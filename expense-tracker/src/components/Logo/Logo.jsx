import s from "./style.module.css";

export function Logo({ image, title, subtitle }) {
  return (
    <>
      <div className={s.container}>
        {image && <img className={s.img} src={image} alt="logo" />}
        <h1 className={s.title}>{title}</h1>
      </div>
      <h2 className={s.subtitle}>{subtitle}</h2>
    </>
  );
}
