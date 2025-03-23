import Image from "next/image";
import styles from "../page.module.css";
import MovieList from "../Components/MovieList/MovieList";
function Layout() {
  return (
    <div>
      <div className={`${styles.contents} container`}>
        <MovieList
          filter={(movie) => movie.status === 2}
          title="Phim đang chiếu"
        />
        <MovieList
          filter={(movie) => movie.status === 1}
          title="Phim sắp chiếu"
        />
        <MovieList
          filter={(movie) => movie.nation.toLowerCase() === "việt nam"}
          title="Phim Việt"
        />
      </div>
    </div>
  );
}

export default Layout;
