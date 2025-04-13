"use client"
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import HeadingCard from "../../Components/HeadingCard/HeadingCard";
import OptionTable from "../../Components/OptionTable/OptionTable";
import Table from "../../Components/Table/Table";
import Pagination from "../../Components/Pagination/Pagination";
import { FaRegEdit } from "react-icons/fa";
import AddBtn from "../../Components/AddBtn/AddBtn";
import style from './film.module.css'
import { MdDeleteForever } from "react-icons/md";
import AddFromFilm from "./addFromFilm";
import { Movies } from "@/app/movie.interface";
import { getAllMovies } from "@/app/service/movie.service";
import { p } from "framer-motion/client";

const column = [
  { key: "name", title: "Tên phim", render: (row: Movies)=> <p>{row.name}</p>},
  { key: "date", title:"Ngày chiếu" },
  { key: "director", title:"Đạo điễn" },
  { key: "nation", title:"Quốc gia" },
  { key: "age", title:"Tuổi" },
  { key: "category", title:"Thể loại" },
  { key: "time", title:"Thời lượng" },
  { key: "action", title:"Hành động", 
    render: (row: any) => <div className={style["btnAction"]}>
                            <button className={style["btnDelete"]}><MdDeleteForever /></button> 
                            <button className={style["btnEdit"]}><FaRegEdit /></button>
                          </div>  }
];
// const data = [
//   { id: 1, filmname: "Phim hấp dẫn",  date: "07/03/2025", director: "Pom Nguyễn", nation: "Việt Nam", age: "18", category: "Kinh dị", time: "122",  },
//   { id: 2, filmname: "Phim hấp dẫn",  date: "07/03/2025", director: "Pom Nguyễn", nation: "Việt Nam", age: "18", category: "Kinh dị", time: "122",  },
//   { id: 3, filmname: "Phim hấp dẫn",  date: "07/03/2025", director: "Pom Nguyễn", nation: "Việt Nam", age: "18", category: "Kinh dị", time: "122",  },
// ];
const Film = () => {
  const [open, setOpen ] = useState(false)
  const [data, setData ] = useState<Movies[]| []>([])
  useEffect(()=>{
    const getData = async() =>{
      const res = await getAllMovies()
      setData(res)
    }
    getData();
  },[])
  if (!data ) return <p> Loading....</p>
  console.log(data);
  
  return (
    <Card>
      <HeadingCard title="danh sách phim"> <AddBtn onClick={()=> setOpen(!open)}></AddBtn> </HeadingCard>
      <OptionTable />
      <Table data={data} column={column} />
      <Pagination />
      {open && <AddFromFilm onClick={()=> setOpen(!open)}></AddFromFilm>}
    </Card>
  );
};

export default Film;
