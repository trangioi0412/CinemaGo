"use client";
import { getAllRoom } from "@/app/service/cinema.service";
import styles from "../filmDetail.module.css";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Seat from "@/app/Components/Seat/Seat";
function Seats() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllRoom();
      setData(res);
    };
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;
  const room = data[1]?.room[4]?.diagram;
  const rows = room?.row;
  const colunms = room?.colunm;
  const removedSeat = room?.element_remove;
  const selectedSeat = room?.element_selected;
  const rowLetters = [];
  for (let i = 0; i < rows; i++) {
    rowLetters.push(String.fromCharCode(65 + i));
  }
  let layout = rowLetters?.map((item: any) => {
    let col = Array.from({ length: colunms }, (_, i) => i + 1).map(
      (i: number) => (removedSeat[item]?.includes(i) ? "" : i)
    );

    let colAvail = col?.filter((i) => i !== "").map((_, i) => i + 1);

    let index = 0;
    return { [item]: col.map((c) => (c === "" ? "" : colAvail[index++])) };
  });

  return (
    <div>
      <div className={styles.rows}>
        {layout.map((item: any) => (
          <div key={uuid()} className={styles.colunms}>
            {item[Object.keys(item)[0]].map((i: any) => {
              let seatSelected =
                selectedSeat[Object.keys(item)[0]]?.includes(i);

              return (
                <Seat
                  disabled={seatSelected}
                  key={uuid()}
                  name={i === "" ? "" : `${Object.keys(item)[0]}${i}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Seats;
