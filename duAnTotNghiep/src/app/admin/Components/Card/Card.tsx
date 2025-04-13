import React, { ReactNode } from "react";
import style from "./card.module.css";

const Card = ({ children }: { children: ReactNode }) => {
  return <div className={style["card"]}>{children}</div>;
};

export default Card;
