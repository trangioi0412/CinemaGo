"use client";
import React, { useState } from "react";
import s from "./table.module.css";
import Pagination from "../Pagination/Pagination";
interface Column {
  key: string;
  title: string;
  render?: (row: any) => React.ReactNode;
}

const Table = ({
  column,
  data,
  rowsPerPage,
}: {
  column: Column[];
  data: any[];
  rowsPerPage: number;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const from = (currentPage - 1) * rowsPerPage + 1;
  const to = Math.min(currentPage * rowsPerPage, data.length);

  return (
    <>
      <table className={s.table}>
        <thead>
          <tr>
            <th>#</th>
            {column.map((col) => (
              <th key={col.key}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={row.id}>
              <td>{index + from}</td>
              {column.map((col) => (
                <td key={col.key}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        from={from}
        to={to}
        total={data.length}
      />
    </>
  );
};

export default Table;
