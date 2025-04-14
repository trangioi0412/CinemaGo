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

const deleteCine = async (id: any) => {
  const res = await fetch(`http://localhost:5000/thear/${id}`, {
    method: 'DELETE',
  });
  if(!res.ok) throw new Error("Xóa thất bại")
    return  id;
};

export { getAllRoom, deleteCine, addCine };
