import React from "react";
import style from "./cinema.module.css";
import styles from "../Components/Section/section.module.css";
import {
  FaChevronRight,
  FaLocationCrosshairs,
  FaLocationDot,
} from "react-icons/fa6";
import { FaChevronCircleLeft, FaChevronDown } from "react-icons/fa";
import ChooseCinema from "../Components/ChooseCinema/ChooseCinema";
export default async function Cinema({ title }: { title: string }) {
  return (
    <div className={`wrapper container ${style.schedule}`}>
      <h1>Tìm rạp chiếu phim</h1>
      <div className={style.wrapper}>
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
        </div>
      </div>
    </div>
  );
}
