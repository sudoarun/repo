import React from "react";
import style from "./css/navHome.module.css";
import Link from "next/link";
const NavHome = () => {
  return (
    <div
      className={`${style.li_style_none} flex justify-between px-3 py-3 items-center`}
    >
      <li
        className={`hover:text-yellow-500 cursor-pointer ${style.hover_underline}`}
      >
        <Link href={"/home/movie"} className="py-2">
          Movies
        </Link>
      </li>
      <li
        className={`hover:text-yellow-500 cursor-pointer ${style.hover_underline}`}
      >
        <Link href={"/home/movie"} className="py-2">
          TV Shows
        </Link>
      </li>
      <li
        className={`hover:text-yellow-500 cursor-pointer ${style.hover_underline}`}
      >
        <Link href={"/home/movie"} className="py-2">
          Anime
        </Link>
      </li>
      <li>
        <input
          style={{ background: "#21242D" }}
          className="rounded-md ps-2 py-2 outline-none"
          placeholder="Search"
        />
      </li>
    </div>
  );
};

export default NavHome;
