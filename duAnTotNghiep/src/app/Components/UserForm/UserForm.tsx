"use client";
import { useContext, useState } from "react";
import style from "./userForm.module.css";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import { IoCloseSharp } from "react-icons/io5";
import { AppContext } from "@/app/Context/context";
const tabs = ["Đăng nhập", "Đăng ký"];
function UserForm() {
  const [type, setType] = useState("Đăng nhập");
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAuth phải được sử dụng bên trong AuthProvider");
  const { setOpen } = context;

  return (
    <div className={style.container}>
      <div
        onClick={() => setOpen(false)}
        className={style.background_login_resgister}
      ></div>
      <div className={style.wrapper}>
        <button onClick={() => setOpen(false)} className={style.closeForm}>
          <span>
            <IoCloseSharp />
          </span>
        </button>
        <div className={style.logo}>
          <img src="/img/logo/logo.png" alt="" />
        </div>
        <div className={style.option}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${type === tab && style.active}`}
              onClick={() => setType(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {type === "Đăng nhập" ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
}

export default UserForm;
