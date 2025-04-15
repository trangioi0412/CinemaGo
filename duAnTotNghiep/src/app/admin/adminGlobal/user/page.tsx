"use client";

import React, { useEffect,useState } from "react";
import style from "./user.module.css";
import Table from "../../Components/Table/Table";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import AddBtn from "../../Components/AddBtn/AddBtn";
import { IoMdAdd } from "react-icons/io";
import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination/Pagination";
import HeadingCard from "../../Components/HeadingCard/HeadingCard";
import OptionTable from "../../Components/OptionTable/OptionTable";
import AddFromUser from "./addFromUser";
import { addData, deleteData, getData } from "@/app/redux/slices/userSlice";
import { dataRemaining,userSelector, filmSelector } from "@/app/redux/selectors";
import { getUser,addUser,deleteUser,updateUser } from "@/app/service/user.service";
const User = () => {
  const [open, setOpen] = useState(false);

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
    { key: "type_admin", title: "Phân Quyền" },
    { key: "status", title: "Trạng Thái" },
    {
      key: "actions",
      title: "Hành động",
      render: (row: any) => (
        <div className={style["btnAction"]}>
          <button className={style["btnEdit"]}>
            <FaRegEdit />
          </button>
        </div>
      ),
    },
  ];
  return (
    <Card>
      <HeadingCard title="DANH SÁCH NGƯỜI DÙNG">
        {" "}
        <AddBtn onClick={() => setOpen(!open)}></AddBtn>{" "}
      </HeadingCard>
      <OptionTable />
      <Table data={data} column={column} rowsPerPage={5}  />
      {open && <AddFromUser onClick={() => setOpen(!open)}></AddFromUser>}
    </Card>
  );
};

export default User;