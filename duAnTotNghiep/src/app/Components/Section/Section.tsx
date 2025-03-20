import styles from "./section.module.css";
import { Movies } from "@/app/movie.interface";
import Movie from "./Movie/Movie";
import { getAllMovies } from "@/app/service/movie.service";

async function Section({
  title,
  filter,
}: {
  title: string;
  filter?: (movie: any) => boolean;
}) {
  const data = await getAllMovies()
  // console.log(data);
  const filteredMovies = filter ? data.filter(filter) : data;
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h1>
          <span></span> {title}
        </h1>
      </div>
      <div className={styles.movies}>
        {filteredMovies.map((m: any) => {
          return <Movie key={m.id} movie={m} />;
        })}
      </div>
    </section>
  );
}

export default Section;
