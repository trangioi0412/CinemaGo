"use client";
import { Suspense, useEffect, useState } from "react";
import style from "./movies.module.css";
import {
  getMoviesComingSoon,
  getMoviesShowing,
} from "../service/movie.service";

import MovieItem from "../Components/MovieList/MovieItem/MovieItem";
const tabs = ["đang chiếu", "sắp chiếu"];
function Movies() {
  const [type, setType] = useState("đang chiếu");

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const api =
        type === "đang chiếu"
          ? await getMoviesShowing()
          : await getMoviesComingSoon();
      setData(api);
    };
    getData();
  }, [type]);

  return (
    <div className={`container ${style.container}`}>
      <div className={style["options"]}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${type === tab && style["active"]}`}
            onClick={() => setType(tab)}
          >
            <h1>{tab}</h1>
          </button>
        ))}
      </div>

      <div className={style.movies}>
        {data.map((m: any) => {
          return <MovieItem key={m.id} movie={m} />;
        })}
      </div>
    </div>
  );
}

export default Movies;
