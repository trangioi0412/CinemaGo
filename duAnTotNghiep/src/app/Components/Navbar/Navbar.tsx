"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import UserForm from "../UserForm/UserForm";
import { AppContext } from "@/app/Context/context";
const links = [
  { id: 1, url: "/home", name: "Trang chủ" },
  { id: 2, url: "/movies", name: "Phim chiếu" },
  { id: 3, url: "/movie-schedule", name: "Lịch chiếu" },
  { id: 4, url: "/cinema", name: "Rạp chiếu" },
];
const menuLink = [
  {
    id: 3,
    children: [
      { url: "/#", name: "CGV",},
      { url: "/#", name: "Galaxy cinema",},
      { url: "/#", name: "Beta cinema",},
      { url: "/#", name: "Mega CS",},
      { url: "/#", name: "BHD Star",},
      { url: "/#", name: "Lotte cinema",},
    ],
  }
];
export default function Navbar() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAuth phải được sử dụng bên trong AuthProvider");
  }
  const { open, setOpen } = context;

  const pathName = usePathname();
  const [activeHeader, setActiveHeader] = useState(false);

  const [username, setUsername] = useState<{
    name: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    const handleChangeHeader = () => {
      setActiveHeader(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleChangeHeader);
    return () => {
      window.removeEventListener("scroll", handleChangeHeader);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("user");

    if (storedUsername) {
      try {
        setUsername(JSON.parse(storedUsername));
      } catch (error) {
        console.log(error);
        setUsername(null);
      }
    } else {
      setUsername(null);
    }
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUsername(null);
  };
  return (
    <>
      <header className={`${activeHeader && "activeHeader"} ${style["header-container"]}`}>
        <div className={`container ${style.header}`}>
          <a href="/" className={style.logo}>
            <img src="/img/logo/logo.png" className={style.imgLogo} alt="" />
          </a>
          <nav>
            <ul className={style.navbar}>
              {links.map((link) => (
                <li key={link.id} className={`${pathName === link.url && style.active}`}>
                  <Link href={link.url} className={` ${style["linkNav"]}`}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={style["search-container"]}>
            <input className={style["search-box"]} type="text" placeholder="Tìm kiếm"/>
            <div className={style["search-icon"]}>
              <IoSearchOutline/>
            </div>
          </div>
          <div className={style["login-container"]}>
            {username ? (
              <div className={style.info}>
                <Link href={"#"} className={` ${style["linkNav"]}`}>
                  {username.name}
                </Link>
                <button onClick={handleLogout}>Đăng xuất</button>
              </div>
            ) : (
              <Link href={"#"} className={style.login} onClick={() => setOpen(true)}>
                <span> <LuUserRound /></span>
                Đăng nhập
              </Link>
            )}
          </div>
        </div>
      </header>
      {open && <UserForm isOpen={() => setOpen(false)} />}
    </>
  );
}

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
<<<<<<< HEAD


                                      {/* <span>
                      {" "}
                      <IoIosArrowDown fontSize={18} />
                    </span> */}
=======
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
            {username ? (
              <div className={style.info}>
                <Link href={"#"} className={` ${style["linkNav"]}`}>
                  {username.name}
                </Link>
                <button onClick={handleLogout}>Đăng xuất</button>
              </div>
            ) : (
              <Link
                href={"#"}
                className={style.login}
                onClick={() => setOpen(true)}
              >
                <span>
                  <LuUserRound />
                </span>
                Đăng nhập
              </Link>
            )}
          </div>
        </div>
      </header>
      {open && <UserForm />}
    </>
  );
}
>>>>>>> 8ef97d96391f6b62043c0e94d6d60c524ef1cdda
