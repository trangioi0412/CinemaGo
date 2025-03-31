import { getMovie } from "@/app/service/movie.service";
import styles from "./filmDetail.module.css";
async function Detail({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const { id } = await params;
  const data = await getMovie(id);
  console.log(data);

  return (
    <div className={`${styles.main} container`}>
      <div className={styles.main_detail}>
        <p className={styles.title}>Nội dung phim</p>
        <hr />
        <div className={styles.info_film}>
          <div className={styles.contents}>
            <div className={styles.info_film_left}>
              <img src={`/img/film/${data[0].image}`} alt="" />
            </div>
            <div className={styles.info_film_right}>
              <div className={`${styles.info} ${styles.name}`}>
                {data[0].name}
              </div>
              <div className={`${styles.info} ${styles.director}`}>
                <b>Đạo diễn: </b> {data[0].director}
              </div>
              <div className={`${styles.info} ${styles.category}`}>
                <b>Thể loại:</b> {data[0].category}
              </div>
              <div className={`${styles.info} ${styles.date}`}>
                <b>Khởi chiếu:</b> {data[0].date}
              </div>
              <div className={`${styles.info} ${styles.time}`}>
                <b>Thời gian:</b> {data[0].time} phút
              </div>
              <div className={`${styles.info} ${styles.language}`}>
                <b>Ngôn ngữ: </b>
                {data[0].language}
              </div>
              <div className={`${styles.info} ${styles.name}`}>
                <b>Độ tuổi: Người từ đủ {data[0].age} tuổi </b>
              </div>
              <div className={`${styles.info} ${styles.text_summary}`}>
                {data[0].text_summary}
              </div>
              <button className="btn">Trailer</button>
            </div>
          </div>
          <div className={styles.video}>
            <iframe
              width="560"
              height="315"
              src={data.trailer}
              frameBorder={0}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
// Tên: {data.name}
export default Detail;
