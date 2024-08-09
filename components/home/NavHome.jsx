import React from "react";
import style from "./css/navHome.module.css";
import Link from "next/link";
const NavHome = () => {
  return (
    <div
      className={`${style.li_style_none} flex justify-between px-3 py-3 items-center`}
    >
      <div className="flex gap-10">
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
          <Link href={"/home/tv-shows"} className="py-2">
            TV Shows
          </Link>
        </li>
      </div>

      <div className="w-[400px]">
        <input
          style={{ background: "#21242D" }}
          className="rounded-md ps-2 py-2 outline-none w-full"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default NavHome;
