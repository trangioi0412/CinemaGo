import React from "react";
import style from "./addForm.module.css";
import { useDispatch } from "react-redux";
import { addData } from "@/app/redux/slices/filmSlice";
const AddFromFilm = ({ onClick }: { onClick: () => void }) => {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const dispatch = useDispatch();
  const formData = { name, date };

  const handleAdd = (e: any) => {
    e.preventDefault();
    dispatch(addData(formData));
  };
  return (
    <div className={style.form}>
      <div className={style.background} onClick={onClick}></div>
      <div className={style.popupContent}>
        <h2>Thêm phim mới</h2>
        <form className={style.popupForm} onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Tên phim"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input type="date" placeholder="Ngày chiếu" required />
          <input type="text" placeholder="Đạo diễn" required />
          <input type="text" placeholder="Quốc gia" required />
          <input type="number" placeholder="Độ tuổi" required />
          <input type="text" placeholder="Thể loại" required />
          <input type="text" placeholder="Ngôn ngữ" required />
          <input type="number" placeholder="Thời lượng (phút)" required />
          <textarea placeholder="Tóm tắt nội dung" rows={4} required></textarea>
          <input
            type="text"
            placeholder="Trạng thái (1: Sắp chiếu, 2: Đang chiếu, ...)"
            required
          />
          <input type="text" placeholder="Link ảnh đại diện (image)" required />
          <input type="text" placeholder="Link banner" required />
          <input
            type="text"
            placeholder="Link trailer (YouTube embed)"
            required
          />
          <button type="submit">Lưu phim</button>
        </form>
      </div>
    </div>
  );
};

export default AddFromFilm;
