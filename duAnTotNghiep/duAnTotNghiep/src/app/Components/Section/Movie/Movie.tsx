import styles from "../section.module.css";
import { Movies } from "@/app/movie.interface";
function Movie({ movie }: { movie: Movies }) {
  return (
    <div className={styles.movie}>
      <div className={styles["movie-img"]}>
        <img src={movie.image} alt="" />
      </div>
      <div className={styles["movie-name"]}>{movie.name}</div>
      <div className={styles["movie-option"]}>
        <a href="">Xem Trailer</a>
        <button className={`btn ${styles["btn-order"]}`}>ĐẶT VÉ</button>
      </div>
    </div>
  );
}

export default Movie;
