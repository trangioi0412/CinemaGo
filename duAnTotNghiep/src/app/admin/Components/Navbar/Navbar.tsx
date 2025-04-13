"use client";
import React from "react";
import style from "./nav.module.css";
import Link from "next/link";

import { usePathname } from "next/navigation";
import linkInterface from "../../links/links";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useToggleNav } from "../../context/ToggleNavContext";

const Nav = ({ links }: { links: linkInterface[] }) => {
  const pathname = usePathname();
  const { toggle, setToggle } = useToggleNav();
  return (
    <div className={`${style.sidebar}  ${toggle && style.active}`}>
      <div className={style.logo}>
        <img src="/img/logo/logo.png" alt="TickNow Logo" />
        <span>TICKNOW</span>
      </div>
      <div className={`${style.links}  `}>
        {links.map((l: any) => (
          <Link
            key={l.id}
            className={`${style.link} ${pathname === l.url && style.active}`}
            href={l.url}
          >
            <span>{l.icon}</span> <p>{l.title}</p>
          </Link>
        ))}
      </div>
      <div className={style.toggle_sidebar}>
        <button onClick={() => setToggle(!toggle)}>
          <span>
            {toggle ? (
              <MdKeyboardDoubleArrowLeft />
            ) : (
              <MdKeyboardDoubleArrowRight />
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Nav;
