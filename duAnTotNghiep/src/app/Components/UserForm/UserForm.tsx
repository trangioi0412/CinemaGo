"use client";
import { useState } from "react";
import style from "./userForm.module.css";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import { IoCloseSharp } from "react-icons/io5";
const tabs = ["Đăng nhập", "Đăng ký"];
function UserForm({ isOpen }: { isOpen: any }) {
  const [type, setType] = useState("Đăng nhập");
  return (
    <div className={style.container}>
      <div onClick={isOpen} className={style.background_login_resgister}></div>
      <div className={style.wrapper}>
        <button onClick={isOpen} className={style.closeForm}>
          <span>
            <IoCloseSharp />
          </span>
        </button>
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
        {type === "Đăng nhập" ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
}

export default UserForm;
