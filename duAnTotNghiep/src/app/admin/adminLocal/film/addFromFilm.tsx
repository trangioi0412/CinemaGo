import React from "react";
import style from "./addForm.module.css";
import { useDispatch } from "react-redux";
import { addData } from "@/app/redux/slices/filmSlice";
import { addFilm } from "@/app/service/movie.service";

const AddFromFilm = ({ onClick }: { onClick: () => void }) => {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [director, setDeictor] = React.useState("");
  const [nation, setNation] = React.useState("");
  const [age, setAge] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [time, setTime] = React.useState("");
  const [detail, setDetail] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [image, setImage] = React.useState("");
  const [banner, setBanner] = React.useState("");

  const dispatch = useDispatch();
  const formData = { name, date, director, nation, age, category, language, time, detail, status, image, banner };

  const handleAdd = async(e: any) => {
    e.preventDefault();
    const added = await addFilm(formData)
    dispatch(addData(added));
  };
  return (
    <div className={style.form}>
      <div className={style.background} onClick={onClick}></div>
      <div className={style.popupContent}>
        <h2>Thêm phim mới</h2>
        <form className={style.popupForm} onSubmit={handleAdd}>

          <input type="text" placeholder="Tên phim" value={name} onChange={(e) => setName(e.target.value)} required/>
          <input type="date" placeholder="Ngày chiếu" value={date} onChange={(e)=> setDate(e.target.value)} required />
          <input type="text" placeholder="Đạo diễn" value={director} onChange={(e)=> setDeictor(e.target.value)} required  />
          <input type="text" placeholder="Quốc gia" value={nation} onChange={(e)=> setNation(e.target.value)} required  />
          <input type="number" placeholder="Độ tuổi" value={age} onChange={(e)=> setAge(e.target.value)} required  />
          <input type="text" placeholder="Thể loại" value={category} onChange={(e)=> setCategory(e.target.value)} required  />
          <input type="text" placeholder="Ngôn ngữ" value={language} onChange={(e)=> setLanguage(e.target.value)} required  />
          <input type="number" placeholder="Thời lượng (phút)" value={time} onChange={(e)=> setTime(e.target.value)} required  />
          <textarea placeholder="Tóm tắt nội dung" rows={4} value={detail} onChange={(e)=> setDetail(e.target.value)} required ></textarea>
          <input type="text" placeholder="Trạng thái (1: Sắp chiếu, 2: Đang chiếu, ...)" value={status} onChange={(e)=> setStatus(e.target.value)} required/>
          <input type="text" placeholder="Link ảnh đại diện (image)" value={image} onChange={(e)=> setImage(e.target.value)} required  />
          <input type="text" placeholder="Link banner" value={banner} onChange={(e)=> setBanner(e.target.value)} required  />
          <input type="text" placeholder="Link trailer (YouTube embed)" required/>
          <button type="submit">Lưu phim</button>
        </form>
      </div>
    </div>
  );
};

export default AddFromFilm;
