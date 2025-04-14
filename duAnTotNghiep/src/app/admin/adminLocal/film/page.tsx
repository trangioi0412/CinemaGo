"use client";
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import HeadingCard from "../../Components/HeadingCard/HeadingCard";
import OptionTable from "../../Components/OptionTable/OptionTable";
import Table from "../../Components/Table/Table";
import Pagination from "../../Components/Pagination/Pagination";
import { FaRegEdit } from "react-icons/fa";
import AddBtn from "../../Components/AddBtn/AddBtn";
import style from "./film.module.css";
import { MdDeleteForever } from "react-icons/md";
import AddFromFilm from "./addFromFilm";
import { Movies } from "@/app/movie.interface";
import { addFilm, deleteFilm, getAllMovies } from "@/app/service/movie.service";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, getData } from "@/app/redux/slices/filmSlice";
import { filmSelector } from "@/app/redux/selectors";

const Film = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const handleDelete = async (id: any) => {
    const deleted = await deleteFilm(id)
    dispatch(deleteData(id));
  };
  const column = [
    { key: "name",title: "Tên phim",render: (row: Movies) => <p>{row.name}</p>},
    { key: "date", title: "Ngày chiếu" },
    { key: "director", title: "Đạo điễn" },
    { key: "nation", title: "Quốc gia" },
    { key: "age", title: "Tuổi" },
    { key: "category", title: "Thể loại" },
    { key: "time", title: "Thời lượng" },
    { key: "action", title: "Hành động", render: (row: any) => (
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

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllMovies();
      dispatch(getData(res));
    };
    fetchData();
  }, [dispatch]);
  const data = useSelector(filmSelector);
 console.log(data);
  return (
    <Card>
      {/* <button onClick={handleAdd}>Add</button> */}
      <HeadingCard title="danh sách phim">
        {" "}
        <AddBtn onClick={() => setOpen(!open)}></AddBtn>{" "}
      </HeadingCard>
      <OptionTable />
      <Table data={data} column={column} />
      <Pagination />
      {open && <AddFromFilm onClick={() => setOpen(!open)}></AddFromFilm>}
    </Card>
  );
};

export default Film;
