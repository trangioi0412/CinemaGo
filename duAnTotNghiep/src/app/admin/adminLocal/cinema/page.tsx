
"use client";
import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import HeadingCard from '../../Components/HeadingCard/HeadingCard';
import OptionTable from '../../Components/OptionTable/OptionTable';
import Table from '../../Components/Table/Table';
import Pagination from '../../Components/Pagination/Pagination';
import AddBtn from '../../Components/AddBtn/AddBtn';
import { deleteCine, getAllRoom } from '@/app/service/cinema.service';
import AcitonTable from '../../Components/Table/AcitonTable';
import AddFromCine from './addFormCine';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, getData } from '@/app/redux/slices/cineSlice';
import style from "./cine.module.css";
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { cinemaSelector } from '@/app/redux/selectors';
import { CineInterface } from '@/app/cine.interface';

const Cinema = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(cinemaSelector);

  // Xử lý xóa
  const handleDele = async (id: any) => {
    await deleteCine(id);
    dispatch(deleteData(id));
  };

  // Định nghĩa các cột cho bảng
  const column = [
    { key: "name", title: "Tên rạp" },
    {
      key: "city",
      title: "Khu vực",
      render: (row: CineInterface) => (
        <p>
          {row.location?.city === 1
            ? "Hồ Chí Minh"
            : row.location?.city === 2
            ? "Hà Nội"
            : "Không xác định"}
        </p>
      ),
    },
    {
      key: "detail",
      title: "Địa chỉ",
      render: (row: any) => <p>{row.location?.detail || "Không có địa chỉ"}</p>,
    },
    {
      key: "action",
      title: "Hành động",
      render: (row: any) => (
        <div className={style["btnAction"]}>
          <button
            onClick={() => handleDele(row.id)}
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

  // Gọi API khi component được mount
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllRoom();
      dispatch(getData(res));
    };
    fetchData();
  }, [dispatch]);

  return (
    <Card>
      <HeadingCard title="Danh sách rạp">
        <AddBtn onClick={() => setOpen(!open)} />
      </HeadingCard>
      <OptionTable />
      <Table data={data} column={column} />
      <Pagination />
      {open && <AddFromCine onClick={() => setOpen(!open)} />}
    </Card>
  );
};

export default Cinema;
