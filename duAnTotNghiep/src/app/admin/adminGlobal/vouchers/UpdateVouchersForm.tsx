import React, { useState } from "react";
import style from "./addForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from "@/app/redux/slices/voucherSlice";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Form/Input/Input";
import Select from "../../Components/Form/Select/Select";
import { toast, ToastContainer } from "react-toastify";
import { useOpenUpdateForm } from "../../context/OpenUpdate";
import { Vouchers } from "@/app/voucher.interface";
import { voucherSelector } from "@/app/redux/selectors";
import { addVouchers,updateVouchers } from "@/app/service/voucher.service";
const UpdateFormVouchers = ({ data }: { data: Vouchers }) => {
  const dispatch = useDispatch();
  const initValue = {
    id: data.id,
    name: data.name,
    code: data.code,
    startDay: data.startDay,
    endDay: data.endDay,
    soLuong: data.soLuong,
    discount: data.discount,
    trangThai: data.trangThai,
    daSuDung: data.daSuDung,
  };
  const [formData, setFormData] = useState(initValue);

  const users = useSelector(voucherSelector);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.code ||
      !formData.discount ||
      !formData.startDay ||
      !formData.endDay ||
      !formData.soLuong
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }
    try {
      const checkVouchers = users.some(
        (item: Vouchers) => item.code === formData.code
      );

      if (formData.code !== data.code && checkVouchers) {
        toast.error("Mã Code đã tồn tại trong hệ thống");
        return;
      }
      if (!data.id) {
        toast.error("Không tìm thấy ID vouchers để cập nhật");
        return;
      }
      const result = await updateVouchers(data.id, formData);
      toast.success("Sửa vouchers thành công");
      dispatch(updateData(result));
    } catch (error) {
      toast.error("Sủa vouchers thất bại");
      console.log(error);
    }
  };
  const { setIsOpenUpdate } = useOpenUpdateForm();

  return (
    <>
      <ToastContainer theme="colored" />
      <Form
        cancel={() => setIsOpenUpdate(false)}
        button="Chỉnh Sửa Vouchers"
        title="Chỉnh Sửa Vouchers"
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

export default UpdateFormVouchers;
