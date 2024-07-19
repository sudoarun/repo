"use client";
import Image from "next/image";
import React from "react";
import RatingComp from "../Rating/RatingComp";
import Link from "next/link";

const MoviePosterComp = () => {
  return (
    <Link href={"/home/watch"} style={{ width: "300px", height: "420px" }}>
      <div className="relative">
        <Image
          className="rounded-md"
          height={420}
          width={300}
          src={
            "https://image.tmdb.org/t/p/w500//gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg"
          }
        />
        <span className="absolute top-0 right-1 px-3 rounded-bl-2xl rounded-tr-2xl bg-yellow-500">
          4.3
        </span>
      </div>
      <div>
        <h4 className="font-semibold">Movie Name</h4>
        <RatingComp />
        <h6>11 oct 2022</h6>
        <p className="text-sm">ndks cdskndcsv c vcdsa dcv vvsdacvsd v ds</p>
      </div>
    </Link>
  );
};

export default MoviePosterComp;
