import React from "react";
import Table from "../../Components/Table/Table";
import { IoMdAdd } from "react-icons/io";
import chart from "./payments.module.css";
import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination/Pagination";
import HeadingCard from "../../Components/HeadingCard/HeadingCard";
import OptionTable from "../../Components/OptionTable/OptionTable";
import { style } from "framer-motion/client";
const Brand = () => {
  const data = [
    {
        maGiaoDich: "TXN0012",
        khachHang: "Nguyễn Minh Nhật",
        soTien: "700.000 ₫",
        phuongThuc: "Momo",
        trangThai: "Thành Công",
        ngay: "31/03/2025"
      },
      {
        maGiaoDich: "TXN0008",
        khachHang: "Trần Quang Thắng",
        soTien: "400.000 ₫",
        phuongThuc: "Momo",
        trangThai: "Thất Bại",
        ngay: "31/03/2025"
      },
      {
        maGiaoDich: "TXN0017",
        khachHang: "Nguyễn Minh Hoàng",
        soTien: "250.000 ₫",
        phuongThuc: "Zalo Pay",
        trangThai: "Thất Bại",
        ngay: "30/03/2025"
      },
      {
        maGiaoDich: "TXN0005",
        khachHang: "Võ Minh Ngọc",
        soTien: "100.000 ₫",
        phuongThuc: "Ngân Hàng",
        trangThai: "Thành Công",
        ngay: "30/03/2025"
      },
      {
        maGiaoDich: "TXN0014",
        khachHang: "Hoàng Thế Anh",
        soTien: "500.000 ₫",
        phuongThuc: "Momo",
        trangThai: "Thành Công",
        ngay: "30/03/2025"
      },
      {
        maGiaoDich: "TXN0012",
        khachHang: "Nguyễn Minh Nhật",
        soTien: "700.000 ₫",
        phuongThuc: "Momo",
        trangThai: "Thành Công",
        ngay: "31/03/2025"
      },
      {
        maGiaoDich: "TXN0008",
        khachHang: "Trần Quang Thắng",
        soTien: "400.000 ₫",
        phuongThuc: "Momo",
        trangThai: "Thất Bại",
        ngay: "31/03/2025"
      },
      {
        maGiaoDich: "TXN0017",
        khachHang: "Nguyễn Minh Hoàng",
        soTien: "250.000 ₫",
        phuongThuc: "Zalo Pay",
        trangThai: "Thất Bại",
        ngay: "30/03/2025"
      },
      {
        maGiaoDich: "TXN0005",
        khachHang: "Võ Minh Ngọc",
        soTien: "100.000 ₫",
        phuongThuc: "Ngân Hàng",
        trangThai: "Thành Công",
        ngay: "30/03/2025"
      },
      {
        maGiaoDich: "TXN0014",
        khachHang: "Hoàng Thế Anh",
        soTien: "500.000 ₫",
        phuongThuc: "Momo",
        trangThai: "Thành Công",
        ngay: "30/03/2025"
      }
  ];
  const column = [
    { key: "maGiaoDich", title: "Mã Giao Dịch" },
    { key: "khachHang", title: "Khách Hàng" },
    { key: "soTien", title: "Số Tiền" },
    { key: "phuongThuc", title: "Phương Thức" },
    { key: "ngay", title: "Ngày Giao Dịch" },
    { key: "trangThai", title: "Trạng Thái" },
  ];
  return (
    <Card>
      <HeadingCard title="QUẢN LÝ PAYMENTS">
      </HeadingCard>
      <div className={chart.summary}>
                <div className={chart.summary_card}>
                    <h3>SỐ GIAO DỊCH THÀNH CÔNG</h3>
                    <p>1080 – 97.7%</p>
                </div>
                <div className={chart.summary_card}>
                    <h3>SỐ GIAO DỊCH THẤT BẠI</h3>
                    <p>25 – 3.3%</p>
                </div>
                <div className={chart.summary_card}>
                    <h3>TỔNG TIỀN ĐÃ THANH TOÁN THÀNH CÔNG</h3>
                    <p>95.000.000 VNĐ</p>
                </div>
                <div className={chart.summary_card}>
                    <h3>TỈ LỆ GIAO DỊCH</h3>
                    <p>MOMO-60% </p>
                    <p>Ngân Hàng - 40%</p>
                </div>
        </div>
      <OptionTable />
      <Table data={data} column={column} />
      <Pagination />
    </Card>
  );
};

export default Brand;
