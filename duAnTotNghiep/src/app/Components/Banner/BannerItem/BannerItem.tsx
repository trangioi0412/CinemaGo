import { RxLapTimer } from "react-icons/rx";
import styles from "../../../page.module.css";
import { FaPlay } from "react-icons/fa";
import { Movies } from "@/app/movie.interface";
function BannerItem({ movie }: { movie: Movies }) {
  return (
    <div className={styles.banner_item}>
      <div className={styles.banner_img}>
        <img src={`/img/banner/${movie.banner}`} alt="" />
      </div>
      <div className={styles["banner_contents"]}>
        <h1>{movie.name}</h1>
        <div className={styles["info"]}>
          <div className={styles.age}>{movie.age}+</div>
          <div className={styles.duration}>
            <span>
              <RxLapTimer />
            </span>
            {movie.time}min
          </div>
        </div>
        <div className={styles["description"]} title={movie.text_summary}>
          {movie.text_summary}
        </div>
        <div className={styles["btns"]}>
          <button className="btn">Đặt vé ngay</button>
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

export default BannerItem;
