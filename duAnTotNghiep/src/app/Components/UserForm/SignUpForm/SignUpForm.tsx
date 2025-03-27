"use client";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import Input from "../Input/Input";
import style from "../userForm.module.css";
import { FaPhone, FaRegEye, FaUser } from "react-icons/fa6";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Users } from "@/app/user.interface";
import { getUser } from "@/app/service/user.service";
import { toast, ToastContainer } from "react-toastify";
function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    date: "",
    phone: "",
    pass: "",
    repass: "",
  });
  const [showPass, setShowPass] = useState(false);
  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.pass ||
      !formData.repass ||
      !formData.phone ||
      !formData.date
    ) {
      toast("Vui long dien du thong tin");
      return;
    }
    try {
      const user = await getUser();
      const checkEmail = user.some((u: Users) => u.email === formData.email);
      if (checkEmail) {
        toast("email nay da ton tai");
        return;
      }
      if (formData.repass !== formData.pass) {
        toast("Mat khau khong trung khop");
        return;
      }
      const response = await fetch("http://localhost:5000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          sdt: formData.phone,
          email: formData.email,
          password: formData.pass,
          year: formData.date,
          cinema: "Lotte",
          status: "inactive",
          role: "admin",
          type_admin: "super",
        }),
      });

      if (response.ok) {
        toast("Đăng ký thành công!");
        setFormData({
          email: "",
          name: "",
          date: "",
          phone: "",
          pass: "",
          repass: "",
        });
      } else {
        toast("Lỗi đăng ký!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={onSubmit} action="">
      <ToastContainer />
      <div className={style.formInput}>
        <Input
          id="email"
          label="Email"
          required={true}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        >
          <span>
            <MdOutlineMail />
          </span>
        </Input>
        <Input
          id="name"
          required={true}
          label="Họ và tên"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          ></Input>
          <Input
            type="text"
            id="phone"
            required={true}
            label="Số điện thoại"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
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
          value={formData.pass}
          onChange={(e) => setFormData({ ...formData, pass: e.target.value })}
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
          value={formData.repass}
          onChange={(e) => setFormData({ ...formData, repass: e.target.value })}
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
