import { toast } from "react-toastify";
import { Movies } from "../movie.interface";
const URL_API = "http://localhost:5000/movies";
const getAllMovies = async () => {
  const res = await fetch(URL_API);
  const data = await res.json();
  return data;
};
const getMoviesShowing = async () => {
  const res = await fetch(`${URL_API}?status=2`);
  const data = await res.json();
  return data;
};
const getMoviesComingSoon = async () => {
  const res = await fetch(`${URL_API}?status=1`);
  const data = await res.json();
  return data;
};
const getMovie = async (id: string | number) => {
  const res = await fetch(`${URL_API}/${id}`);
  const data = await res.json();
  return data;
};
const slideshow = async () => {
  const res = await fetch(URL_API + "?_limit=5&_sort=-date");
  const data = res.json();
  return data;
};
const addMovie = async (data: Movies) => {
  try {
    const res = await fetch(URL_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Thêm phim thất bại");
    }
    return await res.json();
  } catch (err: any) {
    console.error("Lỗi khi gọi API addMovie:", err);
    throw err;
  }
};
const deleteMovie = async (id: number | string) => {
  try {
    const res = await fetch(URL_API + `/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Xóa phim thất bại");
    }
    return id;
  } catch (err: any) {
    console.error("Lỗi khi gọi API :", err);
    throw err;
  }
};
const updateFilm = async (id: number | string, data: Movies) => {
  try {
    const res = await fetch(URL_API + `/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Sửa phim thất bại");
    }
    return data;
  } catch (err: any) {
    console.error("Lỗi khi gọi API :", err);
    throw err;
  }
};
export {
  getAllMovies,
  getMoviesShowing,
  getMoviesComingSoon,
  getMovie,
  slideshow,
  addMovie,
  deleteMovie,
  updateFilm,
};
