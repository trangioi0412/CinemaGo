import React from "react";
import { HiChevronDown } from "react-icons/hi2";
import style from "./header.module.css"
import { HiOutlineAnnotation } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";

export default function Header() {
  return <div>
      <div className={style.header}>
        <div className={style.searchBar}>
          <input type="text" placeholder="  Search ..."  className={style.searchInput}/>
          <HiOutlineSearch className={style.searchIcon} />
          
        </div>
        <div className={style.userInfo}>
          <div className={style.notifications}>
            <HiOutlineBell fontSize={'30px'}/>
            <span className={style.badge}>3</span>
          </div>
          <div className={style.messages}>
            <HiOutlineAnnotation fontSize={'30px'} />
            <span className={`${style.badge} ${style.mess}`}>3</span>
          </div>
          <div className={style.profile}>
            <HiUserCircle fontSize={'30px'}/>
            <span>
              TheQuang
            </span>
            <HiChevronDown />
          </div>
        </div>
      </div>
    </div>
}
