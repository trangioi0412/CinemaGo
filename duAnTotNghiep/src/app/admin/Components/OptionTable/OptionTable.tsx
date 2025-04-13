import React from "react";
import style from "./style.module.css";
import { CgExport } from "react-icons/cg";
const OptionTable = () => {
  return (
    <div className={style.options}>
      <div className={style.search_bar}>
        <input type="text" placeholder="Tìm theo tên..." />
      </div>
      <div className={style.actions}>
        <div className={style.export_btns}>
          <button className={"btn"}>
            <span>
              <CgExport />
            </span>
            Xuất dữ liệu
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionTable;
