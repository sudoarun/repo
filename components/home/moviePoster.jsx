import config from "@/utils/config";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const MoviePoster = ({ data }) => {
  const bgImg =
    "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/7cqKGQMnNabzOpi7qaIgZvQ7NGV.jpg";
  return (
    <div
      style={{
        backgroundImage: `url(${config.imgLargeBaseURL}${data?.backdrop_path})`,
        backgroundColor: "#1e1818b3",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        height: 300,
      }}
      className="rounded-2xl w-full p-5 flex flex-col justify-between"
    >
      <div>
        <h1 className="font-semibold text-4xl">{data?.title}</h1>
      </div>
      <div className="flex justify-between items-center">
        <button className="transParentBtn px-4 py-2 font-semibold">
          <span className="flex items-center gap-1">
            <Plus />
            <span>Wishlist</span>
          </span>
        </button>
        <Link
          href={`/home/watch?id=${data?.id}`}
          className="px-5 py-2 bg-yellow-500 text-black font-semibold rounded-lg"
        >
          Watch Now
        </Link>
      </div>
    </div>
  );
};

export default MoviePoster;
