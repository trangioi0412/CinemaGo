"use client";
import React from "react";
import { useState } from "react";
export default function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">
            Tên đăng nhập
            <input
              type="text"
              name=""
              id=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Mật khẩu
            <input
              type="password"
              name=""
              id=""
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </label>
        </div>
      </form>
    </div>
  );
}
