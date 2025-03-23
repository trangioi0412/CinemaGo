"use client";
import React from "react";
import { useState } from "react";
import login from "./login.module.css";
import { MdOutlineMail } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
export default function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className={login.container}>
      <div className={login.background_login_resgister}></div>
      <div className={login.login}>
        <div className={login.header}>
          <img src="/logo.png" alt="" className={login.logoImg} />
          <div className={login.button}>
            <button className={`${login.action} ${login.actionSelected}`}>
              Đăng Nhập
            </button>
            <button className={login.action}>Đăng Ký</button>
          </div>
        </div>
        <form action="" className={login.loginForm}>
          <div className={login.input}>
            <label htmlFor="" className={login.placeholderText}>
              Email
            </label>
            <input type="email" />
            <MdOutlineMail className={login.icon} />
          </div>
          <br />
          <br />
          <br />
          <div className={login.input}>
            <label htmlFor="" className={login.placeholderText}>
              Password
            </label>
            <input type="password" />
            <FaRegEye className={login.icon} />
          </div>
          <div className={login.loginAction}>
            <div className={login.savePassword}>
              <input type="checkbox" />
              <label htmlFor="">Nhớ mật khẩu</label>
            </div>
            <div className={login.forgotPassword}>
              <p>Quên Mật Khẩu?</p>
            </div>
          </div>
          <button className={login.buttonLogin}>
            <p>Đăng Nhập</p>
          </button>
        </form>
      </div>
    </div>
  );
}

{
  /* <div className={login.left}>
<h1>Đăng nhập</h1>
</div>
<div className={login.right}>
  <div className={login.loginBox}>
    <input
      type="email"
      placeholder="Email hoặc số điện thoại"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      type="password"
      placeholder="Mật khẩu"
      value={pass}
      onChange={(e) => setPass(e.target.value)}
    />
    <button className={login.loginBtn}>Đăng nhập</button>
    <a href="#" className={login.forgot}>
      Quên mật khẩu?
    </a>
    <button className={login.registerBtn}>Tạo tài khoản mới</button>
  </div>
</div> */
}
