import styles from "../filmDetail.module.css";
function DetailFilm({ title, data }: { title: string; data: string }) {
  return (
    <div className={styles["detail"]}>
      <span>{title}</span>
      <p>{data}</p>
    </div>
  );
}

export default DetailFilm;
