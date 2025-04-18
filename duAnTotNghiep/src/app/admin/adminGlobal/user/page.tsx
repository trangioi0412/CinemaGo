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
import { useOpenUpdateForm } from "../../context/OpenUpdate";
import { Users } from "@/app/user.interface";
import UpdateFormUser from "./UpdateUserForm";
const User = () => {
  const { isOpen, setIsOpen } = useOpenForm();

  const { isOpenUpdate, setIsOpenUpdate } = useOpenUpdateForm();
  const [selectedUser, setSelectedUser] = useState<Users | null>(null);
  const dispatch = useDispatch();
  const handleDelete = (id: any) => {
    dispatch(deleteData(id));
  };
  const handleEdit = (user: Users) => {
    setSelectedUser(user);
    setIsOpenUpdate(true);
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

    {
      key: "status",
      title: "Trạng Thái",
      render: (row: any) => (
        <div className={style["status"]}>
          <button
            className={
              row.status === "active"
                ? style["btn_active"]
                : row.status === "inactive"
                ? style["btn_inactive"]
                : style["btn_banned"]
            }
          >
            {row.status}
          </button>
        </div>
      ),
    },
    {
      key: "action",
      title: "Hành động",
      render: (row: any) => (
        <button
          className={style["btnEdit"]}
          style={{
            border: "none",
            backgroundColor: "transparent",
            padding: 10,
            fontSize: 20,
            cursor: "pointer",
          }}
          onClick={() => handleEdit(row)}
        >
          <FaRegEdit />
        </button>
      ),
    },
  ];

  return (
    <Card>
      <HeadingCard title="DANH SÁCH NGƯỜI DÙNG">
        {" "}
        <AddBtn onClick={() => setIsOpen(true)}></AddBtn>{" "}
      </HeadingCard>
      <OptionTable />
      <Table data={data} column={column} rowsPerPage={5} />
      {isOpen && <AddFormUser />}
      {isOpenUpdate && selectedUser && <UpdateFormUser data={selectedUser} />}
    </Card>
  );
};

export default User;
