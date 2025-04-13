import React from 'react'
import style from './table.module.css'
import { MdDeleteForever } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
const AcitonTable = () => {
  return (
    <div className={style["btnAction"]}>
                            <button className={style["btnDelete"]}><MdDeleteForever /></button> 
                            <button className={style["btnEdit"]}><FaRegEdit /></button>
                          </div>
  )
}
export default AcitonTable;
