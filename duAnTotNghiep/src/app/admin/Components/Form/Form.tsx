import React from "react";
import Input from "./Input/Input";
import style from "./form.module.css";
import { useOpenForm } from "../../context/OpenForm";
const Form = ({
  title,
  button,
  submit,
  children,
}: {
  title: string;
  button: string;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}) => {
  const { setIsOpen } = useOpenForm();
  return (
    <div className={style.wrapper}>
      <form className={style["form-group"]} onSubmit={submit}>
        <h2>{title}</h2>
        <div className={style.form}>
          <div className={style["input-group"]}>{children}</div>
        </div>
        <div className={style["btn-group"]}>
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="cancel-btn"
          >
            Hủy
          </button>
          <button type="submit" className="btn">
            {button}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
