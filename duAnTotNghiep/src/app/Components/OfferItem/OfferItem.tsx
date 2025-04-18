import style from "./offerItem.module.css";
function OfferItem() {
  return (
    <div className={style.item}>
      <div className={style.img}>
        <img
          src="https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=cover,gravity=auto,metadata=none,quality=85,width=1000,height=564/production/213/dc0f2df919e36e51c96e15e92f60f477.jpg"
          alt=""
        />
      </div>
      <div className={style["offer-info"]}>
        <div className={style.title}>Offer 100%</div>
        <div className={style.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quam,
          nulla alias error excepturi dignissimos ad est voluptates sapiente quo
          temporibus perspiciatis enim, incidunt velit ut sunt? Nam, fugiat
          fuga?
        </div>
      </div>
      <button className={`btn ${style["btn-detail"]}`}>Xem chi tiết</button>
    </div>
  );
}

export default OfferItem;
