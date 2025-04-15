"use client";
import React from "react";
import style from "./style.module.css";
import { CgExport } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { searchAction } from "@/app/redux/slices/searchSlice";
const OptionTable = () => {
  const [searchText, setSearchText] = React.useState("");
  const dispatch = useDispatch();
  const handleSearch = (e: any) => {
    setSearchText(e.target.value);
    dispatch(searchAction(e.target.value));
  };

  return (
    <div className={style.options}>
      <div className={style.search_bar}>
        <input
          type="text"
          placeholder="Tìm theo tên..."
          value={searchText}
          onChange={handleSearch}
        />
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
