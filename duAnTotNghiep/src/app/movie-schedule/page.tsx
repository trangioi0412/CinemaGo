import React from "react";
import style from "./schedule.module.css";
import styles from "../Components/Section/section.module.css";
import { Movies } from "@/app/movie.interface";
import Movie from "../Components/Section/Movie/Movie";
export default async function Schedule({ title }: { title: string }) {
  const res = await fetch("http://localhost:5000/movies");
  const data = await res.json();

  return (
    <div className={`container ${style.schedule}`}>
      <h1>Phim đang chiếu</h1>
      <div className={style["schedule-container"]}>
        <div className={styles.movies}>
          {data.map((m: any) => {
            if (m.status === 1) return <Movie key={m.id} movie={m} />;
          })}
        </div>
      </div>
    </div>
  );
}
