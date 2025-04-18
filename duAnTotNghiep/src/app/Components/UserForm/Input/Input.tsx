"use client";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { ReactNode } from "react";
import style from "../userForm.module.css";
function Input({
  id,
  type,
  placeholder,
  label,
  required,
  onChange,
  value,
  children,
}: {
  id: string;
  type?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}) {
  return (
    <div className={style.input}>
      <input
        type={type}
        id={id}
        required={required}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}

export default Input;
