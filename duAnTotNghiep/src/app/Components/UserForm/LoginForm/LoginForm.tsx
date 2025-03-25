"use client";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import Input from "../Input/Input";
import style from "../userForm.module.css";
import { FaRegEye } from "react-icons/fa6";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <form action="">
      <div className={style.formInput}>
        <Input
          id="email"
          required={true}
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
          <span>
            <MdOutlineMail />
          </span>
        </Input>
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
      </div>
      <div className={style.loginAction}>
        <div className={style.savePassword}>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Nhớ mật khẩu</label>
        </div>
        <div className={style.forgotPassword}>
          <a href="">Quên Mật Khẩu?</a>
        </div>
      </div>
      <button className={`btn ${style.buttonLogin}`}>
        <p>Đăng Nhập</p>
      </button>
    </form>
  );
}

export default LoginForm;
