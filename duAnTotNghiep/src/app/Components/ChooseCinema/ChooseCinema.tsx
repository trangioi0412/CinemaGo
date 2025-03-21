import style from "./style.module.css";
import {
  FaChevronRight,
  FaLocationCrosshairs,
  FaLocationDot,
} from "react-icons/fa6";
import { FaChevronCircleLeft, FaChevronDown } from "react-icons/fa";
function ChooseCinema() {
  return (
    <div className={style["chooseCinema-container"]}>
      <div className={style["locations"]}>
        <div className={style["options"]}>
          <span style={{ fontWeight: "600", fontSize: "18px" }}>Vị trí</span>
          <div className={style["location"]}>
            <div className={style["location-name"]}>
              <span>
                <FaLocationDot />
              </span>
              <span>Hồ Chí Minh</span>
            </div>
            <span>
              <FaChevronDown />
            </span>
          </div>
          <div className={style["your-location"]}>
            <span>
              <FaLocationCrosshairs />
            </span>
            <span>Gần bạn</span>
          </div>
        </div>
        <div className={style["cinemas"]}>
          <div className={style["cinema"]}>
            <div className={style["icon-cinema"]}></div>
            <div className={style["name"]}>Tất cả</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseCinema;
