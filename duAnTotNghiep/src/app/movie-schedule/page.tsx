import React from "react";
import style from "./schedule.module.css";
import styles from "../Components/Section/section.module.css";
import {
  FaChevronRight,
  FaLocationCrosshairs,
  FaLocationDot,
} from "react-icons/fa6";
import { FaChevronCircleLeft, FaChevronDown } from "react-icons/fa";
import MovieSchedule from "./MovieSchedule/MovieSchedule";
import ChooseCinema from "../Components/ChooseCinema/ChooseCinema";
export default async function Schedule({ title }: { title: string }) {
  return (
    <div className={`wrapper container ${style.schedule}`}>
      <h1>Lịch chiếu phim</h1>
      <div>
        <ChooseCinema />
        <div className={style["schedule-container"]}>
          <div className={style["list-cinema"]}>
            <div className={style["search"]}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Tìm theo tên rạp..."
              />
            </div>
            <div className={style["items"]}>
              <div className={style["item"]}>
                <div className={style.content}>
                  <div className={style["icon-item"]}></div>
                  <div className={style["name-item"]}>CGV Phúc Lâm Plaza</div>
                </div>
                <span>
                  <FaChevronRight />
                </span>
              </div>
            </div>
          </div>
          <div className={style["screening"]}>
            <div className={style["cinema-info"]}>
              <div className={style["cinema"]}>
                <div className={style["icon"]}></div>
                <div className={style["info"]}>
                  <div className={style["name"]}>CGV Phúc Lâm Plaza</div>
                  <div className={style["address"]}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Assumenda, odit impedit! Rerum, fugit. Minima qui veniam
                      quidem porro ad, tenetur soluta eveniet iure ut quos saepe
                      veritatis quaerat. Corporis, numquam.
                    </p>
                  </div>
                </div>
              </div>
              <div className={style["times"]}>
                <div className={style["time-item"]}>
                  <div className={style["date"]}>21</div>
                  <div className={style["detail"]}>Hôm nay</div>
                </div>
              </div>
            </div>
            <div className={style["movies"]}>
              <MovieSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
