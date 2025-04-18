import React, { useState } from "react";
import style from "./addForm.module.css";
import { useDispatch } from "react-redux";
import { addData } from "@/app/redux/slices/cineSlice";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Form/Input/Input";
import Select from "../../Components/Form/Select/Select";
import { Movies } from "@/app/movie.interface";
import { addMovie } from "@/app/service/movie.service";
import { toast, ToastContainer } from "react-toastify";
import { useOpenForm } from "../../context/OpenForm";
import { CineInterface } from "@/app/cine.interface";
import { addCine } from "@/app/service/cinema.service";
const AddFormCine = () => {
  const dispatch = useDispatch();
  const initValue: CineInterface = {
    // id: "",
    id_brand: 1,
    name: "",
    location: {
      city: "",
      detail: ""
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
      const result = await addCine(formData);
      toast.success("Thêm thành công");
      dispatch(addData(result));
      setFormData(initValue);
    } catch (error: any) {
      toast.error("Thêm thất bại");
      console.log(error);
    }
  };
  const { setIsOpen } = useOpenForm();
  return (
    <>
      <ToastContainer theme="colored" />
      <Form
        cancel={() => setIsOpen(false)}
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

export default AddFormCine;
