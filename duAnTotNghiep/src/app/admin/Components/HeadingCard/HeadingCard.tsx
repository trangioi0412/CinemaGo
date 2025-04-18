import React, { ReactNode } from "react";
import style from "./style.module.css";
const HeadingCard = ({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) => {
  return (
    <div className={style.heading}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default HeadingCard;
