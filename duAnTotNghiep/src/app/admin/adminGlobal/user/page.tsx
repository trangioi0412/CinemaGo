"use client";
import React, { useEffect, useState } from "react";
import style from "./user.module.css";
import Table from "../../Components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import AddBtn from "../../Components/AddBtn/AddBtn";
import Card from "../../Components/Card/Card";
import HeadingCard from "../../Components/HeadingCard/HeadingCard";
import OptionTable from "../../Components/OptionTable/OptionTable";
import { deleteData, getData } from "@/app/redux/slices/userSlice";
import { userSelector } from "@/app/redux/selectors";
import { getUser } from "@/app/service/user.service";
import { useOpenForm } from "../../context/OpenForm";
import AddFormUser from "./addFromUser";
const User = () => {
  const { isOpen, setIsOpen } = useOpenForm();

  const dispatch = useDispatch();
  const handleDelete = (id: any) => {
    dispatch(deleteData(id));
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUser();
      dispatch(getData(res));
    };
    fetchData();
  }, [dispatch]);
  const data = useSelector(userSelector);
  const column = [
    { key: "name", title: "Họ tên" },
    { key: "email", title: "Email" },
    { key: "sdt", title: "Số điện thoại" },
    { key: "role", title: "Quyền" },
    { key: "status", title: "Trạng Thái" },
  ];

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAddUser = (data: {
    fullName: string;
    email: string;
    phone: string;
    role: string;
    permission: string;
    status: string;
  }) => {
    const newUser = {
      id: users.length + 1,
      name: data.fullName,
      sdt: data.phone,
      email: data.email,
      password: "default123", // Có thể thêm trường password vào form nếu cần
      year: 2005, // Giá trị mặc định, có thể thêm vào form
      cinema: "CGV", // Giá trị mặc định, có thể thêm vào form
      status: data.status,
      role: data.role,
      type_admin: data.permission,
    };
    setUsers([...users, newUser]);
    console.log("Người dùng mới:", newUser);
  };

  return (
    <Card>
      <HeadingCard title="DANH SÁCH NGƯỜI DÙNG">
        {" "}
        <AddBtn onClick={() => setIsOpen(true)}></AddBtn>{" "}
      </HeadingCard>
      <OptionTable />
      <Table data={data} column={column} rowsPerPage={5} />
      {isOpen && <AddFormUser />}
    </Card>
  );
};

export default User;
