import React, { useState } from "react";
import style from "./addForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from "@/app/redux/slices/userSlice";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Form/Input/Input";
import Select from "../../Components/Form/Select/Select";
import { toast, ToastContainer } from "react-toastify";
import { useOpenUpdateForm } from "../../context/OpenUpdate";
import { Users } from "@/app/user.interface";
import { userSelector } from "@/app/redux/selectors";
import { addUser, updateUser } from "@/app/service/user.service";
const UpdateFormUser = ({ data }: { data: Users }) => {
  const dispatch = useDispatch();
  const initValue = {
    id: data.id,
    name: data.name,
    sdt: data.sdt,
    email: data.email,
    password: data.password,
    year: data.year,
    cinema: data.cinema,
    status: data.status,
    role: data.role,
  };
  const [formData, setFormData] = useState(initValue);
  const role = [
    { id: 1, value: "user", name: "Người dùng" },
    { id: 2, value: "admin", name: "Quản trị viên rạp" },
    { id: 3, value: "moderator", name: "Quản trị viên hệ thống" },
  ];
  const users = useSelector(userSelector);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.sdt ||
      !formData.email ||
      !formData.year ||
      !formData.role
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }
    try {
      const checkUser = users.some(
        (item: Users) => item.email === formData.email
      );

      if (formData.email !== data.email && checkUser) {
        toast.error("Email đã tồn tại trong hệ thống");
        return;
      }
      if (!data.id) {
        toast.error("Không tìm thấy ID người dùng để cập nhật");
        return;
      }
      const result = await updateUser(data.id, formData);
      toast.success("Sửa người dùng thành công");
      dispatch(updateData(result));
    } catch (error) {
      toast.error("Sủa người dùng thất bại");
      console.log(error);
    }
  };
  const { setIsOpenUpdate } = useOpenUpdateForm();

  return (
    <>
      <ToastContainer theme="colored" />
      <Form
        cancel={() => setIsOpenUpdate(false)}
        button="Thêm người dùng"
        title="thêm người dùng"
        submit={handleSubmit}
      >
        <Input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          type=""
          label="Tên người dùng"
          placeholder="Nhập tên người dùng"
          required={true}
        />
        <Input
          value={formData.sdt}
          onChange={(e) => setFormData({ ...formData, sdt: e.target.value })}
          type=""
          label="Số điện thoại"
          placeholder="Nhập số điện thoại"
          required={true}
        />
        <Input
          value={formData.year}
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          type="date"
          label="Ngày sinh"
          required={true}
        />
        <Input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type=""
          label="Địa chỉ Email"
          placeholder="Nhập địa chỉ email"
          required={true}
        />
        <Select
          value={formData.role}
          data={role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          title="Vai trò"
        />
      </Form>
    </>
  );
};

export default UpdateFormUser;
