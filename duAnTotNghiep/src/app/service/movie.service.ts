const getAllMovies = async () => {
  const res = await fetch("http://localhost:5000/movies");
  const data = await res.json();
  return data;
};
const getMoviesShowing = async () => {
  const res = await fetch("http://localhost:5000/movies?status=2");
  const data = await res.json();
  return data;
};
const getMoviesComingSoon = async () => {
  const res = await fetch("http://localhost:5000/movies?status=1");
  const data = await res.json();
  return data;
};
const getMovie = async (id: string | number) => {
  const res = await fetch("http://localhost:5000/movies?id=" + id);
  const data = await res.json();
  return data;
};
const slideshow = async () => {
  const res = await fetch("http://localhost:5000/movies?_limit=5&_sort=-date");
  const data = res.json();
  return data;
};

const addFilm = async (data: any) => {
  const res = await fetch("http://localhost:5000/movies", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
};

const deleteFilm = async (id: any) => {
  const res = await fetch(`http://localhost:5000/movies/${id}`, {
    method: 'DELETE',
  });
  if(!res.ok) throw new Error("Xóa thất bại")
  return  id;
};
export {
  getAllMovies,
  getMoviesShowing,
  getMoviesComingSoon,
  getMovie,
  slideshow,
  addFilm,
  deleteFilm
};
