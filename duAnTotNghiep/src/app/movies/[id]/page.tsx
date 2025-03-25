import { getMovie } from "@/app/service/movie.service";
async function Detail({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const { id } = await params;
  const data = await getMovie(id);

  return <div>Tên: {data.name}</div>;
}

export default Detail;
