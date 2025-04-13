"use client"
import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card';
import HeadingCard from '../../Components/HeadingCard/HeadingCard';
import OptionTable from '../../Components/OptionTable/OptionTable';
import Table from '../../Components/Table/Table';
import Pagination from '../../Components/Pagination/Pagination';
import AddBtn from '../../Components/AddBtn/AddBtn';
import { getAllRoom } from '@/app/service/cinema.service';
import { title } from 'process';
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import AcitonTable from '../../Components/Table/AcitonTable';

const column = [
    {key: "name", title: "Tên rạp"}, 
    {key: "city", title: "Khu vực", render: (row:any)=> <p>{row.location.city === '1'? "Hồ Chí Minh": "Hà Nội"}</p>} ,
    {key: "detail", title: "Địa chỉ", render: (row: any)=> <p>{row.location.detail}</p>},
    { key: "action", title:"Hành động", 
        render: (row: any) => <AcitonTable/>  }

]

const Cinema = () => {
    const [data, setData] = useState<any[]>([])
    useEffect(()=>{
        const getData = async()=>{
            const res = await getAllRoom()
            setData(res)
        }
        getData()
    },[])
    if (!data ) return <p> Loading....</p>
    console.log(data);
     
  return (
    <Card>
      <HeadingCard title="danh sách phim"> <AddBtn onClick={()=>undefined}/> </HeadingCard>
      <OptionTable />
      <Table data={data} column={column} />
      <Pagination />
      {/* {open && <AddFromFilm onClick={()=> setOpen(!open)}></AddFromFilm>} */}
    </Card>
  )
}

export default Cinema;