"use client";

import {
  Clock,
  Compass,
  Home,
  LogOut,
  Settings,
  SquareCheck,
  SquarePlus,
  Star,
} from "lucide-react";
import style from "./sideBar.module.css";
import React, { useState } from "react";

const SideBar = () => {
  const [active, setActive] = useState("");
  const menu = [
    {
      compName: <Home />,
      label: "Home",
    },
    {
      compName: <Compass />,
      label: "Discover",
    },
    {
      compName: <Clock />,
      label: "Recents",
    },
    {
      compName: <Star />,
      label: "Top Rated",
    },
    {
      compName: <SquarePlus />,
      label: "Wishlist",
    },
    {
      compName: <SquareCheck />,
      label: "Completed",
    },
    {
      compName: <Settings />,
      label: "Settings",
    },
    {
      compName: <LogOut />,
      label: "Log Out",
    },
  ];
  return (
    <div className=" bg-black text-white flex-auto sticky top-8 w-full">
      <div className=" mb-5">
        <img src="/Logo.svg" className="ms-2" />
      </div>
      <div>
        <span className="pb-5 block ps-4">Menu</span>
        <div className="li_style_none flex flex-col gap-3 ps-4">
          {menu.map((el) => (
            <li
              key={el.label}
              className={`cursor-pointer hover:text-yellow-500 hover:border-r-4 border-yellow-500 py-2 ${
                active === el.label ? style.activeSideBarMenu : ""
              }`}
              onClick={() => setActive(el.label)}
            >
              <span className="flex gap-2">
                {el.compName} {el.label}
              </span>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
