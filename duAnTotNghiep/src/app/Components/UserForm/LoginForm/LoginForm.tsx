"use client";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import Input from "../Input/Input";
import style from "../userForm.module.css";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useRouter } from "next/navigation";
import { getUser } from "@/app/service/user.service";
import { Users } from "@/app/user.interface";
import { ToastContainer, toast } from "react-toastify";
function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!formData.email) {
      toast("Vui lòng nhập Email");
      return;
    }
    if (!formData.password) {
      toast("Vui lòng nhập mật khẩu của bạn");
      return;
    }
    try {
      const user = await getUser();
      const checkUser = user.find((u: Users) => u.email === formData.email);
      if (!checkUser) {
        toast("Không tìm thấy tài khoản này");

        return;
      }

      if (formData.password !== checkUser.password) {
        toast("Sai mật khẩu");
        return;
      }

      toast("Đâng nhập thành công");
      const userFound = {
        name: checkUser.name,
        email: checkUser.email,
        sdt: checkUser.sdt,
      };

      sessionStorage.setItem("user", JSON.stringify(userFound));
      window.location.href = "/";
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={onSubmit} action="">
      <ToastContainer />
      <div className={style.formInput}>
        <Input
          id="email"
          required={true}
          label="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
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
      <button
        disabled={!formData.email || !formData.password ? true : false}
        className={`btn ${style.buttonLogin}`}
      >
        <p>Đăng Nhập</p>
      </button>
    </form>
  );
}

export default LoginForm;
