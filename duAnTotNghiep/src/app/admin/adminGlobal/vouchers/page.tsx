"use client";

import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import style from "./voucher.module.css";
import Table from "../../Components/Table/Table";
import AddBtn from "../../Components/AddBtn/AddBtn";
import AddFromVouchers from "./addFromVouchers";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../Components/Card/Card";
import HeadingCard from "../../Components/HeadingCard/HeadingCard";
import OptionTable from "../../Components/OptionTable/OptionTable";
import { getVouchers,deleteVouchers } from "@/app/service/voucher.service";
import { addData, deleteData, getData } from "@/app/redux/slices/voucherSlice";
import {
  dataRemaining,
  userSelector,
  voucherSelector,
  filmSelector,
} from "@/app/redux/selectors";
import { useOpenForm } from "../../context/OpenForm";
const Vouchers = () => {
   const { isOpen, setIsOpen } = useOpenForm();
  const dispatch = useDispatch();
  const handleDelete = async (id: any) => {
    await deleteVouchers(id);
    const res = await getVouchers();
    dispatch(getData(res));
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await getVouchers();
      dispatch(getData(res));
    };
    fetchData();
  }, [dispatch]);
  const data = useSelector(voucherSelector);
  const column = [
    { key: "code", title: "Mã" },
    { key: "name", title: "Tên" },
    { key: "discount", title: "Giảm Gía" },
    { key: "startDay", title: "Ngày Bắt Đầu" },
    { key: "endDay", title: "Ngày Kết Thúc" },
    { key: "soLuong", title: "Số Lượng" },
    { key: "daSuDung", title: "Đã Sử Dụng" },
    { key: "trangThai", title: "Trạng Thái",
      render: (row: any) => (
        <div className={style["status"]}>
          <button className={row.trangThai === "Hoạt Động" ? style["btnactive"] : style["btnnotactive"]}>
              {row.trangThai}
          </button>
        </div>
      ),
     },
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
      <HeadingCard title="DANH SÁCH VOUCHERS">
        {" "}
        <AddBtn onClick={() => setIsOpen(true)}></AddBtn>{" "}
      </HeadingCard>
      <OptionTable />
      <Table data={data} column={column} rowsPerPage={10} />
      {isOpen && <AddFromVouchers />}
    </Card>
  );
};

export default Vouchers;
