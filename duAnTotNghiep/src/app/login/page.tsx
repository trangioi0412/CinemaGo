"use client";
import React from "react";
import { useState } from "react";
import login from "./login.module.css";
export default function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className={"container"}>
      <div className={login.left}>
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
      </div>
    </div>
  );
}
