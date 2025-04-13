import React from "react";
import style from "./pagination.module.css";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  from: number;
  to: number;
  total: number;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  from,
  to,
  total,
}: PaginationProps) => {
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={style.pagination}>
      <p>
        Hiện {from} đến {to} của {total} mục
      </p>
      <div className={style.btn_paginations}>
        <button onClick={() => goToPage(1)} disabled={currentPage === 1}>
          <MdKeyboardDoubleArrowLeft />
        </button>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <MdKeyboardArrowLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            className={currentPage === i + 1 ? style.active : ""}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <MdKeyboardArrowRight />
        </button>
        <button
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
