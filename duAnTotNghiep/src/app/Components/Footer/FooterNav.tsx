import style from "./footer.module.css";
function FooterNav({ title, link }: { title: any; link: any }) {
  return (
    <div className={style["nav_container"]}>
      <h3 className={style["nav_heading"]}>{title}</h3>
      <ul className={style["nav_link"]}>
        {link.map((l: any) => (
          <li key={l.name}>
            <a href={l.url}>{l.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterNav;
