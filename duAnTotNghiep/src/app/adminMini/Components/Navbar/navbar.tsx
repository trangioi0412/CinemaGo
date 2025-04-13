import React from "react";
import style from "./navbar.module.css"
import Link from "next/link";
const NavMini = () => {
  return <div className={style.sidebar}>
            <div className={style.logo}>
                <img src="/img/logo/logo.png" alt="TickNow Logo"/>
            </div>
            <div className={style.link}>
                <Link href="adminMini/dashboard" className={`${style.navLink} ${style.b}`}>Thống kê </Link>
                <Link href="adminMini/film" className={style.navLink}>Quản lí film </Link>
                <Link href="adminMini/ticket" className={style.navLink}>Quản lí ticket </Link>
                <Link href="adminMini/room" className={style.navLink}>Quản lí room </Link>
                <Link href="adminMini/showtime" className={`${style.navLink} ${style.c}`}>Quản lí xuất chiếu </Link>
            </div>
        </div>
};

export default NavMini;
