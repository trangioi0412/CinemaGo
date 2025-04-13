import React from "react";
import style from "./user.module.css";
import Table from "../../Components/Table/Table";
import { IoMdAdd } from "react-icons/io";
import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination/Pagination";
import HeadingCard from "../../Components/HeadingCard/HeadingCard";
import OptionTable from "../../Components/OptionTable/OptionTable";
const Vouchers = () => {
  const data = [
    {
        code: "SALEOFF10",
        name: "10 % Off Sale",
        discount: "10%",
        startDay: "15/03/2025",
        endDay: "15/04/2025",
        soLuong: 30,
        daSuDung: 16,
        trangThai: "Kích hoạt"
      },
      {
        code: "SALEOFF15",
        name: "15 % Off Sale",
        discount: "15%",
        startDay: "15/03/2025",
        endDay: "15/04/2025",
        soLuong: 30,
        daSuDung: 16,
        trangThai: "Kích hoạt"
      },
      {
        code: "SALEOFF20",
        name: "20 % Off Sale",
        discount: "20%",
        startDay: "15/03/2025",
        endDay: "15/04/2025",
        soLuong: 40,
        daSuDung: 26,
        trangThai: "Kích hoạt"
      },
      {
        code: "WELCOME",
        name: "New User",
        discount: "25%",
        startDay: "15/03/2025",
        endDay: "15/04/2025",
        soLuong: 100,
        daSuDung: 5,
        trangThai: "Kích hoạt"
      },
      {
        code: "OFFER2025",
        name: "Holiday offer",
        discount: "10%",
        startDay: "15/03/2025",
        endDay: "15/04/2025",
        soLuong: 50,
        daSuDung: 10,
        trangThai: "Kích hoạt"
      },
      {
        code: "SALEOFF10",
        name: "10 % Off Sale",
        discount: "10%",
        startDay: "15/03/2025",
        endDay: "15/04/2025",
        soLuong: 30,
        daSuDung: 16,
        trangThai: "Kích hoạt"
      },
      {
        code: "SALEOFF10",
        name: "10 % Off Sale",
        discount: "10%",
        startDay: "15/03/2025",
        endDay: "15/04/2025",
        soLuong: 30,
        daSuDung: 16,
        trangThai: "Kích hoạt"
      },
      {
        code: "SALEOFF10",
        name: "10 % Off Sale",
        discount: "10%",
        startDay: "15/03/2025",
        endDay: "15/04/2025",
        soLuong: 30,
        daSuDung: 16,
        trangThai: "Kích hoạt"
      },
      {
        code: "SALEOFF10",
        name: "10 % Off Sale",
        discount: "10%",
        startDay: "15/03/2025",
        endDay: "15/04/2025",
        soLuong: 30,
        daSuDung: 16,
        trangThai: "Kích hoạt"
      },
      {
        code: "SALEOFF10",
        name: "10 % Off Sale",
        discount: "10%",
        startDay: "15/03/2025",
        endDay: "15/04/2025",
        soLuong: 30,
        daSuDung: 16,
        trangThai: "Kích hoạt"
      }
  ];
  const column = [
    { key: "code", title: "Mã" },
    { key: "name", title: "Tên" },
    { key: "discount", title: "Giảm Gía" },
    { key: "startDay", title: "Ngày Bắt Đầu" },
    { key: "endDay", title: "Ngày Kết Thúc" },
    { key: "soLuong", title: "Số Lượng" },
    { key: "daSuDung", title: "Đã Sử Dụng" },
    { key: "trangThai", title: "Trạng Thái" },
    {
      key: "actions",
      title: "Hành động",
      render: (row: any) => <div><button>Sửa</button><button>Xóa</button></div>,
    },
  ];
  return (
    <Card>
      <HeadingCard title="DANH SÁCH VOUCHERS">
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

export default Vouchers;
