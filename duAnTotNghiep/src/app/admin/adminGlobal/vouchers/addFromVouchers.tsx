import React, { useState } from "react";
import style from "./addFromVouchers.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "@/app/redux/slices/voucherSlice";
import { toast, ToastContainer } from "react-toastify";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Form/Input/Input";
import { Vouchers } from "@/app/voucher.interface";
import Select from "../../Components/Form/Select/Select";
import { voucherSelector } from "@/app/redux/selectors";
import { addVouchers } from "@/app/service/voucher.service";
import { useOpenForm } from "../../context/OpenForm";
const AddFromVouchers = () => {
  const dispatch = useDispatch();
  const initValue = {
    code: "",
    name: "",
    discount: "",
    startDay: "",
    endDay: "",
    soLuong: 1,
    daSuDung: 0,
    trangThai: "active",
  };
  const [formData, setFormData] = useState(initValue);
  const trangThai = [
    { id: 1, value: "active", name: "Hoạt Động" },
    { id: 2, value: "activate", name: "Chưa Kích Hoạt" },
    { id: 3, value: "outOfCode", name: "Hết Mã" },
  ];

  const vouchers = useSelector(voucherSelector);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      !formData.code ||
      !formData.name ||
      !formData.discount ||
      !formData.startDay ||
      !formData.endDay ||
      !formData.soLuong
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }
    try {
      const checkVouchers = vouchers.some(
        (item: Vouchers) => item.code === formData.code
      );

      if (checkVouchers) {
        toast.error("Mã Code đã tồn tại trong hệ thống");
        return;
      }
      const result = await addVouchers({
        ...formData,
        soLuong: Number(formData.soLuong),
        daSuDung: Number(formData.daSuDung),
      });
      toast.success("Thêm người dùng thành công");
      dispatch(addData(result));
      setFormData(initValue);
    } catch (error) {
      toast.error("Thêm người dùng thất bại");
      console.log(error);
    }
  };
  const { setIsOpen } = useOpenForm();
  return (
    <>
      <ToastContainer theme="colored" />
      <Form
        cancel={() => setIsOpen(false)}
        button="Thêm Vouchers"
        title="thêm Vouchers"
        submit={handleSubmit}
      >
        <Input
          value={formData.code}
          onChange={(e) => setFormData({ ...formData, code: e.target.value })}
          type=""
          label="Mã Code"
          placeholder="Nhập Mã Code"
          required={true}
        />
        <Input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          type=""
          label="Tên Mã Vouchers"
          placeholder="Nhập Tên Mã Vouchers"
          required={true}
        />
        <Input
          value={formData.discount}
          onChange={(e) =>
            setFormData({ ...formData, discount: e.target.value })
          }
          type="number"
          label="Phần Trăm Giảm"
          required={true}
        />
        <Input
          value={formData.startDay}
          onChange={(e) =>
            setFormData({ ...formData, startDay: e.target.value })
          }
          type="date"
          label="Ngày Bắt Đầu"
          required={true}
        />
        <Input
          value={formData.endDay}
          type="date"
          onChange={(e) => setFormData({ ...formData, endDay: e.target.value })}
          label="Ngày Kết Thúc"
          required={true}
        />
        <Input
          value={formData.soLuong.toString()}
          onChange={(e) =>
            setFormData({ ...formData, soLuong: Number(e.target.value) })
          }
          type="number"
          label="Số Lượng"
          placeholder="Nhập Số Lượng"
          required={true}
        />
      </Form>
    </>
  );
};

export default AddFromVouchers;
