import Image from "next/image";
import styles from "../page.module.css";
import MovieList from "../Components/MovieList/MovieList";
import {
  getMoviesComingSoon,
  getMoviesShowing,
} from "../service/movie.service";
async function Layout() {
  const showing = await getMoviesShowing();
  const comingSoon = await getMoviesComingSoon();

  return (
    <div>
      <div className={`${styles.contents} container`}>
        <MovieList data={showing} title="Phim đang chiếu" />
        <MovieList data={comingSoon} title="Phim sắp chiếu" />
      </div>
    </div>
  );
}

export default Layout;
