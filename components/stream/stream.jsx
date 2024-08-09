import React from "react";

const Stream = ({ id }) => {
  if (!id) {
    return () => {
      <div>
        <h1>ID Not found</h1>
      </div>;
    };
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[70%] h-300 sm:h-[65%]">
        <iframe
          src={`https://vidsrc.me/${id}`}
          width="100%"
          height="100%"
          allowFullScreen
          referrerpolicy="origin"
          className="rounded-2xl"
        ></iframe>
      </div>
    </div>
  );
};

export default Stream;
