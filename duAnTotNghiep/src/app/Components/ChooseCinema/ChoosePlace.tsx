import PlaceItem from "./PlaceItem/PlaceItem";
import style from "./style.module.css";
function ChoosePlace({ children }: { children: React.ReactNode }) {
  return (
    <div className={style["schedule-container"]}>
      <div className={style["list-cinema"]}>
        <div className={style["search"]}>
          <input type="text" name="" id="" placeholder="Tìm theo tên rạp..." />
        </div>
        <div className={style["items"]}>{children}</div>
      </div>
    </div>
  );
}

export default ChoosePlace;
