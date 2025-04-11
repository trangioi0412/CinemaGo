"use client";
import styles from "../filmDetail.module.css";
import { Movies } from "@/app/movie.interface";
import Seat from "./Seats";
import Seats from "./Seats";
function ChooseSeat({ data }: { data: Movies[] }) {
  return (
    <div className={styles.section}>
      <h1>Chọn Ghế</h1>
      <Seats />
    </div>
  );
}

export default ChooseSeat;
