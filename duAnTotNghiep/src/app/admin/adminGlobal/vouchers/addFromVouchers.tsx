import React from "react";
import style from "./addFromVouchers.module.css";
import { useDispatch } from "react-redux";
import { addData } from "@/app/redux/slices/voucherSlice";
const AddFromVouchers = ({ onClick }: { onClick: () => void }) => {
  const [code, setCode] = React.useState("");
  const [name, setName] = React.useState("");
  const [discount, setDiscount] = React.useState("");
  const [startDay, setStartDay] = React.useState("");
  const [endDay, setEndDay] = React.useState("");
  const [soLuong, setSoLuong] = React.useState("");
  const [daSuDung, setSuDung] = React.useState("0");
  const [trangThai, setStatus] = React.useState("");
  const dispatch = useDispatch();
  const formData = { code,name,discount,startDay,endDay,soLuong,daSuDung,trangThai };

  const handleAdd = (e: any) => {
    e.preventDefault();
    dispatch(addData(formData));
  };
  return (
    <div className={style.form}>
      <div className={style.background} onClick={onClick}></div>
      <div className={style.popupContent}>
        <h2>Thêm Voucher Mới</h2>
        <form className={style.popupForm} onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Mã Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tên Mã" required />
          <input type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder="Phần % Giảm" required />
          Ngày Bắt Đầu:
          <input type="date" value={startDay} onChange={(e) => setStartDay(e.target.value)} placeholder="Ngày Bắt Đầu" required />
          Ngày Kết Thúc:
          <input type="date" value={endDay} onChange={(e) => setEndDay(e.target.value)} placeholder="Ngày Kết Thúc" required />
          <input type="number" value={soLuong} onChange={(e) => setSoLuong(e.target.value)} placeholder="Số Lượng" required />
          <input type="hidden" value={daSuDung}  placeholder="Đã Dùng" />
          <input type="text" value={trangThai} onChange={(e) => setStatus(e.target.value)} placeholder="Trạng Thái" required />
          <button type="submit">Thêm New Voucher</button>
        </form>
      </div>
    </div>
  );
};

export default AddFromVouchers;
