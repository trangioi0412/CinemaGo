export const getUser = async () => {
  const res = await fetch("http://localhost:5000/user");
  const data = await res.json();
  return data;
};
