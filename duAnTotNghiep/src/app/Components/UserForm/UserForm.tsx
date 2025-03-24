import style from "./userForm.module.css";
import LoginForm from "./LoginForm/LoginForm";

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
        <LoginForm />
      </div>
    </div>
  );
}

export default UserForm;
