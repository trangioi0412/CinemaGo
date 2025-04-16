import { Users } from "../user.interface";

const URL_API = "http://localhost:5000/user";
export const getUser = async () => {
  const res = await fetch(URL_API);
  const data = await res.json();
  return data;
};

export const addUser = async (data: Users) => {
  try {
    const res = await fetch(URL_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Thêm người dùng thất bại");
    }
    return await res.json();
  } catch (err: any) {
    console.error("Lỗi khi gọi API:", err);
    throw err;
  }
};
export const updateUser = async (id: number | string, data: Users) => {
  try {
    const res = await fetch(URL_API + `/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Sửa người dùng thất bại");
    }
    return data;
  } catch (err: any) {
    console.error("Lỗi khi gọi API :", err);
    throw err;
  }
};
