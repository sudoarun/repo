import { Plus } from "lucide-react";
import React from "react";
import RatingComp from "../Rating/RatingComp";
import Link from "next/link";

const MovieCard = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/Picture.svg)",
        height: 300,
        width: 240,
      }}
      className="rounded-2xl p-2"
    >
      <div className="flex flex-col h-full justify-between">
        <div className="mt-3 ms-3">
          <h4 className="font-semibold">Loki</h4>
          <RatingComp />
        </div>
        <div>
          <div className="flex justify-between mb-2 items-center">
            <span className="text-sm">3 Ep</span>
            <span className="text-sm">super hero</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="p-3 transParentBtn cursor-pointer">
              <Plus />
            </span>
            <Link
              href={"/home/watch"}
              className="bg-yellow-500 px-10 py-3 rounded-xl text-black font-semibold"
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
