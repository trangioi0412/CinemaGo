import React from "react";
import style from "./nav.module.css";
import Link from "next/link";
const Nav = () => {
  return <div className={style.sidebar}>
            <div className={style.logo}>
                <img src="/img/logo/logo.png" alt="TickNow Logo"/>
            </div>
            <Link href={"/admin/adminGlobal/dashboard"}>Thống Kê</Link>
            <Link href={"/admin/adminGlobal/user"}>Quản Lý User</Link>
            <Link href={"/admin/adminGlobal/brand"}>Quản Lý Brand</Link>
            <Link href={"/admin/adminGlobal/payments"}>Quản Lý Payments</Link>
            <Link href={"/admin/adminGlobal/vouchers"}>Quản Lý Vouchers</Link>
        </div>
};

export default Nav;
