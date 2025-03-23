import style from "./navbar.module.css";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
const links = [
  { id: 1, url: "/movie-schedule", name: "Lịch chiếu" },
  { id: 2, url: "/blog", name: "Tin tức" },
  { id: 3, url: "/cinema", name: "Rạp chiếu" },
  { id: 4, url: "/review", name: "Góc điện ảnh" },
];
const menuLink = [
  {
    id: 1,
    children: [
      {
        url: "/#",
        name: "Phim chiếu hôm nay",
      },
      {
        url: "/#",
        name: "Phim đang chiếu",
      },
      {
        url: "/#",
        name: "Phim sắp chiếu",
      },
    ],
  },
  {
    id: 2,
    children: [
      {
        url: "/#",
        name: "Ưu đãi",
      },
      {
        url: "/#",
        name: "Khuyến mãi",
      },
    ],
  },
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

  {
    id: 4,
    children: [
      {
        url: "/#",
        name: "Thể loại",
      },
      {
        url: "/#",
        name: "Đạo diễn",
      },
      {
        url: "/#",
        name: "Diễn viên",
      },
      {
        url: "/#",
        name: "Bình luận phim",
      },
      {
        url: "/#",
        name: "Blog điện ảnh",
      },
    ],
  },
];
export default function Navbar() {
  return (
    <div className={style.header}>
      <a href="/" className={style.logo}>
        <img src="/logo.png" className={style.imgLogo} alt="" />
      </a>

      <nav>
        <ul className={style.navbar}>
          <li>
            <Link href={"/"}>Trang chủ</Link>
          </li>
          <li>
            <Link href={"/movies"}>Phim chiếu</Link>
          </li>
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.url} className={style.linkNav}>
                {link.name}
                <span>
                  {" "}
                  <IoIosArrowDown fontSize={18} />
                </span>
              </Link>
              <nav className={style.dropdown}>
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
              </nav>
            </li>
          ))}
        </ul>
      </nav>
      <div>
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
      </div>
      <div>
        <Link href={"/login"}>
          <FaRegCircleUser fontSize={"30px"} />
        </Link>
      </div>
    </div>
  );
}
