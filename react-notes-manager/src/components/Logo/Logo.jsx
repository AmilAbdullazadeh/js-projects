import s from "./style.module.css";
export function Logo({ image, title, subtitle, onClick }) {
  return (
    <div onClick={onClick} >
      <div className={s.container}>
        <img className={s.img} src={image} alt="logo" />
        <div className={s.logo_txt}>{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </div>
  );
}
