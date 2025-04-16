"use client";
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import HeadingCard from "../../Components/HeadingCard/HeadingCard";
import OptionTable from "../../Components/OptionTable/OptionTable";
import Table from "../../Components/Table/Table";
import { FaRegEdit } from "react-icons/fa";
import AddBtn from "../../Components/AddBtn/AddBtn";
import style from "./film.module.css";
import { MdDeleteForever } from "react-icons/md";
import { Movies } from "@/app/movie.interface";
import { getAllMovies } from "@/app/service/movie.service";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, getData } from "@/app/redux/slices/filmSlice";
import { dataRemaining, filmSelector } from "@/app/redux/selectors";
import { useOpenForm } from "../../context/OpenForm";
import AddFormFilm from "./AddFormFilm";
import { useOpenUpdateForm } from "../../context/OpenUpdate";
import UpdateFormFilm from "./UpdateForm";
import AcitonTable from "../../Components/Table/AcitonTable";

const Film = () => {
  const { isOpen, setIsOpen } = useOpenForm();
  const { isOpenUpdate, setIsOpenUpdate } = useOpenUpdateForm();
  const [selectedFilm, setSelectedFilm] = useState<Movies | null>(null);
  const dispatch = useDispatch();
  const handleDelete = (id: any) => {
    dispatch(deleteData(id));
  };
  const handleEdit = (film: Movies) => {
    setSelectedFilm(film);
    setIsOpenUpdate(true);
  };
  const column = [
    {
      key: "name",
      title: "Tên phim",
      render: (row: Movies) => <p>{row.name}</p>,
    },
    { key: "date", title: "Ngày chiếu" },
    { key: "director", title: "Đạo điễn" },
    { key: "nation", title: "Quốc gia" },
    { key: "age", title: "Tuổi" },
    { key: "category", title: "Thể loại" },
    { key: "time", title: "Thời lượng" },
    {
      key: "action",
      title: "Hành động",
      render: (row: any) => (
        <AcitonTable
          handleDelete={() => handleDelete(row.id)}
          handleEdit={() => handleEdit(row)}
        />
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
      <HeadingCard title="danh sách phim">
        {" "}
        <AddBtn onClick={() => setIsOpen(true)}></AddBtn>{" "}
      </HeadingCard>
      <OptionTable />
      <Table data={data} column={column} rowsPerPage={5} />
      {isOpen && <AddFormFilm />}
      {isOpenUpdate && selectedFilm && <UpdateFormFilm data={selectedFilm} />}
    </Card>
  );
};

export default Film;
