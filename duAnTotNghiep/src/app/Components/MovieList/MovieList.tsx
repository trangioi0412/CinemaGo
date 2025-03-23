import styles from "./movieList.module.css";
import { Movies } from "@/app/movie.interface";
import MovieItem from "./MovieItem/MovieItem";
import { getAllMovies } from "@/app/service/movie.service";

async function Section({ title, data }: { title?: string; data: Movies[] }) {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h1>
          <span></span> {title}
        </h1>
      </div>
      <div className={styles.movies}>
        {data.map((m: any) => {
          return <MovieItem key={m.id} movie={m} />;
        })}
      </div>
    </section>
  );
}

export default Section;
