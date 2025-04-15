import {Users} from "@/app/user.interface";
export const getUser = async () => {
  const res = await fetch("http://localhost:5000/user");
  const data = await res.json();
  return data;
};
// Thêm user
export const addUser = async (formData:Users) => {
  const res = await fetch("http://localhost:5000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  return data;
};

// Cập nhật user
export const updateUser = async (id:string, formData:Users) => {
  const res = await fetch(`http://localhost:5000/user/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  return data;
};

// Xóa user
export const deleteUser = async (id:string) => {
  const res = await fetch(`http://localhost:5000/user/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};