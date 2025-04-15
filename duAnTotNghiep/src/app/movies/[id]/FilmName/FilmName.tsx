import { FaPlay } from "react-icons/fa6";
import styles from "../filmDetail.module.css";
import { Movies } from "@/app/movie.interface";
function FilmName({ data }: { data: Movies }) {
  return (
    <div className={styles["film_name"]}>
      <div className={styles["imgBanner"]}>
        <img src={`/img/banner/${data.banner}`} alt="" />
      </div>
      <div className={`container ${styles.content}`}>
        <div className={styles["img_film"]}>
          <img src={`/img/film/${data.image}`} alt="" />
        </div>
        <div className={styles["infoFilm"]}>
          <div className={styles["nameFilm"]}>
            <h1>{data.name}</h1>
            <div className={styles.age}>{data.age}+</div>
          </div>
          <div className={styles["releaseDate"]}>
            <span>Ngày chiếu</span>
            {data.date}
          </div>
          <div className={styles["duration"]}>
            <span>Thời lượng</span>
            {data.time}min
          </div>
          <button className={styles.btn_trailer}>
            <span>
              <FaPlay />
            </span>
            <p>Trailer</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilmName;
