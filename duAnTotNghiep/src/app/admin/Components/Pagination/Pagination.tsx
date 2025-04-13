import React from "react";
import style from "./pagination.module.css";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
const Pagination = () => (
  <div className={style.pagination}>
    <p>Hiện 1 đến 5 của 5 mục</p>
    <div className={style.btn_paginations}>
      <button>
        <span>
          <MdKeyboardDoubleArrowLeft />
        </span>
      </button>
      <button>
        <span>
          <MdKeyboardArrowLeft />
        </span>
      </button>
      <button className={style.active}>1</button>
      <button>2</button>
      <button>
        <span>
          <MdKeyboardArrowRight />
        </span>
      </button>
      <button>
        <span>
          <MdKeyboardDoubleArrowRight />
        </span>
      </button>
    </div>
  </div>
);

export default Pagination;
