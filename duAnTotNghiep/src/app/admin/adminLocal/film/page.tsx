import React from "react";
import Card from "../../Components/Card/Card";
import HeadingCard from "../../Components/HeadingCard/HeadingCard";
import OptionTable from "../../Components/OptionTable/OptionTable";
import Table from "../../Components/Table/Table";
import Pagination from "../../Components/Pagination/Pagination";
const column = [
  {
    key: "filmname",
    title: "Tên phim",
  },
];
const data = [
  {
    id: 1,
    filmname: "Phim sét",
  },
];
const Film = () => {
  return (
    <Card>
      <HeadingCard title="danh sách phim"></HeadingCard>
      <OptionTable />
      <Table data={data} column={column} />
      <Pagination />
    </Card>
  );
};

export default Film;
