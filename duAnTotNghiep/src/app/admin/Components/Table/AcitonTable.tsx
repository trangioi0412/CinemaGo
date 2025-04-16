import React from 'react'
import style from './table.module.css'
import { MdDeleteForever } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
const AcitonTable = ({handleDelete, handleEdit}:{handleDelete: () => void, handleEdit: ()=>void} ) => {
  return (
    <div className={style["btnAction"]}>
                            <button className={style["btnDelete"]} onClick={handleDelete}><MdDeleteForever /></button> 
                            <button className={style["btnEdit"]} onClick={handleEdit}><FaRegEdit /></button>
                          </div>
  )
}
export default AcitonTable;
