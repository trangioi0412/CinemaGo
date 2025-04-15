import React from "react";
import style from "../form.module.css";
const Select = ({
  title,
  data,
  value,
  onChange,
}: {
  title: string;
  data: any[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className={style.inputbox}>
      <div className={style.input}>
        <select className={style.select} value={value} onChange={onChange}>
          <option value="">
            --Chọn <span style={{ textTransform: "lowercase" }}>{title}</span>
          </option>
          {data.map((i) => (
            <option key={i.id} value={i.value}>
              {i.name}
            </option>
          ))}
        </select>
      </div>
      <label>{title}</label>
    </div>
  );
};

export default Select;
