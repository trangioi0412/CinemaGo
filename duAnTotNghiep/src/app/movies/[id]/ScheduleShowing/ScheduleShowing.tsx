"use client";
import { useEffect, useState } from "react";
import ChooseCinema from "@/app/Components/ChooseCinema/ChooseCinema";
import styles from "../filmDetail.module.css";
import ChoosePlace from "@/app/Components/ChooseCinema/ChoosePlace";
import PlaceItem from "@/app/Components/ChooseCinema/PlaceItem/PlaceItem";
function ScheduleShowing() {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.section}>
      <h1>Lịch Chiếu</h1>
      <div className={styles["dates"]}>
        <button className={`${styles["dateShowing"]} ${styles.active}`}>
          <span>4</span>
          <p>Hôm nay</p>
        </button>
        <button className={`${styles["dateShowing"]} `}>
          <span>4</span>
          <p>Hôm nay</p>
        </button>{" "}
        <button className={`${styles["dateShowing"]}`}>
          <span>4</span>
          <p>Hôm nay</p>
        </button>
      </div>
      <div className={styles.cinema}>
        <ChooseCinema />
        <ChoosePlace>
          <PlaceItem active={false}>
            <div className={styles["item-detail"]}>
              <p>Chưa có suất</p>
            </div>
          </PlaceItem>
          <PlaceItem active={false}>
            <div className={styles["item-detail"]}>
              <p>Chưa có suất</p>
            </div>
          </PlaceItem>{" "}
          <PlaceItem active={false}>
            <div className={styles["item-detail"]}>
              <p>Chưa có suất</p>
            </div>
          </PlaceItem>
        </ChoosePlace>
      </div>
    </div>
  );
}

export default ScheduleShowing;
