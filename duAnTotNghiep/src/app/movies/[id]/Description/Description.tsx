import { useState } from "react";
import styles from "../filmDetail.module.css";
import DetailFilm from "./DatailFilm";
import { Movies } from "@/app/movie.interface";
const tabs = ["tóm tắt", "chi tiết"];

function Description({ data }: { data: Movies }) {
  const [type, setType] = useState("tóm tắt");
  return (
    <div className={styles["description"]}>
      <div className={styles["options"]}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${type === tab && styles["active"]}`}
            onClick={() => setType(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="description_content">
        {type === "tóm tắt" ? (
          <p>{data.text_summary}</p>
        ) : (
          <div className={styles["details"]}>
            <DetailFilm title="Quốc Gia" data={data.nation} />
            <DetailFilm title="Ngôn Ngữ" data={data.language} />
            <DetailFilm title="Đạo Diễn" data={data.director} />
            <DetailFilm title="Diễn Viên" data={"Đang cập nhật"} />
            <DetailFilm title="Thể Loại" data={data.category} />
            <DetailFilm title="Ngày Chiếu" data={data.date} />
            <DetailFilm title="Thời Lượng" data={`${data.time}min`} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Description;
