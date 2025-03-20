import React from "react";
import styles from "./order.module.css"
import Section from "../Components/Section/Section";
export default function Order() {
  return (
    <div className={`container ${styles['container']}`}>
      
      <Section title="Phim đang chiếu" filter={(movies)=>movies.status === 1}/> 
      <Section title="Phim sắp chiếu" filter={(movies)=>movies.status === 2}/> 

       
    </div>
  )
}
