export const getAllMovies= async()=>{
    const res = await fetch("http://localhost:5000/movies");
    const data = await res.json();
    return data
}