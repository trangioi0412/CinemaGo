import { Vouchers } from "../voucher.interface";
const URL_API = "http://localhost:5000/vouchers";

export const getVouchers = async () => {
    const res = await fetch("http://localhost:5000/vouchers");
    const data = await res.json();
    return data;
  };

export const addVouchers = async (data: Vouchers) => {
  try {
    const res = await fetch(URL_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Thêm vouchers thất bại");
    }
    return await res.json();
  } catch (err: any) {
    console.error("Lỗi khi gọi API:", err);
    throw err;
  }
};
export const deleteVouchers = async (id: number | string) => {
  try {
    const res = await fetch(URL_API + `/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Xóa vouchers thất bại");
    }
    return id;
  } catch (err: any) {
    console.error("Lỗi khi gọi API :", err);
    throw err;
  }
};
export const updateVouchers = async (id: number | string, data: Vouchers) => {
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