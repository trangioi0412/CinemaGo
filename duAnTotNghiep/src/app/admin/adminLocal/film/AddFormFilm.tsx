import React, { useState } from "react";
import style from "./addForm.module.css";
import { useDispatch } from "react-redux";
import { addData } from "@/app/redux/slices/filmSlice";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Form/Input/Input";
import Select from "../../Components/Form/Select/Select";
import { Movies } from "@/app/movie.interface";
import { addMovie } from "@/app/service/movie.service";
import { toast, ToastContainer } from "react-toastify";
const AddFormFilm = () => {
  const dispatch = useDispatch();
  const initValue: Movies = {
    name: "",
    date: "",
    director: "",
    nation: "",
    age: "",
    category: "",
    language: "",
    time: "",
    text_summary: "",
    status: "",
    image: null,
    banner: null,
    trailer: "",
  };
  const [formData, setFormData] = useState<Movies>(initValue);
  const age = [
    { id: 1, value: "P", name: "Mọi lứa tuôi" },
    { id: 2, value: "K", name: "13 tuổi trở lên" },
    { id: 3, value: 16, name: "16 tuổi trở lên" },
    { id: 4, value: 18, name: "18 tuổi trở lên" },
  ];
  const status = [
    { id: 1, value: 1, name: "Sắp chiếu" },
    { id: 2, value: 2, name: "Đang chiếu" },
  ];
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.date ||
      !formData.director ||
      !formData.nation ||
      !formData.age ||
      !formData.category ||
      !formData.language ||
      !formData.time ||
      !formData.category ||
      !formData.status ||
      !formData.text_summary

    ) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }
    try {
      const result = await addMovie(formData);
      toast.success("Thêm thành công");
      dispatch(addData(result));
      setFormData(initValue);
    } catch (error: any) {
      toast.error("Thêm thất bại");
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer theme="colored" />
      <Form button="Thêm phim" title="thêm phim" submit={handleSubmit}>
        <Input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          label="Tên phim"
          placeholder="Tên phim"
          required={true}
        />
        <Input
          value={formData.date}
          type="date"
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          label="Ngày công chiếu"
          required={true}
        />
        <Input
          value={formData.director}
          onChange={(e) =>
            setFormData({ ...formData, director: e.target.value })
          }
          label="Đạo diễn"
          placeholder="Tên đạo diễn"
          required={true}
        />
        <Input
          value={formData.nation}
          onChange={(e) => setFormData({ ...formData, nation: e.target.value })}
          label="Quốc gia"
          placeholder="Tên quốc gia"
          required={true}
        />
        <Select
          title="Độ tuổi"
          data={age}
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <Input
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          label="Thể loại"
          placeholder="Thể loại"
          required={true}
        />
        <Input
          value={formData.language}
          onChange={(e) =>
            setFormData({ ...formData, language: e.target.value })
          }
          label="Ngôn ngữ"
          placeholder="Ngôn ngữ"
          required={true}
        />
        <Input
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          type="number"
          label="Thời lượng phim"
          placeholder="Thời lượng (phút)"
          required={true}
        />
        <Select
          title="Trạng thái"
          data={status}
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        />
        <Input
          value={""}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            const file = target.files?.[0];
            if (file) setFormData({ ...formData, image: file });
          }}
          type="file"
          label="Ảnh phim"
          placeholder=""
          required={true}
        >
          {formData.image && <p>File: {formData.image.name}</p>}
        </Input>
        <Input
          value={""}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            const file = target.files?.[0];
            if (file) setFormData({ ...formData, banner: file });
          }}
          type="file"
          label="Banner phim"
          placeholder=""
          required={true}
        >
          {formData.banner && <p>File: {formData.banner.name}</p>}
        </Input>
        <Input
          value={formData.trailer}
          onChange={(e) =>
            setFormData({ ...formData, trailer: e.target.value })
          }
          type=""
          label="Trailer phim"
          placeholder="Nhập url trailer phim"
          required={true}
        />
        <Input
          value={formData.text_summary}
          onChange={(e) =>
            setFormData({ ...formData, text_summary: e.target.value })
          }
          type=""
          label="Nội dung phim"
          placeholder="Nhập nội dung phim"
          required={true}
          typeInput={2}
        />
      </Form>
    </>
  );
};

export default AddFormFilm;
