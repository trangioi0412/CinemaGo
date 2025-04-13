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
import { getAllMovies } from "@/app/service/movie.service";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, getData } from "@/app/redux/slices/filmSlice";
import { dataRemaining, filmSelector } from "@/app/redux/selectors";

// const data = [
//   { id: 1, filmname: "Phim hấp dẫn",  date: "07/03/2025", director: "Pom Nguyễn", nation: "Việt Nam", age: "18", category: "Kinh dị", time: "122",  },
//   { id: 2, filmname: "Phim hấp dẫn",  date: "07/03/2025", director: "Pom Nguyễn", nation: "Việt Nam", age: "18", category: "Kinh dị", time: "122",  },
//   { id: 3, filmname: "Phim hấp dẫn",  date: "07/03/2025", director: "Pom Nguyễn", nation: "Việt Nam", age: "18", category: "Kinh dị", time: "122",  },
// ];
const Film = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const handleDelete = (id: any) => {
    dispatch(deleteData(id));
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
  const data = useSelector(dataRemaining);

  const handleAdd = () => {
    dispatch(
      addData({
        id: Date.now(),
        name: "phim set",
        date: "07/03/2025",
        director: "Pom Nguyễn",
        nation: "Việt Nam",
        age: 18,
        category: "Kinh Dị",
        language: "Tiếng Việt",
        time: 122,
        text_summary:
          "Phim lấy cảm hứng từ câu chuyện có thật và “truyền thuyết kinh dị nhất về người chết sống lại” - Ở một ngôi làng vùng cao, cặp vợ chồng Quang và Như sống bằng nghề mai táng. Cuộc sống yên bình của họ bị xáo trộn khi phát hiện một cỗ quan tài vô chủ trên mảnh đất nhà mình. Từ đây, những hiện tượng kỳ lạ bắt đầu xảy ra và ám ảnh cả ngôi làng.",
        status: 2,
        image: "quy_nhap_trang.jpg",
        banner: "quy_nhap_trang.webp",
        trailer:
          "https://www.youtube.com/embed/EB0nnm6akjA?si=pvBO2RbLlbOq4fI6",
      })
    );
  };
  console.log(data);

  return (
    <Card>
      <button onClick={handleAdd}>Add</button>
      <HeadingCard title="danh sách phim">
        {" "}
        <AddBtn onClick={() => setOpen(!open)}></AddBtn>{" "}
      </HeadingCard>
      <OptionTable />
      <Table data={data} column={column} rowsPerPage={5} />
      {open && <AddFromFilm onClick={() => setOpen(!open)}></AddFromFilm>}
    </Card>
  );
};

export default Film;
