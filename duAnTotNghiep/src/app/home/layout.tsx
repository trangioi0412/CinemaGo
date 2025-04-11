import Image from "next/image";
import styles from "../page.module.css";
import MovieList from "../Components/MovieList/MovieList";
import {
  getMoviesComingSoon,
  getMoviesShowing,
} from "../service/movie.service";
import OfferItem from "../Components/OfferItem/OfferItem";
import Banner from "../Components/Banner/Banner";
async function Layout() {
  const showing = await getMoviesShowing();
  const comingSoon = await getMoviesComingSoon();

  return (
    <div>
      <Banner />
      <div className={`${styles.contents} container`}>
        <MovieList data={showing} title="Phim đang chiếu" />
        <MovieList data={comingSoon} title="Phim sắp chiếu" />
        <div className={styles["offer-container"]}>
          <h1>KHUYẾN MÃI</h1>
          <div className={styles["offer_list"]}>
            <OfferItem />
            <OfferItem />
            <OfferItem />
            <OfferItem />
            <OfferItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
