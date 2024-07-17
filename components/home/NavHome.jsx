import React from "react";
import style from "./css/navHome.module.css";
const NavHome = () => {
  return (
    <div
      className={`${style.li_style_none} flex justify-between px-3 py-3 items-center`}
    >
      <li
        className={`hover:text-yellow-500 cursor-pointer ${style.hover_underline}`}
      >
        <span className="py-2">Movies</span>
      </li>
      <li
        className={`hover:text-yellow-500 cursor-pointer ${style.hover_underline}`}
      >
        <span className="py-2">TV Shows</span>
      </li>
      <li
        className={`hover:text-yellow-500 cursor-pointer ${style.hover_underline}`}
      >
        <span className="py-2">Anime</span>
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
