"use client";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import Input from "../Input/Input";
import style from "../userForm.module.css";
import { FaPhone, FaRegEye, FaUser } from "react-icons/fa6";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
function SignUpForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRepass] = useState("");
  const [showPass, setShowPass] = useState(false);
  return (
    <form action="">
      <div className={style.formInput}>
        <Input
          id="email"
          label="Email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
          <span>
            <MdOutlineMail />
          </span>
        </Input>
        <Input
          id="name"
          required={true}
          label="Họ và tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          <span>
            {" "}
            <FaUser />
          </span>
        </Input>
        <div style={{ display: "flex", gap: "20px" }}>
          <Input
            type="date"
            id="birthday"
            required={true}
            label="Ngày sinh"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></Input>
          <Input
            type="text"
            id="phone"
            required={true}
            label="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          >
            <span>
              <FaPhone />
            </span>
          </Input>
        </div>
        <Input
          id="password"
          type={showPass ? "text" : "password"}
          required={true}
          label="Mật khẩu"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        >
          <span onClick={() => setShowPass(!showPass)}>
            {showPass ? <IoIosEyeOff /> : <IoIosEye />}
          </span>
        </Input>
        <Input
          id="re-password"
          type={showPass ? "text" : "password"}
          required={true}
          label="Nhập lại mật khẩu"
          value={repass}
          onChange={(e) => setRepass(e.target.value)}
        >
          <span onClick={() => setShowPass(!showPass)}>
            {showPass ? <IoIosEyeOff /> : <IoIosEye />}
          </span>
        </Input>
      </div>
      <div className={style.loginAction}>
        <div className={style.savePassword}>
          <input type="checkbox" id="article" />
          <label htmlFor="article">Đồng ý với các điều khoản</label>
        </div>
      </div>
      <button className={`btn ${style.buttonLogin}`}>
        <p>Đăng Ký</p>
      </button>
    </form>
  );
}

export default SignUpForm;
