import React from "react";
import style from "./addFromUser.module.css";
import { useDispatch } from "react-redux";
import { addData } from "@/app/redux/slices/userSlice";
const AddFromUser = ({ onClick }: { onClick: () => void }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [sdt, setSdt] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");
  const [type_admin, setTypeAdmin] = React.useState("");
  const [year, setYear] = React.useState("");
  const [status, setStatus] = React.useState("");
  const dispatch = useDispatch();
  const formData = { name,email,sdt,password,role,type_admin,year,status };

  const handleAdd = (e: any) => {
    e.preventDefault();
    dispatch(addData(formData));
  };
  return (
    <div className={style.form}>
      <div className={style.background} onClick={onClick}></div>
      <div className={style.popupContent}>
        <h2>Thêm Người Dùng Mới</h2>
        <form className={style.popupForm} onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Tên Người Dùng"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="text" value={sdt} onChange={(e) => setSdt(e.target.value)} placeholder="Số Điện Thoại" required />
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Năm Sinh" required />
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Quyền" required />
          <input type="text" value={type_admin} onChange={(e) => setTypeAdmin(e.target.value)} placeholder="Phân Quyền" required />
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Trạng Thái" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật Khẩu" required />
          <button type="submit">Thêm New User</button>
        </form>
      </div>
    </div>
  );
};

export default AddFromUser;
