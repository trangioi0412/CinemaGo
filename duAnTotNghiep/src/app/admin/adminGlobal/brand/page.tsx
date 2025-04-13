import React from "react";
import Table from "../../Components/Table/Table";
import { IoMdAdd } from "react-icons/io";

import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination/Pagination";
import HeadingCard from "../../Components/HeadingCard/HeadingCard";
import OptionTable from "../../Components/OptionTable/OptionTable";
import { img } from "framer-motion/client";
const Brand = () => {
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
      render: (row: any) => <div><button>Sửa</button><button>Xóa</button></div>,
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
      <Table data={data} column={column} />
      <Pagination />
    </Card>
  );
};

export default Brand;
