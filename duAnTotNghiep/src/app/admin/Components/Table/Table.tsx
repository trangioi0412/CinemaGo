import React from "react";
import s from "./table.module.css";
interface Column {
  key: string;
  title: string;
  render?: (row: any) => React.ReactNode;
}

const Table = ({ column, data }: { column: Column[]; data: any[] }) => {
  return (
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
        {data.map((row, index) => (
          <tr key={row.id}>
            <td>{index + 1}</td>
            {column.map((col) => (
              <td key={col.key}>
                {col.render ? col.render(row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
