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
  const res = await fetch("http://localhost:5000/movies/" + id);
  const data = await res.json();
  return data;
};
export { getAllMovies, getMoviesShowing, getMoviesComingSoon, getMovie };
