"use client";
import { useState } from "react";
import style from "./userForm.module.css";
import LoginForm from "./LoginForm/LoginForm";
const tabs = ["Đăng nhập", "Đăng ký"];
function UserForm({ isOpen }: { isOpen: any }) {
  const [type, setType] = useState("Đăng nhập");
  return (
    <div className={style.container}>
      <div onClick={isOpen} className={style.background_login_resgister}></div>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <img src="/logo.png" alt="" />
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
        <LoginForm />
      </div>
    </div>
  );
}

export default UserForm;
