import React, { useState } from "react";
import style from "./addForm.module.css";
import { useDispatch } from "react-redux";
import { addData, updateData } from "@/app/redux/slices/cineSlice";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Form/Input/Input";
import Select from "../../Components/Form/Select/Select";
import { Movies } from "@/app/movie.interface";
import { addMovie } from "@/app/service/movie.service";
import { toast, ToastContainer } from "react-toastify";
import { useOpenForm } from "../../context/OpenForm";
import { CineInterface } from "@/app/cine.interface";
import { addCine, updateCine } from "@/app/service/cinema.service";
import { useOpenUpdateForm } from "../../context/OpenUpdate";
const UpdateFormCine = ({ data }: { data: CineInterface }) => {
  const dispatch = useDispatch();
  
  const initValue: CineInterface = {
    id: data.id || "",
    id_brand: data.id_brand,
    name:data.name || "",
    location: {
      city: data.location.city || "",
      detail: data.location.detail
    }
  }
  const [formData, setFormData] = useState<CineInterface>(initValue);
  const city = [
    { id: 1, value: "P", name: "Hồ Chí Minh" },
    { id: 2, value: "K", name: "Hà Nội" },
  ];
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.location.city ||
      !formData.location.detail
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }
    try {
        if (!data.id) {
          toast.error("Không tìm thấy ID rạp để cập nhật");
          return;
        }
        const result = await updateCine(data.id, formData);
        toast.success("Sửa rạp thành công");
        dispatch(updateData(result));
      } catch (error: any) {
        toast.error("Sửa rạp  thất bại");
        console.log(error);
      }
  };
  const { setIsOpenUpdate } = useOpenUpdateForm();

  return (
    <>
      <ToastContainer theme="colored" />
      <Form
        cancel={() => setIsOpenUpdate(false)}
        button="Thêm rạp"
        title="thêm rạp"
        submit={handleSubmit}
      >
        <Input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          label="Tên rạp"
          placeholder="Tên rạp"
          required={true}
        />
        <Select
          title="Khu vực"
          data={city}
          value={formData.location.city}
          onChange={(e) => setFormData({ ...formData, location:{ ...formData.location, city:  e.target.value} })}
        />
        <Input
          value={formData.location.detail}
          onChange={(e) => setFormData({ ...formData, location:{ ...formData.location, detail:  e.target.value} })}
          type=""
          label="Địa chỉ"
          placeholder="Nhập địa chỉ"
          required={true}
        />
      </Form>
    </>
  );
};

export default UpdateFormCine;
