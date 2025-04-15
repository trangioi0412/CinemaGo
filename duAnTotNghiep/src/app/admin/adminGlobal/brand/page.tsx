"use client";

import React from "react";
import Table from "../../Components/Table/Table";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import style from "./brand.module.css"
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination/Pagination";
import HeadingCard from "../../Components/HeadingCard/HeadingCard";
import OptionTable from "../../Components/OptionTable/OptionTable";
import { img } from "framer-motion/client";
const Brand = () => {
  const dispatch = useDispatch();
      const handleDelete = (id: any) => {
        // dispatch(deleteData(id));
      };
  const data = [
    {
        img:"cgv.png",
        soluong:12,
        status:"Hoạt Động"
    },
    {
        img:"cinerstar.png",
        soluong:6,
        status:"Hoạt Động"
    },
    {
        img:"galaxyCinema.png",
        soluong:8,
        status:"Hoạt Động"
    },
    {
        img:"lotte.png",
        soluong:14,
        status:"Hoạt Động"
    }
  ];
  const column = [
    { key: "img", title: "Thương Hiệu" ,
    render: (row: any) => <img src={`/img/brand/${row.img}`} alt="Thương hiệu" style={{ height: "40px" }} />},
    { key: "soluong", title: "Số Lượng" },
    { key: "status", title: "Trạng Thái" },
    {
      key: "actions",
      title: "Hành động",
      render: (row: any) => (
        <div className={style["btnAction"]}>
          <button
            onClick={() => handleDelete(row.id)}
            className={style["btnDelete"]}
          >
            <MdDeleteForever />
          </button>
          <button className={style["btnEdit"]}>
            <FaRegEdit />
          </button>
        </div>
      ),
    },
  ];
  return (
    <Card>
      <HeadingCard title="QUẢN LÝ BRAND">
        <button className={"btn"}>
          {" "}
          <span>
            <IoMdAdd />
          </span>
          Thêm mới
        </button>
      </HeadingCard>
      <OptionTable />
      <Table data={data} column={column} rowsPerPage={5}/>
    </Card>
  );
};

export default Brand;
