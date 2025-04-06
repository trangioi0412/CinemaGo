import { FaChevronRight } from "react-icons/fa6";
import style from "../style.module.css";
function PlaceItem({
  active,
  onClick,
  children,
}: {
  active: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`${style["item"]} ${active ? style["active"] : ""}`}
    >
      <div className={style["item-cinema"]}>
        <div className={style.content}>
          <div className={style["icon-item"]}></div>
          <div className={style["name-item"]}>CGV Phúc Lâm Plaza</div>
        </div>
        <span className={style["arrow"]}>
          <FaChevronRight />
        </span>
      </div>
      {active && children}
    </div>
  );
}

export default PlaceItem;
