"use client";
import styles from "../filmDetail.module.css";
import { Movies } from "@/app/movie.interface";
function ChooseSeat({ data }: { data: Movies[] }) {
  return (
    <div className={styles.section}>
      <h1>Chọn Ghế</h1>
    </div>
  );
}

export default ChooseSeat;
