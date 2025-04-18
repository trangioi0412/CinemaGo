import React from "react";
import style from "./cinema.module.css";
import { FaChevronRight } from "react-icons/fa6";
import ChooseCinema from "../Components/ChooseCinema/ChooseCinema";
import ChoosePlace from "../Components/ChooseCinema/ChoosePlace";
import PlaceItem from "../Components/ChooseCinema/PlaceItem/PlaceItem";
export default async function Cinema() {
  return (
    <div className={`wrapper container ${style.schedule}`}>
      <h1>Tìm rạp chiếu phim</h1>
      <div className={style.wrapper}>
        <ChooseCinema />
        <ChoosePlace>
          <PlaceItem active={false}>abc</PlaceItem>
        </ChoosePlace>
      </div>
    </div>
  );
}
