import style from "../schedule.module.css";
function MovieSchedule() {
  return (
    <div className={style["movie"]}>
      <div className={style["img"]}></div>
      <div className={style["contents"]}>
        <div className={style["age"]}>P</div>
        <div className={style["name-movie"]}>
          <div className={style["name"]}>Nàng bạch tuyết</div>
          <div className={style["cate"]}>Gia đình, phiêu lưu, tâm lí</div>
        </div>
        <div className={style["types"]}>
          <div className={style["type"]}>
            <div className={style["title"]}>2D-Lồng tiếng</div>
            <div className={style["timeShow"]}>
              <div className={style["time"]}>
                <span>09:40</span> - <p>11:43</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieSchedule;
