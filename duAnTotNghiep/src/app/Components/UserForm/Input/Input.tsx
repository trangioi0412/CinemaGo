import { MdOutlineMail } from "react-icons/md";
import { ReactNode } from "react";
import style from "../userForm.module.css";
function Input({
  id,
  type,
  placeholder,
  label,
  children,
}: {
  id: string;
  type?: string;
  placeholder?: string;
  label?: string;
  children?: ReactNode;
}) {
  return (
    <div className={style.input}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
      <span>{children}</span>
    </div>
  );
}

export default Input;
