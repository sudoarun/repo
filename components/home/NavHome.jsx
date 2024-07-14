import React from "react";
import style from "./css/navHome.module.css";
const NavHome = () => {
  return (
    <div className={`${style.li_style_none} flex justify-between px-3 py-3 `}>
      <li className="hover:text-yellow-500 cursor-pointer">Movies</li>
      <li className="hover:text-yellow-500 cursor-pointer">TV Shows</li>
      <li className="hover:text-yellow-500 cursor-pointer">Anime</li>
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
