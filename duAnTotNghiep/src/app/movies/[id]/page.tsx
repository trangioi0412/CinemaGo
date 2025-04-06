"use client";
import { getMovie } from "@/app/service/movie.service";
import styles from "./filmDetail.module.css";
import { useEffect, useState, use } from "react";
import Description from "./Description/Description";
import FilmName from "./FilmName/FilmName";
import ChooseSeat from "./ChooseSeat/ChooseSeat";
import ScheduleShowing from "./ScheduleShowing/ScheduleShowing";
function Detail({ params }: { params: Promise<{ id: string | number }> }) {
  const [data, setData] = useState([]);
  const { id } = use(params);
  useEffect(() => {
    const getData = async () => {
      const api = await getMovie(id);
      setData(api);
    };
    getData();
  }, [id]);

  if (!data || data.length === 0) return <p>Loading...</p>;

  return (
    <div className={``}>
      <FilmName data={data} />
      <div className={`container ${styles["sections"]}`}>
        <Description data={data} />
        <ScheduleShowing />
        <ChooseSeat data={data} />
      </div>
    </div>
  );
}
// Tên: {data.name}
export default Detail;
