// "use client";
// import React, { useEffect, useState } from "react";
// import Card from "../../Components/Card/Card";
// import HeadingCard from "../../Components/HeadingCard/HeadingCard";
// import OptionTable from "../../Components/OptionTable/OptionTable";
// import Table from "../../Components/Table/Table";
// import Pagination from "../../Components/Pagination/Pagination";
// import AddBtn from "../../Components/AddBtn/AddBtn";
// import { getAllRoom } from "@/app/service/cinema.service";
// import { title } from "process";
// import { MdDeleteForever } from "react-icons/md";
// import { FaRegEdit } from "react-icons/fa";
// import AcitonTable from "../../Components/Table/AcitonTable";

// const column = [
//   { key: "name", title: "Tên rạp" },
//   {
//     key: "city",
//     title: "Khu vực",
//     render: (row: any) => (
//       <p>{row.location.city === 1 ? "Hồ Chí Minh" : "Hà Nội"}</p>
//     ),
//   },
//   {
//     key: "detail",
//     title: "Địa chỉ",
//     render: (row: any) => <p>{row.location.detail}</p>,
//   },
//   { key: "action", title: "Hành động", render: (row: any) => <AcitonTable /> },
// ];

// const Cinema = () => {
//   const [data, setData] = useState<any[]>([]);
//   useEffect(() => {
//     const getData = async () => {
//       const res = await getAllRoom();
//       setData(res);
//     };
//     getData();
//   }, []);
//   if (!data) return <p> Loading....</p>;
//   console.log(data);

//   return (
//     <Card>
//       <HeadingCard title="danh sách phim">
//         {" "}
//         <AddBtn onClick={() => setIsOpen(true)} />{" "}
//       </HeadingCard>
//       <OptionTable />
//       <Table data={data} column={column} rowsPerPage={5} />

//       {/* {open && <AddFromFilm onClick={()=> setOpen(!open)}></AddFromFilm>} */}
//     </Card>
//   );
// };

// export default Cinema;


"use client";
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import HeadingCard from "../../Components/HeadingCard/HeadingCard";
import OptionTable from "../../Components/OptionTable/OptionTable";
import Table from "../../Components/Table/Table";
import AddBtn from "../../Components/AddBtn/AddBtn";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, getData } from "@/app/redux/slices/cineSlice";
import { cineSelector, dataRemaining, filmSelector } from "@/app/redux/selectors";
import { useOpenForm } from "../../context/OpenForm";
import { useOpenUpdateForm } from "../../context/OpenUpdate";
import { toast } from "react-toastify";
import { CineInterface } from "@/app/cine.interface";
import { deleteCine, getAllRoom } from "@/app/service/cinema.service";
import style from "./cine.module.css";
import AddFormCine from "./addFormCine";
import AcitonTable from "../../Components/Table/AcitonTable";
import UpdateFormCine from "./UpdateCine";

const Cine = () => {
  const { isOpen, setIsOpen } = useOpenForm();
  const { isOpenUpdate, setIsOpenUpdate } = useOpenUpdateForm();
  const [selectedCine, setSelectedCine] = useState<CineInterface | null>(null);
  const dispatch = useDispatch();

  const handleDelete = async (id: any) => {
    const isConfirmed = window.confirm("Bạn có chắc muốn xóa rạp này không?");
    if (!isConfirmed) return;
    try {
      await deleteCine(id);
      dispatch(deleteData(id));
      toast.success("Delete succesfully !!!");
    } catch (error) {
      console.error(error);
      toast.error(" Delete fail");
    }
  };
  const handleEdit = (cine: CineInterface) => {
    setSelectedCine(cine);
    setIsOpenUpdate(true);
  };
  const column = [
    { key: "name", title: "Tên rạp" },
    {
      key: "city",
      title: "Khu vực",
      render: (row: any) => (
        <p>{row.location.city === 1 ? "Hồ Chí Minh" : "Hà Nội"}</p>
      ),
    },
    {
      key: "detail",
      title: "Địa chỉ",
      render: (row: any) => <p>{row.location.detail}</p>,
    },
    { key: "action", title: "Hành động", 
        render: (row: any) => <AcitonTable 
          handleDelete={()=>{handleDelete(row.id)}} 
          handleEdit={()=>{handleEdit(row)}} /> },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllRoom();
      dispatch(getData(res));
    };
    fetchData();
  }, [dispatch]);
  const data = useSelector(cineSelector);
  console.log(data);
  console.log(selectedCine);
  

  return (
    <Card>
      <HeadingCard title="danh sách rạp">
        {" "}
        <AddBtn onClick={() => setIsOpen(true)}></AddBtn>{" "}
      </HeadingCard>
      <OptionTable />
      <Table data={data} column={column} rowsPerPage={5} />
      {isOpen && <AddFormCine />}
      {isOpenUpdate && selectedCine && <UpdateFormCine data={selectedCine} />}
    </Card>
  );
};

export default Cine;
