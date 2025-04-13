import React from "react";
import style from "./user.module.css";
import Table from "../../Components/Table/Table";
import { IoIosAdd, IoMdAdd } from "react-icons/io";
import { CgExport } from "react-icons/cg";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination/Pagination";
import HeadingCard from "../../Components/HeadingCard/HeadingCard";
import OptionTable from "../../Components/OptionTable/OptionTable";
const User = () => {
  const data = [
    {
      id: 1,
      name: "abc",
      email: 123,
    },
    {
      id: 2,
      name: "abc",
      email: 123,
    },
    {
      id: 3,
      name: "abc",
      email: 123,
    },
    {
      id: 4,
      name: "abc",
      email: 123,
    },
    {
      id: 5,
      name: "abc",
      email: 123,
    },
  ];
  const column = [
    { key: "name", title: "Name" },
    { key: "email", title: "Email" },
    { key: "phone", title: "Số điện thoại" },
    { key: "address", title: "Địa chỉ" },
    {
      key: "actions",
      title: "Hành động",
      render: (row: any) => <button>Xóa</button>,
    },
  ];
  return (
    <Card>
      <HeadingCard title="DANH SÁCH NGƯỜI DÙNG">
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

export default User;
