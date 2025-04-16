import React from "react";
import style from "./addForm.module.css";
import { useDispatch } from "react-redux";
import { addData } from "@/app/redux/slices/filmSlice";
import { CineInterface } from "@/app/cine.interface";
import { addCine } from "@/app/service/cinema.service";

const AddFromCine = ({ onClick }: { onClick: () => void }) => {
  const [name, setName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [detail, setDetail] = React.useState("");

  const dispatch = useDispatch();
  const formData = {id_brand:1, name, location: {
    city:parseInt(city),
    detail:detail
  }  };
  console.log(formData);
  
  const handleAdd =async (e: any) => {
    e.preventDefault();
    const added = await addCine(formData)
    dispatch(addData(added));
  };
  return (
    <div className={style.form}>
      <div className={style.background} onClick={onClick}></div>
      <div className={style.popupContent}>
        <h2>Thêm rạp mới</h2>
        <form className={style.popupForm} onSubmit={handleAdd}>

          <input type="text" placeholder="Tên rạp" value={name} onChange={(e) => setName(e.target.value)} required/>
          <input type="text" placeholder="Khu vực (1: Thành phố HCM, 2: Hà Nội,...)" value={city} onChange={(e)=> setCity(e.target.value)} required />
          <input type="text" placeholder="Địa chỉ " value={detail} onChange={(e)=> setDetail(e.target.value)} required  />
          <button type="submit">Lưu rạp</button>
        </form>
      </div>
    </div>
  );
};

export default AddFromCine;
