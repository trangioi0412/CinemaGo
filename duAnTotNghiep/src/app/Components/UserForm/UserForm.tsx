import { MdOutlineMail } from "react-icons/md";
import Input from "./Input/Input";
import style from "./userForm.module.css";
import { FaRegEye } from "react-icons/fa6";

function UserForm({ isOpen }: { isOpen: any }) {
  return (
    <div className={style.container}>
      <div onClick={isOpen} className={style.background_login_resgister}></div>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <img src="/logo.png" alt="" />
        </div>
        <div className={style.option}>
          <button className={style.active}>Đăng nhập</button>
          <button>Đăng ký</button>
        </div>
        <form action="">
          <div className={style.formInput}>
            <Input id="email" label="Email">
              <MdOutlineMail />
            </Input>
            <Input id="password" label="Mật khẩu">
              <FaRegEye />
            </Input>
          </div>
          <div className={style.loginAction}>
            <div className={style.savePassword}>
              <input type="checkbox" />
              <label htmlFor="">Nhớ mật khẩu</label>
            </div>
            <div className={style.forgotPassword}>
              <p>Quên Mật Khẩu?</p>
            </div>
          </div>
          <button className={`btn ${style.buttonLogin}`}>
            <p>Đăng Nhập</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
