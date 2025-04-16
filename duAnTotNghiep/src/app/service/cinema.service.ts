import { CineInterface } from "../cine.interface";

const getAllRoom = async () => {
  const res = await fetch("http://localhost:5000/thear");
  const data = await res.json();
  return data;
};

const addCine = async (data: any) => {
  const res = await fetch("http://localhost:5000/thear", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
};

const deleteCine = async (id: number | string) => {
  try {
    const res = await fetch(`http://localhost:5000/thear/${id}`, {
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

const updateCine = async (id: number | string, data: CineInterface) => {
  try {
    const res = await fetch(`http://localhost:5000/thear/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Sửa rạp thất bại");
    }
    return data;
  } catch (err: any) {
    console.error("Lỗi khi gọi API :", err);
    throw err;
  }
};
export { getAllRoom, deleteCine, addCine, updateCine };
