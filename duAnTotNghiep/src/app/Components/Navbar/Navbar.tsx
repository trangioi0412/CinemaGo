"use client";
import { usePathname } from "next/navigation";
import style from "./navbar.module.css";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
const links = [
  { id: 1, url: "/home", name: "Trang chủ" },
  { id: 2, url: "/moives", name: "Phim chiếu" },
  { id: 3, url: "/movie-schedule", name: "Lịch chiếu" },
  { id: 4, url: "/cinema", name: "Rạp chiếu" },
];
const menuLink = [
  {
    id: 3,
    children: [
      {
        url: "/#",
        name: "CGV",
      },
      {
        url: "/#",
        name: "Galaxy cinema",
      },
      {
        url: "/#",
        name: "Beta cinema",
      },
      {
        url: "/#",
        name: "Mega CS",
      },
      {
        url: "/#",
        name: "BHD Star",
      },
      {
        url: "/#",
        name: "Lotte cinema",
      },
    ],
  },
];
export default function Navbar() {
  const pathName = usePathname();
  return (
    <header className={style["header-container"]}>
      <div className={`container ${style.header}`}>
        <a href="/" className={style.logo}>
          <img src="/logo.png" className={style.imgLogo} alt="" />
        </a>
        <nav>
          <ul className={style.navbar}>
            {links.map((link) => (
              <li
                key={link.id}
                className={`${pathName === link.url && style.active}`}
              >
                <Link href={link.url} className={` ${style["linkNav"]}`}>
                  {link.name}
                  {/* <span>
                    {" "}
                    <IoIosArrowDown fontSize={18} />
                  </span> */}
                </Link>
                {/* <nav className={style.dropdown}>
                  <ul>
                    {menuLink.map((i) => {
                      if (i.id === link.id) {
                        return i.children.map((l) => (
                          <li key={l.name}>
                            <Link
                              href={l.url}
                              key={l.name}
                              className={style.linkMenu}
                            >
                              {l.name}
                            </Link>
                          </li>
                        ));
                      }
                    })}
                  </ul>
                </nav> */}
              </li>
            ))}
          </ul>
        </nav>
        {/* <div> */}
        <div className={style["search-container"]}>
          <input
            className={style["search-box"]}
            type="text"
            placeholder="Tìm kiếm"
          />
          <div className={style["search-icon"]}>
            <IoSearchOutline />
          </div>
        </div>
        {/* </div> */}
        <div className={style["login-container"]}>
          <Link href={"/login"} className={style.login}>
            <span>
              <LuUserRound />
            </span>
            Đăng nhập
          </Link>
        </div>
      </div>
    </header>
  );
}
