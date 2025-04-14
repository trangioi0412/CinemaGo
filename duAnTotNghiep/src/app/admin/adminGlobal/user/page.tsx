"use client";

import React, { useEffect,useState } from "react";
import style from "./user.module.css";
import Table from "../../Components/Table/Table";
import { FaRegEdit } from "react-icons/fa";
import AddBtn from "../../Components/AddBtn/AddBtn";
import { IoMdAdd } from "react-icons/io";
import Popup from "../../Components/Popup/popup";
import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination/Pagination";
import HeadingCard from "../../Components/HeadingCard/HeadingCard";
import OptionTable from "../../Components/OptionTable/OptionTable";

const User = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Hoàng Duyệt",
      sdt: "0901234567",
      email: "hoangduyet1122@gmail.com",
      password: "password123",
      year: 2005,
      cinema: "CGV",
      status: "active",
      role: "user",
      type_admin: "none",
    },
    {
      id: 2,
      name: "Trần Văn Giới",
      sdt: "0912345678",
      email: "trangioi479@gmail.com",
      password: "motdieunua123",
      year: 2005,
      cinema: "Lotte",
      status: "inactive",
      role: "admin",
      type_admin: "super",
    },
    {
      id: 3,
      name: "Phan Phúc Lâm",
      sdt: "0923456789",
      email: "phanphuclam1122@gmail.com",
      password: "abc123",
      year: 2005,
      cinema: "Gateway",
      status: "active",
      role: "moderator",
      type_admin: "standard",
    },
    {
      id: 4,
      name: "Nguyễn Thế Quang",
      sdt: "0934567890",
      email: "nguyenthequang1122@gmail.com",
      password: "securepass",
      year: 2002,
      cinema: "BHD",
      status: "banned",
      role: "user",
      type_admin: "none",
    },
    {
      id: 5,
      name: "Lê Thị Nhã Tú",
      sdt: "0945678901",
      email: "lethinhatu1122@gmail.com",
      password: "mypassword",
      year: 2005,
      cinema: "Cinestar",
      status: "active",
      role: "user",
      type_admin: "none",
    },
    {
      id: 6,
      name: "Nguyễn Thế Gia An",
      sdt: "0967890123",
      email: "nguyenthegiaan1122@gmail.com",
      password: "pass789",
      year: 2005,
      cinema: "Lotte",
      status: "active",
      role: "moderator",
      type_admin: "none",
    },
    {
      id: 7,
      name: "Nguyễn Đức Mạnh",
      sdt: "0978901234",
      email: "nguyenducmanh1122@gmail.com",
      password: "password987",
      year: 2005,
      cinema: "Galaxy",
      status: "active",
      role: "user",
      type_admin: "none",
    },
    {
      id: 8,
      name: "Trương Minh Hoàng",
      sdt: "0989012345",
      email: "truongminhhoang1122@gmail.com",
      password: "randompass",
      year: 2005,
      cinema: "BHD",
      status: "inactive",
      role: "admin",
      type_admin: "super",
    },
    {
      id: 9,
      name: "Nguyễn Minh Kiệt",
      sdt: "0990123456",
      email: "nguyenminhkiet1122@gmail.com",
      password: "do123pass",
      year: 2005,
      cinema: "Cinestar",
      status: "banned",
      role: "user",
      type_admin: "none",
    },
    {
      id: 10,
      name: "Hoàng Anh Khoa",
      sdt: "0990123456",
      email: "hoanganhkhoa1122@gmail.com",
      password: "do123pass",
      year: 2005,
      cinema: "Cinestar",
      status: "banned",
      role: "user",
      type_admin: "none",
    },
  ]);

  const column = [
    { key: "name", title: "Họ tên" },
    { key: "email", title: "Email" },
    { key: "sdt", title: "Số điện thoại" },
    { key: "role", title: "Quyền" },
    { key: "type_admin", title: "Phân Quyền" },
    { key: "status", title: "Trạng Thái" },
    {
      key: "actions",
      title: "Hành động",
      render: (row: any) => <button>Sửa</button>,
    },
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
        <button className={"btn"} onClick={handleOpenPopup}>
          <span>
            <IoMdAdd />
          </span>
          Thêm mới
        </button>
      </HeadingCard>
      <OptionTable />
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onSubmit={handleAddUser}
      />
      <Table data={users} column={column} />
      <Pagination />
    </Card>
  );
};

export default User;