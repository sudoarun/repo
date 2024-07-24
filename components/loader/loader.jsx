import React from "react";
import style from "./loader.module.css";
const Loader = () => {
  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ height: 500 }}
    >
      <div className={`${style.loader}`}></div>
    </div>
  );
};

export default Loader;
