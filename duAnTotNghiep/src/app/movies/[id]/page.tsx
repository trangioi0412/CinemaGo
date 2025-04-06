import { getMovie } from "@/app/service/movie.service";
import styles from "./filmDetail.module.css";
async function Detail({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const { id } = await params;
  const data = await getMovie(id);
  console.log(data);

  return <div className={`wrapper`}></div>;
}
// Tên: {data.name}
export default Detail;
