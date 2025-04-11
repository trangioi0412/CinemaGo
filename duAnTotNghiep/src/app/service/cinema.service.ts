const getAllRoom = async () => {
  const res = await fetch("http://localhost:5000/thear");
  const data = await res.json();
  return data;
};
export { getAllRoom };
