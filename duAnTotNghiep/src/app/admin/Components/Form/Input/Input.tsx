import React, { ReactNode } from "react";
import style from "../form.module.css";
const Input = ({
  typeInput = 1,
  type,
  placeholder,
  label,
  required,
  onChange,
  value,
  children,
}: {
  typeInput?: number;
  type?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  children?: ReactNode;
}) => {
  return (
    <div className={style.inputbox}>
      <div className={style.input}>
        {typeInput === 1 ? (
          <input
            type={type}
            placeholder={placeholder}
            required={required}
            value={type === "file" ? undefined : value}
            accept={type === "file" ? "image/*" : undefined}
            onChange={onChange}
          />
        ) : (
          <textarea
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            rows={5}
            cols={40}
          ></textarea>
        )}
        {children}
      </div>
      <label>{label}</label>
    </div>
  );
};

export default Input;
