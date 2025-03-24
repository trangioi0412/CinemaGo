import { MdOutlineMail } from "react-icons/md";
import Input from "../Input/Input";
import style from "../userForm.module.css";
import { FaRegEye } from "react-icons/fa6";
function LoginForm() {
  return (
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
  );
}

export default LoginForm;
