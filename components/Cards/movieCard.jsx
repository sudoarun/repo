import { Plus } from "lucide-react";
import React from "react";
import RatingComp from "../Rating/RatingComp";
import Link from "next/link";
import config from "@/utils/config";

const MovieCard = ({ data }) => {
  const { title, poster_path, id } = data;
  return (
    <div
      style={{
        backgroundImage: `url(${config.imgBaseURL}${poster_path})`,
        height: 300,
        width: "auto",
        backgroundColor: "#1e1818b3",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
      }}
      className="rounded-2xl p-2"
    >
      <div className="flex flex-col h-full justify-between">
        <div className="mt-3 ms-3">
          <h4 className="font-semibold sm:text-sm md:text-xl">{title}</h4>
          <RatingComp />
        </div>
        <div>
          <div className="flex justify-between mb-2 items-center">
            <span className="text-sm">3 Ep</span>
            <span className="text-sm">super hero</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="p-3 transParentBtn cursor-pointer">
              <Plus />
            </span>
            <Link
              href={`/home/watch?id=${id}`}
              className="bg-yellow-500 w-full text-center py-3 rounded-xl text-black font-semibold"
            >
              More info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
