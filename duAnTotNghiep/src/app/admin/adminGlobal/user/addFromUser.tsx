import React, { useState } from "react";
import style from "./addFromUser.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "@/app/redux/slices/userSlice";
import { toast, ToastContainer } from "react-toastify";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Form/Input/Input";
import { Users } from "@/app/user.interface";
import Select from "../../Components/Form/Select/Select";
import { userSelector } from "@/app/redux/selectors";
import { addUser } from "@/app/service/user.service";
const AddFormUser = () => {
  const dispatch = useDispatch();
  const initValue = {
    name: "",
    sdt: "",
    email: "",
    password: "",
    year: "",
    cinema: "Cinema",
    status: "active",
    role: "",
    repass: "",
  };
  const [formData, setFormData] = useState(initValue);
  const role = [
    { id: 1, value: "user", name: "Người dùng" },
    { id: 2, value: "admin", name: "Quản trị viên rạp" },
    { id: 3, value: "moderator", name: "Quản trị viên hệ thống" },
  ];

  const users = useSelector(userSelector);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.sdt ||
      !formData.email ||
      !formData.password ||
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

      if (checkUser) {
        toast.error("Email đã tồn tại trong hệ thống");
        return;
      }
      if (formData.repass !== formData.password) {
        toast.error("Mật khẩu không trùng khớp");
        return;
      }
      const result = await addUser(formData);
      toast.success("Thêm người dùng thành công");
      dispatch(addData(result));
      setFormData(initValue);
    } catch (error) {
      toast.error("Thêm người dùng thất bại");
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer theme="colored" />
      <Form
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
        <Input
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          type="password"
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          required={true}
        />
        <Input
          value={formData.repass}
          onChange={(e) => setFormData({ ...formData, repass: e.target.value })}
          type=""
          label="Xác nhận mật khẩu"
          placeholder="Xác nhận mật khẩu"
          required={true}
        />
      </Form>
    </>
  );
};

export default AddFormUser;
