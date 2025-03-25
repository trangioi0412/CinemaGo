import styles from "./movieItem.module.css";
import { Movies } from "@/app/movie.interface";
import { BsInfoLg } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
function MovieItem({ movie }: { movie: Movies }) {
  return (
    <a href={`/movies/${movie.id}`} className={styles.movie}>
      <div className={styles["movie-option"]}>
        <span className={styles.play}>
          <FaPlay />
        </span>
        <span className={styles.info}>
          <BsInfoLg />
        </span>
      </div>
      <div className={styles["movie-img"]}>
        <img src={movie.image} alt="" />
      </div>
      <div className={styles["movie-info"]}>
        <div className={styles["movie-name"]} title={movie.name}>
          {movie.name}
        </div>

        <button className={`btn ${styles["btn-order"]}`}>Đặt vé ngay</button>
      </div>
    </a>
  );
}

export default MovieItem;
